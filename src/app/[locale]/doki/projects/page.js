import { notFound } from "next/navigation";
import ProjectsPage from "@/components/pages/ProjectsPage";
import LocalePageShell from "@/components/site/LocalePageShell";
import { landingLocales } from "@/content/landing-translations";
import { projectContent } from "@/content/legacy-page-content";

export const dynamicParams = false;

export function generateStaticParams() { return landingLocales.map((locale) => ({ locale })); }

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!landingLocales.includes(locale)) return {};
  const copy = projectContent[locale] || projectContent.en;
  return { title: copy.meta.title, description: copy.meta.description, alternates: { canonical: `/${locale}/doki/projects`, languages: { en: "/en/doki/projects", ja: "/jp/doki/projects", th: "/th/doki/projects" } } };
}

export default async function Page({ params }) {
  const { locale } = await params;
  if (!landingLocales.includes(locale)) notFound();
  return <LocalePageShell locale={locale}><ProjectsPage locale={locale} /></LocalePageShell>;
}
