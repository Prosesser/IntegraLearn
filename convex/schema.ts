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
    createdAt: v.number(),
  }),
});
