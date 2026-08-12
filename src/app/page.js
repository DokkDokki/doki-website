"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    router.replace(`/${detectLocale()}`);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050507] text-white">
      <p className="animate-pulse text-xs font-bold uppercase tracking-[0.3em] text-white/45">
        Selecting language…
      </p>
    </main>
  );
}
