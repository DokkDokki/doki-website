import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaSoundcloud,
  FaYoutube,
} from "react-icons/fa";
import { interfaceTranslations } from "@/content/interface-translations";

const links = {
  doki: [
    ["email", "mailto:dokkdokki@dokimachine.net", FaEnvelope],
    ["github", "https://github.com/DokkDokki", FaGithub],
    ["personalInstagram", "https://instagram.com/doki_chibi", FaInstagram],
    ["photographyInstagram", "https://instagram.com/doki_a6000", FaInstagram],
    ["discord", "https://discord.gg/R8JB5JHvaZ", FaDiscord],
  ],
  music: [
    ["email", "mailto:dokkdokki@dokimachine.net", FaEnvelope],
    ["soundcloud", "https://soundcloud.com/doki_chibi", FaSoundcloud],
    ["youtube", "https://www.youtube.com/@dokimachine", FaYoutube],
    ["instagram", "https://instagram.com/dokimachine", FaInstagram],
  ],
};
export default function ContactPanel({
  world = "doki",
  locale = "en",
  title,
}) {
  const copy = interfaceTranslations[locale] || interfaceTranslations.en;
  const labels = { email: copy.contact.email, personalInstagram: copy.contact.personalInstagram, photographyInstagram: copy.contact.photographyInstagram, github: "GitHub", discord: "Discord", soundcloud: "SoundCloud", youtube: "YouTube", instagram: "Instagram" };
  return (
    <section
      className={`min-w-0 rounded-[2rem] border p-6 text-center sm:p-12 ${world === "doki" ? "border-teal-300/20 bg-teal-300/5" : "border-fuchsia-300/20 bg-fuchsia-300/5"}`}
    >
      <p className="text-[10px] font-bold uppercase tracking-[.28em] text-white/45">
        {copy.contact.eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-light text-white sm:text-5xl">
        {title || (world === "doki" ? copy.contact.dokiTitle : copy.contact.musicTitle)}
      </h2>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {links[world].map(([key, href, Icon]) => (
          <a
            key={key}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-center text-xs font-bold uppercase tracking-[.12em] text-white transition hover:bg-white hover:text-slate-950 sm:px-5"
          >
            <Icon /> {labels[key]}
          </a>
        ))}
      </div>
    </section>
  );
}
