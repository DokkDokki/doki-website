import { notFound } from "next/navigation";
import DokiProfilePage from "@/components/pages/DokiProfilePage";
import LocalePageShell from "@/components/site/LocalePageShell";
import { landingLocales } from "@/content/landing-translations";

export const dynamicParams = false;

export function generateStaticParams() { return landingLocales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }) { const { locale } = await params; return { title: "Doki", description: "Doki — a personal story of engineering, photography, trains, and music.", alternates: { canonical: `/${locale}/doki`, languages: { en: "/en/doki", ja: "/jp/doki", th: "/th/doki" } } }; }
export default async function Page({ params }) { const { locale } = await params; if (!landingLocales.includes(locale)) notFound(); return <LocalePageShell locale={locale}><DokiProfilePage locale={locale} /></LocalePageShell>; }
