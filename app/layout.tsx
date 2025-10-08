import type React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import ConvexClientProvider from "@/components/ConvexClientProvider";

export const metadata: Metadata = {
  title: "IntegraLearn - Your Personalized Path to Math Mastery",
  description: "Personalized math learning platform for Grade 9-12 students",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
        >
          <ConvexClientProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <Navbar />
              <main className="min-h-screen">{children}</main>
              <Footer />
              <Analytics />
            </Suspense>
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
