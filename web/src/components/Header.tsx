"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const serviceLinks = [
  { href: "/services/structured-cabling", label: "Structured Cabling",  icon: "⬡" },
  { href: "/services/cctv",               label: "CCTV Systems",         icon: "⬡" },
  { href: "/services/ip-ipbx",            label: "IP-PBX System",        icon: "⬡" },
  { href: "/services/access-control",     label: "Access Control",       icon: "⬡" },
  { href: "/services/public-address",     label: "Public Address",       icon: "⬡" },
  { href: "/services/network-security",   label: "Network & Security",   icon: "⬡" },
  { href: "/services/conference",         label: "Conference System",    icon: "⬡" },
  { href: "/services/parking",            label: "Parking System",       icon: "⬡" },
  { href: "/services/solar",              label: "Solar Power",          icon: "⬡" },
  { href: "/services/ups",                label: "UPS",                  icon: "⬡" },
  { href: "/services/led-display",        label: "LED Display",          icon: "⬡" },
  { href: "/services/video-intercom",     label: "Video Intercom",       icon: "⬡" },
]

export default function Header() {
  const [scrolled, setScrolled]         = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const dropdownRef                      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close dropdown on outside click
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,400&family=Instrument+Sans:wght@300;400;500&display=swap');

        :root {
          --blue:      #3a89dd;
          --blue-dark: #2a6db8;
          --blue-lt:   #e8f2fc;
          --blue-xlt:  #f0f7ff;
          --ink:       #111827;
          --ink-2:     #374151;
          --ink-3:     #6b7280;
          --border:    rgba(17,24,39,0.08);
        }

        .hdr {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          transition: background 0.3s, box-shadow 0.3s, border-color 0.3s;
          font-family: 'Instrument Sans', sans-serif;
        }
        .hdr.scrolled {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 1px 0 var(--border), 0 4px 24px rgba(17,24,39,0.06);
        }
        .hdr.top {
          background: transparent;
        }

        .hdr-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2.5rem;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* Logo */
        .hdr-logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .hdr-logo-mark {
          width: 32px;
          height: 32px;
          background: var(--blue);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .hdr-logo:hover .hdr-logo-mark { background: var(--blue-dark); }
        .hdr-logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--ink);
          line-height: 1;
          transition: color 0.2s;
        }
        .hdr.top .hdr-logo-text { color: #fff; }

        /* Nav */
        .hdr-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .hdr-link {
          padding: 7px 13px;
          border-radius: 7px;
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--ink-2);
          text-decoration: none;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
        }
        .hdr.top .hdr-link { color: rgba(255,255,255,0.8); }
        .hdr-link:hover { background: rgba(17,24,39,0.05); color: var(--ink); }
        .hdr.top .hdr-link:hover { background: rgba(255,255,255,0.1); color: #fff; }

        /* Services trigger */
        .hdr-services-btn {
          padding: 7px 13px;
          border-radius: 7px;
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--ink-2);
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Instrument Sans', sans-serif;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
        }
        .hdr.top .hdr-services-btn { color: rgba(255,255,255,0.8); }
        .hdr-services-btn:hover,
        .hdr-services-btn.open { background: rgba(17,24,39,0.05); color: var(--ink); }
        .hdr.top .hdr-services-btn:hover,
        .hdr.top .hdr-services-btn.open { background: rgba(255,255,255,0.1); color: #fff; }
        .hdr-chevron {
          transition: transform 0.2s;
          flex-shrink: 0;
          opacity: 0.5;
        }
        .hdr-services-btn.open .hdr-chevron { transform: rotate(180deg); }

        /* Dropdown */
        .hdr-dropdown-wrap { position: relative; }
        .hdr-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          width: 560px;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(17,24,39,0.12), 0 1px 4px rgba(17,24,39,0.06);
          padding: 1.25rem;
          opacity: 0;
          pointer-events: none;
          transform: translateX(-50%) translateY(-6px);
          transition: opacity 0.18s, transform 0.18s;
        }
        .hdr-dropdown.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .hdr-dropdown-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 0.5rem 1rem;
          border-bottom: 1px solid rgba(17,24,39,0.06);
          margin-bottom: 1rem;
        }
        .hdr-dropdown-title {
          font-family: 'Playfair Display', serif;
          font-size: 0.9375rem;
          font-style: italic;
          color: var(--ink-3);
        }
        .hdr-dropdown-all {
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--blue);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: gap 0.15s;
        }
        .hdr-dropdown-all:hover { gap: 8px; }
        .hdr-dropdown-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
        }
        .hdr-dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 10px;
          border-radius: 9px;
          text-decoration: none;
          transition: background 0.13s;
        }
        .hdr-dropdown-item:hover { background: var(--blue-xlt); }
        .hdr-dropdown-item:hover .hdr-di-dot { background: var(--blue); }
        .hdr-dropdown-item:hover .hdr-di-label { color: var(--blue-dark); }
        .hdr-di-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d1d5db;
          flex-shrink: 0;
          transition: background 0.13s;
        }
        .hdr-di-label {
          font-size: 0.8375rem;
          color: var(--ink-2);
          font-weight: 400;
          transition: color 0.13s;
        }

        /* CTA Button */
        .hdr-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--blue);
          color: #fff;
          padding: 9px 20px;
          border-radius: 8px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
          margin-left: 0.5rem;
        }
        .hdr-cta:hover { background: var(--blue-dark); transform: translateY(-1px); }

        /* Mobile toggle */
        .hdr-mobile-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: var(--ink);
          border-radius: 7px;
          transition: background 0.15s;
        }
        .hdr.top .hdr-mobile-btn { color: #fff; }
        .hdr-mobile-btn:hover { background: rgba(17,24,39,0.06); }

        /* Mobile nav */
        .hdr-mobile {
          display: none;
          flex-direction: column;
          background: #fff;
          border-top: 1px solid var(--border);
          padding: 1rem 1.5rem 1.5rem;
          gap: 2px;
        }
        .hdr-mobile.open { display: flex; }
        .hdr-mobile-link {
          font-size: 0.9375rem;
          color: var(--ink-2);
          text-decoration: none;
          padding: 10px 12px;
          border-radius: 8px;
          transition: background 0.13s, color 0.13s;
        }
        .hdr-mobile-link:hover { background: var(--blue-lt); color: var(--blue-dark); }
        .hdr-mobile-divider {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-3);
          padding: 14px 12px 6px;
        }
        .hdr-mobile-cta {
          margin-top: 0.75rem;
          background: var(--blue);
          color: #fff;
          text-align: center;
          padding: 12px;
          border-radius: 9px;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s;
        }
        .hdr-mobile-cta:hover { background: var(--blue-dark); }

        @media (max-width: 768px) {
          .hdr-nav { display: none; }
          .hdr-mobile-btn { display: flex; }
          .hdr.top { background: rgba(0,0,0,0.3); backdrop-filter: blur(8px); }
        }
      `}</style>

      <header className={`hdr${scrolled ? " scrolled" : " top"}`}>
        <div className="hdr-inner">

          {/* Logo */}
          <Link href="/" className="hdr-logo">
            <div className="hdr-logo-mark">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h5v8H2zM9 4h5v4H9zM9 10h5v2H9z" fill="white" />
              </svg>
            </div>
            <span className="hdr-logo-text">Tech Company</span>
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
                <svg className="hdr-chevron" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`hdr-dropdown${servicesOpen ? " open" : ""}`} role="menu">
                <div className="hdr-dropdown-header">
                  <span className="hdr-dropdown-title">Our services</span>
                  <Link href="/services" className="hdr-dropdown-all" onClick={() => setServicesOpen(false)}>
                    View all
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6h7M6 2.5L9.5 6 6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                <div className="hdr-dropdown-grid">
                  {serviceLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="hdr-dropdown-item"
                      onClick={() => setServicesOpen(false)}
                      role="menuitem"
                    >
                      <span className="hdr-di-dot" />
                      <span className="hdr-di-label">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="hdr-cta">
              Get in Touch
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </nav>

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
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`hdr-mobile${mobileOpen ? " open" : ""}`}>
          <Link href="/" className="hdr-mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about" className="hdr-mobile-link" onClick={() => setMobileOpen(false)}>About</Link>
          <div className="hdr-mobile-divider">Services</div>
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