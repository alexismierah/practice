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
        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-left { padding: 64px 24px 48px; }
          .hero-right { height: 300px; }
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
