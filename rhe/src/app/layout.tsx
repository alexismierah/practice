import Header from "@/components/Header"
import {Footer} from "@/components/Footer"
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
        <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col pt-[78px]">{children}</div>

        <Footer />
      </body>
    </html>
  )
}