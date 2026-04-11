"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export function Header() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navLinkClass =
    "relative px-[22px] h-[72px] flex items-center font-serif text-[12.5px] tracking-[0.16em] text-[#6b5b45] transition-colors duration-200 hover:text-[#2a2118] after:absolute after:bottom-0 after:left-[22px] after:right-[22px] after:h-[1.5px] after:bg-[#7c5c2e] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"

  const services = [
    {
      label: "Artificial grass",
      href: "/products-services/artificial-grass",
      description: "Premium synthetic turf solutions",
    },
    {
      label: "Artificial garden",
      href: "/products-services/artificial-garden",
      description: "Low-maintenance garden design",
    },
    {
      label: "Potted plants",
      href: "/products-services/potted-plants",
      description: "Curated indoor & outdoor flora",
    },
    {
      label: "Potted trees",
      href: "/products-services/potted-trees",
      description: "Statement trees for any space",
    },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(120,100,70,0.12)] bg-[rgba(250,249,245,0.92)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-8 h-[72px] grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4">

        {/* Brand + rule */}
        <div className="flex items-center gap-8 justify-self-start min-w-0">
          <Link href="/" className="flex flex-col gap-px shrink-0">
            <span className="font-serif text-[18px] tracking-[0.12em] uppercase text-[#2a2118]">
              Rich Haven
            </span>
            <span className="font-serif text-[9px] tracking-[0.28em] uppercase italic text-[#8a7660]">
              Botanical Artisans
            </span>
          </Link>
          <div className="hidden sm:block w-px h-7 bg-gradient-to-b from-transparent via-[rgba(120,100,70,0.2)] to-transparent shrink-0" />
        </div>

        {/* Nav — centered in header */}
        <nav className="hidden md:flex items-center justify-self-center">
          <Link href="/" className={navLinkClass}>Home</Link>
          <Link href="/about-page" className={navLinkClass}>About us</Link>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="relative px-[22px] h-[72px] flex items-center gap-[6px] font-serif text-[12.5px] tracking-[0.16em] text-[#6b5b45] transition-colors duration-200 hover:text-[#2a2118] bg-transparent border-none cursor-pointer after:absolute after:bottom-0 after:left-[22px] after:right-[22px] after:h-[1.5px] after:bg-[#7c5c2e] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Products & services
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              >
                <path d="M1 3L5 7L9 3" stroke="#8a7660" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-[calc(100%+1px)] left-1/2 -translate-x-1/2 w-[340px] transition-all duration-200 origin-top ${
                open
                  ? "opacity-100 scale-y-100 pointer-events-auto"
                  : "opacity-0 scale-y-95 pointer-events-none"
              }`}
            >
              {/* Top accent line */}
              <div className="h-[2px] bg-[#7c5c2e] mx-6 rounded-full" />

              <div className="bg-[rgba(250,249,245,0.98)] border border-[rgba(120,100,70,0.15)] border-t-0 shadow-[0_24px_56px_rgba(42,33,24,0.12)] p-3">

                {/* Service items */}
                <div className="grid grid-cols-2 gap-1.5">
                  {services.map(({ label, href, description }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="group flex flex-col gap-1 px-4 py-3.5 rounded-sm transition-all duration-200 hover:bg-[rgba(120,100,70,0.06)]"
                    >
                      <span className="font-serif text-[12px] tracking-[0.12em] text-[#2a2118] transition-colors duration-200 group-hover:text-[#7c5c2e]">
                        {label}
                      </span>
                      <span className="font-serif text-[10.5px] italic text-[#8a7660] leading-snug">
                        {description}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px my-3 bg-[rgba(120,100,70,0.1)]" />

                {/* Subtle footer CTA */}
                <Link
                  href="/products-services"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 group transition-all duration-200 hover:bg-[rgba(120,100,70,0.06)] rounded-sm"
                >
                  <span className="font-serif text-[10.5px] tracking-[0.18em] uppercase text-[#8a7660] transition-colors duration-200 group-hover:text-[#7c5c2e]">
                    View all services
                  </span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M2 6H10M7 3L10 6L7 9" stroke="#8a7660" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

              </div>
            </div>
          </div>

          <Link href="/portfolio-page" className={navLinkClass}>Portfolio</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact-page"
          className="justify-self-end shrink-0 font-serif text-[11px] tracking-[0.22em] uppercase text-[#e8dfc8] bg-[#2a2118] px-6 py-3 transition-colors duration-200 hover:bg-[#7c5c2e] whitespace-nowrap"
        >
          Get a quote
        </Link>

      </div>
    </header>
  )
}