export default function AboutPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif", color: "#1a1a1a", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        .ab-wrap {
          max-width: 960px;
          margin: 0 auto;
          padding: 56px 48px 48px;
        }

        /* ── Intro ── */
        .ab-intro {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-bottom: 0;
        }

        .ab-eyebrow {
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #9DA68E;
          margin-bottom: 20px;
        }

        .ab-headline {
          font-size: clamp(1.6rem, 4vw, 4rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: #0d1b0f;
          margin: 0;
        }

        .ab-headline em {
          font-style: italic;
          color: #2d5040;
        }

        .ab-body {
          font-size: 17px;
          font-weight: 300;
          color: #4a5450;
          line-height: 1.8;
          margin: 0 0 28px;
          text-align: justify;
        }

        /* ── Stats ── */
        .ab-stats {
          display: flex;
          gap: 2rem;
        }

        .ab-stat-num {
          font-size: 2.2rem;
          font-weight: 300;
          color: #2d5040;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .ab-stat-label {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b0b8a8;
          margin-top: 6px;
        }

        /* ── Story ── */
        .ab-story {
          padding-top: 0;
        }

        .ab-block {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 2rem;
          align-items: baseline;
          padding: 28px 0;
        }

        .ab-block-left {
          display: flex;
          align-items: baseline;
          gap: 12px;
        }

        .ab-block-num {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.18em;
          color: #c8d2b8;
        }

        .ab-block-tag {
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #4a5450;
        }

        .ab-block-heading {
          font-size: 22px;
          font-weight: 400;
          color: #0d1b0f;
          margin: 0 0 10px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .ab-block-body {
          font-size: 16px;
          font-weight: 300;
          color: #6b7060;
          line-height: 1.75;
          margin: 0;
        }

        /* ── Closing ── */
        .ab-closing-section {
          background: #f7f7f7;
          padding: 100px 60px;
          text-align: center;
        }

        .ab-closing-inner {
          max-width: 680px;
          margin: 0 auto;
        }

        .ab-closing-quote {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 400;
          font-style: italic;
          line-height: 1.45;
          margin: 0 0 24px;
          color: #111111;
        }

        .ab-closing-sig {
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #204e0d;
          display: block;
        }

        /* ── Responsive ── */
        @media (max-width: 720px) {
          .ab-wrap { padding: 48px 24px 56px; }
          .ab-intro { grid-template-columns: 1fr; gap: 1.5rem; padding-bottom: 32px; }
          .ab-block { grid-template-columns: 1fr; gap: 6px; }
          .ab-closing { flex-direction: column; gap: 12px; }
        }
      `}</style>

      {/* Intro — lighter gray */}
      <section style={{ background: "#f7f7f7" }}>
        <div className="ab-wrap">
          <div className="ab-intro">
            <div>
              <p className="ab-eyebrow">About Rich Haven</p>
              <h1 className="ab-headline">Nature&apos;s beauty, <em>without</em> the upkeep.</h1>
            </div>
            <div>
              <p className="ab-body">
                At Rich Haven Artificial Garden, we bring nature-inspired beauty to every
                space — without the maintenance. Thoughtfully designed greenery for homes,
                offices, and commercial spaces that stays fresh and vibrant all year round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story — light gray */}
      <section style={{ background: "#efefef" }}>
        <div className="ab-wrap" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
          <div className="ab-story">
            <div className="ab-block">
              <div className="ab-block-left">
                <span className="ab-block-num">01</span>
                <span className="ab-block-tag">What we do</span>
              </div>
              <div>
                <p className="ab-block-heading">High-quality artificial greenery for every kind of space.</p>
                <p className="ab-block-body">
                  We specialize in potted plants, wall greens, hanging plants, and artificial
                  turf — each piece crafted to bring the calm and character of nature indoors
                  and out, with none of the watering, pruning, or seasonal fuss.
                </p>
              </div>
            </div>

            <div className="ab-block">
              <div className="ab-block-left">
                <span className="ab-block-num">02</span>
                <span className="ab-block-tag">How we do it</span>
              </div>
              <div>
                <p className="ab-block-heading">Realistic aesthetics. Built to last.</p>
                <p className="ab-block-body">
                  Our products are designed to look and feel like the real thing — because
                  artificial shouldn&apos;t mean artificial-looking. We combine durable materials
                  with careful attention to detail so every piece holds its color, shape, and
                  presence for years, not months.
                </p>
              </div>
            </div>

            <div className="ab-block">
              <div className="ab-block-left">
                <span className="ab-block-num">03</span>
                <span className="ab-block-tag">Our promise</span>
              </div>
              <div>
                <p className="ab-block-heading">Style, quality, and greenery you can rely on.</p>
                <p className="ab-block-body">
                  Whether you&apos;re elevating an interior, transforming an outdoor area, or
                  creating a calming atmosphere, Rich Haven is committed to delivering a
                  lasting green solution — one that looks just as good on day one as it does
                  two years later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="ab-closing-section">
        <div className="ab-closing-inner">
          <p className="ab-closing-quote">
            &ldquo;A lasting green solution that stays fresh and vibrant all year round.&rdquo;
          </p>
          <span className="ab-closing-sig">Rich Haven Artificial Garden</span>
        </div>
      </section>
    </main>
  );
}
