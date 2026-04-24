export default function AboutPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: "#1a1a1a", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .ab-wrap {
          --accent: #2d4a27;
          --accent-light: #8fa882;
          --text: #1c1e19;
          --text-muted: #6b7060;
          --font: "DM Sans", sans-serif;

          font-family: var(--font);
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 60px;
        }

        /* ── Our Story two-column ── */
        .ab-story-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 10rem;
          align-items: start;
        }

        .ab-left {
          position: sticky;
          top: 40px;
        }

        .ab-eyebrow {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent-light);
          margin: 0 0 12px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ab-headline {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text);
          margin: 0 0 20px;
        }

        .ab-headline em {
          font-style: italic;
          font-weight: 200;
          color: var(--accent);
        }


        /* ── Right paragraphs ── */
        .ab-right {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
          padding-top: 8px;
          max-width: 600px;
        }

        .ab-body {
          font-size: 15px;
          font-weight: 300;
          color: var(--text-muted);
          line-height: 1.8;
          margin: 0;
          text-align: justify;
        }

        /* ── Numbered blocks ── */
        .ab-blocks-grid {
          border-top: 1px solid rgba(45,74,39,0.12);
          padding-top: 2rem;
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .ab-block-num {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--accent-light);
          margin-bottom: 12px;
        }

        .ab-block-heading {
          font-size: 15px;
          font-weight: 400;
          color: var(--text);
          margin: 0 0 12px;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .ab-block-body {
          font-size: 15px;
          font-weight: 300;
          color: var(--text-muted);
          line-height: 1.8;
          margin: 0;
        }

        /* ── Closing ── */
        .ab-closing {
          background: #efefef;
          padding: 100px 60px;
          text-align: center;
          margin-top: 80px;
        }

        .ab-closing-inner {
          max-width: 680px;
          margin: 0 auto;
        }

        .ab-closing-quote {
          font-size: clamp(1.3rem, 2.5vw, 2rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.55;
          margin: 0 0 24px;
          color: var(--text);
        }

        .ab-closing-sig {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .ab-wrap { padding: 48px 24px; }
          .ab-story-grid { grid-template-columns: 1fr; gap: 2rem; }
          .ab-left { position: static; }
          .ab-blocks-grid { grid-template-columns: 1fr; gap: 2rem; }
          .ab-closing { padding: 64px 24px; }
        }
      `}</style>

      <section style={{ background: "#f7f7f7" }}>
        <div className="ab-wrap">
          {/* Our Story — two-column */}
          <div className="ab-story-grid">
            <div className="ab-left">
              <p className="ab-eyebrow">Our Story</p>
              <h1 className="ab-headline">
                Rich Haven Artificial
                <em>Garden</em>
              </h1>
            </div>

            <div className="ab-right">
              <p className="ab-body">
                At Rich Haven Artificial Garden, we bring nature-inspired beauty to every
                space — without the maintenance. Thoughtfully designed greenery for homes,
                offices, and commercial spaces that stays fresh and vibrant all year round.
              </p>

              <div className="ab-blocks-grid">
                <div>
                  <p className="ab-block-num">01 — What we do</p>
                  <p className="ab-block-heading">High-quality artificial greenery for every kind of space.</p>
                  <p className="ab-block-body">
                    Our collection covers potted plants, wall greens, hanging plants, and
                    artificial turf — bringing the calm of nature indoors and out with
                    none of the upkeep.
                  </p>
                </div>
                <div>
                  <p className="ab-block-num">02 — How we do it</p>
                  <p className="ab-block-heading">Realistic aesthetics. Built to last.</p>
                  <p className="ab-block-body">
                    Our products are designed to look and feel like the real thing — because
                    artificial shouldn&apos;t mean artificial-looking. Durable materials,
                    careful detail, and color that holds for years, not months.
                  </p>
                </div>
                <div>
                  <p className="ab-block-num">03 — Our promise</p>
                  <p className="ab-block-heading">Style, quality, and greenery you can rely on.</p>
                  <p className="ab-block-body">
                    Nature&apos;s beauty, without the upkeep. Every piece Rich Haven delivers
                    is built to stay fresh and vibrant all year round, season after season.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
