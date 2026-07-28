"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SoundCloudEmbed from "@/components/SoundCloudEmbed";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import {
  FaArrowLeft,
  FaSoundcloud,
  FaExternalLinkAlt,
  FaMusic,
  FaSearch,
  FaCompactDisc,
  FaMicrophoneAlt,
  FaTimes,
  FaYoutube,
  FaPlay,
  FaTags
} from "react-icons/fa";

// Cover art renderer — fallback to styled placeholder tile
function AlbumArt({ src, alt, className = "" }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`object-cover ${className}`} />;
  }
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-purple-500/10 via-white/5 to-black border border-white/5 ${className}`}>
      <FaMusic className="text-white/20" size={24} />
    </div>
  );
}

// Format Badge helper (HISAQUA style: ALBUM, EP, SINGLE, REMIX, WIP)
function FormatBadge({ format }) {
  if (!format) return null;

  let colorClasses = "bg-white/10 text-white border-white/20";
  if (format === "ALBUM") {
    colorClasses = "bg-purple-500/20 text-purple-300 border-purple-500/40";
  } else if (format === "EP") {
    colorClasses = "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
  } else if (format === "SINGLE") {
    colorClasses = "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
  } else if (format === "REMIX") {
    colorClasses = "bg-amber-500/20 text-amber-300 border-amber-500/40";
  } else if (format === "WIP") {
    colorClasses = "bg-pink-500/20 text-pink-300 border-pink-500/40 animate-pulse";
  }

  return (
    <span className={`px-2 py-0.5 rounded-md text-[9px] font-mono font-black tracking-widest uppercase border ${colorClasses}`}>
      {format}
    </span>
  );
}

// Vocalist Badge with specific colors
function VocalistBadge({ name }) {
  if (!name) return null;

  let style = "bg-purple-500/10 border-purple-500/20 text-purple-400";
  if (name.includes("GUMI")) {
    style = "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
  } else if (name.includes("Miku")) {
    style = "bg-teal-500/10 border-teal-500/30 text-teal-300";
  } else if (name.includes("Rin")) {
    style = "bg-amber-500/10 border-amber-500/30 text-amber-300";
  } else if (name.includes("Luka")) {
    style = "bg-pink-500/10 border-pink-500/30 text-pink-400";
  } else if (name.includes("Chifuyu")) {
    style = "bg-indigo-500/10 border-indigo-500/30 text-indigo-300";
  }

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 border rounded-full text-[10px] font-mono font-medium ${style}`}>
      <FaMicrophoneAlt size={9} />
      {name}
    </span>
  );
}

// Catalog Data
const CLARIS_COVER = "/doki_iconrima_square.jpg";

function getYouTubeThumbnail(videoId) {
  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;
}

function getReleaseArtwork({ cover, youtubeId }) {
  return cover || getYouTubeThumbnail(youtubeId);
}

const CLARIS_TRACKLIST = [
  { title: "Can You Hear Me?", format: "ALBUM", year: "2024", desc: "Introductory ambient prelude establishing the Claris universe." },
  { title: "Cosmic Transmission", format: "ALBUM", feat: "GUMI", year: "2024", desc: "Driving 138 BPM Vocal Trance with celestial synths." },
  { title: "Connection", format: "ALBUM", year: "2024", desc: "Melodic instrumental interlude bridging digital boundaries." },
  { title: "Void", format: "ALBUM", feat: "GUMI", year: "2024", desc: "The flagship anthem of the debut album." },
  { title: "Claris", format: "ALBUM", year: "2024", desc: "Title track — deep progressive euphoric soundscapes." },
  { title: "Twinkle", format: "ALBUM", feat: "Kagamine Rin", year: "2024", desc: "High-energy J-Trance featuring Rin's bright vocals." },
  { title: "Troposphere (DOKIMACHINE Remix)", format: "REMIX", originalBy: "AQUA", year: "2024", desc: "Official remix for AQUA's classic Troposphere." },
  { title: "Light Trail", format: "ALBUM", feat: "Hatsune Miku", year: "2024", desc: "Emotional closing track with delicate Miku tuning." },
];

const SINGLES = [
  { title: "Search", format: "SINGLE", feat: "Hanakuma Chifuyu & GUMI", year: "2025", desc: "Futuristic dual-vocalist blend of Cyber Trance & J-EDM." },
  { title: "Take Me Away", format: "SINGLE", feat: "GUMI", year: "2024", desc: "Uplifting VOCALOID Trance with emotional lead synth melodies." },
  { title: "Silence", format: "SINGLE", feat: "Hatsune Miku", year: "2024", desc: "Atmospheric Melodic Trance featuring Miku's ethereal vocals." },
  { title: "Fade", format: "SINGLE", feat: "Hatsune Miku", year: "2024", desc: "Driving Progressive House and Trance fusion." },
  { title: "Broken", format: "SINGLE", feat: "Hatsune Miku", year: "2024", desc: "Dark & emotional vocal track centered on heartbreak and sound design." },
  { title: "Cosmic Express", format: "SINGLE", feat: "Megurine Luka", youtubeId: "viIYF-Q-b5o", year: "2024", desc: "High-speed 138 BPM Vocal Trance journey through space." },
  { title: "Void (2025 Retake)", format: "SINGLE", feat: "GUMI", year: "2025", desc: "Re-recorded and updated production version of the classic Claris anthem." },
  { title: "Void (2025 Rework)", format: "SINGLE", feat: "GUMI", year: "2025", desc: "Club-ready extended dance mix tailored for DJ sets." },
  { title: "Void II", format: "SINGLE", feat: "GUMI", youtubeId: "JYncxOM0wOs", year: "2025", desc: "The direct sequel to Void — bigger synths, higher energy, and raw emotion." },
];

const NON_VOCALOID = [
  { title: "Another Dimension", format: "SINGLE", year: "2025", desc: "Pure instrumental Progressive Trance excursion." },
  { title: "Solaris", format: "SINGLE", year: "2025", desc: "Bright, energetic synthwave-infused EDM." },
  { title: "Space Discovery", format: "SINGLE", year: "2025", desc: "Cinematic space-themed electronic soundscape." },
  { title: "Re: Ame", format: "SINGLE", year: "2025", desc: "Modern Mk2 remaster of the Mk1 legacy classic 'Ame'." },
  { title: "Tsunami Warning", format: "SINGLE", year: "2025", desc: "High-intensity Tech Trance with driving basslines." },
  { title: "Sunrise", format: "SINGLE", year: "2026", desc: "Warm uplifting sunrise anthem." },
  { title: "Take Me Away (Doki's Vocal Mix)", format: "SINGLE", year: "2025", desc: "Special vocal mix featuring Doki's own vocals." },
];

const SPHERE_TRACKS = [
  { title: "Lineman", format: "WIP", feat: "GUMI", youtubeId: "cpZ9-0SkaHY", year: "2026", desc: "Lead single for Sphere — high-altitude VOCALOID Trance." },
  { title: "Reflection (Instrumental Mix)", format: "WIP", year: "2026", desc: "Ambient Trance prelude to Sphere." },
  { title: "Reflection (Vocal Mix)", format: "WIP", year: "2026", desc: "Vocal version slated for the 2nd studio album." },
];

const REMIXES = [
  { title: "Troposphere (DOKIMACHINE Remix)", format: "REMIX", originalBy: "AQUA", year: "2024", desc: "Official remix for AQUA — released on HISAQUA's Troposphere Remixes EP." },
  { title: "NEXTLIGHTER (DOKIMACHINE Remix)", format: "REMIX", originalBy: "Reno", year: "2024", desc: "Full-on Uplifting Trance remix for Reno's NEXTLIGHTER." },
  { title: "シリウスの歌姫 (DOKIMACHINE Remix)", format: "REMIX", originalBy: "hachiya", year: "2024", desc: "J-Trance makeover for hachiya's classic VOCALOID track." },
  { title: "スペクトル (DOKIMACHINE Remix)", format: "REMIX", originalBy: "keisei", year: "2024", desc: "High-energy remix prepared for keisei's Spectre." },
];

const MK1_TRACKS = [
  { title: "melody_01", format: "SINGLE", year: "2019", desc: "The very first Dokimachine digital sound experiment." },
  { title: "Ame", format: "SINGLE", year: "2019", desc: "Melodious rain-themed synth track." },
  { title: "Analog Dreams", format: "SINGLE", year: "2020", desc: "Retro analogue synth experimentation." },
  { title: "Square", format: "SINGLE", year: "2020", desc: "Chiptune and 8-bit infused digital pulse." },
  { title: "Square (Trance Mix)", format: "REMIX", year: "2021", desc: "Trance transformation of the Square theme." },
  { title: "Doki Wonderland", format: "SINGLE", year: "2021", desc: "Playful electronic melody." },
  { title: "Fuzzy Logic", format: "SINGLE", year: "2021", desc: "Complex rhythm structure and synth pads." },
  { title: "Fuzzy Logic II", format: "SINGLE", year: "2022", desc: "The evolved follow-up to Fuzzy Logic." },
];

// Section wrapper component
function Section({ title, badge, count, children }) {
  if (count === 0) return null;

  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-[0.2em] whitespace-nowrap">{title}</h2>
        {badge && (
          <span className="px-3.5 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-[10px] font-bold text-purple-400 uppercase tracking-widest whitespace-nowrap">
            {badge}
          </span>
        )}
        {typeof count === "number" && (
          <span className="px-3 py-0.5 bg-white/5 border border-white/10 rounded-full text-[11px] font-mono text-slate-400">
            {count} {count === 1 ? "release" : "releases"}
          </span>
        )}
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </section>
  );
}

// Enhanced Big Release Card Component
function ReleaseCard({ title, format, feat, originalBy, youtubeId, cover, year, desc, onSelect }) {
  const artwork = getReleaseArtwork({ cover, youtubeId });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={() => onSelect({ title, format, feat, originalBy, youtubeId, cover, artwork, year, desc })}
      className="group relative bg-[#0d0d0d] border border-white/10 rounded-[32px] overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.18)]"
    >
      <div>
        {/* BIG ALBUM COVER JACKET */}
        <div className="relative aspect-square w-full bg-slate-900 overflow-hidden border-b border-white/5">
          <AlbumArt src={artwork} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
          {/* TOP OVERLAY BADGES */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
            <FormatBadge format={format} />
            {year && (
              <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono text-slate-300 shadow-md">
                {year}
              </span>
            )}
          </div>

          {/* HOVER EXPAND INDICATOR OVERLAY */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-5 py-2.5 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full shadow-2xl transform scale-90 group-hover:scale-100 transition-transform flex items-center gap-2">
              <FaPlay size={10} /> View & Listen
            </span>
          </div>
        </div>

        {/* CARD CONTENT */}
        <div className="p-6">
          <h3 className="text-white font-black text-xl leading-snug group-hover:text-purple-300 transition-colors mb-2">
            {title}
          </h3>

          {(feat || originalBy) && (
            <div className="mb-3 flex items-center gap-2 flex-wrap">
              {feat && <VocalistBadge name={`feat. ${feat}`} />}
              {originalBy && (
                <span className="text-slate-400 text-xs italic">
                  Original by {originalBy}
                </span>
              )}
            </div>
          )}

          {desc && (
            <p className="text-slate-400 text-xs leading-relaxed font-light line-clamp-2">
              {desc}
            </p>
          )}
        </div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs border-t border-white/5 mt-auto">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
          {youtubeId ? (
            <>
              <FaYoutube className="text-red-500" size={13} /> MV Available
            </>
          ) : (
            <>
              <FaSoundcloud className="text-orange-400" size={13} /> SoundCloud
            </>
          )}
        </span>
        <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
          Expand →
        </span>
      </div>
    </motion.div>
  );
}

export default function DiscographyPage() {
  const [era, setEra] = useState("mk2");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("ALL");
  const [selectedVocalist, setSelectedVocalist] = useState("ALL");
  const [selectedRelease, setSelectedRelease] = useState(null);

  const formats = ["ALL", "ALBUM", "SINGLE", "REMIX", "WIP"];
  const vocalists = ["ALL", "GUMI", "Hatsune Miku", "Kagamine Rin", "Megurine Luka", "Hanakuma Chifuyu", "Instrumental"];

  // Filtering Logic
  const filterTracks = (trackList) => {
    return trackList.filter((track) => {
      // 1. Search Query Match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        track.title.toLowerCase().includes(q) ||
        (track.feat && track.feat.toLowerCase().includes(q)) ||
        (track.originalBy && track.originalBy.toLowerCase().includes(q)) ||
        (track.desc && track.desc.toLowerCase().includes(q)) ||
        (track.year && track.year.includes(q));

      if (!matchesSearch) return false;

      // 2. Format Match
      if (selectedFormat !== "ALL" && track.format !== selectedFormat) {
        return false;
      }

      // 3. Vocalist Match
      if (selectedVocalist === "ALL") return true;
      if (selectedVocalist === "Instrumental") return !track.feat;
      return track.feat && track.feat.includes(selectedVocalist);
    });
  };

  const filteredClaris = filterTracks(CLARIS_TRACKLIST);
  const filteredSingles = filterTracks(SINGLES);
  const filteredNonVocaloid = filterTracks(NON_VOCALOID);
  const filteredSphere = filterTracks(SPHERE_TRACKS);
  const filteredRemixes = filterTracks(REMIXES);
  const filteredMk1 = filterTracks(MK1_TRACKS);

  const totalMk2Matches =
    filteredClaris.length +
    filteredSingles.length +
    filteredNonVocaloid.length +
    filteredSphere.length +
    filteredRemixes.length;

  const totalMk1Matches = filteredMk1.length;

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-purple-500/30 font-[family-name:var(--font-nunito)]">

      {/* NAVBAR */}
      <nav className="w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/dokimachine" className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Dokimachine</span>
          </Link>
          <div className="font-light tracking-[0.2em] text-white/40 text-sm uppercase flex items-center gap-2">
            <FaCompactDisc className="text-purple-400 animate-spin-slow" />
            <span>Releases // Discography</span>
          </div>
        </div>
      </nav>

      <main className="max-w-[1100px] mx-auto px-6 py-16 md:py-24">

        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[10px] font-bold text-purple-400 tracking-[0.2em] uppercase mb-6">
            <FaTags size={10} /> Official Release Catalog
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
            Releases.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Every album, EP, single, and remix produced under the Dokimachine system.
          </p>

          {/* QUICK STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5">
            <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
              <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-1">Debut Album</p>
              <p className="text-white font-bold text-lg">Claris (2024)</p>
            </div>
            <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
              <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-1">2nd Album</p>
              <p className="text-white font-bold text-lg">Sphere (In Prep)</p>
            </div>
            <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
              <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-1">Catalog Size</p>
              <p className="text-white font-bold text-lg">35+ Releases</p>
            </div>
            <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
              <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-1">Main Genre</p>
              <p className="text-white font-bold text-lg">Trance & Vocaloid</p>
            </div>
          </div>
        </motion.header>

        {/* SEARCH & FILTER CONTROLS BAR (HISAQUA STYLE) */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-5 mb-12 space-y-4 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search releases, vocalists, or original artists..."
                className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-10 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <FaTimes size={12} />
                </button>
              )}
            </div>

            {/* ERA TABS */}
            <div className="flex items-center gap-2 shrink-0 bg-white/5 p-1 rounded-full border border-white/10 self-start sm:self-auto">
              <button
                onClick={() => setEra("mk2")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  era === "mk2" ? "bg-purple-500 text-black shadow-md" : "text-slate-400 hover:text-white"
                }`}
              >
                Mk2 · Present
              </button>
              <button
                onClick={() => setEra("mk1")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  era === "mk1" ? "bg-purple-500 text-black shadow-md" : "text-slate-400 hover:text-white"
                }`}
              >
                Mk1 · Legacy
              </button>
            </div>
          </div>

          {/* DUAL FILTER CHIPS: FORMAT & VOCALIST */}
          <div className="flex flex-col gap-3 pt-2 border-t border-white/5">
            {/* Format Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400 shrink-0 w-16">
                Format:
              </span>
              {formats.map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormat(fmt)}
                  className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                    selectedFormat === fmt
                      ? "bg-purple-500 text-black border-purple-500 shadow-sm"
                      : "bg-white/5 border-white/5 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>

            {/* Vocalist Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 shrink-0 w-16">
                Vocalist:
              </span>
              {vocalists.map((v) => (
                <button
                  key={v}
                  onClick={() => setSelectedVocalist(v)}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                    selectedVocalist === v
                      ? "bg-purple-500/20 border-purple-500 text-purple-300"
                      : "bg-white/5 border-white/5 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ERA CONTENT */}
        {era === "mk2" && (
          <>
            {/* HISAQUA-STYLE FEATURED PICKUP (CLARIS) */}
            {(!searchQuery && selectedFormat === "ALL" && selectedVocalist === "ALL") && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
              >
                <div className="group relative bg-gradient-to-br from-purple-900/25 via-black to-black border border-purple-500/30 rounded-[40px] p-8 md:p-12 overflow-hidden shadow-2xl">
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-purple-500 text-black rounded-full text-[9px] font-black tracking-widest uppercase">
                          ピックアップ作品 // FEATURED RELEASE
                        </span>
                        <FormatBadge format="ALBUM" />
                      </div>
                      <h3 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">Claris</h3>
                      <p className="text-slate-400 text-base md:text-lg mb-6 leading-relaxed font-light italic">
                        The debut 1st full-length album. Featuring VOCALOID Trance anthems and atmospheric soundscapes. Artwork by RimaRain.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://soundcloud.com/doki_chibi/sets/claris"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-all items-center gap-2 text-sm shadow-lg"
                        >
                          Listen on SoundCloud <FaSoundcloud />
                        </a>
                      </div>
                    </div>
                    <div className="bg-black/40 backdrop-blur-md rounded-3xl p-4 md:p-6 border border-white/5 shadow-2xl">
                      <SoundCloudEmbed trackUrl="https://soundcloud.com/doki_chibi/sets/claris" />
                    </div>
                  </div>

                  {/* TRACKLIST */}
                  <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-4">
                      Album Tracklist ({CLARIS_TRACKLIST.length} Tracks)
                    </p>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {CLARIS_TRACKLIST.map((t, i) => (
                        <li key={t.title} className="flex items-start gap-3 text-sm">
                          <span className="text-purple-400 font-mono text-xs w-5 shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                          <div className="min-w-0">
                            <span className="text-white font-medium">{t.title}</span>
                            {t.feat && (
                              <span className="text-slate-500 text-xs italic ml-2">feat. {t.feat}</span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </motion.section>
            )}

            {/* ALBUM TRACKS (When filtering) */}
            {(searchQuery || selectedFormat !== "ALL" || selectedVocalist !== "ALL") && (
              <Section title="Claris (Album Tracks)" badge="1st Studio Album" count={filteredClaris.length}>
                {filteredClaris.map((t) => (
                  <ReleaseCard key={t.title} cover={CLARIS_COVER} {...t} onSelect={setSelectedRelease} />
                ))}
              </Section>
            )}

            <Section title="Singles" badge="Claris Era & Next Releases" count={filteredSingles.length}>
              {filteredSingles.map((t) => (
                <ReleaseCard key={t.title} {...t} onSelect={setSelectedRelease} />
              ))}
            </Section>

            <Section title="Non-VOCALOID Releases" badge="Instrumentals & Vocal Mixes" count={filteredNonVocaloid.length}>
              {filteredNonVocaloid.map((t) => (
                <ReleaseCard key={t.title} {...t} onSelect={setSelectedRelease} />
              ))}
            </Section>

            <Section title="Sphere" badge="2nd Studio Album · In Development" count={filteredSphere.length}>
              {filteredSphere.map((t) => (
                <ReleaseCard key={t.title} {...t} onSelect={setSelectedRelease} />
              ))}
            </Section>

            <Section title="Remixes" badge="Official Remixes & Bootlegs" count={filteredRemixes.length}>
              {filteredRemixes.map((t) => (
                <ReleaseCard key={t.title} {...t} onSelect={setSelectedRelease} />
              ))}
            </Section>

            {totalMk2Matches === 0 && (
              <div className="py-20 text-center bg-[#0a0a0a] border border-white/5 rounded-3xl">
                <p className="text-slate-400 text-lg mb-2">No releases match your filter criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedFormat("ALL");
                    setSelectedVocalist("ALL");
                  }}
                  className="mt-4 px-6 py-2 bg-purple-500 text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </>
        )}

        {era === "mk1" && (
          <>
            <Section title="Mk1 Era" badge="2019–2022 · Legacy Catalog" count={filteredMk1.length}>
              {filteredMk1.map((t) => (
                <ReleaseCard key={t.title} {...t} onSelect={setSelectedRelease} />
              ))}
            </Section>

            {totalMk1Matches === 0 && (
              <div className="py-20 text-center bg-[#0a0a0a] border border-white/5 rounded-3xl">
                <p className="text-slate-400 text-lg mb-2">No legacy tracks match your filter criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedFormat("ALL");
                    setSelectedVocalist("ALL");
                  }}
                  className="mt-4 px-6 py-2 bg-purple-500 text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </>
        )}

        {/* MORE LINKS */}
        <div className="mt-8 text-center">
          <a href="https://soundcloud.com/doki_chibi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
            View full catalog on SoundCloud <FaExternalLinkAlt size={12} />
          </a>
        </div>

      </main>

      {/* EXPANDABLE RELEASE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedRelease && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
              onClick={() => setSelectedRelease(null)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/15 rounded-[36px] overflow-hidden shadow-[0_0_80px_rgba(168,85,247,0.25)] flex flex-col md:flex-row max-h-[90vh] z-10"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedRelease(null)}
                className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-all z-30 backdrop-blur-md border border-white/10"
                aria-label="Close modal"
              >
                <FaTimes size={16} />
              </button>

              {/* LEFT: COVER ARTWORK & BADGES */}
              <div className="w-full md:w-[380px] bg-gradient-to-b from-purple-900/20 via-black to-black p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 shrink-0 relative">
                <div className="relative w-full max-w-[280px] aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 group mb-6">
                  <AlbumArt src={selectedRelease.artwork} alt={selectedRelease.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex items-center gap-2 flex-wrap justify-center mb-2">
                  <FormatBadge format={selectedRelease.format} />
                  {selectedRelease.year && (
                    <span className="px-2.5 py-0.5 bg-white/10 border border-white/10 rounded-full text-[10px] font-mono text-slate-300">
                      {selectedRelease.year}
                    </span>
                  )}
                </div>

                {selectedRelease.feat && (
                  <div className="mt-2">
                    <VocalistBadge name={`feat. ${selectedRelease.feat}`} />
                  </div>
                )}
              </div>

              {/* RIGHT: DETAILS, DESCRIPTION & MEDIA PLAYER */}
              <div className="flex-1 p-6 md:p-10 flex flex-col justify-between overflow-y-auto custom-scrollbar">
                <div>
                  <div className="text-[10px] font-mono text-purple-400 font-bold uppercase tracking-[0.3em] mb-2">
                    Dokimachine Catalog // {selectedRelease.format || "RELEASE"}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                    {selectedRelease.title}
                  </h2>

                  {selectedRelease.originalBy && (
                    <p className="text-slate-400 text-sm italic mb-4">
                      Original composition by <strong className="text-white">{selectedRelease.originalBy}</strong>
                    </p>
                  )}

                  {selectedRelease.desc && (
                    <div className="my-6 p-4 bg-white/5 border-l-2 border-purple-500 rounded-r-2xl">
                      <p className="text-slate-300 text-sm leading-relaxed font-light">
                        {selectedRelease.desc}
                      </p>
                    </div>
                  )}

                  {/* EMBEDDED PLAYER IF YOUTUBE ID PRESENT */}
                  {selectedRelease.youtubeId && (
                    <div className="my-6">
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <FaYoutube className="text-red-500" size={14} /> Official Music Video / Audio
                      </p>
                      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                        <YouTubeEmbed videoId={selectedRelease.youtubeId} />
                      </div>
                    </div>
                  )}
                </div>

                {/* PLATFORM STREAMING LINKS */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 mt-6">
                  <a
                    href="https://soundcloud.com/doki_chibi"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-500 hover:text-black transition-all"
                  >
                    Listen on SoundCloud <FaSoundcloud size={14} />
                  </a>

                  {selectedRelease.youtubeId && (
                    <a
                      href={`https://www.youtube.com/watch?v=${selectedRelease.youtubeId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
                    >
                      Watch on YouTube <FaYoutube size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 text-center text-slate-500 text-sm">
        <p className="tracking-widest uppercase text-[10px] font-bold mb-4">Sonic Integrity Guaranteed</p>
        <p>© {new Date().getFullYear()} DOKIMACHINE</p>
      </footer>

    </div>
  );
}
