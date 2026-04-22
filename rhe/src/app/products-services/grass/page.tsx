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
  { id: "1", name: "Lawn Grass", size: "25m×2m", image: "/turfgrass/turf10.png" },
  { id: "2", name: "Golf Grass", size: "25m×2m", image: "/turfgrass/turf9.png"  },
];

const featureLabelStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "15px",
  fontWeight: 300,
  color: "#4a5450",
  margin: 0,
  letterSpacing: "0.04em",
};

const featureDescStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "15px",
  fontWeight: 300,
  color: "#4a5450",
  lineHeight: 1.7,
  marginTop: "-10px",
  letterSpacing: "0.03em",
};

const detailText: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "15px",
  fontWeight: 300,
  lineHeight: 1.55,
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
        className="group overflow-hidden "
        style={{
          width: "100%",
          background: "#fafaf7",
          boxShadow: "0 5px 2px rgba(0,0,0,0.30)",
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
          el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.30)";
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
          fontSize: "15px",
          fontWeight: 300,
          fontFamily: "'DM Sans', sans-serif",
          color: "#000",
        }}
      >
        <p style={{ ...detailText }}>{product.name}</p>
        <p style={{ ...detailText, marginTop: "-1px" }}>{product.size}</p>
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
          from { opacity: 0; transform: scale(0.93) translateY(12px); }
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
            fontSize: "15px",
            fontWeight: 300,
            color: "#4a5450",
            margin: "-0.5rem 0 0",
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

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        /* HERO */
        .tg-hero {
          width: 100%;
          height: 285px;
          background-image: url('/turfgrass/turf6.webp');
          background-size: cover;
          background-position: center 80%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tg-hero-inner {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.2rem;
          padding: 0 5rem;
        }
        .tg-hero-title {
          font-size: 52px;
          font-weight: 300;
          line-height: 1.1;
          color: #fafafa;
          margin: 0;
          letter-spacing: 0.02em;
        }
        .tg-hero-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 420;
          color: #f8f8f8;
          letter-spacing: 0.02em;
          margin-top: -10px;
        }

        /* ABOUT */
        .tg-about-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
          overflow: hidden;
          padding: 0.5rem 5rem;
          column-gap: 2rem;
        }
        .tg-about-img-col {
          background: #fafaf7;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 600px;
        }
        .tg-about-text-col {
          background: #fafaf7;
          padding: 4.5rem 0 4.5rem 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* CATALOG */
        .tg-catalog-header {
          padding: 2.5rem 8rem 5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: center;
        }
        .tg-catalog-grid-wrap {
          padding: 0 8rem 5rem;
        }
        .tg-products-grid {
          display: grid;
          grid-template-columns: repeat(2, 260px);
          justify-content: center;
          gap: 2.5rem;
        }

        /* FEATURES */
        .tg-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          width: 100%;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .tg-hero {
            height: 220px;
          }
          .tg-hero-inner {
            padding: 0 1.5rem;
            gap: 0.8rem;
          }
          .tg-hero-title {
            font-size: 28px;
          }
          .tg-hero-subtitle {
            font-size: 11px;
          }

          .tg-about-grid {
            grid-template-columns: 1fr;
            padding: 0;
            row-gap: 0;
          }
          .tg-about-img-col {
            order: 1;
            min-height: unset;
            padding: 1.5rem 1.5rem 0;
          }
          .tg-about-img-col > div {
            max-width: 100% !important;
            max-height: unset !important;
          }
          .tg-about-img-col > div img {
            height: 260px !important;
          }
          .tg-about-text-col {
            order: 2;
            padding: 2rem 1.5rem 2.5rem;
          }

          .tg-catalog-header {
            padding: 2rem 1.5rem 1.5rem;
          }
          .tg-catalog-grid-wrap {
            padding: 0 1.5rem 3rem;
          }
          .tg-products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2rem;
          }

          .tg-features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .tg-features-section {
            padding: 56px 24px !important;
          }
        }

        /* ── TABLET ── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .tg-hero-inner {
            padding: 0 2rem;
          }
          .tg-hero-title {
            font-size: 36px;
          }
          .tg-about-grid {
            padding: 0.5rem 2.5rem;
            column-gap: 1.5rem;
          }
          .tg-about-img-col {
            min-height: 400px;
          }
          .tg-about-text-col {
            padding: 3rem 0 3rem 2rem;
          }
          .tg-catalog-header {
            padding: 2rem 3rem 3rem;
          }
          .tg-catalog-grid-wrap {
            padding: 0 3rem 4rem;
          }
          .tg-products-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 600px;
            margin: 0 auto;
            gap: 1.8rem;
          }
        }
      `}</style>

      {/* ── SECTION 1 — HERO ── */}
      <section className="tg-hero">
        <div style={{ position: "absolute", inset: 0, background: "rgba(20, 28, 20, 0.50)" }} />
        <div className="tg-hero-inner">
          <h1 className={`${dmSans.className} tg-hero-title`}>
            Artificial Turf Grass
          </h1>
          <p className="tg-hero-subtitle">
            TURN ANY SPACE INTO LUSH GREEN GRASS FOR A FRESH AND TIMELESS LOOK.
          </p>
        </div>
      </section>


      {/* ── SECTION 2 — ABOUT THE PRODUCT ── */}
      <section style={{ width: "100%", background: "#fafaf7" }}>
        <div className="tg-about-grid">

          {/* IMAGE — order 1 on mobile (always on top) */}
          <div className="tg-about-img-col">
            <div
              style={{
                width: "100%",
                maxWidth: "600px",
                maxHeight: "400px",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid #e0ede0",
                background: "#fafaf7",
              }}
            >
              <img
                src="/turfgrass/turf5.jpg"
                alt="Artificial turf grass"
                style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>

          {/* TEXT — order 2 on mobile (always below) */}
          <div className="tg-about-text-col">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "#000000",
                margin: "0 0 0.5rem",
              }}
            >
              About the Product
            </p>

            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(1.5rem, 1.8vw + 0.8rem, 2.4rem)",
                fontWeight: 300,
                lineHeight: 1.2,
                color: "#000000",
                margin: "0 0 1rem",
              }}
            >
              Clean and Durable Turf
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "#4a5450",
                lineHeight: 1.85,
                margin: "0 0 1rem",
              }}
            >
              Our artificial grass is designed for versatile turf applications that deliver a natural,
              well-maintained look without the upkeep of real grass. It is suitable for both indoor and outdoor
              spaces, providing a consistent green surface ideal for residential lawns, commercial areas, recreational
              grounds, and even specialized spaces like golf putting greens.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "#4a5450",
                lineHeight: 1.85,
                margin: "0 0 1rem",
              }}
            >
              We supply and install artificial grass based on the client's preferred surface,
              whether on cement or soil. Each installation is carefully measured, fitted, and
              trimmed to ensure a smooth and seamless finish.
            </p>
          </div>
        </div>
      </section>


      {/* ── SECTION 3 — PRODUCTS CATALOG ── */}
      <section style={{ width: "100%", background: "#fff" }}>
        <div className="tg-catalog-header">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "#000000",
              marginTop: "50px",
            }}
          >
            Browse All Designs
          </p>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.5rem, 1.8vw + 0.8rem, 2.4rem)",
              fontWeight: 300,
              color: "#000000",
              lineHeight: 1.15,
              textTransform: "uppercase",
              marginBottom: "-20px",
            }}
          >
            Featured Products
          </h2>
        </div>

        <div className="tg-catalog-grid-wrap">
          <div className="tg-products-grid">
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


      {/* ── SECTION 4 — CHOOSE THE PERFECT PLANT ── */}
      <section
        className="tg-features-section"
        style={{ width: "100%", background: "#fafaf7", padding: "88px 20px" }}
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
              fontSize: "clamp(1.5rem, 1.8vw + 0.8rem, 2.4rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              margin: "0 0 2.5rem",
            }}
          >
            <span style={{ color: "#000000" }}>Choose the Perfect</span>{" "}
            <span style={{ color: "#000000" }}>Greens</span>
            <br />
            <span style={{ color: "#000000", fontWeight: 300 }}>for Your Space</span>
          </h2>

          <div className="tg-features-grid">
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
                    background: "#2d5040",
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