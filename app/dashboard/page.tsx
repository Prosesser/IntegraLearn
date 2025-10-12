"use client";

import { useMemo } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// --- Topics by Grade ---
const GRADE_TOPICS: Record<string, string[]> = {
  "Grade 9": [
    "Number Sense & Algebra",
    "Linear Relations",
    "Measurement & Geometry",
    "Data Management",
  ],
  "Grade 10": [
    "Quadratic Functions",
    "Trigonometry",
    "Systems of Equations",
    "Exponents & Powers",
  ],
  "Grade 11": [
    "Advanced Functions",
    "Sequences & Series",
    "Analytic Geometry",
    "Counting & Probability",
  ],
  "Grade 12": [
    "Exponents & Logarithms",
    "Trigonometry",
    "Functions, Equations, and Polynomials",
    "Analytic Geometry",
    "Sequences & Series",
    "Euclidean Geometry",
    "Counting & Probability",
    "Properties of Numbers",
  ],
};

export default function DashboardPage() {
  const { user } = useUser();

  const internalUser = useQuery(
    api.users.getByClerkId,
    user ? { clerkId: user.id } : "skip"
  );
  const testResults = useQuery(
    api.testResults.getByUser,
    internalUser ? { userId: internalUser._id } : "skip"
  );
  const topicAggregates = useQuery(
    api.topicResults.getAggregatesForUser,
    internalUser ? { userId: internalUser._id } : "skip"
  );

  const { topicData, overallStats, strengths, focusAreas, activeGrade } =
    useMemo(() => {
      if (!Array.isArray(testResults) || testResults.length === 0) {
        return {
          topicData: [],
          overallStats: { correct: 0, incorrect: 0, percent: 0 },
          strengths: [],
          focusAreas: [],
          activeGrade: "Grade 9",
        };
      }

      // 🧮 Get the most recent test and its grade
      const latestTest = [...testResults].sort(
        (a, b) =>
          (b.createdAt ?? b._creationTime) - (a.createdAt ?? a._creationTime)
      )[0];
      const activeGrade = latestTest.grade ?? "Grade 9";
      const gradeTopics = GRADE_TOPICS[activeGrade] ?? [];

      // 🧩 Get topic stats for that grade
      const rawTopicData =
        Array.isArray(topicAggregates) && topicAggregates.length > 0
          ? topicAggregates.map((t: any) => ({
              topic: t.topic,
              percent: t.percent,
              correct: t.correct,
              total: t.total,
            }))
          : [];

      const topicData = gradeTopics.map((topic) => {
        const found = rawTopicData.find((t) => t.topic === topic);
        return found ?? { topic, percent: 0, correct: 0, total: 0 };
      });

      // 🧠 Overall stats
      const totalScore = testResults.reduce((s, r) => s + (r.score ?? 0), 0);
      const totalTotal = testResults.reduce((s, r) => s + (r.total ?? 0), 0);
      const percent =
        totalTotal > 0 ? Math.round((totalScore / totalTotal) * 100) : 0;

      // 💪 Separate strengths (≥50%) and focus (<50%)
      const strengths = topicData
        .filter((t) => t.percent >= 50)
        .sort((a, b) => b.percent - a.percent)
        .slice(0, 3);

      const focusAreas = topicData
        .filter((t) => t.percent <= 50)
        .sort((a, b) => a.percent - b.percent)
        .slice(0, 3);

      return {
        topicData,
        overallStats: {
          correct: totalScore,
          incorrect: totalTotal - totalScore,
          percent,
        },
        strengths,
        focusAreas,
        activeGrade,
      };
    }, [testResults, topicAggregates]);

  return (
    <div className="container mx-auto py-16 px-4 space-y-10">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.firstName ?? "student"} 👋 Here’s your progress
          summary for <span className="font-semibold">{activeGrade}</span>.
        </p>
      </div>

      {/* --- SUMMARY CARDS --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SummaryCard
          title="Overall Accuracy"
          value={`${overallStats.percent}%`}
          icon="📊"
          color="bg-green-500/10 text-green-600"
        />
        <SummaryCard
          title="Top Strength"
          value={strengths[0]?.topic ?? "—"}
          icon="🏆"
          color="bg-yellow-500/10 text-yellow-600"
          alignLeft
        />
        <SummaryCard
          title="Main Focus Area"
          value={focusAreas[0]?.topic ?? "—"}
          icon="🎯"
          color="bg-red-500/10 text-red-600"
          alignLeft
        />
      </div>

      {/* --- MAIN CHART --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2 bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-xl font-medium mb-4">
            {activeGrade} – Performance by Topic
          </h2>
          {topicData.length > 0 ? (
            <div style={{ height: 340 }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={topicData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="topic" />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(30,30,30,0.9)",
                      borderRadius: "10px",
                      border: "none",
                      color: "#fff",
                    }}
                    formatter={(value: number) => [`${value}%`, "Accuracy"]}
                    labelFormatter={(label) => `Topic: ${label}`}
                  />
                  <Radar
                    name="Accuracy"
                    dataKey="percent"
                    stroke="#0ea5e9"
                    fill="#0ea5e9"
                    fillOpacity={0.5}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              No topic data yet — take a test to see your chart.
            </p>
          )}
        </div>

        {/* --- OVERALL ACCURACY RING --- */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border flex flex-col items-center justify-center">
          <h2 className="text-lg font-medium mb-4">Overall Accuracy</h2>
          <div className="relative w-40 h-40 rounded-full bg-green-500/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-green-600">
              {overallStats.percent}%
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {overallStats.correct} correct / {overallStats.incorrect} incorrect
          </p>
        </div>
      </div>

      {/* --- STRENGTHS & FOCUS AREAS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Strengths */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-medium mb-3">Skill Strengths 💪</h2>
          {strengths.length > 0 ? (
            <ul className="space-y-3">
              {strengths.map((t) => (
                <li key={t.topic}>
                  <div className="flex justify-between">
                    <span className="font-medium">{t.topic}</span>
                    <span className="text-sm text-muted-foreground">
                      {t.percent}%
                    </span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full mt-1">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${t.percent}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              You haven’t built any strong topics yet — keep practicing!
            </p>
          )}
        </div>

        {/* Focus Areas */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-medium mb-3">Focus Areas 🎯</h2>
          {focusAreas.length > 0 ? (
            <ul className="space-y-3">
              {focusAreas.map((f) => (
                <li key={f.topic}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{f.topic}</span>
                    <span className="text-sm text-muted-foreground">
                      {f.percent}%
                    </span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full mt-1">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${f.percent}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    <Link
                      href={`/practice?topic=${encodeURIComponent(f.topic)}`}
                      className="text-primary underline"
                    >
                      Practice now
                    </Link>{" "}
                    to strengthen this area.
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              Nice work! No weak areas detected.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Summary Card ---
function SummaryCard({
  title,
  value,
  icon,
  color,
  alignLeft = false,
}: {
  title: string;
  value: string | number;
  icon: string;
  color: string;
  alignLeft?: boolean;
}) {
  return (
    <div className="p-5 rounded-xl bg-card border border-border flex flex-col justify-between">
      <div
        className={`flex ${
          alignLeft ? "flex-row-reverse justify-between" : "justify-between"
        } items-center mb-2`}
      >
        <span className={`text-2xl ${color}`}>{icon}</span>
        <span className="text-2xl font-semibold">{value}</span>
      </div>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  );
}
