import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import LandingExperience from "@/components/LandingExperience";
import SplitHero from "@/components/SplitHero";
import LandingShowcase from "@/components/LandingShowcase";
import { landingLocales } from "@/lib/landing-translations";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!landingLocales.includes(locale)) return {};

  return {
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ja: "/jp",
        th: "/th",
      },
    },
  };
}

export default async function LocalizedHome({ params }) {
  const { locale } = await params;
  if (!landingLocales.includes(locale)) notFound();

  return (
    <LandingExperience locale={locale}>
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500/30">
        <main>
          <SplitHero />
          <LandingShowcase />
        </main>

        <Footer />
      </div>
    </LandingExperience>
  );
}
