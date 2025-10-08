import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const saveTestResult = mutation({
  args: {
    userId: v.id("users"),
    grade: v.string(),
    topic: v.string(),
    score: v.number(),
    total: v.number(),
    feedback: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // 1️⃣ Check if a result already exists for this user + topic
    const existing = await ctx.db
      .query("testResults")
      .filter((q) =>
        q.and(
          q.eq(q.field("userId"), args.userId),
          q.eq(q.field("topic"), args.topic)
        )
      )
      .first();

    if (existing) {
      // 2️⃣ Update existing record
      await ctx.db.patch(existing._id, {
        grade: args.grade,
        score: args.score,
        total: args.total,
        feedback: args.feedback,
        createdAt: Date.now(),
      });
    } else {
      // 3️⃣ Create a new record if none exists
      await ctx.db.insert("testResults", {
        ...args,
        createdAt: Date.now(),
      });
    }
  },
});

// Query to fetch all test results for a given internal user id
export const getByUser = query({
  args: { userId: v.optional(v.id("users")) },
  handler: async (ctx, { userId }) => {
    if (!userId) return [];
    return ctx.db
      .query("testResults")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  },
});
