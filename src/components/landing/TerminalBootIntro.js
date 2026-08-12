"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLandingLocale } from "@/components/landing/LandingLocaleProvider";

const BOOT_LINES = [
  { label: "IDENTITY", value: "DOKI", accent: "text-teal-300" },
  { label: "CREATIVE CORE", value: "DOKIMACHINE", accent: "text-fuchsia-300" },
  { label: "MODULES", value: "ENGINEERING / MUSIC / PHOTO", accent: "text-white/75" },
  { label: "SYSTEM", value: "READY", accent: "text-emerald-300" },
];

const STEP_TIME = 420;

export default function TerminalBootIntro({ onComplete }) {
  const { copy } = useLandingLocale();
  const bootLines = copy.intro.lines.map(([label, value], index) => ({
    label,
    value,
    accent: BOOT_LINES[index].accent,
  }));
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < bootLines.length) {
      const stepTimer = window.setTimeout(
        () => setVisibleCount((count) => count + 1),
        visibleCount === 0 ? 250 : STEP_TIME,
      );
      return () => window.clearTimeout(stepTimer);
    }

    const finishTimer = window.setTimeout(onComplete, 650);
    return () => window.clearTimeout(finishTimer);
  }, [bootLines.length, onComplete, visibleCount]);

  useEffect(() => {
    const skip = (event) => {
      if (event.key === "Tab") return;
      onComplete();
    };

    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, [onComplete]);

  const progress = Math.round((visibleCount / bootLines.length) * 100);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.14, filter: "blur(12px)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[1000] flex cursor-pointer items-center justify-center overflow-hidden bg-[var(--claris-ink)] px-6 text-white"
      onClick={onComplete}
      role="button"
      tabIndex={0}
      aria-label={copy.intro.skipLabel}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(45,212,191,0.09),transparent_30%),radial-gradient(circle_at_75%_70%,rgba(217,70,239,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />

      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl font-mono"
      >
        <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.34em] text-white/35">{copy.intro.interface}</p>
            <p className="mt-2 text-lg font-bold tracking-[0.18em] text-white">DOKI.OS</p>
          </div>
          <span className="text-xs tabular-nums text-white/35">{String(progress).padStart(3, "0")}%</span>
        </div>

        <div className="min-h-40 space-y-4" aria-live="polite">
          {bootLines.slice(0, visibleCount).map((line, index) => (
            <motion.div
              key={line.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.22 }}
              className="grid grid-cols-[1fr_auto] gap-5 text-[11px] sm:text-xs"
            >
              <span className="text-white/35">
                <span className="mr-3 text-white/15">0{index + 1}</span>
                {line.label}
              </span>
              <span className={`text-right ${line.accent}`}>{line.value}</span>
            </motion.div>
          ))}

          {visibleCount < bootLines.length && (
            <div className="flex items-center gap-2 text-xs text-white/35">
              <span>&gt;</span>
              <span className="h-3.5 w-1.5 animate-pulse bg-teal-300" />
            </div>
          )}
        </div>

        <div className="mt-10 h-px overflow-hidden bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-teal-300 to-fuchsia-400"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        <p className="mt-4 text-center text-[9px] uppercase tracking-[0.28em] text-white/20">
          {copy.intro.skip}
        </p>
      </motion.div>
    </motion.div>
  );
}
