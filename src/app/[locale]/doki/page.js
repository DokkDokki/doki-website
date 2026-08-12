import DokiPage from "@/components/pages/en/DokiPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default function Page() {
  return <DokiPage />;
}
