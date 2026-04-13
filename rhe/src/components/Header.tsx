"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products & Services",
    href: "/products-services",
    dropdown: {
      turf: [
        { label: "Grass", href: "/products-services/grass" },
      ],
      garden: [
        { label: "Plants", href: "/products-services/plants" },
        { label: "Trees", href: "/products-services/trees" },
        { label: "Wall", href: "/products-services/wall" },
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
          background: var(--gold);
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
          opacity: 0.45;
          flex-shrink: 0;
        }
        .rh-chevron.open { transform: rotate(180deg); }

        /* DROPDOWN — soft & light */
        .rh-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(-4px);
          background: #fdfcf9;
          border-radius: 6px;
          border: 1px solid rgba(201,168,76,0.18);
          box-shadow: 0 8px 28px rgba(26,46,26,0.08);
          width: 460px;
          padding: 0;
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

        /* Soft "View All" banner — warm cream instead of dark forest */
        .rh-dropdown-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.3rem;
          background: rgba(201,168,76,0.08);
          border-bottom: 1px solid rgba(201,168,76,0.15);
          text-decoration: none;
          transition: background 0.18s;
        }

        .rh-dropdown-banner:hover {
          background: rgba(201,168,76,0.14);
        }

        .rh-dropdown-banner-text {
          font-family: 'Jost', sans-serif;
          font-size: 0.76rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: var(--sage);
        }

        .rh-dropdown-banner-arrow {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.04em;
          color: var(--gold);
        }

        .rh-dropdown-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .rh-dropdown-col {
          padding: 1.1rem 1.3rem 1.3rem;
        }

        .rh-dropdown-col:first-child {
          border-right: 1px solid rgba(26,46,26,0.06);
        }

        .rh-dropdown-col-label {
          display: block;
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          margin-bottom: 0.55rem;
          padding-bottom: 0.45rem;
          border-bottom: 1px solid rgba(201,168,76,0.16);
          opacity: 0.85;
        }

        .rh-dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0;
          text-decoration: none;
          color: #3a4f3a;
          font-size: 0.83rem;
          letter-spacing: 0.02em;
          font-family: 'Jost', sans-serif;
          transition: color 0.15s;
          border-bottom: 1px solid rgba(26,46,26,0.04);
        }

        .rh-dropdown-item:last-child {
          border-bottom: none;
        }

        .rh-dropdown-item::before {
          content: '';
          display: block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
          opacity: 0.45;
          transition: opacity 0.15s;
        }

        .rh-dropdown-item:hover {
          color: var(--sage);
        }

        .rh-dropdown-item:hover::before {
          opacity: 0.9;
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

        .rh-mobile-dropdown { display: none; padding: 0.5rem 0 0.75rem 0; }
        .rh-mobile-dropdown.open { display: block; }

        .rh-mobile-view-all {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.55rem 1rem;
          margin-bottom: 0.75rem;
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.2);
          color: var(--sage);
          text-decoration: none;
          font-size: 0.74rem;
          letter-spacing: 0.08em;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          border-radius: 2px;
        }

        .rh-mobile-group-label {
          display: block;
          padding: 0.6rem 0 0.25rem;
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          opacity: 0.85;
        }

        .rh-mobile-dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0 0.45rem 0.5rem;
          font-size: 0.88rem;
          color: #3a4f3a;
          text-decoration: none;
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.02em;
        }

        .rh-mobile-dropdown-item::before {
          content: '';
          display: block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
          opacity: 0.45;
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
          .rh-nav { display: none; }
          .rh-cta { display: none; }
          .rh-burger { display: flex; }
        }
      `}</style>

      <header className={`rh-header${scrolled ? " scrolled" : ""}`}>
        <div className="rh-inner">

          {/* LOGO */}
          <Link href="/" className="rh-logo">
            <div className="rh-logo-text">
              <span className="rh-logo-main">Rich Haven</span>
              <span className="rh-logo-sub">Enterprises</span>
            </div>
          </Link>

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
                    {/* Soft View All banner */}
                    <Link
                      href={link.href}
                      className="rh-dropdown-banner"
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="rh-dropdown-banner-text">View All Products & Services</span>
                      <span className="rh-dropdown-banner-arrow">
                        Browse all

                      </span>
                    </Link>

                    <div className="rh-dropdown-body">
                      <div className="rh-dropdown-col">
                        <span className="rh-dropdown-col-label">Turf</span>
                        {link.dropdown.turf.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="rh-dropdown-item"
                            role="menuitem"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>

                      <div className="rh-dropdown-col">
                        <span className="rh-dropdown-col-label">Garden</span>
                        {link.dropdown.garden.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="rh-dropdown-item"
                            role="menuitem"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href} className="rh-nav-link">
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <Link href="/contact" className="rh-cta">
            <span>Contact Us</span>
          </Link>

          <button
            className={`rh-burger${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
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

                <span className="rh-mobile-group-label">Turf</span>
                {link.dropdown.turf.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rh-mobile-dropdown-item"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <span className="rh-mobile-group-label">Garden</span>
                {link.dropdown.garden.map((item) => (
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
        <Link href="/contact" className="rh-mobile-cta" onClick={() => setMobileOpen(false)}>
          Contact Us
        </Link>
      </div>
    </>
  );
}