import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/70 px-6 py-16 shadow-2xl shadow-teal-500/10 sm:px-10 md:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_30%)]" />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-300/80">Welcome to the new portal</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Doki + DOKIMACHINE.
            <span className="block text-teal-300">One world, clear direction.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Discover the next version of the site: your digital engineering story, music project, gear specs, and photography archive all in a clean, modern portal.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/doki"
              className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-teal-300"
            >
              Visit Doki
              <FaArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/dokimachine"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Visit DOKIMACHINE
              <FaArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 text-slate-300 shadow-lg shadow-black/20 sm:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-teal-300/80">Fast start</p>
          <h2 className="mt-5 text-2xl font-semibold text-white">What’s inside</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7">
            <li>• Clean shared navigation and polished landing page</li>
            <li>• Reusable layout components for consistency</li>
            <li>• Styled content cards for each section</li>
            <li>• A strong foundation for later learning and expansion</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
