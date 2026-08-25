import Link from "next/link";
import WorldNav from "@/components/site/WorldNav";
import SiteFooter from "@/components/site/SiteFooter";
import { FadeZoom } from "@/components/motion/FadeZoom";
import { projectContent } from "@/content/legacy-page-content";

export default function ProjectsPage({ locale = "en" }) {
  const c = projectContent[locale] || projectContent.en;
  return <div className="claris-page min-h-screen overflow-x-clip text-slate-100"><WorldNav locale={locale} world="doki" /><main className="mx-auto min-w-0 max-w-5xl px-5 py-16 sm:px-8 sm:py-24"><FadeZoom as="header"><p className="text-xs font-bold uppercase tracking-[.28em] text-teal-300">{c.eyebrow}</p><h1 className="mt-5 max-w-4xl text-5xl font-light leading-[.98] tracking-tight sm:text-7xl">{c.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{c.intro}</p></FadeZoom><div className="mt-14 grid gap-4 md:grid-cols-3">{c.items.map(([title, text]) => <FadeZoom key={title}><article className="claris-glass flex h-full min-w-0 flex-col rounded-3xl border p-7 sm:p-8"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-teal-300">{c.category}</p><h2 className="mt-4 text-2xl font-light text-white">{title}</h2><p className="mt-4 leading-7 text-slate-400">{text}</p><p className="mt-auto pt-8 text-[10px] font-bold uppercase tracking-[.18em] text-white/40">{c.coming}</p></article></FadeZoom>)}</div><div className="mt-16 text-center"><Link href={`/${locale}/doki`} className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[.15em] text-white/75 transition hover:border-teal-300 hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300">{c.back}</Link></div></main><SiteFooter locale={locale} /></div>;
}
