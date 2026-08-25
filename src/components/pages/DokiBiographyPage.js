"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { dokiBiographyContent } from "@/content/doki-biography-content";
import WorldNav from "@/components/site/WorldNav";
import ContactPanel from "@/components/site/ContactPanel";
import SiteFooter from "@/components/site/SiteFooter";
import { FadeZoom } from "@/components/motion/FadeZoom";

export default function DokiBiographyPage({ locale }) {
  const c = dokiBiographyContent[locale] || dokiBiographyContent.en;

  return (
    <div className="claris-page min-h-screen overflow-x-clip text-slate-100">
      <WorldNav locale={locale} world="doki" />
      <main>
        <section className="relative isolate overflow-hidden border-b border-white/10 px-5 py-16 sm:px-8 sm:py-24">
          <div className="pointer-events-none absolute -left-40 top-16 h-[34rem] w-[34rem] rounded-full bg-teal-300/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <FadeZoom>
              <Link
                href={`/${locale}/doki`}
                className="signal-link inline-flex min-h-11 items-center gap-3 text-[10px] font-bold uppercase tracking-[.18em] text-white/55 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              >
                <FaArrowLeft className="h-3 w-3" />
                {c.backLabel}
              </Link>
              <p className="mt-10 text-xs font-bold uppercase tracking-[.3em] text-teal-300">
                {c.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-light leading-[.98] tracking-[-.045em] sm:text-7xl xl:text-8xl">
                {c.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
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
                  sizes="(min-width: 1024px) 38vw, 100vw"
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

        <section className="border-b border-white/10 bg-[var(--claris-ink-soft)] px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[.28fr_1fr] lg:items-start">
            <FadeZoom>
              <p className="text-xs font-bold uppercase tracking-[.3em] text-fuchsia-200">
                {c.indexLabel}
              </p>
              <h2 className="mt-3 text-2xl font-light tracking-tight text-white sm:text-3xl">
                {c.indexTitle}
              </h2>
            </FadeZoom>
            <nav aria-label={c.indexAria}>
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {c.chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <Link
                      href={`#${chapter.id}`}
                      className="group flex min-h-14 items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 transition hover:border-teal-300/35 hover:bg-white/[.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                    >
                      <span className="text-xs font-light text-teal-200">
                        {chapter.number}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[.12em] text-white/65 transition group-hover:text-white">
                        {chapter.label}
                      </span>
                      <FaArrowRight className="ml-auto h-2.5 w-2.5 text-white/35 transition group-hover:translate-x-1 group-hover:text-teal-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {c.chapters.map((chapter, index) => (
            <section
              key={chapter.id}
              id={chapter.id}
              className="scroll-mt-24 border-b border-white/10 py-20 sm:py-28"
            >
              <div className="grid min-w-0 gap-10 lg:grid-cols-[.24fr_1fr] lg:gap-16">
                <FadeZoom>
                  <p className="text-4xl font-light text-teal-200">
                    {chapter.number}
                  </p>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[.25em] text-fuchsia-200">
                    {chapter.label}
                  </p>
                </FadeZoom>
                <FadeZoom delay={index * 0.04} className="min-w-0">
                  <h2 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-white sm:text-6xl">
                    {chapter.title}
                  </h2>
                  <div className="mt-9 max-w-3xl space-y-6 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                    {chapter.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {chapter.media && <BiographyMedia media={chapter.media} copy={c} />}
                </FadeZoom>
              </div>
            </section>
          ))}
        </div>

        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <FadeZoom>
              <Link
                href={`/${locale}/doki`}
                className="claris-flow-button inline-flex min-h-11 items-center gap-3 rounded-full px-6 py-3 text-[10px] font-bold uppercase tracking-[.15em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FaArrowLeft />
                {c.profileLink}
              </Link>
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

function BiographyMedia({ media, copy }) {
  return (
    <figure className="claris-glass mt-10 min-w-0 overflow-hidden rounded-[2rem] border sm:mt-12">
      <div className="relative aspect-[4/3] sm:aspect-[16/8]">
        {media.src ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes="(min-width: 1024px) 65vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_30%,rgba(94,234,212,.12),transparent_45%),linear-gradient(135deg,rgba(255,255,255,.045),transparent)] px-6 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[.25em] text-teal-200">
              {copy.photoComing}
            </span>
            <span className="mt-3 max-w-sm text-sm leading-6 text-white/45">
              {media.note || copy.photoHint}
            </span>
          </div>
        )}
      </div>
      <figcaption className="border-t border-white/10 px-5 py-4 text-[10px] font-bold uppercase tracking-[.16em] text-white/50 sm:flex sm:items-center sm:justify-between sm:gap-3 sm:px-7">
        <span>{media.label}</span>
        <span className="mt-2 block text-white/30 sm:mt-0">{media.note || copy.photoHint}</span>
      </figcaption>
    </figure>
  );
}
