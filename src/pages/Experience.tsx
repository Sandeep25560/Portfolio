import { FC } from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  subtitle?: string;
  details: string[];
  metrics: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Senior Software Engineer",
    company: "ValueLabs (Client: Mitchell)",
    duration: "Sept 2023 – Jul 2024",
    subtitle: "Promoted twice within 36 months: Intern → Software Engineer → Senior Software Engineer",
    metrics: ["35% API latency improvement", "15% fewer production defects", "Enterprise healthcare workflows"],
    details: [
      "Led development of scalable backend services using ASP.NET Core for enterprise insurance and claims workflows.",
      "Improved API performance through SQL query optimization, indexing, and efficient data access patterns.",
      "Designed secure REST APIs and authentication/authorization flows for production-grade business systems.",
      "Collaborated with product, QA, and engineering teams to deliver reliable claims and recovery features.",
    ],
  },
  {
    title: "Software Engineer",
    company: "ValueLabs",
    duration: "Feb 2022 – Sept 2023",
    metrics: ["25% faster data retrieval", "40% fewer integration issues", "React + .NET delivery"],
    details: [
      "Developed REST APIs and backend components using ASP.NET Core, SQL Server, and service-layer patterns.",
      "Built reusable React components for responsive web applications and integrated them with backend APIs.",
      "Designed database schemas and indexing strategies to improve reporting and transaction performance.",
      "Strengthened CI/CD workflows and Git practices to improve release predictability.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "ValueLabs",
    duration: "Sept 2021 – Feb 2022",
    metrics: ["20% faster API response", "Production support exposure", "Agile delivery foundation"],
    details: [
      "Assisted in API development using ASP.NET MVC and SQL Server for enterprise workflows.",
      "Supported debugging, QA validation, Azure deployment activities, and performance research.",
    ],
  },
];

const Experience: FC = () => {
  return (
    <section id="experience" className="section-shell py-24" aria-label="Experience Section">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="section-container relative">
        <motion.div className="text-center max-w-3xl mx-auto mb-14" initial={{ opacity: 0, y: -24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
          <span className="pill mb-4">Career growth with production ownership</span>
          <h2 className="text-3xl sm:text-5xl font-black gradient-text mb-4">Experience Timeline</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            A progression from intern to senior engineer, focused on backend reliability, React delivery, performance tuning, and enterprise healthcare workflows.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />
          <div className="space-y-10">
            {experienceData.map((exp, idx) => (
              <motion.div key={exp.title} className={`relative grid md:grid-cols-2 gap-6 items-start ${idx % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }}>
                <div className={`ml-12 md:ml-0 ${idx % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                  <motion.article whileHover={{ y: -6 }} className="glass-card p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400">{exp.title}</h3>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{exp.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 italic">{exp.duration}</p>
                      </div>
                      <span className="rounded-full bg-blue-100 dark:bg-blue-950 px-3 py-1 text-xs font-bold text-blue-700 dark:text-blue-300">0{idx + 1}</span>
                    </div>
                    {exp.subtitle && <p className="mb-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 p-3 text-sm font-medium text-purple-700 dark:text-purple-300">{exp.subtitle}</p>}
                    <div className="grid sm:grid-cols-3 gap-2 mb-5">
                      {exp.metrics.map((metric) => <div key={metric} className="rounded-xl bg-white/70 dark:bg-gray-950/70 border border-gray-200 dark:border-gray-800 p-3 text-xs font-bold text-gray-700 dark:text-gray-300">{metric}</div>)}
                    </div>
                    <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                      {exp.details.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" /> <span>{point}</span></li>)}
                    </ul>
                  </motion.article>
                </div>
                <div className="absolute left-4 md:left-1/2 top-7 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-600 ring-8 ring-blue-100 dark:ring-blue-950" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
