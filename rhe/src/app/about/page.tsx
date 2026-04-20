export default function AboutPage() {
  return (
    <main className="rh-about">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400;1,9..40,500&display=swap");

        :root {
          --forest:   #0f2318;
          --fern:     #1c4a2e;
          --sage:     #3a7a52;
          --mist:     #b8d4bc;
          --cream:    #f5f5f5;
          --ivory:    #ffffff;
          --stone:    #9aaa9d;
          --border:   rgba(26,61,40,0.12);
          --border-l: rgba(26,61,40,0.07);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .rh-about {
          font-family: "DM Sans", sans-serif;
          background: #ffffff;
          color: var(--forest);
          overflow-x: hidden;
        }

        /* ─── HERO ─────────────────────────────── */
        .about-hero {
          position: relative;
          height: 56vh;
          min-height: 380px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }

        .about-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 40%;
          filter: brightness(0.55) saturate(0.85);
        }

        .about-hero-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,25,15,0.88) 0%, rgba(10,25,15,0.3) 60%, transparent 100%);
        }

        .about-hero-content {
          position: relative;
          z-index: 2;
          padding: 0 80px 64px;
          width: 100%;
        }

        .about-hero-kicker {
          font-size: 9px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--mist);
          font-weight: 500;
          margin-bottom: 16px;
          opacity: 0.8;
        }

        .about-hero-title {
          font-family: "DM Sans", sans-serif;
          font-weight: 300;
          font-size: clamp(2.8rem, 5vw + 0.5rem, 5.5rem);
          line-height: 1.06;
          color: #fff;
          letter-spacing: -0.03em;
          max-width: 680px;
        }

        .about-hero-title em {
          font-style: italic;
          color: var(--mist);
          font-weight: 300;
        }

        /* ─── SPLIT SECTION ─────────────────────── */
        .about-split {
          display: grid;
          grid-template-columns: 1fr 1px 1.35fr;
          min-height: 520px;
        }

        .about-split-left {
          padding: 88px 72px 88px 80px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start; /* ← fixed: was center, now aligns to top like right side */
          position: sticky;
          top: 80px;
          align-self: start;
        }

        .about-split-divider {
          background: linear-gradient(to bottom, transparent, var(--border), transparent);
          align-self: stretch;
        }

        .about-split-right {
          padding: 167px 80px 88px 72px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .company-eyebrow {
          font-size: 9px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--sage);
          font-weight: 600;
          margin-bottom: 20px;
          margin-top: -4px; /* ← matches story-eyebrow negative offset so both eyebrows sit at the same baseline */
        }

        .company-name {
          font-family: "DM Sans", sans-serif;
          font-weight: 300;
          font-size: clamp(2rem, 3vw + 0.5rem, 3.4rem);
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--forest);
        }

        .company-name em {
          font-style: italic;
          color: var(--sage);
          font-weight: 300;
        }

        .company-tagline {
          margin-top: 28px;
          font-size: 13px;
          color: var(--stone);
          line-height: 1.85;
          font-weight: 300;
          max-width: 260px;
        }

        .company-since {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .company-since-year {
          font-family: "DM Sans", sans-serif;
          font-size: clamp(2.8rem, 4vw, 4.5rem);
          font-weight: 200;
          color: var(--forest);
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .company-since-label {
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--stone);
          font-weight: 500;
        }

        /* ─── STORY ─────────────────────────────── */
        .story-block {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .story-eyebrow {
          font-size: 9px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--sage);
          font-weight: 600;
          margin-bottom: 6px;
        }

        .story-heading {
          font-family: "DM Sans", sans-serif;
          font-weight: 300;
          font-size: clamp(1.5rem, 1.8vw + 0.5rem, 2rem);
          color: var(--forest);
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }

        .story-heading em {
          font-style: italic;
          color: var(--sage);
          font-weight: 300;
        }

        .story-body {
          font-size: 14.5px;
          color: var(--stone);
          line-height: 1.9;
          font-weight: 300;
        }

        .story-divider {
          width: 40px;
          height: 1px;
          background: var(--border);
          margin: 8px 0;
        }

        /* ─── STATS ROW ─────────────────────────── */
        .about-stats {
          background: #fafafa;
          border-top: 1px solid var(--border-l);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .stat-item {
          padding: 64px 48px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          border-right: 1px solid var(--border-l);
        }

        .stat-item:last-child { border-right: none; }

        .stat-number {
          font-family: "DM Sans", sans-serif;
          font-size: clamp(2.8rem, 4vw, 4rem);
          font-weight: 200;
          color: var(--forest);
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .stat-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--stone);
          font-weight: 500;
        }

        .stat-desc {
          font-size: 13px;
          color: var(--stone);
          line-height: 1.7;
          font-weight: 300;
          margin-top: 4px;
        }

        /* ─── VALUES STRIP ──────────────────────── */
        .about-values {
          padding: 96px 80px;
          background: #ffffff;
        }

        .values-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .values-eyebrow {
          font-size: 9px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--sage);
          font-weight: 600;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .values-heading {
          font-family: "DM Sans", sans-serif;
          font-weight: 300;
          font-size: clamp(1.7rem, 2.2vw + 0.5rem, 2.6rem);
          color: var(--forest);
          line-height: 1.14;
          letter-spacing: -0.02em;
        }

        .values-heading em {
          font-style: italic;
          color: var(--sage);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border-l);
          border: 1px solid var(--border-l);
        }

        .value-card {
          background: #fff;
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .value-number {
          font-size: 9px;
          letter-spacing: 0.24em;
          color: var(--stone);
          font-weight: 500;
          opacity: 0.6;
        }

        .value-title {
          font-family: "DM Sans", sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: var(--fern);
          letter-spacing: -0.01em;
        }

        .value-desc {
          font-size: 13px;
          color: var(--stone);
          line-height: 1.85;
          font-weight: 300;
        }

        /* ─── RESPONSIVE ────────────────────────── */
        @media (max-width: 1024px) {
          .about-hero-content { padding: 0 48px 52px; }
          .about-split-left { padding: 72px 48px 72px 48px; }
          .about-split-right { padding: 72px 48px; }
          .about-values { padding: 80px 48px; }
          .stat-item { padding: 56px 36px; }
        }

        @media (max-width: 900px) {
          .about-split { grid-template-columns: 1fr; }
          .about-split-divider { display: none; }
          .about-split-left {
            position: static;
            padding: 64px 40px 40px;
            border-bottom: 1px solid var(--border-l);
          }
          .about-split-right { padding: 40px 40px 64px; }
          .company-tagline { max-width: 100%; }
          .about-stats { grid-template-columns: 1fr 1fr; }
          .stat-item:nth-child(2) { border-right: none; }
          .stat-item:nth-child(3) { border-top: 1px solid var(--border-l); grid-column: 1 / 3; }
          .values-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .about-hero-content { padding: 0 28px 44px; }
          .about-split-left, .about-split-right { padding: 48px 28px; }
          .about-values { padding: 64px 28px; }
          .stat-item { padding: 44px 28px; }
          .about-stats { grid-template-columns: 1fr; }
          .stat-item { border-right: none; border-top: 1px solid var(--border-l); }
          .stat-item:first-child { border-top: none; }
          .stat-item:nth-child(3) { grid-column: auto; }
        }
      `}</style>

      {/* ═══ HERO ══════════════════════════════════════ */}

      {/* ═══ SPLIT: NAME LEFT · STORY RIGHT ════════════ */}
      <section className="about-split">
        <div className="about-split-left">
          <p className="company-eyebrow">Who We Are</p>
          <h2 className="company-name">
            Rich Haven<br /><em>Artificial</em><br />Garden
          </h2>
          <p className="company-tagline">
            Greenery designed to look real, last forever, and need nothing from you.
          </p>
          <div className="company-since">
            <span className="company-since-year">2014</span>
            <span className="company-since-label">Est. Philippines</span>
          </div>
        </div>

        <div className="about-split-divider" aria-hidden="true" />

        <div className="about-split-right">
          <div className="story-block">
            <p className="story-eyebrow">Our Company</p>
            <h3 className="story-heading">From a single idea to <em>countless green spaces</em></h3>
            <p className="story-body">
              At Rich Haven Artificial Garden, we bring nature-inspired beauty to every space—without the maintenance.
              We specialize in high-quality artificial greenery, including potted plants, wall greens, hanging plants, and artificial turf, thoughtfully designed to enhance homes, offices, and commercial spaces.
            </p>
            <p className="story-body">
              Our products combine realistic aesthetics with durability, offering a lasting green solution that stays fresh and vibrant all year round. Whether you're elevating an interior, transforming an outdoor area, or creating a calming atmosphere, Rich Haven Artificial Garden is committed to delivering style, quality, and timeless greenery you can rely on.
            </p>
          </div>

          <div className="story-divider" />

          <div className="story-block">
            <p className="story-eyebrow">What We Do</p>
            <h3 className="story-heading">Supply, and <em>install</em> — end to end</h3>
            <p className="story-body">
              Today we specialize in artificial wall greens, potted plants and trees, planter boxes, and turf — for homes, commercial offices, retail spaces, hotels, restaurants, and events. Every installation is sized, designed, and fitted for the specific space. We handle everything from the first consultation to the final nail, using UV-stable, humidity-resistant materials built for the Philippine climate.
            </p>
          </div>

          <div className="story-divider" />

          <div className="story-block">
            <p className="story-eyebrow">Our Promise</p>
            <h3 className="story-heading">Greenery that looks <em>perfect</em> from day one</h3>
            <p className="story-body">
              No wilting. No watering schedules. No seasonal replanting. What we install on day one is what you&apos;ll see year after year. We stand behind the quality of every product and every installation — because our reputation is built one space at a time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}