import { notFound } from "next/navigation";
import CoreMusicPage from "@/components/pages/CoreMusicPage";
import LocalePageShell from "@/components/site/LocalePageShell";
import { landingLocales } from "@/content/landing-translations";

export const dynamicParams = false;

export function generateStaticParams() { return landingLocales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }) { const { locale } = await params; return { title: "DOKIMACHINE", description: "DOKIMACHINE electronic music, Vocaloid, and trance.", alternates: { canonical: `/${locale}/music`, languages: { en: "/en/music", ja: "/jp/music", th: "/th/music" } } }; }
export default async function Page({ params }) { const { locale } = await params; if (!landingLocales.includes(locale)) notFound(); return <LocalePageShell locale={locale}><CoreMusicPage locale={locale} /></LocalePageShell>; }
