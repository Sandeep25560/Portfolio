import { FC } from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import React from "react";

const GithubIcon = FaIcons.FaGithub as React.ComponentType;

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
}

const projects: Project[] = [
  {
    title: "SmartSpend – Predictive Budgeting Platform",
    description:
      "Built an AI-powered financial intelligence platform that analyzes spending patterns and predicts budget burn rate. Designed ML-integrated APIs and interactive dashboards to help users make smarter financial decisions.",
    tech: ["React", "Flask", "Machine Learning", "MySQL"],
    github: "https://github.com/Sandeep25560",
  },
  {
    title: "Planventory – Inventory Planning System",
    description:
      "Developed a full-stack inventory and ordering system for real-world store workflows. Implemented JWT authentication, store-level configuration, and scalable backend APIs for managing products and distributors.",
    tech: ["React", "ASP.NET Core", "MySQL"],
    github: "https://github.com/Sandeep25560",
  },
  {
    title: "Employee Management System",
    description:
      "Designed and built a full-stack employee system with secure authentication, role-based access, and optimized backend queries for high-performance CRUD operations.",
    tech: ["React", "ASP.NET Core", "MySQL"],
    github: "https://github.com/Sandeep25560/Employee_Management",
  },
];

const Projects: FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-500 hover:underline"
                >
                  <GithubIcon /> GitHub
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
