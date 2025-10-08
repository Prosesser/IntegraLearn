import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, LogIn, UserPlus } from "lucide-react";

export default async function AuthPage() {
  const { isAuthenticated } = await auth(); // Check the user on the server-side

  if (isAuthenticated) {
    // If the user is signed in, redirect to the dashboard
    redirect("/dashboard");
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-balance">
            Welcome to IntegraLearn
          </h1>
          <p className="mt-2 text-muted-foreground text-pretty">
            Sign in to track your progress and access personalized learning
          </p>
        </div>

        <div className="grid gap-4">
          <Card className="border-2 hover:border-primary/50 transition-colors cursor-pointer group">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                  <LogIn className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription>
                    Access your existing account
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="lg">
                Sign In with Clerk
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent/50 transition-colors cursor-pointer group">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground group-hover:scale-110 transition-transform">
                  <UserPlus className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>Sign Up</CardTitle>
                  <CardDescription>
                    Create a new account to get started
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-transparent"
                variant="outline"
                size="lg"
              >
                Sign Up with Clerk
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild variant="ghost">
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
