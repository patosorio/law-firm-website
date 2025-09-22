import type React from "react"
import type { Metadata } from "next"
import { GFS_Didot, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const gfsDidot = GFS_Didot({
  subsets: ["greek"],
  variable: "--font-gfs-didot",
  weight: "400",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["200", "300", "400"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Abogado Gentile – Immigration & Debt Relief Lawyers in Barcelona",
  description:
    "Trusted legal support for expatriates, entrepreneurs, and individuals seeking a fresh start in Spain. Specialists in immigration law and Second Chance Law.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/logos/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logos/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/logos/favicon/favicon-128x128.png", sizes: "128x128", type: "image/png" },
    ],
    apple: [
      { url: "/logos/favicon/favicon-196x196.png", sizes: "196x196", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${gfsDidot.variable} ${inter.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
