import { Kanit, Noto_Sans_JP, Quicksand } from "next/font/google";
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

const notoSansJp = Noto_Sans_JP({
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
const siteIcon = "/images/brand/doki-icon-512.png";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: siteIcon, type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
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
    <html lang="en" data-scroll-behavior="smooth" className={`${quicksand.variable} ${kanit.variable} ${notoSansJp.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
