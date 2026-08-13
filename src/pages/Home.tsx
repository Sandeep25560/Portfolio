import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import * as FiIcons from "react-icons/fi";
import profileImage from "../assets/profile.jpg";

const Home: FC = () => {
    const typewriterWords: string[] = [
        "Full-Stack Software Engineer",
        ".NET + React Engineer",
        "Cloud Application Developer",
        "Performance-Focused Builder",
    ];

    type IconProps = { size?: number; className?: string };
    const FiGithub = FiIcons.FiGithub as React.ComponentType<IconProps>;
    const FiLinkedin = FiIcons.FiLinkedin as React.ComponentType<IconProps>;
    const FiDownload = FiIcons.FiDownload as React.ComponentType<IconProps>;
    const FiArrowRight = FiIcons.FiArrowRight as React.ComponentType<IconProps>;
    const FiActivity = FiIcons.FiActivity as React.ComponentType<IconProps>;
    const FiMapPin = FiIcons.FiMapPin as React.ComponentType<IconProps>;

    const resumeLink = "https://drive.google.com/file/d/1j-uKJ-wRT8TzZsViUP3RkaxsOJwz6qVx/view?usp=drive_link";

    const proofPoints = [
        { value: "6+", label: "Years in enterprise software" },
        { value: "28%", label: "Scalability improvement" },
        { value: "26%", label: "Transaction processing gain" },
        { value: "3", label: "Industries engineered across" },
    ];

    const careerPath = [
        { year: "2024 → Now", company: "UnitedHealth Group", role: ".NET Developer", domain: "Healthcare", signal: "ASP.NET Core • AWS • SQL Server" },
        { year: "2022 → 2024", company: "ValueLabs", role: "Senior Software Engineer", domain: "Banking", signal: ".NET Core • Angular • Azure" },
        { year: "2020 → 2021", company: "AT&T", role: "Software Engineer", domain: "Telecom", signal: "ASP.NET • Angular • SQL" },
    ];

    const stack = ["C#", "ASP.NET Core", "React", "Angular", "TypeScript", "SQL Server", "AWS", "Azure"];

    return (
        <section id="home" className="section-shell min-h-screen flex items-center pt-24 pb-16" aria-label="Home Section">
            <div className="absolute -top-36 -left-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl pulse-glow" />
            <div className="absolute top-20 right-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/15 blur-3xl pulse-glow" />

            <div className="section-container relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
                <motion.div className="text-center lg:text-left" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
                    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-6">
                        <span className="pill"><FiActivity className="mr-2" size={16} /> Building systems that have to work in production</span>
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400"><FiMapPin size={14} /> Kent, Ohio</span>
                    </div>

                    <p className="text-sm sm:text-base font-black uppercase tracking-[0.28em] text-violet-600 dark:text-violet-400 mb-4">Sandeep Enamandala</p>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-5 leading-[1.02] tracking-tight">
                        I engineer the path from <span className="gradient-text">idea → API → data → cloud.</span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl mb-6 text-gray-700 dark:text-gray-300 min-h-[36px]">
                        <span className="font-bold"><Typewriter words={typewriterWords} loop cursor cursorStyle="_" typeSpeed={65} deleteSpeed={40} delaySpeed={1700} /></span>
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Full Stack Software Engineer with 6+ years of enterprise experience across healthcare, banking, and telecom. I build secure .NET services, responsive web applications, optimized SQL workflows, and cloud-backed systems that are easier to operate, scale, and evolve.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                        {proofPoints.map((point) => (
                            <motion.div key={point.label} whileHover={{ y: -6 }} className="glass-card p-4 text-left">
                                <p className="text-2xl sm:text-3xl font-black gradient-text">{point.value}</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-snug">{point.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8">
                        {stack.map((item) => <span key={item} className="rounded-full bg-gray-950 text-white dark:bg-white dark:text-gray-950 px-3.5 py-2 text-xs font-bold tracking-wide">{item}</span>)}
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                        <ScrollLink to="experience" smooth duration={600} className="bg-gray-950 dark:bg-white dark:text-gray-950 px-6 py-3.5 rounded-full text-white font-bold shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer flex items-center gap-2">See My Career Story <FiArrowRight size={18} /></ScrollLink>
                        <motion.a href={resumeLink} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-3 px-6 py-3.5 border border-gray-300 dark:border-gray-700 rounded-full font-bold bg-white/70 dark:bg-gray-900/70 backdrop-blur">
                            <FiDownload size={18} /> Resume
                        </motion.a>
                    </div>

                    <div className="flex justify-center lg:justify-start gap-4">
                        <a href="https://github.com/Sandeep25560" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:scale-110 transition-transform" aria-label="GitHub"><FiGithub size={20} /></a>
                        <a href="https://www.linkedin.com/in/enamandala" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:scale-110 transition-transform" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
                    </div>
                </motion.div>

                <motion.div className="relative mx-auto w-full max-w-lg" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
                    <div className="absolute -inset-4 rounded-[2.4rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-2xl" />
                    <div className="relative glass-card p-6 sm:p-8 overflow-hidden">
                        <div className="absolute top-0 right-0 text-[7rem] font-black leading-none text-gray-100 dark:text-white/[0.03] select-none">06</div>

                        <div className="relative flex items-center gap-4 mb-8">
                            <div className="w-20 h-20 rounded-3xl overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-xl shrink-0">
                                <img src={profileImage} alt="Sandeep Enamandala" className="w-full h-full object-cover" loading="eager" />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-bold">Career architecture</p>
                                <h3 className="text-2xl font-black mt-1">Three industries. One engineering thread.</h3>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute left-[7px] top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500" />
                            <div className="space-y-6">
                                {careerPath.map((item, index) => (
                                    <motion.div key={item.company} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + index * 0.12 }} className="relative pl-8">
                                        <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-white dark:bg-gray-950 border-[3px] border-blue-500" />
                                        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/60 p-4">
                                            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                                <div>
                                                    <p className="font-black text-gray-950 dark:text-white">{item.company}</p>
                                                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{item.role}</p>
                                                </div>
                                                <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400">{item.year}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2 items-center">
                                                <span className="text-[11px] font-black uppercase tracking-wider rounded-full bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 px-2.5 py-1">{item.domain}</span>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">{item.signal}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-7 rounded-2xl bg-gray-950 dark:bg-white p-4 text-white dark:text-gray-950">
                            <p className="text-xs uppercase tracking-[0.2em] font-black opacity-60 mb-1">What stays constant</p>
                            <p className="font-bold leading-relaxed">Secure APIs. Fast data paths. Reliable releases. Clear user experiences.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
