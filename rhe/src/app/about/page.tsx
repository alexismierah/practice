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
          --gold: #c9a96e;
          --warm-white: #faf8f4;
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
          padding: 100px 24px 56px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--sage);
          margin-bottom: 18px;
        }

        .hero-title {
          font-family: 'DM Sans', serif;
          font-weight: 300;
          font-size: clamp(44px, 7vw, 55px);
          line-height: 1.0;
          color: var(--deep-green);
          margin-bottom: 24px;
        }

        .hero-title em {
          font-style: italic;
          color: var(--mid-green);
        }

        .hero-desc {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 1.8;
          color: var(--text-muted);
          max-width: 680px;
        }

        /* ── Pillars section ── */
        .pillars {
          max-width: 960px;
          margin: 0 auto;
          padding: 32px 24px 72px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .pillar-item {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 0 32px;
          padding: 18px 0;
          width: 100%;
          max-width: 720px;
        }

        .pillar-number {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--sage);
          padding-top: 3px;
          white-space: nowrap;
        }

        .pillar-title {
          font-family: 'DM Sans', serif;
          font-weight: 400;
          font-size: clamp(22px, 3vw, 30px);
          line-height: 1.15;
          color: var(--deep-green);
          margin-bottom: 4px;
        }

        .pillar-subtitle {
          font-family: 'DM Sans', serif;
          font-style: italic;
          font-weight: 300;
          font-size: 16px;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .pillar-body {
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 16px;
          line-height: 1.75;
          color: var(--text-muted);
        }

        /* ── Responsive ── */
        @media (max-width: 600px) {
          .pillar-item {
            grid-template-columns: 1fr;
            gap: 6px 0;
          }
        }
      `}</style>

      <div className="about-page">
        {/* ── Hero ── */}
        <section className="hero">
          <p className="eyebrow"></p>
          <h1 className="hero-title">
            About <em>Rich Haven</em>
          </h1>
          <p className="hero-desc">
            At Rich Haven Artificial Garden, we bring nature-inspired beauty to every space — without the maintenance.
            Thoughtfully designed greenery for homes, offices, and commercial spaces that stays fresh and vibrant all year round.
          </p>
        </section>

        {/* ── Pillars ── */}
        <section className="pillars">
          {[
            {
              num: "01 —",
              title: "What we do",
              subtitle: "High-quality artificial greenery for every kind of space.",
              body: "Our collection covers potted plants, wall greens, hanging plants, and artificial turf — bringing the calm of nature indoors and out with none of the upkeep.",
            },
            {
              num: "02 —",
              title: "How we do it",
              subtitle: "Realistic aesthetics. Built to last.",
              body: "Our products are designed to look and feel like the real thing — because artificial shouldn't mean artificial-looking. Durable materials, careful detail, and color that holds for years, not months.",
            },
            {
              num: "03 —",
              title: "Our promise",
              subtitle: "Style, quality, and greenery you can rely on.",
              body: "Nature's beauty, without the upkeep. Every piece Rich Haven delivers is built to stay fresh and vibrant all year round, season after season.",
            },
          ].map((item, i) => (
            <div key={i} className="pillar-item">
              <div className="pillar-number">{item.num}</div>
              <div>
                <h2 className="pillar-title">{item.title}</h2>
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