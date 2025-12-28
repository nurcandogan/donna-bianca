import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import '../App.css'


const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Donna Bianca - Gelinlik & Abiye",
  description: "Hayalinizdeki gelinliği Donna Bianca'da bulun. Zarif ve özel tasarım gelinlikler.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
