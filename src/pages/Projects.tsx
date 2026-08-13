import { FC } from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import React from "react";

const GithubIcon = FaIcons.FaGithub as React.ComponentType;
const ArrowIcon = FaIcons.FaArrowRight as React.ComponentType;

interface CaseStudy {
  title: string;
  category: string;
  hook: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  github?: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "SmartSpend",
    category: "FINANCIAL INTELLIGENCE",
    hook: "A budgeting product built around one question: what is safe to spend today?",
    problem: "Traditional budgeting apps explain the past. They rarely help a user make a confident decision before the next purchase.",
    solution: "Built a full-stack decision layer around burn rate, runway, transaction behavior, and early risk signals so financial data becomes an immediate next action.",
    outcome: "Predictive runway, low-friction daily decisions, and behavior-aware financial guidance.",
    tech: ["React", "Flask", "Machine Learning", "MySQL", "REST APIs"],
    github: "https://github.com/Sandeep25560",
  },
  {
    title: "Planventory",
    category: "OPERATIONS SYSTEM",
    hook: "Inventory planning designed around how a store actually prepares an order week after week.",
    problem: "Manual distributor ordering creates missed products, inconsistent quantities, and repeated decision work.",
    solution: "Designed store-specific inventory settings, distributor relationships, weekly order drafts, authentication, and backend validation as one repeatable workflow.",
    outcome: "Structured weekly ordering with less ambiguity and cleaner operational data.",
    tech: ["React", "ASP.NET Core", "JWT", "MySQL", "Entity Framework"],
    github: "https://github.com/Sandeep25560",
  },
  {
    title: "SentimentFlow",
    category: "AI / REAL-TIME PIPELINE",
    hook: "Speech becomes structured emotional context instead of disappearing into a transcript.",
    problem: "Teams collect calls, reviews, and feedback, but useful signals remain buried inside unstructured language.",
    solution: "Built a real-time speech-to-emotion workflow using speech recognition, NLP, and a WebSocket pipeline designed to turn raw language into analytics-ready sentiment signals.",
    outcome: "Faster interpretation of unstructured feedback and decision-ready emotional signals.",
    tech: ["React", "Python", "Flask", "NLP", "Machine Learning"],
    github: "https://github.com/Sandeep25560/sentimentflow",
  },
  {
    title: "Employee Management",
    category: "ENTERPRISE APPLICATION",
    hook: "A compact enterprise system where security, roles, APIs, and data design matter more than flashy screens.",
    problem: "Administrative workflows need reliable permissions, fast data access, and clear ownership boundaries.",
    solution: "Built a role-aware employee portal with REST APIs, authentication, database optimization, and reusable frontend flows.",
    outcome: "A secure admin workflow with scalable backend patterns and cleaner data operations.",
    tech: ["React", "ASP.NET Core", "MySQL", "RBAC", "REST APIs"],
    github: "https://github.com/Sandeep25560/Employee_Management",
  },
];

const Projects: FC = () => {
  return (
    <section id="projects" className="relative bg-[#090909] text-white py-24 sm:py-32 overflow-hidden" aria-label="Projects Section">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20 mb-20 items-end">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="font-mono text-xs tracking-[0.35em] text-lime-300 mb-5">SELECTED BUILD LOG / 04</p>
            <h2 className="text-5xl sm:text-7xl font-black leading-[0.92] tracking-tight">Work that starts with a problem.</h2>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl sm:text-2xl text-zinc-400 leading-relaxed max-w-2xl lg:ml-auto">
            I do not want these projects to read like a list of frameworks. Each one is a record of a product decision, an architecture choice, and the tradeoff behind it.
          </motion.p>
        </div>

        <div className="border-t border-zinc-800">
          {caseStudies.map((project, idx) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.45, delay: idx * 0.05 }} className="group border-b border-zinc-800 py-10 sm:py-14">
              <div className="grid lg:grid-cols-[120px_0.8fr_1.2fr] gap-6 lg:gap-10">
                <div className="font-mono text-5xl sm:text-6xl font-black text-zinc-800 group-hover:text-lime-300 transition-colors">0{idx + 1}</div>
                <div>
                  <p className="font-mono text-xs tracking-[0.25em] text-lime-300 mb-3">{project.category}</p>
                  <h3 className="text-3xl sm:text-5xl font-black mb-4">{project.title}</h3>
                  <p className="text-zinc-300 text-lg leading-relaxed mb-6">{project.hook}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-zinc-500">
                    {project.tech.map((tech) => <span key={tech}>/{tech}</span>)}
                  </div>
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-7 text-sm font-bold text-white border-b border-lime-300 pb-1 hover:text-lime-300 transition-colors"><GithubIcon /> SOURCE <ArrowIcon /></a>}
                </div>
                <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-5 lg:pl-10 lg:border-l lg:border-zinc-800">
                  <div><p className="font-mono text-[11px] tracking-[0.2em] text-zinc-600 mb-2">PROBLEM</p><p className="text-sm text-zinc-400 leading-relaxed">{project.problem}</p></div>
                  <div><p className="font-mono text-[11px] tracking-[0.2em] text-zinc-600 mb-2">SYSTEM MOVE</p><p className="text-sm text-zinc-400 leading-relaxed">{project.solution}</p></div>
                  <div><p className="font-mono text-[11px] tracking-[0.2em] text-zinc-600 mb-2">OUTCOME</p><p className="text-sm text-zinc-200 leading-relaxed font-semibold">{project.outcome}</p></div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border border-zinc-800 p-6 sm:p-8">
          <p className="font-mono text-sm text-zinc-400">PRODUCT THINKING → API DESIGN → DATA MODEL → DELIVERY</p>
          <p className="text-sm text-zinc-500">The pattern behind the projects is the same: understand the decision first, then choose the technology.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
