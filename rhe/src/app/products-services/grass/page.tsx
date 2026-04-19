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

<style>{`
  @media (max-width: 1024px) {
    .wall-greens-section-padding { padding-left: 2.5rem !important; padding-right: 2.5rem !important; }
    .wall-greens-grid-padding { padding-left: 40px !important; padding-right: 40px !important; }
  }
  @media (max-width: 640px) {
    .wall-greens-section-padding { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
    .wall-greens-grid-padding { padding-left: 20px !important; padding-right: 20px !important; }
  }
`}</style>

/* ── FILTERS ── */
const FILTERS = [
  { label: "All Plants", value: "All" },
  { label: "50cm x 50cm", value: "25m×2m" },
  { label: "100cm x 100cm", value: "20m×2m" },
] as const;

type FilterValue = (typeof FILTERS)[number]["value"];

/* ── PRODUCT TYPE ── */
interface Product {
  id: string;
  name: string;
  size: Exclude<FilterValue, "All">;
  image: string;
  price: string;
  oldPrice: string;
}

/* ── PRODUCTS ── */
const PRODUCTS: Product[] = [
  { id: "1",  name: "Lawn Grass",     size: "25m×2m",   price: "$20.00", oldPrice: "$34.00", image: "/turf10.png"    },
  { id: "2",  name: "Golf Grass",    size: "25m×2m", price: "$20.00", oldPrice: "$34.00", image: "/turf9.png"     },
];

const featureLabelStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "1.15rem",
  fontWeight: 500,
  color: "#21411d",
  margin: 0,
  letterSpacing: "0.04em",
};

const featureDescStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.85rem",
  fontWeight: 300,
  color: "#21411d",
  lineHeight: 1.7,
  marginTop: "-10px",
  letterSpacing: "0.03em",
};

/* ── SHARED DETAIL TEXT STYLE ── */
const detailText: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.9rem",
  fontWeight: 400,
  lineHeight: 1.55,
  letterSpacing: "0.03em",
  margin: 0,
};

/* ── PRODUCT CARD ── */
function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", maxWidth: "320px", margin: "0 auto" }}>
      
      {/* CARD (UNCHANGED STYLE) */}
      <div
        className="group cursor-pointer overflow-hidden rounded-2xl"
        style={{
          width: "100%",
          background: "#fafaf7",
          boxShadow: "0 5px 2px rgba(0,0,0,0.30)", // ✅ unchanged
          transition: "box-shadow 0.25s ease, border-color 0.25s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.boxShadow = "0 20px 48px rgba(30,80,30,0.30)"; // ✅ unchanged
          el.style.borderColor = "#d1d1d1";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.30)"; // ✅ unchanged
          el.style.borderColor = "#d1d1d1";
        }}
      >
        {/* IMAGE */}
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

      {/* DETAILS (NOW OUTSIDE) */}
      <div
        style={{
          padding: "1.2rem 0.85rem 0", // you can adjust spacing here
          textAlign: "center",
          fontSize: "15px",
          fontWeight: "500",
          fontFamily: "'DM Sans', sans-serif",
          color: "#21411d",

        }}
      >
        <p style={{ ...detailText }}>
          {product.name}
        </p>
        <p style={{ ...detailText, marginTop: "-1px" }}>
          {product.size}
        </p>
      </div>

    </div>
  );
}

/* ── PAGE ── */
export default function Page() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const filtered =
    activeFilter === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.size === activeFilter);

  return (
    <div className={`${cormorant.className}`}>

      {/* ─────────────────────────────────────────
          SECTION 1 — HERO: Title & Tagline
      ───────────────────────────────────────── */}
      <section
        style={{
          width: "100%",
          height: "285px",
          backgroundImage: "url('/turf6.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center 80%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(20, 28, 20, 0.50)",
          }}
        />

        <div
          className="relative z-10 flex flex-col items-center text-center wall-greens-section-padding"
          style={{ gap: "1.2rem", padding: "0 5rem" }}
        >

          {/* headline */}
          <h1
            className={dmSans.className}
            style={{
              fontSize: "65px",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#fafafa",
              margin: 0,
              letterSpacing: "0.02em",
            }}
          >
            Artificial Turf Grass
          </h1>

          {/* tagline */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 420,
              color: "#f8f8f8",
              letterSpacing: "0.08em",
              marginTop: -10,

            }}
          >
            TURN ANY SPACE INTO LUSH GREEN GRASS FOR A FRESH AND TIMELESS LOOK.
          </p>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          SECTION 2 — WHAT IS THE PRODUCT
          Left: image | Right: description
      ───────────────────────────────────────── */}
      <section
        style={{
          width: "100%",
          background: "#fafaf7",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "stretch",
            overflow: "hidden",
            padding: "2.5rem 5rem 2.5rem",
          }}
          className="wall-greens-section-padding"
        >
          {/* LEFT — image */}
          <div
            style={{
              background: "#fafaf7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "600px",
            }}
          >
            
            <div
              style={{
                width: "100%",
                maxWidth: "600px",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid #e0ede0",
                background: "#fafaf7",
              }}
            >
              <img
                src="/turf5.jpg"
                alt="Artificial wall plant"
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* RIGHT — text panel */}
          <div
            style={{
              background: "#fafaf7",
              padding: "4.5rem 3.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* eyebrow */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#21411d",
                margin: "0 0 0.5rem",
              }}
            >
              About the Product
            </p>

            {/* heading */}
            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
                fontWeight: 300,
                lineHeight: 1.2,
                color: "#21411d",
                margin: "0 0 0",
              }}
            >
              Clean and Durable Turf
            </h2>

            {/* divider */}
            <div
              style={{
                width: "36px",
                height: "1px",
                background: "#21411d",
                margin: "1rem 0",
              }}
            />

            {/* what it is */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "#4a5568",
                lineHeight: 1.85,
                margin: "0 0 1rem",
              }}
            >
              Our artificial grass is designed for versatile turf applications that deliver a natural, 
              well-maintained look without the upkeep of real grass. It is suitable for both indoor and outdoor 
              spaces, providing a consistent green surface ideal for residential lawns, commercial areas, recreational 
              grounds, and even specialized spaces like golf putting greens.
            </p>

            {/* how it's installed */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "#4a5568",
                lineHeight: 1.85,
                margin: "0 0 1rem",
              }}
            >
              We supply and install artificial grass based on the client’s preferred surface, 
              whether on cement or soil. Each installation is carefully measured, fitted, and 
              trimmed to ensure a smooth and seamless finish. Our team also performs precise cutting 
              and detailing when needed to achieve clean edges and a refined overall appearance.
            </p>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
          SECTION 3 — PRODUCTS CATALOG with filters
      ───────────────────────────────────────── */}
      <section
        style={{
          width: "100%",
          background: "#fff",
        }}
      >
        {/* Section header */}
        <div
          style={{
            padding: "2.5rem 8rem 5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            textAlign: "center",
          }}
          className="wall-greens-section-padding"
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15PX",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#21411d",
              marginTop: "50px",
            }}
          >
            Browse All Designs
          </p>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 420,
              color: "#21411d",
              lineHeight: 1.15,
              textTransform: "uppercase",
              marginBottom: "-20px",
            }}
          >
            Featured Products
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
          padding: "0 8rem 5rem",
          }}
          className="wall-greens-grid-padding"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-x-10 gap-y-10"
            style={{
              gridTemplateColumns: "repeat(2, 260px)",
              justifyContent: "center",
            }}
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────
              SECTION — Choose the Perfect Plant
          ───────────────────────────────────────── */}
          <section
            style={{
              width: "100%",
              background: "#fafaf7",
              padding: "88px 20px",
            }}
          >
            <div
              style={{
                maxWidth: "680px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* HEADING */}
              <h2
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: "#21411d",
                  margin: "0 0 2.5rem",
                }}
              >
                Choose the Perfect Grass
                <br />
                <em>for Your Space</em>
              </h2>

              {/* GRID */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "2.5rem",
                  width: "100%",
                }}
              >
                {[
                  {
                    label: "No Watering",
                    desc: "Never water, prune, or fertilise.",
                    icon: (
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ stroke: "#ffffff" }}>
                        <circle cx="16" cy="16" r="13" strokeWidth="1.2"/>
                        <path d="M10 20c2-6 6-9 12-8" strokeWidth="1.2" strokeLinecap="round"/>
                        <path d="M16 22V12M13 15l3-3 3 3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                  },
                  {
                    label: "Pet Friendly",
                    desc: "Non-toxic and safe for all pets.",
                    icon: (
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ stroke: "#ffffff" }}>
                        <path d="M16 6c-5 4-8 8-8 12a8 8 0 0016 0c0-4-3-8-8-12z" strokeWidth="1.2" strokeLinejoin="round"/>
                        <path d="M16 14v8" strokeWidth="1.2" strokeLinecap="round"/>
                        <path d="M12 18l4-4 4 4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                  },
                  {
                    label: "UV Resistant",
                    desc: "Colour-stable in direct sunlight.",
                    icon: (
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ stroke: "#ffffff" }}>
                        <circle cx="16" cy="16" r="7" strokeWidth="1.2"/>
                        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" strokeWidth="1.2" strokeLinecap="round"/>
                        <path d="M7.8 7.8l2.8 2.8M21.4 21.4l2.8 2.8M21.4 10.6l-2.8 2.8M10.6 21.4l-2.8 2.8" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    ),
                  },
                ].map((feature) => (
                  <div
                    key={feature.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.8rem",
                    }}
                  >
                    {/* ICON CIRCLE */}
                    <div
                      style={{
                        width: "68px",
                        height: "68px",
                        borderRadius: "50%",
                        border: "1px solid #21411d",
                        background: "#21411d",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {feature.icon}
                    </div>

                    <p style={featureLabelStyle}>
                      {feature.label}
                    </p>

                    <p style={featureDescStyle}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

    </div>
  );
}