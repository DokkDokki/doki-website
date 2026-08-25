"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { core, photoData } from "@/content/core-content";
import { interfaceTranslations } from "@/content/interface-translations";
import { landingTranslations } from "@/content/landing-translations";
import InstagramGallery from "@/components/media/InstagramGallery";
import WorldNav from "@/components/site/WorldNav";
import SiteFooter from "@/components/site/SiteFooter";
import { FadeZoom, Stagger, StaggerItem } from "@/components/motion/FadeZoom";
export default function CorePhotographyPage({ locale }) {
  const [filter, setFilter] = useState("All"),
    [selected, setSelected] = useState(null);
  const close = () => setSelected(null);
  const ref = useRef();
  useEffect(() => {
    const k = (e) => e.key === "Escape" && close();
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);
  const c = core[locale].photo;
  const ui = interfaceTranslations[locale] || interfaceTranslations.en;
  const photos =
    filter === "All" ? photoData : photoData.filter((p) => p[1] === filter);
  const instagram = landingTranslations[locale].showcase.instagram;
  return (
    <div className="claris-page min-h-screen overflow-x-clip text-slate-100">
      <WorldNav locale={locale} world="doki" />
      <main className="mx-auto min-w-0 max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <FadeZoom as="header">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-teal-300">
            {c.eyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-light leading-none tracking-tight sm:text-7xl lg:text-8xl">
            {c.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {c.intro}
          </p>
        </FadeZoom>
        <div
          className="mt-10 flex flex-wrap gap-2 sm:mt-12"
          role="group"
          aria-label={ui.photo.filtersLabel}
        >
          {["All", "Train", "Cosplay", "Street"].map((x) => (
            <button
              key={x}
              onClick={() => setFilter(x)}
              className={`min-h-11 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 sm:px-5 ${filter === x ? "border-teal-300 bg-teal-300 text-slate-950" : "border-white/10 bg-white/5 text-white/70 hover:border-teal-300/40"}`}
            >
              {ui.photo.filters[x]}
            </button>
          ))}
        </div>
        <Stagger className="mt-8 grid gap-5 md:grid-cols-2">
          {photos.map((p) => (
            <StaggerItem key={p[0]}>
              <button
                onClick={() => setSelected(p)}
                className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              >
                <Image
                  src={p[2]}
                  alt={p[0]}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-6 pb-5 pt-20">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-teal-300">
                    {ui.photo.filters[p[1]]}
                  </span>
                  <span className="mt-1 block text-lg text-white">{p[0]}</span>
                  <span className="mt-1 block text-xs text-white/60">
                    {p[3]}
                  </span>
                </span>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
        <InstagramGallery copy={instagram} limit={12} locale={locale} />
        <FadeZoom className="mt-24 rounded-[2rem] border border-teal-300/15 bg-teal-300/5 p-8 sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-teal-300">
            {ui.photo.kariEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-light">
            {ui.photo.kariTitle}
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            {ui.photo.kariText}
          </p>
        </FadeZoom>
      </main>
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={selected[0]}
          ref={ref}
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 sm:right-5 sm:top-5"
            aria-label={ui.photo.closeDetails}
          >
            <FaTimes />
          </button>
          <div className="claris-glass max-h-[90vh] w-full max-w-5xl overflow-auto rounded-3xl border p-4 sm:p-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src={selected[2]}
                alt={selected[0]}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="p-3 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-300">
                {selected[1]}
              </p>
              <h2 className="mt-2 text-3xl">{selected[0]}</h2>
              <p className="mt-2 text-slate-400">{selected[3]}</p>
              <p className="mt-5 rounded-xl bg-white/5 p-4 font-mono text-xs text-slate-300">
                {selected[4]}
              </p>
            </div>
          </div>
        </div>
      )}
      <SiteFooter locale={locale} />
    </div>
  );
}
