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
    "title": "Cloud-Native E-Commerce Platform",
    "category": "MICROSERVICES • 2024",
    "hook": "Independent catalog, order, inventory, and payment services built for scalable commerce.",
    "problem": "Support event-driven order processing under peak traffic of 10K concurrent users.",
    "solution": "Built ASP.NET Core, React, and TypeScript services with RabbitMQ and Redis. Deployed Docker containers on Kubernetes (AWS EKS) with auto-scaling, health checks, and GitHub Actions CI/CD.",
    "outcome": "45% lower checkout latency under peak traffic, with zero-downtime deployments.",
    "tech": [
      "ASP.NET Core",
      "React",
      "TypeScript",
      "RabbitMQ",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS EKS",
      "GitHub Actions"
    ]
  },
  {
    "title": "Real-Time Chat Application",
    "category": "REAL-TIME MESSAGING • 2024",
    "hook": "A scalable messaging platform with sub-100ms message delivery.",
    "problem": "Support 5,000+ concurrent connections across multiple server instances.",
    "solution": "Built ASP.NET Core, SignalR, and WebSockets messaging with a Redis backplane, JWT authentication, and route protection. Deployed on Azure with load balancing.",
    "outcome": "5,000+ concurrent connections, 99.9% uptime, and seamless failover across regions.",
    "tech": [
      "ASP.NET Core",
      "SignalR",
      "WebSockets",
      "Redis",
      "JWT",
      "Azure"
    ]
  },
  {
    "title": "SmartSpend: Predictive Financial Intelligence Platform",
    "category": "FINANCIAL INTELLIGENCE",
    "hook": "A full-stack budgeting platform for predicting financial runway and detecting risky spending patterns.",
    "problem": "Estimate burn rate and identify financial risk before overspending occurs.",
    "solution": "Built ML-assisted forecasting, REST APIs, normalized database schemas, and interactive dashboards for transaction tracking and early risk detection.",
    "outcome": "Early risk alerts reduced user overspend incidents by 30%.",
    "tech": [
      "ML-Assisted Forecasting",
      "REST APIs",
      "Database Design",
      "Interactive Dashboards"
    ]
  },
  {
    "title": "Planventory: Inventory Planning System",
    "category": "INVENTORY & ORDER PLANNING",
    "hook": "A full-stack system for inventory management and weekly order planning.",
    "problem": "Manage products, distributors, and orders with efficient access across 500K+ SKUs.",
    "solution": "Designed relational models and APIs, implemented JWT authentication and backend validation, and optimized SQL queries and indexing.",
    "outcome": "Efficient data retrieval at scale across 500K+ SKUs.",
    "tech": [
      "REST APIs",
      "SQL",
      "Indexing",
      "JWT",
      "Relational Models",
      "Backend Validation"
    ]
  }
];

const Projects: FC = () => (
  <section id="projects" className="section-shell py-24 sm:py-28" aria-label="Projects Section">
    <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
    <div className="section-container relative">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-end mb-14">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="pill mb-4">Selected product builds</span>
          <h2 className="text-4xl sm:text-6xl font-black leading-tight">Projects with a <span className="gradient-text">reason to exist.</span></h2>
        </motion.div>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed lg:border-l-2 lg:border-purple-400 lg:pl-8">Each project is a short engineering story: the problem, the system move, and the outcome—not just a stack list.</p>
      </div>

      <div className="space-y-7">
        {caseStudies.map((project, idx) => (
          <motion.article key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[2rem] border border-gray-200 dark:border-gray-800 bg-white/85 dark:bg-gray-900/80 shadow-xl">
            <div className="absolute left-0 inset-y-0 w-1.5 bg-gradient-to-b from-blue-500 to-purple-600" />
            <div className="grid lg:grid-cols-[140px_0.9fr_1.1fr] gap-6 lg:gap-9 p-6 sm:p-8">
              <div><p className="text-xs font-black tracking-[0.2em] text-purple-600 dark:text-purple-300">BUILD 0{idx + 1}</p><p className="text-6xl font-black text-gray-100 dark:text-white/[0.05] mt-2">0{idx + 1}</p></div>
              <div>
                <p className="text-xs font-black tracking-[0.18em] text-blue-600 dark:text-blue-400 mb-3">{project.category}</p>
                <h3 className="text-3xl sm:text-4xl font-black mb-3">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">{project.hook}</p>
                <div className="flex flex-wrap gap-2 mb-5">{project.tech.map((tech) => <span key={tech} className="rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300">{tech}</span>)}</div>
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-black text-purple-600 dark:text-purple-300"><GithubIcon /> View source <ArrowIcon /></a>}
              </div>
              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-3 lg:border-l lg:border-gray-200 dark:lg:border-gray-800 lg:pl-7">
                <div className="rounded-2xl bg-gray-50 dark:bg-gray-950/60 p-4"><p className="text-[10px] font-black tracking-[0.18em] text-gray-400 mb-2">ENGINEERING GOAL</p><p className="text-sm text-gray-600 dark:text-gray-400">{project.problem}</p></div>
                <div className="rounded-2xl bg-purple-50 dark:bg-purple-950/20 p-4"><p className="text-[10px] font-black tracking-[0.18em] text-purple-500 mb-2">IMPLEMENTATION</p><p className="text-sm text-gray-700 dark:text-gray-300">{project.solution}</p></div>
                <div className="rounded-2xl bg-blue-50 dark:bg-blue-950/20 p-4"><p className="text-[10px] font-black tracking-[0.18em] text-blue-500 mb-2">OUTCOME</p><p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{project.outcome}</p></div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
