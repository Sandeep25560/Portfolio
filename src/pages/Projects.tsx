import { FC } from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import React from "react";

const GithubIcon = FaIcons.FaGithub as React.ComponentType;
const ArrowIcon = FaIcons.FaArrowRight as React.ComponentType;

interface CaseStudy {
  title: string;
  hook: string;
  problem: string;
  solution: string;
  impact: string[];
  tech: string[];
  github?: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "SmartSpend – Predictive Financial Intelligence",
    hook: "Built like a product for people who do not want to manually manage money every day.",
    problem:
      "Most budgeting tools show what happened after money is already gone. The real user problem is knowing how much is safe to spend today before the month gets risky.",
    solution:
      "Designed a full-stack budgeting platform with burn-rate forecasting, mood-aware spending insights, secure APIs, and dashboards that translate financial behavior into simple next actions.",
    impact: ["ML-assisted burn-rate forecasting", "Early warning signals for risky spending", "Clean user flows for low-friction daily use"],
    tech: ["React", "Flask", "Machine Learning", "MySQL", "REST APIs"],
    github: "https://github.com/Sandeep25560",
  },
  {
    title: "Planventory – Inventory Planning System",
    hook: "A real-world ordering workflow for stores that need faster weekly decisions, not another generic CRUD app.",
    problem:
      "Small stores often track distributor orders manually, which creates missed products, inconsistent reorder quantities, and messy weekly planning.",
    solution:
      "Built a planning workflow with store-level settings, distributors, product counts, weekly order drafts, JWT authentication, and backend validation to make ordering structured and repeatable.",
    impact: ["Store-specific inventory configuration", "Weekly order planning workflow", "Secure ASP.NET Core API architecture"],
    tech: ["React", "ASP.NET Core", "JWT", "MySQL", "Entity Framework"],
    github: "https://github.com/Sandeep25560",
  },
  {
  title: "SentimentFlow — Sentiment Intelligence Platform",
  hook: "Built to turn unstructured text into clear emotional signals and decision-ready insights.",
  problem:
    "Teams often collect feedback from users, reviews, and messages, but the raw text is difficult to understand at scale. The challenge is converting emotional tone into useful signals without making users manually categorize everything.",
  solution:
    "Designed a sentiment analysis workflow that classifies text, surfaces emotional trends, and presents results in a simple analytics-focused interface. The project demonstrates NLP workflow design, classification logic, and product thinking around feedback intelligence.",
  impact: [
    "NLP-based sentiment classification",
    "Analytics-ready emotional signals",
    "Clean workflow for unstructured feedback"
  ],
  tech: ["React", "Python", "Flask", "NLP", "Machine Learning"],
  github: "https://github.com/Sandeep25560/sentimentflow",
}
  {
    title: "Employee Management System",
    hook: "A practical enterprise-style system focused on authentication, roles, data operations, and backend reliability.",
    problem:
      "Admin teams need a reliable way to manage employees, roles, and records without slow pages or insecure access patterns.",
    solution:
      "Delivered a full-stack employee portal with role-based access control, REST APIs, optimized database queries, and clean React screens for scalable admin workflows.",
    impact: ["Role-based access control", "Optimized CRUD APIs", "Scalable dashboard patterns"],
    tech: ["React", "ASP.NET Core", "MySQL", "RBAC", "REST APIs"],
    github: "https://github.com/Sandeep25560/Employee_Management",
  },
];

const decisionSignals = [
  "I think in user problems before technology choices.",
  "I design APIs and database models for change, not just the first demo.",
  "I care about measurable outcomes: latency, uptime, delivery speed, and reliability.",
];

const Projects: FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 mb-4">
            Case studies, not just project cards
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            These projects show how I approach product thinking, backend design, frontend usability, and real-world workflow problems.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {caseStudies.map((project, idx) => (
            <motion.article
              key={project.title}
              className="rounded-3xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.35 }}
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
                <div>
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-300 mb-2">Case Study 0{idx + 1}</p>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">{project.hook}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-300 hover:underline"
                    >
                      <GithubIcon /> View GitHub <ArrowIcon />
                    </a>
                  )}
                </div>

                <div className="space-y-5">
                  <div className="rounded-2xl bg-white dark:bg-gray-900 p-5 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="rounded-2xl bg-white dark:bg-gray-900 p-5 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{project.solution}</p>
                  </div>

                  <div className="rounded-2xl bg-white dark:bg-gray-900 p-5 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Impact Signals</h4>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {project.impact.map((item) => (
                        <div key={item} className="rounded-xl bg-gray-50 dark:bg-gray-800 px-3 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 sm:p-8 text-white shadow-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <h3 className="text-2xl font-bold mb-4">How I make engineering decisions</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {decisionSignals.map((signal) => (
              <div key={signal} className="rounded-2xl bg-white/10 border border-white/20 p-4 text-sm font-medium">
                {signal}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
