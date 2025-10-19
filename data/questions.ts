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

  // Number Sense & Algebra
  {
    id: "9-NSA1",
    grade: 9,
    question: "What is the value of 25 × 2^4 ÷ 5^2?",
    options: ["8", "16", "4", "2"],
    answer: 1,
    topic: "Number Sense & Algebra",
    difficulty: 1,
  },
  {
    id: "9-NSA2",
    grade: 9,
    question: "If 3x + 5 = 2x + 7, what is x?",
    options: ["1", "2", "5", "7"],
    answer: 1,
    topic: "Number Sense & Algebra",
    difficulty: 1,
  },

  // Linear Relations
  {
    id: "9-LR1",
    grade: 9,
    question: "The line passing through (1, 2) and (3, 6) has which equation?",
    options: ["y = 2x", "y = 2x + 1", "y = x + 1", "y = x + 2"],
    answer: 0,
    topic: "Linear Relations",
    difficulty: 2,
  },
  {
    id: "9-LR2",
    grade: 9,
    question: "If y = 2x + k passes through (4, 13), what is k?",
    options: ["7", "3", "5", "1"],
    answer: 2,
    topic: "Linear Relations",
    difficulty: 1,
  },

  // Measurement & Geometry
  {
    id: "9-MG1",
    grade: 9,
    question: "A square has area 81 cm². What is its perimeter?",
    options: ["9 cm", "27 cm", "18 cm", "36 cm"],
    answer: 3,
    topic: "Measurement & Geometry",
    difficulty: 1,
  },
  {
    id: "9-MG2",
    grade: 9,
    question:
      "A triangle has base 10 cm and height 7 cm. What is its area in cm²?",
    options: ["70", "45", "35", "17"],
    answer: 2,
    topic: "Measurement & Geometry",
    difficulty: 1,
  },

  // Data Management
  {
    id: "9-DM1",
    grade: 9,
    question:
      "In a group of 30 students, 18 play basketball, 12 play soccer, and 10 play both. How many play neither sport?",
    options: ["10", "8", "6", "4"],
    answer: 0,
    topic: "Data Management",
    difficulty: 2,
  },
  {
    id: "9-DM2",
    grade: 9,
    question: "How many different ways can 3 students be chosen from 8?",
    options: ["336", "24", "56", "120"],
    answer: 2,
    topic: "Data Management",
    difficulty: 2,
  },

  // === Grade 10 ===

  // Quadratic Functions
  {
    id: "10-QF1",
    grade: 10,
    question: "The graph of y = x^2 - 6x + 5 has its vertex at:",
    options: ["(3, -4)", "(6, 5)", "(0, 5)", "(2, 3)"],
    answer: 0,
    topic: "Quadratic Functions",
    difficulty: 2,
  },
  {
    id: "10-QF2",
    grade: 10,
    question: "What is one solution to x^2 - 4x = 0?",
    options: ["3", "-2", "4", "2"],
    answer: 2,
    topic: "Quadratic Functions",
    difficulty: 1,
  },
  {
    id: "10-QF3",
    grade: 10,
    question: "The sum of the roots of (x + 1)(x + 5) = 0 is:",
    options: ["4", "6", "−4", "-6"],
    answer: 3,
    topic: "Quadratic Functions",
    difficulty: 1,
  },
  {
    id: "10-QF4",
    grade: 10,
    question: "Which quadratic passes through (0,1), (1,2), (2,5)?",
    options: [
      "y = x^2 + 1",
      "y = x^2 + x + 1",
      "y = x^2 − 1",
      "y = x^2 + 2x + 1",
    ],
    answer: 0,
    topic: "Quadratic Functions",
    difficulty: 3,
  },

  // Trigonometry
  {
    id: "10-TG1",
    grade: 10,
    question: "sin θ = 0.5 and θ is acute. What is θ in degrees?",
    options: ["30", "45", "60", "90"],
    answer: 0,
    topic: "Trigonometry",
    difficulty: 1,
  },
  {
    id: "10-TG2",
    grade: 10,
    question: "What is cos 60°?",
    options: ["1", "0.866", "0.5", "0"],
    answer: 2,
    topic: "Trigonometry",
    difficulty: 1,
  },

  // Systems of Equations
  {
    id: "10-SE1",
    grade: 10,
    question: "Solve for x: 2x + 3y = 10 and x − y = 2",
    options: ["2/3", "3/16", "16/5", "4"],
    answer: 2,
    topic: "Systems of Equations",
    difficulty: 2,
  },
  {
    id: "10-SE2",
    grade: 10,
    question: "If x + y = 8 and x − y = 4, what is x?",
    options: ["8", "6", "4", "2"],
    answer: 1,
    topic: "Systems of Equations",
    difficulty: 1,
  },

  // Exponents & Powers
  {
    id: "10-EP1",
    grade: 10,
    question: "3^2 × 3^3 =",
    options: ["9", "15", "27", "243"],
    answer: 3,
    topic: "Exponents & Powers",
    difficulty: 1,
  },
  {
    id: "10-EP2",
    grade: 10,
    question: "What is the value of 2^5?",
    options: ["10", "16", "32", "64"],
    answer: 2,
    topic: "Exponents & Powers",
    difficulty: 1,
  },

  // === Grade 11 ===

  // Advanced Functions
  {
    id: "11-AF1",
    grade: 11,
    question: "If f(x) = x^2 - 3x + 2, what is f(4)?",
    options: ["26", "10", "6", "12"],
    answer: 2,
    topic: "Advanced Functions",
    difficulty: 2,
  },
  {
    id: "11-AF2",
    grade: 11,
    question: "The solution(s) to f(x) = 0 for f(x) = x^2 - 4 is:",
    options: ["x = ±2", "x = 2", "x = 4", "x = 0"],
    answer: 0,
    topic: "Advanced Functions",
    difficulty: 2,
  },
  {
    id: "11-AF3",
    grade: 11,
    question: "The function f(x) = |x − 5| has its minimum at which x?",
    options: ["5", "0", "−5", "1"],
    answer: 1,
    topic: "Advanced Functions",
    difficulty: 1,
  },
  {
    id: "11-AF4",
    grade: 11,
    question: "If g(x) = x^3, what is g(−2)?",
    options: ["4", "8", "−4", "-8"],
    answer: 3,
    topic: "Advanced Functions",
    difficulty: 1,
  },

  // Sequences & Series
  {
    id: "11-SS1",
    grade: 11,
    question: "What is the 6th term of the sequence a_n = 2n + 1?",
    options: ["13", "12", "11", "17"],
    answer: 0,
    topic: "Sequences & Series",
    difficulty: 1,
  },
  {
    id: "11-SS2",
    grade: 11,
    question: "The sum of the first five terms of 3, 6, 9, ... is:",
    options: ["90", "60", "75", "45"],
    answer: 3,
    topic: "Sequences & Series",
    difficulty: 1,
  },
  {
    id: "11-SS3",
    grade: 11,
    question:
      "In a geometric sequence with first term 2 and ratio 3, what is the 4th term?",
    options: ["18", "24", "54", "162"],
    answer: 2,
    topic: "Sequences & Series",
    difficulty: 2,
  },
  {
    id: "11-SS4",
    grade: 11,
    question:
      "Find the sum S_n = a + (a+d) + ... + [a+(n−1)d] for a=2, d=3, n=4.",
    options: ["14", "28", "26", "20"],
    answer: 2,
    topic: "Sequences & Series",
    difficulty: 2,
  },

  // Analytic Geometry
  {
    id: "11-AG1",
    grade: 11,
    question: "Distance between (3, 4) and (7, 7):",
    options: ["3", "4", "5", "7"],
    answer: 2,
    topic: "Analytic Geometry",
    difficulty: 1,
  },
  {
    id: "11-AG2",
    grade: 11,
    question:
      "What is the equation of a circle with center (2, -1) and radius 5?",
    options: [
      "(x-2)^2 + (y+1)^2 = 25",
      "(x+2)^2 + (y−1)^2 = 25",
      "(x−2)^2 + (y+1)^2 = 5",
      "(x+2)^2 + (y−1)^2 = 5",
    ],
    answer: 0,
    topic: "Analytic Geometry",
    difficulty: 2,
  },

  // Counting & Probability
  {
    id: "11-CP1",
    grade: 11,
    question: "In how many ways can 4 books be arranged on a shelf?",
    options: ["20", "16", "24", "64"],
    answer: 2,
    topic: "Counting & Probability",
    difficulty: 1,
  },
  {
    id: "11-CP2",
    grade: 11,
    question:
      "A die is rolled once. What is the probability of rolling an even number?",
    options: ["3/2", "1/4", "1/3", "1/2"],
    answer: 3,
    topic: "Counting & Probability",
    difficulty: 1,
  },

  // === Grade 12 ===

  // Exponents & Logarithms
  {
    id: "12-EL1",
    grade: 12,
    question: "If log₂ x = 5, what is x?",
    options: ["10", "25", "32", "64"],
    answer: 2,
    topic: "Exponents & Logarithms",
    difficulty: 1,
  },
  {
    id: "12-EL2",
    grade: 12,
    question: "What is log₁₀ 1000?",
    options: ["1", "2", "3", "10"],
    answer: 2,
    topic: "Exponents & Logarithms",
    difficulty: 1,
  },
  {
    id: "12-EL3",
    grade: 12,
    question: "If log₃ 81 = y, what is y?",
    options: ["3", "4", "5", "6"],
    answer: 1,
    topic: "Exponents & Logarithms",
    difficulty: 2,
  },
  {
    id: "12-EL4",
    grade: 12,
    question: "What is 10^{log₁₀ 5}?",
    options: ["1", "2", "5", "10"],
    answer: 2,
    topic: "Exponents & Logarithms",
    difficulty: 2,
  },

  // Trigonometry
  {
    id: "12-TG1",
    grade: 12,
    question: "tan x = 1 with x in quadrant III. What is x in degrees?",
    options: ["225", "135", "315", "45"],
    answer: 0,
    topic: "Trigonometry",
    difficulty: 2,
  },
  {
    id: "12-TG2",
    grade: 12,
    question: "What is the exact value of sin 30°?",
    options: ["1", "0.866", "0.707", "0.5"],
    answer: 3,
    topic: "Trigonometry",
    difficulty: 1,
  },

  // Functions, Equations, and Polynomials
  {
    id: "12-FEP1",
    grade: 12,
    question: "What are the roots of x² − 5x + 6 = 0?",
    options: ["2, 3", "1, 6", "−2, −3", "−1, −6"],
    answer: 0,
    topic: "Functions, Equations, and Polynomials",
    difficulty: 1,
  },
  {
    id: "12-FEP2",
    grade: 12,
    question: "If f(x) = x³ − x, what is f(−1)?",
    options: ["0", "1", "−1", "2"],
    answer: 0,
    topic: "Functions, Equations, and Polynomials",
    difficulty: 1,
  },

  // Analytic Geometry
  {
    id: "12-AG1",
    grade: 12,
    question:
      "What is the equation of the circle with center (−3, 2) and radius 4?",
    options: [
      "(x+3)^2 + (y−2)^2 = 16",
      "(x−3)^2 + (y+2)^2 = 16",
      "(x+3)^2 + (y+2)^2 = 4",
      "(x−3)^2 + (y−2)^2 = 4",
    ],
    answer: 0,
    topic: "Analytic Geometry",
    difficulty: 2,
  },
  {
    id: "12-AG2",
    grade: 12,
    question: "The point (7, y) is on the line y = 2x − 3. What is y?",
    options: ["10", "11", "12", "13"],
    answer: 1,
    topic: "Analytic Geometry",
    difficulty: 1,
  },

  // Sequences & Series
  {
    id: "12-SS1",
    grade: 12,
    question:
      "What is the sum of the first 5 terms of the series 2, 5, 8, ...?",
    options: ["35", "32", "30", "40"],
    answer: 3,
    topic: "Sequences & Series",
    difficulty: 2,
  },
  {
    id: "12-SS2",
    grade: 12,
    question:
      "The 5th term of the geometric sequence with first term 1 and ratio 2 is:",
    options: ["8", "16", "32", "64"],
    answer: 1,
    topic: "Sequences & Series",
    difficulty: 1,
  },

  // Euclidean Geometry
  {
    id: "12-EG1",
    grade: 12,
    question: "The sum of the interior angles in a pentagon is:",
    options: ["540°", "720°", "900°", "1080°"],
    answer: 0,
    topic: "Euclidean Geometry",
    difficulty: 1,
  },
  {
    id: "12-EG2",
    grade: 12,
    question: "The length of the diagonal in a square of side 6 is:",
    options: ["6", "6√2", "12", "3√2"],
    answer: 1,
    topic: "Euclidean Geometry",
    difficulty: 2,
  },

  // Counting & Probability
  {
    id: "12-CP1",
    grade: 12,
    question: "From 6 students, in how many ways can a team of 3 be chosen?",
    options: ["20", "60", "120", "15"],
    answer: 0,
    topic: "Counting & Probability",
    difficulty: 2,
  },
  {
    id: "12-CP2",
    grade: 12,
    question:
      "What is the probability of picking a red ball from a bag with 3 red, 2 blue, and 5 green?",
    options: ["1/10", "1/5", "3/10", "3/5"],
    answer: 2,
    topic: "Counting & Probability",
    difficulty: 2,
  },

  // Properties of Numbers
  {
    id: "12-PN1",
    grade: 12,
    question:
      "What is the smallest positive integer divisible by both 8 and 12?",
    options: ["12", "16", "24", "36"],
    answer: 2,
    topic: "Properties of Numbers",
    difficulty: 2,
  },
  {
    id: "12-PN2",
    grade: 12,
    question: "If n is odd, which must also be odd?",
    options: ["n + 3", "2n", "n^2", "n - 1"],
    answer: 2,
    topic: "Properties of Numbers",
    difficulty: 2,
  },
];
