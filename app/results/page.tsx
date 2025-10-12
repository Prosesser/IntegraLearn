"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTest } from "@/lib/test-context";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { Authenticated, Unauthenticated } from "convex/react";
import { useConvexAuth } from "convex/react";

export default async function ResultsPage() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">Checking authentication...</p>
      </div>
    );

  if (!isAuthenticated)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
        <h1 className="text-2xl font-bold">Please sign in to continue</h1>
        <Link
          href="/sign-in"
          className="mt-4 bg-primary text-white rounded-full px-4 py-2 hover:bg-primary/90 transition"
        >
          Sign In
        </Link>
      </div>
    );

  const router = useRouter();
  const { results, resetTest } = useTest();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!results) {
      router.push("/test");
    }
  }, [results, router]);

  if (!mounted || !results) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">Loading results...</p>
        </div>
      </div>
    );
  }

  // Prepare data for chart
  const chartData = Object.entries(results).map(([topic, data]) => ({
    topic: topic.length > 15 ? topic.substring(0, 15) + "..." : topic,
    fullTopic: topic,
    percentage: data.percentage,
    correct: data.correct,
    total: data.total,
  }));

  // Calculate overall performance
  const totalCorrect = Object.values(results).reduce(
    (sum, data) => sum + data.correct,
    0
  );
  const totalQuestions = Object.values(results).reduce(
    (sum, data) => sum + data.total,
    0
  );
  const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);

  // Identify strengths and weaknesses
  const strengths = chartData
    .filter((d) => d.percentage >= 70)
    .map((d) => d.fullTopic);
  const needsWork = chartData
    .filter((d) => d.percentage < 70)
    .map((d) => d.fullTopic);

  const getBarColor = (percentage: number) => {
    if (percentage >= 80) return "hsl(var(--chart-1))";
    if (percentage >= 60) return "hsl(var(--chart-2))";
    return "hsl(var(--chart-3))";
  };

  const getPerformanceIcon = (percentage: number) => {
    if (percentage >= 70)
      return <TrendingUp className="h-5 w-5 text-green-500" />;
    if (percentage >= 50) return <Minus className="h-5 w-5 text-yellow-500" />;
    return <TrendingDown className="h-5 w-5 text-red-500" />;
  };

  const handleRetake = () => {
    resetTest();
    router.push("/test");
  };

  return (
    <>
      <Authenticated>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Your Test Results
              </h1>
              <p className="text-lg text-muted-foreground">
                Here's how you performed across different math topics
              </p>
            </div>

            {/* Overall Score */}
            <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
                    <span className="text-5xl font-bold text-primary">
                      {overallPercentage}%
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Overall Score</h2>
                  <p className="text-muted-foreground">
                    You answered {totalCorrect} out of {totalQuestions}{" "}
                    questions correctly
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Performance Chart */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Performance by Topic</CardTitle>
                <CardDescription>
                  Your score for each math topic
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        className="stroke-muted"
                      />
                      <XAxis
                        dataKey="topic"
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        className="text-xs"
                        tick={{ fill: "hsl(var(--muted-foreground))" }}
                      />
                      <YAxis
                        domain={[0, 100]}
                        tick={{ fill: "hsl(var(--muted-foreground))" }}
                        label={{
                          value: "Score (%)",
                          angle: -90,
                          position: "insideLeft",
                        }}
                      />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                                <p className="font-semibold mb-1">
                                  {data.fullTopic}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Score: {data.percentage}% ({data.correct}/
                                  {data.total})
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="percentage" radius={[8, 8, 0, 0]}>
                        {chartData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={getBarColor(entry.percentage)}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Breakdown */}
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              {/* Strengths */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Your Strengths
                  </CardTitle>
                  <CardDescription>
                    Topics where you're performing well
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {strengths.length > 0 ? (
                    <ul className="space-y-2">
                      {strengths.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-center gap-2 p-2 rounded-lg bg-green-500/10"
                        >
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <span className="font-medium">{topic}</span>
                          <span className="ml-auto text-sm text-green-600 dark:text-green-400">
                            {results[topic].percentage}%
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Keep practicing to identify your strengths!
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Areas for Improvement */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-orange-500" />
                    Areas for Improvement
                  </CardTitle>
                  <CardDescription>
                    Topics that need more practice
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {needsWork.length > 0 ? (
                    <ul className="space-y-2">
                      {needsWork.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-center gap-2 p-2 rounded-lg bg-orange-500/10"
                        >
                          <div className="h-2 w-2 rounded-full bg-orange-500" />
                          <span className="font-medium">{topic}</span>
                          <span className="ml-auto text-sm text-orange-600 dark:text-orange-400">
                            {results[topic].percentage}%
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Great job! You're performing well across all topics.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Summary Text */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {strengths.length > 0 && (
                    <>
                      You're showing strong performance in{" "}
                      <strong>{strengths.join(", ")}</strong>.{" "}
                    </>
                  )}
                  {needsWork.length > 0 && (
                    <>
                      Focus your study efforts on{" "}
                      <strong>{needsWork.join(", ")}</strong> to improve your
                      overall understanding.{" "}
                    </>
                  )}
                  {needsWork.length === 0 && strengths.length === 0 && (
                    <>
                      Keep practicing to build your skills across all topics.{" "}
                    </>
                  )}
                  Check out our curated resources to help you master these
                  concepts.
                </p>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="flex-1 group">
                <Link href="/resources">
                  View Resources
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleRetake}
                className="flex-1 bg-transparent"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Retake Test
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex-1 bg-transparent"
              >
                <Link href="/dashboard">View Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            Please sign in to continue
          </h1>
          <p className="text-muted-foreground">
            You need an account to access this page.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/">Sign In</Link>
          </Button>
        </div>
      </Unauthenticated>
    </>
  );
}
