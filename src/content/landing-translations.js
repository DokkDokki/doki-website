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
    signature: "次の夢で、また会おう。",
    showcase: { identity: { eyebrow: "ひとり、ふたつの名前、みっつの表現。", title: "DokiとDOKIMACHINE。", intro: "Dokiはマシンの向こう側にいる人。DOKIMACHINEは、そこから広がる音楽の宇宙です。エンジニアリング、写真、音は別々の人生ではなく、同じ好奇心を映す異なるインターフェースです。" }, disciplines: [{ id: "engineering", label: "エンジニアリング", title: "好奇心を動力に、技術で自分を形づくる。", description: "システムとテクノロジーを試しながら、アイデアを形にします。", cta: "Dokiを知る", href: "/doki" }, { id: "music", label: "DOKIMACHINE", title: "音で宇宙を探検する。", description: "トランス、ハウス、アンビエント、そして感情を表現する音声合成で、宇宙を音へ変えるプロジェクトです。", cta: "DOKIMACHINEの音を聴く", href: "/music" }, { id: "photography", label: "写真", title: "日常の小さなものを、レンズの向こうに残す。", description: "電車、コスプレ、街、そして覚えておきたい小さなディテール。", cta: "アーカイブを開く", href: "/photography" }], gallery: { eyebrow: "視覚の記憶", title: "旅の途中のフレーム。" }, instagram: { eyebrow: "Instagramから", title: "その瞬間の、最近のフレーム。", description: "個人と写真の記録から選んだ投稿です。", follow: "アーカイブをフォロー", openPost: "Instagramの投稿を開く", noCaption: "Instagramで見る" }, manifesto: { lines: ["エンジニアリングがマシンをつくる。", "写真が瞬間をとどめる。", "音楽が声を与える。"], note: "DokiとDOKIMACHINEは別々の人生ではなく、同じ好奇心のふたつの表現です。" }, closing: { title: "つながりましょう。", note: "人をフォローする。マシンに入る。あるいは、ただ声をかける。", person: "Dokiを知る", machine: "DOKIMACHINEへ" } },
    languageName: "日本語",
    navigation: { brand: "DOKI / DOKIMACHINE", about: "プロフィール", work: "活動", frames: "写真", contact: "つながる" },
    hero: { ...english.hero, eyebrow: "Doki / DOKIMACHINE", title: "システムをつくり、瞬間を写し、宇宙を音にする。", description: "エンジニアリング、写真、音楽から生まれるひとつの好奇心。", primaryCta: "Dokiについて", secondaryCta: "DOKIMACHINEへ", scroll: "スクロールして見る", machineLabel: "音の世界", machineDescription: "星と都市、そのあいだの空間のためのエレクトロニック・ミュージック。" },
    footer: { ...english.footer, descriptor: "エンジニアリング · 音楽 · 写真", socialLabel: "ソーシャルリンク", languageLabel: "言語", navigationLabel: "サイトナビゲーション", contact: "連絡する" },
  },
  th: {
    ...english,
    signature: "แล้วพบกันในความฝันครั้งต่อไป",
    showcase: { identity: { eyebrow: "หนึ่งคน สองชื่อ สามรูปแบบของการแสดงออก", title: "พบกับ Doki และ DOKIMACHINE", intro: "Doki คือคนที่อยู่เบื้องหลังเครื่องจักร ส่วน DOKIMACHINE คือจักรวาลดนตรีที่ต่อยอดออกมา วิศวกรรม ภาพถ่าย และเสียงไม่ใช่ชีวิตที่แยกจากกัน แต่เป็นอินเทอร์เฟซต่างกันของความอยากรู้อยากเห็นเดียวกัน" }, disciplines: [{ id: "engineering", label: "วิศวกรรม", title: "เทคโนโลยีหล่อหลอมตัวตน ด้วยพลังของความอยากรู้อยากเห็น", description: "ทดลองกับระบบและเทคโนโลยีเพื่อทำให้ไอเดียเกิดขึ้นจริง", cta: "สำรวจ Doki", href: "/doki" }, { id: "music", label: "DOKIMACHINE", title: "สำรวจจักรวาลผ่านเสียง", description: "โปรเจกต์ที่เปลี่ยนจักรวาลให้เป็นเสียง ผ่าน trance, house, ambient และการสังเคราะห์เสียงเพื่อถ่ายทอดอารมณ์", cta: "ฟังเสียงของ DOKIMACHINE", href: "/music" }, { id: "photography", label: "ภาพถ่าย", title: "เก็บสิ่งเล็ก ๆ ในชีวิตไว้หลังเลนส์", description: "รถไฟ คอสเพลย์ ถนน และรายละเอียดเล็ก ๆ ที่ควรจดจำ", cta: "เปิดคลังภาพ", href: "/photography" }], gallery: { eyebrow: "ความทรงจำผ่านภาพ", title: "เฟรมระหว่างการเดินทาง" }, instagram: { eyebrow: "จาก Instagram", title: "เฟรมล่าสุดในขณะนั้น", description: "โพสต์ที่คัดสรรมาจากบันทึกชีวิตและภาพถ่าย", follow: "ติดตามคลังภาพ", openPost: "เปิดโพสต์ Instagram", noCaption: "ดูบน Instagram" }, manifesto: { lines: ["วิศวกรรมสร้างเครื่องจักร", "ภาพถ่ายเก็บช่วงเวลา", "ดนตรีมอบเสียงให้มัน"], note: "Doki และ DOKIMACHINE ไม่ใช่ชีวิตที่แยกกัน แต่เป็นสองอินเทอร์เฟซของความอยากรู้อยากเห็นเดียวกัน" }, closing: { title: "มาสร้างการเชื่อมต่อกัน", note: "ติดตามคน เข้าสู่เครื่องจักร หรือเพียงแค่ทักทาย", person: "รู้จัก Doki", machine: "เข้าสู่ DOKIMACHINE" } },
    languageName: "ไทย",
    navigation: { brand: "DOKI / DOKIMACHINE", about: "ตัวตน", work: "ผลงาน", frames: "ภาพถ่าย", contact: "ติดต่อ" },
    hero: { ...english.hero, eyebrow: "Doki / DOKIMACHINE", title: "สร้างระบบ เก็บภาพช่วงเวลา และเปลี่ยนจักรวาลให้เป็นเสียง", description: "หนึ่งคน สองชื่อ และความหลงใหลที่ถักทอจากวิศวกรรม ภาพถ่าย และดนตรี", primaryCta: "รู้จัก Doki", secondaryCta: "เข้าสู่ DOKIMACHINE", scroll: "เลื่อนเพื่อสำรวจ", machineLabel: "โลกของเสียง", machineDescription: "ดนตรีอิเล็กทรอนิกส์สำหรับดวงดาว เมือง และพื้นที่ระหว่างนั้น" },
    footer: { ...english.footer, descriptor: "วิศวกรรม · ดนตรี · ภาพถ่าย", socialLabel: "ลิงก์โซเชียล", languageLabel: "ภาษา", navigationLabel: "การนำทางเว็บไซต์", contact: "ทักทาย" },
  },
};

export const landingLocales = ["en", "jp", "th"];
