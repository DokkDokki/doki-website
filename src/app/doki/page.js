import Link from "next/link";
import { FaGithub, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";

export default function DokiPersonalPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-teal-500/30 font-[family-name:var(--font-nunito)]">
      
      {/* NAVBAR */}
      <nav className="w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-light tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 text-xl">
            DOKI
          </Link>
          <div className="flex items-center gap-6 text-sm">
             <Link href="/" className="text-slate-400 hover:text-white transition-colors">← Portal</Link>
             <div className="w-[1px] h-4 bg-white/20"></div>
             <a href="https://github.com/DokkDokki" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-all"><FaGithub size={20} /></a>
          </div>
        </div>
      </nav>

      <main className="max-w-[1000px] mx-auto px-6 py-20">
        
        {/* HERO / INTRO */}
        <header className="mb-24">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8">
            Creator & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Engineer.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            I'm a Computer Engineering student passionate about building clean, high-performance web applications and capturing the world through my lens.
          </p>
        </header>

        {/* ABOUT ME SECTION */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">The Human Behind the Screen</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
             {/* Decorative glow */}
             <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/10 blur-[100px] rounded-full"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                <div className="md:col-span-2 space-y-6">
                   <p className="text-lg leading-relaxed text-slate-300">
                      I'm a Computer Engineering student who loves to explore the intersection of technology and creativity. Whether it's architecting complex software systems or capturing the perfect shot on the street, I strive for precision and aesthetic excellence in everything I do.
                   </p>
                   <p className="text-lg leading-relaxed text-slate-300">
                      My journey in technology started with a fascination for how things work, which naturally led me to software engineering. Simultaneously, photography allowed me to slow down and observe the world, a balance that I believe makes me a better developer and a more conscious creator.
                   </p>
                </div>
                <div className="space-y-4">
                   <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                      <h4 className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-2">Location</h4>
                      <p className="text-white font-medium">Currently based in Seoul</p>
                   </div>
                   <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                      <h4 className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-2">Education</h4>
                      <p className="text-white font-medium">B.S. Computer Engineering</p>
                   </div>
                   <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                      <h4 className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-2">Interests</h4>
                      <p className="text-white font-medium">UI/UX, DSP, Street Photography</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* SOFTWARE PROJECTS */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Software Architecture</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Identity Portfolio" 
              description="A high-performance Next.js application leveraging Framer Motion for immersive split-reality transitions."
              tags={["Next.js", "Tailwind", "Framer Motion"]}
              link="https://github.com/DokkDokki/doki-website"
            />
            <ProjectCard 
              title="DSP Audio Visualizer" 
              description="React-based frontend for real-time digital signal processing and sound synthesis visualization."
              tags={["React", "Web Audio API", "D3.js"]}
              link="#"
            />
          </div>
        </section>

        {/* PHOTOGRAPHY */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Visual Stories</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 text-center overflow-hidden relative group">
             {/* Background glow */}
             <div className="absolute inset-0 bg-teal-500/5 group-hover:bg-teal-500/10 transition-colors duration-700"></div>
             
             <div className="relative z-10">
               <FaInstagram className="text-6xl text-teal-400 mx-auto mb-6 opacity-80" />
               <h3 className="text-4xl font-bold text-white mb-4">Captured Moments</h3>
               <p className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed text-lg">
                 Photography is how I document the atmosphere and details that often go unnoticed. 
                 Check out my latest shots on Instagram.
               </p>
               <div className="flex flex-wrap justify-center gap-4">
                  <a href="#" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-3">
                    Street Portfolio <FaExternalLinkAlt size={14}/>
                  </a>
                  <a href="#" className="px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-3 border border-white/10">
                    Portrait Work <FaExternalLinkAlt size={14}/>
                  </a>
               </div>
             </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 text-center text-slate-500 text-sm">
        <p>© 2026 DOKI. Built with precision.</p>
      </footer>

    </div>
  );
}

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] hover:border-teal-500/30 transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="text-slate-500 group-hover:text-white transition-colors">
          <FaGithub size={20} />
        </a>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
