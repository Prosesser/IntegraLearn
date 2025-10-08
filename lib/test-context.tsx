"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface TestResult {
  [topic: string]: {
    correct: number
    total: number
    percentage: number
  }
}

interface TestContextType {
  answers: { [questionId: number]: string }
  setAnswer: (questionId: number, answer: string) => void
  results: TestResult | null
  setResults: (results: TestResult) => void
  resetTest: () => void
}

const TestContext = createContext<TestContextType | undefined>(undefined)

export function TestProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<{ [questionId: number]: string }>({})
  const [results, setResultsState] = useState<TestResult | null>(null)

  const setAnswer = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const setResults = (newResults: TestResult) => {
    setResultsState(newResults)
  }

  const resetTest = () => {
    setAnswers({})
    setResultsState(null)
  }

  return (
    <TestContext.Provider value={{ answers, setAnswer, results, setResults, resetTest }}>
      {children}
    </TestContext.Provider>
  )
}

export function useTest() {
  const context = useContext(TestContext)
  if (context === undefined) {
    throw new Error("useTest must be used within a TestProvider")
  }
  return context
}
