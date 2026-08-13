"use client";

import { FaDiscord, FaEnvelope, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { useLandingLocale } from "@/components/landing/LandingLocaleProvider";
import { landingTranslations } from "@/content/landing-translations";

const footerLocales = ["en", "jp", "th"];
const socialLinks = [
  { label: "GitHub", href: "https://github.com/DokkDokki", Icon: FaGithub },
  { label: "X / Twitter", href: "https://x.com/dokimachine", Icon: FaTwitter },
  { label: "YouTube", href: "https://www.youtube.com/@dokimachine", Icon: FaYoutube },
  { label: "Discord", href: "https://discord.gg/R8JB5JHvaZ", Icon: FaDiscord },
  { label: "Email", href: "mailto:dokkdokki@dokimachine.net", Icon: FaEnvelope },
];

export default function Footer() {
  const { copy, locale } = useLandingLocale();
  const pageLinks = [["#identity", copy.navigation.about], ["#disciplines", copy.navigation.work], ["#frames", copy.navigation.frames], ["#connect", copy.navigation.contact]];

  return <footer className="border-t border-white/10 bg-[#030304] px-6 py-12 text-[var(--claris-muted)] sm:px-10"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_.8fr_.8fr_auto] md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-white">DOKI / DOKIMACHINE</p><p className="mt-3 text-sm">{copy.footer.descriptor}</p><a href="mailto:dokkdokki@dokimachine.net" className="mt-5 inline-block text-sm text-teal-200 transition hover:text-white">{copy.footer.contact} →</a></div><nav aria-label={copy.footer.navigationLabel} className="flex flex-col items-start gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">{pageLinks.map(([href, label]) => <a key={href} href={href} className="signal-link transition hover:text-white">{label}</a>)}</nav><nav aria-label={copy.footer.socialLabel} className="flex flex-wrap gap-2">{socialLinks.map(({ label, href, Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-teal-300 hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"><Icon className="h-3.5 w-3.5" /></a>)}</nav><div role="group" aria-label={copy.footer.languageLabel} className="flex items-center gap-1 rounded-full border border-white/10 p-1">{footerLocales.map((language) => <Link key={language} href={`/${language}`} hrefLang={language === "jp" ? "ja" : language} onClick={() => window.localStorage.setItem("dokimachine-locale", language)} aria-current={locale === language ? "page" : undefined} className={`min-h-9 rounded-full px-3 py-2 text-[9px] font-bold tracking-[0.1em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${locale === language ? "bg-white text-slate-950" : "text-white/60 hover:text-white"}`}>{landingTranslations[language].languageName}</Link>)}</div></div></footer>;
}
