import Link from "next/link"
import { Mail, Phone, MapPin, Leaf } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="w-full border-t"
      style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
    >
      <div className="w-full px-10 pt-16 pb-10">

        {/* Eyebrow rule */}
        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 h-px bg-border" />
          <div className="flex items-center gap-2.5">
            <Leaf className="w-3.5 h-3.5 text-green-700 opacity-60" strokeWidth={1.2} />
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60 whitespace-nowrap">
              Est. in the Philippines
            </span>
            <Leaf className="w-3.5 h-3.5 text-green-700 opacity-60 scale-x-[-1]" strokeWidth={1.2} />
          </div>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-[2fr_1px_1fr_1px_1fr] gap-x-12 mb-16">

          {/* Brand */}
          <div>
            <h2
              className="text-[28px] font-light italic text-foreground mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.01em" }}
            >
              Rich Haven Enterprises
            </h2>
            <p className="text-[13px] leading-[1.8] text-muted-foreground mb-8 max-w-[280px]">
              Premium artificial grass and landscaping solutions that bring
              natural beauty with zero maintenance.
            </p>
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-px bg-green-700 opacity-60" />
              <span className="text-[11px] uppercase tracking-[0.16em] text-green-800 dark:text-green-500 opacity-80">
                Crafted with care
              </span>
              <div className="w-6 h-px bg-green-700 opacity-60" />
            </div>
          </div>

          {/* Vertical rule */}
          <div className="bg-border self-stretch" />

          {/* Nav */}
          <div>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60 mb-6">
              Navigation
            </span>
            <ul className="flex flex-col gap-4">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[14px] font-light tracking-wide text-muted-foreground hover:text-green-700 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical rule */}
          <div className="bg-border self-stretch" />

          {/* Contact */}
          <div>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60 mb-6">
              Get in touch
            </span>
            <div className="flex flex-col gap-[1.1rem]">
              {[
                { Icon: Mail, text: "hello@richhaven.com" },
                { Icon: Phone, text: "+63 912 345 6789" },
                { Icon: MapPin, text: "Philippines" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-2.5">
                  <Icon className="w-[13px] h-[13px] mt-0.5 shrink-0 text-green-600 opacity-80" strokeWidth={1.4} />
                  <span className="text-[13px] text-muted-foreground font-light tracking-wide leading-relaxed">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t pt-7 flex items-center justify-between flex-wrap gap-4">
          <p className="text-[11px] tracking-[0.08em] text-muted-foreground/60">
            © {new Date().getFullYear()} &nbsp;
            <em
              className="text-[13px] text-muted-foreground not-italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Rich Haven Enterprises
            </em>
          </p>
          <div className="flex gap-8">
            {["Privacy", "Terms"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground/60 hover:text-green-700 transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}