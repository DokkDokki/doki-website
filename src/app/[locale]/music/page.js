import MusicPage from "@/components/pages/en/MusicPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default function Page() {
  return <MusicPage />;
}
