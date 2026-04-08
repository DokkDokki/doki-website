import SoundCloudEmbed from "@/components/SoundCloudEmbed";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import Link from "next/link";
import { FaSpotify, FaSoundcloud, FaYoutube, FaApple, FaExternalLinkAlt } from "react-icons/fa";

export default function DokiMachinePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-purple-500/30 font-[family-name:var(--font-nunito)]">
      
      {/* NAVBAR */}
      <nav className="w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-light tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 text-xl">
            DOKIMACHINE
          </Link>
          <div className="flex items-center gap-6 text-sm">
             <Link href="/" className="text-slate-400 hover:text-white transition-colors">← Portal</Link>
             <div className="w-[1px] h-4 bg-white/20"></div>
             <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-all"><FaSoundcloud size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-all"><FaSpotify size={20} /></a>
             </div>
          </div>
        </div>
      </nav>

      <main className="max-w-[1000px] mx-auto px-6 py-20">
        
        {/* HERO / INTRO */}
        <header className="mb-24">
          <h1 className="text-6xl md:text-8xl font-black tracking-widest text-white mb-8">
            Sonic <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Arsenal.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Electronic music producer, VOCALOID-P, and DJ. Exploring the boundaries of sonic energy and digital textures.
          </p>
        </header>

        {/* RELEASES GRID */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white uppercase tracking-widest">Latest Releases</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-purple-500/30 transition-all duration-500">
               <h3 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-4">SoundCloud</h3>
               <SoundCloudEmbed trackUrl="https://soundcloud.com/doki_chibi/lineman" />
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-purple-500/30 transition-all duration-500">
               <h3 className="text-sm font-bold text-fuchsia-400 uppercase tracking-widest mb-4">YouTube Visual</h3>
               <YouTubeEmbed videoId="cpZ9-0SkaHY" />
            </div>
          </div>
        </section>

        {/* STREAMING LINKS */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white uppercase tracking-widest">Sonic Presence</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 text-center overflow-hidden relative group">
             {/* Background glow */}
             <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors duration-700"></div>
             
             <div className="relative z-10">
               <div className="flex justify-center gap-4 mb-8">
                  <FaSpotify className="text-5xl text-purple-400 opacity-80" />
                  <FaApple className="text-5xl text-fuchsia-400 opacity-80" />
               </div>
               <h3 className="text-4xl font-bold text-white mb-4">Stream Everywhere</h3>
               <p className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed text-lg">
                 Join the machine across all major streaming platforms. 
                 Follow for the latest drops and curated playlists.
               </p>
               <div className="flex flex-wrap justify-center gap-4">
                  <a href="#" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-3">
                    Spotify Artist <FaExternalLinkAlt size={14}/>
                  </a>
                  <a href="#" className="px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-3 border border-white/10">
                    Apple Music <FaExternalLinkAlt size={14}/>
                  </a>
               </div>
             </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 text-center text-slate-500 text-sm">
        <p>© 2026 DOKIMACHINE. All sonic systems operational.</p>
      </footer>

    </div>
  );
}
