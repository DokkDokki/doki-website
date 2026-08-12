"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import TerminalBootIntro from "@/components/landing/TerminalBootIntro";
import { LandingLocaleProvider } from "@/components/landing/LandingLocaleProvider";

const INTRO_SEEN_KEY = "dokimachine-intro-seen";

export default function LandingExperience({ children, locale }) {
  const [introState, setIntroState] = useState("checking");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasSeenIntro = sessionStorage.getItem(INTRO_SEEN_KEY) === "1";
    setIntroState(prefersReducedMotion || hasSeenIntro ? "hidden" : "visible");
  }, []);

  const finishIntro = useCallback(() => {
    sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    setIntroState("hidden");
  }, []);

  return (
    <LandingLocaleProvider locale={locale}>
      {children}
      {introState === "checking" && <div className="fixed inset-0 z-[1000] bg-[var(--claris-ink)]" aria-hidden="true" />}
      <AnimatePresence>
        {introState === "visible" && <TerminalBootIntro onComplete={finishIntro} />}
      </AnimatePresence>
    </LandingLocaleProvider>
  );
}
