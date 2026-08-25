import { notFound } from "next/navigation";
import DokiBiographyPage from "@/components/pages/DokiBiographyPage";
import LocalePageShell from "@/components/site/LocalePageShell";
import { landingLocales } from "@/content/landing-translations";
import { dokiBiographyContent } from "@/content/doki-biography-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!landingLocales.includes(locale)) return {};
  const copy = dokiBiographyContent[locale] || dokiBiographyContent.en;
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      canonical: `/${locale}/doki/biography`,
      languages: {
        en: "/en/doki/biography",
        ja: "/jp/doki/biography",
        th: "/th/doki/biography",
      },
    },
  };
}

export default async function Page({ params }) {
  const { locale } = await params;
  if (!landingLocales.includes(locale)) notFound();
  return (
    <LocalePageShell locale={locale}>
      <DokiBiographyPage locale={locale} />
    </LocalePageShell>
  );
}
