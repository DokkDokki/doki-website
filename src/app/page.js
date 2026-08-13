"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";

const supportedLocales = ["en", "jp", "th"];

function detectLocale() {
  const savedLocale = window.localStorage.getItem("dokimachine-locale");
  if (supportedLocales.includes(savedLocale)) return savedLocale;

  const preferredLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const language of preferredLanguages) {
    const languageCode = language.toLowerCase().split("-")[0];
    if (languageCode === "ja") return "jp";
    if (languageCode === "th") return "th";
    if (languageCode === "en") return "en";
  }

  return "en";
}

export default function Home() {
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const destination = `/${detectLocale()}`;
    if (reducedMotion) {
      router.replace(destination);
      return undefined;
    }

    const exitTimer = window.setTimeout(() => setLeaving(true), 240);
    const navigationTimer = window.setTimeout(() => router.replace(destination), 520);
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(navigationTimer);
    };
  }, [reducedMotion, router]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--claris-ink)] text-white">
      <motion.div
        aria-hidden="true"
        animate={leaving ? { opacity: 0, scale: 1.14 } : { opacity: [0.35, 0.68, 0.35], scale: [0.9, 1.06, 0.9] }}
        transition={leaving ? { duration: 0.28, ease: "easeOut" } : { duration: 1.8, ease: "easeInOut" }}
        className="pointer-events-none absolute h-[34rem] w-[34rem] rounded-full bg-teal-300/15 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        animate={leaving ? { opacity: 0, y: -8, filter: "blur(6px)" } : { opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center"
      >
        <p role="status" className="text-xs font-bold uppercase tracking-[0.3em] text-white/55">
          Selecting language…
        </p>
      </motion.div>
    </main>
  );
}
