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
    <footer className="border-t border-white/10 bg-[#050507] px-6 py-8 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-xs text-slate-300">© {new Date().getFullYear()} DOKIMACHINE</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-600">
            {copy.footer.descriptor}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div
            role="group"
            aria-label={copy.footer.languageLabel}
            className="flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1"
          >
            {footerLocales.map((language) => (
              <Link
                key={language}
                href={`/${language}`}
                hrefLang={language === "jp" ? "ja" : language}
                onClick={() => window.localStorage.setItem("dokimachine-locale", language)}
                aria-current={locale === language ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-[10px] font-bold tracking-[0.12em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${
                  locale === language ? "bg-white text-slate-950" : "text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {landingTranslations[language].languageName}
              </Link>
            ))}
          </div>

          <nav aria-label={copy.footer.socialLabel} className="flex items-center gap-2">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
