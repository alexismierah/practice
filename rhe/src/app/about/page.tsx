"use client";


export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --cream: #F7F4EE;
          --linen: #EDE8DF;
          --sage: #8A9E7F;
          --deep-sage: #5C7253;
          --moss: #3D5238;
          --charcoal: #252520;
          --warm-gray: #7A7770;
          --gold: #B8965A;
          --white: #FFFFFF;
        }

        .about-page {
          min-height: 100vh;
          background-color: var(--white);
          font-family: 'DM Sans', sans-serif;
          color: var(--charcoal);
        }

        /* ── HERO ── */
        .hero {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          min-height: 100vh;
          overflow: hidden;
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 120px 64px 48px;
          background: #f7f9f7;
        }
        .hero-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .hero-eyebrow::before {
          display: none;
        }
        .hero-title {
          font-size: clamp(38px, 4.2vw, 62px);
          font-weight: 300;
          line-height: 1.1;
          color: var(--charcoal);
          letter-spacing: -0.02em;
          margin-bottom: 28px;
        }
        .hero-title strong {
          font-weight: 500;
          color: var(--deep-sage);
        }
        .hero-body {
          font-size: 15.5px;
          line-height: 1.85;
          color: var(--warm-gray);
          max-width: 420px;
          font-weight: 300;
          margin-bottom: 40px;
        }
        .hero-divider {
          width: 48px;
          height: 1px;
          background: var(--sage);
          margin-bottom: 24px;
        }
        .hero-tagline {
          font-size: 13px;
          color: var(--warm-gray);
          letter-spacing: 0.04em;
          font-weight: 300;
        }
        .hero-right {
          position: relative;
          overflow: hidden;
          background: #f7f9f7;
        }
        .hero-image-bg {
          position: absolute;
          inset: 0;
          background: #f7f9f7;
        }
        .hero-botanical {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .botanical-svg {
          width: 420px;
          height: 420px;
          opacity: 0.82;
        }

        /* ── STATS STRIP ── */
        .stats-strip {
          background: var(--moss);
          padding: 52px 64px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stat-item {
          text-align: center;
          padding: 0 20px;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .stat-item:last-child { border-right: none; }
        .stat-number {
          font-size: 44px;
          font-weight: 300;
          color: var(--white);
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 10px;
        }
        .stat-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        /* ── STORY ── */
        .story {
          padding: 110px 64px;
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 80px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }
        .story-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }
        .story-heading {
          font-size: 36px;
          font-weight: 300;
          line-height: 1.25;
          color: var(--charcoal);
          letter-spacing: -0.02em;
          position: sticky;
          top: 80px;
        }
        .story-heading strong {
          font-weight: 500;
          color: var(--deep-sage);
        }
        .story-content p {
          font-size: 15.5px;
          line-height: 1.9;
          color: var(--warm-gray);
          font-weight: 300;
          margin-bottom: 22px;
        }
        .story-content p:last-child { margin-bottom: 0; }
        .story-pull {
          border-left: 2px solid var(--sage);
          padding: 18px 24px;
          margin: 36px 0;
          font-size: 18px;
          font-weight: 300;
          font-style: italic;
          color: var(--deep-sage);
          line-height: 1.65;
          letter-spacing: -0.01em;
        }

        /* ── PROMISE BAND ── */
        .promise-band {
          background: var(--linen);
          padding: 72px 64px;
          display: flex;
          gap: 0;
          overflow: hidden;
        }
        .promise-item {
          flex: 1;
          padding: 40px 48px;
          border-right: 1px solid rgba(90,114,83,0.15);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .promise-item:last-child { border-right: none; }
        .promise-number {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          color: var(--gold);
        }
        .promise-title {
          font-size: 20px;
          font-weight: 400;
          color: var(--charcoal);
          letter-spacing: -0.01em;
          line-height: 1.3;
        }
        .promise-desc {
          font-size: 14px;
          line-height: 1.8;
          color: var(--warm-gray);
          font-weight: 300;
        }

        /* ── VALUES ── */
        .values {
          padding: 100px 64px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .values-header {
          margin-bottom: 64px;
        }
        .section-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 14px;
        }
        .section-title {
          font-size: 38px;
          font-weight: 300;
          color: var(--charcoal);
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .section-title strong {
          font-weight: 500;
          color: var(--deep-sage);
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
        }
        .value-card {
          background: var(--linen);
          padding: 44px 40px;
          transition: background 0.25s;
        }
        .value-card:hover { background: var(--cream); }
        .value-icon {
          color: var(--gold);
          font-size: 16px;
          margin-bottom: 20px;
        }
        .value-title {
          font-size: 17px;
          font-weight: 500;
          color: var(--charcoal);
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }
        .value-desc {
          font-size: 14px;
          line-height: 1.85;
          color: var(--warm-gray);
          font-weight: 300;
        }

        /* ── CTA BAND ── */
        .cta-band {
          background: var(--deep-sage);
          padding: 88px 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }
        .cta-left {
          flex: 1;
        }
        .cta-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 16px;
        }
        .cta-text {
          font-size: 36px;
          font-weight: 300;
          color: var(--white);
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .cta-text span { font-weight: 500; }
        .cta-actions {
          display: flex;
          gap: 14px;
          flex-shrink: 0;
        }
        .btn-primary {
          padding: 14px 36px;
          background: var(--gold);
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          text-decoration: none;
          transition: opacity 0.2s;
          display: inline-block;
        }
        .btn-primary:hover { opacity: 0.85; }
        .btn-secondary {
          padding: 14px 36px;
          background: transparent;
          color: var(--white);
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 9999px;
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s;
          display: inline-block;
        }
        .btn-secondary:hover { border-color: var(--white); }

        /* ── CTA IMAGE BAND ── */
        .cta-img-band {
          padding-right: calc(64px + 340px);
        }
        .cta-img-plant {
          position: absolute;
          right: 60px;
          bottom: 0;
          height: 602px;
          object-fit: contain;
          pointer-events: none;
          z-index: 10;
        }
        .cta-img-semi {
          position: absolute;
          right: 120px;
          bottom: 0;
          height: 290px;
          width: auto;
          pointer-events: none;
          z-index: 5;
        }
        @media (max-width: 900px) {
          .cta-img-band { padding: 48px 32px 48px calc(32px + 240px) !important; }
          .cta-img-plant { height: 380px !important; right: 24px !important; }
          .cta-img-semi { height: 130px !important; right: 76px !important; }
        }
        @media (max-width: 580px) {
          .cta-img-band { padding: 200px 24px 40px !important; text-align: center; }
          .cta-img-plant { height: 260px !important; right: 50% !important; transform: translateX(50%) !important; bottom: auto !important; top: 0 !important; }
          .cta-img-semi { height: 88px !important; right: 50% !important; transform: translateX(50%) !important; bottom: auto !important; top: 112px !important; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-left { padding: 64px 24px 48px; }
          .hero-right { height: 300px; }
          .stats-strip { grid-template-columns: repeat(2,1fr); padding: 40px 24px; gap: 32px; }
          .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 24px; }
          .stat-item:nth-child(3), .stat-item:last-child { border-bottom: none; }
          .story { grid-template-columns: 1fr; padding: 64px 24px; gap: 36px; }
          .story-heading { position: static; }
          .promise-band { flex-direction: column; padding: 48px 24px; }
          .promise-item { border-right: none; border-bottom: 1px solid rgba(90,114,83,0.15); padding: 28px 0; }
          .promise-item:last-child { border-bottom: none; }
          .values { padding: 64px 24px; }
          .values-grid { grid-template-columns: 1fr; }
          .cta-band { flex-direction: column; padding: 64px 24px; text-align: center; }
          .cta-actions { justify-content: center; flex-wrap: wrap; }
        }
      `}</style>

      <div className="about-page">

        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <p className="hero-eyebrow">Our Story</p>
            <h1 className="hero-title">
              Rich Haven <br /> <em style={{ color: "var(--deep-sage)" }}>Artificial Garden</em>
            </h1>
            <p className="hero-tagline">Artificial greenery · Thoughtfully designed · Built to last</p>
          </div>
          <div className="hero-right">
            <div className="hero-image-bg" />
            <div className="hero-botanical">
              <div style={{ padding: "160px 56px 48px", width: "100%" }}>
                <p style={{ fontSize: "15.5px", lineHeight: "2.2", color: "var(--warm-gray)", fontWeight: 300, marginBottom: "48px" }}>
                  At Rich Haven Artificial Garden, we bring nature-inspired beauty to every space — without the maintenance. We specialize in high-quality artificial greenery, including potted plants, wall greens, hanging plants, and artificial turf, thoughtfully designed to enhance homes, offices, and commercial spaces.
                </p>
                <p style={{ fontSize: "15.5px", lineHeight: "2.2", color: "var(--warm-gray)", fontWeight: 300 }}>
                  Our products combine realistic aesthetics with durability, offering a lasting green solution that stays fresh and vibrant all year round. Whether you&apos;re elevating an interior, transforming an outdoor area, or creating a calming atmosphere, Rich Haven Artificial Garden is committed to delivering style, quality, and timeless greenery you can rely on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section style={{ background: "var(--white)", padding: "100px 64px" }}>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>What Drives Us</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.1, color: "var(--charcoal)" }}>
              Our <em style={{ color: "var(--deep-sage)", fontStyle: "italic" }}>Core Values</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", maxWidth: "1100px", margin: "0 auto" }}>
            {[
              { n: "01", title: "Our Mission", desc: "Providing artificial gardening services with the most professional workmanship to give customer satisfaction." },
              { n: "02", title: "Our Vision", desc: "Being the most trusted artificial gardening service provider throughout the country." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#f7f9f7", padding: "52px 48px", height: "100%", display: "flex", flexDirection: "column", gap: "18px" }}>
                <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", color: "var(--gold)" }}>{item.n}</span>
                <div style={{ width: "32px", height: "1px", background: "var(--sage)" }} />
                <h3 style={{ fontSize: "24px", fontWeight: 300, color: "var(--charcoal)", letterSpacing: "-0.01em", lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--warm-gray)", fontWeight: 300 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>


      </div>
    </>
  );
}
