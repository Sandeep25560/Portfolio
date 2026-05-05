import { FC } from "react";
import { motion } from "framer-motion";

const About: FC = () => {
  const strengths = [
    {
      title: "Production Engineering",
      text: "Built and supported secure, scalable full-stack features across UI, APIs, and SQL-backed services.",
    },
    {
      title: "Performance Mindset",
      text: "Improved endpoint latency by 35% through SQL tuning, indexing, and backend execution-path optimization.",
    },
    {
      title: "Healthcare & Insurance Domain",
      text: "Delivered enterprise workflows for claims, recovery, treatment tracking, and case management systems.",
    },
    {
      title: "Ownership & Growth",
      text: "Promoted from intern to software engineer to senior software engineer within 36 months.",
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "Certified",
      focus: "Cloud fundamentals, AWS services, security, billing, and architecture basics",
    },
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      status: "Certified",
      focus: "Azure cloud concepts, governance, security, pricing, and core services",
    },
    {
      title: "Azure Developer Associate (AZ-204)",
      issuer: "Microsoft",
      status: "In Progress",
      focus: "Azure App Services, APIs, authentication, storage, monitoring, and cloud-native development",
    },
  ];

  const skills = [
    "C#", "ASP.NET Core", "REST APIs", "Entity Framework", "SQL Server", "MySQL",
    "React", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "Jest",
    "Git/GitHub", "CI/CD", "Docker", "AWS", "Azure", "Application Security",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 transition-colors duration-300 py-20"
      aria-label="About Section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-5 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-10 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I am a Full Stack Software Engineer with 3+ years of experience delivering production-grade applications using ASP.NET Core, React, TypeScript, and SQL Server. My strongest work is at the intersection of secure backend APIs, responsive frontends, database performance, and enterprise healthcare/insurance workflows.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-4 mb-10">
          {strengths.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 shadow-md border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-lg font-semibold text-blue-500 dark:text-blue-400 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400 mb-4">Education</h3>
            <div className="space-y-5 text-gray-700 dark:text-gray-300">
              <div>
                <strong className="block text-lg text-gray-900 dark:text-white">Master of Computer Science</strong>
                <span>Kent State University</span><br />
                <span className="text-sm text-gray-500 dark:text-gray-400">GPA: 3.9 / 4.0 • Dec 2025</span>
              </div>
              <div>
                <strong className="block text-lg text-gray-900 dark:text-white">Bachelor of Computer Science</strong>
                <span>Anna University</span><br />
                <span className="text-sm text-gray-500 dark:text-gray-400">GPA: 8.65 / 10</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400 mb-4">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.title} className="rounded-2xl bg-white dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
                    <span className="rounded-full bg-blue-100 dark:bg-blue-950 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 leading-relaxed">{cert.focus}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-400 mb-5 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.04 }}
                className="bg-white dark:bg-gray-700 px-3 py-2 rounded-lg text-center shadow-sm text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
