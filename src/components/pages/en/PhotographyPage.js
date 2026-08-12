"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCamera, FaTrain, FaUserAstronaut, FaExpandAlt, FaInfoCircle, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const photos = [
  {
    id: 1,
    title: "Shinkansen E7 Series",
    category: "Train",
    src: "/images/photography/shinkansen-e7-nippori.jpg",
    location: "Nippori Station, Tokyo",
    exif: { gear: "Sony α6000", lens: "18-105mm G", iso: "400", shutter: "1/2000s", aperture: "f/4.0" },
    desc: "The E7 series speeding through Nippori. One of my favorite spots to capture the rail traffic of Northern Tokyo."
  },
  {
    id: 2,
    title: "Keihin-Tohoku E233",
    category: "Train",
    src: "/images/photography/keihin-tohoku-e233-akabane.jpg",
    location: "Akabane Station, Tokyo",
    exif: { gear: "Sony α6000", lens: "18-105mm G", iso: "800", shutter: "1/1000s", aperture: "f/5.6" },
    desc: "Capturing the workhorse of the Tokyo metropolitan area at Akabane Station."
  },
  {
    id: 3,
    title: "Sakura Chidorigafuchi",
    category: "Street",
    src: "/images/photography/sakura-chidorigafuchi-park.jpg",
    location: "Chidorigafuchi Park, Tokyo",
    exif: { gear: "Sony α6000", lens: "18-105mm G", iso: "100", shutter: "1/500s", aperture: "f/8.0" },
    desc: "The iconic cherry blossoms reflected in the moat. A timeless Tokyo spring moment."
  },
  {
    id: 4,
    title: "Niigata Street Life",
    category: "Street",
    src: "/images/photography/niigata-2025-street.jpg",
    location: "Niigata, Japan",
    exif: { gear: "Sony α6000", lens: "18-105mm G", iso: "400", shutter: "1/250s", aperture: "f/4.0" },
    desc: "Exploring the quiet, snowy streets of Niigata in early 2025."
  },
  {
    id: 5,
    title: "Dazai Osamu",
    category: "Cosplay",
    model: "Kari (@kari.layer)",
    src: "/images/photography/kari-dazai-osamu.jpg",
    location: "Bangkok",
    exif: { gear: "Sony α6000", lens: "30mm f/1.4", iso: "200", shutter: "1/125s", aperture: "f/2.8" },
    desc: "A stylized character study of Dazai from Bungo Stray Dogs. Focused on dramatic lighting and shadow."
  },
  {
    id: 6,
    title: "Neon Stare",
    category: "Cosplay",
    model: "Kari (@kari.layer)",
    src: "/images/photography/kari-stare.jpg",
    location: "Siam Square",
    exif: { gear: "Sony α6000", lens: "30mm f/1.4", iso: "1600", shutter: "1/60s", aperture: "f/1.4" },
    desc: "Capturing that intense connection through the lens. The bokeh from the street lights perfectly frames the subject."
  },
  {
    id: 7,
    title: "Reflections",
    category: "Cosplay",
    model: "Kari (@kari.layer)",
    src: "/images/photography/kari-glass.jpg",
    location: "MBK Center",
    exif: { gear: "Sony α6000", lens: "18-105mm G", iso: "400", shutter: "1/100s", aperture: "f/4.0" },
    desc: "Using glass surfaces to create a layering effect between the fictional world and reality."
  },
  {
    id: 8,
    title: "Siam Square Sessions",
    category: "Cosplay",
    model: "Kari (@kari.layer)",
    src: "/images/photography/kari-siamsquare.jpg",
    location: "Siam Square, Bangkok",
    exif: { gear: "Sony α6000", lens: "30mm f/1.4", iso: "800", shutter: "1/80s", aperture: "f/1.8" },
    desc: "One of our classic street sessions. Mixing high-fashion character design with urban bustle."
  },
  {
    id: 9,
    title: "Halloween Night",
    category: "Cosplay",
    model: "Kari (@kari.layer)",
    src: "/images/photography/kari-halloween.jpg",
    location: "Bangkok",
    exif: { gear: "Sony α6000", lens: "30mm f/1.4", iso: "3200", shutter: "1/50s", aperture: "f/1.4" },
    desc: "Low-light atmospheric shot from our Halloween collaboration. High grain and deep blacks for mood."
  },
  {
    id: 10,
    title: "Tokaido Line E231",
    category: "Train",
    src: "/images/photography/tokaido-line-e231-nippori.jpg",
    location: "Nippori, Tokyo",
    exif: { gear: "Sony α6000", lens: "18-105mm G", iso: "400", shutter: "1/1600s", aperture: "f/4.0" },
    desc: "The familiar orange and green stripes of the E231 series. This shot at Nippori captures the classic energy of Tokyo's main rail arteries."
  }
];

export default function PhotographyPage() {
  const [filter, setFilter] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos = filter === "All" ? photos : photos.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-teal-500/30 font-[family-name:var(--font-nunito)]">
      
      {/* NAVBAR */}
      <nav className="w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/en/doki" className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Doki</span>
          </Link>
          <div className="font-light tracking-[0.2em] text-white/40 text-sm uppercase">Visual Archive V4.2</div>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 py-20">
        
        {/* HEADER */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-[10px] font-bold text-teal-400 tracking-[0.2em] uppercase mb-8">
             <FaCamera /> The Shutter Collection
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8">
            Visual <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Archive.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed italic font-light">
            Capturing the precision of <span className="text-white font-medium not-italic">Japanese Rail</span> and the artistic world of <span className="text-white font-medium not-italic">Cosplay</span>. Often found behind the lens for my close friend <span className="text-teal-400 font-bold not-italic">Kari (@kari.layer)</span>.
          </p>
        </motion.header>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-4 mb-12">
          {["All", "Train", "Cosplay", "Street"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase border transition-all ${
                filter === cat 
                ? "bg-teal-500 border-teal-500 text-black shadow-[0_0_20px_rgba(20,184,166,0.3)]" 
                : "bg-white/5 border-white/10 text-slate-400 hover:border-white/30"
              }`}
            >
              {cat === "Cosplay" ? "Kari's Cosplay" : cat === "Train" ? "Train Collection" : cat}
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              layout
              className="group relative aspect-[16/10] bg-slate-900 border border-white/10 rounded-[32px] overflow-hidden cursor-crosshair shadow-2xl"
              onClick={() => setSelectedPhoto(photo)}
            >
               <img 
                 src={photo.src} 
                 alt={photo.title}
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               
               {/* OVERLAY */}
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-bold text-teal-400 uppercase tracking-[0.3em] mb-2">
                        {photo.category}{photo.model ? ` // ${photo.model.split(' ')[0]}` : ''}
                      </p>
                      <h3 className="text-2xl font-bold text-white">{photo.title}</h3>
                      <p className="text-slate-400 text-xs mt-1">{photo.location}</p>
                    </div>
                    <div className="flex gap-2">
                       <span className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/10">
                          <FaExpandAlt size={14} />
                       </span>
                    </div>
                  </div>
               </div>

               {/* TECH SPECS INDICATOR */}
               <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 duration-500">
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 p-2.5 rounded-xl">
                    <p className="text-[8px] font-mono text-teal-400 font-bold uppercase tracking-widest flex items-center gap-1">
                      <FaInfoCircle size={10} /> Metadata_Acquired
                    </p>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* SEE MORE CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-slate-500 text-sm mb-6 tracking-widest uppercase">Hungry for more frames?</p>
          <a 
            href="https://instagram.com/doki_a6000" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 hover:border-teal-500/30 transition-all group scale-100 hover:scale-105 active:scale-95"
          >
            See More on Instagram <FaInstagram className="text-teal-400 group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>

        {/* COLLABORATOR SPOTLIGHT: KARI */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 mb-32"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase">The Muse // Kari</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
             <div className="lg:col-span-4 aspect-square rounded-[40px] overflow-hidden border border-white/10 relative group bg-slate-900 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src="/images/photography/kari-pfp.jpg"
                  alt="Kari (@kari.layer)"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute bottom-6 left-6 z-20">
                   <p className="text-[10px] font-bold text-white bg-black/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md uppercase tracking-widest">Collaborator</p>
                </div>
             </div>
             
             <div className="lg:col-span-8">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Partners In Crime.</h3>
                <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                  Most of my cosplay photography exists because of my collaboration with <strong className="text-white">Kari</strong>. 
                  As her primary cameraman, we’ve spent years navigating the hidden corners of Bangkok—from the neon pulse of Siam Square to the brutalist textures of the city’s urban heart. Together, we find the spots that feel like a slice of another world, blending local surroundings with fictional narratives to bring every character to life.
                </p>
                
                <div className="flex flex-wrap gap-6">
                   <a href="https://instagram.com/kari.layer" target="_blank" rel="noreferrer" className="px-8 py-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all flex items-center gap-3">
                      <FaInstagram /> Instagram
                   </a>
                </div>
             </div>
          </div>
        </motion.section>

        {/* SECTION BREAK: TRAIN PHOTOGRAPHY FOCUS */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 md:mt-40 mb-24 md:mb-32 p-8 md:p-20 bg-gradient-to-br from-teal-900/10 to-transparent border border-white/5 rounded-[40px] md:rounded-[60px] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <FaTrain size={240} className="text-teal-400" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tighter">The Steel Pulse.</h2>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 md:mb-10">
                Beyond character photography, my lens is always searching for the engineering precision of high-speed rail. My train collection is a study of metallic scale, urban transitions, and the silent power of Japanese technology.
              </p>
              
              {/* PERSONAL ORIGIN STORY */}
              <div className="mb-10 p-6 md:p-8 bg-white/5 border-l-2 border-teal-500 rounded-r-3xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5 italic font-serif text-8xl">"</div>
                 <h4 className="text-[10px] font-bold text-teal-400 uppercase tracking-[0.4em] mb-4">Origin Log // childhood.mv</h4>
                 <p className="text-slate-300 text-xs md:text-sm leading-relaxed italic relative z-10">
                   "When I was a kid, my first toy was a Thomas train set. I spent years watching Thomas and Friends on CDs, just dreaming of the day I'd finally get to ride the real deal. Then it happened—my first Shinkansen ride on <strong>Nozomi 97</strong> bound for Hiroshima. Riding it from Tokyo to Nagoya was the moment I finally shed those inner childhood tears."
                 </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-[10px] font-bold text-teal-400 uppercase mb-1">Preferred Setting</p>
                    <p className="text-white text-xs md:text-sm whitespace-nowrap">Blue Hour / Urban Bridges</p>
                </div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-[10px] font-bold text-teal-400 uppercase mb-1">Target Speed</p>
                    <p className="text-white text-xs md:text-sm whitespace-nowrap">280km/h+ (Shinkansen)</p>
                </div>
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[32px] md:rounded-[40px] p-8 md:p-10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <FaTrain size={40} className="text-teal-400" />
               </div>
               <h3 className="text-[10px] font-bold text-teal-400 uppercase tracking-[0.4em] mb-8 md:mb-10 flex items-center gap-2">
                 <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                 Rail Experience Log // Status: Logged
               </h3>
               
               <div className="space-y-6">
                  <LogItem 
                    name="Tokaido Shinkansen" 
                    route="Tokyo ↔ Nagoya" 
                    desc="Nozomi 97 // The First Dream Ride"
                    status="LEGACY"
                  />
                  <LogItem 
                    name="Saikyo Line" 
                    route="Itabashi ↔ Akabane" 
                    desc="Daily Route // The Commuter's Rhythm"
                    status="DAILY"
                  />
                  <LogItem 
                    name="Tohoku Shinkansen" 
                    route="Tokyo ↔ Northern Japan" 
                    desc="E7 Series // High-Speed Connection"
                    status="ACTIVE"
                  />
                  <LogItem 
                    name="Keihin-Tohoku Line" 
                    route="Akabane ↔ Ueno" 
                    desc="Frequent Transfer // Urban Transition"
                    status="ACTIVE"
                  />
               </div>
            </div>
          </div>
        </motion.section>

      </main>

      {/* PHOTO LIGHTBOX/DETAIL OVERLAY */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-12 overflow-hidden">
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="absolute inset-0 bg-[#050505]/95 backdrop-blur-2xl"
             onClick={() => setSelectedPhoto(null)}
           />
           
           <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-full max-h-[90vh] md:max-h-[85vh]"
           >
              <div className="flex-1 bg-black relative flex items-center justify-center min-h-[300px]">
                 <img 
                   src={selectedPhoto.src} 
                   alt={selectedPhoto.title}
                   className="max-w-full max-h-full object-contain"
                 />
                 <button 
                   onClick={() => setSelectedPhoto(null)}
                   className="absolute top-4 left-4 md:top-6 md:left-6 w-10 h-10 bg-white/10 hover:bg-white text-white hover:text-black rounded-full flex items-center justify-center transition-all z-20 backdrop-blur-md"
                 >
                    <FaArrowLeft />
                 </button>
              </div>

              <div className="w-full lg:w-[400px] p-6 md:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col h-full overflow-y-auto custom-scrollbar">
                 <div className="mb-auto">
                    <div className="flex items-center gap-2 text-teal-400 mb-6 font-bold">
                       <FaInfoCircle size={14}/>
                       <span className="text-[10px] uppercase tracking-widest">Image Details</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{selectedPhoto.title}</h2>
                    <p className="text-slate-500 text-sm mb-6">{selectedPhoto.location}</p>
                    
                    {selectedPhoto.model && (
                      <div className="mb-8 p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
                         <p className="text-[9px] font-bold text-purple-400 uppercase tracking-widest mb-2">In Collaboration With</p>
                         <p className="text-white text-sm font-bold flex items-center gap-2">
                           <FaUserAstronaut size={12}/> {selectedPhoto.model}
                         </p>
                      </div>
                    )}

                    <p className="text-slate-400 text-sm leading-relaxed mb-10">
                      {selectedPhoto.desc}
                    </p>

                    <div className="space-y-4 mb-8">
                       <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 border-b border-white/5 pb-2">EXIF DATA_v1.0</h4>
                       <ExifRow label="BODY" value={selectedPhoto.exif.gear} />
                       <ExifRow label="LENS" value={selectedPhoto.exif.lens} />
                       <div className="grid grid-cols-2 gap-4">
                          <ExifRow label="ISO" value={selectedPhoto.exif.iso} />
                          <ExifRow label="SHUTTER" value={selectedPhoto.exif.shutter} />
                       </div>
                       <ExifRow label="APERTURE" value={selectedPhoto.exif.aperture} />
                    </div>
                 </div>

                 <div className="mt-8 pt-6 border-t border-white/5 text-center shrink-0">
                    <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">© 2026 DOKI_VISUALS</p>
                 </div>
              </div>
           </motion.div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-20 text-center">
        <p className="text-slate-500 text-sm mb-4 tracking-widest font-light uppercase">Visual Integrity Maintained</p>
        <Link href="/en/doki" className="text-white font-bold hover:text-teal-400 transition-colors">Return to Reality</Link>
      </footer>

    </div>
  );
}

function ExifRow({ label, value }) {
  return (
    <div className="flex justify-between items-center border-b border-white/10 pb-2">
       <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{label}</span>
       <span className="text-xs font-bold text-white">{value}</span>
    </div>
  );
}

function LogItem({ name, route, desc, status }) {
  return (
    <div className="group/item border-l-2 border-teal-500/20 pl-4 py-1 hover:border-teal-500 transition-all">
       <div className="flex justify-between items-start mb-1">
          <p className="text-white font-bold text-sm group-hover/item:text-teal-400 transition-colors uppercase tracking-tight">{name}</p>
          <span className={`text-[8px] font-mono px-2 py-0.5 rounded border ${
            status === 'LEGACY' 
            ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' 
            : 'bg-teal-500/10 text-teal-400 border-teal-500/20'
          }`}>{status}</span>
       </div>
       <p className="text-slate-400 text-[10px] font-medium uppercase mb-1">{route}</p>
       <p className="text-slate-600 text-[9px] italic">{desc}</p>
    </div>
  );
}
