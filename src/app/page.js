"use client";
import { useEffect, useState } from "react";
import SplitHero from "@/components/SplitHero";
import TerminalBootIntro from "@/components/TerminalBootIntro";
import { FaGithub, FaYoutube, FaTwitter, FaDiscord } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const INTRO_SEEN_KEY = "dokimachine-intro-seen";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [skipAnim, setSkipAnim] = useState(false);

  // Skip the intro entirely for returning visitors (within the same
  // session) and for users who prefer reduced motion.
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = sessionStorage.getItem(INTRO_SEEN_KEY) === "1";

    if (reducedMotion || alreadySeen) {
      setSkipAnim(true);
      setIntroDone(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    setIntroDone(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#050505] text-slate-200 selection:bg-teal-500/30">

      {/* INITIAL BOOT SEQUENCE */}
      <AnimatePresence>
        {!introDone && <TerminalBootIntro onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {/* CORE CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={skipAnim ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
      >
        {/* NAVBAR — matches the style used on every other page */}
        <nav className="w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
            <span className="font-light tracking-[0.2em] text-white text-lg uppercase">Dokimachine</span>

            <div className="flex items-center gap-4 sm:gap-5">
              <div className="hidden sm:flex items-center gap-4">
                <a href="https://github.com/DokkDokki" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-full"><FaGithub size={16} /></a>
                <a href="https://x.com/dokimachine" target="_blank" rel="noreferrer" aria-label="Twitter / X" className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-full"><FaTwitter size={16} /></a>
                <a href="https://www.youtube.com/@dokimachine" target="_blank" rel="noreferrer" aria-label="YouTube" className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-full"><FaYoutube size={16} /></a>
                <a href="https://discord.gg/R8JB5JHvaZ" target="_blank" rel="noreferrer" aria-label="Discord" className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-full"><FaDiscord size={16} /></a>
              </div>
              <a href="mailto:dokkdokki@dokimachine.net" className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold tracking-[0.1em] text-white hover:bg-white hover:text-black transition-all uppercase whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* SPLIT HERO */}
        <SplitHero />

        {/* FOOTER */}
        <footer className="border-t border-white/10 px-6 py-8">
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/30 tracking-wide">
            <p>© {new Date().getFullYear()} Dokimachine. All rights reserved.</p>
            <p className="uppercase tracking-[0.2em]">Engineering /// Music /// Photography</p>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
