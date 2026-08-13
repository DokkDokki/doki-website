"use client";
import Link from "next/link";
import {
  FaArrowRight,
  FaHeadphones,
  FaSoundcloud,
  FaYoutube,
} from "react-icons/fa";
import { core } from "@/content/core-content";
import { interfaceTranslations } from "@/content/interface-translations";
import WorldNav from "@/components/site/WorldNav";
import SiteFooter from "@/components/site/SiteFooter";
import ContactPanel from "@/components/site/ContactPanel";
import SoundCloudEmbed from "@/components/media/SoundCloudEmbed";
import YouTubeEmbed from "@/components/media/YouTubeEmbed";
import { FadeZoom, Stagger, StaggerItem } from "@/components/motion/FadeZoom";
const picks = [
  ["LINEMAN", "cpZ9-0SkaHY"],
  ["VOID II", "JYncxOM0wOs"],
  ["COSMIC EXPRESS", "viIYF-Q-b5o"],
];
export default function CoreMusicPage({ locale }) {
  const c = core[locale].music;
  const ui = interfaceTranslations[locale] || interfaceTranslations.en;
  return (
    <div className="machine-page min-h-screen overflow-x-clip text-slate-100">
      <WorldNav locale={locale} world="music" />
      <main className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <FadeZoom
          as="header"
          className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[.28em] text-fuchsia-300">
              {c.eyebrow}
            </p>
            <h1 className="mt-5 text-6xl font-black tracking-tighter sm:text-8xl">
              {c.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {c.intro}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {c.facts.map(([label, value]) => (
              <div key={label} className="machine-glass rounded-2xl border p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-fuchsia-300">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-5 text-white">{value}</p>
              </div>
            ))}
          </div>
        </FadeZoom>
        <section className="mt-28">
          <FadeZoom>
            <div className="machine-glass overflow-hidden rounded-[2rem] border p-7 sm:p-12">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.28em] text-fuchsia-300">
                    {ui.music.featuredEyebrow}
                  </p>
                  <h2 className="mt-4 text-6xl font-black tracking-tighter">
                    CLARIS
                  </h2>
                  <p className="mt-5 max-w-lg text-lg leading-8 text-slate-300">
                    {ui.music.featuredText}
                  </p>
                  <a
                    href="https://soundcloud.com/doki_chibi/sets/claris"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-6 text-xs font-bold uppercase tracking-widest text-slate-950"
                  >
                    {ui.music.listen} <FaSoundcloud />
                  </a>
                </div>
                <SoundCloudEmbed trackUrl="https://soundcloud.com/doki_chibi/sets/claris" />
              </div>
            </div>
          </FadeZoom>
        </section>
        <section className="mt-28">
          <FadeZoom>
            <p className="text-xs font-bold uppercase tracking-[.28em] text-fuchsia-300">
              {ui.music.selectedEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-light">{ui.music.selectedTitle}</h2>
          </FadeZoom>
          <Stagger className="mt-8 grid gap-5 lg:grid-cols-3">
            {picks.map(([title, id]) => (
              <StaggerItem key={title}>
                <div className="machine-glass rounded-3xl border p-5">
                  <p className="mb-4 text-xs font-bold tracking-[.2em] text-fuchsia-300">
                    {title}
                  </p>
                  <YouTubeEmbed videoId={id} />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Link
            href="/en/music/discography"
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-fuchsia-300/25 px-5 text-xs font-bold uppercase tracking-widest text-fuchsia-200"
          >
            {ui.music.discography} <FaArrowRight />
          </Link>
        </section>
        <section className="mt-28 grid gap-10 lg:grid-cols-2">
          <FadeZoom>
            <p className="text-xs font-bold uppercase tracking-[.28em] text-fuchsia-300">
              {ui.music.evolutionEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-light">{ui.music.evolutionTitle}</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-slate-300">
              {c.story.map((x) => (
                <p key={x}>{x}</p>
              ))}
            </div>
          </FadeZoom>
          <FadeZoom delay={0.08}>
            <div className="machine-glass rounded-[2rem] border p-8">
              <FaHeadphones className="text-3xl text-fuchsia-300" />
              <h3 className="mt-5 text-2xl">{ui.music.chainTitle}</h3>
              <p className="mt-4 leading-7 text-slate-400">{ui.music.chainText}</p>
            </div>
          </FadeZoom>
        </section>
        <div className="mt-28">
          <FadeZoom>
            <ContactPanel world="music" locale={locale} />
          </FadeZoom>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
