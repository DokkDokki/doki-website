import PhotographyPage from "@/components/pages/en/PhotographyPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default function Page() {
  return <PhotographyPage />;
}
