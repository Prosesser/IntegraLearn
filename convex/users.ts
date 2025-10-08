// convex/users.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const ensureUser = mutation({
  args: {
    clerkId: v.string(),
    name: v.optional(v.string()),
    email: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
      .unique();

    if (existing) return existing._id;

    const newUserId = await ctx.db.insert("users", {
      clerkId: args.clerkId,
      name: args.name,
      email: args.email,
      createdAt: Date.now(),
    });

    return newUserId;
  },
});

export const getByClerkId = query({
  args: { clerkId: v.optional(v.string()) },
  handler: async (ctx, { clerkId }) => {
    if (!clerkId) return null;
    return ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), clerkId))
      .first();
  },
});
