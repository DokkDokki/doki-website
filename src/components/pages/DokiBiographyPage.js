"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import { dokiBiographyContent } from "@/content/doki-biography-content";
import WorldNav from "@/components/site/WorldNav";
import ContactPanel from "@/components/site/ContactPanel";
import SiteFooter from "@/components/site/SiteFooter";
import { FadeZoom, Stagger, StaggerItem } from "@/components/motion/FadeZoom";

export default function DokiBiographyPage({ locale }) {
  const c = dokiBiographyContent[locale] || dokiBiographyContent.en;
  const [selectedArchiveIndex, setSelectedArchiveIndex] = useState(null);
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);
  const archiveTriggerRef = useRef(null);
  const lightboxRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const journeyRefs = useRef({});
  const reducedMotion = useReducedMotion();
  const selectedArchive =
    selectedArchiveIndex === null ? null : c.archive.items[selectedArchiveIndex];

  const setJourneyRef = (id) => (node) => {
    if (node) journeyRefs.current[id] = node;
    else delete journeyRefs.current[id];
  };

  const openArchiveByKey = (key, trigger) => {
    const index = c.archive.items.findIndex((item) => item.key === key);
    if (index < 0) return;
    archiveTriggerRef.current = trigger;
    setSelectedArchiveIndex(index);
  };

  const closeArchive = () => {
    setSelectedArchiveIndex(null);
    requestAnimationFrame(() => archiveTriggerRef.current?.focus());
  };

  useEffect(() => {
    if (selectedArchiveIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeArchive();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedArchiveIndex(
          (index) =>
            (index - 1 + c.archive.items.length) % c.archive.items.length,
        );
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedArchiveIndex(
          (index) => (index + 1) % c.archive.items.length,
        );
      } else if (event.key === "Tab") {
        const focusable = [
          closeButtonRef.current,
          previousButtonRef.current,
          nextButtonRef.current,
        ].filter(Boolean);
        const currentIndex = focusable.indexOf(document.activeElement);
        const nextIndex = event.shiftKey
          ? currentIndex <= 0
            ? focusable.length - 1
            : currentIndex - 1
          : currentIndex === focusable.length - 1
            ? 0
            : currentIndex + 1;
        event.preventDefault();
        focusable[nextIndex]?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedArchiveIndex, c.archive.items.length]);

  useEffect(() => {
    const targets = c.journey.stops
      .map((stop) => ({ stop, node: journeyRefs.current[stop.id] }))
      .filter(({ node }) => node);
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (!visible.length) return;
        const activeId = visible[0].target.dataset.journeyStop;
        const activeIndex = c.journey.stops.findIndex(
          (stop) => stop.id === activeId,
        );
        if (activeIndex >= 0) setActiveJourneyIndex(activeIndex);
      },
      { rootMargin: "-28% 0px -55%", threshold: [0, 0.2, 0.6] },
    );

    targets.forEach(({ stop, node }) => {
      node.dataset.journeyStop = stop.id;
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, [c.journey.stops]);

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
                  src="/images/display/personal/doki-intheroom-portrait.webp"
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

        <BiographyJourney
          copy={c.journey}
          archiveItems={c.archive.items}
          activeIndex={activeJourneyIndex}
          reducedMotion={reducedMotion}
          onSelectJourney={setActiveJourneyIndex}
          onOpenArchive={openArchiveByKey}
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {c.chapters.map((chapter, index) => (
            <section
              key={chapter.id}
              id={chapter.id}
              ref={
                c.journey.stops.some((stop) => stop.targetId === chapter.id)
                  ? setJourneyRef(
                      c.journey.stops.find((stop) => stop.targetId === chapter.id)
                        .id,
                    )
                  : undefined
              }
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
                    {chapter.paragraphs.map((paragraph, paragraphIndex) => {
                      const targetId =
                        chapter.id === "origins"
                          ? paragraphIndex === 0
                            ? "origins-rangsit"
                            : "origins-chanthaburi"
                          : undefined;
                      const journeyId =
                        targetId &&
                        c.journey.stops.find((stop) => stop.targetId === targetId)
                          ?.id;
                      return (
                        <p
                          key={paragraph}
                          id={targetId}
                          ref={journeyId ? setJourneyRef(journeyId) : undefined}
                          className={targetId ? "scroll-mt-28" : undefined}
                        >
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                  {chapter.media && <BiographyMedia media={chapter.media} copy={c} />}
                </FadeZoom>
              </div>
            </section>
          ))}
        </div>

        <section
          aria-labelledby="personal-archive-title"
          className="border-b border-white/10 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <FadeZoom>
              <p className="text-xs font-bold uppercase tracking-[.3em] text-teal-300">
                {c.archive.eyebrow}
              </p>
              <h2
                id="personal-archive-title"
                className="mt-4 max-w-3xl text-4xl font-light tracking-tight text-white sm:text-6xl"
              >
                {c.archive.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                {c.archive.intro}
              </p>
            </FadeZoom>

            <Stagger
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              aria-label={c.archive.ariaLabel}
            >
              {c.archive.items.map((item, index) => (
                <StaggerItem key={item.key}>
                  <button
                  type="button"
                  onClick={(event) => {
                    archiveTriggerRef.current = event.currentTarget;
                    setSelectedArchiveIndex(index);
                  }}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 text-left shadow-lg transition duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl focus-visible:-translate-y-1 focus-visible:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 motion-reduce:transform-none motion-reduce:transition-none"
                  aria-label={`${item.caption} — ${item.alt}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/90 via-black/45 to-transparent px-5 pb-4 pt-12">
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-[.2em] text-teal-200">
                        {item.year}
                      </span>
                      <span className="mt-1 block truncate text-sm font-medium text-white">
                        {item.caption}
                      </span>
                    </span>
                  </span>
                  </button>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

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

        {selectedArchive && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-xl sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={c.archive.dialogLabel}
            onClick={closeArchive}
          >
            <div
              ref={lightboxRef}
              tabIndex={-1}
              className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[var(--claris-ink-soft)] shadow-2xl focus-visible:outline-none"
              onClick={(event) => event.stopPropagation()}
            >
              <p className="sr-only" aria-live="polite">
                {c.journey.positionLabel
                  .replace("{current}", String(selectedArchiveIndex + 1))
                  .replace("{total}", String(c.archive.items.length))}
              </p>
              <div className="relative min-h-[50vh] flex-1 bg-black/70">
                <Image
                  src={selectedArchive.src}
                  alt={selectedArchive.alt}
                  fill
                  sizes="95vw"
                  className="object-contain"
                />
                <button
                  ref={previousButtonRef}
                  type="button"
                  className="absolute left-3 top-1/2 z-10 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                  aria-label={c.archive.previous}
                  onClick={() =>
                    setSelectedArchiveIndex(
                      (index) =>
                        (index - 1 + c.archive.items.length) %
                        c.archive.items.length,
                    )
                  }
                >
                  <FaChevronLeft />
                </button>
                <button
                  ref={nextButtonRef}
                  type="button"
                  className="absolute right-3 top-1/2 z-10 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                  aria-label={c.archive.next}
                  onClick={() =>
                    setSelectedArchiveIndex(
                      (index) => (index + 1) % c.archive.items.length,
                    )
                  }
                >
                  <FaChevronRight />
                </button>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="absolute right-3 top-3 z-10 flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                  aria-label={c.archive.close}
                  onClick={closeArchive}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="shrink-0 border-t border-white/10 px-5 py-4 sm:px-7 sm:py-5">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-teal-200">
                  {selectedArchive.year}
                </p>
                <h2 className="mt-1 text-lg font-medium text-white">
                  {selectedArchive.caption}
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  {selectedArchive.alt}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}

function BiographyJourney({
  copy,
  archiveItems,
  activeIndex,
  reducedMotion,
  onSelectJourney,
  onOpenArchive,
}) {
  const archiveByKey = Object.fromEntries(
    archiveItems.map((item) => [item.key, item]),
  );
  const progress = activeIndex / Math.max(copy.stops.length - 1, 1);
  const activeStop = copy.stops[activeIndex] || copy.stops[0];
  const activeItem = activeStop?.imageKey
    ? archiveByKey[activeStop.imageKey]
    : null;
  const progressStyle = `${Math.max(0, Math.min(progress, 1)) * 100}%`;

  return (
    <section
      aria-labelledby="biography-journey-title"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[var(--claris-ink-soft)] px-5 py-16 sm:px-8 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-fuchsia-300/[.07] blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <FadeZoom>
          <p className="text-xs font-bold uppercase tracking-[.3em] text-teal-300">
            {copy.eyebrow}
          </p>
          <h2
            id="biography-journey-title"
            className="mt-4 max-w-3xl text-4xl font-light tracking-tight text-white sm:text-6xl"
          >
            {copy.title}
          </h2>
        </FadeZoom>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.012))] shadow-[0_28px_90px_rgba(0,0,0,.28)]">
          <nav
            aria-label={copy.ariaLabel}
            className="border-b border-white/10 px-5 py-7 sm:px-8 sm:py-9"
          >
            <div className="relative hidden md:block">
              <div
                aria-hidden="true"
                className="absolute left-[10%] right-[10%] top-3 h-px bg-white/12"
              >
                <span
                  className={`block h-full bg-gradient-to-r from-teal-300 via-sky-300 to-fuchsia-300 ${reducedMotion ? "" : "transition-[width] duration-700 ease-out"}`}
                  style={{ width: progressStyle }}
                />
              </div>
              <ol className="relative grid grid-cols-5">
                {copy.stops.map((stop, index) => {
                  const active = index === activeIndex;
                  const passed = index < activeIndex;
                  return (
                    <li key={stop.id} className="relative min-w-0 px-2 text-center">
                      <a
                        href={`#${stop.targetId}`}
                        onClick={() => onSelectJourney(index)}
                        aria-current={active ? "step" : undefined}
                        className="group relative z-10 inline-flex min-w-0 flex-col items-center rounded-2xl px-2 pb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                      >
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full border-4 border-[var(--claris-ink-soft)] transition duration-300 ${
                            active
                              ? "bg-teal-200 shadow-[0_0_0_5px_rgba(103,232,209,.1),0_0_24px_rgba(103,232,209,.75)]"
                              : passed
                                ? "bg-teal-200/75"
                                : "bg-white/20 group-hover:bg-white/40"
                          }`}
                        >
                          <span className="sr-only">{index + 1}</span>
                        </span>
                        <span
                          className={`mt-4 block truncate text-[10px] font-bold uppercase tracking-[.17em] transition sm:text-xs ${
                            active
                              ? "text-white"
                              : passed
                                ? "text-teal-100/70"
                                : "text-white/45 group-hover:text-white/75"
                          }`}
                        >
                          {stop.label}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="relative md:hidden">
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-3 top-6 w-px bg-white/12"
              >
                <span
                  className={`block w-full bg-gradient-to-b from-teal-300 via-sky-300 to-fuchsia-300 ${reducedMotion ? "" : "transition-[height] duration-700 ease-out"}`}
                  style={{ height: progressStyle }}
                />
              </div>
              <ol className="relative space-y-1">
                {copy.stops.map((stop, index) => {
                  const active = index === activeIndex;
                  const passed = index < activeIndex;
                  const item = stop.imageKey ? archiveByKey[stop.imageKey] : null;
                  return (
                    <li key={stop.id} className="relative">
                      <a
                        href={`#${stop.targetId}`}
                        onClick={() => onSelectJourney(index)}
                        aria-current={active ? "step" : undefined}
                        className={`group relative z-10 grid min-h-16 grid-cols-[1.5rem_1fr_auto] items-center gap-4 rounded-2xl px-0 py-2 pr-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 ${active ? "bg-teal-300/[.07]" : "hover:bg-white/[.025]"}`}
                      >
                        <span
                          className={`mx-auto h-3 w-3 rounded-full border-2 border-[var(--claris-ink-soft)] transition ${active ? "bg-teal-200 shadow-[0_0_18px_rgba(103,232,209,.8)]" : passed ? "bg-teal-200/70" : "bg-white/25"}`}
                        />
                        <span className="min-w-0">
                          <span className="block text-[9px] font-bold uppercase tracking-[.2em] text-white/30">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className={`mt-1 block truncate text-xs font-bold uppercase tracking-[.14em] ${active ? "text-white" : "text-white/55"}`}>
                            {stop.label}
                          </span>
                        </span>
                        {item ? (
                          <span className="relative h-11 w-11 overflow-hidden rounded-xl border border-white/10">
                            <Image
                              src={item.src}
                              alt=""
                              fill
                              sizes="44px"
                              className="object-cover"
                            />
                          </span>
                        ) : (
                          <span
                            aria-hidden="true"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[.025] text-xs text-teal-200/55"
                          >
                            +
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>
          </nav>

          <div className="grid min-w-0 md:grid-cols-[minmax(15rem,.7fr)_minmax(0,1.3fr)]">
            <div className="flex min-h-64 flex-col justify-between border-b border-white/10 p-6 sm:p-8 md:border-b-0 md:border-r">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.24em] text-white/35">
                  {copy.positionLabel
                    .replace("{current}", String(activeIndex + 1))
                    .replace("{total}", String(copy.stops.length))}
                </p>
                <p className="mt-7 text-5xl font-light text-teal-200 sm:text-6xl">
                  {String(activeIndex + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl font-light text-white sm:text-3xl">
                  {activeStop?.label}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
                  {activeItem?.caption || copy.placeholderLabel}
                </p>
              </div>
              <a
                href={`#${activeStop?.targetId}`}
                className="signal-link mt-8 inline-flex min-h-11 w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[.16em] text-teal-200 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              >
                {activeStop?.label}
                <FaArrowRight className="h-3 w-3" />
              </a>
            </div>

            <div className="relative min-h-72 overflow-hidden bg-[radial-gradient(circle_at_35%_25%,rgba(103,232,209,.16),transparent_42%),linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.015))] sm:min-h-96">
              {activeItem ? (
                <button
                  type="button"
                  onClick={(event) =>
                    onOpenArchive(activeStop.imageKey, event.currentTarget)
                  }
                  className="group/journey-feature absolute inset-0 w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-300"
                  aria-label={`${copy.imageLabel}: ${activeItem.alt}`}
                >
                  <Image
                    src={activeItem.src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover transition duration-700 group-hover/journey-feature:scale-[1.025] motion-reduce:transition-none"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                  <span className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                    <span className="block max-w-xl text-sm leading-6 text-white/85 sm:text-base">
                      {activeItem.alt}
                    </span>
                  </span>
                </button>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                  <div>
                    <span className="mx-auto block h-px w-16 bg-gradient-to-r from-transparent via-teal-200/70 to-transparent" />
                    <p className="mt-5 text-xs font-bold uppercase tracking-[.25em] text-teal-100/65">
                      {copy.placeholderLabel}
                    </p>
                    <p className="mt-3 text-5xl font-light text-white/10">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BiographyMedia({ media, copy }) {
  return (
    <figure className="claris-glass mt-10 min-w-0 overflow-hidden rounded-[2rem] border sm:mt-12">
      <div className="relative aspect-[4/3] bg-black/40">
        {media.src ? (
          <>
            <Image
              src={media.src}
              alt=""
              aria-hidden="true"
              fill
              sizes="(min-width: 1024px) 65vw, 100vw"
              className="scale-110 object-cover opacity-35 blur-2xl"
            />
            <div className="absolute inset-0 bg-black/25" />
            <Image
              src={media.src}
              alt={media.alt}
              fill
              sizes="(min-width: 1024px) 65vw, 100vw"
              className="object-contain"
            />
          </>
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
