import { Noto_Sans_Thai, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-thai",
  display: "swap",
});

const siteUrl = "https://dokimachine.net";
const siteTitle = "DOKIMACHINE";
const siteDescription =
  "The Split Reality Portfolio of a Digital Engineer, Vocaloid-P, and Trance Producer.";
const ogImage = "/images/brand/doki_iconrima_square.jpg";
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
    images: [{ url: ogImage, width: 800, height: 800, alt: siteTitle }],
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
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${notoSansThai.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
