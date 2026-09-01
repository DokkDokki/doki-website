"use client";

import { useEffect } from "react";

const localeSettings = {
  en: { className: "", language: "en" },
  jp: { className: "font-japanese", language: "ja" },
  th: { className: "font-thai", language: "th" },
};

export default function LocalePageShell({ locale, children }) {
  const settings = localeSettings[locale] || localeSettings.en;

  useEffect(() => {
    document.documentElement.lang = settings.language;
  }, [settings.language]);

  return <div lang={settings.language} className={settings.className}>{children}</div>;
}
