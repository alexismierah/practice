"use client";

import Link from "next/dist/client/link";

export default function ProductsServicesPage() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#f7f7f7",
        color: "#1c1e19",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,200;1,9..40,300;1,9..40,400&display=swap");

        :root {
          --sage: #8fa882;
          --forest: #2d4a27;
          --deep: #1a2e16;
          --cream: #efefef;
          --warm-white: #f7f7f7;
          --text: #1c1e19;
          --text-muted: #6b7060;
          --text-faint: #a8ad9e;
          --border: rgba(45,74,39,0.10);
          --gold: #c9a96e;
          --font: "DM Sans", sans-serif;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── TWO COL GRID ── */
        .two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        /* ── HERO ── */
        .craft-hero {
          width: 100%;
          height: calc(38.5vh + var(--navbar-height, 80px));
          background-image: url('/blur6.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .craft-hero-inner {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0rem 5rem;
          margin-top: 4rem;
        }

        /* ── EYEBROW ── */
        .ps-eyebrow {
          font-family: var(--font);
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--sage);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .craft-eyebrow {
          font-family: var(--font);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #fff;
          text-align: center;
          justify-content: center;
        }

        .craft-title {
          font-family: var(--font);
          font-size: 50px;
          font-weight: 300;
          line-height: 1.12;
          color: #fff;
          margin: 0;
          letter-spacing: 0.02em;
        }

        /* ── SECTION HEADLINE ── */
        .ps-section-headline {
          font-family: var(--font);
          font-size: clamp(1.6rem, 2.8vw, 2.2rem);
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -0.015em;
          color: var(--text);
          margin: 0;
        }

        /* ── BODY PARAGRAPH ── */
        .ps-body-text {
          font-family: var(--font);
          font-size: 14px;
          font-weight: 300;
          color: var(--text-muted);
          line-height: 1.85;
          margin-bottom: 1.5rem;
        }

        /* ── FEATURE BULLET ── */
        .ps-feature-label {
          font-family: var(--font);
          font-size: 14px;
          font-weight: 300;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* ── VIEW MORE ── */
        .ps-view-more {
          font-family: var(--font);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--text-muted);
          text-decoration: underline;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.3px;
          transition: color 0.3s;
          text-underline-offset: 7px;
        }

        .ps-view-more::after {
          content: "→";
          transition: transform 0.3s;
        }

        .ps-view-more:hover { color: var(--forest); }
        .ps-view-more:hover::after { transform: translateX(4px); }

        /* ── IMAGE WRAPPER ── */
        .product-img-wrap {
          width: 100%;
          height: 450px;
          border-radius: 16px;
          overflow: hidden;
        }

        .product-img-wrap img {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .section-pad { padding-left: 2.5rem !important; padding-right: 2.5rem !important; }
        }

        @media (max-width: 768px) {
          .two-col-grid {
            grid-template-columns: 1fr;
            gap: 2rem !important;
          }
          .two-col-grid .text-cell { order: 2; }
          .two-col-grid .image-cell { order: 1; }

          .product-img-wrap {
            height: auto !important;
            border-radius: 12px;
          }

          .product-img-wrap img {
            width: 100%;
            height: auto !important;
            object-fit: contain !important;
            transform: none !important;
          }

          .feature-grid { grid-template-columns: 1fr !important; }

          /* ── neutralise the inner max-width wrapper on mobile ── */
          .band-inner {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }

          .craft-hero { height: 290px; }
          .craft-hero-inner { padding: 0 1.5rem; gap: 0.8rem; }
          .craft-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 0.22em; }
          .craft-title { font-size: 28px; margin-top: -10px; }
        }

        @media (max-width: 640px) {
          .section-pad {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }

        @media (max-width: 480px) {
          .two-col-grid { gap: 1.5rem !important; }
        }

        /* ── DESKTOP-ONLY left offset for text cells ── */
        .text-cell-offset-left { margin-left: -20px; }

        @media (max-width: 768px) {
          .text-cell-offset-left { margin-left: 0 !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="craft-hero">
        <div style={{ position: "absolute", inset: 0, background: "rgba(20, 28, 20, 0.50)" }} />
        <div className="craft-hero-inner">
          <p className="craft-eyebrow">PRODUCT COLLECTIONS</p>
          <h1 className="craft-title">
            Crafting Beauty
            <br />
            For Every Space
          </h1>
        </div>
      </section>

      {/* ── 1ST BAND — Potted Artificial Plants ── */}
      <section
        className="section-pad"
        style={{ background: "#f7f7f7", padding: "2rem 5rem" }}
      >
        <div>
          <div className="two-col-grid">
            <div className="image-cell" style={{ position: "relative" }}>
              <div className="product-img-wrap">
                <img
                  src="/p10.png"
                  alt="Potted artificial plants on a wooden bench"
                  style={{
                    objectFit: "cover",
                    transform: "translateY(10px) scale(1.03)",
                    filter: "drop-shadow(0px 1px 1px rgba(95,91,91,0.1))",
                    objectPosition: "55% 15%",
                  }}
                />
              </div>
            </div>

            <div className="text-cell" style={{ paddingTop: 5 }}>
              <p className="ps-eyebrow">WHAT DO WE HAVE?</p>
              <h2 className="ps-section-headline" style={{ marginBottom: "1rem" }}>
                Potted Artificial Plants
              </h2>
              <p className="ps-body-text">
                A premium collection of lifelike plants in pots, thoughtfully designed
                to elevate indoor and outdoor spaces. Each piece comes ready for display in stylish
                containers, delivering the beauty of natural green perfect for both residential and commercial environments.
              </p>
              <div
                className="feature-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.85rem 1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                {["Wall Plants", "Floor Plants", "Trees & Palms"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--forest)",
                        flexShrink: 0,
                        marginTop: "0.42rem",
                      }}
                    />
                    <span className="ps-feature-label">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/products-services/potted-plants" className="ps-view-more">
                View more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2ND BAND — Artificial Wall Greens ── */}
      <section
        className="section-pad"
        style={{ background: "#efefef", padding: "2rem 5rem" }}
      >
        <div className="band-inner" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col-grid" style={{ gap: "5rem" }}>
            <div className="text-cell text-cell-offset-left" style={{ paddingTop: 5 }}>
              <p className="ps-eyebrow">WHAT DO WE HAVE?</p>
              <h2 className="ps-section-headline" style={{ marginBottom: "1rem" }}>
                Artificial Wall Greens
              </h2>
              <p className="ps-body-text">
                A refined collection of artificial wall greens designed to
                bring lush vertical beauty into any space. Ideal for both residential
                and commercial settings, providing a clean and elegant backdrop that
                enhances interiors while remaining easy to maintain and long lasting.
              </p>
              <div
                className="feature-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.85rem 1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                {["Hanging Plants", "Silver Lining", "Decorative Wall Plants"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--forest)",
                        flexShrink: 0,
                        marginTop: "0.42rem",
                      }}
                    />
                    <span className="ps-feature-label">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/products-services/wall-greens" className="ps-view-more">
                View more
              </Link>
            </div>

            <div className="image-cell" style={{ position: "relative" }}>
              <div className="product-img-wrap">
                <img
                  src="/p19.png"
                  alt="Paneled Wall Greens"
                  style={{
                    objectFit: "contain",
                    transform: "translateY(10px) scale(1.03)",
                    filter: "drop-shadow(0px 6px 2px rgba(117, 112, 112, 0.6))",
                    objectPosition: "50% 10%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3RD BAND — Decorative Planter Box ── */}
      <section
        className="section-pad"
        style={{ background: "#f7f7f7", padding: "2rem 5rem" }}
      >
        <div className="band-inner">
          <div className="two-col-grid">
            <div className="image-cell" style={{ position: "relative" }}>
              <div className="product-img-wrap">
                <img
                  src="/p16.png"
                  alt="Decorative planter box"
                  style={{
                    objectFit: "contain",
                    transform: "translateY(10px) scale(1.03)",
                    filter: "drop-shadow(0px 4px 3px rgba(117, 112, 112, 0.4))",
                    objectPosition: "55% 15%",
                  }}
                />
              </div>
            </div>

            <div className="text-cell" style={{ paddingTop: 5 }}>
              <p className="ps-eyebrow">WHAT DO WE HAVE?</p>
              <h2 className="ps-section-headline" style={{ marginBottom: "1rem" }}>
                Decorative Planter Box
              </h2>
              <p className="ps-body-text">
                Decorative planter box features carefully arranged and combined artificial
                plants on empty spaces, thoughtfully designed to enhance indoor
                and outdoor environments providing an instant and refined botanical
                display, ideal for residential and commercial settings.
              </p>
              <div
                className="feature-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.85rem 1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                {["Styled Built In Planters", "Artificial Plant Arrangements", "Custom Design Planter Boxes"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--forest)",
                        flexShrink: 0,
                        marginTop: "0.42rem",
                      }}
                    />
                    <span className="ps-feature-label">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/products-services/planter-box" className="ps-view-more">
                View more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4TH BAND — Artificial Turf Grass ── */}
      <section
        className="section-pad"
        style={{ background: "#efefef", padding: "2rem 5rem" }}
      >
        <div className="band-inner" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col-grid" style={{ gap: "5rem" }}>
            <div className="text-cell text-cell-offset-left" style={{ paddingTop: 5 }}>
              <p className="ps-eyebrow">WHAT DO WE HAVE?</p>
              <h2 className="ps-section-headline" style={{ marginBottom: "1rem" }}>
                Artificial Turf Grass
              </h2>
              <p className="ps-body-text">
                A high quality range of artificial turf grass designed to replicate
                the look and feel of natural lawn. Built for durability and
                year round greenery, offering a practical and
                visually appealing alternative to natural grass, ideal for residential,
                commercial, and recreational spaces.
              </p>
              <div
                className="feature-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.85rem 1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                {["Indoor Green Flooring Areas", "Sports and Play Areas", "Rooftop and Balcony Grass", "Garden Path and Ground Cover"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--forest)",
                        flexShrink: 0,
                        marginTop: "0.42rem",
                      }}
                    />
                    <span className="ps-feature-label">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/products-services/grass" className="ps-view-more">
                View more
              </Link>
            </div>

            <div className="image-cell" style={{ position: "relative" }}>
              <div className="product-img-wrap">
                <img
                  src="/p18.png"
                  alt="Artificial turf grass"
                  style={{
                    objectFit: "contain",
                    transform: "translateY(20px) scale(1.03)",
                    filter: "drop-shadow(0px 7px 2px rgba(107, 104, 104, 0.8))",
                    objectPosition: "50% 10%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}