"use client";

import Link from "next/link";
import { BookOpen, Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              IntegraLearn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Unauthenticated>
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/resources"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  Resources
                </Link>
                <ThemeToggle />
                <SignInButton>
                  <Button size="sm" className="cursor-pointer">
                    Sign In
                  </Button>
                </SignInButton>
              </div>
            </Unauthenticated>

            <Authenticated>
              <div className="flex items-center gap-6">
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/test"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  Retake Test
                </Link>
                <Link
                  href="/resources"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  Resources
                </Link>
                <ThemeToggle />
                <SignOutButton>
                  <Button size="sm" className="cursor-pointer">
                    Sign Out
                  </Button>
                </SignOutButton>
              </div>
            </Authenticated>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="sm:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="p-6">
              <SheetHeader>
                <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4 mt-6">
                <Unauthenticated>
                  <div className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/resources"
                      className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                    >
                      Resources
                    </Link>
                    <ThemeToggle />
                    <SignInButton>
                      <Button size="sm" className="w-full cursor-pointer">
                        Sign In
                      </Button>
                    </SignInButton>
                  </div>
                </Unauthenticated>

                <Authenticated>
                  <div className="flex flex-col gap-4">
                    <Link
                      href="/dashboard"
                      className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/test"
                      className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                    >
                      Retake Test
                    </Link>
                    <Link
                      href="/resources"
                      className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                    >
                      Resources
                    </Link>
                    <ThemeToggle />
                    <SignOutButton>
                      <Button size="sm" className="w-full cursor-pointer">
                        Sign Out
                      </Button>
                    </SignOutButton>
                  </div>
                </Authenticated>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
