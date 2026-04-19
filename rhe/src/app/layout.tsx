import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PageWrapper from "@/components/PageWrapper"
import "./globals.css"

export const metadata = {
  title: "Rich Haven Artificial Garden",
  icons: {
    icon: "/Favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
        <Header />

        {/* Pages render their own <main>; a wrapper <main> here caused nested mains and broken flex layout */}
        <PageWrapper>{children}</PageWrapper>

        <Footer />
      </body>
    </html>
  )
}