import Link from "next/link";

const navLinks = [
  { href: "/doki", label: "Doki" },
  { href: "/dokimachine", label: "DOKIMACHINE" },
  { href: "/gear", label: "Gear" },
  { href: "/photography", label: "Photography" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="text-lg font-semibold tracking-[0.22em] uppercase text-white">
          Dokimachine
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="mailto:dokkdokki@dokimachine.net"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100 transition hover:border-white/20 hover:bg-white/10"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
