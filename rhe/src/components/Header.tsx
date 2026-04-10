import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <h1 className="text-lg font-semibold tracking-tight [font-family:var(--font-playfair)]">
          Rich Haven
        </h1>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          <a href="/" className="hover:text-green-600 transition">
            Home
          </a>
          <a href="/about" className="hover:text-green-600 transition">
            About Us
          </a>
          <a href="/portfolio" className="hover:text-green-600 transition">
            Portfolio
          </a>
        </nav>

        {/* CTA */}
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          Get Quote
        </Button>

      </div>
    </header>
  )
}