"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AuroraBackground } from "./ui/aurora-background";

export default function SplitHero() {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-[calc(100vh-4rem)] bg-[#050505] text-white">

      {/* =========================================
          LEFT/TOP SIDE: DOKI (Code & Life)
      ========================================= */}
      <div
        className="relative flex-1 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5 overflow-hidden min-h-[60vh] md:min-h-0 py-16 md:py-0"
        onMouseEnter={() => setHoveredSide("doki")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background photo, dimmed for readability */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
          <Image src="/doki-rao.jpg" alt="" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center px-4 text-center"
          animate={{ scale: hoveredSide === "doki" ? 1.03 : 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
        >
          <p className="text-base sm:text-lg md:text-2xl font-light text-slate-400 mb-2 tracking-widest">
            Hi, I&apos;m
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-teal-200">
            Doki.
          </h1>
          <p className="text-teal-200/80 text-xs md:text-base uppercase tracking-[0.3em] font-medium mt-4">
            Engineering /// Photography
          </p>
          <Link
            href="/doki"
            className="mt-8 px-8 py-3 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Explore Doki
          </Link>
        </motion.div>
      </div>

      {/* =========================================
          RIGHT/BOTTOM SIDE: DOKIMACHINE (Music World)
      ========================================= */}
      <div
        className="relative flex-1 flex items-center justify-center overflow-hidden min-h-[60vh] md:min-h-0 py-16 md:py-0"
        onMouseEnter={() => setHoveredSide("machine")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <AuroraBackground className="h-full w-full opacity-50" />
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25 mix-blend-overlay">
          <Image src="/doki_iconrima_square.jpg" alt="" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center px-4 text-center"
          animate={{ scale: hoveredSide === "machine" ? 1.03 : 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
        >
          <p className="text-base md:text-xl font-light text-slate-400 mb-2 tracking-[0.4em] uppercase">
            Or
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-500 leading-tight">
            DOKIMACHINE
          </h1>
          <p className="text-fuchsia-200/80 text-xs md:text-base uppercase tracking-[0.3em] font-medium mt-4">
            Music /// DJ
          </p>
          <Link
            href="/dokimachine"
            className="mt-8 px-8 py-3 border border-fuchsia-500/50 bg-black/50 text-white rounded-full font-bold tracking-widest text-sm hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Enter The Machine
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
