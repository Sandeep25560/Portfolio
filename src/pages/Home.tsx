import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import * as FiIcons from "react-icons/fi";
import profileImage from "../assets/profile.jpg";

const Home: FC = () => {
    const typewriterWords: string[] = [
        "Full-Stack .NET Engineer",
        "React + TypeScript Developer",
        "Healthcare Platform Engineer",
        "Performance-Focused Builder",
    ];

    type IconProps = { size?: number; className?: string };
    const FiGithub = FiIcons.FiGithub as React.ComponentType<IconProps>;
    const FiLinkedin = FiIcons.FiLinkedin as React.ComponentType<IconProps>;
    const FiDownload = FiIcons.FiDownload as React.ComponentType<IconProps>;
    const FiArrowRight = FiIcons.FiArrowRight as React.ComponentType<IconProps>;
    const FiZap = FiIcons.FiZap as React.ComponentType<IconProps>;

    const resumeLink = "https://drive.google.com/file/d/1j-uKJ-wRT8TzZsViUP3RkaxsOJwz6qVx/view?usp=drive_link";

    const proofPoints = [
        { value: "3+", label: "Years building production systems" },
        { value: "35%", label: "Lower API latency through SQL tuning" },
        { value: "99.9%", label: "Production uptime mindset" },
        { value: "2x", label: "Promoted within 36 months" },
    ];

    const stack = ["ASP.NET Core", "React", "TypeScript", "SQL Server", "REST APIs", "Azure/AWS"];

    return (
        <section id="home" className="section-shell min-h-screen flex items-center pt-24 pb-16" aria-label="Home Section">
            <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl pulse-glow" />
            <div className="absolute top-24 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl pulse-glow" />
            <div className="section-container relative grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
                <motion.div className="text-center lg:text-left" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
                    <span className="pill mb-6"><FiZap className="mr-2" size={16} /> Available for Full-Stack, Backend, and React roles</span>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-5 leading-tight tracking-tight">
                        I build <span className="text-blue-600 dark:text-blue-400">secure, fast, product-ready</span> web applications.
                    </h1>
                    <h2 className="text-xl sm:text-2xl mb-6 text-gray-700 dark:text-gray-300 min-h-[36px]">
                        <span className="text-blue-600 dark:text-blue-400 font-bold"><Typewriter words={typewriterWords} loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={45} delaySpeed={1800} /></span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Full Stack Software Engineer with 3+ years of experience building production-grade applications using ASP.NET Core, React, TypeScript, and SQL Server for healthcare and insurance platforms.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                        {proofPoints.map((point) => (
                            <motion.div key={point.label} whileHover={{ y: -6 }} className="glass-card p-4">
                                <p className="text-2xl font-black text-blue-600 dark:text-blue-400">{point.value}</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{point.label}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                        {stack.map((item) => <span key={item} className="rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs font-semibold text-gray-700 dark:text-gray-300">{item}</span>)}
                    </div>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                        <ScrollLink to="projects" smooth duration={600} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all hover:shadow-xl cursor-pointer flex items-center gap-2">Explore Case Studies <FiArrowRight size={18} /></ScrollLink>
                        <motion.a href={resumeLink} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }} className="group relative overflow-hidden flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold shadow-lg shadow-blue-500/25">
                            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                            <FiDownload size={18} />
                            <span>Resume</span>
                        </motion.a>
                    </div>
                    <div className="flex justify-center lg:justify-start gap-4">
                        <a href="https://github.com/Sandeep25560" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:scale-110 transition-transform" aria-label="GitHub"><FiGithub size={20} /></a>
                        <a href="https://www.linkedin.com/in/enamandala" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:scale-110 transition-transform" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
                    </div>
                </motion.div>
                <motion.div className="relative mx-auto w-full max-w-md float-slow" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.55 }}>
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-30" />
                    <div className="relative glass-card p-6 sm:p-8">
                        <div className="mx-auto mb-6 w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
                            <img src={profileImage} alt="Sandeep Enamandala" className="w-full h-full object-cover" loading="eager" />
                        </div>
                        <h3 className="text-2xl font-black text-center mb-2">Engineering Snapshot</h3>
                        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">I move across UI, APIs, databases, debugging, and delivery.</p>
                        <div className="space-y-3 text-sm">
                            {[
                                ["Frontend", "React, TypeScript, Tailwind"],
                                ["Backend", "ASP.NET Core, REST APIs"],
                                ["Data", "SQL Server, MySQL, Tuning"],
                                ["Domain", "Healthcare + Insurance"],
                            ].map(([key, value]) => (
                                <div key={key} className="flex justify-between rounded-2xl bg-white/70 dark:bg-gray-950/70 p-4 gap-4 border border-gray-200 dark:border-gray-800">
                                    <span className="text-gray-500 dark:text-gray-400">{key}</span>
                                    <span className="font-bold text-right">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
