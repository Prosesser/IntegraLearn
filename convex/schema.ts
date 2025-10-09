// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_clerkId", ["clerkId"]),

  testResults: defineTable({
    userId: v.id("users"),
    grade: v.string(),
    topic: v.string(),
    score: v.number(),
    total: v.number(),
    feedback: v.optional(v.string()),
    // Optional per-test breakdown by topic (keeps a snapshot on the aggregate doc)
    topicBreakdown: v.optional(
      v.array(
        v.object({
          topic: v.string(),
          correct: v.number(),
          total: v.number(),
        })
      )
    ),
    createdAt: v.number(),
  }).index("by_user_topic", ["userId", "topic"]),

  // New collection to store per-topic history rows for richer charts
  topicResults: defineTable({
    userId: v.id("users"),
    testResultId: v.optional(v.id("testResults")),
    topic: v.string(),
    correct: v.number(),
    total: v.number(),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_topic", ["userId", "topic"]),
});
