"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, useReducedMotion, useSpring } from "motion/react";
import {
  FaArrowRight,
  FaCamera,
  FaCode,
  FaHeadphones,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLandingLocale } from "@/components/landing/LandingLocaleProvider";
import InstagramGallery from "@/components/media/InstagramGallery";

const cinematicEase = [0.22, 1, 0.36, 1];
const cardMedia = [
  {
    image: "/images/display/personal/doki-hikari.webp",
    Icon: FaCode,
    tone: "from-teal-400/35",
  },
  {
    image: "/images/display/events/otaqlab_2025.webp",
    Icon: FaHeadphones,
    tone: "from-fuchsia-500/40",
  },
  {
    image: "/images/display/photography/sakura-chidorigafuchi-park.webp",
    Icon: FaCamera,
    tone: "from-sky-400/35",
  },
];
const photos = [
  {
    src: "/images/display/photography/tokaido-line-e231-nippori.webp",
    label: "Nippori · Tokyo",
    className: "md:col-span-5 md:row-span-2",
    drift: ["-1%", "1%", "-1%"],
  },
  {
    src: "/images/display/photography/sakura-chidorigafuchi-park.webp",
    label: "Chidorigafuchi · Tokyo",
    className: "md:col-span-4",
    drift: ["1%", "-1%", "1%"],
  },
  {
    src: "/images/display/photography/niigata-2025-street.webp",
    label: "Niigata · 2025",
    className: "md:col-span-3",
    drift: ["0%", "1.5%", "0%"],
  },
  {
    src: "/images/display/events/singapore_2025.webp",
    label: "Singapore · 2025",
    className: "md:col-span-7",
    drift: ["-1%", "1%", "-1%"],
  },
];

function Reveal({ children, className = "", delay = 0, scale = 1 }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 24, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.8, delay, ease: cinematicEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function DisciplineCard({ discipline, media, index, locale }) {
  const reducedMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 180, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 20 });
  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };
  const tilt = (event) => {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    rotateX.set((event.clientY - box.top - box.height / 2) / -28);
    rotateY.set((event.clientX - box.left - box.width / 2) / 28);
  };
  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      onPointerMove={tilt}
      onPointerLeave={reset}
      onFocus={reset}
      className={index === 1 ? "lg:mt-12" : index === 2 ? "lg:mt-24" : ""}
    >
      <Link
        href={`/${locale}${discipline.href}`}
        className="claris-glass group relative flex min-h-[360px] min-w-0 overflow-hidden rounded-[2rem] border p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 sm:min-h-[440px] sm:p-9"
      >
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : { scale: [1.04, 1.1, 1.04], x: ["-1%", "1%", "-1%"] }
          }
          transition={{
            duration: 14 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-5"
        >
          <Image
            src={media.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--claris-ink)] via-[#050507]/35 to-transparent" />
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : { opacity: [0.45, 0.85, 0.45], y: ["8%", "-5%", "8%"] }
          }
          transition={{
            duration: 9 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute inset-0 bg-gradient-to-t ${media.tone} via-transparent to-transparent`}
        />
        <motion.div
          animate={reducedMotion ? undefined : { x: ["-125%", "125%"] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatDelay: 4 + index,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-xl"
        />
        <div className="relative mt-auto">
          <media.Icon className="mb-6 h-5 w-5 text-white/75" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">
            {discipline.label}
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight">
            {discipline.title}
          </h3>
          <p className="mt-4 text-sm leading-6 text-slate-200/80">
            {discipline.description}
          </p>
          <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
            {discipline.cta}
            <FaArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function PhotoFrame({ photo, index }) {
  const reducedMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.18, once: false });
  return (
    <Reveal
      delay={index * 0.07}
      scale={0.97}
      className={`relative overflow-hidden rounded-3xl border border-white/10 ${photo.className}`}
    >
      <figure ref={ref} className="group relative h-full">
        <motion.div
          animate={
            !reducedMotion && inView
              ? { x: photo.drift, scale: [1.05, 1.1, 1.05] }
              : { x: "0%", scale: 1.05 }
          }
          transition={{
            duration: 16 + index * 2,
            repeat: inView ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="absolute -inset-5"
        >
          <Image
            src={photo.src}
            alt={photo.label}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <figcaption className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">
          <FaMapMarkerAlt className="mr-2 inline h-3 w-3" />
          {photo.label}
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function LandingShowcase() {
  const { copy, locale } = useLandingLocale();
  const { showcase } = copy;
  const reducedMotion = useReducedMotion();
  return (
    <div className="claris-page overflow-x-clip text-white">
      <section
        id="identity"
        className="scroll-mt-8 px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal-300">
              {showcase.identity.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.035em] sm:text-6xl">
              {showcase.identity.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--claris-muted)] sm:text-lg">
              {showcase.identity.intro}
            </p>
          </Reveal>
        </div>
      </section>
      <section
        id="disciplines"
        className="scroll-mt-8 px-6 pb-28 sm:px-10 sm:pb-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-3 lg:items-start">
            {showcase.disciplines.map((discipline, index) => (
              <Reveal key={discipline.id} delay={index * 0.08}>
                <DisciplineCard
                  discipline={discipline}
                  media={cardMedia[index]}
                  index={index}
                  locale={locale}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        id="frames"
        className="scroll-mt-8 border-y border-white/10 bg-[var(--claris-ink-soft)] px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-300">
              {showcase.gallery.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-light tracking-tight sm:text-6xl">
              {showcase.gallery.title}
            </h2>
          </Reveal>
          <div className="mt-12 grid auto-rows-[180px] gap-4 sm:auto-rows-[230px] md:grid-cols-12">
            {photos.map((photo, index) => (
              <PhotoFrame key={photo.src} photo={photo} index={index} />
            ))}
          </div>
          <InstagramGallery copy={showcase.instagram} limit={4} locale={locale} />
        </div>
      </section>
      <section className="relative overflow-hidden px-6 py-28 sm:px-10 sm:py-40">
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  x: ["-8%", "10%", "-8%"],
                  y: ["-10%", "8%", "-10%"],
                  opacity: [0.35, 0.75, 0.35],
                }
          }
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,.15),transparent_30%),radial-gradient(circle_at_65%_55%,rgba(217,70,239,.12),transparent_25%)]"
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="space-y-2 text-3xl font-light tracking-tight sm:text-5xl">
            {showcase.manifesto.lines.map((line, index) => (
              <Reveal key={line} delay={index * 0.14}>
                <motion.p
                  whileInView={
                    reducedMotion
                      ? undefined
                      : {
                          textShadow: [
                            "0 0 0 rgba(255,255,255,0)",
                            "0 0 28px rgba(125,211,252,.42)",
                            "0 0 0 rgba(255,255,255,0)",
                          ],
                        }
                  }
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.1,
                    delay: index * 0.14,
                    ease: cinematicEase,
                  }}
                  className={
                    index === 0
                      ? "text-teal-200"
                      : index === 2
                        ? "text-fuchsia-200"
                        : "text-white"
                  }
                >
                  {line}
                </motion.p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-7 text-[var(--claris-muted)]">
              {showcase.manifesto.note}
            </p>
          </Reveal>
        </div>
      </section>
      <section id="connect" className="scroll-mt-8 px-6 pb-28 sm:px-10">
        <Reveal className="claris-glass relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border bg-gradient-to-br from-teal-400/10 via-white/[0.03] to-fuchsia-500/10 p-8 text-center sm:p-16">
          <motion.div
            animate={reducedMotion ? undefined : { x: ["-45%", "55%", "-45%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl"
          />
          <div className="relative">
            <h2 className="text-4xl font-light tracking-tight sm:text-6xl">
              {showcase.closing.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[var(--claris-muted)]">
              {showcase.closing.note}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <motion.div
                whileTap={reducedMotion ? undefined : { scale: 0.97 }}
              >
                <Link
                  href={`/${locale}/doki`}
                  className="claris-flow-button inline-block rounded-full px-7 py-3 text-xs font-extrabold uppercase tracking-[0.16em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {showcase.closing.person}
                </Link>
              </motion.div>
              <motion.div
                whileTap={reducedMotion ? undefined : { scale: 0.97 }}
              >
                <Link
                  href={`/${locale}/music`}
                  className="claris-flow-button claris-flow-button--machine inline-block rounded-full px-7 py-3 text-xs font-extrabold uppercase tracking-[0.16em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {showcase.closing.machine}
                </Link>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
