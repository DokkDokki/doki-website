"use client";

import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
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

  return (
    <footer className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-slate-400 sm:px-6">
      <div className="pointer-events-auto mx-auto flex w-fit max-w-full flex-col items-center gap-2 rounded-[1.5rem] border border-white/15 bg-[#050507]/75 p-2 shadow-[0_16px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:flex-row sm:rounded-full">
        <div className="hidden px-3 lg:block">
          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/45">DOKIMACHINE</p>
        </div>

        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label={copy.footer.languageLabel}
            className="flex items-center rounded-full bg-white/[0.05] p-1"
          >
            {footerLocales.map((language) => (
              <Link
                key={language}
                href={`/${language}`}
                hrefLang={language === "jp" ? "ja" : language}
                onClick={() => window.localStorage.setItem("dokimachine-locale", language)}
                aria-current={locale === language ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-[9px] font-bold tracking-[0.1em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${
                  locale === language ? "bg-white text-slate-950" : "text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {landingTranslations[language].languageName}
              </Link>
            ))}
          </div>

          <span className="hidden h-6 w-px bg-white/10 sm:block" aria-hidden="true" />

          <nav aria-label={copy.footer.socialLabel} className="flex items-center gap-1">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
