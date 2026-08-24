"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { LandingLocaleProvider } from "@/components/landing/LandingLocaleProvider";
import TerminalBootIntro from "@/components/landing/TerminalBootIntro";

const INTRO_SEEN_KEY = "dokimachine-intro-seen";

export default function LandingExperience({ children, locale }) {
  const [introState, setIntroState] = useState("checking");
  const previousFocusRef = useRef(null);
  const isBlocking = introState !== "hidden";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let hasSeenIntro = false;

    try {
      hasSeenIntro = window.sessionStorage.getItem(INTRO_SEEN_KEY) === "1";
    } catch {
      // Storage can be unavailable in privacy-restricted browsing contexts.
    }

    setIntroState(prefersReducedMotion || hasSeenIntro ? "hidden" : "visible");
  }, []);

  useEffect(() => {
    if (!isBlocking) return undefined;

    const originalOverflow = document.body.style.overflow;
    const originalOverscrollBehavior = document.body.style.overscrollBehavior;
    previousFocusRef.current = document.activeElement;
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.overscrollBehavior = originalOverscrollBehavior;
      previousFocusRef.current?.focus?.();
    };
  }, [isBlocking]);

  const finishIntro = useCallback(() => {
    try {
      window.sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    } catch {
      // The animation should still finish when storage cannot be written.
    }

    setIntroState((currentState) => currentState === "visible" ? "exiting" : currentState);
  }, []);

  return (
    <LandingLocaleProvider locale={locale}>
      <div inert={isBlocking} aria-hidden={isBlocking || undefined}>
        {children}
      </div>

      {introState === "checking" && (
        <div className="fixed inset-0 z-[1000] bg-[var(--claris-ink)]" aria-hidden="true" />
      )}

      <AnimatePresence onExitComplete={() => setIntroState("hidden")}>
        {introState === "visible" && <TerminalBootIntro onComplete={finishIntro} />}
      </AnimatePresence>
    </LandingLocaleProvider>
  );
}
