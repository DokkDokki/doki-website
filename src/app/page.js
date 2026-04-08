import { AuroraBackground } from "../components/ui/aurora-background";
import { FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

export default function UnderConstruction() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#050505] text-white">
      <AuroraBackground className="h-full w-full">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          
          {/* Logo */}
          <div className="font-light tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 text-2xl mb-12">
            DOKIMACHINE
          </div>

          {/* Construction Message */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Systems <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-400">
              Under Development.
            </span>
          </h1>
          
          <p className="text-slate-400 max-w-lg mb-12 text-lg leading-relaxed">
            I'm currently architecting a new digital experience. The portal between worlds will open shortly. 
          </p>

          {/* Social Links */}
          <div className="flex gap-8 text-slate-400 mb-12">
             <a href="https://x.com/dokimachine" target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:scale-110">
                <FaTwitter size={24} />
             </a>
             <a href="https://www.youtube.com/@dokimachine" target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:scale-110">
                <FaYoutube size={24} />
             </a>
             <a href="https://github.com/DokkDokki" target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:scale-110">
                <FaGithub size={24} />
             </a>
          </div>

          {/* Status Badge */}
          <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
             <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400/80">Calibration in progress</span>
          </div>

        </div>
      </AuroraBackground>
    </div>
  );
}
