import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://shyamsarkarrealestate.com"),
  title: {
    default: "Shyam Sarkar Real Estate Pvt. Ltd. | Premium Property Solutions in Jhansi",
    template: "%s | Shyam Sarkar Real Estate",
  },
  description:
    "Trusted real estate services in Jhansi - Property buying, selling, investment, residential & commercial properties, land deals. Contact Ghanshyam Kushwaha for expert guidance.",
  keywords: [
    "real estate jhansi",
    "property jhansi",
    "buy property jhansi",
    "sell property jhansi",
    "land plots jhansi",
    "commercial property jhansi",
    "ghanshyam kushwaha",
    "shyam sarkar real estate",
  ],
  authors: [{ name: "Ghanshyam Kushwaha" }],
  creator: "Shyam Sarkar Real Estate Pvt. Ltd.",
  publisher: "Shyam Sarkar Real Estate Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Shyam Sarkar Real Estate Pvt. Ltd.",
    description: "Your trusted partner for all real estate needs in Jhansi and nearby areas.",
    url: "https://shyamsarkarrealestate.com",
    siteName: "Shyam Sarkar Real Estate",
    images: [
      {
        url: "logo.png", // Relative path works with metadataBase
        width: 800,
        height: 600,
        alt: "Shyam Sarkar Real Estate Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shyam Sarkar Real Estate Pvt. Ltd.",
    description: "Your trusted partner for all real estate needs in Jhansi and nearby areas.",
    images: ["logo.png"],
    creator: "@shyamsarkar", // Placeholder if not known
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Shyam Sarkar Real Estate Pvt. Ltd.",
  image: "https://shyamsarkarrealestate.com/logo.png",
  description:
    "Trusted real estate services in Jhansi - Property buying, selling, investment, residential & commercial properties.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Medical College",
    addressLocality: "Jhansi",
    addressRegion: "Uttar Pradesh",
    postalCode: "284001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.4484, // Approximate coords for Jhansi
    longitude: 78.5685,
  },
  url: "https://shyamsarkarrealestate.com",
  telephone: "+919876543210", // Placeholder
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
}

export const viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
