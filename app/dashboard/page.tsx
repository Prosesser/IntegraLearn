"use client";

import { useMemo } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#0ea5e9", "#f43f5e", "#facc15", "#10b981", "#8b5cf6"];

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

  // --- Compute stats ---
  const { topicData, overallStats, focusAreas } = useMemo(() => {
    if (!Array.isArray(testResults) || testResults.length === 0) {
      return {
        topicData: [],
        overallStats: { correct: 0, incorrect: 0, percent: 0 },
        focusAreas: [],
      };
    }

    // Aggregate by topic
    const topicMap: Record<string, { score: number; total: number }> = {};
    for (const r of testResults) {
      if (!r.topic) continue;
      if (!topicMap[r.topic]) topicMap[r.topic] = { score: 0, total: 0 };
      topicMap[r.topic].score += r.score ?? 0;
      topicMap[r.topic].total += r.total ?? 0;
    }

    const topicData = Object.entries(topicMap).map(
      ([topic, { score, total }]) => ({
        topic,
        percent: total > 0 ? Math.round((score / total) * 100) : 0,
      })
    );

    // Overall stats
    const totalScore = testResults.reduce((sum, r) => sum + (r.score ?? 0), 0);
    const totalTotal = testResults.reduce((sum, r) => sum + (r.total ?? 0), 0);
    const correct = totalScore;
    const incorrect = totalTotal - totalScore;
    const percent =
      totalTotal > 0 ? Math.round((totalScore / totalTotal) * 100) : 0;

    // Focus areas (bottom 3 topics)
    const focusAreas = [...topicData]
      .sort((a, b) => a.percent - b.percent)
      .slice(0, 3);

    return {
      topicData,
      overallStats: { correct, incorrect, percent },
      focusAreas,
    };
  }, [testResults]);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <p className="mb-8 text-muted-foreground">
        Welcome back, {user?.username ?? user?.firstName ?? "student"}!
      </p>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Topic Performance */}
        <div className="col-span-2 bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-xl font-medium mb-4">Scores by Topic</h2>
          {topicData.length > 0 ? (
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topicData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="topic" />
                  <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                  <Tooltip formatter={(v: number) => `${v}%`} />
                  <Bar dataKey="percent" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              No topic data yet. Take a test to see performance by topic.
            </p>
          )}
        </div>

        {/* Overall Accuracy */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <h2 className="text-lg font-medium mb-4">Overall Accuracy</h2>
          {overallStats.correct + overallStats.incorrect > 0 ? (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Correct", value: overallStats.correct },
                    { name: "Incorrect", value: overallStats.incorrect },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label
                >
                  <Cell fill="#10b981" />
                  <Cell fill="#f43f5e" />
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-sm text-muted-foreground">
              No test results yet.
            </p>
          )}
          {overallStats.percent > 0 && (
            <p className="text-center mt-2 font-semibold">
              {overallStats.percent}% overall accuracy
            </p>
          )}
        </div>
      </div>

      {/* Focus Areas */}
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border mb-10">
        <h2 className="text-lg font-medium mb-3">Focus Areas</h2>
        {focusAreas.length > 0 ? (
          <ul className="space-y-2">
            {focusAreas.map((f) => (
              <li key={f.topic} className="flex justify-between">
                <span>{f.topic}</span>
                <span className="font-semibold text-red-500">{f.percent}%</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">
            Once you take a few tests, you’ll see which topics to focus on here.
          </p>
        )}
      </div>

      {/* Recent Tests */}
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
        <h2 className="text-lg font-medium mb-2">Recent Tests</h2>
        <ul className="space-y-3">
          {Array.isArray(testResults) && testResults.length > 0 ? (
            testResults
              .slice()
              .sort((a: any, b: any) => {
                const ta = new Date(a.createdAt ?? a._creationTime ?? 0);
                const tb = new Date(b.createdAt ?? b._creationTime ?? 0);
                return tb.getTime() - ta.getTime();
              })
              .map((r: any) => {
                const percent =
                  r.total && !Number.isNaN(r.score)
                    ? `${Math.round((r.score / r.total) * 100)}%`
                    : "—";
                const date = new Date(
                  r.createdAt ?? r._creationTime ?? 0
                ).toLocaleDateString();
                return (
                  <li
                    key={r.id ?? `${r.createdAt}-${percent}`}
                    className="flex justify-between"
                  >
                    <div>
                      <div className="font-medium">
                        {r.topic ?? "Math Diagnostic"}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Grade: {r.grade ?? "—"}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{percent}</div>
                      <div className="text-sm text-muted-foreground">
                        {date}
                      </div>
                    </div>
                  </li>
                );
              })
          ) : (
            <li className="text-sm text-muted-foreground">
              No tests taken yet.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
