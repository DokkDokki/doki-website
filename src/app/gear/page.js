"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaServer, FaLaptop, FaMicrochip, FaArrowLeft, FaMouse } from "react-icons/fa";

export default function GearPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-teal-500/30 font-[family-name:var(--font-nunito)]">
      
      {/* NAVBAR */}
      <nav className="w-full bg-[#050505]/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/doki" className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors">
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Doki</span>
          </Link>
          <div className="font-light tracking-[0.2em] text-white/40 text-sm uppercase">Spec Sheet V4.0</div>
        </div>
      </nav>

      <main className="max-w-[1000px] mx-auto px-6 py-20">
        
        {/* HEADER */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Technical <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Inventory.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            The specialized hardware and creative tools powering my engineering projects and music production. 
          </p>
        </motion.header>

        {/* 1. THE MAIN ENGINE (CUSTOM PC) */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
           <div className="flex items-center gap-4 mb-10">
              <FaMicrochip className="text-teal-400 text-2xl" />
              <h2 className="text-2xl font-bold text-white tracking-widest uppercase">The Main Engine</h2>
              <div className="h-[1px] flex-1 bg-white/5"></div>
           </div>

           <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                 <div>
                    <h3 className="text-3xl font-bold text-white mb-2 uppercase">DESKTOP-DOKI</h3>
                    <p className="text-teal-400 font-bold tracking-widest uppercase text-xs mb-8">Established 2021</p>
                    
                    <div className="space-y-4">
                       <SpecItem label="CPU" value="Intel Core i7-12700K" />
                       <SpecItem label="RAM" value="32GB DDR5-6000 (G.Skill Trident Z5 Neo)" />
                       <SpecItem label="GPU" value="RTX 3080 Ti (Gigabyte Vision OC)" />
                       <SpecItem label="Chassis" value="Corsair iCUE 7000X" />
                       <SpecItem label="Cooling" value="Corsair iCUE H150i Elite LCD XT 360mm" />
                       <SpecItem label="PSU" value="Corsair RM1000x Shift" />
                    </div>
                 </div>

                 <div>
                    <h4 className="text-white font-bold mb-6 text-sm flex items-center gap-2">
                       <FaServer className="text-teal-400" /> Storage & I/O
                    </h4>
                    <div className="space-y-4 mb-10">
                       <SpecItem label="Boot" value="Samsung 990 Pro 2TB" />
                       <SpecItem label="Secondary" value="Samsung 980 Pro 1TB" />
                       <SpecItem label="Gaming" value="HP EX950 2TB" />
                    </div>

                    <h4 className="text-white font-bold mb-6 text-sm flex items-center gap-2">
                       <FaLaptop className="text-teal-400" /> Primary Monitor
                    </h4>
                    <div className="space-y-2">
                       <p className="text-white text-sm font-medium">MSI MPG 274URF QD</p>
                    </div>
                 </div>
              </div>
           </div>
        </motion.section>

        {/* 2. THE PORTABLES */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
           <div className="flex items-center gap-4 mb-10">
              <FaLaptop className="text-teal-400 text-2xl" />
              <h2 className="text-2xl font-bold text-white tracking-widest uppercase">The Portables</h2>
              <div className="h-[1px] flex-1 bg-white/5"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-teal-500/30 transition-all"
              >
                 <h3 className="text-xl font-bold text-white mb-1">MacBook Pro (2021)</h3>
                 <p className="text-teal-400 text-[10px] font-bold tracking-widest uppercase mb-6">Music & Performance Unit</p>
                 <ul className="space-y-3 text-sm">
                    <SpecItem label="Silicon" value="Apple M1 Pro" />
                    <SpecItem label="Memory" value="32GB Unified (CTO)" />
                    <SpecItem label="Primary Use" value="Ableton Live, Logic Pro, DJing" />
                 </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all"
              >
                 <h3 className="text-xl font-bold text-white mb-1">ThinkPad P1 Gen 7</h3>
                 <p className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-6">Engineering Powerhouse</p>
                 <ul className="space-y-3 text-sm">
                    <SpecItem label="CPU" value="Core Ultra 9 185H" />
                    <SpecItem label="GPU" value="RTX 4070 Laptop" />
                    <SpecItem label="Primary Use" value="College & Engineering Work" />
                 </ul>
              </motion.div>
           </div>
        </motion.section>

        {/* 3. HUMAN INTERFACES */}
        <section className="mb-32">
           <div className="flex items-center gap-4 mb-10">
              <FaMouse className="text-teal-400 text-2xl" />
              <h2 className="text-2xl font-bold text-white tracking-widest uppercase">Human Interfaces</h2>
              <div className="h-[1px] flex-1 bg-white/5"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative">
                 <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    Battle Station (Gaming)
                 </h3>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                       <span className="text-slate-500">Keyboard</span> <span className="text-white">Razer DeathStalker V2 Pro</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                       <span className="text-slate-500">Mouse</span> <span className="text-white">Razer Basilisk V3 Pro</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-slate-500">Display</span> <span className="text-white">MSI MPG 274URF QD</span>
                    </div>
                 </div>
              </div>

              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative">
                 <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                    Work Desk (Productivity)
                 </h3>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                       <span className="text-slate-500">Keyboard</span> <span className="text-white">NuPhy Air75 V3</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                       <span className="text-slate-500">Mouse</span> <span className="text-white">Logitech MX Master 3S</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-slate-500">Display</span> <span className="text-white">LG 27UP850N-W</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. HOME LAB & INFRASTRUCTURE */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
           <div className="flex items-center gap-4 mb-12">
              <FaServer className="text-teal-400 text-2xl" />
              <h2 className="text-2xl font-bold text-white tracking-widest uppercase">The Home Lab</h2>
              <div className="h-[1px] flex-1 bg-white/10"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 p-8 bg-white/5 rounded-3xl border border-white/5 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-500/5 blur-[80px] rounded-full translate-x-1/4 -translate-y-1/4"></div>
                 <FaMicrochip className="text-teal-400 mb-6 text-xl relative z-10" />
                 <h4 className="text-white font-bold mb-2 relative z-10">Dell PowerEdge T40</h4>
                 <p className="text-teal-400 text-[10px] tracking-widest uppercase font-bold mb-6 relative z-10">Primary NAS & Services</p>
                 <div className="flex flex-wrap gap-3 mb-8 relative z-10">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-teal-400">UBUNTU SERVER</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-teal-400">ZFS/EXT4</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-teal-400">DOCKER</span>
                 </div>
                 <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                    The heart of my local data. Acts as the primary NAS for backups, media streaming, and master track archives. Also handles containerized services for the local network.
                 </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl border border-purple-500/20 relative overflow-hidden group">
                 <FaServer className="text-purple-400 mb-6 text-xl" />
                 <h4 className="text-white font-bold mb-2">Dell PowerEdge R430</h4>
                 <p className="text-purple-400 text-[10px] tracking-widest uppercase font-bold mb-4">Enterprise (Japan Node)</p>
                 <p className="text-slate-400 text-sm leading-relaxed">
                    1U Rack Server. Currently hosted off-site in Japan. Proof of concept for remote enterprise management.
                 </p>
              </div>
           </div>
        </motion.section>

      </main>

      {/* FOOTER */}
      <footer className="max-w-[1000px] mx-auto px-6 py-20 border-t border-white/10 text-center">
         <p className="text-slate-500 text-sm mb-4 tracking-widest font-light uppercase">Engineered for Perfection</p>
         <Link href="/doki" className="text-white font-bold hover:text-teal-400 transition-colors">Return to Doki's Reality</Link>
      </footer>
    </div>
  );
}

function SpecItem({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline border-b border-white/5 pb-2">
      <span className="text-slate-500 text-[10px] uppercase tracking-tighter sm:tracking-widest font-bold">{label}</span>
      <span className="text-white text-sm font-medium">{value}</span>
    </div>
  );
}
