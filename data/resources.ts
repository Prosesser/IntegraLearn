export interface Resource {
  title: string;
  type: "video" | "pdf" | "article" | "practice" | "website";
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
        type: "website",
        url: "https://www.jensenmath.ca/math9-unit-1-2",
        description:
          "Covers variables, expressions, and simplifying algebraic terms",
      },
      {
        title: "Number Sense Practice Worksheet",
        type: "pdf",
        url: "https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/687878ad73dc0911e6e09c8f/1752725678873/MTH1W+unit+1+workbook+student.pdf",
        description: "Exercises to strengthen arithmetic and number reasoning",
      },
    ],
    "Linear Relations": [
      {
        title: "Graphing Linear Equations",
        type: "video",
        url: "https://www.youtube.com/watch?v=3SHugxYdbas",
        description:
          "Learn how to graph lines and understand slope-intercept form",
      },
      {
        title: "Linear Relations Practice Problems",
        type: "practice",
        url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:forms-of-linear-equations/x2f8bb11595b61c86:summary-forms-of-two-variable-linear-equations/e/writing-the-equation-of-a-line-in-any-form",
        description: "Step-by-step questions to master linear patterns",
      },
    ],
    "Measurement & Geometry": [
      {
        title: "Area and Perimeter Review",
        type: "website",
        url: "https://www.jensenmath.ca/math9-unit-7",
        description: "Understand formulas and relationships in geometry",
      },
      {
        title: "Geometry Practice Set",
        type: "practice",
        url: "https://www.analyzemath.com/middle_school_math/grade_9/geometry.html",
        description: "Test your knowledge on area, perimeter, and 3D figures",
      },
    ],
    "Data Management": [
      {
        title: "Introduction to Statistics",
        type: "video",
        url: "https://www.khanacademy.org/math/statistics-probability/probability-library",
        description: "Learn about mean, median, mode, and range",
      },
      {
        title: "Data Handling Worksheet",
        type: "pdf",
        url: "https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61f2141e954dde7e436a6789/1643254816657/chapter+2+relations+workbook.pdf",
        description: "Printable practice for organizing and interpreting data",
      },
    ],
  },

  "Grade 10": {
    "Quadratic Functions": [
      {
        title: "Understanding Quadratic Functions",
        type: "video",
        url: "https://www.youtube.com/watch?v=2mOCEaelvgo",
        description: "Learn parabolas, vertex form, and factoring methods",
      },
      {
        title: "Quadratic Formula Guide",
        type: "pdf",
        url: "https://www.mtsac.edu/marcs/worksheet/math51/general/9quadratic_formula.pdf",
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
        url: "https://dobmaths.weebly.com/uploads/8/9/9/8/8998387/year_10_trigonometry_2.pdf",
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
        url: "https://www.mathwiz.ca/videos/ls_pta.pdf",
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
        url: "https://mathsatsharp.co.za/wp-content/uploads/2013/04/Worksheet_4_-_Exponents_Grade_10_Mathematics.pdf",
        description: "Practice applying exponent laws",
      },
    ],
  },

  "Grade 11": {
    "Advanced Functions": [
      {
        title: "Function Transformations",
        type: "website",
        url: "https://courseware.cemc.uwaterloo.ca/44#utm_source=Courseware+LP&utm_medium=website&utm_campaign=Gr+9+to+11+introduction+to+functions",
        description: "Learn how to stretch, shift, and reflect functions",
      },
      {
        title: "Function Practice Set",
        type: "practice",
        url: "https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61ef57f7e0efc2399cbb6fe5/1643075576451/unit+1+workbook+STUDENT.pdf",
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
        url: "https://static1.squarespace.com/static/61de416a3e2596709a9237f6/t/61f192e620ada32068d98e25/1643221734561/chapter+6+discrete+functions+WORKBOOK+STUDENT.pdf",
        description: "Practice identifying arithmetic and geometric patterns",
      },
    ],
    "Analytic Geometry": [
      {
        title: "Analytic Geometry",
        type: "video",
        url: "https://www.khanacademy.org/math/geometry/hs-geo-analytic-geometry",
        description: "Explore distance, midpoint, and slope formulas",
      },
      {
        title: "Analytic Geometry Practice",
        type: "practice",
        url: "https://msbro.weebly.com/uploads/8/7/2/4/8724381/analytic_geometry_practice.pdf",
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
        url: "https://www.manvsmaths.com/11/merit_probability_3.pdf",
        description: "Apply counting principles to solve probability scenarios",
      },
    ],
  },

  "Grade 12": {
    "Exponents & Logarithms": [
      {
        title: "Logarithm Laws Explained",
        type: "pdf",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/ExponentsLogarithms.html",
        description: "Learn logarithmic identities and exponent conversions",
      },
      {
        title: "Logarithm Practice Problems",
        type: "practice",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/ExponentsLogarithms.html",
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
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/Trigonometry.html",
        description: "Problems on the sine law, cosine law, and unit circle",
      },
    ],
    "Functions, Equations, and Polynomials": [
      {
        title: "Polynomial Division and Roots",
        type: "video",
        url: "https://courseware.cemc.uwaterloo.ca/8#utm_source=Courseware+LP&utm_medium=website&utm_campaign=Gr+12+Advanced+Functions",
        description:
          "Explore factoring, synthetic division, and remainder theorem",
      },
      {
        title: "Functions and Graphs Practice",
        type: "practice",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/FunctionsEquationsPolynomials.html",
        description: "Test transformations and solving polynomial equations",
      },
    ],
    "Analytic Geometry": [
      {
        title: "Conic Sections Overview",
        type: "pdf",
        url: "https://eceducation.gov.za/files/content/1601897763_2KOxbHoZnN_Analytical-Geometry.pdf",
        description: "Study parabolas, circles, ellipses, and hyperbolas",
      },
      {
        title: "Analytic Geometry Worksheet",
        type: "pdf",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/AnalyticGeometry.html",
        description: "Practice with coordinate equations of conic shapes",
      },
    ],
    "Sequences & Series": [
      {
        title: "Sigma Notation and Infinite Series",
        type: "pdf",
        url: "https://www.mathsatsharp.co.za/wp-content/uploads/2012/07/chapter2-patterns-sequences-series.pdf",
        description: "Explore sums, sigma notation, and convergence concepts",
      },
      {
        title: "Series Practice Problems",
        type: "practice",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/SequencesSeries.html",
        description: "Apply arithmetic and geometric series formulas",
      },
    ],
    "Euclidean Geometry": [
      {
        title: "Triangles and Parallel Lines",
        type: "video",
        url: "https://www.youtube.com/watch?v=qRc4AfM0z7Q",
        description: "Understand logical reasoning in geometric proofs",
      },
      {
        title: "Geometry Challenge Set",
        type: "practice",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/EuclideanGeometry.html",
        description: "Proof-based geometry practice for advanced students",
      },
    ],
    "Counting & Probability": [
      {
        title: "Advanced Probability Topics",
        type: "pdf",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/CountingProbability.pdf",
        description: "Learn conditional probability and expected value",
      },
      {
        title: "Combinatorics Practice Problems",
        type: "practice",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/CountingProbability.html",
        description:
          "Permutations, combinations, and probability distributions",
      },
    ],
    "Properties of Numbers": [
      {
        title: "Number Theory Basics",
        type: "website",
        url: "https://www.probabilisticworld.com/introduction-number-theory-basic-concepts/",
        description: "Learn divisibility, primes, and modular arithmetic",
      },
      {
        title: "Number Properties Practice",
        type: "practice",
        url: "https://cemc.uwaterloo.ca/sites/default/files/documents/2024/PropertiesNumbers.html",
        description: "Exercises on rational, irrational, and complex numbers",
      },
    ],
  },
};
