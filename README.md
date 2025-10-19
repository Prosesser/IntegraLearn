# 🌟 IntegraLearn

> 🚀 **Interactive Math Learning Platform** — Personalized assessments, real-time analytics, and targeted practice to help students master mathematics.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js Badge"/>
  <img src="https://img.shields.io/badge/React-149ECA?style=for-the-badge&logo=react&logoColor=white" alt="React Badge"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge"/>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind Badge"/>
  <img src="https://img.shields.io/badge/Convex-000000?style=for-the-badge&logoColor=white" alt="Convex Badge"/>
  <img src="https://img.shields.io/badge/Clerk-5E17EB?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk Badge"/>
</p>

<p align="center">
  <a href="https://github.com/Prosesser/integraLearnv1/stargazers">
    <img src="https://img.shields.io/github/stars/Prosesser/integraLearnv1?color=yellow&style=flat-square" alt="Stars"/>
  </a>
  <a href="https://github.com/Prosesser/integraLearnv1/issues">
    <img src="https://img.shields.io/github/issues/Prosesser/integraLearnv1?style=flat-square" alt="Issues"/>
  </a>
  <a href="https://github.com/Prosesser/integraLearnv1/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Prosesser/integraLearnv1?style=flat-square" alt="License"/>
  </a>
</p>

---

## 🧠 About

**IntegraLearn** is an interactive learning platform designed to help students improve their math skills through personalized assessments, detailed performance analytics, and targeted practice resources.  
The platform provides a comprehensive dashboard that tracks user progress, identifies strengths and weaknesses, and offers tailored recommendations for improvement.

---

## ✨ Features

- 🔐 **User Authentication** — Secure sign-in and user management with Clerk
- 📊 **Personalized Dashboard** — View overall performance, strengths, and focus areas
- 🧩 **Topic Breakdown** — Analyze performance by topic with detailed statistics
- 📈 **Progress Tracking** — Visualize improvement with charts and trends
- 🎯 **Practice Resources** — Get tailored practice materials based on your data
- 📱 **Responsive Design** — Fully optimized for desktop and mobile

---

## 🛠️ Technologies Used

| Category     | Technologies                                      |
| ------------ | ------------------------------------------------- |
| **Frontend** | React, Next.js (App Router), TypeScript, Recharts |
| **Backend**  | Convex, Node.js                                   |
| **Database** | Convex Database                                   |
| **Auth**     | Clerk                                             |
| **Styling**  | Tailwind CSS                                      |

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- A Clerk account for authentication

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Prosesser/integraLearnv1.git
   cd IntegraLearn
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add your Clerk API keys:

   ```plaintext
   CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Sign in using your Clerk account.
- Take math tests to assess your skills.
- View your dashboard to track progress and identify areas for improvement.
- Access practice resources tailored to your performance.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the developers of [Clerk](https://clerk.dev) for providing authentication solutions.
- Special thanks to the contributors and the open-source community for their support.
