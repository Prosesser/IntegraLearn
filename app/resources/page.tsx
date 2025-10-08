import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { resources } from "@/data/resources"
import { BookOpen, FileText, PlayCircle, PenTool, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const getResourceIcon = (type: string) => {
  switch (type) {
    case "video":
      return <PlayCircle className="h-5 w-5" />
    case "pdf":
      return <FileText className="h-5 w-5" />
    case "article":
      return <BookOpen className="h-5 w-5" />
    case "practice":
      return <PenTool className="h-5 w-5" />
    default:
      return <BookOpen className="h-5 w-5" />
  }
}

const getResourceColor = (type: string) => {
  switch (type) {
    case "video":
      return "text-red-500"
    case "pdf":
      return "text-blue-500"
    case "article":
      return "text-green-500"
    case "practice":
      return "text-yellow-600"
    default:
      return "text-gray-500"
  }
}

const getTypeBadgeColor = (type: string) => {
  switch (type) {
    case "video":
      return "bg-red-500/10 text-red-700 dark:text-red-400 hover:bg-red-500/20"
    case "pdf":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400 hover:bg-blue-500/20"
    case "article":
      return "bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20"
    case "practice":
      return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/20"
    default:
      return "bg-gray-500/10 text-gray-700 dark:text-gray-400"
  }
}

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Learning Resources</h1>
          <p className="text-lg text-muted-foreground">
            Curated videos, articles, and practice problems to help you master each topic
          </p>
        </div>

        {/* Resources by Topic */}
        <div className="space-y-12">
          {Object.entries(resources).map(([topic, topicResources]) => (
            <div key={topic}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="h-1 w-8 bg-primary rounded-full" />
                {topic}
              </h2>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {topicResources.map((resource, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className={`p-2 rounded-lg bg-muted ${getResourceColor(resource.type)}`}>
                          {getResourceIcon(resource.type)}
                        </div>
                        <Badge className={getTypeBadgeColor(resource.type)}>{resource.type}</Badge>
                      </div>
                      <CardTitle className="text-lg leading-snug">{resource.title}</CardTitle>
                      <CardDescription className="leading-relaxed">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      >
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          View Resource
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

        {/* Help Section */}
        <Card className="mt-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Need More Help?</h3>
            <p className="text-muted-foreground mb-4">
              Take our diagnostic test to get personalized resource recommendations based on your performance
            </p>
            <Button asChild>
              <a href="/test">Take Diagnostic Test</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
