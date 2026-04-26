export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --deep-green: #1a2e1e;
          --mid-green: #2d4a32;
          --sage: #7a9e7e;
          --warm-white: #faf8f4;
          --warm-cream: #f3f0e9;
          --text-muted: #6b7c6d;
        }

        body {
          background-color: var(--warm-white);
          color: var(--deep-green);
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        .about-page {
          min-height: 100vh;
        }

        /* ── Hero ── */
        .hero {
          padding: 100px 24px 64px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 1px;
          background-color: var(--sage);
          opacity: 0.6;
        }

        .eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--sage);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .eyebrow::before,
        .eyebrow::after {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: var(--sage);
          opacity: 0.5;
        }

        .hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: clamp(40px, 6vw, 50px);
          line-height: 1.05;
          color: var(--deep-green);
          margin-bottom: 22px;
          letter-spacing: -0.5px;
          margin-top: 50px;
        }

        .hero-title em {
          font-style: italic;
          color: var(--mid-green);
        }

        .hero-desc {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 1.85;
          color: var(--text-muted);
          max-width: 600px;
        }

        /* ── Pillars section ── */
        .pillars {
          max-width: 960px;
          margin: 0 auto;
          padding: 32px 24px 96px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .pillar-item {
          padding: 36px 0;
          width: 100%;
          max-width: 680px;
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 0 40px;
          align-items: start;
        }

        .pillar-item + .pillar-item {
          border-top: 1px solid var(--warm-cream);
        }

        .pillar-left {
          padding-top: 3px;
        }

        .pillar-number {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--sage);
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .pillar-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: clamp(18px, 2.5vw, 22px);
          line-height: 1.2;
          color: var(--deep-green);
        }

        .pillar-right {}

        .pillar-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-style: italic;
          font-weight: 300;
          font-size: 15px;
          color: var(--deep-green);
          margin-bottom: 10px;
          opacity: 0.75;
        }

        .pillar-body {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 15.5px;
          line-height: 1.8;
          color: var(--text-muted);
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .pillar-item {
            grid-template-columns: 1fr;
            gap: 12px 0;
            max-width: 100%;
          }
        }
      `}</style>

      <div className="about-page">
        {/* ── Hero ── */}
        <section className="hero">
          <h1 className="hero-title">
            About <em>Rich Haven</em>
          </h1>
          <p className="hero-desc">
            We bring nature-inspired beauty to every space — without the maintenance.
            Thoughtfully designed greenery for homes, offices, and commercial spaces
            that stays fresh and vibrant all year round.
          </p>
        </section>

        {/* ── Pillars ── */}
        <section className="pillars">
          {[
            {
              number: "01",
              title: "What we do",
              subtitle: "High-quality artificial greenery for every kind of space.",
              body: "Our collection covers potted plants, wall greens, hanging plants, and artificial turf — bringing the calm of nature indoors and out with none of the upkeep.",
            },
            {
              number: "02",
              title: "How we do it",
              subtitle: "Realistic aesthetics. Built to last.",
              body: "Our products are designed to look and feel like the real thing — because artificial shouldn't mean artificial-looking. Durable materials, careful detail, and color that holds for years, not months.",
            },
          ].map((item, i) => (
            <div key={i} className="pillar-item">
              <div className="pillar-left">
                <h2 className="pillar-title">{item.title}</h2>
              </div>
              <div className="pillar-right">
                <p className="pillar-subtitle">{item.subtitle}</p>
                <p className="pillar-body">{item.body}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}