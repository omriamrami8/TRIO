import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Frank_Ruhl_Libre, Heebo } from "next/font/google";
import "./globals.css";
import { CONTACT } from "@/content/site";

const display = Frank_Ruhl_Libre({
  variable: "--font-display",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "700", "900"],
});
const sans = Heebo({ variable: "--font-sans", subsets: ["hebrew", "latin"] });
const latin = Cormorant_Garamond({
  variable: "--font-latin",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TRIO BAR | בר קוקטיילים לאירועים עסקיים, השקות וחתונות שטח",
    template: "%s | TRIO BAR",
  },
  description:
    "טריו בר: שירותי בר קוקטיילים יוקרתיים לאירועי חברה, השקות, אירועים עסקיים וחתונות שטח בכל רחבי הארץ. צוות מקצועי, תפריט אישי ועיצוב מוקפד.",
  keywords: [
    "בר קוקטיילים לאירועים",
    "בר נייד לאירועים",
    "בר לאירועי חברה",
    "בר להשקה",
    "בר לחתונת שטח",
    "שירותי בר",
    "ברמנים לאירועים",
  ],
  openGraph: {
    locale: "he_IL",
    type: "website",
    siteName: "TRIO BAR",
    images: ["/images/logo-full.png"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#1d1511",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: "TRIO BAR",
  description: "שירותי בר קוקטיילים יוקרתיים לאירועים עסקיים, השקות, אירועי חברה וחתונות שטח.",
  url: SITE_URL,
  telephone: "+972525218583",
  email: CONTACT.email,
  areaServed: { "@type": "Country", name: "Israel" },
  image: `${SITE_URL}/images/logo-full.png`,
  sameAs: [CONTACT.instagramUrl],
  priceRange: "$$$",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${display.variable} ${sans.variable} ${latin.variable} antialiased`}>
        <a href="#main" className="skip-link">
          דלג לתוכן הראשי
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
