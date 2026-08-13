"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useSpring } from "motion/react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { useLandingLocale } from "@/components/landing/LandingLocaleProvider";

const cinematicEase = [0.22, 1, 0.36, 1];

function MagneticLink({ href, className, children }) {
  const reducedMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 260, damping: 18 });
  const y = useSpring(0, { stiffness: 260, damping: 18 });
  const reset = () => { x.set(0); y.set(0); };
  const move = (event) => {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
  };
  return <motion.div style={{ x, y }} whileTap={reducedMotion ? undefined : { scale: 0.97 }} onPointerMove={move} onPointerLeave={reset} onFocus={reset}><Link href={href} className={className}>{children}</Link></motion.div>;
}

export default function SplitHero() {
  const { copy, locale } = useLandingLocale();
  const reducedMotion = useReducedMotion();
  const [pointerReady, setPointerReady] = useState(false);
  const pointerX = useSpring(0, { stiffness: 45, damping: 22 });
  const pointerY = useSpring(0, { stiffness: 45, damping: 22 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setPointerReady(media.matches);
    sync(); media.addEventListener("change", sync); return () => media.removeEventListener("change", sync);
  }, []);

  const handlePointerMove = (event) => {
    if (reducedMotion || !pointerReady) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left - rect.width / 2) / rect.width);
    pointerY.set((event.clientY - rect.top - rect.height / 2) / rect.height);
  };
  const rise = reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(8px)" };

  return (
    <section onPointerMove={handlePointerMove} className="relative isolate min-h-[100svh] overflow-hidden bg-[var(--claris-ink)] text-white">
      <motion.div animate={reducedMotion ? undefined : { opacity: [0.35, 0.62, 0.35], scale: [1, 1.12, 1], x: ["-8%", "8%", "-8%"], y: ["-4%", "7%", "-4%"] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -left-[18%] -top-[28%] z-10 h-[70vw] w-[70vw] rounded-full bg-teal-300/15 blur-3xl" />
      <motion.div animate={reducedMotion ? undefined : { opacity: [0.2, 0.48, 0.2], scale: [1.05, 0.94, 1.05], x: ["10%", "-8%", "10%"] }} transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="pointer-events-none absolute -bottom-[35%] -right-[20%] z-10 h-[70vw] w-[70vw] rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute inset-0 grid min-h-[100svh] md:grid-cols-[1.3fr_0.7fr]">
        <HeroPanel image="/images/personal/doki-hikari.jpg" x={pointerX} y={pointerY} className="md:border-r md:border-white/10" />
        <HeroPanel image="/images/brand/doki_iconrima_square.jpg" x={pointerX} y={pointerY} className="hidden md:block" machine />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(5,5,7,.2),rgba(5,5,7,.6)_48%,rgba(5,5,7,.3))]" />
      <nav aria-label={copy.footer.navigationLabel} className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <a href="#top" className="signal-link text-xs font-medium uppercase tracking-[0.16em] text-white transition hover:text-teal-200 sm:text-sm">DOKIMACHINE</a>
        <div role="group" aria-label={copy.footer.languageLabel} className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.12em] sm:gap-4">
          {[["en", "EN"], ["jp", "日本語"], ["th", "ไทย"]].map(([language, label]) => (
            <Link
              key={language}
              href={`/${language}`}
              hrefLang={language === "jp" ? "ja" : language}
              onClick={() => window.localStorage.setItem("dokimachine-locale", language)}
              aria-current={locale === language ? "page" : undefined}
              className={`signal-link transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${locale === language ? "text-white" : "text-white/45 hover:text-white"}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
      <div id="top" className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-6 pb-12 pt-32 sm:px-10 sm:pb-16"><div className="grid w-full gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-end">
        <motion.div initial={rise} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1, ease: cinematicEase }}>
          <motion.p initial={rise} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.8, delay: 0.1, ease: cinematicEase }} className="text-xs font-bold uppercase tracking-[0.3em] text-teal-200">{copy.hero.eyebrow}</motion.p>
          <h1 className="mt-5 max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-8xl">{copy.hero.title.split(" ").map((word, index) => <motion.span key={`${word}-${index}`} initial={rise} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.72, delay: 0.18 + index * 0.045, ease: cinematicEase }} className="mr-[0.22em] inline-block">{word}</motion.span>)}</h1>
          <motion.p initial={rise} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.8, delay: 0.55, ease: cinematicEase }} className="mt-7 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">{copy.hero.description}</motion.p>
          <motion.p initial={rise} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.75, delay: 0.66, ease: cinematicEase }} className="mt-5 text-sm font-light tracking-[0.08em] text-fuchsia-100/85">— {copy.hero.signature}</motion.p>
          <motion.div initial={rise} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.8, delay: 0.76, ease: cinematicEase }} className="mt-9 flex flex-col gap-3 sm:flex-row"><MagneticLink href={`/${locale}/doki`} className="claris-flow-button group inline-flex min-h-11 items-center justify-center gap-3 rounded-full px-6 py-3 text-xs font-extrabold uppercase tracking-[0.16em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">{copy.hero.primaryCta}<FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" /></MagneticLink><MagneticLink href={`/${locale}/music`} className="claris-flow-button claris-flow-button--machine group inline-flex min-h-11 items-center justify-center gap-3 rounded-full px-6 py-3 text-xs font-extrabold uppercase tracking-[0.16em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">{copy.hero.secondaryCta}<FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" /></MagneticLink></motion.div>
        </motion.div>
        <motion.aside initial={rise} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.9, delay: 0.45, ease: cinematicEase }} className="hidden border-l border-white/15 pl-7 md:block"><p className="text-xs font-bold uppercase tracking-[0.26em] text-fuchsia-200">{copy.hero.machineLabel}</p><p className="mt-3 max-w-xs text-sm leading-6 text-white/75">{copy.hero.machineDescription}</p></motion.aside>
      </div></div>
      <a href="#identity" className="group absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[9px] font-bold uppercase tracking-[0.24em] text-white/60 transition hover:text-white md:flex">{copy.hero.scroll}<motion.span animate={reducedMotion ? undefined : { y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}><FaArrowDown className="h-3 w-3" /></motion.span></a>
    </section>
  );
}

function HeroPanel({ image, className, machine = false, x, y }) {
  const reducedMotion = useReducedMotion();
  return <div className={`relative overflow-hidden ${className}`}><motion.div style={reducedMotion ? undefined : { x, y }} animate={reducedMotion ? undefined : { scale: [1.05, 1.1, 1.05] }} transition={{ duration: machine ? 19 : 23, repeat: Infinity, ease: "easeInOut" }} className="absolute -inset-8"><Image src={image} alt="" fill priority sizes="(min-width: 768px) 70vw, 100vw" className={`object-cover ${machine ? "object-center opacity-75" : "object-center"}`} /></motion.div><div className={`absolute inset-0 ${machine ? "bg-fuchsia-950/35" : "bg-teal-950/15"}`} /></div>;
}
