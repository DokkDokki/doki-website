"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { FaLaptop, FaMicrochip, FaMouse, FaServer } from "react-icons/fa";
import WorldNav from "@/components/site/WorldNav";
import SiteFooter from "@/components/site/SiteFooter";
import { gearContent } from "@/content/legacy-page-content";

const gearData = {
  desktop: [["cpu", "Intel Core i7-12700K"], ["ram", "32GB DDR5-6000 (G.Skill Trident Z5 Neo)"], ["gpu", "RTX 3080 Ti (Gigabyte Vision OC)"], ["chassis", "Corsair iCUE 7000X"], ["cooling", "Corsair iCUE H150i Elite LCD XT 360mm"], ["psu", "Corsair RM1000x Shift"]],
  storage: [["boot", "Samsung 990 Pro 2TB"], ["secondary", "Samsung 980 Pro 1TB"], ["gaming", "HP EX950 2TB"]],
  portables: [
    { title: "MacBook Pro (2021)", tone: "teal", unit: "musicUnit", specs: [["silicon", "Apple M1 Pro"], ["memory", "32GB Unified (CTO)"], ["primaryUse", "Ableton Live, Logic Pro, DJing"]] },
    { title: "ThinkPad P1 Gen 7", tone: "emerald", unit: "engineeringUnit", specs: [["cpu", "Core Ultra 9 185H"], ["gpu", "RTX 4070 Laptop"], ["primaryUse", "College & Engineering Work"]] },
  ],
  interfaces: [
    { title: "gaming", tone: "teal", specs: [["keyboard", "Razer DeathStalker V2 Pro"], ["mouse", "Razer Basilisk V3 Pro"], ["display", "MSI MPG 274URF QD"]] },
    { title: "productivity", tone: "emerald", specs: [["keyboard", "NuPhy Air75 V3"], ["mouse", "Logitech MX Master 3S"], ["display", "LG 27UP850N-W"]] },
  ],
};

export default function GearPage({ locale = "en" }) {
  const c = gearContent[locale] || gearContent.en;
  const reduced = useReducedMotion();
  const reveal = reduced ? undefined : { opacity: 0, y: 24 };
  const revealAnimate = reduced ? undefined : { opacity: 1, y: 0 };

  return (
    <div className="claris-page min-h-screen overflow-x-clip text-slate-200">
      <WorldNav locale={locale} world="doki" />
      <main className="mx-auto min-w-0 max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <motion.header initial={reveal} animate={revealAnimate} transition={{ duration: 0.7 }} className="mb-20 max-w-3xl sm:mb-28">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-teal-300">{c.eyebrow}</p>
          <h1 className="mt-5 text-5xl font-light leading-[.98] tracking-tight text-white sm:text-7xl">{c.title}</h1>
          <p className="mt-7 text-lg leading-8 text-slate-300">{c.intro}</p>
        </motion.header>

        <GearSection icon={FaMicrochip} title={c.sections.main}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.045] p-7 shadow-2xl sm:p-10">
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
            <div className="relative z-10 grid min-w-0 gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="min-w-0"><h3 className="text-3xl font-bold uppercase text-white">DESKTOP-DOKI</h3><p className="mt-2 text-xs font-bold uppercase tracking-[.2em] text-teal-300">{c.established}</p><div className="mt-8 space-y-4">{gearData.desktop.map(([label, value]) => <SpecItem key={label} label={c.labels[label]} value={value} />)}</div></div>
              <div className="min-w-0"><h4 className="flex items-center gap-2 text-sm font-bold text-white"><FaServer className="text-teal-300" />{c.storage}</h4><div className="mt-6 space-y-4">{gearData.storage.map(([label, value]) => <SpecItem key={label} label={c.labels[label]} value={value} />)}</div><h4 className="mt-10 flex items-center gap-2 text-sm font-bold text-white"><FaLaptop className="text-teal-300" />{c.monitor}</h4><p className="mt-5 text-sm font-medium text-white">MSI MPG 274URF QD</p></div>
            </div>
          </div>
        </GearSection>

        <GearSection icon={FaLaptop} title={c.sections.portables}><div className="grid gap-5 md:grid-cols-2">{gearData.portables.map((item) => <article key={item.title} className="min-w-0 rounded-3xl border border-white/10 bg-white/[.045] p-7 transition hover:-translate-y-1 hover:border-teal-300/30 sm:p-8"><h3 className="text-xl font-bold text-white">{item.title}</h3><p className={`mt-2 text-[10px] font-bold uppercase tracking-[.2em] ${item.tone === "emerald" ? "text-emerald-300" : "text-teal-300"}`}>{c[item.unit]}</p><div className="mt-7 space-y-4">{item.specs.map(([label, value]) => <SpecItem key={label} label={c.labels[label]} value={value} />)}</div></article>)}</div></GearSection>

        <GearSection icon={FaMouse} title={c.sections.interfaces}><div className="grid gap-5 md:grid-cols-2">{gearData.interfaces.map((item) => <article key={item.title} className="min-w-0 rounded-3xl border border-white/10 bg-white/[.045] p-7 sm:p-8"><h3 className="flex items-center gap-3 text-lg font-bold text-white"><span className={`h-2 w-2 rounded-full ${item.tone === "emerald" ? "bg-emerald-400" : "bg-teal-400"}`} />{c[item.title]}</h3><div className="mt-7 space-y-4">{item.specs.map(([label, value]) => <SpecItem key={label} label={c.labels[label]} value={value} />)}</div></article>)}</div></GearSection>

        <GearSection icon={FaServer} title={c.sections.lab}><div className="grid gap-5 lg:grid-cols-[1.35fr_.65fr]"><article className="relative min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[.045] p-7 sm:p-8"><FaMicrochip className="relative z-10 mb-6 text-xl text-teal-300" /><h3 className="relative z-10 font-bold text-white">Dell PowerEdge T40</h3><p className="relative z-10 mt-2 text-[10px] font-bold uppercase tracking-[.2em] text-teal-300">{c.homeLab.nas}</p><div className="relative z-10 mt-6 flex flex-wrap gap-2">{["UBUNTU SERVER", "ZFS/EXT4", "DOCKER"].map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[9px] font-bold text-teal-300">{tag}</span>)}</div><p className="relative z-10 mt-7 text-sm leading-7 text-slate-400">{c.homeLab.nasText}</p></article><article className="min-w-0 rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-transparent p-7 sm:p-8"><FaServer className="mb-6 text-xl text-purple-300" /><h3 className="font-bold text-white">Dell PowerEdge R430</h3><p className="mt-2 text-[10px] font-bold uppercase tracking-[.2em] text-purple-300">{c.homeLab.enterprise}</p><p className="mt-6 text-sm leading-7 text-slate-400">{c.homeLab.enterpriseText}</p></article></div></GearSection>

        <footer className="mt-10 border-t border-white/10 pt-12 text-center sm:mt-20 sm:pt-16"><p className="text-[10px] font-bold uppercase tracking-[.25em] text-slate-500">{c.footer}</p><Link href={`/${locale}/doki`} className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-xs font-bold uppercase tracking-[.15em] text-white/75 transition hover:border-teal-300 hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300">{c.return}</Link></footer>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

function GearSection({ icon: Icon, title, children }) { return <section className="mb-20 min-w-0 sm:mb-28"><div className="mb-8 flex min-w-0 items-center gap-3 sm:mb-10 sm:gap-4"><Icon className="shrink-0 text-2xl text-teal-300" /><h2 className="min-w-0 text-xl font-bold uppercase tracking-[.12em] text-white sm:text-2xl sm:tracking-[.2em]">{title}</h2><div className="h-px min-w-6 flex-1 bg-white/10" /></div>{children}</section>; }
function SpecItem({ label, value }) { return <div className="flex min-w-0 flex-col gap-1 border-b border-white/5 pb-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"><span className="shrink-0 text-[10px] font-bold uppercase tracking-[.12em] text-slate-500">{label}</span><span className="min-w-0 break-words text-sm font-medium text-white sm:text-right">{value}</span></div>; }
