"use client";
import { useState } from "react";
import SplitHero from "@/components/SplitHero";
import SpaceWarpIntro from "@/components/SpaceWarpIntro";
import { FaGithub, FaYoutube, FaTwitter, FaDiscord } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#050505] text-slate-200 font-inter selection:bg-teal-500/30">
      
      {/* INITIAL OPENING ANIMATION */}
      <AnimatePresence>
        {!introDone && (
          <SpaceWarpIntro onComplete={() => setIntroDone(true)} />
        )}
      </AnimatePresence>

      {/* CORE CONTENT WITH ZOOM REVEAL */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0, filter: "blur(20px)" }}
        animate={{ 
          scale: introDone ? 1 : 1.2, 
          opacity: introDone ? 1 : 0,
          filter: introDone ? "blur(0px)" : "blur(20px)"
        }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full"
      >
        {/* ACETERNITY-STYLE FULL WIDTH NAVBAR */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="fixed top-0 left-0 right-0 z-[100] px-6 py-8"
        >
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <span className="text-2xl font-light text-white opacity-90">DOKIMACHINE</span>
            </div>

            {/* SOCIALS */}
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="hidden sm:flex items-center space-x-4">
                <a href="https://github.com/DokkDokki" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all"><FaGithub size={16} /></a>
                <a href="https://x.com/dokimachine" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all"><FaTwitter size={16} /></a>
                <a href="https://www.youtube.com/@dokimachine" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all"><FaYoutube size={16} /></a>
                <a href="https://discord.gg/R8JB5JHvaZ" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all" aria-label="Discord"><FaDiscord size={16} /></a>
              </div>
              <a href="mailto:dokkdokki@dokimachine.net" className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold tracking-[0.1em] text-white hover:bg-white hover:text-black transition-all uppercase whitespace-nowrap">
                Contact
              </a>
            </div>
          </div>
        </motion.nav>

        {/* CORE SPLIT HERO */}
        <SplitHero />

        {/* FOOTER DATA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: introDone ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="fixed bottom-8 left-0 right-0 z-50 px-8 flex justify-between items-end pointer-events-none"
        >
          <div className="flex flex-col items-start space-y-1">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">System Status</p>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></div>
              <p className="text-[10px] font-mono text-teal-400/70 border-b border-teal-500/20">OPERATIONAL_v4.0</p>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">Created By</p>
            <p className="text-lg font-light tracking-[0.2em] text-white/80">DOKIMACHINE</p>
          </div>
        </motion.div>
      </motion.div>

    </div>
  );
}
