import GearPage from "@/components/pages/en/GearPage";
import { notFound } from "next/navigation";
import LocalePageShell from "@/components/site/LocalePageShell";
import { landingLocales } from "@/content/landing-translations";
import { gearContent } from "@/content/legacy-page-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!landingLocales.includes(locale)) return {};
  const copy = gearContent[locale] || gearContent.en;
  return { title: copy.meta.title, description: copy.meta.description, alternates: { canonical: `/${locale}/doki/gear`, languages: { en: "/en/doki/gear", ja: "/jp/doki/gear", th: "/th/doki/gear" } } };
}

export default async function Page({ params }) {
  const { locale } = await params;
  if (!landingLocales.includes(locale)) notFound();
  return <LocalePageShell locale={locale}><GearPage locale={locale} /></LocalePageShell>;
}
