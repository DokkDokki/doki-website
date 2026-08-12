"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLandingLocale } from "@/components/landing/LandingLocaleProvider";

const headerCopy = {
  en: { doki: "Doki", music: "Music", photography: "Photography", gear: "Gear", contact: "Contact", open: "Open navigation", close: "Close navigation" },
  jp: { doki: "Doki", music: "音楽", photography: "写真", gear: "機材", contact: "お問い合わせ", open: "ナビゲーションを開く", close: "ナビゲーションを閉じる" },
  th: { doki: "Doki", music: "ดนตรี", photography: "ภาพถ่าย", gear: "อุปกรณ์", contact: "ติดต่อ", open: "เปิดเมนูนำทาง", close: "ปิดเมนูนำทาง" },
};

export default function LandingHeader() {
  const { locale } = useLandingLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const text = headerCopy[locale];
  const links = [
    { href: "/doki", label: text.doki, accent: "hover:text-teal-200" },
    { href: "/dokimachine", label: text.music, accent: "hover:text-fuchsia-200" },
    { href: "/photography", label: text.photography, accent: "hover:text-sky-200" },
    { href: "/gear", label: text.gear, accent: "hover:text-amber-200" },
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

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] font-bold uppercase tracking-[0.18em] text-white/65 transition ${link.accent}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:dokkdokki@dokimachine.net"
              className="hidden rounded-full border border-white/20 bg-black/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-white/40 hover:bg-white hover:text-slate-950 sm:inline-flex"
            >
              {text.contact}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? text.close : text.open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white transition hover:bg-white hover:text-slate-950 md:hidden"
            >
              {menuOpen ? <FaTimes className="h-3.5 w-3.5" /> : <FaBars className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="mt-3 overflow-hidden rounded-2xl border border-white/15 bg-[#050507]/90 p-2 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
                <span aria-hidden="true" className="text-white/25">↗</span>
              </Link>
            ))}
            <a
              href="mailto:dokkdokki@dokimachine.net"
              className="mt-1 flex items-center justify-between rounded-xl bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-950"
            >
              {text.contact}
              <span aria-hidden="true">→</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
