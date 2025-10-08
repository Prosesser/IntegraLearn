"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { questions as allQuestions } from "@/data/questions";

export default function TestPage() {
  const router = useRouter();
  const { user } = useUser();

  const ensureUser = useMutation(api.users.ensureUser);
  const saveTestResult = useMutation(api.testResults.saveTestResult);

  const [step, setStep] = useState<"select" | "test" | "results">("select");
  const [level, setLevel] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [saving, setSaving] = useState(false);

  const handleSelectLevel = (lvl: number) => {
    setLevel(lvl);
    setStep("test");
  };

  const questions = allQuestions.filter(
    (q) => q.grade === (level ? level + 8 : 9)
  );

  const handleAnswer = (id: string, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [id]: optionIndex }));
  };

  const correctCount = Object.entries(answers).filter(([id, ans]) => {
    const q = allQuestions.find((q) => q.id === id);
    return q && q.answer === ans;
  }).length;

  const handleSubmit = () => setStep("results");

  const handleSaveAndRedirect = async () => {
    if (!user) {
      alert("Please sign in first.");
      return;
    }
    try {
      setSaving(true);
      const userId = await ensureUser({
        clerkId: user.id,
        name: user.fullName ?? "",
        email: user.primaryEmailAddress?.emailAddress ?? "",
      });
      await saveTestResult({
        userId,
        grade: `Grade ${level! + 8}`,
        topic: "Math Diagnostic",
        score: correctCount,
        total: questions.length,
        feedback: "To be generated later",
      });
      router.push("/dashboard");
    } catch (err) {
      console.error("Error saving test:", err);
      alert("There was an error saving your results. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // STEP 1 — Level selection
  if (step === "select") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-background text-foreground animate-fadeIn">
        <div className="max-w-3xl w-full text-center space-y-10 transition-all duration-500 ease-in-out">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Welcome to Your Math Diagnostic
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your current grade level to begin. This quick test will
              assess your strengths and help tailor your learning path.
            </p>
          </div>

          <Card className="bg-card text-card-foreground shadow-md border border-border transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-semibold text-card-foreground">
                Select Your Level
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Pick the grade that best represents your current skill level.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {[1, 2, 3, 4].map((lvl) => (
                  <Button
                    key={lvl}
                    onClick={() => handleSelectLevel(lvl)}
                    className="w-full h-24 text-lg font-medium bg-primary text-primary-foreground rounded-xl transform transition-all hover:scale-105 active:scale-95 hover:bg-primary/90"
                  >
                    <div>
                      <p className="text-2xl font-semibold">Level {lvl}</p>
                      <p className="text-sm opacity-90">(Grade {lvl + 8})</p>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // STEP 2 — Test
  if (step === "test") {
    return (
      <div className="container mx-auto py-16 px-4 sm:py-20 bg-background text-foreground animate-fadeIn">
        <Card className="max-w-2xl mx-auto bg-card text-card-foreground shadow-md border border-border">
          <CardHeader className="text-center">
            <CardTitle>Math Diagnostic Test</CardTitle>
            <CardDescription className="text-muted-foreground">
              Answer the following questions for Grade {level && level + 8}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {questions.map((q) => (
              <div key={q.id} className="border-b border-border pb-6">
                <h3 className="font-semibold text-lg mb-3">{q.question}</h3>
                <div className="space-y-2">
                  {q.options.map((option, i) => (
                    <Button
                      key={i}
                      variant={answers[q.id] === i ? "default" : "outline"}
                      onClick={() => handleAnswer(q.id, i)}
                      className={`w-full text-left justify-start transition-colors ${
                        answers[q.id] === i
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-background text-foreground border-border hover:bg-muted"
                      }`}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
            ))}

            <Button
              onClick={handleSubmit}
              className="w-full mt-6 sm:mt-8 text-base sm:text-lg transition-transform hover:scale-[1.02]"
            >
              Submit Test
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // STEP 3 — Results
  if (step === "results") {
    const scorePercent = Math.round((correctCount / questions.length) * 100);
    console.log("scorePercent:", scorePercent);

    const getFeedback = () => {
      if (scorePercent === 100)
        return { emoji: "🌟", text: "Perfect Score! Incredible work!" };
      if (scorePercent >= 80)
        return { emoji: "💪", text: "Excellent! You’re well prepared." };
      if (scorePercent >= 60)
        return {
          emoji: "😊",
          text: "Good job! You’ve got solid understanding.",
        };
      if (scorePercent >= 40)
        return {
          emoji: "📘",
          text: "Not bad! Some review will make you stronger.",
        };
      return { emoji: "🤔", text: "Keep practicing — you’ll improve fast!" };
    };

    const feedback = getFeedback();

    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 py-16 sm:py-24 animate-fadeIn overflow-hidden">
        {/* Confetti animation */}

        <Card className="max-w-md w-full text-center bg-card text-card-foreground shadow-lg border border-border relative z-10">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Your Results</CardTitle>
            <CardDescription className="text-muted-foreground">
              Here’s how you did on the diagnostic test.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="transition-all duration-500 ease-in-out transform hover:scale-[1.02]">
              <div className="text-6xl mb-2">{feedback.emoji}</div>
              <p className="text-2xl font-semibold">
                {correctCount} / {questions.length} correct
              </p>
              <p className="text-muted-foreground text-base mt-2">
                {feedback.text}
              </p>
            </div>

            <div className="w-full bg-muted rounded-full h-3 mt-6 overflow-hidden">
              <div
                className="bg-primary h-3 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${scorePercent}%` }}
              />
            </div>

            <p className="text-sm text-muted-foreground mt-2">
              Score: {scorePercent}%
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Button
                onClick={() => {
                  setAnswers({});
                  setLevel(null);
                  setStep("select");
                }}
                variant="outline"
                className="transition-transform hover:scale-[1.03]"
              >
                Retake Test
              </Button>

              <Button
                onClick={handleSaveAndRedirect}
                disabled={saving}
                className="sm:w-auto w-full transition-transform hover:scale-[1.03]"
              >
                {saving ? "Saving..." : "Save & Go to Dashboard"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
}
