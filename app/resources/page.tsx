"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function ResourcesSelectPage() {
  const router = useRouter();

  const handleSelectLevel = (lvl: number) => {
    const grade = lvl + 8;
    router.push(`/resources/Grade ${grade}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-background text-foreground animate-fadeIn">
      <div className="max-w-3xl w-full text-center space-y-10">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Choose Your Grade
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your current grade to explore resources tailored to your
            level.
          </p>
        </div>

        <Card className="bg-card text-card-foreground shadow-md border border-border transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-semibold text-card-foreground">
              Select Your Level
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Choose the grade that best represents your current level.
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
