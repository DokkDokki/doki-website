import SoundCloudEmbed from "@/components/SoundCloudEmbed";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import SplitHero from "@/components/SplitHero";
import { FaInstagram, FaSpotify, FaSoundcloud, FaYoutube, FaApple, FaTwitch, FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#050505] text-slate-200 font-inter selection:bg-teal-500/30">
      
      {/* ACETERNITY-STYLE FULL WIDTH NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/60 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between text-sm">
          
          {/* Logo Left */}
          <div className="flex items-center">
             <div className="font-light tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 text-lg">
               DOKIMACHINE
             </div>
          </div>

          {/* No Middle Links - Forces the user to choose a portal! */}

          {/* Right Actions */}
          <div className="flex items-center gap-4">
             
              {/* Socials & Action Button */}
             <div className="flex items-center gap-4 text-slate-400">
               <a href="https://github.com/DokkDokki" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all"><FaGithub size={18} /></a>
               <a href="https://x.com/dokimachine" target="_blank" rel="noreferrer" className="hover:text-[#1DA1F2] hover:scale-110 transition-all"><FaTwitter size={18} /></a>
               <a href="https://www.youtube.com/@dokimachine" target="_blank" rel="noreferrer" className="hover:text-[#FF0000] hover:scale-110 transition-all"><FaYoutube size={18} /></a>
               <div className="w-[1px] h-4 bg-white/20 ml-1 mr-2"></div>
               <a href="mailto:doki_mowmoe@outlook.com" className="bg-white/10 border border-white/10 hover:bg-white/20 text-white px-5 py-1.5 rounded-md font-medium transition-all shadow-lg hover:shadow-cyan-500/20">
                  Contact
               </a>
             </div>
          </div>
          
        </div>
      </nav>

      {/* SICK INTERACTIVE SPLIT HERO */}
      <SplitHero />

      {/* The rest of the site is accessed via clicking the split portals! */}

    </div>
  );
}
