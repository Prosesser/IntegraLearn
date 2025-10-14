export interface Resource {
  title: string;
  type: "video" | "pdf" | "article" | "practice";
  url: string;
  description: string;
}

export interface GradeResources {
  [topic: string]: Resource[];
}

export interface ResourcesByGrade {
  [grade: string]: GradeResources;
}

export const resourcesByGrade: ResourcesByGrade = {
  "Grade 9": {
    "Number Sense & Algebra": [
      {
        title: "Introduction to Algebraic Expressions",
        type: "video",
        url: "https://www.khanacademy.org/math/algebra-basics",
        description:
          "Covers variables, expressions, and simplifying algebraic terms",
      },
      {
        title: "Number Sense Practice Worksheet",
        type: "pdf",
        url: "#",
        description: "Exercises to strengthen arithmetic and number reasoning",
      },
    ],
    "Linear Relations": [
      {
        title: "Graphing Linear Equations",
        type: "video",
        url: "https://www.khanacademy.org/math/algebra/linear-equations",
        description:
          "Learn how to graph lines and understand slope-intercept form",
      },
      {
        title: "Linear Relations Practice Problems",
        type: "practice",
        url: "#",
        description: "Step-by-step questions to master linear patterns",
      },
    ],
    "Measurement & Geometry": [
      {
        title: "Area and Perimeter Review",
        type: "video",
        url: "https://www.khanacademy.org/math/geometry",
        description: "Understand formulas and relationships in geometry",
      },
      {
        title: "Geometry Practice Set",
        type: "practice",
        url: "#",
        description: "Test your knowledge on area, perimeter, and 3D figures",
      },
    ],
    "Data Management": [
      {
        title: "Introduction to Statistics",
        type: "video",
        url: "https://www.khanacademy.org/math/statistics-probability",
        description: "Learn about mean, median, mode, and range",
      },
      {
        title: "Data Handling Worksheet",
        type: "pdf",
        url: "#",
        description: "Printable practice for organizing and interpreting data",
      },
    ],
  },

  "Grade 10": {
    "Quadratic Functions": [
      {
        title: "Understanding Quadratic Functions",
        type: "video",
        url: "https://www.khanacademy.org/math/algebra/quadratics",
        description: "Learn parabolas, vertex form, and factoring methods",
      },
      {
        title: "Quadratic Formula Guide",
        type: "pdf",
        url: "#",
        description: "Step-by-step explanation with solved examples",
      },
    ],
    Trigonometry: [
      {
        title: "Intro to Trigonometric Ratios",
        type: "video",
        url: "https://www.khanacademy.org/math/trigonometry",
        description: "Basics of sine, cosine, and tangent in right triangles",
      },
      {
        title: "Trigonometry Practice Problems",
        type: "practice",
        url: "#",
        description: "Work through problems involving SOHCAHTOA and angles",
      },
    ],
    "Systems of Equations": [
      {
        title: "Solving Systems Graphically and Algebraically",
        type: "video",
        url: "https://www.khanacademy.org/math/algebra/systems-of-equations",
        description: "Learn substitution and elimination methods",
      },
      {
        title: "Systems of Equations Practice",
        type: "practice",
        url: "#",
        description: "Exercises to test your understanding of multiple methods",
      },
    ],
    "Exponents & Powers": [
      {
        title: "Exponent Rules Explained",
        type: "video",
        url: "https://www.khanacademy.org/math/algebra/exponents-radicals",
        description: "Master laws of exponents and simplifying powers",
      },
      {
        title: "Exponents Worksheet",
        type: "pdf",
        url: "#",
        description: "Practice applying exponent laws",
      },
    ],
  },

  "Grade 11": {
    "Advanced Functions": [
      {
        title: "Function Transformations",
        type: "video",
        url: "https://www.khanacademy.org/math/algebra2/functions",
        description: "Learn how to stretch, shift, and reflect functions",
      },
      {
        title: "Function Practice Set",
        type: "practice",
        url: "#",
        description: "Apply transformations and inverse function skills",
      },
    ],
    "Sequences & Series": [
      {
        title: "Arithmetic and Geometric Sequences",
        type: "video",
        url: "https://www.khanacademy.org/math/algebra/sequences",
        description: "Understanding patterns and nth-term formulas",
      },
      {
        title: "Sequences Practice Worksheet",
        type: "pdf",
        url: "#",
        description: "Practice identifying arithmetic and geometric patterns",
      },
    ],
    "Analytic Geometry": [
      {
        title: "Equation of a Line Review",
        type: "video",
        url: "https://www.khanacademy.org/math/geometry/analytic-geometry",
        description: "Explore distance, midpoint, and slope formulas",
      },
      {
        title: "Analytic Geometry Practice",
        type: "practice",
        url: "#",
        description: "Problem set on lines and circles in coordinate geometry",
      },
    ],
    "Counting & Probability": [
      {
        title: "Introduction to Counting Principles",
        type: "video",
        url: "https://www.khanacademy.org/math/statistics-probability/probability-library",
        description: "Permutations, combinations, and basic probability rules",
      },
      {
        title: "Probability Practice Problems",
        type: "practice",
        url: "#",
        description: "Apply counting principles to solve probability scenarios",
      },
    ],
  },

  "Grade 12": {
    "Exponents & Logarithms": [
      {
        title: "Logarithm Laws Explained",
        type: "video",
        url: "https://www.khanacademy.org/math/algebra2/logarithms",
        description: "Learn logarithmic identities and exponent conversions",
      },
      {
        title: "Logarithm Practice Problems",
        type: "practice",
        url: "#",
        description: "Exercises to master log properties and solving equations",
      },
    ],
    Trigonometry: [
      {
        title: "Advanced Trig Identities",
        type: "video",
        url: "https://www.khanacademy.org/math/trigonometry/trig-identities",
        description: "Prove and simplify trigonometric identities",
      },
      {
        title: "Trig Applications Practice",
        type: "practice",
        url: "#",
        description: "Problems on the sine law, cosine law, and unit circle",
      },
    ],
    "Functions, Equations, and Polynomials": [
      {
        title: "Polynomial Division and Roots",
        type: "video",
        url: "https://www.khanacademy.org/math/algebra2/polynomials",
        description:
          "Explore factoring, synthetic division, and remainder theorem",
      },
      {
        title: "Functions and Graphs Practice",
        type: "practice",
        url: "#",
        description: "Test transformations and solving polynomial equations",
      },
    ],
    "Analytic Geometry": [
      {
        title: "Conic Sections Overview",
        type: "video",
        url: "https://www.khanacademy.org/math/geometry/conic-sections",
        description: "Study parabolas, circles, ellipses, and hyperbolas",
      },
      {
        title: "Analytic Geometry Worksheet",
        type: "pdf",
        url: "#",
        description: "Practice with coordinate equations of conic shapes",
      },
    ],
    "Sequences & Series": [
      {
        title: "Sigma Notation and Infinite Series",
        type: "video",
        url: "https://www.khanacademy.org/math/algebra2/sequences",
        description: "Explore sums, sigma notation, and convergence concepts",
      },
      {
        title: "Series Practice Problems",
        type: "practice",
        url: "#",
        description: "Apply arithmetic and geometric series formulas",
      },
    ],
    "Euclidean Geometry": [
      {
        title: "Euclid’s Postulates and Proofs",
        type: "article",
        url: "#",
        description: "Understand logical reasoning in geometric proofs",
      },
      {
        title: "Geometry Challenge Set",
        type: "practice",
        url: "#",
        description: "Proof-based geometry practice for advanced students",
      },
    ],
    "Counting & Probability": [
      {
        title: "Advanced Probability Topics",
        type: "video",
        url: "https://www.khanacademy.org/math/statistics-probability",
        description: "Learn conditional probability and expected value",
      },
      {
        title: "Combinatorics Practice Problems",
        type: "practice",
        url: "#",
        description:
          "Permutations, combinations, and probability distributions",
      },
    ],
    "Properties of Numbers": [
      {
        title: "Number Theory Basics",
        type: "video",
        url: "https://www.khanacademy.org/math/algebra2/complex-numbers",
        description: "Learn divisibility, primes, and modular arithmetic",
      },
      {
        title: "Number Properties Practice",
        type: "practice",
        url: "#",
        description: "Exercises on rational, irrational, and complex numbers",
      },
    ],
  },
};
