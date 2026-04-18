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

/* ── FILTERS ── */
const FILTERS = [
  { label: "All Plants", value: "All" },
  { label: "50cm x 50cm", value: "50cm×50cm" },
  { label: "100cm x 100cm", value: "100cm×100cm" },
  { label: "100cm x 200cm", value: "100cm×200cm" },
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
  { id: "1",  name: "Lush Forest",           size: "50cm×50cm",   price: "$20.00", oldPrice: "$34.00", image: "/pachy.png"  },
  { id: "2",  name: "Amazon World",          size: "100cm×100cm", price: "$20.00", oldPrice: "$34.00", image: "/gard.png"    },
  { id: "3",  name: "Deluxe Fern",          size: "100cm×100cm", price: "$20.00", oldPrice: "$34.00", image: "/multi.png"   },
  { id: "4",  name: "Pachysandra",           size: "50cm×50cm",   price: "$20.00", oldPrice: "$34.00", image: "/spring.png" },
  { id: "5",  name: "Rhein Jardin B",       size: "50cm×50cm",   price: "$20.00", oldPrice: "$34.00", image: "/pitoo.png"},
  { id: "6",  name: "Fireworks",              size: "50cm×50cm",   price: "$20.00", oldPrice: "$34.00", image: "/cym.png"  },
  { id: "7",  name: "Color Meadow B",        size: "100cm×100cm", price: "$20.00", oldPrice: "$34.00", image: "/fern.png"    },
  { id: "8",  name: "The Jungle",            size: "100cm×100cm", price: "$20.00", oldPrice: "$34.00", image: "/flourish.png"   },
  { id: "9",  name: "Lucky Fernbed",         size: "100cm×100cm", price: "$20.00", oldPrice: "$34.00", image: "/luc.png"   },
  { id: "10", name: "Pittoso",              size: "50cm×50cm",   price: "$20.00", oldPrice: "$34.00", image: "/pitoo.png" },
  { id: "11", name: "Orchid Park",           size: "100cm×100cm", price: "$20.00", oldPrice: "$34.00", image: "/orc.png"   },
  { id: "12", name: "Cymbidium",             size: "50cm×50cm",   price: "$20.00", oldPrice: "$34.00", image: "/cym.png"   },
  { id: "13", name: "Daffodil Smile",         size: "50cm×50cm",   price: "$20.00", oldPrice: "$34.00", image: "/daff.png"  },
  { id: "14", name: "Bosky PG",              size: "100cm×200cm", price: "$20.00", oldPrice: "$34.00", image: "/bos.png"   },
  { id: "15", name: "Cerasus",           size: "100cm×200cm", price: "$20.00", oldPrice: "$34.00", image: "/cer.png"   },
  { id: "16", name: "Schefflera",          size: "100cm×200cm", price: "$20.00", oldPrice: "$34.00", image: "/sche.png"  },
];

/* ── SHARED DETAIL TEXT STYLE ── */
const detailText: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "0.9rem",
  fontWeight: 400,
  lineHeight: 1.55,
  letterSpacing: "0.03em",
  margin: 0,
};

/* ── PRODUCT CARD ── */
function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-2xl"
      style={{
        background: "#f2f6f2",
        border: "1px solid #deeade",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.25s ease, border-color 0.25s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 20px 48px rgba(30,80,30,0.15)";
        el.style.borderColor = "#a5c8a5";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
        el.style.borderColor = "#deeade";
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

      {/* DETAILS — inside the same card */}
      <div
        style={{
          padding: "0.1rem 0.85rem 0.85rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ ...detailText, fontWeight: 500, color: "#1a3020" }}>
          {product.name}
        </p>
        <p style={{ ...detailText, color: "#5a7a5a", marginTop: "-5px" }}>
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

      {/* HERO */}
      <section
        style={{
          width: "100%",
          height: "268px",
          backgroundImage: "url('/pit.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(30, 31, 30, 0.5)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center gap-3">
          <p
            style={{
              fontWeight: 500,
              marginTop: -5,
              marginBottom: -20,
              color: "#fafafa",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              letterSpacing: "0.14em",
            }}
          >
            PRODUCT CATALOG
          </p>

          <h1
            className={cormorant.className}
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: "#fafafa",
            }}
          >
            Artificial Wall Greens
          </h1>

          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                onMouseEnter={(e) => {
                  if (activeFilter !== f.value)
                    (e.currentTarget as HTMLButtonElement).style.background = "#2D5A27";
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== f.value)
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
                className="text-[15px] px-4 py-1 rounded-full"
                style={{
                  border: "1px solid #fafafa",
                  background: activeFilter === f.value ? "#2D5A27" : "transparent",
                  color: "#fff",
                  fontFamily: "Cormorant Garamond",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background 0.18s ease",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section
        style={{
          width: "100%",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "60px 20px",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section
        style={{
          width: "100%",
          background: "#Fff",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "stretch",
            overflow: "hidden",
          }}
        >
          {/* LEFT — image */}
          <div
            style={{
              backgroundImage: "url('/p38.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "420px",
            }}
          />

          {/* RIGHT — text panel */}
          <div
            style={{
              background: "#21411d",
              padding: "4rem 3.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "1.2rem",
              }}
            >
              Craftsmanship
            </p>

            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "#fff",
                marginBottom: "0",
              }}
            >
              Designed to
              <br />
              <em>Look Real</em>
            </h2>

            <div
              style={{
                width: "36px",
                height: "1px",
                background: "#b5c4af",
                margin: "1rem 0",
              }}
            />

            <p
              style={{
                fontSize: "0.88rem",
                color: "#fff",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Each plant is hand-finished with premium silk and PE materials,
              meticulously shaped to mimic natural growth patterns. UV-treated,
              pet-safe, and hypoallergenic — ideal for any space.
            </p>

            <p
              style={{
                marginTop: "1.4rem",
                fontSize: "0.88rem",
                color: "#fff",
                lineHeight: 1.85,
                fontWeight: 300,
              }}
            >
              Whether installed in a residential foyer or a commercial atrium,
              our panels bring enduring botanical beauty without maintenance.
            </p>

            {/* FEATURE TAGS */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "1.8rem",
              }}
            >
              {["UV Resistant", "Pet-Safe", "Maintenance Free"].map((label) => (
                <span
                  key={label}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.07em",
                    color: "#3a6b35",
                    background: "#eef4ec",
                    border: "1px solid #b8d4b4",
                    borderRadius: "999px",
                    padding: "0.28rem 0.95rem",
                    userSelect: "none",
                    pointerEvents: "none",
                    display: "inline-block",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}