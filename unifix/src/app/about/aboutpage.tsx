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
          font-family: 'Instrument Sans', sans-serif;
          color: var(--ink-2);
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
          font-family: 'Instrument Sans', sans-serif;
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
          font-family: 'Instrument Sans', sans-serif;
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
              <h2 className="about-story-h2">Unifix ICT <em>Solutions</em></h2>
              <div className="about-story-rule" />
            </div>
            <div className="about-story-body">
              <p>
                Back in 2014, Unifix was established with purpose to provide dependable telecommunications, security, and ICT solutions that meet the needs of businesses. From the beginning, the company believed that technology should make work easier and that every client deserves solutions built with care and reliability.
              </p>
              <p>
                That same commitment continues today. Unifix focuses on delivering cost-effective systems, technical support, and solutions tailored to client requirements. Every project is handled with attention to detail, ensuring that issues are identified and resolved efficiently because quality service is never compromised.
              </p>
              <p>
                At its core, Unifix is about trust and partnership. The team supports clients from planning to implementation, making sure they feel confident in their systems and in their choice. Every solution is treated as if it were for their own business, because when clients succeed, Unifix succeeds too.
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
            <a href="#footer" className="about-cta-btn" onClick={scrollToFooter}>
              Request a Quote
            </a>
          </div>
        </section>
      </div>
    </>
  )
}