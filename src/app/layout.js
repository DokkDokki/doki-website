import { Kanit, Quicksand, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/motion/MotionProvider";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const kanit = Kanit({
  subsets: ["thai"],
  weight: "300",
  variable: "--font-thai",
  display: "swap",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-japanese",
  display: "swap",
});

const siteUrl = "https://dokimachine.net";
const siteTitle = "Doki / DOKIMACHINE";
const siteDescription =
  "A personal portfolio of engineering, photography, and electronic music.";
const ogImage = "/og.png";
const siteIcon = "/images/brand/doki_iconrima_square_transparent.png";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  icons: {
    icon: [{ url: siteIcon, type: "image/png" }],
    apple: [{ url: siteIcon, type: "image/png" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [{ url: ogImage, width: 1731, height: 909, alt: "Doki / DOKIMACHINE — systems, moments, sound" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
    creator: "@dokimachine",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${quicksand.variable} ${kanit.variable} ${zenKakuGothicNew.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
