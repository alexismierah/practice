import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

export const metadata = {
  title: "Home",
  icons: {
    icon: "/Favicon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <Header />

        <main className="flex-1 mt-4">{children}</main>

        <Footer />
      </body>
    </html>
  )
}