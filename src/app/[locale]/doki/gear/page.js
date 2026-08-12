import GearPage from "@/components/pages/en/GearPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default function Page() {
  return <GearPage />;
}
