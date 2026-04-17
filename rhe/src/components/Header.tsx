"use client";

import { useState, useRef, useEffect } from "react";

const productLinks = [
  { label: "Artificial Grass", href: "/products-services/grass" },
  { label: "Potted Plants & Trees", href: "/products-services/potted-plants" },
  { label: "Planter Boxes", href: "/products-services/planter-box" },
  { label: "Wall Greens", href: "/products-services/wall-greens" },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .hdr-root {
          --forest: #1e3a2f;
          --forest-mid: #2d5040;
          --forest-light: #3d6b54;
          --forest-pale: #dce8e2;
          --charcoal-mid: #f4f5f4;
          --charcoal-soft: #dde3e0;
          --stone: #5a6a64;
          --stone-dark: #8a9a94;
          --text-main: #1a1f1c;
          --text-soft: #4a5450;
          --text-muted: #8a9a94;

          font-family: 'DM Sans', sans-serif;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background-color: #ffffff;
          transition: box-shadow 0.3s;
        }

        .hdr-root.scrolled {
          box-shadow: 0 1px 0 var(--charcoal-soft), 0 4px 20px rgba(30,58,47,0.06);
        }

        .hdr-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
          height: 81px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        @media (max-width: 768px) {
          .hdr-inner { padding: 0 24px; }
        }

        .hdr-logo {
          display: flex;
          flex-direction: column;
          line-height: 1;
          text-decoration: none;
          flex-shrink: 0;
        }

        .hdr-logo-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.45rem;
          font-weight: 600;
          color: var(--forest-mid);
          letter-spacing: 0.03em;
        }

        .hdr-logo-tagline {
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--stone-dark);
          margin-top: 3px;
        }

        .hdr-nav {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        @media (max-width: 860px) {
          .hdr-nav { display: none; }
        }

        .hdr-nav-link {
          font-size: 0.84rem;
          font-weight: 400;
          color: var(--text-soft);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
          white-space: nowrap;
        }

        .hdr-nav-link:hover { color: var(--forest-mid); }

        /* ─── Dropdown ─── */
        .hdr-dropdown-wrap { position: relative; }

        .hdr-dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.84rem;
          font-weight: 400;
          color: var(--text-soft);
          letter-spacing: 0.02em;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.2s;
          white-space: nowrap;
        }

        .hdr-dropdown-trigger:hover,
        .hdr-dropdown-trigger.open { color: var(--forest-mid); }

        .hdr-dropdown-trigger svg {
          width: 12px;
          height: 12px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
          transition: transform 0.22s;
          flex-shrink: 0;
        }

        .hdr-dropdown-trigger.open svg { transform: rotate(180deg); }

        .hdr-dropdown {
          position: absolute;
          top: calc(100% + 31px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          background: #ffffff;
          border-radius: 0;
          min-width: 200px;
          box-shadow: 0 8px 24px rgba(30,58,47,0.08);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.18s, transform 0.18s;
          z-index: 99;
          overflow: hidden;
        }

        .hdr-dropdown.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .hdr-dropdown-links {
          padding: 6px;
          display: flex;
          flex-direction: column;
        }

        .hdr-dropdown-links a {
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--text-soft);
          text-decoration: none;
          padding: 9px 12px;
          border-radius: 6px;
          transition: color 0.15s;
          white-space: nowrap;
        }

        .hdr-dropdown-links a:hover { color: var(--forest-mid); }

        .hdr-dropdown-footer {
          border-top: 1px solid var(--charcoal-soft);
          padding: 6px;
        }

        .hdr-dropdown-view-all {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--forest-mid);
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 6px;
          transition: color 0.15s;
        }

        .hdr-dropdown-view-all:hover { color: var(--forest); }

        .hdr-dropdown-view-all svg {
          width: 12px;
          height: 12px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
        }

        /* ─── CTA ─── */
        .hdr-cta {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        @media (max-width: 860px) { .hdr-cta { display: none; } }

        .hdr-cta-btn {
          background: var(--forest-mid);
          color: #ffffff;
          border: none;
          padding: 10px 22px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-radius: 999px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.22s, transform 0.18s;
          white-space: nowrap;
        }

        .hdr-cta-btn:hover {
          background: var(--forest-light);
          transform: translateY(-1px);
        }

        .hdr-cta-btn:active { transform: translateY(0); }

        /* ─── Mobile burger ─── */
        .hdr-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .hdr-burger:hover { background: var(--charcoal-mid); }

        @media (max-width: 860px) { .hdr-burger { display: flex; } }

        .hdr-burger span {
          display: block;
          height: 1.5px;
          background: var(--text-main);
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s, width 0.25s;
          transform-origin: center;
        }

        .hdr-burger span:nth-child(1) { width: 22px; }
        .hdr-burger span:nth-child(2) { width: 16px; }
        .hdr-burger span:nth-child(3) { width: 22px; }

        .hdr-burger.open span:nth-child(1) { width: 22px; transform: translateY(6.5px) rotate(45deg); }
        .hdr-burger.open span:nth-child(2) { opacity: 0; }
        .hdr-burger.open span:nth-child(3) { width: 22px; transform: translateY(-6.5px) rotate(-45deg); }

        /* ─── Mobile menu ─── */
        .hdr-mobile-menu {
          display: none;
          position: fixed;
          top: 69px;
          left: 0;
          right: 0;
          background: #ffffff;
          border-top: 1px solid var(--charcoal-soft);
          padding: 16px 24px 24px;
          flex-direction: column;
          gap: 2px;
          box-shadow: 0 12px 32px rgba(30,58,47,0.08);
          z-index: 99;
        }

        .hdr-mobile-menu.open { display: flex; }

        @media (min-width: 861px) { .hdr-mobile-menu { display: none !important; } }

        .hdr-mobile-link {
          font-size: 0.92rem;
          font-weight: 400;
          color: var(--text-soft);
          text-decoration: none;
          padding: 12px 4px;
          border-bottom: 1px solid var(--charcoal-soft);
          transition: color 0.2s;
        }

        .hdr-mobile-link:hover { color: var(--forest-mid); }

        .hdr-mobile-products-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.92rem;
          font-weight: 400;
          color: var(--text-soft);
          padding: 12px 4px;
          border-bottom: 1px solid var(--charcoal-soft);
          cursor: pointer;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          font-family: 'DM Sans', sans-serif;
          text-align: left;
          width: 100%;
          transition: color 0.2s;
        }

        .hdr-mobile-products-toggle:hover { color: var(--forest-mid); }

        .hdr-mobile-products-toggle svg {
          width: 12px; height: 12px;
          stroke: currentColor; fill: none; stroke-width: 2;
          transition: transform 0.22s;
        }

        .hdr-mobile-products-toggle.open svg { transform: rotate(180deg); }

        .hdr-mobile-sub {
          display: none;
          flex-direction: column;
          padding-left: 16px;
        }

        .hdr-mobile-sub.open { display: flex; }

        .hdr-mobile-sub a {
          font-size: 0.86rem;
          font-weight: 300;
          color: var(--stone);
          text-decoration: none;
          padding: 10px 4px;
          border-bottom: 1px solid var(--charcoal-soft);
          transition: color 0.2s;
        }

        .hdr-mobile-sub a:last-child { border-bottom: none; }
        .hdr-mobile-sub a:hover { color: var(--forest-mid); }

        .hdr-mobile-cta {
          margin-top: 12px;
          background: var(--forest-mid);
          color: #ffffff;
          border: none;
          padding: 12px 22px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-radius: 999px;
          cursor: pointer;
          text-decoration: none;
          text-align: center;
          transition: background 0.22s;
        }

        .hdr-mobile-cta:hover { background: var(--forest-light); }

      `}</style>

      <header className={`hdr-root${scrolled ? " scrolled" : ""}`}>
        <div className="hdr-inner">

          {/* Logo */}
          <a href="/" className="hdr-logo">
            <span className="hdr-logo-name">Rich Haven</span>
            <span className="hdr-logo-tagline">Artificial Garden</span>
          </a>

          {/* Center nav */}
          <nav>
            <ul className="hdr-nav">
              <li><a href="/" className="hdr-nav-link">Home</a></li>
              <li><a href="/about" className="hdr-nav-link">About Us</a></li>
              <li>
                <div className="hdr-dropdown-wrap" ref={dropdownRef}>
                  <button
                    className={`hdr-dropdown-trigger${dropdownOpen ? " open" : ""}`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-expanded={dropdownOpen}
                  >
                    Products &amp; Services
                    <svg viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <div className={`hdr-dropdown${dropdownOpen ? " open" : ""}`}>
                    <div className="hdr-dropdown-links">
                      {productLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => setDropdownOpen(false)}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                    <div className="hdr-dropdown-footer">
                      <a href="/products-services" className="hdr-dropdown-view-all" onClick={() => setDropdownOpen(false)}>
                        View All
                        <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li><a href="/portfolio" className="hdr-nav-link">Gallery</a></li>
            </ul>
          </nav>

          {/* CTA */}
          <div className="hdr-cta">
            <a href="#footer" className="hdr-cta-btn">Get in Touch</a>
          </div>

          {/* Mobile burger */}
          <button
            className={`hdr-burger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        <div className="hdr-border" />

        {/* Mobile menu */}
        <div className={`hdr-mobile-menu${mobileOpen ? " open" : ""}`}>
          <a href="/" className="hdr-mobile-link" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="/about" className="hdr-mobile-link" onClick={() => setMobileOpen(false)}>About Us</a>

          <button
            className={`hdr-mobile-products-toggle${mobileProductsOpen ? " open" : ""}`}
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
          >
            Products &amp; Services
            <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
          </button>
          <div className={`hdr-mobile-sub${mobileProductsOpen ? " open" : ""}`}>
            {productLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="/products-services" onClick={() => setMobileOpen(false)} style={{ fontWeight: 500, color: "var(--forest-mid)" }}>
              View All →
            </a>
          </div>

          <a href="/gallery" className="hdr-mobile-link" onClick={() => setMobileOpen(false)}>Gallery</a>
          <a href="#footer" className="hdr-mobile-cta" onClick={() => setMobileOpen(false)}>Get in Touch</a>
        </div>
      </header>
    </>
  );
}