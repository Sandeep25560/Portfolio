import { FC, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_hwu5gu6";
const TEMPLATE_ID = "template_d63jxyj";
const PUBLIC_KEY = "afmmWhQaI1sxyJFMu";

const Contact: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const hiringSignals = [
    "I can own React + ASP.NET Core features end-to-end.",
    "I have shipped enterprise healthcare/insurance workflows, not just portfolio demos.",
    "I care about reliability, latency, security, and clean handoffs across teams.",
  ];

  const quickFit = [
    "Full-stack engineering roles",
    "Backend/API-heavy .NET roles",
    "React + TypeScript product teams",
    "Healthcare, insurance, fintech, SaaS, and internal tools",
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white py-20 px-6 sm:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 mb-4">
            Looking for a builder who can contribute quickly?
          </span>
          <h2 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            Let’s talk about where I can create impact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            I am best suited for teams that need a full-stack engineer who can move across UI, APIs, databases, debugging, and production-focused delivery.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Why hiring managers remember me</h3>
              <div className="space-y-3">
                {hiringSignals.map((signal) => (
                  <div key={signal} className="rounded-2xl bg-white dark:bg-gray-900 p-4 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    {signal}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Strong fit for</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {quickFit.map((fit) => (
                  <div key={fit} className="rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-sm font-semibold">
                    {fit}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2">Fast recruiter summary</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Full Stack Software Engineer with 3+ years of experience in ASP.NET Core, React, TypeScript, and SQL Server. Production background in enterprise healthcare and insurance systems with measurable impact in delivery speed, latency, and uptime.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="text-2xl font-bold mb-2">Send a message</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              Hiring teams, recruiters, and founders can reach out for full-stack, backend, or React-focused opportunities.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold">
                  Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white dark:border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-semibold">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white dark:border-gray-700"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 font-semibold">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about the role, team, or problem you are hiring for."
                  className="w-full px-4 py-3 rounded-xl bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none dark:bg-gray-900 dark:text-white dark:border-gray-700"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl text-white font-semibold transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
                whileHover={{ scale: 1.02 }}
              >
                {submitted ? "Message sent — thank you ✅" : "Start the conversation"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
