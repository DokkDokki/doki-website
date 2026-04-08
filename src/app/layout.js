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

export const metadata = {
  title: "DOKIMACHINE",
  description: "The Split Reality Portfolio of a Digital Engineer, Vocaloid-P, and Trance Producer.",
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
