import { FC, useEffect, useState } from "react";
import * as FiIcons from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import { useTheme } from "../hooks/useTheme";
import profileImage from "../assets/profile.jpg";

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  type IconProps = { size?: number; className?: string };
  const FiMenu = FiIcons.FiMenu as React.ComponentType<IconProps>;
  const FiX = FiIcons.FiX as React.ComponentType<IconProps>;
  const FiSun = FiIcons.FiSun as React.ComponentType<IconProps>;
  const FiMoon = FiIcons.FiMoon as React.ComponentType<IconProps>;
  const FiGithub = FiIcons.FiGithub as React.ComponentType<IconProps>;
  const FiLinkedin = FiIcons.FiLinkedin as React.ComponentType<IconProps>;
  const FiFileText = FiIcons.FiFileText as React.ComponentType<IconProps>;

  const resumeLink = "https://drive.google.com/file/d/1j-uKJ-wRT8TzZsViUP3RkaxsOJwz6qVx/view?usp=drive_link";
  const links = ["Home", "About", "Experience", "Projects", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-gray-950/90 shadow-lg backdrop-blur-xl border-b border-gray-200/70 dark:border-gray-800" : "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md"}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between gap-5">
          <button onClick={() => setProfileOpen(true)} className="flex items-center gap-3 text-left group" aria-label="Open profile card">
            <div className="relative shrink-0">
              <div className="w-11 h-11 rounded-2xl overflow-hidden ring-2 ring-blue-400/70 group-hover:ring-purple-500 transition-colors shadow-sm">
                <img src={profileImage} alt="Sandeep Enamandala" className="w-full h-full object-cover" />
              </div>
              <span className="absolute -right-1 -bottom-1 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-white dark:border-gray-950" />
            </div>
            <div className="min-w-0">
              <p className="font-black text-base sm:text-lg leading-tight gradient-text truncate">Sandeep Enamandala</p>
              <p className="text-[11px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 truncate">Full Stack Software Engineer</p>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-7">
            {links.map((name) => (
              <Link key={name} to={name.toLowerCase()} smooth duration={500} offset={-76} spy activeClass="text-blue-600 dark:text-blue-400" className="relative cursor-pointer text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                {name}
                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all group-hover:w-full" />
              </Link>
            ))}
            <button onClick={toggleTheme} className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 hover:-translate-y-0.5 transition-transform" aria-label="Toggle theme">
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300" aria-label="Toggle theme">
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300" aria-label="Toggle navigation">
              {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl px-4 py-4 shadow-xl">
              <div className="max-w-7xl mx-auto grid gap-1">
                {links.map((name, index) => (
                  <Link key={name} to={name.toLowerCase()} smooth duration={500} offset={-76} onClick={() => setMenuOpen(false)} className="cursor-pointer flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-950/30">
                    <span>{name}</span><span className="text-xs font-black text-gray-300 dark:text-gray-700">0{index + 1}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {profileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-gray-950/65 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setProfileOpen(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94, y: 20 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md rounded-[2rem] border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-2xl p-7 overflow-hidden">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-500/15 blur-3xl" />
              <button onClick={() => setProfileOpen(false)} className="absolute top-5 right-5 h-9 w-9 rounded-full border border-gray-200 dark:border-gray-800 inline-flex items-center justify-center text-gray-500"><FiX size={18} /></button>

              <div className="relative">
                <div className="w-24 h-24 rounded-3xl overflow-hidden ring-4 ring-blue-100 dark:ring-blue-950 mb-5"><img src={profileImage} alt="Sandeep Enamandala" className="w-full h-full object-cover" /></div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-600 dark:text-purple-300 mb-2">Engineer profile</p>
                <h2 className="text-3xl font-black mb-2">Sandeep Enamandala</h2>
                <p className="font-bold text-blue-600 dark:text-blue-400 mb-4">Full Stack Software Engineer</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">6+ years building secure, scalable enterprise systems across healthcare, banking, and telecom.</p>

                <div className="flex gap-3 mb-5">
                  <a href="https://github.com/Sandeep25560" target="_blank" rel="noopener noreferrer" className="h-11 w-11 rounded-full border border-gray-200 dark:border-gray-800 inline-flex items-center justify-center"><FiGithub size={19} /></a>
                  <a href="https://www.linkedin.com/in/enamandala" target="_blank" rel="noopener noreferrer" className="h-11 w-11 rounded-full border border-gray-200 dark:border-gray-800 inline-flex items-center justify-center"><FiLinkedin size={19} /></a>
                </div>

                <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 py-3.5 text-white font-black shadow-lg shadow-blue-500/20"><FiFileText size={18} /> View Resume</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
