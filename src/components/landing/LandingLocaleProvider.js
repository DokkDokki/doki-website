"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { landingTranslations } from "@/content/landing-translations";

const LandingLocaleContext = createContext(null);
const documentLanguages = { en: "en", jp: "ja", th: "th" };

export function LandingLocaleProvider({ children, locale }) {
  useEffect(() => {
    document.documentElement.lang = documentLanguages[locale];
    return () => { document.documentElement.lang = "en"; };
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    copy: landingTranslations[locale],
  }), [locale]);

  return <LandingLocaleContext.Provider value={value}>{children}</LandingLocaleContext.Provider>;
}

export function useLandingLocale() {
  const context = useContext(LandingLocaleContext);
  if (!context) throw new Error("useLandingLocale must be used within LandingLocaleProvider");
  return context;
}
