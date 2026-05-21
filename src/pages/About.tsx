import { FC } from "react";
import { motion } from "framer-motion";

const About: FC = () => {
  const strengths = [
    { title: "Production Engineering", text: "Secure, scalable full-stack features across UI, APIs, and SQL-backed services." },
    { title: "Performance Mindset", text: "Improved API efficiency by 35% through SQL tuning, indexing, and backend optimization." },
    { title: "Cloud-Native Delivery", text: "Hands-on experience with Docker, Kubernetes, AWS, Azure, CI/CD, and reliable deployment workflows." },
    { title: "Enterprise Systems", text: "Healthcare, insurance, workflow automation, authentication, and data-heavy business applications." },
  ];

  const certifications = [
    { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", status: "Certified", focus: "Cloud fundamentals, AWS services, security, billing, and architecture basics" },
    { title: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", status: "Certified", focus: "Azure cloud concepts, governance, security, pricing, and core services" },
    { title: "Azure Developer Associate (AZ-204)", issuer: "Microsoft", status: "In Progress", focus: "Azure App Services, APIs, authentication, storage, monitoring, and cloud-native development" },
  ];

  const skillGroups = [
    { title: "Backend", level: "Strong", skills: ["C#", "ASP.NET Core", "REST APIs", "Entity Framework Core", "LINQ", "JWT", "API Security"] },
    { title: "Frontend", level: "Strong", skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "HTML5/CSS3"] },
    { title: "Data", level: "Strong", skills: ["SQL Server", "MySQL", "PostgreSQL", "Indexing", "Query Optimization", "Schema Design"] },
    { title: "Cloud & DevOps", level: "Practical", skills: ["Git/GitHub", "CI/CD", "Jenkins", "GitHub Actions", "Docker", "Kubernetes", "AWS", "Azure"] },
  ];

  return (
    <section id="about" className="section-shell py-24" aria-label="About Section">
      <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="section-container relative">
        <motion.div className="text-center max-w-4xl mx-auto mb-12" initial={{ opacity: 0, y: -24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="pill mb-4">Engineer profile</span>
          <h2 className="text-3xl sm:text-5xl font-black gradient-text mb-5">Skills that translate into production impact</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            I am a Full Stack Software Engineer with 4+ years of experience delivering production-grade applications using ASP.NET Core, React, TypeScript, SQL Server, Docker, Kubernetes, AWS, and Azure. My strongest work sits between secure backend APIs, responsive frontend delivery, database performance, cloud-native deployment, and enterprise workflow systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 mb-10">
          {strengths.map((item, index) => (
            <motion.div key={item.title} className="glass-card p-5" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.35 }} whileHover={{ y: -6 }}>
              <h3 className="text-lg font-black text-blue-600 dark:text-blue-400 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="glass-card p-6 sm:p-8 mb-10" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-black gradient-text">Technical Skill System</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Grouped by how I use them in real delivery: build, secure, optimize, deploy, and ship.</p>
            </div>
            <span className="rounded-full bg-blue-100 dark:bg-blue-950 px-4 py-2 text-xs font-bold text-blue-700 dark:text-blue-300">React + .NET + Cloud</span>
          </div>
          <div className="grid lg:grid-cols-4 gap-5">
            {skillGroups.map((group, index) => (
              <motion.div key={group.title} whileHover={{ y: -6 }} className="rounded-3xl bg-white/75 dark:bg-gray-950/70 border border-gray-200 dark:border-gray-800 p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-black text-gray-900 dark:text-white">{group.title}</h4>
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-300">{group.level}</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-800 mb-4 overflow-hidden">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600" initial={{ width: 0 }} whileInView={{ width: index < 3 ? "88%" : "80%" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.12 }} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => <span key={skill} className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">{skill}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div className="glass-card p-6" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
            <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400 mb-4">Education</h3>
            <div className="space-y-5 text-gray-700 dark:text-gray-300">
              <div className="rounded-2xl bg-white/70 dark:bg-gray-950/70 p-4 border border-gray-200 dark:border-gray-800"><strong className="block text-lg text-gray-900 dark:text-white">Master of Computer Science</strong><span>Kent State University</span><br /><span className="text-sm text-gray-500 dark:text-gray-400">Dec 2025</span></div>
              <div className="rounded-2xl bg-white/70 dark:bg-gray-950/70 p-4 border border-gray-200 dark:border-gray-800"><strong className="block text-lg text-gray-900 dark:text-white">Bachelor of Computer Science</strong><span>Anna University</span></div>
            </div>
          </motion.div>

          <motion.div className="glass-card p-6" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
            <h3 className="text-2xl font-black text-blue-600 dark:text-blue-400 mb-4">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.title} className="rounded-2xl bg-white/70 dark:bg-gray-950/70 p-4 border border-gray-200 dark:border-gray-800">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1"><h4 className="font-bold text-gray-900 dark:text-white">{cert.title}</h4><span className="rounded-full bg-blue-100 dark:bg-blue-950 px-3 py-1 text-xs font-bold text-blue-700 dark:text-blue-300">{cert.status}</span></div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{cert.focus}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
