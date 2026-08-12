import { Nunito_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({ 
  subsets: ["latin"], 
  display: "swap", 
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const siteUrl = "https://dokimachine.net";
const siteTitle = "DOKIMACHINE";
const siteDescription = "DOKIMACHINE is currently rebuilding. The next transmission will arrive soon.";
const ogImage = "/doki_iconrima_square.jpg";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteTitle} — Under Construction`,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  icons: {
    icon: ogImage,
    apple: ogImage,
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
    <html lang="en" className={`${nunitoSans.variable} ${montserrat.variable}`}>
      <body style={{ fontFamily: "var(--font-nunito), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
