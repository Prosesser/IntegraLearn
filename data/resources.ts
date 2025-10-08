export interface Resource {
  title: string
  type: "video" | "pdf" | "article" | "practice"
  url: string
  description: string
}

export interface ResourcesByTopic {
  [topic: string]: Resource[]
}

export const resources: ResourcesByTopic = {
  Trigonometry: [
    {
      title: "Introduction to Trigonometry",
      type: "video",
      url: "https://www.khanacademy.org/math/trigonometry",
      description: "Learn the basics of sine, cosine, and tangent",
    },
    {
      title: "Trig Practice Problems",
      type: "practice",
      url: "#",
      description: "50+ practice problems with solutions",
    },
    {
      title: "Unit Circle Guide",
      type: "pdf",
      url: "#",
      description: "Complete reference for the unit circle",
    },
  ],
  Exponents: [
    {
      title: "Exponent Rules Explained",
      type: "video",
      url: "https://www.khanacademy.org/math/algebra",
      description: "Master all exponent rules and properties",
    },
    {
      title: "Exponents Worksheet",
      type: "pdf",
      url: "#",
      description: "Practice problems for all skill levels",
    },
  ],
  Functions: [
    {
      title: "Understanding Functions",
      type: "article",
      url: "#",
      description: "Complete guide to function notation and graphs",
    },
    {
      title: "Function Transformations",
      type: "video",
      url: "https://www.khanacademy.org/math/algebra2",
      description: "Learn how to transform and manipulate functions",
    },
    {
      title: "Domain and Range Practice",
      type: "practice",
      url: "#",
      description: "Interactive exercises for domain and range",
    },
  ],
  "Counting and Probability": [
    {
      title: "Probability Basics",
      type: "video",
      url: "https://www.khanacademy.org/math/statistics-probability",
      description: "Introduction to probability concepts",
    },
    {
      title: "Permutations and Combinations",
      type: "article",
      url: "#",
      description: "Learn the difference and when to use each",
    },
  ],
  "Quadratic Equations": [
    {
      title: "Solving Quadratics",
      type: "video",
      url: "https://www.khanacademy.org/math/algebra",
      description: "Multiple methods for solving quadratic equations",
    },
    {
      title: "Quadratic Formula Guide",
      type: "pdf",
      url: "#",
      description: "Step-by-step guide with examples",
    },
  ],
  Sequences: [
    {
      title: "Arithmetic and Geometric Sequences",
      type: "video",
      url: "https://www.khanacademy.org/math/algebra",
      description: "Understanding patterns in sequences",
    },
    {
      title: "Sequence Practice Problems",
      type: "practice",
      url: "#",
      description: "Build your pattern recognition skills",
    },
  ],
}
