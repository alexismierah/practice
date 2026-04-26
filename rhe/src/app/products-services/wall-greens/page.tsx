"use client";

import { useState } from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

/* ── FONTS ── */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

/* ── PRODUCT TYPE ── */
interface Product {
  id: string;
  name: string;
  size: string;
  image: string;
}

/* ── PRODUCTS ── */
const PRODUCTS: Product[] = [
  { id: "1",  name: "Pachysandra",    size: "50cm×50cm",   image: "/wallgreens/pachy.png"    },
  { id: "2",  name: "Gardenia",       size: "50cm×50cm",   image: "/wallgreens/gard.png"     },
  { id: "3",  name: "Multi-Element",  size: "50cm×50cm",   image: "/wallgreens/multi.png"    },
  { id: "4",  name: "Spring Leaves",  size: "50cm×50cm",   image: "/wallgreens/spring.png"   },
  { id: "5",  name: "Lush Forest",    size: "50cm×50cm",   image: "/wallgreens/lushh.png"    },
  { id: "6",  name: "Rhein Jardin",   size: "50cm×50cm",   image: "/wallgreens/rheinb.png"   },
  { id: "7",  name: "Daffodil Smile", size: "50cm×50cm",   image: "/wallgreens/daff.png"     },
  { id: "8",  name: "Flourish Yard",  size: "50cm×50cm",   image: "/wallgreens/flourish.png" },
  { id: "9",  name: "Deluxe Fern",    size: "100cm×100cm", image: "/wallgreens/del.png"      },
  { id: "10", name: "Amazon World",   size: "100cm×100cm", image: "/wallgreens/aw.png"       },
  { id: "11", name: "Pittoso",        size: "50cm×50cm",   image: "/wallgreens/pitoo.png"    },
  { id: "12", name: "Cymbidium",      size: "50cm×50cm",   image: "/wallgreens/cym.png"      },
  { id: "13", name: "Gentle Breeze",  size: "100cm×100cm", image: "/wallgreens/breeze.png"   },
  { id: "14", name: "The Jungle",     size: "100cm×100cm", image: "/wallgreens/jungle.png"   },
  { id: "15", name: "Orchid Park",    size: "100cm×100cm", image: "/wallgreens/orchid.png"   },
  { id: "16", name: "Green Jewelry",  size: "100cm×100cm", image: "/wallgreens/jewel.png"    },
];

const featureLabelStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  color: "#6B7060",
  margin: 0,
  letterSpacing: "0.04em",
};

const featureDescStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "10px",
  fontWeight: 300,
  color: "#6B7060",
  lineHeight: 1.7,
  marginTop: "-10px",
  letterSpacing: "0.03em",
};

const detailText: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: 1.72,
  letterSpacing: "0.03em",
  margin: 0,
};

/* ── PRODUCT CARD ── */
function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "320px", margin: "0 auto", cursor: "pointer" }}
      onClick={onClick}
    >
      <div
        className="group overflow-hidden"
        style={{
          width: "100%",
          background: "#f7f7f7",
          boxShadow: "0 0px 2px rgba(0,0,0,0.30)",
          transition: "box-shadow 0.25s ease, border-color 0.25s ease",
          borderRadius: "6px",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.boxShadow = "0 20px 48px rgba(30,80,30,0.30)";
          el.style.borderColor = "#d1d1d1";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.boxShadow = "0 0px 2px rgba(0,0,0,0.30)";
          el.style.borderColor = "#d1d1d1";
        }}
      >
        <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
            style={{ transition: "transform 0.45s ease" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.08)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")
            }
          />
        </div>
      </div>

      <div
        style={{
          padding: "1.2rem 0.85rem 0",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 500,
          fontFamily: "'DM Sans', sans-serif",
          color: "#000",
        }}
      >
        <p style={{ ...detailText }}>{product.name}</p>
        <p
          style={{
            fontSize: "12px",
            marginTop: "-1px",
            color: "#6B7060",
          }}
        >
          {product.size}
        </p>
      </div>
    </div>
  );
}

/* ── PRODUCT MODAL ── */
function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(20, 28, 20, 0.70)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        animation: "fadeIn 0.2s ease",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: scale(0.93) translateY(14px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fafaf7",
          borderRadius: "6px",
          padding: "2rem",
          maxWidth: "500px",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          position: "relative",
          animation: "slideUp 0.25s ease",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "1px solid #ccc",
            borderRadius: "6px",
            width: "34px",
            height: "34px",
            cursor: "pointer",
            fontSize: "16px",
            color: "#444",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background = "#e8e8e4")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background = "none")
          }
        >
          ✕
        </button>

        {/* Product image */}
        <div
          style={{
            width: "100%",
            borderRadius: "6px",
            overflow: "hidden",
            background: "#f0f0eb",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* Product info */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            color: "#000",
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          {product.name}
        </p>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: "#4a5450",
            marginTop: "-20px",
          }}
        >
          {product.size}
        </p>
      </div>
    </div>
  );
}

/* ── PAGE ── */
export default function Page() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className={`${cormorant.className}`}>

      <style>{`
        /* HERO */
        .wg-hero {
          width: 100%;
          height: 40vh;
          background-image: url('/wallgreens/wall9.jpg');
          background-size: cover;
          background-position: center 45%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wg-hero-inner {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.2rem;
          padding: 0 5rem;
        }
        .wg-hero-title {
          font-size: 50px;
          font-weight: 300;
          line-height: 1.12;
          color: #fff;
          margin: 0;
          letter-spacing: 0.02em;
        }
        .wg-hero-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: #fff;
          letter-spacing: 0.22em;
          margin-top: -10px;
        }

        /* ABOUT */
        .wg-about-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
          overflow: hidden;
          padding: 0.5rem 5rem;
          column-gap: 2rem;
        }
        .wg-about-img-wrap {
          background: #f7f7f7;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 600px;
        }
        .wg-about-text {
          background: #f7f7f7;
          padding: 4.5rem 0 4.5rem 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* CATALOG */
        .wg-catalog-header {
          padding: 2.5rem 8rem 5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: center;
        }
        .wg-catalog-grid-wrap {
          padding: 0 8rem 5rem;
        }
        .wg-products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.5rem;
        }

        /* FEATURES */
        .wg-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          width: 100%;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .wg-hero { height: 220px; }
          .wg-hero-inner { padding: 0 1.5rem; gap: 0.8rem; }
          .wg-hero-title { font-size: 28px; }
          .wg-hero-subtitle { font-size: 11px; }

          .wg-about-grid {
            grid-template-columns: 1fr;
            padding: 0;
            row-gap: 0;
          }
          .wg-about-img-col { order: 1; }
          .wg-about-text-col { order: 2; }
          .wg-about-img-wrap {
            min-height: unset;
            padding: 1.5rem 1.5rem 0;
          }
          .wg-about-img-wrap > div {
            max-width: 100% !important;
            max-height: unset !important;
          }
          .wg-about-img-wrap > div img { height: 260px !important; }
          .wg-about-text { padding: 2rem 1.5rem 2.5rem; }

          .wg-catalog-header { padding: 2rem 1.5rem 1.5rem; }
          .wg-catalog-grid-wrap { padding: 0 1.5rem 3rem; }
          .wg-products-grid { grid-template-columns: repeat(2, 1fr); gap: 1.2rem; }

          .wg-features-grid { grid-template-columns: 1fr; gap: 2rem; }
          .wg-features-section { padding: 56px 24px !important; }
        }

        /* TABLET */
        @media (min-width: 769px) and (max-width: 1024px) {
          .wg-hero-inner { padding: 0 2rem; }
          .wg-hero-title { font-size: 36px; }
          .wg-about-grid { padding: 0.5rem 2.5rem; column-gap: 1.5rem; }
          .wg-about-img-wrap { min-height: 400px; }
          .wg-about-text { padding: 3rem 0 3rem 2rem; }
          .wg-catalog-header { padding: 2rem 3rem 3rem; }
          .wg-catalog-grid-wrap { padding: 0 3rem 4rem; }
          .wg-products-grid { grid-template-columns: repeat(3, 1fr); gap: 1.8rem; }
        }
      `}</style>

      {/* ── SECTION 1 — HERO ── */}
      <section className="wg-hero">
        <div style={{ position: "absolute", inset: 0, background: "rgba(20, 28, 20, 0.50)" }} />
        <div className="wg-hero-inner">
          <h1 className={`${dmSans.className} wg-hero-title`}>
            Artificial Wall Greens
          </h1>
          <p className="wg-hero-subtitle">
            TRANSFORM BLANK WALLS INTO LUSH VERTICAL GARDEN FOR TIMELESS ELEGANCE.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 — ABOUT THE PRODUCT ── */}
      <section style={{ width: "100%", background: "#f7f7f7" }}>
        <div className="wg-about-grid">

          <div className="wg-about-img-col wg-about-img-wrap">
            <div
              style={{
                width: "100%",
                maxWidth: "600px",
                maxHeight: "600px",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid #e0ede0",
                background: "#fafaf7",
              }}
            >
              <img
                src="/wallgreens/wall7.jpg"
                alt="Artificial wall plant"
                style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>

          <div className="wg-about-text-col wg-about-text">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                letterSpacing: "0.30em",
                textTransform: "uppercase",
                color: "#8FA882",
                margin: "0 0 0.5rem",
              }}
            >
              About the Product
            </p>

            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                fontWeight: 300,
                lineHeight: 1.12,
                color: "#000000",
                margin: "0 0 1rem",
              }}
            >
              Designed to Look Real
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#6B7060",
                lineHeight: 1.85,
                margin: "0 0 1rem",
              }}
            >
              Our artificial wall greens are decorative panel systems designed to replicate the natural look
              of real plants without the need for maintenance. They create a consistent and refreshing green finish
              that enhances both indoor and outdoor spaces.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#6B7060",
                lineHeight: 1.85,
                margin: "0 0 1rem",
              }}
            >
              Installation is done using a strong steel matting base that is securely drilled and
              fixed onto the wall for stability. The panels are then attached to this structure and
              can be arranged in vertical or horizontal layouts. They are also flexible enough to be
              trimmed, combined, or layered to fit different wall sizes, from small feature walls to
              large commercial areas.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — PRODUCTS CATALOG ── */}
      <section style={{ width: "100%", background: "#efefef" }}>
        <div className="wg-catalog-header">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8FA882",
              marginTop: "50px",
            }}
          >
            Browse All Designs
          </p>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "50px",
              fontWeight: 400,
              color: "#000000",
              lineHeight: 1.17,
              textTransform: "uppercase",
              marginBottom: "-30px",
            }}
          >
            Featured Products
          </h2>
        </div>

        <div className="wg-catalog-grid-wrap">
          <div className="wg-products-grid">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — FEATURES ── */}
      <section
        className="wg-features-section"
        style={{ width: "100%", background: "#f7f7f7", padding: "88px 20px" }}
      >
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
              fontWeight: 300,
              lineHeight: 1.17,
              margin: "0 0 2.5rem",
            }}
          >
            <span style={{ color: "#000000" }}>Choose the Perfect</span>{" "}
            <em style={{ color: "#2D4A27" }}>Greens</em>
            <br />
            <span style={{ color: "#000000", fontWeight: 300 }}>for Your Space</span>
          </h2>

          <div className="wg-features-grid">
            {[
              {
                label: "No Watering",
                desc: "Never water, prune, or fertilise.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ stroke: "#ffffff" }}>
                    <path d="M16 5C16 5 8 14 8 19a8 8 0 0016 0c0-5-8-14-8-14z" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                label: "Pet Friendly",
                desc: "Non-toxic and safe for all pets.",
                icon: (
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 2 32 32"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <ellipse cx="10.5" cy="15" rx="1.6" ry="1.5" />
                    <ellipse cx="16" cy="13.5" rx="1.8" ry="1.7" />
                    <ellipse cx="21.5" cy="15" rx="1.6" ry="1.5" />
                    <path d="M12 21c0-2 1.8-3.2 4-3.2s4 1.2 4 3.2c0 2.2-1.8 3.8-4 3.8s-4-1.6-4-3.8z" />
                  </svg>
                ),
              },
              {
                label: "UV Resistant",
                desc: "Colour-stable in direct sunlight.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ stroke: "#ffffff" }}>
                    <circle cx="16" cy="16" r="5.5" strokeWidth="2" />
                    <path d="M16 4v3M16 25v3M4 16h3M25 16h3" strokeWidth="2" strokeLinecap="round" />
                    <path d="M7.8 7.8l2.1 2.1M22.1 22.1l2.1 2.1M22.1 9.9l-2.1 2.1M9.9 22.1l-2.1 2.1" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div
                key={feature.label}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem" }}
              >
                <div
                  style={{
                    width: "68px",
                    height: "68px",
                    borderRadius: "50%",
                    border: "1px solid #4a5450",
                    background: "#2d4a27",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </div>
                <p style={featureLabelStyle}>{feature.label}</p>
                <p style={featureDescStyle}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT MODAL ── */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </div>
  );
}