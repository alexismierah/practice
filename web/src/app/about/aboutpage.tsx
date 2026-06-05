"use client"

export default function AboutPage() {
  function scrollToFooter(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const el = document.getElementById("footer")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@300;400;500;600&display=swap');

        :root {
          --blue:    #2b72cc;
          --blue-dk: #1a4f99;
          --ink:     #0d1117;
          --ink-2:   #2d3748;
          --ink-3:   #718096;
          --smoke:   #f7f9fc;
          --rule:    rgba(13,17,23,0.08);
        }

        .about-root {
          font-family: 'Instrument Sans', sans-serif;
          color: var(--ink-2);
          background: #fff;
        }

        .section-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 0.75rem;
        }

        /* ── STORY ── */
        .about-story {
          background: #fff;
          padding: 5rem 1.5rem;
          border-bottom: 1px solid var(--rule);
        }
        .about-story-inner {
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        @media (min-width: 769px) {
          .about-story { padding: 7rem 2.5rem; }
          .about-story-inner { grid-template-columns: 240px 1fr; gap: 5rem; }
          .about-story-left { position: sticky; top: 100px; }
        }
        .about-story-h2 {
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 500;
          color: var(--ink);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 0.75rem;
        }
        .about-story-h2 em { font-style: italic; color: var(--blue); font-weight: 400; }
        .about-story-rule { width: 32px; height: 2px; background: var(--blue); border-radius: 1px; margin-top: 1.25rem; }
        .about-story-body p {
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.9;
          color: var(--ink-3);
          margin-bottom: 1.4rem;
        }
        .about-story-body p:last-child { margin-bottom: 0; }
        .about-story-body strong { font-weight: 500; color: var(--ink-2); }

        /* ── MISSION & VISION ── */
        .about-mv {
          background: var(--smoke);
          padding: 5rem 1.5rem;
        }
        @media (min-width: 769px) { .about-mv { padding: 6rem 2.5rem; } }
        .about-mv-inner { max-width: 1080px; margin: 0 auto; }
        .about-mv-header { margin-bottom: 2.5rem; }
        .about-mv-title {
          font-size: clamp(1.6rem, 2.5vw, 2rem);
          font-weight: 500;
          color: var(--ink);
          margin: 0;
          letter-spacing: -0.02em;
        }
        .about-mv-title em { font-style: italic; color: var(--blue); font-weight: 400; }
        .about-mv-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 700px) { .about-mv-cards { grid-template-columns: 1fr 1fr; gap: 1.5rem; } }
        .about-mv-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 12px;
          padding: 2.25rem;
          position: relative;
        }

        .about-mv-card-label {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 0.6rem;
        }
        .about-mv-card-h3 {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--ink);
          margin: 0 0 0.9rem;
          letter-spacing: -0.01em;
        }
        .about-mv-card-p {
          font-size: 0.95rem;
          font-weight: 300;
          line-height: 1.85;
          color: var(--ink-3);
          margin: 0;
        }
        .about-mv-card-p strong { font-weight: 500; color: var(--ink-2); }

        /* ── CTA ── */
        .about-cta {
          background: var(--ink);
          padding: 5rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .about-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 100% at 50% 110%, rgba(43,114,204,0.15) 0%, transparent 65%);
        }
        .about-cta-inner { position: relative; max-width: 500px; margin: 0 auto; }
        .about-cta-h2 {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 500;
          color: #fff;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          line-height: 1.25;
        }
        .about-cta-p {
          font-size: 0.975rem;
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          margin-bottom: 2rem;
          line-height: 1.7;
        }
        .about-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--blue);
          color: #fff;
          padding: 12px 26px;
          border-radius: 9999px;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 20px rgba(43,114,204,0.35);
          transition: background 0.2s, transform 0.15s;
        }
        .about-cta-btn:hover { background: var(--blue-dk); transform: translateY(-2px); }
        .about-cta-btn svg { width: 15px; height: 15px; }
      `}</style>

      <div className="about-root">

        {/* Story */}
        <section className="about-story">
          <div className="about-story-inner">
            <div className="about-story-left">
              <span className="section-tag">Our Story</span>
              <h2 className="about-story-h2">Unifix ICT <em>Solutions</em></h2>
              <div className="about-story-rule" />
            </div>
            <div className="about-story-body">
              <p>
                Back in 2014, Unifix was established with purpose to provide dependable telecommunications, security, and ICT solutions that meet the needs of businesses. From the beginning, the company believed that technology should make work easier and that every client deserves solutions built with care and reliability.
              </p>
              <p>
                At its core, Unifix is about trust and partnership. The team supports clients from planning to implementation, making sure they feel confident in their systems and in their choice. Every solution is treated as if it were for their own business, because when clients succeed, Unifix succeeds too.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-mv">
          <div className="about-mv-inner">
            <div className="about-mv-header">
              <span className="section-tag">What Drives Us</span>
              <h2 className="about-mv-title">Mission &amp; <em>Vision</em></h2>
            </div>
            <div className="about-mv-cards">
              <div className="about-mv-card">
                <div className="about-mv-card-label">Our Mission</div>
                <h3 className="about-mv-card-h3">Delivering Solutions That Work</h3>
                <p className="about-mv-card-p">
                  Unifix ICT Solutions is committed to delivering reliable, cost-effective, and innovative information and communication technology solutions that empower businesses to operate efficiently and securely. We strive to provide high-quality services through technical excellence, responsive support, and strong client partnerships built on trust and integrity.
                </p>
              </div>
              <div className="about-mv-card">
                <div className="about-mv-card-label">Our Vision</div>
                <h3 className="about-mv-card-h3">A Connected, Secure Future</h3>
                <p className="about-mv-card-p">
                  To be a trusted and leading ICT solutions provider recognized for excellence, innovation, and dependable service — empowering organizations to achieve digital transformation and sustainable growth through advanced technology and strong partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="about-cta-inner">
            <h2 className="about-cta-h2">Ready to build something that lasts?</h2>
            <p className="about-cta-p">
              Let's talk about your project. We'll recommend the right solution and handle it from end to end.
            </p>
            <a href="#footer" className="about-cta-btn" onClick={scrollToFooter}>
              Request a Quote
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </section>

      </div>
    </>
  )
}