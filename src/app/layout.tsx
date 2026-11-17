import type { Metadata, Viewport } from "next";
import { Frank_Ruhl_Libre, Heebo } from "next/font/google";
import "./globals.css";

const display = Frank_Ruhl_Libre({
  variable: "--font-display",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "700", "900"],
});

const sans = Heebo({
  variable: "--font-sans",
  subsets: ["hebrew", "latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "בר קוקטיילים לאירועים עסקיים וחתונות שטח | TRIO",
    template: "%s | TRIO",
  },
  description:
    "שירותי בר קוקטיילים יוקרתיים לאירועי חברה, השקות, אירועי הייטק וחתונות שטח בכל רחבי הארץ.",
  openGraph: { locale: "he_IL", type: "website", siteName: "TRIO" },
};

export const viewport: Viewport = {
  themeColor: "#0b0907",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        <a href="#main" className="skip-link">
          דלג לתוכן הראשי
        </a>
        {children}
      </body>
    </html>
  );
}
