"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <h1 className="text-lg font-semibold tracking-tight [font-family:var(--font-playfair)]">
          Rich Haven
        </h1>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground relative">

          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-green-600 transition">
            About Us
          </Link>

          {/* DROPDOWN (CLICK ONLY) */}
          <div className="relative">

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:text-green-600 transition"
            >
              Products & Services

              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute top-8 left-0 w-60 bg-white dark:bg-background border rounded-lg shadow-md p-2 space-y-1">

                <Link
                  href="/products-services/artificial-grass"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-muted rounded"
                >
                  Artificial Grass
                </Link>

                <Link
                  href="/products-services/artificial-garden"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-muted rounded"
                >
                  Artificial Garden
                </Link>

                <Link
                  href="/products-services/potted-plants"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-muted rounded"
                >
                  Potted Plants
                </Link>

                <Link
                  href="/products-services/potted-trees"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-green-50 dark:hover:bg-muted rounded"
                >
                  Potted Trees
                </Link>

                <div className="border-t my-2" />

                <Link href="/products-services" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    View All Services
                  </Button>
                </Link>

              </div>
            )}
          </div>

          <Link href="/portfolio" className="hover:text-green-600 transition">
            Portfolio
          </Link>

        </nav>

        {/* CTA */}
        <Link href="/contact">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Get Quote
          </Button>
        </Link>

      </div>
    </header>
  )
}