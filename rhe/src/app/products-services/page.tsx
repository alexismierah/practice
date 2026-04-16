"use client";

import Link from "next/dist/client/link";
import { useState } from "react";

const services = [
  {
    step: "01",
    title: "Site Assessment",
    desc: "Our team visits your space to understand the terrain, sun exposure, drainage, and design goals before any work begins.",
  },
  {
    step: "02",
    title: "Design & Planning",
    desc: "We craft a tailored landscape plan with material selections, layout, and a transparent cost breakdown.",
  },
  {
    step: "03",
    title: "Installation",
    desc: "Expert installation by trained specialists ensuring proper layering, drainage, and a seamless finish.",
  },
  {
    step: "04",
    title: "Aftercare Support",
    desc: "Post-installation check-ins and maintenance guidance to keep your green space thriving long-term.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8yrs", label: "Industry Experience" },
];

export default function ProductsServicesPage() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <div
      style={{
        fontFamily: "'Cormorant Garamond', 'Georgia', serif",
        background: "#fafaf8",
        color: "#1a1a1a",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── Responsive grid helpers ── */
        .two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        /* On mobile, collapse to single column */
        @media (max-width: 768px) {
          .two-col-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          /* Always put the image cell first on mobile */
          .two-col-grid .text-cell {
            order: 2;
          }
          .two-col-grid .image-cell {
            order: 1;
          }

          /* Tighten section padding */
          .section-pad {
            padding: 2.5rem 1.25rem !important;
          }

          /* Shrink image height on mobile */
          .product-img-wrap {
            height: 260px !important;
          }

          /* Reduce big heading size */
          .hero-h1 {
            font-size: 2.2rem !important;
          }

          /* Feature grid: single column on very small screens */
          .feature-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .two-col-grid {
            gap: 1.5rem;
          }
          .product-img-wrap {
            height: 220px !important;
          }
        }

        /* ── Existing component styles ── */
        .product-card {
          background: #fff;
          border: 1px solid #e8e8e2;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          cursor: pointer;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .product-card:hover, .product-card.active {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.08);
          border-color: transparent;
        }
        .product-card.active {
          border: 1.5px solid #2d6a4f;
        }
        .step-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e8e8e2;
          padding: 2rem 1.75rem;
          transition: box-shadow 0.3s ease;
        }
        .step-card:hover {
          box-shadow: 0 16px 40px rgba(0,0,0,0.07);
        }
        .pill-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 11px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: #d8f3dc;
          color: #1b4332;
          margin-bottom: 1rem;
        }
        .stat-block {
          text-align: center;
          padding: 1.5rem 2rem;
        }
        .cta-btn {
          display: inline-block;
          background: #2d6a4f;
          color: #fff;
          padding: 14px 36px;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: background 0.25s, transform 0.2s;
        }
        .cta-btn:hover {
          background: #1b4332;
          transform: translateY(-2px);
        }
        .outline-btn {
          display: inline-block;
          background: transparent;
          color: #2d6a4f;
          padding: 13px 34px;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-decoration: none;
          cursor: pointer;
          border: 1.5px solid #2d6a4f;
          transition: all 0.25s;
        }
        .outline-btn:hover {
          background: #2d6a4f;
          color: #fff;
        }
        .section-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #40916c;
          margin-bottom: 0.75rem;
        }
        .big-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 300;
          color: #2d6a4f;
          line-height: 1;
        }
        .divider-line {
          width: 48px;
          height: 2px;
          background: #52b788;
          margin: 1.25rem 0;
          border-radius: 2px;
        }
        .icon-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 1.25rem;
        }
        .floating-info-card {
          background: #fff;
          border-radius: 20px;
          padding: 2rem 2.25rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          position: relative;
          z-index: 2;
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        style={{
          padding: "2.5rem 1.5rem",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundImage: "url('/2.png')",
          backgroundSize: "cover",
          backgroundPosition: "20%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <p
            className="section-eyebrow"
            style={{ fontWeight: 570, marginTop: 20, marginBottom: 1, color: "#2D5A27" }}
          >
            PRODUCT COLLECTIONS
          </p>
          <h1
            className="hero-h1"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 420,
              lineHeight: 1.12,
              color: "#0d1b0f",
              marginBottom: "1.5rem",
            }}
          >
            Bringing Nature
            <br />
            <em style={{ fontStyle: "italic", color: "#2D5A27", fontWeight: 590 }}>
              Into Your Space
            </em>
          </h1>
        </div>
      </section>

      {/* ── 1ST INTRO BAND ── */}
      <section
        className="section-pad"
        style={{ background: "#ffffff", padding: "2.5rem 3rem" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col-grid">
            {/* Image */}
            <div className="image-cell" style={{ position: "relative" }}>
              <div
                className="product-img-wrap"
                style={{ width: "100%", height: 550, borderRadius: 16, overflow: "hidden" }}
              >
                <img
                  src="/p10.png"
                  alt="Potted artificial plants on a wooden bench"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transform: "translateY(10px) scale(1.03)",
                    filter: "drop-shadow(0px 1px 1px rgba(95,91,91,0.1))",
                    objectPosition: "55% 15%",
                  }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-cell" style={{ paddingTop: 15 }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#6b7f64",
                  marginBottom: "1rem",
                }}
              >
                what do we have?
              </p>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 3vw, 3rem)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                  color: "#0d1b0f",
                  marginBottom: "1.5rem",
                }}
              >
                Potted Artificial Plants <br />
              </h2>

              <div style={{ width: 50, height: 2, background: "#2d5a27", marginBottom: "1.5rem" }} />

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "#4a5568",
                  lineHeight: 1.85,
                  marginBottom: "1.5rem",
                }}
              >
                A premium collection of lifelike plants in pots, thoughtfully designed 
                to elevate indoor and outdoor spaces. Each piece comes ready for display in stylish 
                containers, delivering the beauty of natural greenery without the need for 
                watering or sunlight. Maintenance free potted artificial plants provide an instant, 
                elegant botanical touch, perfect for both residential and commercial environments.
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
                {["Table Plants", "Wall Plants", "Floor Plants", "Trees & Palms"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#2d5a27",
                        flexShrink: 0,
                        marginTop: "0.42rem",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1rem",
                        color: "#4a5568",
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
                  fontSize: "0.9rem",
                  color: "#2d5a27",
                  borderBottom: "1.5px solid #2d5a27",
                  paddingBottom: 2,
                  textDecoration: "none",
                }}
              >
                Explore our services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2ND INTRO BAND ── */}
      <section
        className="section-pad"
        style={{ background: "#FAFAF8", padding: "4rem 3rem" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col-grid" style={{ gap: "5rem" }}>
            {/* Text — on desktop: left. On mobile: order 2 (below image) */}
            <div className="text-cell" style={{ paddingTop: 15 }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#6b7f64",
                  marginBottom: "1rem",
                }}
              >
                what do we have?
              </p>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 3vw, 3rem)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                  color: "#0d1b0f",
                  marginBottom: "1.5rem",
                }}
              >
                Artificial Wall Greens <br />
              </h2>

              <div style={{ width: 50, height: 2, background: "#2d5a27", marginBottom: "1.5rem" }} />

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "#4a5568",
                  lineHeight: 1.85,
                  marginBottom: "1.5rem",
                }}
              >
                A refined collection of artificial wall greens designed to 
                bring lush vertical beauty into any space. These carefully 
                arranged wall plants create the look of a thriving green environment 
                without the need for watering or sunlight. Ideal for both residential 
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
                        background: "#2d5a27",
                        flexShrink: 0,
                        marginTop: "0.42rem",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1rem",
                        color: "#4a5568",
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
                  fontSize: "0.9rem",
                  color: "#2d5a27",
                  borderBottom: "1.5px solid #2d5a27",
                  paddingBottom: 2,
                  textDecoration: "none",
                }}
              >
                Explore our services &rarr;
              </Link>
            </div>

            {/* Image — on desktop: right. On mobile: order 1 (above text) */}
            <div className="image-cell" style={{ position: "relative" }}>
              <div
                className="product-img-wrap"
                style={{ width: "100%", height: 500, borderRadius: 16, overflow: "hidden" }}
              >
                <img
                  src="/p14.png"
                  alt="Paneled Wall Greens"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
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
        style={{ background: "#ffffff", padding: "2.5rem 3rem" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col-grid">
            {/* Image */}
            <div className="image-cell" style={{ position: "relative" }}>
              <div
                className="product-img-wrap"
                style={{ width: "100%", height: 550, borderRadius: 16, overflow: "hidden" }}
              >
                <img
                  src="/p16.png"
                  alt="Potted artificial plants on a wooden bench"
                  style={{
                     width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    transform: "translateY(10px) scale(1.03)",
                    filter: "drop-shadow(0px 4px 3px rgba(117, 112, 112, 0.4))",
                    objectPosition: "55% 15%",
                  }}
                />
              </div>
            </div>

            {/* Text */}
            <div className="text-cell" style={{ paddingTop: 15 }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#6b7f64",
                  marginBottom: "1rem",
                }}
              >
                what do we have?
              </p>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 3vw, 3rem)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                  color: "#0d1b0f",
                  marginBottom: "1.5rem",
                }}
              >
                Decorative Planter Box
              </h2>

              <div style={{ width: 50, height: 2, background: "#2d5a27", marginBottom: "1.5rem" }} />

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "#4a5568",
                  lineHeight: 1.85,
                  marginBottom: "1.5rem",
                }}
              >
                A decorative planter box featuring carefully arranged artificial 
                plants or styled empty spaces, designed to enhance both indoor 
                and outdoor environments. Each piece combines structure and greenery to create 
                a balanced, modern look. Planter boxes provides an instant and refined botanical
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
                {[ "Styled Built In Planters", "Artificial Plant Arrangements", "Custom Design Planter Boxes"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#2d5a27",
                        flexShrink: 0,
                        marginTop: "0.42rem",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1rem",
                        color: "#4a5568",
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
                  fontSize: "0.9rem",
                  color: "#2d5a27",
                  borderBottom: "1.5px solid #2d5a27",
                  paddingBottom: 2,
                  textDecoration: "none",
                }}
              >
                Explore our services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ──4TH INTRO BAND ── */}
      <section
        className="section-pad"
        style={{ background: "#FAFAF8", padding: "4rem 3rem" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col-grid" style={{ gap: "5rem" }}>
            {/* Text — on desktop: left. On mobile: order 2 (below image) */}
            <div className="text-cell" style={{ paddingTop: 15 }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#6b7f64",
                  marginBottom: "1rem",
                }}
              >
                what do we have?
              </p>

              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 3vw, 3rem)",
                  fontWeight: 500,
                  lineHeight: 1.15,
                  color: "#0d1b0f",
                  marginBottom: "1.5rem",
                }}
              >
                Artificial Turf Grass <br />
              </h2>

              <div style={{ width: 50, height: 2, background: "#2d5a27", marginBottom: "1.5rem" }} />

              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "#4a5568",
                  lineHeight: 1.85,
                  marginBottom: "1.5rem",
                }}
              >
                A high quality range of artificial turf grass designed to replicate 
                the look and feel of natural lawn surfaces. Built for durability and 
                year round greenery, it provides a clean and uniform finish for both 
                indoor and outdoor applications without the need for watering, mowing, 
                or sunlight. These low maintenance turf solutions offer a practical and 
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
                        background: "#2d5a27",
                        flexShrink: 0,
                        marginTop: "0.42rem",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1rem",
                        color: "#4a5568",
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
                  fontSize: "0.9rem",
                  color: "#2d5a27",
                  borderBottom: "1.5px solid #2d5a27",
                  paddingBottom: 2,
                  textDecoration: "none",
                }}
              >
                Explore our services &rarr;
              </Link>
            </div>

            {/* Image — on desktop: right. On mobile: order 1 (above text) */}
            <div className="image-cell" style={{ position: "relative" }}>
              <div
                className="product-img-wrap"
                style={{ width: "100%", height: 500, borderRadius: 16, overflow: "hidden" }}
              >
                <img
                  src="/p18.png"
                  alt="Paneled Wall Greens"
                  style={{
                    width: "100%",
                    height: "100%",
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