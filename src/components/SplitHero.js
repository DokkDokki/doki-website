"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AuroraBackground } from "./ui/aurora-background";

export default function SplitHero() {
  const [hoveredSide, setHoveredSide] = useState(null);

  // Smooth spring physics for the layout transition
  const transitionConfig = { duration: 0.7, ease: [0.32, 0.72, 0, 1] };

  return (
    <div className="flex w-full h-[100vh] overflow-hidden bg-[#050505] text-white">
      
      {/* =========================================
          LEFT SIDE: DOKI (Code & Life)
      ========================================= */}
      <motion.div
        className="relative flex items-center justify-center cursor-pointer border-r border-white/5 overflow-hidden"
        initial={{ flex: 1 }}
        animate={{ flex: hoveredSide === "doki" ? 1.6 : hoveredSide === "machine" ? 0.4 : 1 }}
        transition={transitionConfig}
        onMouseEnter={() => setHoveredSide("doki")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Vibe Background */}
        <div className="absolute inset-0 bg-[url('/doki-rao.jpg')] bg-cover bg-center bg-no-repeat opacity-40 z-0 pointer-events-none"></div>
        {/* Readability Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_0%,transparent_70%)] z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

        {/* Content */}
        <motion.div 
          className="relative z-10 flex flex-col items-center"
          animate={{ scale: hoveredSide === "doki" ? 1.05 : hoveredSide === "machine" ? 0.9 : 1 }}
          transition={transitionConfig}
        >
          <div className="text-4xl md:text-5xl font-light text-slate-500 mb-2 tracking-widest">
            Hi, I'm
          </div>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-teal-200 drop-shadow-[0_0_30px_rgba(45,212,191,0.3)] font-[family-name:var(--font-nunito)]">
            Doki.
          </h1>
          
          <motion.div 
             animate={{ opacity: hoveredSide === "doki" ? 1 : 0, y: hoveredSide === "doki" ? 0 : 20 }}
             transition={{ duration: 0.4, delay: hoveredSide === "doki" ? 0.1 : 0 }}
             className="text-center mt-6"
          >
            <p className="text-teal-200/70 text-sm md:text-lg uppercase tracking-[0.4em] font-medium">Software /// Photography</p>
            <Link href="/doki">
              <button className="mt-8 px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(45,212,191,0.4)] font-bold">
                 Explore Doki
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>


      {/* =========================================
          RIGHT SIDE: DOKIMACHINE (Music World)
      ========================================= */}
      <motion.div
        className="relative flex items-center justify-center cursor-pointer overflow-hidden"
        initial={{ flex: 1 }}
        animate={{ flex: hoveredSide === "machine" ? 1.6 : hoveredSide === "doki" ? 0.4 : 1 }}
        transition={transitionConfig}
        onMouseEnter={() => setHoveredSide("machine")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* We use AuroraBackground strictly contained in this half! */}
        <div className="absolute inset-0 pointer-events-none z-0">
           <AuroraBackground className="h-full w-full opacity-60" />
        </div>
        
        {/* Dark overlay to ensure text pops if Aurora is bright */}
        <div className="absolute inset-0 bg-[url('/doki_iconrima_square.jpg')] bg-cover bg-center bg-no-repeat opacity-40 z-0 pointer-events-none"></div>
        {/* Readability Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_0%,transparent_70%)] z-0 pointer-events-none"></div>

        {/* Content */}
        <motion.div 
          className="relative z-10 flex flex-col items-center"
          animate={{ scale: hoveredSide === "machine" ? 1.05 : hoveredSide === "doki" ? 0.9 : 1 }}
          transition={transitionConfig}
        >
           <div className="text-2xl md:text-3xl font-light text-slate-500/80 mb-2 tracking-[0.5em] uppercase">
             Or
          </div>
          <h1 className="text-6xl md:text-8xl font-light tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-500 drop-shadow-[0_0_30px_rgba(217,70,239,0.4)] font-[family-name:var(--font-montserrat)]">
            DOKIMACHINE
          </h1>
          
          <motion.div 
             animate={{ opacity: hoveredSide === "machine" ? 1 : 0, y: hoveredSide === "machine" ? 0 : 20 }}
             transition={{ duration: 0.4, delay: hoveredSide === "machine" ? 0.1 : 0 }}
             className="text-center mt-6"
          >
             <p className="text-fuchsia-200/70 text-sm md:text-lg uppercase tracking-[0.4em] font-medium">MUSIC /// DJ</p>
             <Link href="/dokimachine">
               <button className="mt-8 px-8 py-3 border-2 border-fuchsia-500/50 bg-black/50 backdrop-blur-md text-white rounded-full hover:bg-fuchsia-500/20 transition-all font-bold tracking-widest">
                 Enter The Machine
               </button>
             </Link>
          </motion.div>
        </motion.div>
      </motion.div>

    </div>
  );
}
