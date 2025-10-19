"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Target,
  TrendingUp,
} from "lucide-react";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

export default function HomePage() {
  const topics = [
    {
      title: "Trigonometry",
      description: "Master sine, cosine, tangent and the unit circle",
      icon: Target,
      color: "text-blue-500",
    },
    {
      title: "Functions",
      description: "Understand domain, range, and transformations",
      icon: TrendingUp,
      color: "text-indigo-500",
    },
    {
      title: "Exponents",
      description: "Learn exponent rules and properties",
      icon: BarChart3,
      color: "text-violet-500",
    },
    {
      title: "Probability",
      description: "Calculate odds and understand chance",
      icon: BookOpen,
      color: "text-blue-600",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background px-6 sm:px-8">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-3xl opacity-30" />
          <div className="absolute bottom-0 right-0 h-[35rem] w-[35rem] rounded-full bg-accent/20 blur-3xl opacity-30" />
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            Your Personalized Path to Math Mastery
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            IntegraLearn helps you identify strengths, target weaknesses, and
            reach your full potential in mathematics.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Unauthenticated>
              <SignInButton>
                <Button
                  size="lg"
                  className="group cursor-pointer transition-transform hover:scale-[1.02]"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </SignInButton>
            </Unauthenticated>

            <Authenticated>
              <Button
                asChild
                size="lg"
                className="group cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <Link href="/dashboard">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <SignOutButton>
                <Button
                  variant="outline"
                  size="lg"
                  className="cursor-pointer transition-transform hover:scale-[1.02]"
                >
                  Sign Out
                </Button>
              </SignOutButton>
            </Authenticated>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="transition-transform hover:scale-[1.02]"
            >
              <Link href="/resources">Browse Resources</Link>
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/60 pointer-events-none" />
      </section>

      {/* Steps */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              How IntegraLearn Works
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
              Three simple steps to transform your math learning journey
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "1",
                title: "Take the Diagnostic Test",
                desc: "Answer questions across multiple topics to help us understand your current skill level",
              },
              {
                num: "2",
                title: "Get Personalized Insights",
                desc: "View detailed results showing your strengths and areas that need improvement",
              },
              {
                num: "3",
                title: "Access Curated Resources",
                desc: "Get personalized recommendations for videos, articles, and practice problems",
              },
            ].map((step) => (
              <Card
                key={step.num}
                className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4">
                    <span className="text-2xl font-bold">{step.num}</span>
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Topics We Cover
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
              Comprehensive coverage of Grade 9–12 mathematics curriculum
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <Card
                key={topic.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 ${topic.color}`}
                  >
                    <topic.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">
                    {topic.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Unauthenticated>
              <SignInButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto cursor-pointer transition-transform hover:scale-[1.02]"
                >
                  Start Learning Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignInButton>
            </Unauthenticated>
            <Authenticated>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <Link href="/dashboard">
                  Continue Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Authenticated>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Master Mathematics?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of students improving their math skills with
                personalized learning paths.
              </p>

              <Unauthenticated>
                <SignInButton>
                  <Button
                    size="lg"
                    className="group w-full sm:w-auto cursor-pointer transition-transform hover:scale-[1.02]"
                  >
                    Begin Your Journey
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </SignInButton>
              </Unauthenticated>

              <Authenticated>
                <Button
                  asChild
                  size="lg"
                  className="group w-full sm:w-auto cursor-pointer transition-transform hover:scale-[1.02]"
                >
                  <Link href="/dashboard">
                    View Dashboard
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Authenticated>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
