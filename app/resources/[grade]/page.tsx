"use client";

import { useParams, useRouter } from "next/navigation";
import { resourcesByGrade } from "@/data/resources";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  PlayCircle,
  FileText,
  BookOpen,
  PenTool,
  ExternalLink,
} from "lucide-react";

const getResourceIcon = (type: string) => {
  switch (type) {
    case "video":
      return <PlayCircle className="h-5 w-5" />;
    case "pdf":
      return <FileText className="h-5 w-5" />;
    case "article":
      return <BookOpen className="h-5 w-5" />;
    case "practice":
      return <PenTool className="h-5 w-5" />;
    default:
      return <BookOpen className="h-5 w-5" />;
  }
};

const getResourceColor = (type: string) => {
  switch (type) {
    case "video":
      return "text-red-500";
    case "pdf":
      return "text-blue-500";
    case "article":
      return "text-green-500";
    case "practice":
      return "text-yellow-600";
    default:
      return "text-gray-500";
  }
};

const getTypeBadgeColor = (type: string) => {
  switch (type) {
    case "video":
      return "bg-red-500/10 text-red-700 dark:text-red-400 hover:bg-red-500/20";
    case "pdf":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400 hover:bg-blue-500/20";
    case "article":
      return "bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20";
    case "practice":
      return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/20";
    default:
      return "bg-gray-500/10 text-gray-700 dark:text-gray-400";
  }
};

export default function GradeResourcesPage() {
  const router = useRouter();
  const params = useParams();
  const gradeParam = decodeURIComponent(params.grade as string);
  const gradeResources =
    resourcesByGrade[gradeParam as keyof typeof resourcesByGrade];

  if (!gradeResources) {
    return (
      <div className="container mx-auto py-20 text-center">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Grade not found</CardTitle>
            <CardDescription>
              The grade you selected doesn’t have any resources yet.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => router.push("/resources")}
              className="cursor-pointer"
            >
              Back to Resources
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <Button
            variant="outline"
            onClick={() => router.push("/resources")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft size={18} /> Back
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">
            {gradeParam} Resources
          </h1>
        </div>

        {/* Topics Section */}
        <div className="space-y-12">
          {Object.entries(gradeResources).map(([topic, topicResources]) => (
            <div key={topic}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="h-1 w-8 bg-primary rounded-full" /> {topic}
              </h2>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {topicResources.map((res, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div
                          className={`p-2 rounded-lg bg-muted ${getResourceColor(
                            res.type
                          )}`}
                        >
                          {getResourceIcon(res.type)}
                        </div>
                        <Badge className={getTypeBadgeColor(res.type)}>
                          {res.type}
                        </Badge>
                      </div>

                      <CardTitle className="text-lg leading-snug">
                        {res.title}
                      </CardTitle>
                      <CardDescription className="leading-relaxed">
                        {res.description}
                      </CardDescription>
                    </CardHeader>

                    {/* Align button and keep color consistent */}
                    <CardContent className="flex justify-end items-center pt-2">
                      <Button
                        asChild
                        variant="outline"
                        className="cursor-pointer transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {res.type === "video"
                            ? "Watch"
                            : res.type === "pdf"
                            ? "View PDF"
                            : res.type === "practice"
                            ? "Practice"
                            : "Read"}{" "}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
