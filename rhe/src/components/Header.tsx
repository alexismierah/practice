"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

function scrollToFooter(e: React.MouseEvent) {
  e.preventDefault();
  const footer = document.getElementById("footer");
  if (footer) {
    const top = footer.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled && !dropdownOpen && !mobileOpen;

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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        /* ── TOKEN MATCH: same as page.tsx + Footer.tsx ── */
        .hdr-root {
          --sage: #8fa882;
          --forest: #2d4a27;
          --deep: #1a2e16;
          --cream: #efefef;
          --warm-white: #f7f7f7;
          --text: #1c1e19;
          --text-muted: #6b7060;
          --text-faint: #a8ad9e;
          --border: rgba(45,74,39,0.12);
          --gold: #c9a96e;
          --font: "DM Sans", sans-serif;

          font-family: var(--font);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          height: 70px;
          background-color: var(--cream);
          transition: background-color 0.35s, box-shadow 0.35s;
        }

        /* Subtle shadow on scroll — matches homepage section depth */
        .hdr-root.scrolled {
          box-shadow: 0 4px 24px rgba(45,74,39,0.07);
        }

        /* ── Transparent state (home hero) ── */
        .hdr-root.transparent {
          background-color: transparent;
        }

        .hdr-root.transparent .hdr-logo-name,
        .hdr-root.transparent .hdr-nav-link,
        .hdr-root.transparent .hdr-dropdown-trigger {
          color: #ffffff;
        }

        .hdr-root.transparent .hdr-logo-tagline {
          color: rgba(255,255,255,0.55);
        }

        .hdr-root.transparent .hdr-nav-link:hover,
        .hdr-root.transparent .hdr-dropdown-trigger:hover,
        .hdr-root.transparent .hdr-dropdown-trigger.open {
          color: rgba(255,255,255,0.75);
        }

        /* CTA pill — ghost style matching .btn-ghost-hero on homepage */
        .hdr-root.transparent .hdr-cta-btn {
          background: rgba(255,255,255,0.08);
          border: 0.5px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.85);
        }

        .hdr-root.transparent .hdr-cta-btn:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.35);
          color: #fff;
        }

        .hdr-root.transparent .hdr-burger span {
          background: #ffffff;
        }

        .hdr-root.transparent .hdr-logo img {
          filter: brightness(0) invert(1);
        }

        /* ── Inner layout ── */
        .hdr-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 20px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        @media (max-width: 768px) {
          .hdr-inner { padding: 0 28px; }
        }

        /* ── Logo — matches footer logo style ── */
        .hdr-logo {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 3px;
          line-height: 1;
          text-decoration: none;
          flex-shrink: 0;
        }

        .hdr-logo-text {
          display: flex;
          flex-direction: column;
          margin-left: -6px;
        }

        /* Cormorant + forest color — matches .footer-logo-name */
        .hdr-logo-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--forest);
          letter-spacing: 0.02em;
        }

        /* Matches .footer-logo-tagline */
        .hdr-logo-tagline {
          font-size: 0.42rem;
          font-weight: 400;
          letter-spacing: 0.28em;
          text-transform: capitalize;
          color: var(--text-faint);
          margin-top: 2px;
        }

        /* ── Desktop nav ── */
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

        /* Nav links — matches .learn-more-link / .view-all-link style */
        .hdr-nav-link {
          font-size: 13px;
          font-weight: 400;
          color: var(--text-muted);
          text-decoration: none;
          letter-spacing: 0.16em;
          text-transform: capitalize;
          transition: color 0.25s;
          white-space: nowrap;
          display: flex;
          align-items: center;
        }

        .hdr-nav-link:hover { color: var(--forest); }

        /* ── Dropdown ── */
        .hdr-dropdown-wrap { position: relative; }

        .hdr-dropdown-trigger {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 13px;
          font-weight: 400;
          color: var(--text-muted);
          letter-spacing: 0.16em;
          text-transform: capitalize;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          font-family: var(--font);
          transition: color 0.25s;
          white-space: nowrap;
        }

        .hdr-dropdown-trigger:hover,
        .hdr-dropdown-trigger.open { color: var(--forest); }

        .hdr-dropdown-trigger svg {
          width: 11px;
          height: 11px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
          transition: transform 0.22s;
          flex-shrink: 0;
        }

        .hdr-dropdown-trigger.open svg { transform: rotate(180deg); }

        /* Dropdown panel — warm-white bg, thin border matches --border token */
        .hdr-dropdown {
          position: absolute;
          top: calc(100% + 28px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          background: var(--warm-white);
          border: 1px solid var(--border);
          border-radius: 4px;
          min-width: 210px;
          box-shadow: 0 12px 40px rgba(45,74,39,0.1);
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
          padding: 8px;
          display: flex;
          flex-direction: column;
        }

        /* Dropdown items match .footer-nav a style */
        .hdr-dropdown-links a {
          font-size: 0.83rem;
          font-weight: 300;
          color: var(--text-muted);
          text-decoration: none;
          padding: 9px 12px;
          border-radius: 4px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }

        .hdr-dropdown-links a:hover {
          color: var(--forest);
          background: rgba(45,74,39,0.04);
        }

        /* Dropdown footer — matches --border separator in footer */
        .hdr-dropdown-footer {
          border-top: 1px solid var(--border);
          padding: 6px 8px;
        }

        .hdr-dropdown-view-all {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.16em;
          text-transform: capitalize;
          color: var(--forest);
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 4px;
          transition: color 0.2s, background 0.2s;
        }

        .hdr-dropdown-view-all:hover {
          color: var(--deep);
          background: rgba(45,74,39,0.04);
        }

        .hdr-dropdown-view-all svg {
          width: 11px;
          height: 11px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2;
        }

        /* ── CTA button — matches .cta-btn-primary / footer-submit ── */
        .hdr-cta {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        @media (max-width: 860px) { .hdr-cta { display: none; } }

        .hdr-cta-btn {
          background: var(--forest);
          color: #ffffff;
          border: none;
          padding: 10px 22px;
          font-family: var(--font);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: capitalize;
          border-radius: 9999px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.3s, transform 0.25s, box-shadow 0.3s;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
        }

        .hdr-cta-btn:hover {
          background: var(--forest);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.12);
        }

        .hdr-cta-btn:active { transform: translateY(0); box-shadow: none; }

        /* ── Mobile burger ── */
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

        .hdr-burger:hover { background: rgba(45,74,39,0.06); }

        @media (max-width: 860px) { .hdr-burger { display: flex; } }

        .hdr-burger span {
          display: block;
          height: 1.5px;
          background: var(--text-muted);
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

        /* ── Mobile menu — cream bg matches homepage sections ── */
        .hdr-mobile-menu {
          display: none;
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: var(--cream);
          border-top: 1px solid var(--border);
          padding: 16px 28px 28px;
          flex-direction: column;
          gap: 0;
          box-shadow: 0 16px 40px rgba(45,74,39,0.08);
          z-index: 99;
        }

        .hdr-mobile-menu.open { display: flex; }

        @media (min-width: 861px) { .hdr-mobile-menu { display: none !important; } }

        /* Mobile links — matches .footer-nav a style */
        .hdr-mobile-link {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.16em;
          text-transform: capitalize;
          color: var(--text-muted);
          text-decoration: none;
          padding: 14px 4px;
          border-bottom: 1px solid var(--border);
          transition: color 0.2s;
          display: flex;
          align-items: center;
        }

        .hdr-mobile-link:hover { color: var(--forest); }

        .hdr-mobile-products-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.16em;
          text-transform: capitalize;
          color: var(--text-muted);
          padding: 14px 4px;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          background: none;
          border-left: none;
          border-right: none;
          border-top: none;
          font-family: var(--font);
          text-align: left;
          width: 100%;
          transition: color 0.2s;
        }

        .hdr-mobile-products-toggle:hover { color: var(--forest); }

        .hdr-mobile-products-toggle svg {
          width: 11px; height: 11px;
          stroke: currentColor; fill: none; stroke-width: 2;
          transition: transform 0.22s;
        }

        .hdr-mobile-products-toggle.open svg { transform: rotate(180deg); }

        .hdr-mobile-sub {
          display: none;
          flex-direction: column;
          padding-left: 16px;
          background: rgba(45,74,39,0.02);
        }

        .hdr-mobile-sub.open { display: flex; }

        .hdr-mobile-sub a {
          font-size: 0.82rem;
          font-weight: 300;
          color: var(--text-muted);
          text-decoration: none;
          padding: 11px 4px;
          border-bottom: 1px solid var(--border);
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }

        .hdr-mobile-sub a:last-child { border-bottom: none; }
        .hdr-mobile-sub a:hover { color: var(--forest); }

        /* Mobile CTA — matches .cta-btn-primary */
        .hdr-mobile-cta {
          margin-top: 20px;
          background: var(--forest);
          color: #ffffff;
          border: none;
          padding: 13px 22px;
          font-family: var(--font);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: capitalize;
          border-radius: 9999px;
          cursor: pointer;
          text-decoration: none;
          text-align: center;
          transition: background 0.3s, transform 0.25s;
          display: block;
        }

        .hdr-mobile-cta:hover {
          background: var(--forest);
          transform: translateY(-1px);
        }

        /* Bottom rule inside header — matches footer's gold top rule */
        .hdr-bottom-rule {
          position: absolute;
          bottom: 0;
          left: 60px;
          right: 60px;
          height: 1px;
          background: var(--border);
          opacity: 0;
          transition: opacity 0.35s;
        }

        .hdr-root.scrolled .hdr-bottom-rule { opacity: 0; }
        .hdr-root:not(.transparent):not(.scrolled) .hdr-bottom-rule { opacity: 1; }
      `}</style>

      <header className={`hdr-root${scrolled ? " scrolled" : ""}${isTransparent ? " transparent" : ""}`}>
        <div className="hdr-inner">

          {/* Logo */}
          <a href="/" className="hdr-logo">
            <Image
              src="/logo.png"
              alt="Rich Haven logo"
              width={32}
              height={32}
              style={{ objectFit: "contain", marginTop: "-18px", width: "auto" }}
            />
            <div className="hdr-logo-text">
              <span className="hdr-logo-name">Rich Haven</span>
              <span className="hdr-logo-tagline">Artificial Garden</span>
            </div>
          </a>

          {/* Desktop nav */}
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
                    Green Solutions
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
                        <svg viewBox="0 0 24 24">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li><a href="/projects" className="hdr-nav-link">Projects</a></li>
            </ul>
          </nav>

          {/* CTA */}
          <div className="hdr-cta">
            <a href="#footer" className="hdr-cta-btn" onClick={scrollToFooter}>Get in Touch</a>
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
            <a
              href="/products-services"
              onClick={() => setMobileOpen(false)}
              style={{ fontWeight: 500, color: "var(--forest)", letterSpacing: "0.04em" }}
            >
              View All →
            </a>
          </div>

          <a
            href="#footer"
            className="hdr-mobile-cta"
            onClick={(e) => { scrollToFooter(e); setMobileOpen(false); }}
          >
            Get in Touch
          </a>
        </div>
      </header>
    </>
  );
}