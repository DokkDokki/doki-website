const englishShowcase = {
  identity: {
    eyebrow: "One person, two names, three spirits.",
    title: "Meet Doki, and DOKIMACHINE.",
    intro: "Doki is the person behind the machine. DOKIMACHINE is the musical universe it becomes. Engineering, photography, and sound are my lives. They are different interfaces for the same curiosity.",
  },
  disciplines: [
    { id: "engineering", label: "Engineering", title: "Technology defines me, powered by curiosity.", description: "Experimenting with systems and technologies to bring ideas to life.", cta: "Explore Doki", href: "/doki" },
    { id: "music", label: "DOKIMACHINE", title: "Cosmic exploration through sound.", description: "A project that transforms the cosmos into sound, mostly through trance, house, and ambient genres, with vocal synthesis for emotional expression.", cta: "Hear the sound of DOKIMACHINE", href: "/music" },
    { id: "photography", label: "Photography", title: "Small things in life, captured behind the lens.", description: "Trains, cosplay, streets, and the small details that are worth remembering.", cta: "Open the archive", href: "/photography" },
  ],
  gallery: { eyebrow: "Visual memory", title: "Frames from the journey." },
  instagram: { eyebrow: "From Instagram", title: "Recent frames, in the moment.", description: "A rotating selection from my personal and photography journals.", follow: "Follow the archive", openPost: "Open Instagram post", noCaption: "View on Instagram" },
  manifesto: {
    lines: ["Engineering builds the machine.", "Photography holds the moment.", "Music gives it a voice."],
    note: "Doki and DOKIMACHINE are both interfaces of the same curiosity, not separate lives.",
  },
  closing: { title: "Let's connect.", note: "Follow the person, enter the machine, or simply say hello.", person: "Meet Doki", machine: "Enter DOKIMACHINE" },
};

const english = {
  languageName: "English",
  navigation: { brand: "DOKIMACHINE", about: "Identity", work: "Disciplines", frames: "Frames", contact: "Connect" },
  hero: {
    eyebrow: "Doki / DOKIMACHINE",
    title: "I'm Doki, and also DOKIMACHINE.",
    description: "Engineering, photography, and music. Powered by curiosity, shaped by the cosmos, and expressed through systems, signals, and atmosphere.",
    signature: "See you in the next dream.",
    primaryCta: "Meet Doki",
    secondaryCta: "Explore DOKIMACHINE",
    scroll: "Scroll to explore",
    machineLabel: "The Machine",
    machineDescription: "Electronic music project inspired by the stars, space, and imagination. Also DJ sets, remixes, and original productions for the scene.",
  },
  showcase: englishShowcase,
  footer: { descriptor: "Engineering · Music · Photography", socialLabel: "Social links", languageLabel: "Language", navigationLabel: "Site navigation", contact: "Say hello" },
};

export const landingTranslations = {
  en: english,
  jp: {
    ...english,
    languageName: "日本語",
    navigation: { brand: "DOKI / DOKIMACHINE", about: "プロフィール", work: "活動", frames: "写真", contact: "つながる" },
    hero: { ...english.hero, eyebrow: "Doki / DOKIMACHINE", title: "システムをつくり、瞬間を写し、宇宙を音にする。", description: "エンジニアリング、写真、音楽から生まれるひとつの好奇心。", primaryCta: "Dokiについて", secondaryCta: "DOKIMACHINEへ", scroll: "スクロールして見る", machineLabel: "音の世界", machineDescription: "星と都市、そのあいだの空間のためのエレクトロニック・ミュージック。" },
    footer: { ...english.footer, descriptor: "エンジニアリング · 音楽 · 写真", socialLabel: "ソーシャルリンク", languageLabel: "言語", navigationLabel: "サイトナビゲーション", contact: "連絡する" },
  },
  th: {
    ...english,
    languageName: "ไทย",
    navigation: { brand: "DOKI / DOKIMACHINE", about: "ตัวตน", work: "ผลงาน", frames: "ภาพถ่าย", contact: "ติดต่อ" },
    hero: { ...english.hero, eyebrow: "Doki / DOKIMACHINE", title: "สร้างระบบ เก็บภาพช่วงเวลา และเปลี่ยนจักรวาลให้เป็นเสียง", description: "หนึ่งคน สองชื่อ และความหลงใหลที่ถักทอจากวิศวกรรม ภาพถ่าย และดนตรี", primaryCta: "รู้จัก Doki", secondaryCta: "เข้าสู่ DOKIMACHINE", scroll: "เลื่อนเพื่อสำรวจ", machineLabel: "โลกของเสียง", machineDescription: "ดนตรีอิเล็กทรอนิกส์สำหรับดวงดาว เมือง และพื้นที่ระหว่างนั้น" },
    footer: { ...english.footer, descriptor: "วิศวกรรม · ดนตรี · ภาพถ่าย", socialLabel: "ลิงก์โซเชียล", languageLabel: "ภาษา", navigationLabel: "การนำทางเว็บไซต์", contact: "ทักทาย" },
  },
};

export const landingLocales = ["en", "jp", "th"];
