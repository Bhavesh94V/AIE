import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "AIE - Accountancy Institute of Education",
  description:
    "Premier coaching institute for Commerce, CA Foundation, and academic excellence with 25+ years of experience",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${poppins.variable} antialiased`}>
        <Providers>
          <SmoothScroll />
          <Navigation />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  )
}
