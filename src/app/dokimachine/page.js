"use client";
import SoundCloudEmbed from "@/components/SoundCloudEmbed";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaSpotify, FaSoundcloud, FaYoutube, FaApple, FaExternalLinkAlt, FaInstagram, FaArrowLeft, FaArrowRight, FaMusic, FaMicrophone, FaHeadphones, FaWaveSquare, FaTwitter } from "react-icons/fa";

export default function DokiMachinePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-purple-500/30 font-[family-name:var(--font-nunito)]">
      
      {/* NAVBAR */}
      <nav className="w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-light tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 text-xl font-montserrat uppercase">
            DOKIMACHINE
          </Link>
          <div className="flex items-center gap-6 text-[10px] font-bold tracking-widest uppercase">
             <Link href="/" className="text-slate-400 hover:text-white transition-colors">← Portal</Link>
             <div className="w-[1px] h-4 bg-white/20"></div>
             <div className="flex gap-4">
                <a href="https://soundcloud.com/doki_chibi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all"><FaSoundcloud size={18} /></a>
                <a href="https://x.com/dokimachine" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all"><FaTwitter size={18} /></a>
                <a href="https://instagram.com/dokimachine" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all"><FaInstagram size={18} /></a>
             </div>
          </div>
        </div>
      </nav>

      <main className="max-w-[1100px] mx-auto px-6 py-20 md:py-32">
        
        {/* HERO / INTRO */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[10px] font-bold text-purple-400 tracking-[0.2em] uppercase mb-8">
             <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
             The World Of DOKIMACHINE
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-none">
            Enter The <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500 drop-shadow-[0_0_40px_rgba(192,38,211,0.2)]">Machine.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed italic font-light">
            Electronic music producer (Mostly make Trance), <span className="text-white font-medium not-italic">VOCALOID-P</span>, and DJ. Creating music that takes you out of this world.
          </p>
        </motion.header>

        {/* PROJECT EVOLUTION / TIMELINE */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32 px-2 md:px-0"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-[0.3em]">Project Evolution</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             <TimelineNode 
               year="2019" 
               era="Genesis" 
               desc="Project initialized as a digital sound experiment."
               status="INIT"
             />
             <TimelineNode 
               year="2020-21" 
               era="Technopop" 
               desc="Focused on rigid digital structures and pop-infused synthesis."
               status="ACTIVE"
             />
             <TimelineNode 
               year="2022-23" 
               era="Quiet Phase" 
               desc="Strategic hiatus for internal research and sonic recalibration."
               status="OFFLINE"
             />
             <TimelineNode 
               year="2024+" 
               era="Trance Rebirth" 
               desc="The system is reborn. High-energy textures and melodic transcendence."
               status="REBIRTH"
               active
             />
          </div>
        </motion.section>        {/* MASTER TRACKS / RELEASES */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-[0.3em]">The Master Files</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
            <Link href="/dokimachine/discography" className="inline-flex items-center gap-2 px-5 py-2 bg-purple-500 text-black rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap hover:scale-105 hover:bg-white transition-all">
              Full Discography <FaArrowRight size={10} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* FEATURED ALBUM: CLARIS */}
            <motion.div 
               whileHover={{ scale: 1.01 }}
               className="lg:col-span-12 group relative bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-[40px] p-8 md:p-12 overflow-hidden shadow-2xl transition-all"
            >
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <FaMusic size={120} className="text-purple-500" />
               </div>
               
               <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500 text-black rounded-full text-[9px] font-black tracking-widest uppercase mb-6">
                        Featured Album
                     </div>
                     <h3 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">CLARIS</h3>
                     <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light italic">
                        The debut full-length project. Artwork by RimaRain.
                     </p>
                     <div className="flex gap-4">
                        <a href="https://soundcloud.com/doki_chibi/sets/claris" target="_blank" rel="noreferrer" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-all flex items-center gap-2 text-sm">
                           Listen on SoundCloud <FaSoundcloud />
                        </a>
                     </div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-md rounded-3xl p-4 md:p-6 border border-white/5">
                     <SoundCloudEmbed trackUrl="https://soundcloud.com/doki_chibi/sets/claris" />
                  </div>
               </div>
            </motion.div>

            {/* SECONDARY RELEASES: VISUAL PERFORMANCE */}
            <div className="lg:col-span-12">
               <div className="flex items-center gap-4 mb-8">
                  <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em]">DOKIMACHINE PICKS</h4>
                  <div className="h-[1px] flex-1 bg-white/5"></div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-[32px] p-6 hover:border-purple-500/30 transition-all duration-500">
                     <h3 className="text-[9px] font-bold text-purple-400 uppercase tracking-widest mb-4 block italic opacity-60">LINEMAN</h3>
                     <YouTubeEmbed videoId="cpZ9-0SkaHY" />
                  </div>
                  <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-[32px] p-6 hover:border-purple-500/30 transition-all duration-500">
                     <h3 className="text-[9px] font-bold text-purple-400 uppercase tracking-widest mb-4 block italic opacity-60">VOID II</h3>
                     <YouTubeEmbed videoId="JYncxOM0wOs" />
                  </div>
                  <div className="group relative bg-[#0a0a0a] border border-white/5 rounded-[32px] p-6 hover:border-purple-500/30 transition-all duration-500">
                     <h3 className="text-[9px] font-bold text-purple-400 uppercase tracking-widest mb-4 block italic opacity-60">COSMIC EXPRESS</h3>
                     <YouTubeEmbed videoId="viIYF-Q-b5o" />
                  </div>
               </div>
            </div>

            {/* CTA BANNER: FULL DISCOGRAPHY */}
            <Link
              href="/dokimachine/discography"
              className="lg:col-span-12 group relative flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-transparent border border-purple-500/20 rounded-[32px] px-8 py-8 hover:border-purple-500/50 transition-all"
            >
              <div className="text-center sm:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Want to hear everything?</h3>
                <p className="text-slate-400 text-sm md:text-base mt-1">Browse every release, single, and cover in the full discography.</p>
              </div>
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 text-black rounded-full font-black text-sm uppercase tracking-widest whitespace-nowrap group-hover:scale-105 group-hover:bg-white transition-all">
                View Discography <FaArrowRight />
              </span>
            </Link>
          </div>
        </motion.section>

        {/* STUDIO SETUP / SIGNAL CHAIN */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-[0.3em]">The Signal Chain</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
             
             {/* THE HUB */}
             <div className="xl:col-span-5 bg-gradient-to-br from-[#121212] to-[#050505] border border-white/10 rounded-[40px] p-10 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-purple-500/20 transition-all duration-700"></div>
                
                <h4 className="text-purple-400 font-bold text-[10px] tracking-[0.4em] uppercase mb-8 flex items-center gap-2">
                   <FaMusic /> The Main Engine
                </h4>
                <h3 className="text-4xl font-bold text-white mb-6">High-Performance Desktop</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-6">
                   My primary power station for intensive track arrangement, sound design, and master mixing.
                </p>
                <div className="mb-8 p-3 bg-white/5 border border-white/10 rounded-xl">
                   <p className="text-[9px] font-bold text-purple-400 uppercase tracking-widest mb-1 font-mono">Mobile Module // Active</p>
                   <p className="text-white text-xs font-bold">MacBook Pro M1 Pro (Semi-Portable Use)</p>
                </div>
                
                <div className="space-y-4">
                   <div className="grid grid-cols-1 gap-2">
                       <SoftwareLabel name="ABLETON LIVE 12 SUITE" role="PRIMARY ENVIRONMENT" />
                       <SoftwareLabel name="CUBASE ARTIST 12" role="TRADITIONAL MIXING" />
                       <SoftwareLabel name="LOGIC PRO" role="CREATIVE SKETCHPAD" />
                   </div>
                   <div className="pt-4 border-t border-white/5">
                      <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-4 italic">The Arsenal</h4>
                      <div className="flex flex-wrap gap-2">
                         <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[9px] font-bold text-purple-400 uppercase">NI KOMPLETE 13 ULTIMATE</span>
                         <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[9px] font-bold text-purple-400 uppercase">OSTIRUS</span>
                         <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[9px] font-bold text-purple-400 uppercase">SERUM</span>
                         <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[9px] font-bold text-purple-400 uppercase">SPIRE</span>
                         <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[9px] font-bold text-purple-400 uppercase">NEXUS / VANGUARD</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* THE RACK */}
             <div className="xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Interface Box */}
                <div className="bg-[#0f0f0f] border border-white/5 rounded-[32px] p-8 hover:border-purple-500/20 transition-all group">
                   <FaWaveSquare className="text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                   <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Interface & Input</h4>
                   <div className="space-y-4">
                      <GearItem label="Primary I/O" value="Steinberg UR22C" desc="32-bit/192kHz Mastering Grade" />
                      <GearItem label="Secondary I/O" value="UA Volt 2" desc="Vintage Preamp Mode" />
                      <GearItem label="Synthesis" value="Spire & Serum 2" desc="Digital Phase Modulation" />
                      <GearItem label="Electric" value="Squier Sonic Telecaster" desc="Organic Analog Input" />
                   </div>
                </div>

                {/* Vocal Synthesis Box */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-purple-500/20 rounded-[32px] p-8 hover:border-purple-500/40 transition-all group">
                   <FaMicrophone className="text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
                   <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Vocal Synthesis Core</h4>
                   <div className="space-y-4">
                      <div className="pb-4 border-b border-white/5">
                         <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-2">Engines</p>
                         <div className="flex gap-2">
                           <span className="text-[10px] font-bold text-purple-400">VOCALOID6</span>
                           <span className="text-[10px] font-bold text-fuchsia-400">SYNTHESIZER V AI</span>
                         </div>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-2">Vocal Libraries</p>
                         <p className="text-xs text-slate-300">Hatsune Miku (V4X / NT)</p>
                         <p className="text-xs text-slate-300">Megurine Luka (V4X)</p>
                         <p className="text-xs text-slate-300">Kagamine Rin/Len (V4X)</p>
                         <p className="text-xs text-slate-300">IA (V3) / Megpoid Gumi (V6/AI)</p>
                      </div>
                   </div>
                </div>


                {/* Monitors Box */}
                <div className="bg-[#0f0f0f] border border-white/5 rounded-[32px] p-8 hover:border-fuchsia-500/20 transition-all group">
                   <FaHeadphones className="text-fuchsia-400 mb-6 group-hover:scale-110 transition-transform" />
                   <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Reference Monitoring</h4>
                   <div className="space-y-6">
                      <GearItem label="The Standard" value="Sony MDR-MV1" desc="Open-back Spatial Audio" />
                      <GearItem label="Studio Fix" value="Sony MDR-M1ST" desc="Japanese Reference Standard" />
                      <GearItem label="Spatial" value="PreSonus Eris 4.5BT" desc="Gen 2 Active Monitors" />
                   </div>
                </div>

                {/* Control Surface */}
                <div className="md:col-span-2 bg-gradient-to-r from-purple-900/10 to-transparent border border-white/5 rounded-[32px] p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
                   <div>
                      <h4 className="text-white font-bold mb-2 text-xs uppercase tracking-widest opacity-40">Main Controller</h4>
                      <h3 className="text-2xl font-bold text-white">Novation Launchkey 61 MK4</h3>
                   </div>
                   <div className="flex gap-2">
                      <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-bold text-purple-400 uppercase border border-white/10">61 KEYS</span>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-bold text-purple-400 uppercase border border-white/10">CUSTOM SCRIPTS</span>
                   </div>
                </div>

             </div>
          </div>
        </motion.section>

        {/* STREAMING LINKS */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="bg-gradient-to-br from-purple-950/20 to-black border border-white/10 rounded-[60px] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)]"></div>
             
             <div className="relative z-10">
                <div className="flex justify-center gap-12 mb-12">
                   <motion.div whileHover={{ scale: 1.1, rotate: -5 }}><FaSoundcloud className="text-7xl text-[#ff5500] opacity-80 hover:opacity-100 transition-all cursor-pointer drop-shadow-[0_0_20px_rgba(255,85,0,0.3)]" /></motion.div>
                   <motion.div whileHover={{ scale: 1.1, rotate: 5 }}><FaYoutube className="text-7xl text-[#ff0000] opacity-80 hover:opacity-100 transition-all cursor-pointer drop-shadow-[0_0_20px_rgba(255,0,0,0.3)]" /></motion.div>
                </div>
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter italic">Sonic Hubs.</h3>
                <p className="text-slate-400 max-w-lg mx-auto mb-12 leading-relaxed text-lg font-light">
                   Catch the latest high-energy trance drops and visual experiments. 
                   Streaming primarily on SoundCloud and YouTube.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                   <a href="https://soundcloud.com/doki_chibi" target="_blank" rel="noreferrer" className="px-10 py-4 bg-[#ff5500] text-white rounded-full font-bold hover:scale-105 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(255,85,0,0.2)]">
                     SoundCloud <FaSoundcloud size={18}/>
                   </a>
                   <a href="https://www.youtube.com/@dokimachine" target="_blank" rel="noreferrer" className="px-10 py-4 bg-[#ff0000] text-white rounded-full font-bold hover:scale-105 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(255,0,0,0.2)]">
                     YouTube <FaYoutube size={18}/>
                   </a>
                   <a href="https://vocadb.net/Ar/83610" target="_blank" rel="noreferrer" className="px-10 py-4 bg-white/5 text-white rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-3 border border-white/10 backdrop-blur-md">
                     VocaDB Profile <FaExternalLinkAlt size={14}/>
                   </a>
                </div>
                
             </div>
          </div>
        </motion.section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 text-center text-slate-500 text-sm">
        <p className="tracking-widest uppercase text-[10px] font-bold mb-4">Sonic Integrity Guaranteed</p>
        <p>© 2026 DOKIMACHINE</p>
      </footer>

    </div>
  );
}

function SoftwareLabel({ name, role }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group">
       <span className="text-xs font-bold text-white tracking-widest">{name}</span>
       <span className="text-[9px] font-bold text-purple-400 uppercase tracking-tighter opacity-60 group-hover:opacity-100">{role}</span>
    </div>
  );
}

function GearItem({ label, value, desc }) {
  return (
    <div className="border-l-2 border-purple-500/20 pl-4 py-1 hover:border-purple-500 transition-all">
       <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-1">{label}</p>
       <p className="text-white font-bold text-sm leading-none mb-1">{value}</p>
       <p className="text-slate-500 text-[10px] font-medium italic">{desc}</p>
    </div>
  );
}

function TimelineNode({ year, era, desc, status, active }) {
  return (
    <div className={`p-6 rounded-[32px] border transition-all duration-500 overflow-hidden relative group ${active ? 'bg-purple-500/10 border-purple-500/40 shadow-[0_0_30px_rgba(168,85,247,0.1)]' : 'bg-white/5 border-white/5 hover:border-white/10'}`}>
       <div className={`absolute top-0 right-0 p-3 text-[8px] font-black tracking-widest ${active ? 'text-purple-400' : 'text-white/20'}`}>{status}</div>
       <h4 className="text-xl font-bold text-white mb-1">{year}</h4>
       <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-4 ${active ? 'text-purple-400' : 'text-slate-500'}`}>{era}</p>
       <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
    </div>
  );
}


