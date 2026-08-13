import { notFound } from "next/navigation";
import CorePhotographyPage from "@/components/pages/CorePhotographyPage";
import LocalePageShell from "@/components/site/LocalePageShell";
import { landingLocales } from "@/content/landing-translations";

export const dynamicParams = false;

export function generateStaticParams() { return landingLocales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }) { const { locale } = await params; return { title: "Photography", description: "Photography by Doki: Japanese rail, street scenes, and cosplay.", alternates: { canonical: `/${locale}/photography`, languages: { en: "/en/photography", ja: "/jp/photography", th: "/th/photography" } } }; }
export default async function Page({ params }) { const { locale } = await params; if (!landingLocales.includes(locale)) notFound(); return <LocalePageShell locale={locale}><CorePhotographyPage locale={locale} /></LocalePageShell>; }
