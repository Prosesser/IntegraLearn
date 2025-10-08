"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();

  // you’ll make a query later like:
  // const results = useQuery(api.testResults.getByUser, { clerkId: user?.id ?? "" });

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <p>Welcome back, {user?.username}!</p>
      <p>Your personalized feedback will appear here soon.</p>
    </div>
  );
}
