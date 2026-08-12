"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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
    glow: "from-teal-400/30 via-cyan-500/10",
    accent: "text-teal-200",
    button: "bg-teal-300 text-slate-950 hover:bg-white",
  },
  {
    id: "dokimachine",
    title: "DOKIMACHINE",
    href: "/music",
    image: "/images/brand/doki_iconrima_square.jpg",
    imagePosition: "object-center",
    glow: "from-fuchsia-500/30 via-purple-500/10",
    accent: "text-fuchsia-200",
    button: "bg-fuchsia-400 text-slate-950 hover:bg-white",
  },
];

export default function SplitHero() {
  const { copy, locale } = useLandingLocale();
  const contentLocale = locale === "en" ? locale : "en";
  const [activeWorld, setActiveWorld] = useState(null);

  return (
    <section
      className="relative isolate min-h-screen overflow-hidden bg-[#050507] text-white"
      onMouseLeave={() => setActiveWorld(null)}
    >
      <div className="pointer-events-none absolute left-1/2 top-6 z-30 hidden -translate-x-1/2 items-center gap-3 md:flex">
        <span className="h-px w-10 bg-white/25" />
        <span className="text-[10px] font-bold uppercase tracking-[0.38em] text-white/55">
          {copy.chooseWorld}
        </span>
        <span className="h-px w-10 bg-white/25" />
      </div>

      <div className="flex min-h-screen flex-col md:flex-row">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/35 to-[#050507]/15" />

            <div className="relative z-10 w-full px-7 pb-10 pt-24 sm:px-10 sm:pb-14 lg:px-14 lg:pb-16 xl:px-20">
              <p className={`text-xs font-bold uppercase tracking-[0.32em] ${world.accent}`}>
                {localizedWorld.eyebrow}
              </p>
              <h1 className="mt-4 text-5xl font-light tracking-[-0.025em] sm:text-6xl lg:text-7xl xl:text-8xl">
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
                className={`mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3 text-xs font-extrabold uppercase tracking-[0.18em] transition duration-300 hover:-translate-y-0.5 ${world.button}`}
              >
                {localizedWorld.cta}
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.article>
          );
        })}
      </div>

      <div className="pointer-events-none absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">{copy.discoverMore}</span>
        <span className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
