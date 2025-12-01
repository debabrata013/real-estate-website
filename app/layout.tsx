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
  title: "Shyam Sarkar Real Estate Pvt. Ltd. | Premium Property Solutions in Jhansi",
  description:
    "Trusted real estate services in Jhansi - Property buying, selling, investment, residential & commercial properties, land deals, and rental services. Contact Ghanshyam Kushwaha for expert guidance.",
  keywords:
    "real estate jhansi, property jhansi, buy property jhansi, sell property jhansi, land plots jhansi, rental jhansi, commercial property jhansi",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Shyam Sarkar Real Estate Pvt. Ltd.",
    description: "Your trusted partner for all real estate needs in Jhansi and nearby areas.",
    type: "website",
  },
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
        <Analytics />
      </body>
    </html>
  )
}
