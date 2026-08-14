"use client";

import { LandingLocaleProvider } from "@/components/landing/LandingLocaleProvider";

export default function LandingExperience({ children, locale }) {
  return <LandingLocaleProvider locale={locale}>{children}</LandingLocaleProvider>;
}
