import Link from "next/link";

export default function SectionCard({ title, description, href, Icon, accent }) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
    >
      <div className={`inline-flex items-center justify-center rounded-3xl px-4 py-3 text-white ${accent}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-white transition group-hover:text-teal-300">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      </div>
      <div className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-teal-300 opacity-0 transition group-hover:opacity-100">
        Explore
      </div>
    </Link>
  );
}
