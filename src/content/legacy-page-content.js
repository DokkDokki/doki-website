const gearEnglish = {
  meta: {
    title: "Technical Inventory",
    description: "The hardware, creative tools, and home-lab systems behind Doki's engineering and music work.",
  },
  back: "Back to Doki",
  music: "Music",
  specSheet: "Spec Sheet V4.0",
  eyebrow: "Engineering / music systems",
  title: "Technical inventory.",
  intro: "The specialized hardware and creative tools powering my engineering projects and music production.",
  sections: {
    main: "The main engine",
    portables: "The portables",
    interfaces: "Human interfaces",
    lab: "The home lab",
  },
  established: "Established 2021",
  storage: "Storage & I/O",
  monitor: "Primary monitor",
  musicUnit: "Music & performance unit",
  engineeringUnit: "Engineering powerhouse",
  gaming: "Battle station (gaming)",
  productivity: "Work desk (productivity)",
  labels: { cpu: "CPU", ram: "RAM", gpu: "GPU", chassis: "Chassis", cooling: "Cooling", psu: "PSU", boot: "Boot", secondary: "Secondary", gaming: "Gaming", silicon: "Silicon", memory: "Memory", primaryUse: "Primary use", keyboard: "Keyboard", mouse: "Mouse", display: "Display" },
  homeLab: {
    nas: "Primary NAS & services",
    enterprise: "Enterprise (Japan node)",
    nasText: "The heart of my local data. It acts as the primary NAS for backups, media streaming, and master-track archives, and handles containerized services for the local network.",
    enterpriseText: "1U rack server currently hosted off-site in Japan: a proof of concept for remote enterprise management.",
  },
  footer: "Engineered for perfection",
  return: "Return to Doki's reality",
};

const gearJapanese = {
  ...gearEnglish,
  meta: { title: "テクニカル・インベントリ", description: "エンジニアリングと音楽制作を支えるハードウェア、クリエイティブツール、ホームラボ。" },
  back: "Dokiに戻る", music: "音楽", specSheet: "スペックシート V4.0", eyebrow: "エンジニアリング / 音楽システム", title: "テクニカル・インベントリ。", intro: "エンジニアリングのプロジェクトと音楽制作を支える、専門的なハードウェアとクリエイティブツール。",
  sections: { main: "メインエンジン", portables: "ポータブル", interfaces: "ヒューマン・インターフェース", lab: "ホームラボ" }, established: "2021年構築", storage: "ストレージとI/O", monitor: "メインモニター", musicUnit: "音楽・パフォーマンス用", engineeringUnit: "エンジニアリング用", gaming: "ゲーミング・ステーション", productivity: "ワークデスク（作業用）",
  homeLab: { nas: "メインNASとサービス", enterprise: "エンタープライズ（日本ノード）", nasText: "ローカルデータの中心です。バックアップ、メディアストリーミング、マスタートラックの保管を担い、ローカルネットワーク向けのコンテナサービスも動かしています。", enterpriseText: "現在は日本のオフサイト環境で稼働する1Uラックサーバー。リモートでのエンタープライズ管理を試すための実験機です。" }, footer: "完璧を目指して設計", return: "Dokiの世界へ戻る",
  labels: { cpu: "CPU", ram: "RAM", gpu: "GPU", chassis: "筐体", cooling: "冷却", psu: "電源", boot: "起動", secondary: "セカンダリ", gaming: "ゲーム", silicon: "チップ", memory: "メモリ", primaryUse: "主な用途", keyboard: "キーボード", mouse: "マウス", display: "ディスプレイ" },
};

const gearThai = {
  ...gearEnglish,
  meta: { title: "คลังอุปกรณ์เทคนิค", description: "ฮาร์ดแวร์ เครื่องมือสร้างสรรค์ และโฮมแล็บที่อยู่เบื้องหลังงานวิศวกรรมและดนตรีของ Doki" },
  back: "กลับไปหา Doki", music: "ดนตรี", specSheet: "ข้อมูลสเปก V4.0", eyebrow: "ระบบวิศวกรรม / ดนตรี", title: "คลังอุปกรณ์เทคนิค", intro: "ฮาร์ดแวร์เฉพาะทางและเครื่องมือสร้างสรรค์ที่ใช้กับโปรเจกต์วิศวกรรมและการทำเพลง",
  sections: { main: "เครื่องหลัก", portables: "อุปกรณ์พกพา", interfaces: "อินเทอร์เฟซสำหรับคน", lab: "โฮมแล็บ" }, established: "ประกอบในปี 2021", storage: "สตอเรจและ I/O", monitor: "จอหลัก", musicUnit: "ชุดทำเพลงและแสดงสด", engineeringUnit: "เครื่องสำหรับงานวิศวกรรม", gaming: "โต๊ะเล่นเกม", productivity: "โต๊ะทำงาน",
  homeLab: { nas: "NAS และบริการหลัก", enterprise: "เอ็นเตอร์ไพรส์ (โหนดญี่ปุ่น)", nasText: "ศูนย์กลางข้อมูลในบ้านของผม ใช้เป็น NAS หลักสำหรับแบ็กอัป สตรีมสื่อ และเก็บมาสเตอร์แทร็ก รวมถึงรันบริการแบบคอนเทนเนอร์ในเครือข่ายภายใน", enterpriseText: "เซิร์ฟเวอร์แบบแร็ก 1U ที่โฮสต์อยู่นอกสถานที่ในญี่ปุ่น เป็นการทดลองจัดการระบบเอ็นเตอร์ไพรส์จากระยะไกล" }, footer: "สร้างขึ้นอย่างพิถีพิถัน", return: "กลับสู่โลกของ Doki",
  labels: { cpu: "CPU", ram: "RAM", gpu: "GPU", chassis: "เคส", cooling: "ระบบระบายความร้อน", psu: "พาวเวอร์ซัพพลาย", boot: "บูต", secondary: "รอง", gaming: "เกม", silicon: "ชิป", memory: "หน่วยความจำ", primaryUse: "การใช้งานหลัก", keyboard: "คีย์บอร์ด", mouse: "เมาส์", display: "จอภาพ" },
};

export const gearContent = { en: gearEnglish, jp: gearJapanese, th: gearThai };

const projectEnglish = {
  meta: { title: "Projects", description: "Doki's developing infrastructure, software, and creative-technology archive." },
  eyebrow: "Projects / growing archive", title: "Under construction, honestly.", intro: "This is where my infrastructure, software, and creative technology work will live. I am putting the archive together properly instead of filling it with pretend portfolio pieces.", category: "Archive category", coming: "Entries coming soon", back: "Back to Doki",
  items: [
    ["Infrastructure", "Servers, virtualization, networking, and the systems behind the scenes."],
    ["Software", "Tools, scripts, web experiments, and things made to solve a real problem."],
    ["Creative technology", "The overlap: music systems, visual tools, and curious prototypes."],
  ],
};
const projectJapanese = { ...projectEnglish, meta: { title: "プロジェクト", description: "Dokiのインフラ、ソフトウェア、クリエイティブテクノロジーの制作アーカイブ。" }, eyebrow: "プロジェクト / 育てているアーカイブ", title: "正直に、制作中です。", intro: "インフラ、ソフトウェア、クリエイティブテクノロジーの仕事をここにまとめていきます。見せかけのポートフォリオで埋めるのではなく、きちんと説明できる形でアーカイブを作っています。", category: "アーカイブの分野", coming: "項目を準備中", back: "Dokiに戻る", items: [["インフラ", "サーバー、仮想化、ネットワーク、そして舞台裏で動くシステム。"], ["ソフトウェア", "ツール、スクリプト、ウェブ実験、現実の課題を解決するためのもの。"], ["クリエイティブテクノロジー", "音楽システム、ビジュアルツール、好奇心から生まれるプロトタイプの交差点。"]] };
const projectThai = { ...projectEnglish, meta: { title: "โปรเจกต์", description: "คลังงานอินฟราสตรักเจอร์ ซอฟต์แวร์ และเทคโนโลยีสร้างสรรค์ของ Doki" }, eyebrow: "โปรเจกต์ / คลังงานที่กำลังเติบโต", title: "กำลังก่อสร้างอย่างจริงใจ", intro: "ที่นี่จะรวมงานด้านอินฟราสตรักเจอร์ ซอฟต์แวร์ และเทคโนโลยีสร้างสรรค์ของผม ผมกำลังจัดทำคลังงานอย่างเป็นเรื่องเป็นราว แทนที่จะเติมผลงานที่ยังอธิบายไม่ได้ลงไป", category: "หมวดหมู่คลังงาน", coming: "กำลังเตรียมรายการ", back: "กลับไปหา Doki", items: [["อินฟราสตรักเจอร์", "เซิร์ฟเวอร์ เวอร์ชวลไลเซชัน เครือข่าย และระบบที่ทำงานอยู่เบื้องหลัง"], ["ซอฟต์แวร์", "เครื่องมือ สคริปต์ การทดลองบนเว็บ และสิ่งที่สร้างเพื่อแก้ปัญหาจริง"], ["เทคโนโลยีสร้างสรรค์", "จุดตัดระหว่างระบบดนตรี เครื่องมือภาพ และต้นแบบจากความอยากรู้อยากเห็น"]] };
export const projectContent = { en: projectEnglish, jp: projectJapanese, th: projectThai };

const discographyUi = {
  en: { back: "Back to DOKIMACHINE", doki: "Doki", catalog: "Official release catalog", title: "Releases.", intro: "Every album, EP, single, and remix produced under the DOKIMACHINE system.", debut: "Debut album", second: "2nd album", size: "Catalog size", genre: "Main genre", search: "Search releases, vocalists, or original artists...", clear: "Clear search", present: "Present", legacy: "Legacy", format: "Format", vocalist: "Vocalist", featured: "Featured release", listen: "Listen on SoundCloud", tracklist: "Album tracklist", tracks: "tracks", original: "Original by", video: "Official music video / audio", mv: "MV available", soundcloud: "SoundCloud", expand: "Expand", releases: "releases", reset: "Reset all filters", noMatches: "No releases match your filter criteria.", noLegacy: "No legacy tracks match your filter criteria.", fullCatalog: "View full catalog on SoundCloud", footer: "Sonic integrity guaranteed", return: "Return to DOKIMACHINE" },
  jp: { back: "DOKIMACHINEに戻る", doki: "Doki", catalog: "公式リリース・カタログ", title: "リリース。", intro: "DOKIMACHINE名義で制作したアルバム、EP、シングル、リミックスをまとめています。", debut: "デビューアルバム", second: "セカンドアルバム", size: "カタログ数", genre: "主なジャンル", search: "リリース、ボーカル、原曲アーティストを検索…", clear: "検索をクリア", present: "現在", legacy: "レガシー", format: "形式", vocalist: "ボーカル", featured: "注目のリリース", listen: "SoundCloudで聴く", tracklist: "アルバム収録曲", tracks: "曲", original: "原曲：", video: "公式ミュージックビデオ / 音源", mv: "MVあり", soundcloud: "SoundCloud", expand: "詳細を見る", releases: "リリース", reset: "フィルターをリセット", noMatches: "条件に一致するリリースはありません。", noLegacy: "条件に一致するレガシー曲はありません。", fullCatalog: "SoundCloudで全カタログを見る", footer: "音の誠実さを守る", return: "DOKIMACHINEに戻る" },
  th: { back: "กลับสู่ DOKIMACHINE", doki: "Doki", catalog: "คลังผลงานที่เผยแพร่อย่างเป็นทางการ", title: "ผลงานเพลง", intro: "รวมอัลบั้ม EP ซิงเกิล และรีมิกซ์ทั้งหมดภายใต้ชื่อ DOKIMACHINE", debut: "อัลบั้มเปิดตัว", second: "อัลบั้มที่สอง", size: "ขนาดคลังเพลง", genre: "แนวเพลงหลัก", search: "ค้นหาผลงาน นักร้อง หรือศิลปินต้นฉบับ…", clear: "ล้างการค้นหา", present: "ปัจจุบัน", legacy: "ผลงานเดิม", format: "รูปแบบ", vocalist: "นักร้อง", featured: "ผลงานเด่น", listen: "ฟังบน SoundCloud", tracklist: "รายชื่อเพลงในอัลบั้ม", tracks: "เพลง", original: "ผลงานต้นฉบับโดย", video: "มิวสิกวิดีโอ / เสียงอย่างเป็นทางการ", mv: "มี MV", soundcloud: "SoundCloud", expand: "ดูรายละเอียด", releases: "ผลงาน", reset: "รีเซ็ตตัวกรองทั้งหมด", noMatches: "ไม่พบผลงานที่ตรงกับตัวกรอง", noLegacy: "ไม่พบเพลงเดิมที่ตรงกับตัวกรอง", fullCatalog: "ดูคลังเพลงทั้งหมดบน SoundCloud", footer: "รักษาความซื่อตรงของเสียง", return: "กลับสู่ DOKIMACHINE" },
};

export const discographyContent = discographyUi;

export const discographyDescriptions = {
  jp: {
    "Can You Hear Me?": "Clarisの世界を開くアンビエントの序章。", "Cosmic Transmission": "宇宙的なシンセが走る138 BPMのボーカルトランス。", Connection: "デジタルの境界をつなぐメロディックなインストゥルメンタル。", Void: "デビューアルバムを代表するアンセム。", Claris: "深いプログレッシブ・エウフォリックのタイトル曲。", Twinkle: "Rinの明るい声を迎えたハイエナジーJ-Trance。", "Light Trail": "繊細なMikuの調声で締めくくる感情的な曲。", Search: "Cyber TranceとJ-EDMを重ねた未来的なデュエット。", "Take Me Away": "感情的なリードシンセが広がるVOCALOIDトランス。", Silence: "Mikuの透明な声を生かしたメロディックトランス。", Fade: "プログレッシブハウスとトランスの融合。", Broken: "失恋とサウンドデザインを軸にした、暗く感情的な曲。", "Cosmic Express": "宇宙を駆け抜ける138 BPMの高速ボーカルトランス。", Solaris: "明るくエネルギッシュなシンセウェーブ系EDM。", "Another Dimension": "純粋なインストゥルメンタル・プログレッシブトランス。", "Space Discovery": "宇宙をテーマにしたシネマティックな電子音景。", melody_01: "DOKIMACHINE最初のデジタルサウンド実験。" },
  th: {
    "Can You Hear Me?": "บทนำแอมเบียนต์ที่เปิดจักรวาลของ Claris", "Cosmic Transmission": "Vocal Trance 138 BPM ที่ขับเคลื่อนด้วยซินธ์จากดวงดาว", Connection: "อินสทรูเมนทัลเมโลดิกที่เชื่อมขอบเขตดิจิทัล", Void: "เพลงหลักของอัลบั้มเปิดตัว", Claris: "เพลงไตเติลในบรรยากาศ progressive euphoric", Twinkle: "J-Trance พลังสูงที่มีเสียงร้องสดใสของ Rin", "Light Trail": "เพลงปิดท้ายที่อ่อนไหวด้วยการปรับเสียง Miku อย่างละเอียด", Search: "การผสมเสียงนักร้องคู่แบบอนาคตระหว่าง Cyber Trance และ J-EDM", "Take Me Away": "VOCALOID Trance ที่ขับด้วยเมโลดี้ซินธ์อันมีอารมณ์", Silence: "Melodic Trance บรรยากาศล่องลอยด้วยเสียงของ Miku", Fade: "การหลอมรวมของ Progressive House และ Trance", Broken: "เพลงเสียงร้องหม่นเศร้าที่เล่าเรื่องการอกหักผ่านซาวด์ดีไซน์", "Cosmic Express": "การเดินทาง Vocal Trance 138 BPM ความเร็วสูงผ่านอวกาศ", Solaris: "EDM สดใสพลังสูงผสมกลิ่นอาย synthwave", "Another Dimension": "การเดินทาง Progressive Trance แบบอินสทรูเมนทัลล้วน", "Space Discovery": "ซาวด์สเคปอิเล็กทรอนิกส์แบบภาพยนตร์ในธีมอวกาศ", melody_01: "การทดลองเสียงดิจิทัลครั้งแรกของ DOKIMACHINE" },
};
