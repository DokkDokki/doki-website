import { notFound } from "next/navigation";
import CoreDokiPage from "@/components/pages/CoreDokiPage";
import { landingLocales } from "@/content/landing-translations";

export const dynamicParams = false;

export function generateStaticParams() { return landingLocales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }) { const { locale } = await params; return { title: "Doki", description: "Doki - engineering, photography, music, and life.", alternates: { canonical: `/${locale}/doki`, languages: { en: "/en/doki", ja: "/jp/doki", th: "/th/doki" } } }; }
export default async function Page({ params }) { const { locale } = await params; if (!landingLocales.includes(locale)) notFound(); return <CoreDokiPage locale={locale} />; }
