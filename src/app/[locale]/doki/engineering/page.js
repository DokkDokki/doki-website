import { notFound } from "next/navigation";
import EngineeringProfilePage from "@/components/pages/EngineeringProfilePage";
import LocalePageShell from "@/components/site/LocalePageShell";
import { landingLocales } from "@/content/landing-translations";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!landingLocales.includes(locale)) return {};
  return {
    title: "Engineering Profile",
    description: "Doki's professional Digital Engineering profile.",
    alternates: { canonical: `/${locale}/doki/engineering`, languages: { en: "/en/doki/engineering", ja: "/jp/doki/engineering", th: "/th/doki/engineering" } },
  };
}

export default async function Page({ params }) {
  const { locale } = await params;
  if (!landingLocales.includes(locale)) notFound();
  return <LocalePageShell locale={locale}><EngineeringProfilePage locale={locale} /></LocalePageShell>;
}
