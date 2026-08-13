import { FC, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import * as FiIcons from "react-icons/fi";

const SERVICE_ID = "service_hwu5gu6";
const TEMPLATE_ID = "template_d63jxyj";
const PUBLIC_KEY = "afmmWhQaI1sxyJFMu";

const Contact: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  type IconProps = { size?: number; className?: string };
  const FiMail = FiIcons.FiMail as React.ComponentType<IconProps>;
  const FiArrowUpRight = FiIcons.FiArrowUpRight as React.ComponentType<IconProps>;
  const FiCheck = FiIcons.FiCheck as React.ComponentType<IconProps>;

  const fitSignals = [
    "Own React + ASP.NET Core features end-to-end",
    "Work comfortably across APIs, SQL, cloud, and production debugging",
    "Enterprise experience across healthcare, banking, and telecom",
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
    <section id="contact" className="section-shell py-24 sm:py-28" aria-label="Contact Section">
      <div className="absolute -left-24 bottom-12 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="pill mb-5">Open to the right engineering team</span>
            <h2 className="text-4xl sm:text-6xl font-black leading-[1.02] tracking-tight mb-6">
              Need someone who can move from <span className="gradient-text">UI to API to production?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl">
              I am a Full Stack Software Engineer with 6+ years of enterprise experience. I am strongest on teams that need practical ownership across React, ASP.NET Core, SQL, cloud services, debugging, and reliable delivery.
            </p>

            <div className="border-t border-gray-200 dark:border-gray-800 mb-8">
              {fitSignals.map((signal, index) => (
                <motion.div key={signal} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex gap-4 py-5 border-b border-gray-200 dark:border-gray-800">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300"><FiCheck size={15} /></span>
                  <p className="font-semibold text-gray-800 dark:text-gray-200 leading-relaxed">{signal}</p>
                </motion.div>
              ))}
            </div>

            <a href="mailto:sandeep.enamandala@gmail.com" className="group inline-flex items-center gap-3 rounded-full bg-gray-950 dark:bg-white dark:text-gray-950 px-5 py-3 text-white font-bold transition-transform hover:-translate-y-0.5">
              <FiMail size={18} /> sandeep.enamandala@gmail.com <FiArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-blue-500/15 via-transparent to-purple-500/15 blur-xl" />
            <div className="relative rounded-[2rem] border border-gray-200 dark:border-gray-800 bg-white/85 dark:bg-gray-900/80 shadow-xl p-6 sm:p-8 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4 mb-7">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-600 dark:text-purple-300 mb-2">Start a conversation</p>
                  <h3 className="text-2xl sm:text-3xl font-black">Tell me what you are building.</h3>
                </div>
                <span className="text-5xl font-black text-gray-100 dark:text-white/[0.05] select-none">05</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">Name</label>
                  <input required type="text" id="name" name="name" placeholder="Your name" className="w-full px-4 py-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-950/60 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-950 dark:text-white" />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">Email</label>
                  <input required type="email" id="email" name="email" placeholder="you@company.com" className="w-full px-4 py-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-950/60 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-950 dark:text-white" />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">Message</label>
                  <textarea required id="message" name="message" rows={6} placeholder="Tell me about the role, team, or problem you are hiring for." className="w-full px-4 py-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-950/60 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-950 dark:text-white" />
                </div>

                <motion.button type="submit" whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }} className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-4 text-white font-black shadow-lg shadow-blue-500/20">
                  {submitted ? "Message sent — thank you ✓" : "Send message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
