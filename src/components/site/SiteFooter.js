"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDiscord, FaEnvelope, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const locales = [["en", "EN"], ["jp", "日本語"], ["th", "ไทย"]];
const copy = {
  en: { descriptor: "Engineering · Music · Photography", contact: "Say hello", navigation: "Site navigation", social: "Social links", language: "Language", links: ["Doki", "Engineering", "Photography", "DOKIMACHINE"] },
  jp: { descriptor: "エンジニアリング · 音楽 · 写真", contact: "連絡する", navigation: "サイトナビゲーション", social: "ソーシャルリンク", language: "言語", links: ["Doki", "エンジニアリング", "写真", "DOKIMACHINE"] },
  th: { descriptor: "วิศวกรรม · ดนตรี · ภาพถ่าย", contact: "ทักทาย", navigation: "การนำทางเว็บไซต์", social: "ลิงก์โซเชียล", language: "ภาษา", links: ["Doki", "วิศวกรรม", "ภาพถ่าย", "DOKIMACHINE"] },
};
const socialLinks = [["GitHub", "https://github.com/DokkDokki", FaGithub], ["X / Twitter", "https://x.com/dokimachine", FaTwitter], ["YouTube", "https://www.youtube.com/@dokimachine", FaYoutube], ["Discord", "https://discord.gg/R8JB5JHvaZ", FaDiscord], ["Email", "mailto:dokkdokki@dokimachine.net", FaEnvelope]];

export default function SiteFooter({ locale = "en" }) {
  const pathname = usePathname();
  const t = copy[locale] || copy.en;
  const localePath = pathname?.replace(new RegExp(`^/${locale}(?=/|$)`), "") || "";
  const links = [`/${locale}/doki`, `/${locale}/doki/engineering`, `/${locale}/photography`, `/${locale}/music`];
  return <footer className="border-t border-white/10 bg-[#030304] px-5 py-12 text-[var(--claris-muted)] sm:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_.8fr_.8fr_auto] md:items-end"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-white">DOKI / DOKIMACHINE</p><p className="mt-3 text-sm">{t.descriptor}</p><a href="mailto:dokkdokki@dokimachine.net" className="mt-5 inline-block text-sm text-teal-200 transition hover:text-white">{t.contact} →</a></div><nav aria-label={t.navigation} className="flex flex-col items-start gap-3 text-[10px] font-bold uppercase tracking-[.16em] text-white/65">{links.map((href, index) => <Link key={href} href={href} className="signal-link transition hover:text-white">{t.links[index]}</Link>)}</nav><nav aria-label={t.social} className="flex flex-wrap gap-2">{socialLinks.map(([label, href, Icon]) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-teal-300 hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"><Icon className="h-3.5 w-3.5" /></a>)}</nav><div role="group" aria-label={t.language} className="grid w-[13.5rem] grid-cols-3 gap-1 rounded-full border border-white/10 p-1">{locales.map(([language, label]) => <Link key={language} href={`/${language}${localePath}`} hrefLang={language === "jp" ? "ja" : language} aria-current={locale === language ? "page" : undefined} className={`flex min-h-9 items-center justify-center rounded-full px-1 py-2 text-center text-[9px] font-bold tracking-[.1em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${locale === language ? "bg-white text-slate-950" : "text-white/60 hover:text-white"}`}>{label}</Link>)}</div></div></footer>;
}
