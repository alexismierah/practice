import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-background to-green-50/30 dark:to-green-950/20">
      <div className="mx-auto max-w-7xl px-6 py-14">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold [font-family:var(--font-playfair)]">
              Rich Haven Enterprises
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Premium artificial grass and landscaping solutions that bring
              natural beauty with zero maintenance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Pages
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-green-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-green-600 transition">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-600" />
                hello@richhaven.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-600" />
                +63 912 345 6789
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                Philippines
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">

          <p>© {new Date().getFullYear()} Rich Haven Enterprises</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-green-600 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-600 transition">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}