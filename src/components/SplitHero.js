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
    <div className="flex flex-col md:flex-row w-full h-full min-h-screen overflow-hidden bg-[#050505] text-white">
      
      {/* =========================================
          LEFT/TOP SIDE: DOKI (Code & Life)
      ========================================= */}
      <motion.div
        className="relative flex-1 flex items-center justify-center cursor-pointer border-b md:border-b-0 md:border-r border-white/5 overflow-hidden min-h-[50vh] md:min-h-0 py-12 md:py-0"
        animate={{ flex: hoveredSide === "doki" ? 2 : hoveredSide === "machine" ? 0.5 : 1 }}
        transition={transitionConfig}
        onMouseEnter={() => setHoveredSide("doki")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Vibe Background */}
        <div className="absolute inset-0 bg-[url('/doki-rao.jpg')] bg-cover bg-center bg-no-repeat opacity-40 z-0 pointer-events-none"></div>
        {/* Readability Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_0%,transparent_70%)] z-0 pointer-events-none"></div>
        
        {/* Content */}
        <motion.div 
          className="relative z-10 flex flex-col items-center px-4"
          animate={{ scale: hoveredSide === "doki" ? 1.05 : hoveredSide === "machine" ? 0.9 : 1 }}
          transition={transitionConfig}
        >
          <div className="text-xl sm:text-2xl md:text-5xl font-light text-slate-500 mb-1 sm:mb-2 tracking-widest">
            Hi, I'm
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-teal-200 drop-shadow-[0_0_30px_rgba(45,212,191,0.3)]">
            Doki.
          </h1>
          
          <motion.div 
             animate={{ opacity: (hoveredSide === "doki" || !hoveredSide) ? 1 : 0, y: (hoveredSide === "doki" || !hoveredSide) ? 0 : 20 }}
             transition={{ duration: 0.4 }}
             className="text-center mt-4 md:mt-6"
          >
            <p className="text-teal-200/70 text-[10px] md:text-lg uppercase tracking-[0.4em] font-medium">Engineering /// Photography</p>
            <Link href="/doki">
              <button className="mt-6 md:mt-8 px-6 md:px-8 py-2 md:py-3 bg-white text-black rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(45,212,191,0.4)] font-bold text-xs md:text-base">
                 Explore Doki
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>


      {/* =========================================
          RIGHT/BOTTOM SIDE: DOKIMACHINE (Music World)
      ========================================= */}
      <motion.div
        className="relative flex-1 flex items-center justify-center cursor-pointer overflow-hidden min-h-[50vh] md:min-h-0 py-12 md:py-0"
        animate={{ flex: hoveredSide === "machine" ? 2 : hoveredSide === "doki" ? 0.5 : 1 }}
        transition={transitionConfig}
        onMouseEnter={() => setHoveredSide("machine")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
           <AuroraBackground className="h-full w-full opacity-60" />
        </div>
        
        <div className="absolute inset-0 bg-[url('/doki_iconrima_square.jpg')] bg-cover bg-center bg-no-repeat opacity-40 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_0%,transparent_70%)] z-0 pointer-events-none"></div>

        {/* Content */}
        <motion.div 
          className="relative z-10 flex flex-col items-center px-4"
          animate={{ scale: hoveredSide === "machine" ? 1.05 : hoveredSide === "doki" ? 0.9 : 1 }}
          transition={transitionConfig}
        >
           <div className="text-xl md:text-3xl font-light text-slate-500/80 mb-2 tracking-[0.5em] uppercase">
             Or
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-light tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-500 drop-shadow-[0_0_30px_rgba(217,70,239,0.4)] text-center leading-tight">
            DOKIMACHINE
          </h1>
          
          <motion.div 
             animate={{ opacity: (hoveredSide === "machine" || !hoveredSide) ? 1 : 0, y: (hoveredSide === "machine" || !hoveredSide) ? 0 : 20 }}
             transition={{ duration: 0.4 }}
             className="text-center mt-3 sm:mt-4 md:mt-6"
          >
             <p className="text-fuchsia-200/70 text-[9px] sm:text-base uppercase tracking-[0.3em] sm:tracking-[0.4em] font-medium">MUSIC /// DJ</p>
             <Link href="/dokimachine">
               <button className="mt-5 sm:mt-6 md:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-fuchsia-500/50 bg-black/50 backdrop-blur-md text-white rounded-full hover:bg-fuchsia-500/20 transition-all font-bold tracking-widest text-[10px] sm:text-base">
                 Enter The Machine
               </button>
             </Link>
          </motion.div>
        </motion.div>
      </motion.div>

    </div>
  );
}
