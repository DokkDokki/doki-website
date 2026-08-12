"use client";

import Link from "next/link";
import { useLandingLocale } from "@/components/landing/LandingLocaleProvider";

const headerCopy = {
  en: { doki: "Doki", machine: "DOKIMACHINE", contact: "Contact" },
  jp: { doki: "Doki", machine: "DOKIMACHINE", contact: "お問い合わせ" },
  th: { doki: "Doki", machine: "DOKIMACHINE", contact: "ติดต่อ" },
};

export default function LandingHeader() {
  const { locale } = useLandingLocale();
  const text = headerCopy[locale];
  const links = [
    { href: "/doki", label: text.doki, accent: "hover:text-teal-200" },
    { href: "/dokimachine", label: text.machine, accent: "hover:text-fuchsia-200" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-14 items-center justify-between border-b border-white/15 px-1 sm:px-2">
          <Link
            href={`/${locale}`}
            className="text-xs font-bold uppercase tracking-[0.28em] text-white transition hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            DOKIMACHINE
          </Link>

          <nav aria-label="Primary navigation" className="flex items-center gap-4 sm:gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[9px] font-bold uppercase tracking-[0.14em] text-white/60 transition sm:text-[10px] sm:tracking-[0.18em] ${link.accent}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="mailto:dokkdokki@dokimachine.net"
            className="hidden text-[9px] font-bold uppercase tracking-[0.18em] text-white/50 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:inline-flex"
          >
            {text.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
