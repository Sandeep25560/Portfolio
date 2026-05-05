import { FC } from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  subtitle?: string;
  details: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "ValueLabs (Client: Mitchell)",
    duration: "Oct 2023 – Jul 2024",
    subtitle: "Promoted twice within 36 months (Intern → Software Engineer → Senior Software Engineer)",
    details: [
      "Led development of scalable backend services using ASP.NET Core for enterprise insurance workflows.",
      "Improved API performance by up to 35% through SQL query optimization and efficient data access patterns.",
      "Built secure authentication and authorization flows ensuring compliance with enterprise-grade standards.",
      "Collaborated cross-functionally to deliver high-impact features across claims and recovery systems.",
    ],
  },
  {
    title: "Software Engineer",
    company: "ValueLabs",
    duration: "Apr 2022 – Sep 2023",
    details: [
      "Developed REST APIs and backend components using .NET Core and SQL Server.",
      "Designed database schemas and indexing strategies improving data retrieval performance by 25%.",
      "Contributed to CI/CD pipelines enabling faster and more reliable deployments.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "ValueLabs",
    duration: "Jan 2022 – Mar 2022",
    details: [
      "Assisted in building enterprise APIs and improved API response times by 20%.",
      "Supported cloud deployments and production debugging efforts.",
    ],
  },
];

const Experience: FC = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400">{exp.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 italic">{exp.duration}</p>
              {exp.subtitle && <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{exp.subtitle}</p>}

              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
