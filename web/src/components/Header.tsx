"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const serviceLinks = [
  { href: "/services/structured-cabling", label: "Structured Cabling",       category: "Infrastructure" },
  { href: "/services/network-security",   label: "Network & Security",        category: "Infrastructure" },
  { href: "/services/cctv",               label: "CCTV Surveillance System",  category: "Security" },
  { href: "/services/access-control",     label: "Access Control System",     category: "Security" },
  { href: "/services/video-intercom",     label: "Video Intercom",            category: "Security" },
  { href: "/services/ip-pbx",             label: "IP-PBX Telephone System",   category: "Communications" },
  { href: "/services/public-address",     label: "Public Addressing System",  category: "Communications" },
  { href: "/services/conference",         label: "Conference System",         category: "Communications" },
  { href: "/services/parking",            label: "Parking System",            category: "Operations" },
  { href: "/services/led-display",        label: "LED Display",               category: "Operations" },
  { href: "/services/solar",              label: "Solar Power",               category: "Energy" },
  { href: "/services/ups",                label: "UPS",                       category: "Energy" },
]

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const categories = [...new Set(serviceLinks.map(s => s.category))]
  const filtered = activeCategory
    ? serviceLinks.filter(s => s.category === activeCategory)
    : serviceLinks

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        :root {
          --blue:      #3a89dd;
          --blue-dark: #2263a8;
          --blue-lt:   #ddeeff;
          --ink:       #0d1117;
          --ink-2:     #2d3748;
          --ink-3:     #718096;
          --border:    rgba(13,17,23,0.08);
        }

        .hdr {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          font-family: 'Outfit', sans-serif;
          background: #fff;
          /* Remove border-bottom when open so header and dropdown merge */
          border-bottom: 1px solid var(--border);
          box-shadow: 0 1px 16px rgba(13,17,23,0.06);
          transition: box-shadow 0.2s;
        }
        .hdr.menu-open {
          border-bottom-color: transparent;
          box-shadow: none;
        }

        .hdr-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .hdr-logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .hdr-logo-image {
          display: block;
          height: 68px;
          width: auto;
          max-width: 380px;
        }

        .hdr-nav {
          display: flex;
          align-items: center;
          gap: 0.125rem;
          flex: 1;
          justify-content: flex-end;
        }

        .hdr-link {
          position: relative;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--ink-2);
          text-decoration: none;
          transition: color 0.15s;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .hdr-link::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 14px; right: 14px;
          height: 1.5px;
          background: var(--blue);
          transform: scaleX(0);
          transition: transform 0.2s ease;
          border-radius: 1px;
        }
        .hdr-link:hover { color: var(--ink); }
        .hdr-link:hover::after { transform: scaleX(1); }

        .hdr-dropdown-wrap { position: relative; }

        .hdr-services-btn {
          position: relative;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--ink-2);
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.15s;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .hdr-services-btn::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 14px; right: 24px;
          height: 1.5px;
          background: var(--blue);
          transform: scaleX(0);
          transition: transform 0.2s ease;
          border-radius: 1px;
        }
        .hdr-services-btn:hover,
        .hdr-services-btn.open { color: var(--ink); }
        .hdr-services-btn.open::after,
        .hdr-services-btn:hover::after { transform: scaleX(1); }

        .hdr-chevron {
          opacity: 0.45;
          transition: transform 0.22s ease, opacity 0.15s;
          flex-shrink: 0;
        }
        .hdr-services-btn.open .hdr-chevron { transform: rotate(180deg); opacity: 0.8; }

        /* ── Mega dropdown — seamlessly attached to header ── */
        .hdr-dropdown {
          position: fixed;
          top: 70px;
          left: 0; right: 0;
          background: #fff;
          /* Top border matches header bottom so they merge visually */
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 16px 48px rgba(13,17,23,0.12);
          opacity: 0;
          pointer-events: none;
          transform: translateY(-8px);
          transition: opacity 0.2s ease, transform 0.2s ease;
          z-index: 99;
        }
        .hdr-dropdown.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        .hdr-dd-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Filter row */
        .hdr-dd-cats {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 1rem 0 0.875rem;
          border-bottom: 1px solid var(--border);
        }
        .hdr-dd-cats-label {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-right: 4px;
          white-space: nowrap;
        }
        .hdr-dd-cat {
          font-size: 0.78rem;
          font-weight: 400;
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid transparent;
          cursor: pointer;
          background: none;
          font-family: 'Outfit', sans-serif;
          color: var(--ink-3);
          transition: all 0.13s;
          white-space: nowrap;
        }
        .hdr-dd-cat:hover { background: rgba(13,17,23,0.04); color: var(--ink-2); }
        .hdr-dd-cat.active {
          background: var(--blue);
          color: #fff;
          border-color: var(--blue);
        }

        /* Service grid — more rows, more breathing room */
        .hdr-dd-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 2px;
          padding: 1rem 0 1.25rem;
        }
        .hdr-dd-item {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 12px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.13s;
        }
        .hdr-dd-item:hover { background: #f0f7ff; }
        .hdr-dd-item:hover .hdr-dd-dot { background: var(--blue); transform: scale(1.4); }
        .hdr-dd-item:hover .hdr-dd-lbl { color: var(--blue-dark); }
        .hdr-dd-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #cbd5e0;
          flex-shrink: 0;
          transition: background 0.13s, transform 0.13s;
        }
        .hdr-dd-lbl {
          font-size: 0.84rem;
          font-weight: 400;
          color: var(--ink-2);
          transition: color 0.13s;
          line-height: 1.3;
        }

        /* Footer strip */
        .hdr-dd-footer {
          border-top: 1px solid var(--border);
          padding: 0.75rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .hdr-dd-footer-text {
          font-size: 0.8rem;
          color: var(--ink-3);
        }
        .hdr-dd-viewall {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--blue);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 12px;
          border-radius: 20px;
          background: var(--blue-lt);
          transition: background 0.15s, gap 0.15s;
        }
        .hdr-dd-viewall:hover { background: #c8e2f8; gap: 7px; }

        /* Right / CTA */
        .hdr-right { display: flex; align-items: center; gap: 0.5rem; }

        .hdr-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--blue);
          color: #fff;
          padding: 9px 18px;
          border-radius: 9px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(58,137,221,0.3);
        }
        .hdr-cta:hover {
          background: var(--blue-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(58,137,221,0.4);
        }
        .hdr-cta:active { transform: translateY(0); }

        /* Mobile toggle */
        .hdr-mobile-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 7px;
          color: var(--ink);
          border-radius: 8px;
          transition: background 0.15s;
        }
        .hdr-mobile-btn:hover { background: rgba(13,17,23,0.06); }

        /* Mobile menu */
        .hdr-mobile {
          display: none;
          flex-direction: column;
          background: #fff;
          border-top: 1px solid var(--border);
          padding: 1rem 1.5rem 2rem;
          gap: 2px;
          max-height: 80vh;
          overflow-y: auto;
        }
        .hdr-mobile.open { display: flex; }

        .hdr-mobile-link {
          font-size: 0.9375rem;
          color: var(--ink-2);
          text-decoration: none;
          padding: 10px 12px;
          border-radius: 9px;
          transition: background 0.13s, color 0.13s;
          font-family: 'Outfit', sans-serif;
        }
        .hdr-mobile-link:hover { background: #f0f7ff; color: var(--blue-dark); }

        .hdr-mobile-section {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue);
          padding: 16px 12px 6px;
          font-family: 'Outfit', sans-serif;
        }

        .hdr-mobile-cta {
          margin-top: 1rem;
          background: var(--blue);
          color: #fff;
          text-align: center;
          padding: 13px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s;
          font-family: 'Outfit', sans-serif;
        }
        .hdr-mobile-cta:hover { background: var(--blue-dark); }

        @media (max-width: 1024px) {
          .hdr-dd-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 900px) {
          .hdr-nav { display: none; }
          .hdr-mobile-btn { display: flex; }
        }
        @media (max-width: 480px) {
          .hdr-inner { padding: 0 1.25rem; }
        }
      `}</style>

      <header className={`hdr${servicesOpen ? " menu-open" : ""}`}>
        <div className="hdr-inner">

          <Link href="/" className="hdr-logo">
            <img src="/logo.png" alt="UNIFIX ICT Solutions logo" className="hdr-logo-image" />
          </Link>

          <nav className="hdr-nav">
            <Link href="/" className="hdr-link">Home</Link>
            <Link href="/about" className="hdr-link">About</Link>

            <div className="hdr-dropdown-wrap" ref={dropdownRef}>
              <button
                className={`hdr-services-btn${servicesOpen ? " open" : ""}`}
                onClick={() => setServicesOpen(v => !v)}
                aria-expanded={servicesOpen}
              >
                Services
                <svg className="hdr-chevron" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 4.5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`hdr-dropdown${servicesOpen ? " open" : ""}`} role="menu">
                <div className="hdr-dd-inner">

                  <div className="hdr-dd-cats">
                    <span className="hdr-dd-cats-label">Filter:</span>
                    <button
                      className={`hdr-dd-cat${activeCategory === null ? " active" : ""}`}
                      onClick={() => setActiveCategory(null)}
                    >All</button>
                    {categories.map(cat => (
                      <button
                        key={cat}
                        className={`hdr-dd-cat${activeCategory === cat ? " active" : ""}`}
                        onClick={() => setActiveCategory(c => c === cat ? null : cat)}
                      >{cat}</button>
                    ))}
                  </div>

                  <div className="hdr-dd-grid">
                    {filtered.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className="hdr-dd-item"
                        onClick={() => { setServicesOpen(false); setActiveCategory(null) }}
                        role="menuitem"
                      >
                        <span className="hdr-dd-dot" />
                        <span className="hdr-dd-lbl">{label}</span>
                      </Link>
                    ))}
                  </div>

                  <div className="hdr-dd-footer">
                    <span className="hdr-dd-footer-text">Not sure what you need? We can help.</span>
                    <Link href="/services" className="hdr-dd-viewall" onClick={() => setServicesOpen(false)}>
                      View all services →
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </nav>

          <div className="hdr-right">
            <Link href="#footer" className="hdr-cta">Request a Quote</Link>
            <button
              className="hdr-mobile-btn"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3 6.5h16M3 11h16M3 15.5h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`hdr-mobile${mobileOpen ? " open" : ""}`}>
          <Link href="/" className="hdr-mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about" className="hdr-mobile-link" onClick={() => setMobileOpen(false)}>About</Link>
          <div className="hdr-mobile-section">Services</div>
          {serviceLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hdr-mobile-link" onClick={() => setMobileOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="hdr-mobile-cta" onClick={() => setMobileOpen(false)}>
            Get in Touch
          </Link>
        </div>
      </header>
    </>
  )
}