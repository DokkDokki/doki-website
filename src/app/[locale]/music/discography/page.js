import DiscographyPage from "@/components/pages/en/DiscographyPage";
import { notFound } from "next/navigation";
import LocalePageShell from "@/components/site/LocalePageShell";
import { landingLocales } from "@/content/landing-translations";
import { discographyContent } from "@/content/legacy-page-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!landingLocales.includes(locale)) return {};
  const copy = discographyContent[locale] || discographyContent.en;
  return { title: copy.title, description: copy.intro, alternates: { canonical: `/${locale}/music/discography`, languages: { en: "/en/music/discography", ja: "/jp/music/discography", th: "/th/music/discography" } } };
}

export default async function Page({ params }) {
  const { locale } = await params;
  if (!landingLocales.includes(locale)) notFound();
  return <LocalePageShell locale={locale}><DiscographyPage locale={locale} /></LocalePageShell>;
}
