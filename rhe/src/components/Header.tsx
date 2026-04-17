"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products & Services",
    href: "/products-services",
    dropdown: {
      items: [
        { label: "Artificial Grass", href: "/products-services/grass" },
        { label: "Potted Plants", href: "/products-services/potted-plants" },
        { label: "Planter Box", href: "/products-services/planter-box" },
        { label: "Wall Greens", href: "/products-services/wall-greens" },
      ],
    },
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --forest: #1a2e1a;
          --sage: #4a6741;
          --cream: #f5f0e8;
          --gold: #c9a84c;
          --white: #ffffff;
          --shadow: 0 4px 32px rgba(26,46,26,0.13);
        }

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
          font-family: 'DM Sans', sans-serif;
        }

        .rh-header.scrolled {
          background: rgba(239, 242, 241, 0.95);
          backdrop-filter: blur(12px);
          box-shadow: var(--shadow);
        }

        .rh-header:not(.scrolled) {
          background: rgba(239, 242, 241, 0.88);
          backdrop-filter: blur(8px);
        }

        .rh-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          height: 76px;
          gap: 2rem;
        }

        .rh-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          flex-shrink: 0;
        }

        .rh-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .rh-logo-main {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--forest);
          letter-spacing: 0.06em;
          white-space: nowrap;
        }

        .rh-logo-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.58rem;
          font-weight: 400;
          color: var(--gold);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        .rh-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          flex: 1;
          justify-content: center;
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
          background: var(--sage);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .rh-nav-link:hover { color: var(--sage); }
        .rh-nav-link:hover::after { transform: scaleX(1); }

        .rh-drop-wrap { position: relative; }

        .rh-drop-trigger {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          cursor: pointer;
          background: none;
          border: none;
          font-family: 'DM Sans', sans-serif;
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
          background: var(--sage);
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
          opacity: 0.45;
          flex-shrink: 0;
        }
        .rh-chevron.open { transform: rotate(180deg); }

        /* ── DROPDOWN ── */
        .rh-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(-4px);
          background: #fdfcfa;
          border-radius: 10px;
          border: 1px solid rgba(26, 46, 26, 0.07);
          box-shadow:
            0 12px 40px rgba(26, 46, 26, 0.10),
            0 2px 8px rgba(26, 46, 26, 0.04);
          width: 240px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease;
          overflow: hidden;
        }

        .rh-dropdown.open {
          opacity: 1;
          pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }

        .rh-dropdown-list {
          padding: 8px 0;
        }

        .rh-dropdown-item {
          display: block;
          padding: 10px 22px;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.84rem;
          color: var(--forest);
          letter-spacing: 0.02em;
          transition: background 0.12s ease, color 0.12s ease;
          position: relative;
        }

        .rh-dropdown-item:hover {
          background: rgba(234, 243, 229, 0.5);
          color: var(--sage);
        }

        .rh-dropdown-divider {
          height: 1px;
          background: rgba(26, 46, 26, 0.06);
          margin: 4px 18px;
        }

        .rh-dropdown-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 22px;
          background: var(--forest);
          text-decoration: none;
          transition: background 0.18s ease;
        }

        .rh-dropdown-footer:hover {
          background: #1f3820;
        }

        .rh-dropdown-footer-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0.04em;
        }

        .rh-dropdown-footer svg {
          width: 12px;
          height: 12px;
          color: rgba(255, 255, 255, 0.55);
          transition: transform 0.18s ease;
        }

        .rh-dropdown-footer:hover svg {
          transform: translateX(2px);
        }

        /* CTA BUTTON */
        .rh-cta {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 24px;
          background: #2d5a27;
          color: #fff;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: normal;
          border-radius: 50px;
          border: none;
          transition: all 0.25s ease;
        }

        .rh-cta span { position: static; }
        .rh-cta:hover { background: #1e3d1a; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(45,90,39,0.25); }

        /* MOBILE BURGER */
        .rh-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          margin-left: auto;
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
          font-family: 'Playfair Display', serif;
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
          font-family: 'Playfair Display', serif;
          font-weight: 500;
          color: var(--forest);
          cursor: pointer;
          text-align: left;
          letter-spacing: 0.04em;
        }

        .rh-mobile-dropdown { display: none; padding: 0.5rem 0 0.75rem 0; }
        .rh-mobile-dropdown.open { display: block; }

        .rh-mobile-view-all {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.55rem 1rem;
          margin-bottom: 0.75rem;
          background: rgba(74, 103, 65, 0.08);
          border: 1px solid rgba(74, 103, 65, 0.15);
          color: var(--sage);
          text-decoration: none;
          font-size: 0.74rem;
          letter-spacing: 0.08em;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          border-radius: 2px;
        }

        .rh-mobile-dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0 0.45rem 0.5rem;
          font-size: 0.88rem;
          color: #3a4f3a;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.02em;
        }

        .rh-mobile-dropdown-item::before {
          content: '';
          display: block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--sage);
          flex-shrink: 0;
          opacity: 0.45;
        }

        .rh-mobile-cta {
          display: block;
          margin-top: 1.5rem;
          text-align: center;
          padding: 14px 32px;
          background: #2d5a27;
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          letter-spacing: normal;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          border-radius: 50px;
          transition: all 0.25s ease;
        }

        @media (max-width: 900px) {
          .rh-nav { display: none; }
          .rh-cta { display: none; }
          .rh-burger { display: flex; }
        }
      `}</style>

      <header className={`rh-header${scrolled ? " scrolled" : ""}`}>
        <div className="rh-inner">

          <Link href="/" className="rh-logo">
            <div className="rh-logo-text">
              <span className="rh-logo-main">Rich Haven</span>
              <span className="rh-logo-sub">Artificial Garden</span>
            </div>
          </Link>

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
                    <div className="rh-dropdown-list">
                      {link.dropdown.items.map((item, idx) => (
                        <span key={item.label}>
                          <Link
                            href={item.href}
                            className="rh-dropdown-item"
                            role="menuitem"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {item.label}
                          </Link>
                          {idx < link.dropdown.items.length - 1 && (
                            <div className="rh-dropdown-divider" />
                          )}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={link.href}
                      className="rh-dropdown-footer"
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="rh-dropdown-footer-text">View All</span>
                      <svg viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href} className="rh-nav-link">
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <button
            className="rh-cta"
            onClick={() => {
              document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Contact Us</span>
          </button>

          <button
            className={`rh-burger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`rh-mobile-menu${mobileOpen ? " open" : ""}`} role="navigation">
        {navLinks.map((link) =>
          link.dropdown ? (
            <div key={link.label}>
              <button
                className="rh-mobile-drop-btn"
                onClick={() => setMobileDropOpen((v) => !v)}
              >
                {link.label}
                <svg
                  style={{
                    width: 11,
                    transition: "transform 0.25s",
                    transform: mobileDropOpen ? "rotate(180deg)" : "none",
                  }}
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`rh-mobile-dropdown${mobileDropOpen ? " open" : ""}`}>
                <Link
                  href={link.href}
                  className="rh-mobile-view-all"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>View All Products & Services</span>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>

                {link.dropdown.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rh-mobile-dropdown-item"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              className="rh-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          )
        )}
        <Link href="#footer" className="rh-mobile-cta" onClick={() => setMobileOpen(false)}>
          Contact Us
        </Link>
      </div>
    </>
  );
}