import { FaDiscord, FaEnvelope, FaGithub, FaYoutube } from "react-icons/fa";

const links = [
  { label: "GitHub", href: "https://github.com/DokkDokki", Icon: FaGithub },
  { label: "YouTube", href: "https://www.youtube.com/@dokimachine", Icon: FaYoutube },
  { label: "Discord", href: "https://discord.gg/R8JB5JHvaZ", Icon: FaDiscord },
  { label: "Email", href: "mailto:dokkdokki@dokimachine.net", Icon: FaEnvelope },
];

export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#050507] px-6 py-16 text-white selection:bg-teal-300/30">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.11),transparent_30%),radial-gradient(circle_at_80%_75%,rgba(217,70,239,0.1),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:52px_52px]" />

      <section className="relative mx-auto w-full max-w-5xl">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-white">DOKIMACHINE</p>
          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.22em] text-amber-200/80">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" />
            Maintenance mode
          </div>
        </header>

        <div className="grid gap-14 py-16 md:grid-cols-[1.5fr_0.7fr] md:items-end md:py-24">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-teal-300">
              Signal temporarily interrupted
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-light leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-8xl">
              A new world is being assembled.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Doki and DOKIMACHINE are rebuilding this space from the ground up. The next transmission will arrive soon.
            </p>
          </div>

          <div className="border-l border-white/10 pl-6 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
            <div className="space-y-4">
              <p className="flex justify-between gap-4"><span>Interface</span><span className="text-amber-200/75">Rebuilding</span></p>
              <p className="flex justify-between gap-4"><span>Archives</span><span className="text-emerald-300/75">Safe</span></p>
              <p className="flex justify-between gap-4"><span>Next signal</span><span className="text-white/70">Soon</span></p>
            </div>
            <div className="mt-6 h-px overflow-hidden bg-white/10">
              <div className="h-full w-2/3 bg-gradient-to-r from-teal-300 to-fuchsia-400" />
            </div>
          </div>
        </div>

        <footer className="flex flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
            Engineering · Music · Photography
          </p>
          <nav aria-label="Stay connected" className="flex items-center gap-2">
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </nav>
        </footer>
      </section>
    </main>
  );
}
