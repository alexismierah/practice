import type { ReactNode } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PageWrapper from "@/components/PageWrapper"
import "./globals.css"

export const metadata = {
  title: {
    default: "Rich Haven Artificial Garden",
    template: "%s | Rich Haven Artificial Garden",
  },
  description: "Premium artificial grass, potted plants, wall greens, and planter boxes for homes and commercial spaces.",
  applicationName: "Rich Haven Artificial Garden",
  metadataBase: new URL("https://www.richhaven.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Rich Haven Artificial Garden",
    title: "Rich Haven Artificial Garden",
    description: "Premium artificial grass, potted plants, wall greens, and planter boxes for homes and commercial spaces.",
    url: "https://www.richhaven.net",
  },
  icons: {
    icon: "/logo.png",
  },
  verification: {
    google: "PuCdyAV9rZAsvCJthrAjBamLmVtMthayKz0zfCX8eNM",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Rich Haven Artificial Garden",
              url: "https://www.richhaven.net/",
            }),
          }}
        />
      </head>

      <body className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
        <Header />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  )
}