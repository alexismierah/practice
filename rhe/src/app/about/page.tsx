"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="about-landing">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,400;9..40,500&display=swap");

        .about-landing, .about-landing * { box-sizing: border-box; margin: 0; padding: 0; font-family: "DM Sans", sans-serif !important; }

        .about-landing {
          background: #f5f5f5;
          min-height: 100vh;
        }

        /* ── INTRO STRIP ── */
        .about-intro {
          background: #ffffff;
          padding: 80px 80px;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          gap: 0;
          align-items: center;
        }

        .about-intro-left {
          padding-right: 64px;
        }

        .about-intro-divider {
          width: 1px;
          height: 120px;
          background: linear-gradient(to bottom, transparent, #c8dac9, transparent);
          align-self: center;
        }

        .about-intro-right {
          padding-left: 64px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .section-label {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #2f6f44;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .section-heading {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(1.6rem, 1.8vw + 0.8rem, 2.4rem);
          font-weight: 500;
          color: #163521;
          line-height: 1.1;
          margin: 0;
        }

        .section-heading em {
          font-style: italic;
          font-weight: 400;
          color: #3f7a55;
        }

        .section-body {
          font-size: 13.5px;
          color: #7a8f80;
          line-height: 1.8;
          margin: 0;
          font-weight: 300;
        }

        /* ── VALUES ── */
        .about-values {
          background: #f5f5f5;
          padding: 80px 80px;
        }

        .about-values-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 48px;
          gap: 10px;
        }

        .about-values-grid {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 56px;
          align-items: start;
          max-width: 1060px;
          margin: 0 auto;
        }

        .about-values-left {}

        .about-values-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .value-card {
          background: #ffffff;
          border-radius: 6px;
          padding: 32px 28px;
          border: 1px solid #eaefea;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .value-card-num {
          font-size: 10px;
          letter-spacing: 0.18em;
          color: #2f6f44;
          font-weight: 500;
        }

        .value-card-rule {
          width: 28px;
          height: 1px;
          background: #c8dac9;
        }

        .value-card h3 {
          margin: 0;
          font-family: "Cormorant Garamond", serif;
          font-size: 1.25rem;
          font-weight: 500;
          color: #163521;
          line-height: 1.2;
        }

        .value-card p {
          margin: 0;
          color: #7a8f80;
          font-size: 13.5px;
          line-height: 1.8;
          font-weight: 300;
        }

        /* ── CTA BAND ── */
        .about-cta {
          background: #163521;
          padding: 48px 64px;
          display: flex;
          align-items: center;
          gap: 80px;
          position: relative;
          overflow: visible;
        }

        .about-cta-plant {
          position: absolute;
          right: 0px;
          bottom: 0px;
          height: 330px;
          object-fit: contain;
          pointer-events: none;
          z-index: 10;
        }

        .about-cta-inner {
          flex: 1;
          padding-right: calc(64px + 340px);
        }

        .pill-link {
          display: inline-flex;
          align-items: center;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2f6f44;
          font-weight: 500;
          text-decoration: none;
          background: rgba(47,111,68,0.09);
          border: none;
          padding: 13px 20px;
          border-radius: 9999px;
          transition: background 0.25s, color 0.25s;
          width: fit-content;
        }

        .pill-link:hover { background: rgba(47,111,68,0.16); color: #163521; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .about-intro { padding: 64px 48px; }
          .about-values { padding: 72px 48px; }
          .about-values-grid { grid-template-columns: 1fr; gap: 48px; }
          .about-values-left { text-align: center; }
          .about-cta { padding: 72px 48px; }
          .about-cta-inner { padding-right: 0; }
          .about-cta-plant { display: none; }
        }

        @media (max-width: 900px) {
          .about-intro {
            grid-template-columns: 1fr;
            padding: 56px 40px;
          }
          .about-intro-divider { display: none; }
          .about-intro-left {
            padding-right: 0;
            padding-bottom: 40px;
            border-bottom: 1px solid #e8ede5;
            margin-bottom: 40px;
          }
          .about-intro-right { padding-left: 0; }
        }

        @media (max-width: 768px) {
          .about-values-cards { grid-template-columns: 1fr; }
          .about-cta { padding: 48px 32px; text-align: center; align-items: center; flex-direction: column; }
          .about-cta-inner { padding-right: 0; display: flex; flex-direction: column; align-items: center; }
        }

        @media (max-width: 640px) {
          .about-intro { padding: 48px 20px; }
          .about-values { padding: 56px 20px; }
          .about-cta { padding: 48px 24px; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════
          INTRO STRIP
      ═══════════════════════════════════════════ */}
      <section className="about-intro">
        <div className="about-intro-left">
          <span className="section-label">Who We Are</span>
          <h2 className="section-heading">
            Bringing <em>nature</em><br />to every space
          </h2>
        </div>
        <div className="about-intro-divider" aria-hidden="true" />
        <div className="about-intro-right">
          <p className="section-body">
            At Rich Haven Artificial Garden, we bring nature-inspired beauty to every space — without the maintenance. Established in 2014, we specialize in high-quality artificial greenery including potted plants, wall greens, hanging plants, and artificial turf, thoughtfully designed to enhance homes, offices, and commercial spaces.
          </p>
          <p className="section-body">
            Our products combine realistic aesthetics with durability, offering a lasting green solution that stays fresh and vibrant all year round. Whether you&apos;re elevating an interior, transforming an outdoor area, or creating a calming atmosphere — Rich Haven is committed to delivering style, quality, and timeless greenery you can rely on.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CORE VALUES
      ═══════════════════════════════════════════ */}
      <section className="about-values">
        <div className="about-values-grid">
          <div className="about-values-left">
            <p className="section-label">What drives us</p>
            <h2 className="section-heading" style={{ marginBottom: "12px" }}>
              Our <em>Core Values</em>
            </h2>
            <p className="section-body" style={{ marginBottom: "24px" }}>
              The principles that guide every installation we do and every product we deliver.
            </p>
            <Link className="pill-link" href="/products-services">Browse our products</Link>
          </div>

          <div className="about-values-cards">
            {[
              {
                n: "01",
                title: "Our Mission",
                desc: "Providing artificial gardening services with the most professional workmanship to give customer satisfaction.",
              },
              {
                n: "02",
                title: "Our Vision",
                desc: "Being the most trusted artificial gardening service provider throughout the country.",
              },
              {
                n: "03",
                title: "Quality First",
                desc: "UV-stable, moisture-resistant materials that look real and last for years — indoors or outdoors.",
              },
              {
                n: "04",
                title: "Built for Any Space",
                desc: "From condo balconies to commercial lobbies, we size, design, and install for exactly your context.",
              },
            ].map((item) => (
              <article className="value-card" key={item.n}>
                <span className="value-card-num">{item.n}</span>
                <div className="value-card-rule" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <div className="about-cta">
        <img className="about-cta-plant" src="/Overlap4.png" alt="Plant" />
        <div className="about-cta-inner">
          <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,218,201,0.7)", marginBottom: "16px" }}>
            Let&apos;s Work Together
          </p>
          <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#ffffff", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "32px" }}>
            Ready to Start a <span style={{ fontWeight: 500 }}><em>Project</em></span> with{" "}
            <br /><span style={{ fontWeight: 500 }}><em>Rich Haven?</em></span>
          </h2>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="#footer"
              onClick={(e) => {
                e.preventDefault();
                const footer = document.getElementById("footer");
                if (footer) {
                  const top = footer.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              style={{ padding: "10px 24px", background: "#ffffff", color: "#163521", fontFamily: "inherit", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", borderRadius: "9999px", cursor: "pointer", textDecoration: "none", display: "inline-block" }}
            >
              Get in Touch
            </a>
            <Link
              href="/products-services"
              style={{ padding: "10px 24px", background: "transparent", color: "#ffffff", fontFamily: "inherit", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.35)", borderRadius: "9999px", textDecoration: "none", display: "inline-block" }}
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
