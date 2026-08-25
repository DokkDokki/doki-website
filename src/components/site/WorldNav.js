"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCircle } from "react-icons/fa";

const labels = {
  en: { doki: "Doki", music: "Music", photo: "Photo", projects: "Projects", gear: "Gear", releases: "Releases", navigation: "Site navigation", language: "Language" },
  jp: { doki: "Doki", music: "音楽", photo: "写真", projects: "プロジェクト", gear: "機材", releases: "リリース", navigation: "サイトナビゲーション", language: "言語" },
  th: { doki: "Doki", music: "ดนตรี", photo: "ภาพถ่าย", projects: "โปรเจกต์", gear: "อุปกรณ์", releases: "ผลงาน", navigation: "การนำทางเว็บไซต์", language: "ภาษา" },
};

const locales = [["en", "EN"], ["jp", "日本語"], ["th", "ไทย"]];

export default function WorldNav({ locale = "en", world = "doki" }) {
  const pathname = usePathname();
  const t = labels[locale] || labels.en;
  const isDoki = world === "doki";
  const active = isDoki ? "text-teal-200" : "text-fuchsia-200";
  const links = isDoki
    ? [[`/${locale}/doki`, t.doki], [`/${locale}/photography`, t.photo], [`/${locale}/doki/projects`, t.projects], [`/${locale}/doki/gear`, t.gear]]
    : [[`/${locale}/music`, t.music], [`/${locale}/music/discography`, t.releases]];
  const localePath = pathname?.replace(new RegExp(`^/${locale}(?=/|$)`), "") || "";
  const linkClass = "signal-link min-h-11 shrink-0 pt-3 text-[10px] font-medium uppercase tracking-[.14em] text-white/50 transition hover:text-white";

  return <nav aria-label={t.navigation} className="landing-header-ui sticky top-0 z-50 border-b border-white/10 bg-[rgba(5,5,7,.82)] text-white backdrop-blur-xl">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex min-h-[4.5rem] items-center justify-between gap-4">
        <Link href={`/${locale}`} className="signal-link flex min-h-11 min-w-0 items-center gap-2 text-xs font-medium uppercase tracking-[.16em] text-white transition hover:text-teal-200 sm:text-sm"><FaCircle className={`h-1.5 w-1.5 shrink-0 ${active}`} />DOKIMACHINE</Link>
        <div className="hidden items-center gap-5 lg:flex">{links.map(([href, label]) => <Link key={href} href={href} className={linkClass}>{label}</Link>)}</div>
        <div role="group" aria-label={t.language} className="flex shrink-0 items-center gap-3 text-[10px] font-medium uppercase tracking-[.12em] sm:gap-4">{locales.map(([language, label]) => <Link key={language} href={`/${language}${localePath}`} hrefLang={language === "jp" ? "ja" : language} aria-current={locale === language ? "page" : undefined} className={`signal-link transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${locale === language ? "text-white" : "text-white/45 hover:text-white"}`}>{label}</Link>)}</div>
      </div>
      <div className="flex gap-5 overflow-x-auto pb-2 lg:hidden" aria-label={t.navigation}>{links.map(([href, label]) => <Link key={href} href={href} className={linkClass}>{label}</Link>)}</div>
    </div>
  </nav>;
}
