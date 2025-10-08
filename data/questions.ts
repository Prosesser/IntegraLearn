// /data/questions.ts
export type Question = {
  id: string;
  question: string;
  options: string[];
  answer: number; // index of correct option
  topic: string;
  grade: number; // 9–12
  difficulty: number; // 1–4
};

export const questions: Question[] = [
  // === Grade 9 ===
  {
    id: "9-LR1",
    grade: 9,
    question:
      "The line through (1, 2) has slope 3. Which of the following points also lies on the line?",
    options: ["(2, 5)", "(3, 8)", "(0, -1)", "(2, 4)"],
    answer: 0,
    topic: "Linear Relations",
    difficulty: 2,
  },
  {
    id: "9-LR2",
    grade: 9,
    question: "If the line y = 2x + b passes through (3, 8), what is b?",
    options: ["2", "3", "4", "5"],
    answer: 0,
    topic: "Linear Relations",
    difficulty: 1,
  },
  {
    id: "9-MG1",
    grade: 9,
    question:
      "A rectangle has a diagonal of 13 cm and one side of 5 cm. What is its area?",
    options: ["60 cm²", "120 cm²", "156 cm²", "84 cm²"],
    answer: 0,
    topic: "Measurement & Geometry",
    difficulty: 2,
  },
  {
    id: "9-DM1",
    grade: 9,
    question:
      "A coin is flipped twice. What is the probability of getting at least one head?",
    options: ["1/4", "1/2", "3/4", "1"],
    answer: 2,
    topic: "Data Management",
    difficulty: 2,
  },

  // === Grade 10 ===
  {
    id: "10-QF1",
    grade: 10,
    question: "The parabola y = x² - 4x + 3 crosses the x-axis at:",
    options: [
      "x = 1 and x = 3",
      "x = -1 and x = 3",
      "x = -3 and x = 1",
      "x = 2 only",
    ],
    answer: 0,
    topic: "Quadratic Functions",
    difficulty: 2,
  },
  {
    id: "10-TR1",
    grade: 10,
    question: "In a right triangle, sin A = 3/5. What is tan A?",
    options: ["3/4", "4/3", "5/3", "9/25"],
    answer: 0,
    topic: "Trigonometry",
    difficulty: 2,
  },
  {
    id: "10-SE1",
    grade: 10,
    question: "Solve the system: 2x + y = 7 and 3x - y = 8.",
    options: ["x = 3, y = 1", "x = 2, y = 3", "x = 3, y = 1", "x = 3, y = 1"],
    answer: 0,
    topic: "Systems of Equations",
    difficulty: 2,
  },
  {
    id: "10-EP1",
    grade: 10,
    question: "Simplify (2x³y²)² ÷ (4x⁴y).",
    options: ["x²y³", "x²y", "y³", "x²"],
    answer: 0,
    topic: "Exponents & Powers",
    difficulty: 3,
  },

  // === Grade 11 ===
  {
    id: "11-AF1",
    grade: 11,
    question: "If f(x) = 3x² - 2x + 1, find f(2x).",
    options: ["12x² - 2x + 1", "12x² - 4x + 1", "3x² - 4x + 1", "6x² - 2x + 1"],
    answer: 1,
    topic: "Advanced Functions",
    difficulty: 3,
  },
  {
    id: "11-SS1",
    grade: 11,
    question:
      "An arithmetic sequence has 5th term 14 and 9th term 26. What is the first term?",
    options: ["2", "4", "0", "8"],
    answer: 1,
    topic: "Sequences & Series",
    difficulty: 3,
  },
  {
    id: "11-AG1",
    grade: 11,
    question:
      "Find the equation of the line through (1,2) and perpendicular to 3x + 4y = 12.",
    options: [
      "y = (4/3)x + 2/3",
      "y = (-3/4)x + 11/4",
      "y = (3/4)x + 1",
      "y = (-4/3)x + 10/3",
    ],
    answer: 3,
    topic: "Analytic Geometry",
    difficulty: 3,
  },
  {
    id: "11-CP1",
    grade: 11,
    question:
      "A 5-digit code uses the digits 1–9 without repetition. How many codes begin and end with an odd digit?",
    options: ["1440", "2160", "1680", "2520"],
    answer: 1,
    topic: "Counting & Probability",
    difficulty: 4,
  },

  // === Grade 12 ===
  {
    id: "12-EL1",
    grade: 12,
    question: "Solve for x: log₂(x + 1) = 3.",
    options: ["7", "8", "9", "6"],
    answer: 0,
    topic: "Exponents & Logarithms",
    difficulty: 2,
  },
  {
    id: "12-EL2",
    grade: 12,
    question: "Simplify: log₃(27x²) - log₃(3x).",
    options: ["1 + log₃x", "2 + log₃x", "log₃x", "3 + log₃x"],
    answer: 0,
    topic: "Exponents & Logarithms",
    difficulty: 3,
  },
  {
    id: "12-TR1",
    grade: 12,
    question: "If sin θ = 3/5 and θ is in quadrant II, find cos θ.",
    options: ["-4/5", "4/5", "3/5", "-3/5"],
    answer: 0,
    topic: "Trigonometry",
    difficulty: 3,
  },
  {
    id: "12-FE1",
    grade: 12,
    question: "If f(x) = x³ - 6x² + 11x - 6, find all real roots.",
    options: ["1, 2, 3", "–1, –2, –3", "1, 3, 6", "0, 2, 3"],
    answer: 0,
    topic: "Functions, Equations, and Polynomials",
    difficulty: 4,
  },
  {
    id: "12-AG1",
    grade: 12,
    question:
      "A circle has equation x² + y² - 6x + 4y - 12 = 0. Find its center and radius.",
    options: ["(3, -2), 5", "(-3, 2), 5", "(3, 2), 5", "(-3, -2), 5"],
    answer: 0,
    topic: "Analytic Geometry",
    difficulty: 3,
  },
  {
    id: "12-SS1",
    grade: 12,
    question:
      "Find the sum of the first 10 terms of the geometric series 3 + 6 + 12 + …",
    options: ["3069", "3066", "3072", "3075"],
    answer: 1,
    topic: "Sequences & Series",
    difficulty: 3,
  },
  {
    id: "12-CP1",
    grade: 12,
    question:
      "How many 4-digit numbers can be formed from 1–9 such that digits increase from left to right?",
    options: ["126", "84", "210", "495"],
    answer: 0,
    topic: "Counting & Probability",
    difficulty: 4,
  },
  {
    id: "12-PN1",
    grade: 12,
    question:
      "If p and q are primes greater than 2, what can be said about p² - q²?",
    options: [
      "Always even and divisible by 4",
      "Always odd",
      "Always prime",
      "Always divisible by 3",
    ],
    answer: 0,
    topic: "Properties of Numbers",
    difficulty: 3,
  },
  {
    id: "12-EG1",
    grade: 12,
    question: "In △ABC, AB = AC = 5 and BC = 6. Find the altitude from A.",
    options: ["4", "3", "√11", "2√6"],
    answer: 0,
    topic: "Euclidean Geometry",
    difficulty: 3,
  },
];
