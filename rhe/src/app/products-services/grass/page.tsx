"use client";

import { useState } from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Badge } from "@/components/ui/badge";

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

const SIZE_LABEL: Record<string, string> = {
  "50cm×50cm": "50cm×50cm",
  "100cm×100cm": "100cm×100cm",
  "100cm×200cm": "100cm×200cm",
};

/* ── PRODUCT TYPE ── */
interface Product {
  id: string;
  name: string;
  code: string;
  size: Exclude<FilterValue, "All">;
  image: string;
  price: string;
  oldPrice: string;
}

/* ── PRODUCTS ── */
const PRODUCTS: Product[] = [
  { id: "1", name: "Lush Forest", code: "Code: 18152", size: "50cm×50cm", price: "$20.00", oldPrice: "$34.00", image: "/lush.png" },
  { id: "2", name: "Amazon World", code: "Code: 18287", size: "100cm×100cm", price: "$20.00", oldPrice: "$34.00", image: "/aw.png" },
  { id: "3", name: "Deluxe Fern", code: "Code: 18172", size: "100cm×100cm", price: "$20.00", oldPrice: "$34.00", image: "/del.png" },
  { id: "4", name: "Pachysandra", code: "Code: 17676M", size: "50cm×50cm", price: "$20.00", oldPrice: "$34.00", image: "/pachy.png" },
  { id: "5", name: "Rhein Jardin B", code: "Code: 18281B", size: "50cm×50cm", price: "$20.00", oldPrice: "$34.00", image: "/rheinb.png" },
  { id: "6", name: "Fireworks", code: "Code: 18155", size: "50cm×50cm", price: "$20.00", oldPrice: "$34.00", image: "/fire.png" },
  { id: "7", name: "Color Meadow B", code: "Code: 18060B", size: "100cm×100cm", price: "$20.00", oldPrice: "$34.00", image: "/mb.png" },
  { id: "8", name: "The Jungle", code: "Code: 18237", size: "100cm×100cm", price: "$20.00", oldPrice: "$34.00", image: "/jun.png" },
  { id: "9", name: "Lucky Fernbed", code: "Code: 18520", size: "100cm×100cm", price: "$20.00", oldPrice: "$34.00", image: "/luc.png" },
  { id: "10", name: "Pittoso", code: "Code: 17830G", size: "50cm×50cm", price: "$20.00", oldPrice: "$34.00", image: "/pitoo.png" },
  { id: "11", name: "Orchid Park", code: "Code: 18532", size: "100cm×100cm", price: "$20.00", oldPrice: "$34.00", image: "/orc.png" },
  { id: "12", name: "Cymbidium", code: "Code: 17859G", size: "50cm×50cm", price: "$20.00", oldPrice: "$34.00", image: "/cym.png" },
  { id: "13", name: "Daffodil Smile", code: "Code: 18150", size: "50cm×50cm", price: "$20.00", oldPrice: "$34.00", image: "/daff.png" },
  { id: "14", name: "Bosky PG", code: "Code: 18002G", size: "100cm×200cm", price: "$20.00", oldPrice: "$34.00", image: "/bos.png" },
  { id: "15", name: "Cerasus", code: "Code: BA17642 PF", size: "100cm×200cm", price: "$20.00", oldPrice: "$34.00", image: "/cer.png" },
  { id: "16", name: "Schefflera", code: "Code: P17652G", size: "100cm×200cm", price: "$20.00", oldPrice: "$34.00", image: "/sche.png" },
];

/* ── PRODUCT CARD (UPDATED DESIGN) ── */
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group cursor-pointer flex flex-col">
      
      <div
        className="overflow-hidden rounded-2xl relative"
        style={{
          aspectRatio: "0.5/0.5",
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
          className="w-full h-full object-contain"
          style={{ transition: "transform 0.45s ease" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.08)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")
          }
        />

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
          {SIZE_LABEL[product.size]}
        </span>
      </div>

      <div className="mt-3 px-1">
        <p className={`${cormorant.className} font-semibold text-sm`} style={{ color: "#1a3020" }}>
          {product.name}
        </p>

        <p
          className="text-xs"
          style={{
            color: "#8aaa8a",
            letterSpacing: "0.05em",
            fontFamily: "monospace",
          }}
        >
          {product.code}
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

        <div className="relative z-10 flex flex-col items-center text-center">
          <p style={{ fontWeight: 500, marginTop: 5, color: "#fafafa", fontFamily: "'DM Sans', sans-serif" , fontSize: "15px", letterSpacing: "0.14em"}}>
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
                className="text-[15px] px-4 py-1 rounded-full"
                style={{
                  border: "1px solid #fafafa",
                  background:
                    activeFilter === f.value ? "#2D5A27" : "transparent",
                  color: "#fff",
                  fontFamily: "Cormorant garamond",
                  fontWeight: "500"
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
          width: "100%",          // ✅ make it full width
          background: "#ffffff",  // ✅ THIS makes the whole strip white
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
          background: "#F0F3F2",
          paddingTop: "4.5rem",
          paddingBottom: "4.5rem",
        }}
      >
        <div
          className="w-full px-6"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            className="grid items-center gap-12"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <div
              style={{
                minHeight: "340px",
                backgroundImage: "url('/p38.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div>
            <p style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#7a9275", marginBottom: "1.2rem" }}>
              Craftsmanship
            </p>
 
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.9rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "#1e2a1c",
                marginBottom: "0",
              }}
            >
              Designed to
              <br />
              <em>Look Real </em>
            </h2>
 
            <div style={{ width: "36px", height: "1px", background: "#b5c4af", margin: "1rem 0" }} />
 
            <p style={{ fontSize: "0.88rem", color: "#5a6b57", lineHeight: 1.85, fontWeight: 300 }}>
              Each plant is hand-finished with premium silk and PE materials,
              meticulously shaped to mimic natural growth patterns. UV-treated,
              pet-safe, and hypoallergenic — ideal for any space.
            </p>
 
            <p style={{ marginTop: "1.4rem", fontSize: "0.88rem", color: "#5a6b57", lineHeight: 1.85, fontWeight: 300 }}>
              Whether installed in a residential foyer or a commercial atrium,
              our panels bring enduring botanical beauty without maintenance.
            </p>
          </div>
          </div>
        </div>
      </section>

    </div>
  );
}