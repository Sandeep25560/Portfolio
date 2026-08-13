import { FC } from "react";
import { motion } from "framer-motion";

const About: FC = () => {
  const engineeringLoop = [
    { step: "01", title: "Model the problem", text: "Start with the workflow, constraints, data shape, and failure points before choosing the implementation." },
    { step: "02", title: "Build the contract", text: "Shape APIs, validation, authentication, and service boundaries so frontend and backend can evolve safely." },
    { step: "03", title: "Protect the data path", text: "Tune SQL, reduce unnecessary work, cache deliberately, and make production behavior observable." },
    { step: "04", title: "Ship for reality", text: "Automate delivery, test critical paths, monitor releases, and design for the people operating the system after launch." },
  ];

  const skillGroups = [
    { label: "BUILD", title: "Application Core", skills: ["C#", ".NET Core", "ASP.NET Core", "ASP.NET MVC", "Web API", "Entity Framework Core", "Dapper", "LINQ"] },
    { label: "INTERACT", title: "Experience Layer", skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"] },
    { label: "PROTECT", title: "Data & Security", skills: ["SQL Server", "MySQL", "JWT", "OAuth 2.0", "Azure AD", "Query Optimization", "Caching"] },
    { label: "SHIP", title: "Cloud & Delivery", skills: ["AWS", "Azure", "Docker", "Azure DevOps", "AWS CodePipeline", "Git", "CI/CD", "CloudWatch"] },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#f4f1e8] text-gray-950 dark:bg-[#0b0d10] dark:text-white py-24" aria-label="About Section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-10 lg:gap-20 items-start mb-20" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-black tracking-[0.32em] uppercase text-orange-700 dark:text-orange-400 mb-4">About / 02</p>
            <h2 className="text-4xl sm:text-6xl font-black leading-[0.95] tracking-tight">How I<br />engineer.</h2>
          </div>
          <div>
            <p className="text-2xl sm:text-4xl font-semibold leading-tight max-w-4xl">I do not think of engineering as a list of frameworks. I think in <span className="underline decoration-orange-500 decoration-4 underline-offset-4">systems, contracts, data paths, and operating reality.</span></p>
            <p className="mt-8 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">With 6+ years across healthcare, banking, and telecom, the pattern has stayed consistent: understand the workflow, design clean service boundaries, keep the data path fast, secure access, and make releases easier to operate.</p>
          </div>
        </motion.div>

        <div className="border-t border-black/15 dark:border-white/15">
          {engineeringLoop.map((item, index) => (
            <motion.div key={item.step} className="grid lg:grid-cols-[0.3fr_0.7fr_1.4fr] gap-5 lg:gap-10 py-9 border-b border-black/15 dark:border-white/15" initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
              <span className="text-5xl sm:text-7xl font-black text-black/10 dark:text-white/10">{item.step}</span>
              <h3 className="text-xl sm:text-2xl font-black self-center">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed self-center max-w-2xl">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20 py-20 border-b border-black/15 dark:border-white/15">
          <div><p className="text-xs font-black tracking-[0.3em] uppercase text-orange-700 dark:text-orange-400 mb-4">Toolchain</p><h3 className="text-3xl sm:text-5xl font-black leading-tight">From request<br />to release.</h3></div>
          <div className="space-y-10">
            {skillGroups.map((group) => (
              <div key={group.title} className="grid md:grid-cols-[0.35fr_0.65fr] gap-5 border-l-4 border-orange-500 pl-5">
                <div><p className="text-[10px] font-black tracking-[0.25em] text-orange-700 dark:text-orange-400 mb-2">{group.label}</p><h4 className="text-xl font-black">{group.title}</h4></div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 content-start">{group.skills.map((skill) => <span key={skill} className="text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-black/20 dark:border-white/20 pb-1">{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 pt-20">
          <div>
            <p className="text-xs font-black tracking-[0.3em] uppercase text-orange-700 dark:text-orange-400 mb-5">Education</p>
            <div className="space-y-8">
              <div><p className="text-sm text-gray-500 mb-1">2024 — 2025</p><h4 className="text-2xl font-black">Master of Science, Computer Science</h4><p className="mt-2 text-gray-600 dark:text-gray-400">Kent State University</p></div>
              <div><p className="text-sm text-gray-500 mb-1">2017 — 2021</p><h4 className="text-2xl font-black">Bachelor of Science, Computer Science</h4><p className="mt-2 text-gray-600 dark:text-gray-400">Anna University, Chennai</p></div>
            </div>
          </div>
          <div>
            <p className="text-xs font-black tracking-[0.3em] uppercase text-orange-700 dark:text-orange-400 mb-5">Credentials</p>
            <div className="space-y-5">
              <div className="border-b border-black/15 dark:border-white/15 pb-5"><h4 className="font-black text-lg">AWS Certified Cloud Practitioner</h4><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Amazon Web Services</p></div>
              <div className="border-b border-black/15 dark:border-white/15 pb-5"><h4 className="font-black text-lg">Microsoft Azure Fundamentals (AZ-900)</h4><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Microsoft</p></div>
              <div className="border-b border-black/15 dark:border-white/15 pb-5"><h4 className="font-black text-lg">Azure Developer Associate (AZ-204)</h4><p className="text-sm text-gray-600 dark:text-gray-400 mt-1">In Progress</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
