"use client";

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
  { id: "1", name: "Evergreen",                    size: "80cm",  image: "/pottedplants/pot8.png"  },
  { id: "2", name: "Dracaena Fragrans",            size: "150cm", image: "/pottedplants/pot13.png" },
  { id: "3", name: "Fiddle Leaf Tree",             size: "170cm", image: "/pottedplants/pot12.png" },
  { id: "4", name: "Monsterra Deliciosa",          size: "100cm", image: "/pottedplants/pot11.png" },
  { id: "5", name: "Croton Tree",                  size: "120cm", image: "/pottedplants/pot14.png" },
  { id: "6", name: "Sanseviera Trifasciata Prain", size: "100cm", image: "/pottedplants/pot7.png"  },
  { id: "7", name: "Palm Tree",                    size: "180cm", image: "/pottedplants/pot15.png" },
  { id: "8", name: "Bird of Paradise",             size: "140cm", image: "/pottedplants/pot6.png"  },
  { id: "9", name: "Ficus Tree",                   size: "180cm", image: "/pottedplants/pot10.png" },
];

const featureLabelStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "14px",
  fontWeight: 300,
  color: "#000000",
  margin: 0,
  letterSpacing: "0.04em",
};

const featureDescStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "14px",
  fontWeight: 300,
  color: "#000000",
  lineHeight: 1.7,
  marginTop: "-10px",
  letterSpacing: "0.03em",
};

const detailText: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "14px",
  fontWeight: 300,
  lineHeight: 1.55,
  letterSpacing: "0.03em",
  margin: 0,
};

/* ── PRODUCT CARD ── */
function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* CARD */}
      <div
        className="group cursor-pointer overflow-hidden rounded-2xl"
        style={{
          background: "#fafaf7",
          boxShadow: "0 5px 2px rgba(0,0,0,0.30)",
          transition: "box-shadow 0.25s ease, border-color 0.25s ease",
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

      {/* DETAILS */}
      <div
        style={{
          padding: "1.2rem 0.85rem 0",
          textAlign: "center",
          fontSize: "15px",
          fontWeight: 300,
          fontFamily: "'DM Sans', sans-serif",
          color: "#000000",
        }}
      >
        <p style={{ ...detailText }}>{product.name}</p>
        <p style={{ ...detailText, marginTop: "-1px" }}>{product.size}</p>
      </div>

    </div>
  );
}

/* ── PAGE ── */
export default function Page() {
  return (
    <div className={`${cormorant.className}`}>

      {/* ── SECTION 1 — HERO ── */}
      <section
        style={{
          width: "100%",
          height: "285px",
          backgroundImage: "url('/pottedplants/pot3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 75%",
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
            background: "rgba(21, 35, 21, 0.70)",
          }}
        />

        <div
          className="relative z-10 flex flex-col items-center text-center wall-greens-section-padding"
          style={{ gap: "1.2rem", padding: "0 5rem" }}
        >
          <h1
            className={dmSans.className}
            style={{
              fontSize: "50px",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#fafafa",
              margin: 0,
              letterSpacing: "0.02em",
            }}
          >
            Potted Artificial Plants
          </h1>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 420,
              color: "#f8f8f8",
              letterSpacing: "0.02em",
              marginTop: -10,
            }}
          >
            ELEVATE EMPTY SPACES INTO FRESH GREEN DISPLAYS WITH LIFELIKE POTTED PLANTS.
          </p>
        </div>
      </section>


      {/* ── SECTION 2 — ABOUT THE PRODUCT ── */}
      <section style={{ width: "100%", background: "#fafaf7" }}>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "stretch",
            overflow: "hidden",
            padding: "0.5rem 5rem 0.5rem",
            columnGap: "2rem",
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
                maxHeight: "400px",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid #e0ede0",
                background: "#fafaf7",
              }}
            >
              <img
                src="/p38.2.png"
                alt="Potted artificial plant"
                style={{
                  width: "100%",
                  height: "400px",
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
              padding: "4.5rem 0 4.5rem 3.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
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
                fontSize: "clamp(1.7rem, 1.8vw + 0.8rem, 2.4rem)",
                fontWeight: 300,
                lineHeight: 1.2,
                color: "#000000",
                margin: "0 0 1rem",
              }}
            >
              Lifelike Potted Greens
            </h2>



            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#4a5450",
                lineHeight: 1.85,
                margin: "0 0 1rem",
              }}
            >
              Our potted artificial plants are created to bring a fresh, natural
              atmosphere into any space without the demands of watering, sunlight, or upkeep.
              Each piece is carefully designed to mimic the shape, tone, and fullness of real plants,
              making them ideal for enhancing homes, offices, lobbies, and commercial interiors with a calm and inviting touch.
            </p>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#4a5450",
                lineHeight: 1.85,
                margin: "0 0 1rem",
              }}
            >
              Every plant is supplied as a finished arrangement that already includes
              its own decorative pot, making it ready for immediate placement upon delivery.
              Easy to decorate any space, whether used as a single
              accent piece or grouped for a more lush indoor display.
            </p>
          </div>
        </div>
      </section>


      {/* ── SECTION 3 — PRODUCTS CATALOG ── */}
      <section style={{ width: "100%", background: "#fff" }}>
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
              fontSize: "14px",
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
              fontSize: "clamp(1.7rem, 1.8vw + 0.8rem, 2.4rem)",
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

        <div
          style={{ padding: "0 8rem 5rem" }}
          className="wall-greens-grid-padding"
        >
          <div className="grid grid-cols-8 md:grid-cols-4 gap-x-10 gap-y-10">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>


      {/* ── SECTION 4 — CHOOSE THE PERFECT PLANT ── */}
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
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.7rem, 1.8vw + 0.8rem, 2.4rem)",
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
                    <circle cx="16" cy="16" r="13" strokeWidth="1.2" />
                    <path d="M10 20c2-6 6-9 12-8" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M16 22V12M13 15l3-3 3 3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                label: "Pet Friendly",
                desc: "Non-toxic and safe for all pets.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ stroke: "#ffffff" }}>
                    <path d="M16 6c-5 4-8 8-8 12a8 8 0 0016 0c0-4-3-8-8-12z" strokeWidth="1.2" strokeLinejoin="round" />
                    <path d="M16 14v8" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M12 18l4-4 4 4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                label: "UV Resistant",
                desc: "Colour-stable in direct sunlight.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ stroke: "#ffffff" }}>
                    <circle cx="16" cy="16" r="7" strokeWidth="1.2" />
                    <path d="M16 4v4M16 24v4M4 16h4M24 16h4" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M7.8 7.8l2.8 2.8M21.4 21.4l2.8 2.8M21.4 10.6l-2.8 2.8M10.6 21.4l-2.8 2.8" strokeWidth="1.2" strokeLinecap="round" />
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
                <div
                  style={{
                    width: "68px",
                    height: "68px",
                    borderRadius: "50%",
                    border: "1px solid #000000",
                    background: "#21411d",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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

    </div>
  );
}