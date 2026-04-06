"use client"

import Link from "next/link"

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Engineers" },
]

const values = [
  {
    title: "Reliability",
    desc: "We build systems that work — day one and decade ten. Uptime isn't a feature, it's our baseline.",
    icon: `<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  },
  {
    title: "Innovation",
    desc: "From IP-PBX to solar power, we stay ahead of the curve so your infrastructure never falls behind.",
    icon: `<path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  },
  {
    title: "Partnership",
    desc: "We don't hand off and disappear. We stay invested in your outcomes long after installation day.",
    icon: `<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
  },
]

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --blue:     #3a89dd;
          --blue-dk:  #2263a8;
          --blue-lt:  #e8f3fd;
          --ink:      #0d1117;
          --ink-2:    #2d3748;
          --ink-3:    #718096;
          --rule:     rgba(13,17,23,0.08);
        }

        .about-root {
          font-family: 'Outfit', sans-serif;
          color: var(--ink-2);
        }

        /* ── Hero ── */
        .about-hero {
          position: relative;
          min-height: 52vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0d1117;
        }

        .about-hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 80% at 20% 50%, rgba(58,137,221,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 80% 20%, rgba(34,99,168,0.12) 0%, transparent 55%);
        }

        /* subtle grid lines */
        .about-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .about-hero-inner {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 6rem 2.5rem 5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }

        @media (max-width: 768px) {
          .about-hero-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 5rem 1.5rem 4rem;
          }
          .about-hero-right { display: none; }
        }

        .about-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue);
          background: rgba(58,137,221,0.12);
          border: 1px solid rgba(58,137,221,0.2);
          border-radius: 20px;
          padding: 5px 12px;
          margin-bottom: 1.25rem;
        }

        .about-hero-h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2.5rem, 5vw, 3.75rem);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1.25rem;
        }

        .about-hero-h1 em {
          font-style: italic;
          color: var(--blue);
        }

        .about-hero-p {
          font-size: 1.0625rem;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(255,255,255,0.6);
          max-width: 420px;
          margin-bottom: 2rem;
        }

        .about-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--blue);
          color: #fff;
          padding: 11px 22px;
          border-radius: 9px;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 20px rgba(58,137,221,0.35);
          transition: background 0.2s, transform 0.15s;
        }
        .about-hero-cta:hover { background: var(--blue-dk); transform: translateY(-1px); }

        /* right side cards */
        .about-hero-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .about-stat-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 1.25rem;
          backdrop-filter: blur(8px);
          transition: border-color 0.2s, background 0.2s;
        }
        .about-stat-card:hover {
          border-color: rgba(58,137,221,0.35);
          background: rgba(58,137,221,0.07);
        }
        .about-stat-val {
          font-family: 'DM Serif Display', serif;
          font-size: 2rem;
          color: #fff;
          line-height: 1;
          margin-bottom: 4px;
        }
        .about-stat-lbl {
          font-size: 0.775rem;
          font-weight: 400;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.02em;
        }

        /* ── Story ── */
        .about-story {
          background: #fff;
          padding: 6rem 2.5rem;
        }

        .about-story-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 5rem;
          align-items: start;
        }

        @media (max-width: 768px) {
          .about-story-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .about-story { padding: 4rem 1.5rem; }
        }

        .about-story-left {
          position: sticky;
          top: 100px;
        }

        .about-section-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 0.75rem;
        }

        .about-story-h2 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          font-weight: 400;
          color: var(--ink);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }

        .about-story-h2 em {
          font-style: italic;
          color: var(--blue);
        }

        .about-story-rule {
          width: 40px;
          height: 2px;
          background: var(--blue);
          border-radius: 1px;
          margin-top: 1.5rem;
        }

        .about-story-body p {
          font-size: 1.025rem;
          font-weight: 300;
          line-height: 1.85;
          color: var(--ink-3);
          margin-bottom: 1.5rem;
        }

        .about-story-body p:last-child { margin-bottom: 0; }

        .about-story-body strong {
          font-weight: 500;
          color: var(--ink-2);
        }

        /* ── Values ── */
        .about-values {
          background: #f8fafc;
          border-top: 1px solid var(--rule);
          padding: 6rem 2.5rem;
        }

        .about-values-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .about-values-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3rem;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .about-values-h2 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 400;
          color: var(--ink);
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .about-values-h2 em { font-style: italic; color: var(--blue); }

        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        @media (max-width: 768px) {
          .about-values-grid { grid-template-columns: 1fr; }
          .about-values { padding: 4rem 1.5rem; }
        }

        .about-val-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 18px;
          padding: 2rem;
          transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
        }
        .about-val-card:hover {
          box-shadow: 0 8px 32px rgba(13,17,23,0.08);
          transform: translateY(-3px);
          border-color: rgba(58,137,221,0.2);
        }

        .about-val-icon {
          width: 44px;
          height: 44px;
          background: var(--blue-lt);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          color: var(--blue);
        }

        .about-val-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.2rem;
          color: var(--ink);
          margin-bottom: 0.6rem;
          letter-spacing: -0.01em;
        }

        .about-val-desc {
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.75;
          color: var(--ink-3);
        }

        /* ── CTA strip ── */
        .about-cta-strip {
          background: var(--ink);
          padding: 5rem 2.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .about-cta-strip::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 100% at 50% 100%, rgba(58,137,221,0.15) 0%, transparent 65%);
        }

        .about-cta-strip-inner {
          position: relative;
          max-width: 560px;
          margin: 0 auto;
        }

        .about-cta-h2 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          color: #fff;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .about-cta-p {
          font-size: 1rem;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .about-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--blue);
          color: #fff;
          padding: 13px 26px;
          border-radius: 10px;
          font-size: 0.925rem;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 24px rgba(58,137,221,0.4);
          transition: background 0.2s, transform 0.15s;
        }
        .about-cta-btn:hover { background: var(--blue-dk); transform: translateY(-2px); }
      `}</style>

      <div className="about-root">

        {/* Story */}
        <section className="about-story">
          <div className="about-story-inner">
            <div className="about-story-left">
              <span className="about-section-tag">Our Story</span>
              <h2 className="about-story-h2">Unifix ICT Solutions</h2>
              <div className="about-story-rule" />
            </div>
            <div className="about-story-body">
              <p>
                Back in 2014, <strong>Unifix</strong> was established with purpose to provide dependable telecommunications, security, and ICT solutions that meet the needs of businesses. From the beginning, the company believed that technology should make work easier and that every client deserves solutions built with care and reliability.
              </p>
              <p>
                That same commitment continues today. Unifix focuses on delivering cost-effective systems, technical support, and solutions tailored to client requirements. Every project is handled with attention to detail, ensuring that issues are identified and resolved efficiently because quality service is never compromised.
              </p>
              <p>
                At its core, Unifix is about trust and partnership. The team supports clients from planning to implementation, making sure they feel confident in their systems and in their choice. Every solution is treated as if it were for their own business, because when clients succeed, Unifix succeeds too
              </p>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="about-cta-strip">
          <div className="about-cta-strip-inner">
            <h2 className="about-cta-h2">Ready to build something that lasts?</h2>
            <p className="about-cta-p">
              Let's talk about your project. We'll recommend the right solution and handle it from end to end.
            </p>
            <Link href="/contact" className="about-cta-btn">
              Get a free consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}