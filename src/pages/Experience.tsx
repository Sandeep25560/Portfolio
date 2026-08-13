import { FC } from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  subtitle: string;
  details: string[];
  metrics: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: ".NET Developer",
    company: "UnitedHealth Group",
    duration: "Oct 2024 – Present",
    subtitle: "Healthcare engineering across secure APIs, distributed services, cloud delivery, and high-availability data workflows.",
    metrics: ["28% scalability improvement", "AWS + ASP.NET Core", "Secure healthcare systems"],
    details: [
      "Designed microservices using ASP.NET Core and AWS ECS, improving application scalability by 28% across distributed healthcare systems.",
      "Developed REST APIs with .NET Core and AWS Lambda for event-driven healthcare workflows and system interoperability.",
      "Optimized SQL Server data access with Entity Framework Core for reliable, high-availability transaction processing.",
      "Implemented JWT and OAuth authentication to strengthen application security and access control.",
      "Automated delivery with AWS CodePipeline and Git and built asynchronous workflows with AWS SQS and .NET background services.",
      "Improved observability and performance using CloudWatch, structured logging, reusable middleware, Redis caching, and profiling.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "ValueLabs",
    duration: "Jan 2022 – Jul 2024",
    subtitle: "Enterprise banking applications combining .NET services, Angular interfaces, Azure cloud workloads, and SQL performance engineering.",
    metrics: ["26% processing improvement", "Azure cloud delivery", "High-volume SQL workloads"],
    details: [
      "Developed enterprise banking applications using ASP.NET MVC and .NET Core, improving transaction processing efficiency by 26%.",
      "Built RESTful APIs with ASP.NET Web API and Entity Framework for reliable integration between banking services.",
      "Implemented Azure App Services and Azure Functions to support scalable cloud and serverless workloads.",
      "Optimized SQL Server queries and stored procedures to reduce latency for high-volume financial transactions.",
      "Implemented Azure Active Directory authentication and automated CI/CD pipelines with Azure DevOps.",
      "Built responsive Angular and Bootstrap interfaces and used Azure Redis Cache and .NET Core microservices to improve scalability.",
    ],
  },
  {
    title: "Software Engineer",
    company: "AT&T",
    duration: "Jun 2020 – Dec 2021",
    subtitle: "Telecom web platforms focused on scalable ASP.NET services, Angular experiences, API integration, SQL performance, and production reliability.",
    metrics: ["25% application improvement", "21% UI improvement", "Telecom platform engineering"],
    details: [
      "Developed enterprise web applications using ASP.NET and C#, improving application performance by 25% for high-volume telecom workflows.",
      "Engineered RESTful APIs using ASP.NET Web API and integrated third-party telecom services through secure protocols.",
      "Designed relational database schemas and optimized complex SQL queries across large production datasets.",
      "Built reusable Angular components integrated with .NET services, improving UI responsiveness by 21%.",
      "Automated build and deployment processes through CI/CD pipelines and applied caching to reduce repeated backend processing.",
      "Used NUnit testing, structured logging, and performance profiling to improve reliability, maintainability, and production diagnostics.",
    ],
  },
];

const Experience: FC = () => {
  return (
    <section id="experience" className="section-shell py-24" aria-label="Experience Section">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="section-container relative">
        <motion.div className="text-center max-w-3xl mx-auto mb-14" initial={{ opacity: 0, y: -24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
          <span className="pill mb-4">6+ years • Healthcare • Banking • Telecom</span>
          <h2 className="text-3xl sm:text-5xl font-black gradient-text mb-4">Engineering Across Industries</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            My career spans telecom, banking, and healthcare—building secure APIs, responsive applications, cloud workloads, and data-intensive systems with measurable production impact.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />
          <div className="space-y-10">
            {experienceData.map((exp, idx) => (
              <motion.div key={exp.company} className={`relative grid md:grid-cols-2 gap-6 items-start ${idx % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }}>
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
                    <p className="mb-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 p-3 text-sm font-medium text-purple-700 dark:text-purple-300">{exp.subtitle}</p>
                    <div className="grid sm:grid-cols-3 gap-2 mb-5">
                      {exp.metrics.map((metric) => <div key={metric} className="rounded-xl bg-white/70 dark:bg-gray-950/70 border border-gray-200 dark:border-gray-800 p-3 text-xs font-bold text-gray-700 dark:text-gray-300">{metric}</div>)}
                    </div>
                    <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                      {exp.details.map((point) => <li key={point} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" /><span>{point}</span></li>)}
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
