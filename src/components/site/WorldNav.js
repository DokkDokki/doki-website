"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCircle } from "react-icons/fa";

const labels = {
  en: {
    doki: "Doki",
    music: "Music",
    photo: "Photo",
    projects: "Projects",
    releases: "Releases",
    navigation: "Site navigation",
    language: "Language",
  },
  jp: {
    doki: "Doki",
    music: "音楽",
    photo: "写真",
    projects: "Projects",
    releases: "Releases",
    navigation: "サイトナビゲーション",
    language: "言語",
  },
  th: {
    doki: "Doki",
    music: "ดนตรี",
    photo: "ภาพถ่าย",
    projects: "Projects",
    releases: "Releases",
    navigation: "การนำทางเว็บไซต์",
    language: "ภาษา",
  },
};
const locales = [
  ["en", "EN"],
  ["jp", "日本語"],
  ["th", "ไทย"],
];

export default function WorldNav({ locale = "en", world = "doki" }) {
  const pathname = usePathname();
  const t = labels[locale] || labels.en;
  const isDoki = world === "doki";
  const active = isDoki ? "text-teal-200" : "text-fuchsia-200";
  const links = isDoki
    ? [
        [`/${locale}/doki`, t.doki],
        [`/${locale}/photography`, t.photo],
        ["/en/doki/projects", `${t.projects} · EN`],
      ]
    : [
        [`/${locale}/music`, t.music],
        ["/en/music/discography", `${t.releases} · EN`],
      ];
  const localePath =
    pathname?.replace(new RegExp(`^/${locale}(?=/|$)`), "") || "";
  return (
    <nav
      aria-label={t.navigation}
      className="landing-header-ui sticky top-0 z-50 border-b border-white/10 bg-[rgba(5,5,7,.82)] text-white backdrop-blur-xl"
    >
      <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href={`/${locale}`}
          className="signal-link flex min-h-11 items-center gap-2 text-xs font-medium uppercase tracking-[.16em] text-white transition hover:text-teal-200 sm:text-sm"
        >
          <FaCircle className={`h-1.5 w-1.5 ${active}`} />
          DOKIMACHINE
        </Link>
        <div className="hidden items-center gap-5 lg:flex">
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="signal-link min-h-11 pt-3 text-[10px] font-medium uppercase tracking-[.14em] text-white/50 transition hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
        <div
          role="group"
          aria-label={t.language}
          className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[.12em] sm:gap-4"
        >
          {locales.map(([language, label]) => (
            <Link
              key={language}
              href={`/${language}${localePath}`}
              hrefLang={language === "jp" ? "ja" : language}
              aria-current={locale === language ? "page" : undefined}
              className={`signal-link transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${locale === language ? "text-white" : "text-white/45 hover:text-white"}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
