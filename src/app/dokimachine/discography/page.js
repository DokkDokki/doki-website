"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import SoundCloudEmbed from "@/components/SoundCloudEmbed";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { FaArrowLeft, FaSoundcloud, FaExternalLinkAlt, FaMusic } from "react-icons/fa";

// Cover art placeholder — pass a `cover` image path (e.g. "/photography/dokimachine/claris.jpg")
// on any track/album object once artwork is ready; falls back to a placeholder tile until then.
function AlbumArt({ src, alt, className = "" }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`object-cover ${className}`} />;
  }
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-white/5 border border-white/5 ${className}`}>
      <FaMusic className="text-white/15" size={22} />
    </div>
  );
}

// Claris (1st Album) — full tracklist
// Set CLARIS_COVER to a cover image path once artwork is ready, e.g. "/photography/dokimachine/claris.jpg"
const CLARIS_COVER = null;
const CLARIS_TRACKLIST = [
  { title: "Can You Hear Me?" },
  { title: "Cosmic Transmission", feat: "GUMI" },
  { title: "Connection" },
  { title: "Void", feat: "GUMI" },
  { title: "Claris" },
  { title: "Twinkle", feat: "Kagamine Rin" },
  { title: "Troposphere (DOKIMACHINE Remix)", originalBy: "AQUA" },
  { title: "Light Trail", feat: "Hatsune Miku" },
];

// Single releases — planned for inclusion in "Claris (Definitive Edition)"
const SINGLES = [
  { title: "Search", feat: "Hanakuma Chifuyu & GUMI" },
  { title: "Take Me Away", feat: "GUMI" },
  { title: "Silence", feat: "Hatsune Miku" },
  { title: "Fade", feat: "Hatsune Miku" },
  { title: "Broken", feat: "Hatsune Miku" },
  { title: "Cosmic Express", feat: "Megurine Luka", youtubeId: "viIYF-Q-b5o" },
  { title: "Void (2025 Retake)", feat: "GUMI" },
  { title: "Void (2025 Rework)", feat: "GUMI" },
  { title: "Void II", feat: "GUMI", youtubeId: "JYncxOM0wOs" },
];

const NON_VOCALOID = [
  { title: "Another Dimension" },
  { title: "Solaris" },
  { title: "Space Discovery" },
  { title: "Re: Ame" },
  { title: "Tsunami Warning" },
  { title: "Sunrise" },
  { title: "Take Me Away (Doki's Vocal Mix)" },
];

// Tracks slated for "Sphere" (2nd studio album)
const SPHERE_TRACKS = [
  { title: "Lineman", feat: "GUMI", youtubeId: "cpZ9-0SkaHY" },
  { title: "Reflection (Instrumental Mix)" },
  { title: "Reflection (Vocal Mix)" },
];

const REMIXES = [
  { title: "NEXTLIGHTER (DOKIMACHINE Remix)", originalBy: "Reno" },
  { title: "シリウスの歌姫 (DOKIMACHINE Remix)", originalBy: "hachiya" },
  { title: "スペクトル (DOKIMACHINE Remix)", originalBy: "keisei" },
];

// Mk1 Era (2019–2022) — legacy catalog
const MK1_TRACKS = [
  "melody_01",
  "Ame",
  "Analog Dreams",
  "Square",
  "Square (Trance Mix)",
  "Doki Wonderland",
  "Fuzzy Logic",
  "Fuzzy Logic II",
];

function Section({ title, badge, children }) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-lg md:text-xl font-bold text-white uppercase tracking-[0.25em] whitespace-nowrap">{title}</h2>
        {badge && (
          <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[9px] font-bold text-purple-400 uppercase tracking-widest whitespace-nowrap">
            {badge}
          </span>
        )}
        <div className="h-[1px] flex-1 bg-white/5"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </section>
  );
}

function TrackCard({ title, feat, originalBy, youtubeId, cover }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 transition-colors ${open ? "sm:col-span-2 lg:col-span-3" : ""} ${youtubeId ? "hover:border-purple-500/30" : ""}`}
    >
      <div
        role={youtubeId ? "button" : undefined}
        tabIndex={youtubeId ? 0 : undefined}
        onClick={() => youtubeId && setOpen((o) => !o)}
        className={`flex items-start gap-3 ${youtubeId ? "cursor-pointer" : ""}`}
      >
        <AlbumArt src={cover} alt={title} className="w-14 h-14 shrink-0 rounded-lg" />
        <div className="min-w-0 flex-1 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-white font-bold text-sm truncate">{title}</p>
            {(feat || originalBy) && (
              <p className="text-slate-500 text-xs mt-1 truncate">
                {feat && `feat. ${feat}`}
                {originalBy && `Original by ${originalBy}`}
              </p>
            )}
          </div>
          {youtubeId && (
            <span className="shrink-0 text-[10px] font-bold text-purple-400 uppercase tracking-widest whitespace-nowrap">
              {open ? "Hide ▲" : "Play ▶"}
            </span>
          )}
        </div>
      </div>
      {open && youtubeId && (
        <div className="mt-4">
          <YouTubeEmbed videoId={youtubeId} />
        </div>
      )}
    </div>
  );
}

export default function DiscographyPage() {
  const [era, setEra] = useState("mk2");

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-purple-500/30 font-[family-name:var(--font-nunito)]">

      {/* NAVBAR */}
      <nav className="w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/dokimachine" className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Dokimachine</span>
          </Link>
          <div className="font-light tracking-[0.2em] text-white/40 text-sm uppercase">Discography</div>
        </div>
      </nav>

      <main className="max-w-[1000px] mx-auto px-6 py-20 md:py-32">

        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
            Discography.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Every era, every release from the Dokimachine project.
          </p>
        </motion.header>

        {/* ERA TABS */}
        <div className="flex items-center gap-3 mb-16">
          <button
            onClick={() => setEra("mk2")}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
              era === "mk2" ? "bg-purple-500 text-black" : "bg-white/5 text-slate-400 border border-white/10 hover:border-purple-500/40 hover:text-white"
            }`}
          >
            Mk2 · Present
          </button>
          <button
            onClick={() => setEra("mk1")}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
              era === "mk1" ? "bg-purple-500 text-black" : "bg-white/5 text-slate-400 border border-white/10 hover:border-purple-500/40 hover:text-white"
            }`}
          >
            Mk1 · Legacy
          </button>
        </div>

        {era === "mk2" && (
          <>
            {/* FEATURED ALBUM: CLARIS */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="group relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-[40px] p-8 md:p-12 overflow-hidden shadow-2xl">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <AlbumArt src={CLARIS_COVER} alt="Claris album cover" className="w-24 h-24 rounded-2xl mb-6" />
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500 text-black rounded-full text-[9px] font-black tracking-widest uppercase mb-6">
                      1st Album
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">Claris</h3>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light italic">
                      The debut full-length project. Artwork by RimaRain.
                    </p>
                    <a href="https://soundcloud.com/doki_chibi/sets/claris" target="_blank" rel="noreferrer" className="inline-flex px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-all items-center gap-2 text-sm">
                      Listen on SoundCloud <FaSoundcloud />
                    </a>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md rounded-3xl p-4 md:p-6 border border-white/5">
                    <SoundCloudEmbed trackUrl="https://soundcloud.com/doki_chibi/sets/claris" />
                  </div>
                </div>

                {/* TRACKLIST */}
                <div className="relative z-10 mt-10 pt-8 border-t border-white/5">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-4">Tracklist</p>
                  <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    {CLARIS_TRACKLIST.map((t, i) => (
                      <li key={t.title} className="flex items-baseline gap-3 text-sm">
                        <span className="text-purple-400 font-mono text-xs w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-white font-medium">{t.title}</span>
                        {(t.feat || t.originalBy) && (
                          <span className="text-slate-500 text-xs italic truncate">
                            {t.feat && `feat. ${t.feat}`}
                            {t.originalBy && `Original by ${t.originalBy}`}
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.section>

            <Section title="Singles" badge="Planned for Claris (Definitive Edition)">
              {SINGLES.map((t) => (
                <TrackCard key={t.title} {...t} />
              ))}
            </Section>

            <Section title="Non-VOCALOID Releases">
              {NON_VOCALOID.map((t) => (
                <TrackCard key={t.title} {...t} />
              ))}
            </Section>

            <Section title="Sphere" badge="2nd Studio Album · In Development">
              {SPHERE_TRACKS.map((t) => (
                <TrackCard key={t.title} {...t} />
              ))}
            </Section>

            <Section title="Remixes">
              {REMIXES.map((t) => (
                <TrackCard key={t.title} {...t} />
              ))}
            </Section>
          </>
        )}

        {era === "mk1" && (
          <Section title="Mk1 Era" badge="2019–2022 · Legacy">
            {MK1_TRACKS.map((title) => (
              <TrackCard key={title} title={title} />
            ))}
          </Section>
        )}

        {/* MORE LINKS */}
        <div className="mt-4 text-center">
          <a href="https://soundcloud.com/doki_chibi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
            View full catalog on SoundCloud <FaExternalLinkAlt size={12} />
          </a>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 text-center text-slate-500 text-sm">
        <p className="tracking-widest uppercase text-[10px] font-bold mb-4">Sonic Integrity Guaranteed</p>
        <p>© {new Date().getFullYear()} DOKIMACHINE</p>
      </footer>

    </div>
  );
}
