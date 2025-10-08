"use client"

import type React from "react"

import { TestProvider } from "@/lib/test-context"

export function Providers({ children }: { children: React.ReactNode }) {
  return <TestProvider>{children}</TestProvider>
}
