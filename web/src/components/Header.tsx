"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const serviceLinks = [
  { href: "/services/structured-cabling", label: "Structured Cabling",  category: "Infrastructure" },
  { href: "/services/cctv",               label: "CCTV Systems",         category: "Security" },
  { href: "/services/ip-pbx",             label: "IP-PBX System",        category: "Communications" },
  { href: "/services/access-control",     label: "Access Control",       category: "Security" },
  { href: "/services/public-address",     label: "Public Address",       category: "Communications" },
  { href: "/services/network-security",   label: "Network & Security",   category: "Infrastructure" },
  { href: "/services/conference",         label: "Conference System",    category: "Communications" },
  { href: "/services/parking",            label: "Parking System",       category: "Operations" },
  { href: "/services/solar",              label: "Solar Power",          category: "Energy" },
  { href: "/services/ups",                label: "UPS",                  category: "Energy" },
  { href: "/services/led-display",        label: "LED Display",          category: "Operations" },
  { href: "/services/video-intercom",     label: "Video Intercom",       category: "Security" },
]

export default function Header() {
  const [scrolled, setScrolled]         = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const dropdownRef                      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const categories = [...new Set(serviceLinks.map(s => s.category))]
  const filtered = activeCategory ? serviceLinks.filter(s => s.category === activeCategory) : serviceLinks

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --blue:      #3a89dd;
          --blue-dark: #2263a8;
          --blue-lt:   #ddeeff;
          --ink:       #0d1117;
          --ink-2:     #2d3748;
          --ink-3:     #718096;
          --surface:   #ffffff;
          --border:    rgba(13,17,23,0.08);
        }

        /* ── Reset ── */
        *, *::before, *::after { box-sizing: border-box; }

        /* ── Header shell ── */
        .hdr {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          font-family: 'Outfit', sans-serif;
        }

        /* top-of-page: transparent with a gradient fade */
        .hdr.top {
          background: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%);
        }

        /* scrolled: frosted glass */
        .hdr.scrolled {
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 2px 32px rgba(13,17,23,0.06);
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

        /* ── Logo ── */
        .hdr-logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 11px;
          flex-shrink: 0;
        }

        .hdr-logo-mark {
          position: relative;
          width: 36px;
          height: 36px;
          flex-shrink: 0;
        }
        .hdr-logo-mark-bg {
          position: absolute;
          inset: 0;
          background: var(--blue);
          border-radius: 10px;
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .hdr-logo:hover .hdr-logo-mark-bg {
          transform: rotate(8deg) scale(1.05);
        }
        .hdr-logo-mark svg {
          position: relative;
          z-index: 1;
          display: block;
          margin: auto;
          margin-top: 9px;
        }

        .hdr-logo-wordmark {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .hdr-logo-name {
          font-family: 'DM Serif Display', serif;
          font-size: 1.125rem;
          color: var(--ink);
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }
        .hdr.top .hdr-logo-name { color: #fff; }
        .hdr-logo-sub {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue);
          margin-top: 2px;
        }
        .hdr.top .hdr-logo-sub { color: rgba(255,255,255,0.55); }

        /* ── Desktop nav ── */
        .hdr-nav {
          display: flex;
          align-items: center;
          gap: 0.125rem;
          flex: 1;
          justify-content: center;
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
          bottom: 4px;
          left: 14px;
          right: 14px;
          height: 1.5px;
          background: var(--blue);
          transform: scaleX(0);
          transition: transform 0.2s ease;
          border-radius: 1px;
        }
        .hdr-link:hover { color: var(--ink); }
        .hdr-link:hover::after { transform: scaleX(1); }
        .hdr.top .hdr-link { color: rgba(255,255,255,0.75); }
        .hdr.top .hdr-link:hover { color: #fff; }

        /* ── Services trigger ── */
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
          bottom: 4px;
          left: 14px;
          right: 24px;
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
        .hdr.top .hdr-services-btn { color: rgba(255,255,255,0.75); }
        .hdr.top .hdr-services-btn:hover,
        .hdr.top .hdr-services-btn.open { color: #fff; }

        .hdr-chevron {
          opacity: 0.45;
          transition: transform 0.22s ease, opacity 0.15s;
          flex-shrink: 0;
        }
        .hdr-services-btn.open .hdr-chevron,
        .hdr-services-btn:hover .hdr-chevron { opacity: 0.8; }
        .hdr-services-btn.open .hdr-chevron { transform: rotate(180deg); }

        /* ── Mega dropdown ── */
        .hdr-dropdown {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          width: 620px;
          background: #fff;
          border: 1px solid rgba(13,17,23,0.07);
          border-radius: 20px;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.8) inset,
            0 20px 60px rgba(13,17,23,0.14),
            0 4px 12px rgba(13,17,23,0.06);
          padding: 0;
          opacity: 0;
          pointer-events: none;
          transform: translateX(-50%) translateY(-10px) scale(0.97);
          transition: opacity 0.2s ease, transform 0.2s ease;
          overflow: hidden;
        }
        .hdr-dropdown.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0) scale(1);
        }

        /* dropdown top bar */
        .hdr-dd-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem 0.75rem;
          border-bottom: 1px solid rgba(13,17,23,0.06);
        }
        .hdr-dd-title {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
          font-size: 1rem;
          color: var(--ink-3);
          letter-spacing: -0.01em;
        }
        .hdr-dd-viewall {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--blue);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: 20px;
          background: var(--blue-lt);
          transition: background 0.15s, gap 0.15s;
          letter-spacing: 0.02em;
        }
        .hdr-dd-viewall:hover { background: #c8e2f8; gap: 7px; }

        /* category pills */
        .hdr-dd-cats {
          display: flex;
          gap: 6px;
          padding: 0.75rem 1.25rem;
          border-bottom: 1px solid rgba(13,17,23,0.05);
          flex-wrap: wrap;
        }
        .hdr-dd-cat {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid transparent;
          cursor: pointer;
          background: none;
          font-family: 'Outfit', sans-serif;
          color: var(--ink-3);
          transition: all 0.13s;
        }
        .hdr-dd-cat:hover { background: rgba(13,17,23,0.04); color: var(--ink-2); }
        .hdr-dd-cat.active {
          background: var(--blue);
          color: #fff;
          border-color: var(--blue);
        }

        /* service grid */
        .hdr-dd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 3px;
          padding: 0.75rem 1rem 1rem;
        }
        .hdr-dd-item {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 8px 10px;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.13s;
          group: true;
        }
        .hdr-dd-item:hover { background: #f0f7ff; }
        .hdr-dd-item:hover .hdr-dd-dot { background: var(--blue); transform: scale(1.4); }
        .hdr-dd-item:hover .hdr-dd-lbl { color: var(--blue-dark); }
        .hdr-dd-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #cbd5e0;
          flex-shrink: 0;
          transition: background 0.13s, transform 0.13s;
        }
        .hdr-dd-lbl {
          font-size: 0.825rem;
          font-weight: 400;
          color: var(--ink-2);
          transition: color 0.13s;
          line-height: 1.3;
        }

        /* ── CTA ── */
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
        .hdr.top .hdr-cta {
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(8px);
          box-shadow: none;
        }
        .hdr.top .hdr-cta:hover {
          background: rgba(255,255,255,0.25);
          transform: translateY(-1px);
        }

        /* ── Mobile toggle ── */
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
        .hdr.top .hdr-mobile-btn { color: #fff; }
        .hdr-mobile-btn:hover { background: rgba(13,17,23,0.06); }

        /* ── Mobile menu ── */
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
          font-weight: 400;
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
          box-shadow: 0 3px 12px rgba(58,137,221,0.28);
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.02em;
        }
        .hdr-mobile-cta:hover { background: var(--blue-dark); }

        @media (max-width: 900px) {
          .hdr-nav { display: none; }
          .hdr-mobile-btn { display: flex; }
          .hdr.top {
            background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%);
          }
        }

        @media (max-width: 480px) {
          .hdr-inner { padding: 0 1.25rem; }
        }
      `}</style>

      <header className={`hdr${scrolled ? " scrolled" : " top"}`}>
        <div className="hdr-inner">

          {/* Logo */}
          <Link href="/" className="hdr-logo">
            <div className="hdr-logo-wordmark">
              <span className="hdr-logo-name">----------</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hdr-nav">
            <Link href="/" className="hdr-link">Home</Link>
            <Link href="/about" className="hdr-link">About</Link>

            {/* Services Dropdown */}
            <div className="hdr-dropdown-wrap" ref={dropdownRef}>
              <button
                className={`hdr-services-btn${servicesOpen ? " open" : ""}`}
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
              >
                Services
                <svg className="hdr-chevron" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 4.5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`hdr-dropdown${servicesOpen ? " open" : ""}`} role="menu">
                <div className="hdr-dd-topbar">
                  <span className="hdr-dd-title">Services</span>
                  <Link href="/services" className="hdr-dd-viewall" onClick={() => setServicesOpen(false)}>
                    View all
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M2 5.5h7M5.5 2l3.5 3.5L5.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>

                {/* Category filters */}
                <div className="hdr-dd-cats">
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
                      onClick={() => { setServicesOpen(false); setActiveCategory(null); }}
                      role="menuitem"
                    >
                      <span className="hdr-dd-dot" />
                      <span className="hdr-dd-lbl">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about" className="hdr-link">Portfolio</Link>
          </nav>

          {/* Right side */}
          <div className="hdr-right">
            <Link href="/contact" className="hdr-cta">
              Get in Touch
            </Link>

            {/* Mobile toggle */}
            <button
              className="hdr-mobile-btn"
              onClick={() => setMobileOpen((v) => !v)}
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

        {/* Mobile Menu */}
        <div className={`hdr-mobile${mobileOpen ? " open" : ""}`}>
          <Link href="/" className="hdr-mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about" className="hdr-mobile-link" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/about" className="hdr-mobile-link" onClick={() => setMobileOpen(false)}>Portfolio</Link>
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