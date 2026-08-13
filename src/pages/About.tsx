import { FC } from "react";
import { motion } from "framer-motion";

const About: FC = () => {
  const process = [
    { step: "01", title: "Model the workflow", text: "Start with the user path, constraints, data shape, and failure points before choosing implementation details." },
    { step: "02", title: "Design the contract", text: "Define APIs, validation, authentication, and service boundaries so frontend and backend can evolve safely." },
    { step: "03", title: "Protect the data path", text: "Tune SQL, reduce unnecessary work, cache where it helps, and keep production behavior observable." },
    { step: "04", title: "Ship for reality", text: "Automate delivery, test critical paths, monitor releases, and make the system easier to operate after launch." },
  ];

  const skillGroups = [
    { label: "Application Core", skills: ["C#", ".NET Core", "ASP.NET Core", "ASP.NET MVC", "Web API", "Entity Framework Core", "Dapper", "LINQ"] },
    { label: "Experience Layer", skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
    { label: "Data & Security", skills: ["SQL Server", "MySQL", "JWT", "OAuth 2.0", "Azure AD", "Query Optimization", "Caching"] },
    { label: "Cloud & Delivery", skills: ["AWS", "Azure", "Docker", "Azure DevOps", "AWS CodePipeline", "Git", "CI/CD", "CloudWatch"] },
  ];

  const certifications = [
    { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", status: "Certified" },
    { title: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", status: "Certified" },
    { title: "Azure Developer Associate (AZ-204)", issuer: "Microsoft", status: "In Progress" },
  ];

  return (
    <section id="about" className="section-shell py-24 sm:py-28" aria-label="About Section">
      <div className="absolute -right-24 top-16 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="section-container relative">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-end mb-16">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="pill mb-5">How I engineer</span>
            <h2 className="text-4xl sm:text-6xl font-black leading-[1.02] tracking-tight">
              A practical operating system for <span className="gradient-text">production software.</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:border-l-2 lg:border-violet-400 lg:pl-8">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I am a Full Stack Software Engineer with 6+ years of enterprise experience across healthcare, banking, and telecom. My work sits at the intersection of secure APIs, responsive interfaces, SQL performance, cloud delivery, and production reliability.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12 mb-16">
          <motion.aside initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400 mb-3">Engineering loop</p>
            <h3 className="text-3xl font-black mb-4">From ambiguity to a system people can trust.</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">The tools change from project to project. The sequence I use to reduce risk stays remarkably consistent.</p>
          </motion.aside>

          <div className="border-t border-gray-200 dark:border-gray-800">
            {process.map((item, index) => (
              <motion.article key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="grid sm:grid-cols-[90px_0.8fr_1.2fr] gap-4 sm:gap-6 py-7 border-b border-gray-200 dark:border-gray-800 items-start">
                <div className="text-4xl font-black text-gray-200 dark:text-white/[0.08]">{item.step}</div>
                <h4 className="text-xl font-black text-gray-950 dark:text-white">{item.title}</h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/70 shadow-xl overflow-hidden mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 p-6 sm:p-8 border-b border-gray-200 dark:border-gray-800">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-600 dark:text-purple-300 mb-2">Toolchain by responsibility</p>
              <h3 className="text-2xl sm:text-3xl font-black">Build → interact → protect → ship</h3>
            </div>
            <span className="rounded-full bg-gray-950 dark:bg-white text-white dark:text-gray-950 px-4 py-2 text-xs font-black">.NET • Web • Data • Cloud</span>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {skillGroups.map((group, index) => (
              <motion.div key={group.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="grid lg:grid-cols-[220px_1fr] gap-4 p-6 sm:px-8">
                <div>
                  <p className="text-sm font-black text-blue-600 dark:text-blue-400">0{index + 1}</p>
                  <h4 className="text-lg font-black mt-1">{group.label}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => <span key={skill} className="rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300">{skill}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/70 shadow-xl p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400 mb-3">Education</p>
            <h3 className="text-2xl font-black mb-7">Computer science foundation and specialization</h3>
            <div className="space-y-6">
              <div className="grid sm:grid-cols-[1fr_auto] gap-3 pb-6 border-b border-gray-200 dark:border-gray-800">
                <div><h4 className="font-black text-lg">Master of Science, Computer Science</h4><p className="text-gray-600 dark:text-gray-400 mt-1">Kent State University</p></div><span className="text-sm font-bold text-gray-500">Aug 2024 – Dec 2025</span>
              </div>
              <div className="grid sm:grid-cols-[1fr_auto] gap-3">
                <div><h4 className="font-black text-lg">Bachelor of Science, Computer Science</h4><p className="text-gray-600 dark:text-gray-400 mt-1">Anna University, Chennai</p></div><span className="text-sm font-bold text-gray-500">Jun 2017 – Jul 2021</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-600 dark:text-purple-300 mb-3">Credentials</p>
            <h3 className="text-2xl font-black mb-6">Cloud learning that supports the work</h3>
            <div className="divide-y divide-purple-100 dark:divide-purple-900/40">
              {certifications.map((cert) => (
                <div key={cert.title} className="py-4 first:pt-0 last:pb-0 flex flex-wrap items-start justify-between gap-3">
                  <div><h4 className="font-bold">{cert.title}</h4><p className="text-sm text-gray-500 mt-1">{cert.issuer}</p></div>
                  <span className="rounded-full bg-white/80 dark:bg-gray-950/60 border border-purple-100 dark:border-purple-900 px-3 py-1 text-xs font-bold text-purple-700 dark:text-purple-300">{cert.status}</span>
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
