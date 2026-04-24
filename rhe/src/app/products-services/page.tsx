"use client";

import Link from "next/dist/client/link";

export default function ProductsServicesPage() {
  return (
    <div
      style={{
        fontFamily: "'Cormorant Garamond', 'Georgia', serif",
        background: "#f7f7f7",
        color: "#1a1a1a",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── EXISTING GRID (UNCHANGED) ── */
        .two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        /* ── HERO (TURF STRUCTURE, NO OVERLAY, ORIGINAL COLORS) ── */
        .craft-hero {
          width: 100%;
          height: 285px;
          background-image: url('/2.png');
          background-size: cover;
          background-position: 20%;
          background-repeat: no-repeat;

          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .craft-hero-inner {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 0 5rem;
        }

        /* KEEP YOUR ORIGINAL TEXT COLORS */
        .craft-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          letter-spacing: 0.30em;
          color: #4a5450; /* ORIGINAL */
          margin: 0;
        }

        .craft-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 52px;
          font-weight: 300;
          line-height: 1.12;
          color: #313131; /* ORIGINAL */
          margin: 0;
        }

        .craft-title em {
          font-style: normal;
          color: #313131; /* ORIGINAL */
          font-weight: 300;
        }

        /* ── RESPONSIVE (UNCHANGED + HERO FIX) ── */
        @media (max-width: 900px) {
          .section-pad { padding-left: 2.5rem !important; padding-right: 2.5rem !important; }
        }

        @media (max-width: 768px) {
          .two-col-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .two-col-grid .text-cell { order: 2; }
          .two-col-grid .image-cell { order: 1; }
          .product-img-wrap { height: 260px !important; }
          .hero-h1 { font-size: 2.2rem !important; }
          .feature-grid { grid-template-columns: 1fr !important; }

          /* HERO MOBILE */
          .craft-hero { height: 220px; }
          .craft-hero-inner { padding: 0 1.5rem; }
          .craft-title { font-size: 28px; }
          .craft-eyebrow { font-size: 11px; }
        }

        @media (max-width: 640px) {
          .section-pad {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
        }

        @media (max-width: 480px) {
          .two-col-grid { gap: 1.5rem; }
          .product-img-wrap { height: 220px !important; }
        }
      `}</style>

      {/* ── HERO (NO OVERLAY, ORIGINAL TEXT COLORS) ── */}
      <section className="craft-hero">
        <div className="craft-hero-inner">
          <p className="craft-eyebrow">PRODUCT COLLECTIONS</p>

          <h1 className="craft-title">
            Crafting Beauty
            <br />
            <em>For Every Space</em>
          </h1>
        </div>
      </section>

      {/* ── 1ST INTRO BAND ── */}
      <section
        className="section-pad"
        style={{ background: "#f7f7f7", padding: "2rem 5rem" }}
      >
        <div>
          <div className="two-col-grid">
            <div className="image-cell" style={{ position: "relative" }}>
              <div
                className="product-img-wrap"
                style={{ width: "100%", height: 450, borderRadius: 16, overflow: "hidden" }}
              >
                <img
                  src="/p10.png"
                  alt="Potted artificial plants on a wooden bench"
                  style={{
                    width: "100%",
                    height: "450px",
                    objectFit: "cover",
                    display: "block",
                    transform: "translateY(10px) scale(1.03)",
                    filter: "drop-shadow(0px 1px 1px rgba(95,91,91,0.1))",
                    objectPosition: "55% 15%",
                  }}
                />
              </div>
            </div>

            <div className="text-cell" style={{ paddingTop: 5 }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  letterSpacing: "0.30em",
                  textTransform: "uppercase",
                  color: "#4a5450",
                  marginBottom: "1rem",
                }}
              >
                what do we have?
              </p>

              <h2
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(1.7rem, 1.8vw + 0.8rem, 2.4rem)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: "#0d1b0f",
                  marginBottom: "1rem",
                }}
              >
                Potted Artificial Plants
              </h2>

              

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#4a5450",
                  lineHeight: 1.85,
                  marginBottom: "1.5rem",
                }}
              >
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
                {[ "Wall Plants", "Floor Plants", "Trees & Palms"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#2d5040",
                        flexShrink: 0,
                        marginTop: "0.42rem",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        color: "#4a5450",
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/products-services/potted-plants"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "#2d5040",
                  borderBottom: "1.5px solid #2d5040",
                  paddingBottom: 2,
                  textDecoration: "none",
                }}
              >
                View More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2ND INTRO BAND ── */}
      <section
        className="section-pad"
        style={{ background: "#efefef", padding: "2rem 5rem" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col-grid" style={{ gap: "5rem" }}>
            <div className="text-cell" style={{ paddingTop: 5 }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  letterSpacing: "0.30em",
                  textTransform: "uppercase",
                  color: "#4a5450",
                  marginBottom: "1rem",
                }}
              >
                what do we have?
              </p>

              <h2
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(1.7rem, 1.8vw + 0.8rem, 2.4rem)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: "#0d1b0f",
                  marginBottom: "1rem",
                }}
              >
                Artificial Wall Greens
              </h2>


              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#4a5450",
                  lineHeight: 1.85,
                  marginBottom: "1.5rem",
                }}
              >
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
                        background: "#2d5040",
                        flexShrink: 0,
                        marginTop: "0.42rem",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        color: "#4a5450",
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/products-services/wall-greens"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "#2d5040",
                  borderBottom: "1.5px solid #2d5040",
                  paddingBottom: 2,
                  textDecoration: "none",
                }}
              >
                View More &rarr;
              </Link>
            </div>

            <div className="image-cell" style={{ position: "relative" }}>
              <div
                className="product-img-wrap"
                style={{ width: "100%", height: 450, borderRadius: 16, overflow: "hidden" }}
              >
                <img
                  src="/p19.png"
                  alt="Paneled Wall Greens"
                  style={{
                    width: "100%",
                    height: "450px",
                    objectFit: "contain",
                    display: "block",
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

      {/* ── 3RD INTRO BAND ── */}
      <section
        className="section-pad"
        style={{ background: "#f7f7f7", padding: "2rem 5rem" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col-grid">
            <div className="image-cell" style={{ position: "relative" }}>
              <div
                className="product-img-wrap"
                style={{ width: "100%", height: 450, borderRadius: 16, overflow: "hidden" }}
              >
                <img
                  src="/p16.png"
                  alt="Decorative planter box"
                  style={{
                    width: "100%",
                    height: "450px",
                    objectFit: "contain",
                    display: "block",
                    transform: "translateY(10px) scale(1.03)",
                    filter: "drop-shadow(0px 4px 3px rgba(117, 112, 112, 0.4))",
                    objectPosition: "55% 15%",
                  }}
                />
              </div>
            </div>

            <div className="text-cell" style={{ paddingTop: 5 }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  letterSpacing: "0.30em",
                  textTransform: "uppercase",
                  color: "#4a5450",
                  marginBottom: "1rem",
                }}
              >
                what do we have?
              </p>

              <h2
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(1.7rem, 1.8vw + 0.8rem, 2.4rem)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: "#0d1b0f",
                  marginBottom: "1.5rem",
                }}
              >
                Decorative Planter Box
              </h2>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#4a5450",
                  lineHeight: 1.85,
                  marginBottom: "1.5rem",
                }}
              >
                Decorative planter box features carefully arranged and combined artificial
                plants on empty spaces, designed to enhance both indoor
                and outdoor environments. Provides an instant and refined botanical
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
                        background: "#2d5040",
                        flexShrink: 0,
                        marginTop: "0.42rem",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        color: "#4a5450",
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/products-services/planter-box"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "#2d5040",
                  borderBottom: "1.5px solid #2d5040",
                  paddingBottom: 2,
                  textDecoration: "none",
                }}
              >
                View More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4TH INTRO BAND ── */}
      <section
        className="section-pad"
        style={{ background: "#efefef", padding: "2rem 5rem" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col-grid" style={{ gap: "5rem" }}>
            <div className="text-cell" style={{ paddingTop: 5 }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  letterSpacing: "0.30em",
                  textTransform: "uppercase",
                  color: "#4a5450",
                  marginBottom: "1rem",
                }}
              >
                what do we have?
              </p>

              <h2
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(1.7rem, 1.8vw + 0.8rem, 2.4rem)",
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: "#0d1b0f",
                  marginBottom: "1.5rem",
                }}
              >
                Artificial Turf Grass
              </h2>

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#4a5450",
                  lineHeight: 1.85,
                  marginBottom: "1.5rem",
                }}
              >
                A high quality range of artificial turf grass designed to replicate
                the look and feel of natural lawn surfaces. Built for durability and
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
                        background: "#2d5040",
                        flexShrink: 0,
                        marginTop: "0.42rem",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        color: "#4a5450",
                        lineHeight: 1.4,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/products-services/grass"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "#2d5040",
                  borderBottom: "1.5px solid #2d5040",
                  paddingBottom: 2,
                  textDecoration: "none",
                }}
              >
                View More &rarr;
              </Link>
            </div>

            <div className="image-cell" style={{ position: "relative" }}>
              <div
                className="product-img-wrap"
                style={{ width: "100%", height: 450, borderRadius: 16, overflow: "hidden" }}
              >
                <img
                  src="/p18.png"
                  alt="Artificial turf grass"
                  style={{
                    width: "100%",
                    height: "450px",
                    objectFit: "contain",
                    display: "block",
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