"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCamera, FaCode, FaHeadphones, FaMapMarkerAlt } from "react-icons/fa";
import { useLandingLocale } from "@/components/landing/LandingLocaleProvider";

const showcaseCopy = {
  en: {
    featuredEyebrow: "Selected signals",
    featuredTitle: "One mind, three frequencies.",
    featuredIntro: "A snapshot of the things I build, hear, and notice.",
    cards: [
      ["Engineering", "Building the systems behind the experience.", "Infrastructure, code, hardware, and experiments that turn curiosity into something useful.", "Explore Doki", "/doki"],
      ["DOKIMACHINE", "Late-night emotion, rendered as sound.", "Trance energy, Vocaloid voices, and machine-made worlds shaped into an evolving music project.", "Hear the project", "/music"],
      ["Photography", "Small moments worth keeping.", "Trains, streets, people, and places collected between Bangkok, Tokyo, and everywhere in between.", "Open the archive", "/photography"],
    ],
    visualEyebrow: "Visual memory",
    visualTitle: "Frames from the journey.",
    manifesto: ["Engineering builds the machine.", "Photography captures its world.", "Music gives it a voice."],
    manifestoNote: "Doki and DOKIMACHINE are not separate lives. They are two interfaces to the same curiosity.",
    closing: "Pick up the signal.",
    closingNote: "Follow the person, enter the machine, or simply say hello.",
    person: "Meet Doki",
    machine: "Enter DOKIMACHINE",
  },
  jp: {
    featuredEyebrow: "選ばれたシグナル",
    featuredTitle: "ひとつの心、三つの周波数。",
    featuredIntro: "つくるもの、聴こえるもの、そして心に留まったもの。",
    cards: [
      ["エンジニアリング", "体験を支えるシステムをつくる。", "インフラ、コード、ハードウェア、そして好奇心を役立つものへ変える実験。", "Dokiを知る", "/doki"],
      ["DOKIMACHINE", "真夜中の感情を、音に変える。", "トランスの熱量、Vocaloidの声、マシンが描く世界から生まれる音楽プロジェクト。", "プロジェクトを聴く", "/music"],
      ["写真", "残しておきたい、小さな瞬間。", "バンコク、東京、そして旅の途中で出会った電車、街、人々、風景。", "アーカイブを見る", "/photography"],
    ],
    visualEyebrow: "視覚の記憶",
    visualTitle: "旅の途中で切り取った景色。",
    manifesto: ["エンジニアリングがマシンをつくる。", "写真がその世界を写す。", "音楽がそこに声を与える。"],
    manifestoNote: "DokiとDOKIMACHINEは別々の人生ではない。同じ好奇心につながる、二つのインターフェース。",
    closing: "シグナルを受け取ろう。",
    closingNote: "Dokiを知る、マシンの世界へ入る、あるいは気軽に声をかける。",
    person: "Dokiを知る",
    machine: "DOKIMACHINEへ",
  },
  th: {
    featuredEyebrow: "สัญญาณที่คัดสรร",
    featuredTitle: "หนึ่งความคิด สามความถี่",
    featuredIntro: "ภาพรวมของสิ่งที่ผมสร้าง สิ่งที่ผมได้ยิน และสิ่งที่ผมมองเห็น",
    cards: [
      ["วิศวกรรม", "สร้างระบบเบื้องหลังประสบการณ์", "โครงสร้างพื้นฐาน โค้ด ฮาร์ดแวร์ และการทดลองที่เปลี่ยนความสงสัยให้เป็นสิ่งที่ใช้ได้จริง", "รู้จัก Doki", "/doki"],
      ["DOKIMACHINE", "เปลี่ยนอารมณ์ยามดึกให้กลายเป็นเสียง", "พลังของแทรนซ์ เสียง Vocaloid และโลกจากเครื่องจักรที่ก่อตัวเป็นโปรเจกต์ดนตรี", "ฟังโปรเจกต์", "/music"],
      ["การถ่ายภาพ", "เก็บช่วงเวลาเล็ก ๆ ที่มีความหมาย", "รถไฟ ถนน ผู้คน และสถานที่ระหว่างกรุงเทพฯ โตเกียว และทุกจุดบนเส้นทาง", "เปิดคลังภาพ", "/photography"],
    ],
    visualEyebrow: "ความทรงจำผ่านภาพ",
    visualTitle: "เฟรมจากการเดินทาง",
    manifesto: ["วิศวกรรมสร้างเครื่องจักร", "ภาพถ่ายบันทึกโลกของมัน", "ดนตรีมอบเสียงให้กับมัน"],
    manifestoNote: "Doki และ DOKIMACHINE ไม่ใช่สองชีวิตที่แยกจากกัน แต่คือสองอินเทอร์เฟซของความอยากรู้อยากเห็นเดียวกัน",
    closing: "รับสัญญาณต่อไป",
    closingNote: "ทำความรู้จัก Doki เข้าสู่โลกของเครื่องจักร หรือแค่ทักทายกัน",
    person: "รู้จัก Doki",
    machine: "เข้าสู่ DOKIMACHINE",
  },
};

const cardStyles = [
  { Icon: FaCode, image: "/images/personal/doki-hikari.jpg", color: "teal", gradient: "from-teal-400/35" },
  { Icon: FaHeadphones, image: "/images/events/otaqlab_2025.jpg", color: "fuchsia", gradient: "from-fuchsia-500/40" },
  { Icon: FaCamera, image: "/images/photography/sakura-chidorigafuchi-park.jpg", color: "sky", gradient: "from-sky-400/35" },
];

const photos = [
  ["/images/photography/tokaido-line-e231-nippori.jpg", "Nippori · Tokyo"],
  ["/images/photography/sakura-chidorigafuchi-park.jpg", "Chidorigafuchi · Tokyo"],
  ["/images/photography/niigata-2025-street.jpg", "Niigata · 2025"],
  ["/images/events/singapore_2025.jpg", "Singapore · 2025"],
];

function Reveal({ children, className = "" }) {
  return <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>;
}

export default function LandingShowcase() {
  const { locale } = useLandingLocale();
  const text = showcaseCopy[locale];
  const contentLocale = locale === "en" ? locale : "en";

  return (
    <div className="overflow-hidden bg-[#050507] text-white">
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.3em] text-teal-300">{text.featuredEyebrow}</p><h2 className="mt-4 text-4xl font-light tracking-tight sm:text-6xl">{text.featuredTitle}</h2><p className="mt-5 text-lg text-slate-400">{text.featuredIntro}</p></Reveal>
          <div className="grid gap-5 lg:grid-cols-3">
            {text.cards.map(([title, subtitle, description, cta, href], index) => {
              const style = cardStyles[index];
              return <Reveal key={title} className="h-full"><Link href={`/${contentLocale}${href}`} className="group relative flex min-h-[520px] h-full flex-col justify-end overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-7 transition hover:-translate-y-1 hover:border-white/25 sm:p-9"><Image src={style.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-1000 group-hover:scale-105" /><div className="absolute inset-0 bg-black/30" /><div className={`absolute inset-0 bg-gradient-to-t ${style.gradient} via-[#050507]/80 to-transparent`} /><div className="relative"><style.Icon className="mb-5 h-5 w-5 text-white/70" /><p className="text-xs font-bold uppercase tracking-[0.25em] text-white/55">{title}</p><h3 className="mt-3 text-2xl font-semibold leading-tight">{subtitle}</h3><p className="mt-4 text-sm leading-6 text-slate-300/75">{description}</p><span className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em]">{cta}<FaArrowRight className="h-3 w-3 transition group-hover:translate-x-1" /></span></div></Link></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#08080b] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6"><Reveal><p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-300">{text.visualEyebrow}</p><h2 className="mt-4 text-4xl font-light tracking-tight sm:text-6xl">{text.visualTitle}</h2></Reveal></div>
        <div className="mt-12 flex snap-x gap-4 overflow-x-auto px-6 pb-3 sm:px-[max(1.5rem,calc((100vw-80rem)/2))]">
          {photos.map(([src, label], index) => <figure key={src} className={`group relative h-[420px] shrink-0 snap-center overflow-hidden rounded-3xl border border-white/10 ${index % 2 ? "w-[280px] sm:w-[340px]" : "w-[360px] sm:w-[500px]"}`}><Image src={src} alt={label} fill sizes="500px" className="object-cover transition duration-1000 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" /><figcaption className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/75"><FaMapMarkerAlt className="mr-2 inline h-3 w-3" />{label}</figcaption></figure>)}
        </div>
      </section>

      <section className="relative px-6 py-28 sm:py-40"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,.08),transparent_35%),radial-gradient(circle_at_60%_55%,rgba(217,70,239,.06),transparent_30%)]" /><div className="relative mx-auto max-w-5xl text-center"><div className="space-y-2 text-3xl font-light tracking-tight sm:text-5xl">{text.manifesto.map((line, index) => <motion.p key={line} initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.7, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }} className={index === 0 ? "text-teal-200" : index === 2 ? "text-fuchsia-200" : "text-white"}>{line}</motion.p>)}</div><motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.45 }} className="mx-auto mt-10 max-w-2xl text-base leading-7 text-slate-400">{text.manifestoNote}</motion.p></div></section>

      <section className="px-6 pb-28"><Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-teal-400/10 via-white/[0.03] to-fuchsia-500/10 p-8 text-center sm:p-16"><h2 className="text-4xl font-light tracking-tight sm:text-6xl">{text.closing}</h2><p className="mx-auto mt-5 max-w-xl text-slate-400">{text.closingNote}</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href={`/${contentLocale}/doki`} className="rounded-full bg-teal-300 px-7 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-white">{text.person}</Link><Link href={`/${contentLocale}/music`} className="rounded-full bg-fuchsia-400 px-7 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-slate-950 transition hover:bg-white">{text.machine}</Link></div></Reveal></section>
    </div>
  );
}
