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
    topicBreakdown: v.optional(
      v.array(
        v.object({
          topic: v.string(),
          correct: v.number(),
          total: v.number(),
        })
      )
    ),
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

    let testResultId;
    if (existing) {
      // 2️⃣ Update existing record
      await ctx.db.patch(existing._id, {
        grade: args.grade,
        score: args.score,
        total: args.total,
        feedback: args.feedback,
        topicBreakdown: args.topicBreakdown ?? existing.topicBreakdown,
        createdAt: Date.now(),
      });
      testResultId = existing._id;
    } else {
      // 3️⃣ Create a new record if none exists
      const id = await ctx.db.insert("testResults", {
        ...args,
        createdAt: Date.now(),
      });
      testResultId = id;
    }

    // 4️⃣ Clear existing topic results for this user
    const existingTopicResults = await ctx.db
      .query("topicResults")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();

    for (const result of existingTopicResults) {
      await ctx.db.delete(result._id);
    }

    // 5️⃣ Insert new topic results
    if (args.topicBreakdown && Array.isArray(args.topicBreakdown)) {
      for (const tb of args.topicBreakdown) {
        await ctx.db.insert("topicResults", {
          userId: args.userId,
          testResultId,
          topic: tb.topic,
          correct: tb.correct,
          total: tb.total,
          createdAt: Date.now(),
        });
      }
    }

    return testResultId;
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
