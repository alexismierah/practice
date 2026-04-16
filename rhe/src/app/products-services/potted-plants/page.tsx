"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

/* ── FONT FIX (ONLY FOR HERO TITLE) ── */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});


const SIZES = ["All", "50cm×50cm", "100cm×100cm", "100cm×200cm"] as const;
type Size = (typeof SIZES)[number];

interface Product {
  id: string;
  name: string;
  code: string;
  size: Exclude<Size, "All">;
  image: string;
}

const PRODUCTS: Product[] = [
  { id: "1",  name: "Fiddle Leaf Fig",    code: "PLT-001", size: "50cm×50cm",   image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&q=80" },
  { id: "2",  name: "Monstera Deliciosa", code: "PLT-002", size: "100cm×100cm", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80" },
  { id: "3",  name: "Bird of Paradise",   code: "PLT-003", size: "100cm×200cm", image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&q=80" },
  { id: "4",  name: "Snake Plant",        code: "PLT-004", size: "50cm×50cm",   image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80" },
  { id: "5",  name: "ZZ Plant",           code: "PLT-005", size: "100cm×100cm", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&q=80" },
  { id: "6",  name: "Areca Palm",         code: "PLT-006", size: "100cm×200cm", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { id: "7",  name: "Peace Lily",         code: "PLT-007", size: "50cm×50cm",   image: "https://images.unsplash.com/photo-1596547609652-9cf5d8c76ea3?w=400&q=80" },
  { id: "8",  name: "Rubber Tree",        code: "PLT-008", size: "100cm×100cm", image: "https://images.unsplash.com/photo-1530968033775-2c92736b131e?w=400&q=80" },
  { id: "9",  name: "Bamboo Palm",        code: "PLT-009", size: "100cm×200cm", image: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?w=400&q=80" },
  { id: "10", name: "Pothos",             code: "PLT-010", size: "50cm×50cm",   image: "https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?w=400&q=80" },
  { id: "11", name: "Dracaena",           code: "PLT-011", size: "100cm×100cm", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80" },
  { id: "12", name: "Traveller's Palm",   code: "PLT-012", size: "100cm×200cm", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80" },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group cursor-pointer flex flex-col">
      {/* image */}
      <div
        className="overflow-hidden rounded-2xl relative"
        style={{
          aspectRatio: "3/4",
          background: "#f2f6f2",
          border: "1px solid #deeade",
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
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          style={{ transition: "transform 0.45s ease" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.08)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
        />
        {/* floating size badge */}
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: "rgba(255,255,255,0.92)",
            color: "#276027",
            fontSize: "10px",
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: "999px",
            letterSpacing: "0.05em",
            border: "1px solid rgba(46,125,50,0.18)",
          }}
        >
          {product.size}
        </span>
      </div>

      {/* info */}
      <div className="mt-3 px-0.5">
        <p
          className="font-semibold text-sm leading-snug"
          style={{ color: "#1a3020", marginBottom: "2px" }}
        >
          {product.name}
        </p>
        <p
          className="text-xs"
          style={{ color: "#8aaa8a", letterSpacing: "0.05em", fontFamily: "monospace" }}
        >
          {product.code}
        </p>
      </div>
    </div>
  );
}

export default function PottedPlantsPage() {
  const [activeSize, setActiveSize] = useState<Size>("All");

  const filtered =
    activeSize === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.size === activeSize);

  return (
    <div className="w-full" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
    
      {/* ── HERO ── */}
      <section
        style={{
          padding: "2.5rem 1.5rem",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundImage: "linear-gradient(rgba(61, 65, 61, 0.51) 0%, rgba(40, 59, 40, 0.33) 100%), url('/p36.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 70%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <p
            className="section-eyebrow"
            style={{ fontWeight: 300, marginTop: 20, marginBottom: 1, color: "#ffffffe8" }}
          >
            PRODUCT COLLECTIONS
          </p>
          <h1
            className={`hero-h1 ${cormorant.className}`}
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              color: "#ffffffe8",
              marginBottom: "1.5rem",
            }}
          >
            Potted Artificial
            <br />
            <em style={{ fontStyle: "italic", color: "#ffffffe8", fontWeight: 300}}>
              Plants
            </em>
          </h1>
        </div>
      </section>

      {/* ── FEATURE SECTION ──────────────────────────────────────── */}
      <section
        className="w-full px-6 py-16"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "4rem",
        }}
      >
        <div
          className="grid items-center gap-12"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* LEFT — background image */}
          <div
            className="w-full h-full rounded-2xl"
            style={{
              minHeight: "340px",
              backgroundImage:
                "url('/p32.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* RIGHT — copy */}
          <div className="flex flex-col justify-center">
            <h2
              className="font-bold mb-4"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontFamily: "'Georgia', serif",
                color: "#1a2e1a",
                lineHeight: 1.3,
              }}
            >
              Designed to Look Real
            </h2>

            <p
              className="text-base mb-6"
              style={{ color: "#4a5a4a", lineHeight: 1.85 }}
            >
              Each plant is hand-finished with premium silk and PE materials,
              meticulously shaped to mimic the natural growth patterns of live species.
              UV-treated for lasting colour, pet-safe, and hypoallergenic — perfect for
              homes, offices, hotels, or retail spaces of any scale.
            </p>

            <div className="flex flex-wrap gap-2">
              {["UV-resistant", "Pet-safe", "Hypoallergenic", "No watering"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-4 py-1.5 rounded-full"
                  style={{
                    background: "#e8f5e9",
                    color: "#2e7d32",
                    border: "1px solid #a5d6a7",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CATALOG ──────────────────────────────────────────────── */}
      <section
        className="w-full px-6 pb-20"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* header row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          <h2
            className="font-bold text-xl uppercase"
            style={{
              color: "#1a3020",
              letterSpacing: "0.1em",
              fontFamily: "'Georgia', serif",
            }}
          >
            Product Catalog
          </h2>

          <div className="flex flex-wrap gap-2">
            {SIZES.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSize(s)}
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "7px 18px",
                  borderRadius: "999px",
                  cursor: "pointer",
                  letterSpacing: "0.04em",
                  transition: "all 0.18s ease",
                  background: activeSize === s ? "#2e7d32" : "#fff",
                  color: activeSize === s ? "#fff" : "#3a5a3a",
                  border: activeSize === s ? "1.5px solid #2e7d32" : "1.5px solid #c0d4c0",
                  boxShadow: activeSize === s
                    ? "0 4px 12px rgba(46,125,50,0.3)"
                    : "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* thin divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(to right, #c0d4c0 60%, transparent)",
            margin: "16px 0 28px",
          }}
        />

        {/* grid — 4 columns, no container, no scroll */}
        {filtered.length === 0 ? (
          <p className="text-center py-16" style={{ color: "#6a8a6a" }}>
            No products found for this size.
          </p>
        ) : (
          <>
            <style>{`
              .catalog-grid { grid-template-columns: repeat(4, 1fr); }
              @media (max-width: 1024px) { .catalog-grid { grid-template-columns: repeat(3, 1fr); } }
              @media (max-width: 640px)  { .catalog-grid { grid-template-columns: repeat(2, 1fr); } }
            `}</style>
            <div className="catalog-grid grid gap-x-5 gap-y-8">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}