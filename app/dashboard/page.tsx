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

  const { topicData, overallStats, focusAreas, topTopics } = useMemo(() => {
    if (!Array.isArray(testResults) || testResults.length === 0) {
      return {
        topicData: [],
        overallStats: { correct: 0, incorrect: 0, percent: 0 },
        focusAreas: [],
        topTopics: [],
      };
    }

    const topicData =
      Array.isArray(topicAggregates) && topicAggregates.length > 0
        ? topicAggregates.map((t: any) => ({
            topic: t.topic,
            percent: t.percent,
            correct: t.correct,
            total: t.total,
          }))
        : [];

    const totalScore = testResults.reduce((s, r) => s + (r.score ?? 0), 0);
    const totalTotal = testResults.reduce((s, r) => s + (r.total ?? 0), 0);
    const percent =
      totalTotal > 0 ? Math.round((totalScore / totalTotal) * 100) : 0;

    const sorted = [...topicData].sort((a, b) => a.percent - b.percent);
    const focusAreas = sorted.slice(0, 3);
    const topTopics = sorted.slice(-3).reverse();

    return {
      topicData,
      overallStats: {
        correct: totalScore,
        incorrect: totalTotal - totalScore,
        percent,
      },
      focusAreas,
      topTopics,
    };
  }, [testResults, topicAggregates]);

  return (
    <div className="container mx-auto py-16 px-4 space-y-10">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.username ?? "student"} 👋 Here’s your progress
          summary.
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
          title="Best Topic"
          value={topicData.length ? topicData.at(-1)?.topic : "—"}
          icon="🏆"
          color="bg-yellow-500/10 text-yellow-600"
          alignLeft
        />
        <SummaryCard
          title="Needs Work"
          value={focusAreas[0]?.topic ?? "—"}
          icon="🎯"
          color="bg-red-500/10 text-red-600"
          alignLeft
        />
      </div>

      {/* --- MAIN VISUALS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: Topic Performance Radar Chart */}
        <div className="col-span-2 bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-xl font-medium mb-4">Performance by Topic</h2>
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
                    formatter={(value: number, name, props) => [
                      `${value}%`,
                      "Accuracy",
                    ]}
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

        {/* RIGHT: Overall Accuracy Pie */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-medium mb-4">Overall Accuracy</h2>
          {overallStats.correct + overallStats.incorrect > 0 ? (
            <div className="flex flex-col items-center justify-center h-[240px]">
              <div className="relative w-40 h-40 rounded-full bg-green-500/10 flex items-center justify-center">
                <span className="text-4xl font-bold text-green-600">
                  {overallStats.percent}%
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                {overallStats.correct} correct / {overallStats.incorrect}{" "}
                incorrect
              </p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              No test results yet.
            </p>
          )}
        </div>
      </div>

      {/* --- STRENGTHS & FOCUS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Strengths */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-medium mb-3">Skill Strengths 💪</h2>
          {topTopics.length > 0 ? (
            <ul className="space-y-3">
              {topTopics.map((t: any) => (
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
              Take a few tests to unlock your top skill areas.
            </p>
          )}
        </div>

        {/* Focus Areas */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-medium mb-3">Focus Areas 🎯</h2>
          {focusAreas.length > 0 ? (
            <ul className="space-y-3">
              {focusAreas.map((f: any) => (
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
              You’re doing great — no weak topics detected yet!
            </p>
          )}
        </div>
      </div>

      {/* --- RECENT TESTS --- */}
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
        <h2 className="text-lg font-medium mb-4">Recent Tests 🧾</h2>
        {Array.isArray(testResults) && testResults.length > 0 ? (
          <ul className="divide-y divide-border">
            {testResults
              .slice()
              .sort((a: any, b: any) => b.createdAt - a.createdAt)
              .slice(0, 5)
              .map((r: any) => {
                const percent =
                  r.total && !Number.isNaN(r.score)
                    ? Math.round((r.score / r.total) * 100)
                    : 0;
                const date = new Date(
                  r.createdAt ?? r._creationTime ?? 0
                ).toLocaleDateString();
                return (
                  <li
                    key={r._id}
                    className="flex justify-between items-center py-3"
                  >
                    <div>
                      <div className="font-medium">{r.topic}</div>
                      <div className="text-sm text-muted-foreground">
                        {r.grade ?? "—"} • {date}
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        percent >= 80
                          ? "bg-green-500/10 text-green-600"
                          : percent >= 60
                          ? "bg-yellow-500/10 text-yellow-600"
                          : "bg-red-500/10 text-red-600"
                      }`}
                    >
                      {percent}%
                    </span>
                  </li>
                );
              })}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">
            No tests taken yet. Start your first diagnostic!
          </p>
        )}
      </div>
    </div>
  );
}

// --- Small summary card component ---
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
