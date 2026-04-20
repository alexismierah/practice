"use client";
import Link from "next/link";
import { CloudSun, Grid2x2, Leaf, ShieldCheck, House, Building2, ShoppingBag, Hotel, UtensilsCrossed, CalendarDays } from "lucide-react";
import { useState, useEffect, useRef } from "react";


function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
      onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
      onTouchMove={(e) => { if (dragging.current) updatePos(e.touches[0].clientX); }}
      onTouchEnd={() => { dragging.current = false; }}
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "ew-resize",
        userSelect: "none",
        borderRadius: "3px",
        aspectRatio: "16/9",
        width: "100%",
        touchAction: "none",
      }}
    >
      {/* After image — base layer */}
      <img
        src={after}
        alt={afterLabel}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", display: "block" }}
      />
      {/* Before image — clipped by slider position */}
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)`, pointerEvents: "none" }}>
        <img
          src={before}
          alt={beforeLabel}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      {/* Divider line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          transform: "translateX(-50%)",
          width: "2px",
          background: "rgba(255,255,255,0.9)",
          pointerEvents: "none",
        }}
      />
      {/* Handle */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${pos}%`,
          transform: "translate(-50%, -50%)",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "#ffffff",
          boxShadow: "0 2px 16px rgba(0,0,0,0.28)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          gap: "4px",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 5l-4 5 4 5M13 5l4 5-4 5" stroke="#163521" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {/* Labels */}
      <span style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)", color: "#fff", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "100px", pointerEvents: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, opacity: pos < 20 ? 0 : 1, transition: "opacity 0.25s" }}>
        {beforeLabel}
      </span>
      <span style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)", color: "#fff", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "100px", pointerEvents: "none", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, opacity: pos > 80 ? 0 : 1, transition: "opacity 0.25s" }}>
        {afterLabel}
      </span>
    </div>
  );
}

const featuredPlants = [
  {
    name: "Artificial Grass",
    img: "https://scontent.fmnl9-7.fna.fbcdn.net/v/t39.30808-6/488259046_1214367554029587_4385088471884268293_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=SM4GFcnuc4sQ7kNvwHv-Z66&_nc_oc=AdqOXQPp9nycrWqJNAfI2KNrbl2mEz89gTyQmFOAxJn2lrVHnBZep-spkiwLIe9J0CI&_nc_zt=23&_nc_ht=scontent.fmnl9-7.fna&_nc_gid=KrckpwN1v86Eirt6pydtKQ&_nc_ss=7a3a8&oh=00_Af1J0H9nRbFnXMXVUFhXrJi9LxkcIxzZduK15QaHh9a5Gw&oe=69EA18E8",
  },
  {
    name: "Potted Plants and Trees",
    img: "https://images.unsplash.com/photo-1606146350185-09f9bf15f5c1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Planter Boxes",
    img: "PlanterBoxes.png",
  },
  {
    name: "Wall Greens",
    img: "https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/481073362_1133880258528103_7469329729455778811_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=nvVeAdpYkdsQ7kNvwF17N4U&_nc_oc=Adph9AbbCU0nIjKaFfP3czE9AVcaSHgymwhp7V3YEh-AaUTjw-79Ji5ul7JV1tLc89w&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=A9AkfnnSJOKthGWnXleSjg&_nc_ss=7a3a8&oh=00_Af0mvJYUckm7C7UBVbG2M9qcWDSbi6LPpBcn_LECH17l-A&oe=69EA3239",
  },
];

const displayedPlants = [
  {
    name: "Artificial Grass",
    sublabel: "Sports courts, lawns & outdoor decks",
    img: "https://cdn.thewirecutter.com/wp-content/media/2021/07/synthetic-lawn-2048px-802551536-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
    link: "/products-services/grass",
    tag: "01",
  },
  {
    name: "Potted Plants and Trees",
    sublabel: "Statement pieces for any interior",
    img: "https://theplantsproject.com.au/cdn/shop/files/Bird_of_Paradise_Plant_Styled_Photo_3_sizes.jpg",
    link: "/products-services/potted-plants",
    tag: "02",
  },
  {
    name: "Planter Boxes",
    sublabel: "Defined edges, curated arrangements",
    img: "p1.jpg",
    link: "/products-services/planter-box",
    tag: "03",
  },
  {
    name: "Wall Greens",
    sublabel: "Living-wall look, zero upkeep",
    img: "p19.jpg",
    link: "/products-services/wall-greens",
    tag: "04",
  },
];

const projectplants = [
  { img: "/PottedPlants2.png",  caption: "Potted Plants & Trees",},
  { img: "/Grass.jpg",  caption: "Artificial Grass",},
  { img: "/WallGreens.jpg",  caption: "Wall Greens",},
  { img: "/PlanterBoxes2.png",  caption: "Planter Boxes",},
];

const shopReasons = [
  {
    title: "No Upkeep Required",
    desc: "No watering schedules, no wilting, no seasonal replanting. Your greenery stays perfect on its own.",
    icon: Leaf,
  },
  {
    title: "Built to Last",
    desc: "UV-stable materials that resist fading, moisture, and heavy use — indoors or outdoors, year after year.",
    icon: ShieldCheck,
  },
  {
    title: "Weather-Proof",
    desc: "Designed to perform in the Philippine climate. Humidity, heat, and rain won't touch the finish.",
    icon: CloudSun,
  },
  {
    title: "Fits Any Space",
    desc: "From condo balconies to commercial lobbies — we size, design, and install for exactly your context.",
    icon: Grid2x2,
  },
] as const;

export default function Home() {
  const [sliderIdx, setSliderIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSliderIdx(i => (i + 1) % featuredPlants.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="landing">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,400;9..40,500&family=Playfair+Display:ital,wght@0,500;0,700;1,400;1,600&family=Great+Vibes&display=swap");

        :root {
          --mist: #c8dac9;
          --cream: #f5f5f5;
        }

        .landing, .landing * { box-sizing: border-box; margin: 0; padding: 0; font-family: "DM Sans", sans-serif !important; }

        .landing {
          font-family: "DM Sans", sans-serif;
          background: var(--cream);
          min-height: 100vh;
        }

        /* ─────────────────────────────────────────
           HERO
        ───────────────────────────────────────── */
        .hero {
          position: relative;
          min-height: 110svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
        }

        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 1s cubic-bezier(.4,0,.2,1), transform 7s ease;
          z-index: 0;
        }

        .hero-img.active {
          opacity: 1;
          transform: scale(1);
        }

        .hero-img-vignette {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.43) 45%, rgba(0, 0, 0, 0.28) 100%),
            radial-gradient(ellipse at center, rgba(0, 0, 0, 0.32) 0%, transparent 100%);
          z-index: 1;
          pointer-events: none;
        }

        .hero-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.032;
          pointer-events: none;
          z-index: 2;
        }

        .hero-left {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 110svh;
          padding: 140px 48px 100px;
          text-align: center;
        }

        .hero-headline-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 800px;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          justify-content: center;
        }

        .hero-eyebrow-text {
          font-size: 13px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(200,218,201,0.75);
          font-weight: 300;
          font-family: "DM Sans", sans-serif;
        }

        .hero-title {
          font-family: "Cormorant Garamond", serif;
          font-weight: 300;
          font-size: clamp(3.6rem, 6.5vw + 0.5rem, 8rem);
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin-bottom: 0;
        }

        .hero-title-bold {
          font-weight: 300;
          color: #ffffff;
          display: inline;
          line-height: 1;
        }

        .hero-subtitle {
          margin-top: 28px;
          font-size: 16px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.04em;
          line-height: 1.7;
          max-width: 380px;
          font-family: "DM Sans", sans-serif;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-index-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 56px;
          z-index: 3;
        }

        .hero-index-number {
          font-family: "Cormorant Garamond", serif;
          font-size: 1.8rem;
          font-weight: 300;
          color: rgba(255,255,255,0.18);
          line-height: 1;
          letter-spacing: -0.02em;
          user-select: none;
          transition: color 0.5s;
        }

        .hero-slide-label {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          font-weight: 300;
        }

        .hero-nav-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .hero-dot {
          width: 20px;
          height: 2px;
          background: rgba(255,255,255,0.2);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.3s, width 0.3s cubic-bezier(.4,0,.2,1);
        }

        .hero-dot.active {
          background: rgba(255,255,255,0.85);
          width: 40px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── INTRO STRIP ── */
        .intro-strip {
          background: #ffffff;
          padding: 80px 80px;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          gap: 0;
          align-items: center;
          position: relative;
        }

        .intro-strip-left {
          padding-right: 64px;
        }

        .intro-strip-divider {
          width: 1px;
          height: 120px;
          background: linear-gradient(to bottom, transparent, #c8dac9, transparent);
          align-self: center;
        }

        .intro-strip-right {
          padding-left: 64px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 20px;
        }

        .intro-strip-label {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #2f6f44;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }


        .intro-strip-heading {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(1.6rem, 1.8vw + 0.8rem, 2.4rem);
          font-weight: 500;
          color: #163521;
          line-height: 1.1;
          margin: 0;
        }

        .intro-strip-heading em {
          font-style: italic;
          font-weight: 400;
          color: #3f7a55;
        }

        .intro-strip-body {
          font-size: 13.5px;
          color: #7a8f80;
          line-height: 1.8;
          margin: 0;
          font-weight: 300;
        }

        .intro-strip-link {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2f6f44;
          font-weight: 500;
          text-decoration: none;
          background: rgba(47,111,68,0.09);
          border: none;
          padding: 13px 20px;
          border-radius: 9999px;
          transition: background 0.25s, color 0.25s;
        }

        .intro-strip-link:hover { background: rgba(47,111,68,0.16); color: #163521; }

        @media (max-width: 900px) {
          .intro-strip { grid-template-columns: 1fr; gap: 0; padding: 36px 40px; }
          .intro-strip-divider { display: none; }
          .intro-strip-left { padding-right: 0; padding-bottom: 40px; border-bottom: 1px solid #e8ede5; margin-bottom: 40px; }
          .intro-strip-right { padding-left: 0; }
        }

        @media (max-width: 640px) {
          .intro-strip { padding: 56px 20px; }
        }

        /* ── WHY SHOP ── */
        .why-shop {
          background: #ffffff;
          padding: 80px 80px;
        }

        .why-shop-inner {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 56px;
          align-items: center;
          max-width: 1060px;
          margin: 0 auto;
        }

        .why-shop-left {}

        .why-shop-eyebrow {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #2f6f44;
          font-weight: 500;
          margin: 0 0 15px;
        }

        .why-shop-title {
          margin: 0 0 10px;
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(1.6rem, 1.8vw + 0.8rem, 2.4rem);
          color: #163521;
          font-weight: 500;
          line-height: 1.1;
        }

        .why-shop-subtitle {
          color: #7a8f80;
          font-size: 13.5px;
          line-height: 1.8;
          font-weight: 300;
          margin: 0 0 20px;
        }

        .why-shop-cta {
          display: inline-flex;
          align-items: center;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2f6f44;
          text-decoration: none;
          background: rgba(47,111,68,0.09);
          border: none;
          padding: 13px 20px;
          border-radius: 9999px;
          transition: background 0.25s, color 0.25s;
        }

        .why-shop-cta:hover { background: rgba(47,111,68,0.16); color: #163521; }

        .why-shop-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .reason-card {
          background: #ffffff;
          border-radius: 6px;
          padding: 22px 20px;
          border: 1px solid #eaefea;
        }

        .reason-card-icon {
          width: 22px;
          height: 22px;
          color: #3f7a55;
          margin-bottom: 12px;
          display: block;
        }

        .reason-card h3 {
          margin: 0 0 6px;
          font-family: "DM Sans", sans-serif;
          color: #2a3e2e;
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 1.3;
        }

        .reason-card p {
          margin: 0;
          color: #7a8f80;
          font-size: 13.5px;
          line-height: 1.8;
          font-weight: 300;
        }

        /* ── FEATURED PROJECTS ── */
        .featured-projects {
          background: #f5f5f5;
          padding: 80px 80px;
        }

        .fp-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 32px;
          gap: 10px;
        }

        .fp-header-left { width: 100%; }

        .fp-label {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #2f6f44;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .fp-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(1.6rem, 1.8vw + 0.8rem, 2.4rem);
          font-weight: 500;
          color: #163521;
          margin: 0 0 10px;
          line-height: 1.1;
        }

        .fp-title em { font-style: italic; font-weight: 400; color: #3f7a55; }

        .fp-desc {
          font-size: 13.5px;
          color: #7a8f80;
          line-height: 1.8;
          font-weight: 300;
          white-space: nowrap;
        }

        .fp-view-link {
          display: inline-flex;
          align-items: center;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2f6f44;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          background: rgba(47,111,68,0.09);
          border: none;
          padding: 13px 20px;
          border-radius: 9999px;
          flex-shrink: 0;
          transition: background 0.25s, color 0.25s;
        }

        .fp-view-link:hover { background: rgba(47,111,68,0.16); color: #163521; }

        /* Bento gallery grid */
        .fp-gallery {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          grid-template-rows: 320px 220px;
          gap: 0;
        }

        .fp-gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 0;
          cursor: pointer;
        }

        .fp-gallery-item--large {
          grid-column: 1;
          grid-row: 1 / 3;
        }

        .fp-gallery-item--wide {
          grid-column: 2 / 4;
          grid-row: 2;
        }

        .fp-gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.55s cubic-bezier(.4,0,.2,1);
        }

        .fp-gallery-item:hover .fp-gallery-img {
          transform: scale(1.07);
        }

        .fp-gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,30,18,0.55) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.4s;
          display: flex;
          align-items: flex-end;
          padding: 20px 22px;
        }

        .fp-gallery-item:hover .fp-gallery-overlay { opacity: 1; }

        .fp-gallery-caption {
          font-family: "Cormorant Garamond", serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: rgba(255,255,255,0.92);
          letter-spacing: 0.04em;
          font-style: normal;
        }

        @media (max-width: 900px) {
          .featured-projects { padding: 72px 40px; }
          .fp-header { flex-direction: column; align-items: flex-start; gap: 16px; }
          .fp-gallery {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 240px 240px 200px;
          }
          .fp-gallery-item--large { grid-column: 1 / 3; grid-row: 1; }
          .fp-gallery-item--wide { grid-column: 1 / 3; grid-row: 3; }
        }

        @media (max-width: 640px) {
          .featured-projects { padding: 56px 20px; }
          .fp-gallery {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 200px 160px 160px;
          }
        }

        @media (max-width: 420px) {
          .fp-gallery {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .fp-gallery-item { aspect-ratio: 4/3; height: auto; }
          .fp-gallery-item--large,
          .fp-gallery-item--wide { grid-column: 1; grid-row: auto; }
          .fp-gallery-img { position: static; width: 100%; height: 100%; }
        }

        /* ── PRODUCTS ── */
        .products-section {
          background: #ffffff;
          padding: 80px 80px;
        }

        .ps-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 40px;
          gap: 24px;
        }

        .ps-eyebrow {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #2f6f44;
          margin: 0 0 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
        }


        .ps-title {
          margin: 0 0 10px;
          font-family: "Cormorant Garamond", serif;
          font-weight: 500;
          font-size: clamp(1.6rem, 1.8vw + 0.8rem, 2.4rem);
          color: #163521;
          line-height: 1.1;
        }

        .ps-title em { font-style: italic; font-weight: 400; color: #3f7a55; }

        .ps-header-sub {
          font-size: 13.5px;
          color: #7a8f80;
          line-height: 1.8;
          white-space: nowrap;
          margin: 0;
          font-weight: 300;
        }

        .ps-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .ps-card {
          border-radius: 10px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(22,53,33,0.08);
          display: block;
          position: relative;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .ps-card:hover {
          border-color: rgba(22,53,33,0.18);
          box-shadow: 0 8px 24px rgba(22,53,33,0.07);
        }

        .ps-card a {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          height: 100%;
        }

        .ps-card-img-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 10px 10px 0 0;
        }

        .ps-card-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          font-family: "DM Sans", sans-serif;
          font-size: 9px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: rgba(0,0,0,0.2);
          backdrop-filter: blur(6px);
          padding: 3px 9px;
          border-radius: 100px;
          z-index: 2;
        }

        .ps-card-img {
          width: 100%;
          aspect-ratio: 3 / 4;
          object-fit: cover;
          display: block;
          transition: transform .5s cubic-bezier(.4,0,.2,1);
        }

        .ps-card:hover .ps-card-img { transform: scale(1.04); }

        .ps-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,35,20,0.28) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .ps-card:hover .ps-card-img-overlay { opacity: 1; }

        .ps-card-body {
          padding: 14px 16px 18px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ps-card-name {
          margin: 0;
          font-family: "Cormorant Garamond", serif;
          font-size: 1rem;
          font-weight: 500;
          color: #163521;
          line-height: 1.25;
        }

        .ps-card-sub {
          font-size: 11.5px;
          color: #7a8f80;
          margin: 0;
          letter-spacing: .02em;
          font-weight: 300;
        }

        .ps-card-arrow {
          margin-top: auto;
          padding-top: 12px;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #2f6f44;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.3s, transform 0.3s;
        }

        .ps-card:hover .ps-card-arrow { opacity: 1; transform: translateY(0); }

        .ps-card-arrow-line {
          width: 18px;
          height: 1px;
          background: currentColor;
          transition: width 0.2s;
        }

        .ps-card:hover .ps-card-arrow-line { width: 28px; }

        .ps-explore {
          display: inline-flex;
          align-items: center;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2f6f44;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          background: rgba(47,111,68,0.09);
          border: none;
          padding: 13px 20px;
          border-radius: 9999px;
          transition: background 0.25s, color 0.25s;
        }

        .ps-explore:hover { background: rgba(47,111,68,0.16); color: #163521; }

        @media (max-width: 768px) {
          .ps-explore--desktop { display: none !important; }
          .ps-explore--mobile { display: inline-flex !important; width: 100%; justify-content: center; }
        }

        /* ── WHERE WE APPLY ── */
        .apply-section {
          margin-top: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
        }

        .apply-prefix {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #2f6f44;
          font-weight: 500;
          flex-shrink: 0;
          margin-right: 4px;
        }

        .apply-chip {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-family: "Cormorant Garamond", serif;
          font-size: 13.5px;
          font-weight: 400;
          font-style: italic;
          color: #4a6a52;
          background: transparent;
          border: none;
          border-left: 1px solid #d8e8da;
          border-radius: 0;
          padding: 4px 16px;
          letter-spacing: 0.02em;
          white-space: nowrap;
          pointer-events: none;
        }

        .apply-chip:first-of-type { border-left: none; padding-left: 0; }

        .apply-chip-icon { display: none; }

        /* ── APPLY SECTION RESPONSIVE ── */
        @media (max-width: 768px) {
          .apply-section { flex-wrap: wrap; gap: 4px 0; }
          .apply-prefix { width: 100%; margin-bottom: 6px; }
          .apply-chip { flex: 0 0 50%; border: none; padding: 8px 0; justify-content: flex-start; }
          .apply-chip:nth-child(even) { padding-left: 16px; }
        }

        @media (max-width: 480px) {
          .apply-chip { flex: 0 0 100%; padding-left: 0 !important; }
        }

        /* ── RESPONSIVE ── */

        /* ≤1024px — tablet landscape */
        @media (max-width: 1024px) {
          .hero-index-bar { padding: 22px 36px; }
          .hero-left { padding: 60px 36px 90px; }

          .intro-strip { padding: 64px 48px; }

          .featured-projects { padding: 72px 48px; }

          .why-shop { padding: 72px 48px; }
          .why-shop-inner { grid-template-columns: 1fr; gap: 48px; }
          .why-shop-left { text-align: center; }
          .why-shop-cta { margin: 0 auto; }

          .products-section { padding: 72px 48px; }
          .ps-grid { grid-template-columns: repeat(2, 1fr); }
          .ps-header-sub { white-space: normal; }
        }

        /* ≤900px — tablet portrait */
        @media (max-width: 900px) {
          .intro-strip { grid-template-columns: 1fr; gap: 0; padding: 36px 40px; }
          .intro-strip-divider { display: none; }
          .intro-strip-left { padding-right: 0; padding-bottom: 40px; border-bottom: 1px solid #e8ede5; margin-bottom: 40px; }
          .intro-strip-right { padding-left: 0; }

          .featured-projects { padding: 72px 40px; }
          .fp-header { flex-direction: column; align-items: center; }
          .fp-gallery {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 240px 240px 200px;
          }
          .fp-gallery-item--large { grid-column: 1 / 3; grid-row: 1; }
          .fp-gallery-item--wide { grid-column: 1 / 3; grid-row: 3; }
        }

        /* ≤768px — large phone / small tablet */
        @media (max-width: 768px) {
          .hero-eyebrow-text { font-size: 9px; letter-spacing: 0.18em; }
          .hero-left { padding: 80px 28px 80px; text-align: center; align-items: center; }

          .why-shop-cards { grid-template-columns: 1fr 1fr; }

          .ps-header { flex-direction: column; align-items: flex-start; gap: 16px; margin-bottom: 40px; }
          .ps-header-sub { white-space: normal; }

        }

        /* ≤640px — phone */
        @media (max-width: 640px) {
          .hero-index-bar { padding: 18px 20px; flex-direction: column; align-items: center; justify-content: center; gap: 10px; }
          .hero-index-number { display: none; }
          .hero-left { min-height: 100svh; padding: 60px 24px 80px; text-align: center; align-items: center; }
          .hero-title { font-size: clamp(3rem, 11vw, 4.5rem); }
          .hero-subtitle { font-size: 13px; max-width: 280px; }

          .intro-strip { padding: 48px 20px; }
          .intro-strip-heading { font-size: clamp(1.6rem, 5vw, 2rem); }
          .intro-strip-body { font-size: 13px; }

          .featured-projects { padding: 56px 20px; }
          .fp-gallery {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 180px 140px 140px;
          }

          .why-shop { padding: 56px 20px; }
          .why-shop-title { font-size: clamp(1.3rem, 5vw, 1.6rem); }
          .why-shop-subtitle { font-size: 13px; }
          .why-shop-cards { gap: 12px; }
          .reason-card { padding: 20px 16px; }
          .reason-card h3 { font-size: 0.9rem; }
          .reason-card p { font-size: 12px; }

          .products-section { padding: 56px 20px; }
          .ps-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .ps-title { font-size: clamp(1.5rem, 5vw, 1.8rem); }
          .ps-card-name { font-size: 0.85rem; }
          .ps-card-sub { font-size: 10px; }

          .mot-section { padding: 48px 20px; }
          .mot-title { font-size: clamp(1.5rem, 5vw, 1.9rem); }
          .mot-desc { font-size: 13px; }
        }

        /* ≤420px — small phone */
        @media (max-width: 420px) {
          .fp-gallery {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .fp-gallery-item { aspect-ratio: 4/3; height: auto; }
          .fp-gallery-item--large,
          .fp-gallery-item--wide { grid-column: 1; grid-row: auto; }
          .fp-gallery-img { position: static; width: 100%; height: 100%; }

          .ps-grid { grid-template-columns: 1fr 1fr; }
        }

        /* ≤380px — very small phone */
        @media (max-width: 380px) {
          .ps-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: clamp(2.6rem, 10vw, 3.5rem); }
          .intro-strip-heading { font-size: clamp(1.4rem, 6vw, 1.7rem); }
        }

        /* ── BEFORE/AFTER SECTION RESPONSIVE ── */
        @media (max-width: 1024px) {
          .ba-section { padding: 72px 48px !important; }
        }
        @media (max-width: 640px) {
          .ba-section { padding: 56px 20px !important; }
        }

        /* ── CTA IMAGE BAND ── */
        .cta-img-band {
          padding-right: calc(64px + 340px);
        }
        .cta-img-plant {
          position: absolute;
          right: 0px;
          bottom: 0px;
          height: 330px;
          object-fit: contain;
          pointer-events: none;
          z-index: 10;
        }
        @media (max-width: 768px) {
          .cta-img-band { padding: 48px 32px !important; text-align: center; }
          .cta-img-plant { display: none !important; }
          .cta-img-band > div { align-items: center; display: flex; flex-direction: column; }
          .cta-img-band > div > div { justify-content: center; }
        }
        @media (max-width: 580px) {
          .cta-img-band { padding: 48px 24px 40px !important; text-align: center; }
          .cta-img-plant { display: none !important; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="hero">
        {featuredPlants.map((plant, i) => (
          <img
            key={plant.name}
            className={`hero-img${i === sliderIdx ? " active" : ""}`}
            src={plant.img}
            alt={plant.name}
          />
        ))}

        <div className="hero-img-vignette" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />

        <div className={"hero-left"}>
          <div className="hero-headline-block">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-text">Rich Haven Artificial Garden</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-bold">Bring</span>{" "}
              <span className="hero-title-bold">Nature</span>{" "}
              <span className="hero-title-bold">to</span>
              <span className="hero-title-bold" style={{ display: "block", marginTop: "0" }}>your Space</span>
            </h1>

            <p className="hero-subtitle">
              Artificial greenery designed to look real, last forever, and need nothing from you.
            </p>
          </div>

        </div>

      </section>

      {/* ═══════════════════════════════════════════
          INTRO STRIP
      ═══════════════════════════════════════════ */}
      <section className="intro-strip">
        <div className="intro-strip-left">
          <span className="intro-strip-label">About Us</span>
          <h2 className="intro-strip-heading">
            We turn <br/> bare spaces into green ones<em></em>
          </h2>
        </div>
        <div className="intro-strip-divider" aria-hidden="true" />
        <div className="intro-strip-right">
          <p className="intro-strip-body">
            Rich Haven Artificial Garden, established in 2014, specializes in artificial wall greens, potted plants, and artificial turf. The company provides high-quality, low-maintenance greenery solutions designed to enhance residential and commercial spaces with a fresh, natural look all year round.
          </p>
          <Link className="intro-strip-link" href="/about">Learn more</Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED PROJECTS
      ═══════════════════════════════════════════ */}
      <section className="featured-projects">
        <div className="fp-header">
          <div className="fp-header-left">
            <p className="fp-label">Our work</p>
            <h2 className="fp-title">Project Highlights<em></em></h2>
            <p className="fp-desc">A showcase of completed projects across real spaces.</p>
          </div>
        </div>

        <div className="fp-gallery">
          {/* Large hero image — spans full height on left */}
          <div className="fp-gallery-item fp-gallery-item--large">
            <img className="fp-gallery-img" src={projectplants[0].img} alt={projectplants[0].caption} />
            <div className="fp-gallery-overlay">
              <span className="fp-gallery-caption">{projectplants[0].caption}</span>
            </div>
          </div>

          <div className="fp-gallery-item">
            <img className="fp-gallery-img" src={projectplants[1].img} alt={projectplants[1].caption} />
            <div className="fp-gallery-overlay">
              <span className="fp-gallery-caption">{projectplants[1].caption}</span>
            </div>
          </div>

          <div className="fp-gallery-item">
            <img className="fp-gallery-img" src={projectplants[2].img} alt={projectplants[2].caption} />
            <div className="fp-gallery-overlay">
              <span className="fp-gallery-caption">{projectplants[2].caption}</span>
            </div>
          </div>

          <div className="fp-gallery-item fp-gallery-item--wide">
            <img className="fp-gallery-img" src={projectplants[3].img} alt={projectplants[3].caption} />
            <div className="fp-gallery-overlay">
              <span className="fp-gallery-caption">{projectplants[3].caption}</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
          <Link className="fp-view-link" href="/projects">View all projects</Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRODUCTS
      ═══════════════════════════════════════════ */}
      <section className="products-section" aria-labelledby="products-heading">
        <div className="ps-header">
          <div>
            <p className="ps-eyebrow">What we offer</p>
            <h2 className="ps-title" id="products-heading">Products and Services</h2>
            <p className="ps-header-sub">
              We offer supply, install, or both for any space.
            </p>
          </div>
          <Link className="ps-explore ps-explore--desktop" href="/products-services">View all products</Link>
        </div>

        <div className="ps-grid">
          {displayedPlants.map((plant) => (
            <article className="ps-card" key={plant.name}>
              <Link href={plant.link}>
                <div className="ps-card-img-wrap">
                  <img className="ps-card-img" src={plant.img} alt={plant.name} />
                  <div className="ps-card-img-overlay" />
                </div>
                <div className="ps-card-body">
                  <h3 className="ps-card-name">{plant.name}</h3>
                  <p className="ps-card-sub">{plant.sublabel}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <Link className="ps-explore ps-explore--mobile" href="/products-services" style={{ marginTop: "32px", display: "none" }}>View all products</Link>

        {/* WHERE WE APPLY */}
        <div className="apply-section">
          <span className="apply-prefix">Available for</span>
          {[
            { Icon: House,           name: "Residential Homes" },
            { Icon: Building2,       name: "Commercial Offices" },
            { Icon: ShoppingBag,     name: "Retail & Boutiques" },
            { Icon: Hotel,           name: "Hotels & Resorts" },
            { Icon: UtensilsCrossed, name: "Restaurants & Cafés" },
            { Icon: CalendarDays,    name: "Events & Exhibitions" },
          ].map(({ Icon, name }) => (
            <span className="apply-chip" key={name}>
              <Icon className="apply-chip-icon" size={13} strokeWidth={1.6} />
              {name}
            </span>
          ))}
        </div>

      </section>

      {/* ═══════════════════════════════════════════
          BEFORE / AFTER SLIDER
      ═══════════════════════════════════════════ */}
      <section className="ba-section" style={{ background: "#f5f5f5", padding: "80px 80px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <p style={{ fontSize: "10px", letterSpacing: "0.28em", textTransform: "uppercase", color: "#2f6f44", fontWeight: 500, marginBottom: "12px", fontFamily: "'DM Sans', sans-serif" }}>
              The Transformation
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 1.8vw + 0.8rem, 2.4rem)", fontWeight: 500, color: "#163521", margin: 0, lineHeight: 1.1 }}>
              See the Difference<em style={{ fontStyle: "italic", fontWeight: 400, color: "#3f7a55" }}></em>
            </h2>
            <p style={{ marginTop: "12px", fontSize: "13.5px", color: "#7a8f80", lineHeight: 1.8, fontWeight: 300, fontFamily: "'DM Sans', sans-serif" }}>
              Drag the handle to compare before and after.
            </p>
          </div>
          <BeforeAfterSlider
            before="/Grass.jpg"
            after="/WallGreens.jpg"
            beforeLabel="Before"
            afterLabel="After"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY SHOP
      ═══════════════════════════════════════════ */}
      <section className="why-shop" aria-labelledby="why-shop-title">
        <div className="why-shop-inner">
          <div className="why-shop-left">
            <p className="why-shop-eyebrow">What sets us apart</p>
            <h2 className="why-shop-title" id="why-shop-title">Why Choose Rich Haven<em style={{ fontStyle: "italic", fontWeight: 400, color: "#3f7a55" }}></em></h2>
            <p className="why-shop-subtitle">
              We know what works, and what truly lasts — greenery that looks perfect from day one and stays that way.
            </p>
            
          </div>

          <div className="why-shop-cards">
            {shopReasons.map((reason) => (
              <article className="reason-card" key={reason.title}>
                <reason.icon className="reason-card-icon" strokeWidth={1.5} />
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-img-band" style={{ background: "#163521", padding: "48px 64px", display: "flex", alignItems: "center", gap: "80px", position: "relative", overflow: "visible" }}>
        <img className="cta-img-plant" src="/Overlap4.png" alt="Plant" />
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(200,218,201,0.7)", marginBottom: "16px" }}>Let&apos;s Work Together</p>
          <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#ffffff", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "32px" }}>
            Ready to Start a <span style={{ fontWeight: 300 }}>Project</span> with <br /> <span style={{ fontWeight: 300 }}>Rich Haven</span>
          </h2>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#footer" onClick={(e) => { e.preventDefault(); const footer = document.getElementById("footer"); if (footer) { const top = footer.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top, behavior: "smooth" }); } }} style={{ padding: "10px 24px", background: "#ffffff", color: "#163521", fontFamily: "inherit", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", borderRadius: "9999px", cursor: "pointer", textDecoration: "none", display: "inline-block" }}>Get in Touch</a>
            <a href="/products-services" style={{ padding: "10px 24px", background: "transparent", color: "#ffffff", fontFamily: "inherit", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.35)", borderRadius: "9999px", cursor: "pointer", textDecoration: "none", display: "inline-block" }}>Browse Products</a>
          </div>
        </div>
      </div>

    </main>
  );
}