import DiscographyPage from "@/components/pages/en/DiscographyPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default function Page() {
  return <DiscographyPage />;
}
