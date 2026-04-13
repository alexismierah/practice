"use client";

import { useEffect, useRef, useState } from "react";

const benefits = [
  {
    title: "Low Maintenance",
    desc: "No watering, trimming, or fertilizing needed.",
  },
  {
    title: "Long-Lasting Quality",
    desc: "Durable materials that stay vibrant and fresh-looking over time.",
  },
  {
    title: "Cost-Effective",
    desc: "No ongoing maintenance costs, replacements, or plant care expenses.",
  },
  {
    title: "All-Weather Friendly",
    desc: "Suitable for indoor and outdoor spaces, resistant to fading and damage.",
  },
  {
    title: "Always Fresh Appearance",
    desc: "Maintains a lush, green look all year round.",
  },
  {
    title: "Versatile Design",
    desc: "Ideal for homes, offices, commercial spaces, events, and decorative projects.",
  },
  {
    title: "Hassle-Free Installation",
    desc: "Easy to install with immediate visual impact.",
  },
  {
    title: "Eco-Conscious Choice",
    desc: "Reduces water usage and eliminates the need for pesticides or fertilizers.",
  },
];

export default function AboutPage() {
  const [visible, setVisible] = useState<boolean[]>(new Array(benefits.length).fill(false));
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => { const n = [...prev]; n[i] = true; return n; });
            obs.disconnect();
          }
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

        :root {
          --forest: #1a2e1a;
          --sage: #4a6741;
          --sage-pale: #f0f4ee;
          --cream: #f7f3ec;
          --gold: #c9a84c;
          --gold-pale: rgba(201,168,76,0.12);
          --white: #ffffff;
          --text-body: #3d4f3d;
          --text-muted: #7a8c7a;
          --border: rgba(26,46,26,0.08);
        }

        .ab, .ab *, .ab *::before, .ab *::after { box-sizing: border-box; }

        .ab {
          font-family: 'Jost', sans-serif;
          background: var(--white);
          color: var(--forest);
        }

        /* ── LAYOUT ── */
        .ab-wrap {
          width: 100%;
          max-width: none;
          margin: 0 auto;
          padding: 5rem clamp(1.25rem, 5vw, 3rem) 7rem;
        }

        /* ── TOP: two-column header ── */
        .ab-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 4rem;
        }

        .ab-header-left {}

        .ab-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.1rem;
        }

        .ab-eyebrow-line {
          width: 20px;
          height: 1px;
          background: var(--gold);
        }

        .ab-eyebrow-text {
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
        }

        .ab-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 500;
          color: var(--forest);
          line-height: 1.12;
          letter-spacing: -0.01em;
        }

        .ab-title em {
          font-style: italic;
          color: var(--sage);
        }

        .ab-header-right {
          padding-top: 0.2rem;
        }

        .ab-intro {
          font-size: 0.9rem;
          line-height: 1.95;
          color: var(--text-body);
          font-weight: 300;
        }

        /* ── WHY SECTION ── */
        .ab-why {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 4rem;
          align-items: start;
        }

        .ab-why-sidebar {
          position: sticky;
          top: 6rem;
        }

        .ab-why-label {
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 0.7rem;
        }

        .ab-why-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 500;
          color: var(--forest);
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .ab-why-note {
          font-size: 0.78rem;
          line-height: 1.7;
          color: var(--text-muted);
          font-weight: 300;
        }

        /* ── BENEFITS LIST ── */
        .ab-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ab-item {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: baseline;
          gap: 1.5rem;
          padding: 1.3rem 0;
          border-bottom: 1px solid var(--border);
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .ab-item:first-child { border-top: 1px solid var(--border); }

        .ab-item.in {
          opacity: 1;
          transform: translateY(0);
        }

        .ab-item:nth-child(1) { transition-delay: 0.00s; }
        .ab-item:nth-child(2) { transition-delay: 0.05s; }
        .ab-item:nth-child(3) { transition-delay: 0.10s; }
        .ab-item:nth-child(4) { transition-delay: 0.15s; }
        .ab-item:nth-child(5) { transition-delay: 0.20s; }
        .ab-item:nth-child(6) { transition-delay: 0.25s; }
        .ab-item:nth-child(7) { transition-delay: 0.30s; }
        .ab-item:nth-child(8) { transition-delay: 0.35s; }

        .ab-item-body {}

        .ab-item-title {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--forest);
          margin-bottom: 0.25rem;
          letter-spacing: 0.01em;
        }

        .ab-item-desc {
          font-size: 0.8rem;
          line-height: 1.65;
          color: var(--text-muted);
          font-weight: 300;
        }

        .ab-item-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.78rem;
          color: rgba(201,168,76,0.5);
          font-weight: 400;
          letter-spacing: 0.04em;
          flex-shrink: 0;
        }

        /* ── CLOSING ── */
        .ab-closing {
          margin-top: 4rem;
          padding: 2.5rem 3rem;
          background: var(--cream);
          border-radius: 4px;
          border: 1px solid rgba(26,46,26,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .ab-closing-text {
          font-size: 0.88rem;
          color: var(--text-body);
          font-weight: 300;
          line-height: 1.65;
          flex: 1;
          min-width: min(100%, 36rem);
        }

        .ab-closing-text strong {
          font-weight: 500;
          color: var(--forest);
        }

        .ab-closing-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.7rem 1.6rem;
          background: var(--forest);
          color: var(--cream);
          text-decoration: none;
          font-size: 0.73rem;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          font-weight: 500;
          border-radius: 2px;
          font-family: 'Jost', sans-serif;
          white-space: nowrap;
          transition: background 0.2s;
          flex-shrink: 0;
        }

        .ab-closing-btn:hover { background: var(--sage); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .ab-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .ab-why { grid-template-columns: 1fr; gap: 2rem; }
          .ab-why-sidebar { position: static; }
          .ab-closing { flex-direction: column; align-items: flex-start; padding: 2rem 1.5rem; }
        }

        @media (max-width: 500px) {
          .ab-item { grid-template-columns: 1fr; gap: 0.2rem; }
          .ab-item-num { display: none; }
        }
      `}</style>

      <main className="ab flex min-h-0 w-full min-w-0 flex-1 flex-col">
        <div className="ab-wrap">

          {/* ── HEADER ── */}
          <div className="ab-header">
            <div className="ab-header-left">
              <div className="ab-eyebrow">
                <span className="ab-eyebrow-line" />
                <span className="ab-eyebrow-text">About Our Business</span>
              </div>
              <h1 className="ab-title">
                Nature-inspired<br />
                beauty, <em>without<br />the maintenance.</em>
              </h1>
            </div>

            <div className="ab-header-right">
              <p className="ab-intro">
                At Rich Haven Artificial Garden, we bring nature-inspired beauty to every space — without the maintenance. We specialize in high-quality artificial greenery, including potted plants, wall greens, hanging plants, and artificial turf, thoughtfully designed to enhance homes, offices, and commercial spaces.
                <br /><br />
                Our products combine realistic aesthetics with durability, offering a lasting green solution that stays fresh and vibrant all year round. Whether you're elevating an interior, transforming an outdoor area, or creating a calming atmosphere, Rich Haven is committed to delivering style, quality, and timeless greenery you can rely on.
              </p>
            </div>
          </div>

          {/* ── WHY SECTION ── */}
          <div className="ab-why">
            <div className="ab-why-sidebar">
              <div className="ab-why-label">Why choose us</div>
              <h2 className="ab-why-heading">Eight reasons to go green with Rich Haven.</h2>
              <p className="ab-why-note">Artificial greenery that works as beautifully as it looks — built to last, season after season.</p>
            </div>

            <ul className="ab-list">
              {benefits.map((b, i) => (
                <li
                  key={b.title}
                  className={`ab-item${visible[i] ? " in" : ""}`}
                  ref={(el) => { refs.current[i] = el; }}
                >
                  <div className="ab-item-body">
                    <div className="ab-item-title">{b.title}</div>
                    <p className="ab-item-desc">{b.desc}</p>
                  </div>
                  <span className="ab-item-num">0{i + 1}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CLOSING ── */}
          <div className="ab-closing">
            <p className="ab-closing-text">
              <strong>Ready to transform your space?</strong> Explore our full range of artificial turf, potted plants, wall greens, and hanging arrangements.
            </p>
            <a href="/products-services" className="ab-closing-btn">
              Browse Products & Services
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </main>
    </>
  );
}