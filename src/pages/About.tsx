import { FC } from "react";
import { motion } from "framer-motion";

const About: FC = () => {
  const engineeringLoop = [
    { step: "01", title: "Model the problem", text: "Start with the workflow, constraints, data shape, and failure points before reaching for a framework." },
    { step: "02", title: "Build the contract", text: "Define clear APIs, validation, authentication, and service boundaries so frontend and backend can evolve safely." },
    { step: "03", title: "Protect the data path", text: "Tune SQL, reduce unnecessary work, cache where it earns its keep, and keep production behavior observable." },
    { step: "04", title: "Ship for reality", text: "Automate delivery, test critical paths, monitor releases, and design for the people who will operate the system after launch." },
  ];

  const certifications = [
    { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", status: "Certified" },
    { title: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", status: "Certified" },
    { title: "Azure Developer Associate (AZ-204)", issuer: "Microsoft", status: "In Progress" },
  ];

  const skillGroups = [
    { title: "Application Core", marker: "BUILD", skills: ["C#", ".NET Core", "ASP.NET Core", "ASP.NET MVC", "Web API", "Entity Framework Core", "Dapper", "LINQ"] },
    { title: "Experience Layer", marker: "INTERACT", skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
    { title: "Data & Security", marker: "PROTECT", skills: ["SQL Server", "MySQL", "JWT", "OAuth 2.0", "Azure AD", "Query Optimization", "Caching"] },
    { title: "Cloud & Delivery", marker: "SHIP", skills: ["AWS", "Azure", "Docker", "Azure DevOps", "AWS CodePipeline", "Git", "CI/CD", "CloudWatch"] },
  ];

  return (
    <section id="about" className="section-shell py-24" aria-label="About Section">
      <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="section-container relative">
        <motion.div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end mb-14" initial={{ opacity: 0, y: -24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div>
            <span className="pill mb-4">How I think as an engineer</span>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight">Not a stack list. <span className="gradient-text">An engineering operating system.</span></h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed border-l-2 border-violet-500 pl-6">
            I am a Full Stack Software Engineer with 6+ years of enterprise experience. Across healthcare, banking, and telecom, the pattern has stayed consistent: understand the workflow, design clean service boundaries, keep the data path fast, secure access, and make releases easier to operate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-12">
          {engineeringLoop.map((item, index) => (
            <motion.article key={item.step} className="glass-card p-6 relative overflow-hidden" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.35 }} whileHover={{ y: -6 }}>
              <span className="absolute -right-2 -top-5 text-7xl font-black text-gray-100 dark:text-white/[0.04]">{item.step}</span>
              <p className="text-xs font-black tracking-[0.22em] text-violet-600 dark:text-violet-400 mb-5">PHASE {item.step}</p>
              <h3 className="text-xl font-black mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div className="glass-card p-6 sm:p-8 mb-10" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-2">My toolchain by responsibility</p>
              <h3 className="text-2xl sm:text-3xl font-black">From request to release</h3>
            </div>
            <span className="rounded-full bg-gray-950 dark:bg-white text-white dark:text-gray-950 px-4 py-2 text-xs font-black">.NET • Web • Data • Cloud</span>
          </div>

          <div className="grid lg:grid-cols-4 gap-5">
            {skillGroups.map((group, index) => (
              <motion.div key={group.title} whileHover={{ y: -6 }} className="rounded-3xl bg-white/75 dark:bg-gray-950/70 border border-gray-200 dark:border-gray-800 p-5">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <h4 className="text-lg font-black text-gray-900 dark:text-white">{group.title}</h4>
                  <span className="text-[10px] font-black tracking-[0.16em] text-blue-600 dark:text-blue-400">{group.marker}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => <span key={skill} className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">{skill}</span>)}
                </div>
                <div className="mt-5 h-1 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden"><motion.div className="h-full bg-gradient-to-r from-cyan-500 to-violet-500" initial={{ width: 0 }} whileInView={{ width: `${92 - index * 4}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }} /></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <motion.div className="glass-card p-6 sm:p-8" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-3">Education timeline</p>
            <h3 className="text-2xl font-black mb-6">Computer science, from foundation to specialization</h3>
            <div className="space-y-5">
              <div className="rounded-3xl bg-gray-950 text-white dark:bg-white dark:text-gray-950 p-5">
                <div className="flex flex-wrap justify-between gap-3"><strong className="text-lg">Master of Science, Computer Science</strong><span className="text-sm font-bold opacity-70">Aug 2024 – Dec 2025</span></div>
                <p className="mt-2 opacity-80">Kent State University</p>
              </div>
              <div className="rounded-3xl border border-gray-200 dark:border-gray-800 p-5 bg-white/70 dark:bg-gray-950/60">
                <div className="flex flex-wrap justify-between gap-3"><strong className="text-lg">Bachelor of Science, Computer Science</strong><span className="text-sm font-bold text-gray-500">Jun 2017 – Jul 2021</span></div>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Anna University, Chennai</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="glass-card p-6 sm:p-8" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-3">Credentials</p>
            <h3 className="text-2xl font-black mb-6">Cloud learning that supports the work</h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="rounded-2xl bg-white/70 dark:bg-gray-950/70 p-4 border border-gray-200 dark:border-gray-800">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div><h4 className="font-bold text-gray-900 dark:text-white">{cert.title}</h4><p className="text-sm text-gray-500 mt-1">{cert.issuer}</p></div>
                    <span className="rounded-full bg-violet-100 dark:bg-violet-950/50 px-3 py-1 text-xs font-bold text-violet-700 dark:text-violet-300">{cert.status}</span>
                  </div>
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
