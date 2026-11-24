import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { UtilityBar } from "@/components/UtilityBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DisclaimerModal } from "@/components/DisclaimerModal";
import { FloatingContact } from "@/components/FloatingContact";
import { JsonLd } from "@/components/JsonLd";
import { firm } from "@/data/site";
import { organizationSchema } from "@/lib/jsonld";

const display = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-display", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(firm.siteUrl),
  title: { default: `${firm.name} | ${firm.tagline}`, template: `%s | ${firm.name}` },
  description: `${firm.name}: ${firm.tagline} in ${firm.city}, ${firm.region}.`,
  openGraph: { siteName: firm.name, locale: "en_IN", type: "website" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1628" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`}>
      <head>
        {/* Enables scroll-reveal / disclaimer only when JavaScript is available; remembers acceptance */}
        <script dangerouslySetInnerHTML={{ __html: "var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('saa-disclaimer-accepted')==='yes')d.classList.add('saa-ok')}catch(e){}" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <UtilityBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingContact />
        <DisclaimerModal />
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
