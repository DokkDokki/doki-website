"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaExternalLinkAlt, FaCamera, FaTwitter, FaExpandAlt } from "react-icons/fa";

export default function DokiPersonalPage() {
  return (
    <div className="claris-page min-h-screen overflow-x-clip text-slate-200 selection:bg-teal-500/30 font-[family-name:var(--font-nunito)]">
      
      {/* NAVBAR */}
      <nav className="claris-nav w-full backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/en" className="flex min-h-11 items-center font-light tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 text-xl">
            DOKI
          </Link>
          <div className="flex items-center gap-1 text-sm sm:gap-3">
             <Link href="/en" className="flex min-h-11 items-center px-2 text-slate-400 hover:text-white transition-colors">← Portal</Link>
             <div className="hidden w-[1px] h-4 bg-white/20 sm:block"></div>
             <div className="flex gap-0.5">
                <a href="https://github.com/DokkDokki" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center text-slate-400 hover:text-white transition-all"><FaGithub size={20} /></a>
                <a href="https://x.com/dokimachine" target="_blank" rel="noreferrer" aria-label="X / Twitter" className="flex h-10 w-10 items-center justify-center text-slate-400 hover:text-white transition-all"><FaTwitter size={20} /></a>
                <a href="https://instagram.com/doki_chibi" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center text-slate-400 hover:text-white transition-all"><FaInstagram size={20} /></a>
             </div>
          </div>
        </div>
      </nav>

      <main className="max-w-[1000px] mx-auto px-4 py-14 sm:px-6 sm:py-20">
               {/* HERO / INTRO */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-24"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8">
            Nice to meet you, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">I'm Doki.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            I'm a Digital Engineering student, passionate about building things, tinkering with servers, and capturing the world through my lens. Yes, I do coding sometimes.
          </p>
        </motion.header>

        {/* ABOUT ME SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Who is Doki?</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 relative overflow-hidden">
             <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/10 blur-[100px] rounded-full"></div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                <div className="lg:col-span-2 space-y-6">
                   <p className="text-base md:text-lg leading-relaxed text-slate-300">
                      Well, you found me! Let me introduce myself formally.
                   </p>
                   <p className="text-base md:text-lg leading-relaxed text-slate-300">
                      My name is Thapanant Khongsattra, better known as Doki, it's easier to call me by that name.
                   </p>
                   <p className="text-base md:text-lg leading-relaxed text-slate-300">
                      I was born in Bangkok, Thailand. Specifically, the edge of Bangkok. The little area called "Sai Mai", that's where my life started. I was raised in the area above it, the suburban area called "Rangsit". Located in Pathum Thani, Thailand. If I have to explain where is it, think about it as "Omiya, Saitama" of Thailand.
                   </p>
                   <p className="text-base md:text-lg leading-relaxed text-slate-300">
                      Although I was raised in the suburban area next to Bangkok, I am currently residing in the Bangkok Metropolitan Area, living in an apartment nearby my college, Thai-Nichi Institute of Technology.
                   </p>
                   <p className="text-base md:text-lg leading-relaxed text-slate-300">
                      When I graduated high school, I moved to Tokyo, Japan to pursue my language studies and attempted to get into higher education in Japan. Sadly, I didn't make it into the finish line because some complications, but my passion for living in Japan did not fade away.
                   </p>
                   <p className="text-base md:text-lg leading-relaxed text-slate-300">
                      My dream is to move back to Japan and work as an infrastructure/field engineer. I am open to an other, related field too. I want to help building the system that accelerates the developing environment of the engineers.
                   </p>
                   <p className="text-base md:text-lg leading-relaxed text-slate-300">
                      Other than that, I am also a music producer and a DJ. I produce music under the name DOKIMACHINE and perform as a DJ at various clubs and events. I also do photography stuffs too, capturing the world with a Sony a6000 with a Sony 18-105 G lens. And I love trains, especially Japanese trains.
                   </p>
                   <p className="text-base md:text-lg leading-relaxed text-slate-300">
                      Of course, I like to meet new people and make new friends, so if you're reading until this point, nice to meet you again!
                   </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 self-start">
                   <StatItem title="Location" value="Bangkok, Thailand" />
                   <StatItem title="Education" value="Bachelor of Engineering, Digital Engineering (International Program), Thai-Nichi Institute of Technology" />
                   <StatItem title="Interests" value="Server Machines, Photography, Trains, Computer Hardware, Electronic Music" />
                   <StatItem title="Language" value="Thai (Native), English (CEFR C1), Japanese (JLPT N3)" />
                </div>
             </div>
          </div>
        </motion.section>

        {/* THE CREATOR / PERSONAL GALLERY */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Behind The Keyboard</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
             <div className="lg:col-span-5 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl blur opacity-25"></div>
                <div className="relative aspect-[4/5] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                   <div className="absolute inset-0 bg-[url('/images/events/haneda_2024.jpg')] bg-cover bg-center">
                      <div className="absolute bottom-6 left-6 right-6">
                         <span className="font-bold tracking-widest uppercase text-[10px] bg-black/60 px-4 py-2 rounded-full text-white backdrop-blur-md border border-white/10">
                            Haneda Airport T3, 2024
                         </span>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                {/* ... (squares are already grid-cols-2, this is fine for mobile) ... */}
                <div className="aspect-square bg-slate-900 border border-white/10 rounded-2xl overflow-hidden relative group">
                   <div className="absolute inset-0 bg-[url('/images/events/singapore_2025.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
                   <div className="absolute bottom-2 left-2">
                       <span className="text-[8px] font-bold text-white/70 uppercase tracking-widest bg-black/40 px-2 py-1 rounded-md">Singapore, 2025</span>
                   </div>
                </div>
                <div className="aspect-square bg-slate-900 border border-white/10 rounded-2xl overflow-hidden relative group">
                   <div className="absolute inset-0 bg-[url('/images/events/nerdland_2025.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
                   <div className="absolute bottom-2 left-2">
                       <span className="text-[8px] font-bold text-white/70 uppercase tracking-widest bg-black/40 px-2 py-1 rounded-md">DJ @ Nerdland, 2025</span>
                   </div>
                </div>
                <div className="aspect-square bg-slate-900 border border-white/10 rounded-2xl overflow-hidden relative group">
                   <div className="absolute inset-0 bg-[url('/images/events/otaqlab_2025.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
                   <div className="absolute bottom-2 left-2">
                       <span className="text-[8px] font-bold text-white/70 uppercase tracking-widest bg-black/40 px-2 py-1 rounded-md">DJ @ OtaQLab, 2025</span>
                   </div>
                </div>
                <a href="https://instagram.com/doki_chibi" target="_blank" rel="noreferrer" className="aspect-square bg-slate-900 border border-white/10 rounded-2xl overflow-hidden relative group flex items-center justify-center hover:bg-teal-500/10 transition-colors">
                   <div className="text-center relative z-10">
                      <FaInstagram className="text-3xl md:text-4xl text-teal-400 mx-auto mb-2 opacity-60" />
                      <span className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">More @doki_chibi</span>
                   </div>
                </a>
             </div>
          </div>
        </motion.section>

        {/* THE ARSENAL / ENGINEERING STACK */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">The Engineering Arsenal</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
             <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                <h4 className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-4">Infrastructure</h4>
                <ul className="space-y-2 font-medium text-white/80">
                   <li>ESXi</li>
                   <li>Docker</li>
                   <li>Nginx</li>
                   <li>Server-side basics</li>
                </ul>
             </div>
             <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                <h4 className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-4">Software Dev</h4>
                <ul className="space-y-2 font-medium text-white/80">
                   <li>Python (Big Data)</li>
                   <li>JavaScript</li>
                   <li>HTML / CSS</li>
                   <li>Shell Scripting</li>
                </ul>
             </div>
             <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white/5 border border-teal-500/10 rounded-2xl hover:bg-teal-500/5 hover:border-teal-500/30 transition-all group flex flex-col items-center text-center"
             >
                <FaCamera className="text-3xl text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-4">The Hardware</h4>
                <p className="text-slate-400 text-xs mb-8 leading-relaxed max-w-[150px] mx-auto">Sony α6000, 18-105 G, and my little workstation.</p>
                <Link href="/en/doki/gear" className="mt-auto px-6 py-3 bg-teal-500/10 hover:bg-teal-500 text-teal-400 hover:text-black border border-teal-500/20 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all">
                   View Full Gear List
                </Link>
             </motion.div>
             <div className="p-6 bg-white/5 border border-white/5 rounded-3xl bg-gradient-to-br from-teal-500/10 to-emerald-500/5 border-teal-500/20 relative overflow-hidden group">
                <h4 className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-2 relative z-10">Beyond The Screen</h4>
                <p className="text-white text-sm font-medium relative z-10 leading-relaxed">
                   When I'm not in my room, I'm likely tracking Japanese trains or producing tracks as DOKIMACHINE.
                </p>
                <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity rotate-12">
                   <FaGithub size={100}/>
                </div>
             </div>
          </div>
        </motion.section>

        {/* PHOTOGRAPHY */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Visual Stories</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Life Card */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white/5 border border-white/10 rounded-[32px] p-10 text-center relative group overflow-hidden"
            >
               <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/5 transition-colors duration-500"></div>
               <div className="relative z-10">
                 <FaInstagram className="text-5xl text-teal-400/60 mx-auto mb-6" />
                 <h3 className="text-2xl font-bold text-white mb-2">Personal Life</h3>
                 <p className="text-teal-400 font-medium mb-6 text-sm tracking-widest uppercase">@doki_chibi</p>
                 <p className="text-slate-400 mb-8 leading-relaxed">
                   A glimpse of my daily life, and the human side of myself.
                 </p>
                 <a href="https://instagram.com/doki_chibi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 transition-all text-sm">
                   Follow Me <FaExternalLinkAlt size={12}/>
                 </a>
               </div>
            </motion.div>

            {/* Photography Card */}
            <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white/5 border border-white/10 rounded-[32px] p-10 text-center relative group overflow-hidden"
            >
               <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors duration-500"></div>
               <div className="relative z-10">
                 <FaInstagram className="text-5xl text-teal-400 mx-auto mb-6" />
                 <h3 className="text-2xl font-bold text-white mb-2">Artistic Gallery</h3>
                 <p className="text-teal-400 font-medium mb-6 text-sm tracking-widest uppercase">@DOKI_A6000</p>
                 <p className="text-slate-400 mb-8 leading-relaxed px-4">
                   Street photography and visual stories captured through my Sony α6000.
                 </p>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                   <a href="https://instagram.com/doki_a6000" target="_blank" rel="noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-teal-500 text-black rounded-full font-bold hover:scale-105 transition-transform text-sm shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                     Visit Gallery <FaExternalLinkAlt size={12}/>
                   </a>
                   <Link href="/en/photography" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all text-sm group">
                     Expand <FaExpandAlt size={12} className="group-hover:scale-110 transition-transform"/>
                   </Link>
                 </div>
               </div>
            </motion.div>
          </div>
        </motion.section>

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

function StatItem({ title, value }) {
  return (
    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
      <h4 className="text-teal-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-1">{title}</h4>
      <p className="text-white text-sm font-medium leading-snug">{value}</p>
    </div>
  );
}

