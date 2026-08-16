import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl = "https://www.smmedilab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SM Medi Lab | Best Medical Lab in Jaffna, Sri Lanka",
    template: "%s | SM Medi Lab – Jaffna",
  },
  description:
    "SM Medi Lab is the best medical laboratory in Jaffna, Sri Lanka. Accurate blood tests, DNA analysis, urine tests & home sample collection. Fast digital reports. Book your test today.",
  keywords: [
    "best medical lab in jaffna",
    "best medical lab in sri lanka",
    "medical labs in jaffna",
    "blood test jaffna",
    "blood test sri lanka",
    "DNA test jaffna",
    "home sample collection jaffna",
    "urine test jaffna",
    "diagnostic lab jaffna",
    "sm medi lab",
    "smmedilab",
    "medical testing jaffna",
    "lab test jaffna",
    "health checkup jaffna",
    "Kondavil medical lab",
    "Jaffna diagnostic centre",
  ],
  authors: [{ name: "SM Medi Lab" }],
  creator: "SM Medi Lab",
  publisher: "SM Medi Lab",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: siteUrl,
    siteName: "SM Medi Lab",
    title: "SM Medi Lab | Best Medical Lab in Jaffna, Sri Lanka",
    description:
      "Accurate blood tests, DNA analysis & home sample collection in Jaffna. Fast digital reports from the most trusted medical lab in Sri Lanka.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "SM Medi Lab – Best Medical Laboratory in Jaffna Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SM Medi Lab | Best Medical Lab in Jaffna, Sri Lanka",
    description:
      "Accurate blood tests, DNA analysis & home sample collection in Jaffna. Fast digital reports.",
    images: ["/logo.svg"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico", sizes: "any"
      },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    "geo.region": "LK-N",
    "geo.placename": "Jaffna",
    "geo.position": "9.6615;80.0255",
    ICBM: "9.6615, 80.0255",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalOrganization", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "SM Medi Lab",
      alternateName: ["SM Medical Lab", "SM Medi Laboratory", "SMMediLab"],
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      image: `${siteUrl}/logo.svg`,
      description:
        "SM Medi Lab is the best medical laboratory in Jaffna, Sri Lanka, offering accurate blood tests, DNA analysis, urine tests and home sample collection with fast digital reports.",
      telephone: "+94777791229",
      email: "info@smmedilab.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "K.K.S Rd, Uppumada Junction, Kondavil",
        addressLocality: "Jaffna",
        addressRegion: "Northern Province",
        addressCountry: "LK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 9.6615,
        longitude: 80.0255,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "07:00",
          closes: "18:00",
        },
      ],
      sameAs: ["https://www.instagram.com/smmedilabsjaffna"],
      hasMap: "https://maps.google.com/?q=SM+Medi+Lab+Jaffna",
      priceRange: "$$",
      medicalSpecialty: [
        "Blood Tests",
        "DNA Analysis",
        "Urine Analysis",
        "Home Sample Collection",
        "Corporate Wellness",
        "Health Packages",
      ],
      areaServed: [
        { "@type": "City", name: "Jaffna" },
        { "@type": "Country", name: "Sri Lanka" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "SM Medi Lab",
      description: "Best Medical Laboratory in Jaffna, Sri Lanka",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} h-full antialiased`}
      style={{ overflowX: "hidden" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ touchAction: "manipulation", overflowX: "hidden", maxWidth: "100vw" }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
