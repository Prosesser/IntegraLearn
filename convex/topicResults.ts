import { query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Return raw topic history rows for a user (optionally filter by topic).
 * Each row: { _id, userId, testResultId, topic, correct, total, createdAt }
 */
export const getByUser = query({
  args: { userId: v.optional(v.id("users")), topic: v.optional(v.string()) },
  handler: async (ctx, { userId, topic }) => {
    if (!userId) return [];
    let q = ctx.db
      .query("topicResults")
      .filter((qq) => qq.eq(qq.field("userId"), userId));
    if (topic) {
      q = q.filter((qq) => qq.eq(qq.field("topic"), topic));
    }
    return q.collect();
  },
});

/**
 * Aggregate topic history into per-topic totals and percent for a user.
 * Returns array: [{ topic, correct, total, percent }]
 */
export const getAggregatesForUser = query({
  args: { userId: v.optional(v.id("users")) },
  handler: async (ctx, { userId }) => {
    if (!userId) return [];
    const rows = await ctx.db
      .query("topicResults")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();

    const map: Record<string, { correct: number; total: number }> = {};
    for (const r of rows) {
      if (!map[r.topic]) map[r.topic] = { correct: 0, total: 0 };
      map[r.topic].correct += r.correct ?? 0;
      map[r.topic].total += r.total ?? 0;
    }

    return Object.entries(map).map(([topic, { correct, total }]) => ({
      topic,
      correct,
      total,
      percent: total > 0 ? Math.round((correct / total) * 100) : 0,
    }));
  },
});
