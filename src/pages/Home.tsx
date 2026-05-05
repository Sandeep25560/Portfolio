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

    const resumeLink = "https://drive.google.com/file/d/1NPXt0eGRGW3F57en7LmZFJ_h0DJyt1W5/view?usp=drivesdk";

    const proofPoints = [
        "3+ years production experience",
        "35% lower API latency",
        "99.9% uptime",
        "Promoted twice in 36 months",
    ];

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 transition-colors duration-300 pt-0 mt-0 overflow-hidden"
            aria-label="Home Section"
        >
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center pt-24 pb-16">
                <motion.div
                    className="text-center lg:text-left"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                >
                    <span className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 mb-6">
                        Open to Full-Stack, Backend, and React opportunities
                    </span>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-5 font-heading leading-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Sandeep Enamandala</span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl mb-6 text-gray-700 dark:text-gray-300 min-h-[36px]">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                            <Typewriter
                                words={typewriterWords}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={45}
                                delaySpeed={1800}
                            />
                        </span>
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        Full Stack Software Engineer with 3+ years of experience building production-grade applications using ASP.NET Core, React, TypeScript, and SQL Server. I deliver secure APIs, clean user experiences, and measurable performance improvements for enterprise healthcare and insurance platforms.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 max-w-3xl mx-auto lg:mx-0">
                        {proofPoints.map((point) => (
                            <div key={point} className="rounded-2xl bg-gray-100 dark:bg-gray-800 px-4 py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{point}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                        <ScrollLink
                            to="projects"
                            smooth
                            duration={600}
                            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all hover:shadow-xl cursor-pointer flex items-center gap-2"
                        >
                            See Featured Work <FiArrowRight size={18} />
                        </ScrollLink>

                        <ScrollLink
                            to="contact"
                            smooth
                            duration={600}
                            className="bg-transparent border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg transition-all hover:shadow-xl cursor-pointer flex items-center gap-2"
                        >
                            Contact Me
                        </ScrollLink>
                    </div>

                    <div className="flex justify-center lg:justify-start gap-4 mt-6">
                        <a
                            href="https://github.com/Sandeep25560"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover:text-gray-900 dark:hover:text-white"
                            aria-label="GitHub"
                        >
                            <FiGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/enamandala"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover:text-blue-600"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin size={20} />
                        </a>
                        <a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            <FiDownload size={18} />
                            <span className="text-sm">Resume</span>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="relative mx-auto w-full max-w-sm"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.55 }}
                >
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-20" />
                    <div className="relative rounded-[2rem] bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 shadow-2xl">
                        <div className="mx-auto mb-6 w-36 h-36 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-lg">
                            <img
                                src={profileImage}
                                alt="Sandeep Enamandala"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-2">Recruiter Snapshot</h3>
                        <p className="text-center text-gray-600 dark:text-gray-400 mb-5">
                            React + ASP.NET Core engineer with enterprise healthcare/insurance delivery experience.
                        </p>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between rounded-xl bg-white dark:bg-gray-900 p-3 gap-4">
                                <span className="text-gray-500 dark:text-gray-400">Backend</span>
                                <span className="font-semibold text-right">ASP.NET Core, REST APIs</span>
                            </div>
                            <div className="flex justify-between rounded-xl bg-white dark:bg-gray-900 p-3 gap-4">
                                <span className="text-gray-500 dark:text-gray-400">Frontend</span>
                                <span className="font-semibold text-right">React, TypeScript</span>
                            </div>
                            <div className="flex justify-between rounded-xl bg-white dark:bg-gray-900 p-3 gap-4">
                                <span className="text-gray-500 dark:text-gray-400">Data</span>
                                <span className="font-semibold text-right">SQL Server, MySQL</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
