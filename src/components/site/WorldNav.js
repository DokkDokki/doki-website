"use client";

import Link from "next/link";
import { FaArrowRight, FaCircle, FaGlobe } from "react-icons/fa";

const labels = { en: { portal: "Portal", doki: "Doki", music: "Music", photo: "Photo", projects: "Projects", releases: "Releases", switch: "Switch world" }, jp: { portal: "ポータル", doki: "Doki", music: "音楽", photo: "写真", projects: "Projects", releases: "Releases", switch: "世界を切り替える" }, th: { portal: "พอร์ทัล", doki: "Doki", music: "ดนตรี", photo: "ภาพถ่าย", projects: "Projects", releases: "Releases", switch: "เปลี่ยนโลก" } };

export default function WorldNav({ locale = "en", world = "doki" }) {
  const t = labels[locale] || labels.en;
  const isDoki = world === "doki";
  const active = isDoki ? "text-teal-200" : "text-fuchsia-200";
  const links = isDoki ? [[`/${locale}/doki`, t.doki], [`/${locale}/photography`, t.photo], ["/en/doki/projects", `${t.projects} · EN`]] : [[`/${locale}/music`, t.music], ["/en/music/discography", `${t.releases} · EN`]];
  return <nav className="claris-nav sticky top-0 z-50 border-b backdrop-blur-xl"><div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6"><Link href={`/${locale}`} className="flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-white"><FaCircle className={`h-2 w-2 ${active}`} /> DOKIMACHINE</Link><div className="hidden items-center gap-5 md:flex">{links.map(([href, label]) => <Link key={href} href={href} className="min-h-11 pt-3 text-[10px] font-bold uppercase tracking-[.16em] text-white/55 transition hover:text-white">{label}</Link>)}</div><Link href={isDoki ? `/${locale}/music` : `/${locale}/doki`} aria-label={t.switch} className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-[10px] font-bold uppercase tracking-[.14em] transition ${isDoki ? "border-teal-300/30 text-teal-200 hover:bg-teal-300/10" : "border-fuchsia-300/30 text-fuchsia-200 hover:bg-fuchsia-300/10"}`}><FaGlobe /> <span className="hidden sm:inline">{isDoki ? t.music : t.doki}</span><FaArrowRight /></Link></div></nav>;
}
