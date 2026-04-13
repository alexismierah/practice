"use client";

import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products & Services",
    href: "/products-services",
    dropdown: [
      { label: "Artificial Grass", href: "/products-services/grass" },
      { label: "Garden Design", href: "/products-services/garden" },
      { label: "Potted Plants", href: "/products-services/plants" },
      { label: "Trees", href: "/products-services/trees" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const t = e.target;
      if (dropRef.current && t instanceof Node && !dropRef.current.contains(t)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Jost:wght@300;400;500&display=swap');

        :root {
          --forest: #1a2e1a;
          --sage: #4a6741;
          --cream: #f5f0e8;
          --gold: #c9a84c;
          --gold-light: #e8c97a;
          --white: #ffffff;
          --shadow: 0 4px 32px rgba(26,46,26,0.13);
        }

        /* Scoped box model only — never reset * { margin/padding } here; it breaks the whole site (Tailwind, footer, pages). */
        .rh-header,
        .rh-header *,
        .rh-mobile-menu,
        .rh-mobile-menu * {
          box-sizing: border-box;
        }

        .rh-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          font-family: 'Jost', sans-serif;
        }

        .rh-header.scrolled {
          background: rgba(245,240,232,0.97);
          backdrop-filter: blur(12px);
          box-shadow: var(--shadow);
        }

        .rh-header:not(.scrolled) {
          background: rgba(245,240,232,0.92);
          backdrop-filter: blur(8px);
        }

        .rh-header::before {
          content: '';
          display: block;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, var(--gold) 30%, var(--gold-light) 50%, var(--gold) 70%, transparent 100%);
        }

        .rh-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          height: 76px;
          column-gap: 2rem;
        }

        .rh-header-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.75rem;
          justify-self: end;
          min-width: 0;
        }

        /* LOGO */
        .rh-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          flex-shrink: 0;
          justify-self: start;
          min-width: 0;
        }

        .rh-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .rh-logo-main {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--forest);
          letter-spacing: 0.06em;
          white-space: nowrap;
        }

        .rh-logo-sub {
          font-family: 'Jost', sans-serif;
          font-size: 0.58rem;
          font-weight: 400;
          color: var(--gold);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* NAV — middle grid column is auto width, true viewport-centered bar */
        .rh-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          justify-self: center;
        }

        .rh-nav-link {
          font-size: 0.88rem;
          font-weight: 400;
          letter-spacing: 0.03em;
          color: var(--forest);
          text-decoration: none;
          padding: 0.5rem 0.9rem;
          transition: color 0.25s;
          white-space: nowrap;
          position: relative;
        }

        .rh-nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 0.9rem; right: 0.9rem;
          height: 1px;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .rh-nav-link:hover { color: var(--sage); }
        .rh-nav-link:hover::after { transform: scaleX(1); }

        /* DROPDOWN TRIGGER */
        .rh-drop-wrap { position: relative; }

        .rh-drop-trigger {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          cursor: pointer;
          background: none;
          border: none;
          font-family: 'Jost', sans-serif;
          font-size: 0.88rem;
          font-weight: 400;
          letter-spacing: 0.03em;
          color: var(--forest);
          padding: 0.5rem 0.9rem;
          transition: color 0.25s;
          white-space: nowrap;
          position: relative;
        }

        .rh-drop-trigger::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 0.9rem; right: 0.9rem;
          height: 1px;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .rh-drop-trigger:hover,
        .rh-drop-trigger.active { color: var(--sage); }
        .rh-drop-trigger:hover::after,
        .rh-drop-trigger.active::after { transform: scaleX(1); }

        .rh-chevron {
          width: 9px; height: 9px;
          transition: transform 0.25s ease;
          opacity: 0.55;
          flex-shrink: 0;
        }
        .rh-chevron.open { transform: rotate(180deg); }

        /* DROPDOWN MENU */
        .rh-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(-6px);
          background: var(--white);
          border-radius: 3px;
          box-shadow: 0 10px 36px rgba(26,46,26,0.11);
          min-width: 196px;
          padding: 0.35rem 0;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .rh-dropdown.open {
          opacity: 1;
          pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }

        .rh-dropdown-item {
          display: block;
          padding: 0.58rem 1.2rem;
          text-decoration: none;
          color: var(--forest);
          font-size: 0.82rem;
          letter-spacing: 0.02em;
          font-family: 'Jost', sans-serif;
          transition: background 0.18s, color 0.18s;
        }

        .rh-dropdown-item:hover {
          background: rgba(74,103,65,0.07);
          color: var(--sage);
        }

        /* CTA BUTTON */
        .rh-cta {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          padding: 0.6rem 1.4rem;
          background: var(--forest);
          color: var(--cream);
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          border-radius: 2px;
          border: 1px solid var(--forest);
          position: relative;
          overflow: hidden;
          transition: color 0.3s, border-color 0.3s;
        }

        .rh-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: 0;
        }

        .rh-cta span { position: relative; z-index: 1; }
        .rh-cta:hover::before { transform: scaleX(1); }
        .rh-cta:hover { color: var(--forest); border-color: var(--gold); }

        /* MOBILE BURGER */
        .rh-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .rh-burger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: var(--forest);
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .rh-burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .rh-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .rh-burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* MOBILE MENU */
        .rh-mobile-menu {
          display: none;
          position: fixed;
          top: 78px; left: 0; right: 0; bottom: 0;
          background: var(--cream);
          padding: 2rem;
          overflow-y: auto;
          border-top: 1px solid rgba(201,168,76,0.2);
          animation: slideDown 0.25s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .rh-mobile-menu.open { display: block; }

        .rh-mobile-link {
          display: block;
          padding: 0.9rem 0;
          font-size: 1.1rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 500;
          color: var(--forest);
          text-decoration: none;
          border-bottom: 1px solid rgba(201,168,76,0.15);
          letter-spacing: 0.04em;
        }

        .rh-mobile-drop-btn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(201,168,76,0.15);
          padding: 0.9rem 0;
          font-size: 1.1rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 500;
          color: var(--forest);
          cursor: pointer;
          text-align: left;
          letter-spacing: 0.04em;
        }

        .rh-mobile-dropdown { display: none; padding: 0.25rem 0 0.5rem 1rem; }
        .rh-mobile-dropdown.open { display: block; }

        .rh-mobile-dropdown-item {
          display: block;
          padding: 0.55rem 0;
          font-size: 0.88rem;
          color: var(--sage);
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.02em;
        }

        .rh-mobile-cta {
          display: block;
          margin-top: 1.5rem;
          text-align: center;
          padding: 0.85rem;
          background: var(--forest);
          color: var(--cream);
          text-decoration: none;
          font-size: 0.85rem;
          letter-spacing: 0.06em;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          border-radius: 2px;
        }

        @media (max-width: 900px) {
          .rh-inner {
            grid-template-columns: auto 1fr;
          }
          .rh-nav { display: none; }
          .rh-cta { display: none; }
          .rh-burger { display: flex; }
        }
      `}</style>

      <header className={`rh-header${scrolled ? " scrolled" : ""}`}>
        <div className="rh-inner">

          {/* LOGO */}
          <a href="/" className="rh-logo">
            <div className="rh-logo-text">
              <span className="rh-logo-main">Rich Haven</span>
              <span className="rh-logo-sub">Enterprises</span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="rh-nav">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="rh-drop-wrap" ref={dropRef}>
                  <button
                    className={`rh-drop-trigger${dropdownOpen ? " active" : ""}`}
                    onClick={() => setDropdownOpen((v) => !v)}
                    aria-expanded={dropdownOpen}
                  >
                    {link.label}
                    <svg className={`rh-chevron${dropdownOpen ? " open" : ""}`} viewBox="0 0 10 10" fill="none">
                      <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className={`rh-dropdown${dropdownOpen ? " open" : ""}`} role="menu">
                    {link.dropdown.map((item) => (
                      <a key={item.label} href={item.href} className="rh-dropdown-item" role="menuitem">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={link.label} href={link.href} className="rh-nav-link">
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="rh-header-actions">
            <a href="/contact" className="rh-cta">
              <span>Contact Us</span>
            </a>
            <button
              className={`rh-burger${mobileOpen ? " open" : ""}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`rh-mobile-menu${mobileOpen ? " open" : ""}`} role="navigation">
        {navLinks.map((link) =>
          link.dropdown ? (
            <div key={link.label}>
              <button
                className="rh-mobile-drop-btn"
                onClick={() => setMobileDropOpen((v) => !v)}
              >
                {link.label}
                <svg style={{ width: 11, transition: "transform 0.25s", transform: mobileDropOpen ? "rotate(180deg)" : "none" }} viewBox="0 0 10 10" fill="none">
                  <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`rh-mobile-dropdown${mobileDropOpen ? " open" : ""}`}>
                {link.dropdown.map((item) => (
                  <a key={item.label} href={item.href} className="rh-mobile-dropdown-item">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a key={link.label} href={link.href} className="rh-mobile-link">
              {link.label}
            </a>
          )
        )}
        <a href="/contact" className="rh-mobile-cta">Contact Us</a>
      </div>
    </>
  );
}