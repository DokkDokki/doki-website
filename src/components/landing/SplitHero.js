"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLandingLocale } from "@/components/landing/LandingLocaleProvider";

const worlds = [
  {
    id: "doki",
    title: "Doki",
    href: "/doki",
    image: "/images/personal/doki-hikari.jpg",
    imagePosition: "object-center",
    glow: "from-[#58e8f2]/30 via-[#8ee5d6]/10",
    accent: "text-[#8ee5d6]",
    button: "bg-[#58e8f2] text-[#02080d] shadow-[0_0_28px_rgba(88,232,242,.2)] hover:bg-white",
  },
  {
    id: "dokimachine",
    title: "DOKIMACHINE",
    href: "/music",
    image: "/images/brand/doki_iconrima_square.jpg",
    imagePosition: "object-center",
    glow: "from-[#9a75d2]/30 via-[#e98ab8]/10",
    accent: "text-[#e98ab8]",
    button: "bg-[#f5d76e] text-[#02080d] shadow-[0_0_28px_rgba(245,215,110,.16)] hover:bg-white",
  },
];

export default function SplitHero() {
  const { copy, locale } = useLandingLocale();
  const contentLocale = locale === "en" ? locale : "en";
  const [activeWorld, setActiveWorld] = useState(null);
  const heroRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.965]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.82, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <motion.section
      ref={heroRef}
      style={prefersReducedMotion ? undefined : { scale: heroScale, opacity: heroOpacity, y: heroY }}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--claris-ink)] text-white"
      onMouseLeave={() => setActiveWorld(null)}
    >
      <div className="sphere-grid pointer-events-none absolute inset-0 z-20 opacity-50" aria-hidden="true" />
      <div className="sphere-orbit pointer-events-none absolute left-1/2 top-1/2 z-20 h-[62vw] max-h-[52rem] min-h-72 w-[62vw] max-w-[52rem] min-w-72 -translate-x-1/2 -translate-y-1/2 opacity-40" aria-hidden="true" />
      <div className="sphere-orbit pointer-events-none absolute left-1/2 top-1/2 z-20 h-[36vw] max-h-[30rem] min-h-52 w-[70vw] max-w-[58rem] min-w-80 -translate-x-1/2 -translate-y-1/2 rotate-[28deg] opacity-25" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-6 z-30 hidden -translate-x-1/2 items-center gap-3 md:flex">
        <span className="h-px w-10 bg-white/25" />
        <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-white/55">
          {copy.chooseWorld}
        </span>
        <span className="h-px w-10 bg-white/25" />
      </div>

      <div className="flex min-h-[100svh] flex-col md:flex-row">
        {worlds.map((world, index) => {
          const localizedWorld = copy.worlds[world.id];
          return (
          <motion.article
            key={world.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{
              opacity: activeWorld && activeWorld !== world.id ? 0.78 : 1,
              y: 0,
              flexGrow: activeWorld ? (activeWorld === world.id ? 1.12 : 0.88) : 1,
            }}
            transition={{ duration: 0.55, delay: activeWorld ? 0 : index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            onHoverStart={() => setActiveWorld(world.id)}
            className="group relative flex min-h-[70svh] w-full basis-0 items-end overflow-hidden border-white/10 md:min-h-0 md:border-r md:last:border-r-0"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, delay: 0.2 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 transition duration-[1400ms] ease-out group-hover:scale-[1.045]">
                <Image
                  src={world.image}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`object-cover ${world.imagePosition}`}
                />
              </div>
            </motion.div>
            <div className={`absolute inset-0 bg-black/35 transition duration-700 ${activeWorld === world.id ? "bg-black/15" : "group-hover:bg-black/20"}`} />
            <div className={`absolute inset-0 bg-gradient-to-t ${world.glow} to-transparent opacity-80`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02080d] via-[#02080d]/40 to-[#02080d]/15" />

            <div className="relative z-10 w-full px-7 pb-10 pt-24 sm:px-10 sm:pb-14 lg:px-14 lg:pb-16 xl:px-20">
              <p className={`text-xs font-bold uppercase tracking-[0.32em] ${world.accent}`}>
                {localizedWorld.eyebrow}
              </p>
              <h1 className={`mt-4 font-light tracking-[-0.025em] ${world.id === "dokimachine" ? "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl" : "text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"}`}>
                {world.title}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-200/85 sm:text-lg">
                {localizedWorld.description}
              </p>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 sm:text-xs">
                {localizedWorld.meta}
              </p>
              <Link
                href={`/${contentLocale}${world.href}`}
                onFocus={() => setActiveWorld(world.id)}
                onBlur={() => setActiveWorld(null)}
                className={`mt-8 inline-flex min-h-11 items-center gap-3 rounded-full px-6 py-3 text-xs font-extrabold uppercase tracking-[0.18em] transition duration-300 hover:-translate-y-0.5 ${world.button}`}
              >
                {localizedWorld.cta}
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.article>
          );
        })}
      </div>

      <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="hidden text-[9px] uppercase tracking-[0.3em] text-white/40 xl:block">{copy.discoverMore}</span>
        <span className="h-7 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </motion.section>
  );
}
