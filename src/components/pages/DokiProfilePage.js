"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  FaArrowRight,
  FaCamera,
  FaCode,
  FaHeadphones,
  FaInstagram,
  FaTrain,
} from "react-icons/fa";
import { dokiProfileContent } from "@/content/doki-profile-content";
import WorldNav from "@/components/site/WorldNav";
import ContactPanel from "@/components/site/ContactPanel";
import SiteFooter from "@/components/site/SiteFooter";
import { FadeZoom, Stagger, StaggerItem } from "@/components/motion/FadeZoom";

const icons = {
  engineering: FaCode,
  photography: FaCamera,
  trains: FaTrain,
  machine: FaHeadphones,
};

export default function DokiProfilePage({ locale }) {
  const c = dokiProfileContent[locale].personal;
  const reduced = useReducedMotion();
  return (
    <div className="claris-page min-h-screen overflow-x-clip text-slate-100">
      <WorldNav locale={locale} world="doki" />
      <main>
        <section className="relative isolate overflow-hidden border-b border-white/10 px-5 py-16 sm:px-8 sm:py-24">
          <motion.div
            animate={
              reduced
                ? undefined
                : { x: ["-8%", "10%", "-8%"], opacity: [0.25, 0.65, 0.25] }
            }
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-40 top-16 h-[34rem] w-[34rem] rounded-full bg-teal-300/15 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <FadeZoom>
              <p className="text-xs font-bold uppercase tracking-[.3em] text-teal-300">
                {c.eyebrow}
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl font-light leading-[.98] tracking-[-.045em] sm:text-7xl xl:text-8xl">
                {c.title}
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                {c.intro}
              </p>
              <p className="mt-7 text-xs font-bold uppercase tracking-[.2em] text-white/55">
                {c.heroCaption}
              </p>
            </FadeZoom>
            <FadeZoom delay={0.1}>
              <figure className="claris-glass relative aspect-[4/3] overflow-hidden rounded-[2rem] border">
                <Image
                  src="/images/personal/doki-intheroom-portrait.jpg"
                  alt={c.portraitAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover object-[53%_58%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--claris-ink)]/65 via-transparent to-teal-300/5" />
                <figcaption className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[.18em] text-white/70">
                  {c.portraitCaption}
                </figcaption>
              </figure>
            </FadeZoom>
          </div>
        </section>
        <section className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <FadeZoom>
              <p className="text-xs font-bold uppercase tracking-[.3em] text-teal-300">
                {c.journeyLabel}
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-light tracking-tight sm:text-6xl">
                {c.journeyTitle}
              </h2>
            </FadeZoom>
            <div className="mt-14 space-y-5">
              {c.chapters.map((chapter, index) => (
                <FadeZoom key={chapter.number} delay={index * 0.06}>
                  <article
                    className={`claris-glass grid gap-6 rounded-[2rem] border p-7 sm:p-10 lg:grid-cols-[.18fr_.35fr_1fr] lg:items-start ${index === 2 ? "border-teal-300/25 bg-teal-300/[.045]" : ""}`}
                  >
                    <div>
                      <p className="text-2xl font-light text-teal-200">
                        {chapter.number}
                      </p>
                      <p className="mt-3 text-[10px] font-bold uppercase tracking-[.18em] text-white/45">
                        {chapter.years}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[.25em] text-fuchsia-200">
                        {chapter.place}
                      </p>
                      <h3 className="mt-3 text-2xl font-light text-white">
                        {chapter.title}
                      </h3>
                    </div>
                    <div>
                      <p className="max-w-2xl text-base leading-8 text-slate-300">
                        {chapter.text}
                      </p>
                      <p className="mt-5 border-l border-white/15 pl-4 text-sm italic leading-6 text-white/50">
                        {c.biographyPlaceholder}
                      </p>
                      {index === 2 && (
                        <Link
                          href={`/${locale}/doki/engineering`}
                          className="claris-flow-button mt-7 inline-flex min-h-11 items-center gap-3 rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[.15em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                          {c.professionalLink}
                          <FaArrowRight />
                        </Link>
                      )}
                    </div>
                  </article>
                </FadeZoom>
              ))}
            </div>
          </div>
        </section>
        <section className="border-y border-white/10 bg-[var(--claris-ink-soft)] px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <FadeZoom>
              <p className="text-xs font-bold uppercase tracking-[.3em] text-sky-300">
                {c.interestsLabel}
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-light tracking-tight sm:text-6xl">
                {c.interestsTitle}
              </h2>
            </FadeZoom>
            <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
              {c.interests.map((item) => {
                const Icon = icons[item.id];
                return (
                  <StaggerItem key={item.id}>
                    <Link
                      href={`/${locale}${item.href}`}
                      className="claris-glass group flex min-h-64 flex-col rounded-3xl border p-7 transition hover:-translate-y-1 hover:border-teal-300/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                    >
                      <Icon className="h-5 w-5 text-teal-300" />
                      <p className="mt-auto text-[10px] font-bold uppercase tracking-[.22em] text-white/50">
                        {item.label}
                      </p>
                      <h3 className="mt-3 text-2xl font-light text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                        {item.text}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-teal-200">
                        {item.cta}
                        <FaArrowRight />
                      </span>
                    </Link>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>
        <section className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-7xl">
            <FadeZoom>
              <p className="text-xs font-bold uppercase tracking-[.3em] text-fuchsia-200">
                {c.instagram.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-light tracking-tight sm:text-6xl">
                {c.instagram.title}
              </h2>
            </FadeZoom>
            <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
              <InstagramProfile
                href="https://instagram.com/doki_chibi"
                handle="@doki_chibi"
                label={c.instagram.personalLabel}
                text={c.instagram.personalText}
                tone="teal"
              />
              <InstagramProfile
                href="https://instagram.com/doki_a6000"
                handle="@doki_a6000"
                label={c.instagram.photographyLabel}
                text={c.instagram.photographyText}
                tone="fuchsia"
              />
            </Stagger>
          </div>
        </section>
        <section className="px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <FadeZoom>
              <p className="text-xs font-bold uppercase tracking-[.3em] text-teal-300">
                {c.closing.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-light tracking-tight sm:text-6xl">
                {c.closing.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--claris-muted)]">
                {c.closing.note}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  href={`/${locale}/doki/engineering`}
                  className="claris-flow-button rounded-full px-6 py-3 text-[10px] font-bold uppercase tracking-[.15em]"
                >
                  {c.closing.engineering}
                </Link>
                <Link
                  href={`/${locale}/photography`}
                  className="claris-flow-button rounded-full px-6 py-3 text-[10px] font-bold uppercase tracking-[.15em]"
                >
                  {c.closing.photography}
                </Link>
                <Link
                  href={`/${locale}/music`}
                  className="claris-flow-button claris-flow-button--machine rounded-full px-6 py-3 text-[10px] font-bold uppercase tracking-[.15em]"
                >
                  {c.closing.music}
                </Link>
              </div>
            </FadeZoom>
          </div>
          <div className="mx-auto mt-14 max-w-7xl">
            <ContactPanel world="doki" locale={locale} />
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

function InstagramProfile({ href, handle, label, text, tone }) {
  return (
    <StaggerItem>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`claris-glass group flex min-h-64 flex-col rounded-[2rem] border p-7 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${tone === "fuchsia" ? "hover:border-fuchsia-300/45" : "hover:border-teal-300/45"}`}
      >
        <FaInstagram
          className={`h-6 w-6 ${tone === "fuchsia" ? "text-fuchsia-200" : "text-teal-200"}`}
        />
        <p className="mt-auto text-[10px] font-bold uppercase tracking-[.22em] text-white/50">
          {label}
        </p>
        <h3 className="mt-3 text-2xl font-light text-white">{handle}</h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">{text}</p>
        <span
          className={`mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] ${tone === "fuchsia" ? "text-fuchsia-200" : "text-teal-200"}`}
        >
          Instagram <FaArrowRight />
        </span>
      </a>
    </StaggerItem>
  );
}
