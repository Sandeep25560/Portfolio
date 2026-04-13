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
    title: ".Net Developer",
    company: "United Health Group",
    duration: "Oct 2024 – present",
    details: [
      "Designed microservices using ASP.NET Core and AWS ECS improving application scalability by 28% while enabling secure healthcare data processing across distributed enterprise systems.",
      "Developed REST APIs using .NET Core integrated with AWS Lambda enabling event-driven healthcare workflows while improving backend processing efficiency and ensuring interoperability across systems.",
      "Optimized SQL Server queries using Entity Framework Core ensuring efficient data retrieval scalability and high availability while supporting critical healthcare transaction systems across production environments.",
      "Implemented secure authentication using JWT and OAuth frameworks reducing unauthorized access risks by 21% while ensuring compliance with enterprise security standards and protecting healthcare information.",
      "Automated CI CD pipelines using AWS CodePipeline and Git ensuring consistent deployment workflows while reducing manual errors and improving release management across environments.",
      "Integrated AI assisted code validation tools enhancing development accuracy and code quality while reducing manual review efforts and enabling intelligent automation across development processes.",
      "Built asynchronous messaging systems using AWS SQS and .NET background services ensuring reliable data delivery while improving throughput across healthcare services."
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "ValueLabs",
    duration: "Oct 2023 – Jul 2024",
    subtitle:
      "Promoted twice within 36 months (Intern → Software Engineer → Senior Software Engineer)",
    details: [
      "Designed and built scalable backend services using C#, ASP.NET Core, and MVC architecture for enterprise web applications.",
      "Developed RESTful APIs and SOAP-based web services to enable integrations across distributed systems.",
      "Optimized SQL Server queries using T-SQL, improving backend performance by 30% and reducing latency by 200ms.",
      "Contributed to microservices deployed with Docker and Kubernetes in AWS to improve scalability and deployment consistency.",
      "Diagnosed and resolved complex production issues through advanced debugging and log analysis with engineering and product teams.",
      "Led code reviews, added NUnit unit tests, and fixed multithreading and concurrency issues to strengthen production stability.",
    ],
  },
  {
    title: "Software Engineer",
    company: "ValueLabs",
    duration: "April 2022 – Sep 2023",
    details: [
      "Developed backend components using .NET Core and WCF services following SDLC and Agile development practices.",
      "Designed relational database schemas and indexing strategies, improving data retrieval speed by 25%.",
      "Contributed to CI/CD pipelines using Jenkins and GitHub Actions to support automated builds and continuous deployment.",
      "Created UML diagrams and technical documentation to support system architecture and future enhancements.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "ValueLabs",
    duration: "Jan 2022 – March 2022",
    details: [
      "Assisted in building server-side APIs using ASP.NET MVC and SQL Server for enterprise web applications.",
      "Supported Azure deployments and Linux/Unix server configurations for development and lower environments.",
      "Researched performance optimization approaches and helped improve API response time by 20%.",
    ],
  },
  {
    title: "Software Engineer",
    company: "AT&T",
    duration: "Oct 2020 – Dec 2021",
    details: [
       "Developed web applications using ASP.NET and C# enhancing performance by 25% through optimized architectures supporting high volume telecom transactions and scalable enterprise systems.",
       "Engineered RESTful APIs using ASP.NET Web API enabling seamless communication across telecom services while integrating third-party systems and ensuring reliable data exchange.",
       "Designed database schemas and optimized complex SQL queries ensuring efficient data retrieval scalability and consistency while handling large telecom datasets across production systems.",
       "Implemented Angular based front end components improving UI responsiveness by 21% while delivering enhanced user experiences and seamless interaction with backend .NET services.",
       "Automated build and deployment processes using CI CD pipelines ensuring consistent release management while improving delivery reliability across development testing and production environments."
    ],
  },
];

const Experience: FC = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 transition-colors duration-300 py-20"
      aria-label="Experience Section"
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md transition-transform cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400">
                {exp.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                {exp.company}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                {exp.duration}
              </p>

              {exp.subtitle && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {exp.subtitle}
                </p>
              )}

              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mt-4">
                {exp.details.map((point, pointIdx) => (
                  <li key={pointIdx}>{point}</li>
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
