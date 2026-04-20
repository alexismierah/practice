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
        borderRadius: "2px",
        aspectRatio: "16/9",
        width: "100%",
        touchAction: "none",
      }}
    >
      <img src={after} alt={afterLabel} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", display: "block" }} />
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)`, pointerEvents: "none" }}>
        <img src={before} alt={beforeLabel} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, transform: "translateX(-50%)", width: "1px", background: "rgba(255,255,255,0.7)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: `${pos}%`, transform: "translate(-50%, -50%)", width: "44px", height: "44px", borderRadius: "50%", background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.22)", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M7 5l-4 5 4 5M13 5l4 5-4 5" stroke="#1a3d28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span style={{ position: "absolute", top: "14px", left: "14px", background: "rgba(0,0,0,0.38)", backdropFilter: "blur(8px)", color: "#fff", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "100px", pointerEvents: "none", fontWeight: 500, opacity: pos < 18 ? 0 : 1, transition: "opacity 0.25s" }}>
        {beforeLabel}
      </span>
      <span style={{ position: "absolute", top: "14px", right: "14px", background: "rgba(0,0,0,0.38)", backdropFilter: "blur(8px)", color: "#fff", fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "100px", pointerEvents: "none", fontWeight: 500, opacity: pos > 82 ? 0 : 1, transition: "opacity 0.25s" }}>
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
    name: "Potted Plants & Trees",
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
  { img: "/PottedPlants2.png", caption: "Potted Plants & Trees" },
  { img: "/Grass.jpg", caption: "Artificial Grass" },
  { img: "/WallGreens.jpg", caption: "Wall Greens" },
  { img: "/PlanterBoxes2.png", caption: "Planter Boxes" },
];

const shopReasons = [
  { title: "No Upkeep Required", desc: "No watering schedules, no wilting, no seasonal replanting. Your greenery stays perfect on its own.", icon: Leaf },
  { title: "Built to Last", desc: "UV-stable materials that resist fading, moisture, and heavy use — indoors or outdoors, year after year.", icon: ShieldCheck },
  { title: "Weather-Proof", desc: "Designed for the Philippine climate. Humidity, heat, and rain won't touch the finish.", icon: CloudSun },
  { title: "Fits Any Space", desc: "From condo balconies to commercial lobbies — we size, design, and install for exactly your context.", icon: Grid2x2 },
] as const;

export default function Home() {
  const [sliderIdx, setSliderIdx] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSliderIdx(i => (i + 1) % featuredPlants.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="rh-landing">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400;1,9..40,500&display=swap");

        :root {
          --forest:   #0f2318;
          --fern:     #1c4a2e;
          --sage:     #3a7a52;
          --mist:     #b8d4bc;
          --cream:    #f5f5f5;
          --ivory:    #ffffff;
          --bark:     #2e1f14;
          --stone:    #9aaa9d;
          --border:   rgba(26,61,40,0.12);
          --border-l: rgba(26,61,40,0.07);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .rh-landing {
          font-family: "DM Sans", sans-serif;
          background: #ffffff;
          color: var(--forest);
          overflow-x: hidden;
        }

        /* ─── HERO ─────────────────────────────── */
        .hero {
          position: relative;
          height: 100svh;
          min-height: 620px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.06);
          transition: opacity 1.2s ease, transform 8s ease;
        }

        .hero-img.active {
          opacity: 1;
          transform: scale(1);
        }

        .hero-scrim {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(10,25,15,0.92) 0%, rgba(10,25,15,0.50) 50%, rgba(10,25,15,0.28) 100%);
          z-index: 1;
        }

        .hero-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.04;
          z-index: 2;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: 0 72px 72px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
        }

        .hero-left {}

        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
        }

        .hero-kicker-line {
          width: 28px;
          height: 1px;
          background: var(--mist);
          opacity: 0.6;
        }

        .hero-kicker-text {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #ffffff;
          font-weight: 400;
        }

        .hero-title {
          font-family: "DM Sans", sans-serif;
          font-weight: 300;
          font-size: clamp(3.2rem, 6vw + 0.5rem, 7rem);
          line-height: 1.08;
          color: #fff;
          letter-spacing: -0.03em;
          max-width: 600px;
        }

        .hero-title em {
          font-style: italic;
          color: var(--mist);
          font-weight: 300;
        }

        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 28px;
          flex-shrink: 0;
          padding-bottom: 6px;
        }

        .hero-sub {
          font-size: 13px;
          color: #ffffff;
          line-height: 1.85;
          font-weight: 300;
          max-width: 240px;
          text-align: right;
          letter-spacing: 0.02em;
        }

        .hero-cta-row {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 26px;
          background: #fff;
          color: var(--forest);
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 9999px;
          transition: background 0.25s, color 0.25s;
        }

        .btn-primary:hover { background: var(--mist); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          padding: 11px 26px;
          background: transparent;
          color: rgba(255,255,255,0.7);
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.25);
          transition: border-color 0.25s, color 0.25s;
        }

        .btn-ghost:hover { border-color: rgba(255,255,255,0.55); color: #fff; }

        .hero-scroll-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          position: absolute;
          bottom: 72px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 4;
          opacity: 0.35;
          animation: scrollBob 2s ease-in-out infinite;
        }

        .hero-scroll-hint span {
          font-size: 8px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #fff;
          font-weight: 400;
        }

        .hero-scroll-line {
          width: 1px;
          height: 36px;
          background: linear-gradient(to bottom, #fff, transparent);
        }

        @keyframes scrollBob {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* ─── ABOUT STRIP ──────────────────────── */
        .about-strip {
          background: #ffffff;
          display: grid;
          grid-template-columns: 1fr 1px 1fr;
          gap: 0;
        }

        .about-strip-left {
          padding: 80px 72px 80px 80px;
          border-right: none;
        }

        .about-strip-divider {
          background: linear-gradient(to bottom, transparent, var(--border), transparent);
          align-self: stretch;
        }

        .about-strip-right {
          padding: 80px 80px 80px 72px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          justify-content: center;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 9px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #000000;
          font-weight: 600;
          margin-bottom: 18px;
        }

        .eyebrow::before { display: none; }

        .section-heading {
          font-family: "DM Sans", sans-serif;
          font-weight: 300;
          font-size: clamp(1.7rem, 2.2vw + 0.6rem, 2.8rem);
          color: var(--forest);
          line-height: 1.12;
          letter-spacing: -0.02em;
        }

        .section-heading em {
          font-style: italic;
          color: var(--sage);
          font-weight: 300;
        }

        .body-text {
          font-size: 14px;
          color: var(--stone);
          line-height: 1.85;
          font-weight: 300;
        }

        .pill-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--fern);
          text-decoration: none;
          padding: 11px 22px;
          border-radius: 9999px;
          background: rgba(28,74,46,0.08);
          transition: background 0.25s, color 0.25s;
        }

        .pill-link:hover { background: rgba(28,74,46,0.14); }

        /* ─── PROJECT GALLERY ──────────────────── */
        .projects-section {
          background: #fafafa;
          padding: 96px 80px;
        }

        .section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
          gap: 24px;
        }

        .section-header-left { text-align: center; width: 100%; }

        .section-heading--light {
          font-family: "DM Sans", sans-serif;
          font-weight: 300;
          font-size: clamp(1.7rem, 2.2vw + 0.6rem, 2.8rem);
          color: var(--ivory);
          line-height: 1.12;
          letter-spacing: -0.02em;
        }

        .section-heading--light em {
          font-style: italic;
          color: var(--mist);
          font-weight: 300;
        }

        .body-text--light {
          font-size: 13.5px;
          color: rgba(184,212,188,0.5);
          line-height: 1.8;
          font-weight: 300;
          margin-top: 8px;
        }

        .eyebrow--light {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 9px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #000000;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .eyebrow--light::before { display: none; }

        .fp-gallery {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          grid-template-rows: 340px 220px;
          gap: 3px;
        }

        .fp-gallery-item {
          position: relative;
          overflow: hidden;
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
          transition: transform 0.7s cubic-bezier(.4,0,.2,1);
          filter: brightness(0.88) saturate(0.9);
        }

        .fp-gallery-item:hover .fp-gallery-img {
          transform: scale(1.06);
          filter: brightness(0.95) saturate(1);
        }

        .fp-gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,25,15,0.7) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s;
          display: flex;
          align-items: flex-end;
          padding: 22px 24px;
        }

        .fp-gallery-item:hover .fp-gallery-overlay { opacity: 1; }

        .fp-gallery-caption {
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: rgba(255,255,255,0.9);
          letter-spacing: 0.03em;
        }

        .section-cta-row {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .pill-link--light {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--mist);
          text-decoration: none;
          padding: 11px 24px;
          border-radius: 9999px;
          border: 1px solid rgba(184,212,188,0.25);
          transition: border-color 0.25s, color 0.25s, background 0.25s;
        }

        .pill-link--light:hover { border-color: rgba(184,212,188,0.55); background: rgba(184,212,188,0.07); }

        /* ─── PRODUCTS ─────────────────────────── */
        .products-section {
          background: #ffffff;
          padding: 96px 80px;
        }

        .ps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 48px;
        }

        .ps-card {
          border-radius: 4px;
          overflow: hidden;
          background: var(--ivory);
          border: 1px solid var(--border-l);
          display: block;
          position: relative;
          transition: border-color 0.3s, box-shadow 0.35s, transform 0.35s;
        }

        .ps-card:hover {
          border-color: var(--border);
          box-shadow: 0 16px 48px rgba(15,35,24,0.1);
          transform: translateY(-3px);
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
        }

        .ps-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          font-size: 8px;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: rgba(0,0,0,0.22);
          backdrop-filter: blur(6px);
          padding: 4px 10px;
          border-radius: 100px;
          z-index: 2;
        }

        .ps-card-img {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          display: block;
          transition: transform 0.55s cubic-bezier(.4,0,.2,1);
          filter: brightness(0.93);
        }

        .ps-card:hover .ps-card-img { transform: scale(1.05); filter: brightness(1); }

        .ps-card-img-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,35,20,0.25), transparent 55%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .ps-card:hover .ps-card-img-scrim { opacity: 1; }

        .ps-card-body {
          padding: 16px 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .ps-card-name {
          font-family: "DM Sans", sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--forest);
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .ps-card-sub {
          font-size: 11.5px;
          color: var(--stone);
          font-weight: 300;
          letter-spacing: 0.01em;
        }

        /* ─── WHERE WE APPLY ───────────────────── */
        .apply-bar {
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 0;
          flex-wrap: wrap;
        }

        .apply-label {
          font-size: 9px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #000000;
          font-weight: 500;
          padding-right: 24px;
          flex-shrink: 0;
        }

        .apply-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #000000;
          font-weight: 300;
          font-style: italic;
          font-family: "DM Sans", sans-serif;
          padding: 4px 16px;
          border-left: 1px solid var(--border);
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .apply-chip-icon { color: #000000; opacity: 0.7; }

        /* ─── BEFORE / AFTER ───────────────────── */
        .ba-section {
          background: #fafafa;
          padding: 96px 80px;
        }

        .ba-inner {
          max-width: 740px;
          margin: 0 auto;
        }

        .ba-header {
          text-align: center;
          margin-bottom: 32px;
        }

        /* ─── WHY RICH HAVEN ───────────────────── */
        .why-section {
          background: #ffffff;
          padding: 96px 80px;
        }

        .why-inner {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 72px;
          align-items: start;
          max-width: 1100px;
          margin: 0 auto;
        }

        .why-left {}

        .why-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .reason-card {
          background: var(--ivory);
          border: 1px solid var(--border-l);
          border-radius: 4px;
          padding: 26px 22px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .reason-card:hover {
          border-color: var(--border);
          box-shadow: 0 8px 24px rgba(15,35,24,0.06);
        }

        .reason-card-icon {
          width: 20px;
          height: 20px;
          color: var(--sage);
          margin-bottom: 14px;
          display: block;
        }

        .reason-card h3 {
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--fern);
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }

        .reason-card p {
          font-size: 12.5px;
          color: var(--stone);
          line-height: 1.8;
          font-weight: 300;
        }

        /* ─── CTA BAND ─────────────────────────── */
        .cta-band {
          background: var(--fern);
          padding: 44px 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
          position: relative;
        }

        .cta-band::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 80% 50%, rgba(58,122,82,0.4) 0%, transparent 65%);
          pointer-events: none;
        }

        .cta-band-plant {
          position: absolute;
          right: 0;
          bottom: 0;
          height: 335px;
          top: -50px;
          object-fit: contain;
          pointer-events: none;
          z-index: 1;
          filter: brightness(0.9);
        }

        .cta-band-content {
          position: relative;
          z-index: 2;
          flex: 1;
          max-width: 520px;
        }

        .cta-eyebrow {
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(184,212,188,0.55);
          font-weight: 500;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cta-eyebrow::before { display: none; }

        .cta-title {
          font-family: "DM Sans", sans-serif;
          font-size: clamp(1.8rem, 2.5vw + 0.5rem, 2.8rem);
          font-weight: 300;
          color: #fff;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin-bottom: 36px;
        }

        .cta-title em {
          font-style: italic;
          color: var(--mist);
          font-weight: 300;
        }

        .cta-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* ─── RESPONSIVE ───────────────────────── */
        @media (max-width: 1100px) {
          .why-inner { grid-template-columns: 1fr; gap: 48px; }
          .why-left { text-align: center; }
          .why-left .eyebrow { justify-content: center; }
        }

        @media (max-width: 1024px) {
          .hero-content { padding: 0 48px 56px; }
          .about-strip-left { padding: 64px 48px 64px 48px; }
          .about-strip-right { padding: 64px 48px; }
          .projects-section, .products-section, .ba-section, .why-section { padding: 80px 48px; }
          .cta-band { padding: 36px 48px; }
          .ps-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 900px) {
          .about-strip { grid-template-columns: 1fr; }
          .about-strip-divider { display: none; }
          .about-strip-left { padding: 56px 40px; border-bottom: 1px solid var(--border-l); }
          .about-strip-right { padding: 40px 40px 56px; }

          .fp-gallery {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 240px 240px 200px;
          }
          .fp-gallery-item--large { grid-column: 1 / 3; grid-row: 1; }
          .fp-gallery-item--wide { grid-column: 1 / 3; grid-row: 3; }

          .section-header { flex-direction: column; align-items: flex-start; }

          .hero-content { flex-direction: column; align-items: flex-start; gap: 24px; }
          .hero-right { align-items: flex-start; }
          .hero-sub { text-align: left; }
        }

        @media (max-width: 768px) {
          .hero-content { padding: 0 28px 48px; }
          .hero-title { font-size: clamp(2.8rem, 10vw, 4.2rem); }
          .about-strip-left, .about-strip-right { padding: 48px 28px; }

          .projects-section, .products-section, .ba-section, .why-section { padding: 64px 28px; }
          .cta-band { padding: 32px 28px; text-align: center; }
          .cta-band-plant { display: none; }
          .cta-band-content { max-width: 100%; }
          .cta-eyebrow, .cta-buttons { justify-content: center; }

          .ps-grid { gap: 14px; }
          .why-cards { gap: 12px; }

          .apply-bar { flex-wrap: wrap; gap: 0; }
          .apply-chip { flex: 0 0 50%; border-left: none; padding-left: 0; border-top: 1px solid var(--border-l); padding-top: 10px; margin-top: 8px; }
        }

        @media (max-width: 580px) {
          .ps-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .fp-gallery {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 180px 140px 140px;
          }
        }

        @media (max-width: 420px) {
          .fp-gallery { grid-template-columns: 1fr; grid-template-rows: auto; }
          .fp-gallery-item { aspect-ratio: 4/3; height: auto; }
          .fp-gallery-item--large, .fp-gallery-item--wide { grid-column: 1; grid-row: auto; }
          .ps-grid { grid-template-columns: 1fr; }
          .why-cards { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ═══ HERO ══════════════════════════════════════ */}
      <section className="hero">
        <div className="hero-bg">
          {featuredPlants.map((plant, i) => (
            <img
              key={plant.name}
              className={`hero-img${i === sliderIdx ? " active" : ""}`}
              src={plant.img}
              alt={plant.name}
            />
          ))}
          <div className="hero-scrim" />
          <div className="hero-noise" />
        </div>

        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-kicker">
              <span className="hero-kicker-text">Rich Haven Artificial Garden</span>
            </div>
            <h1 className="hero-title">
              Bring Nature<br />to your Space
            </h1>
          </div>

          <div className="hero-right">
            <p className="hero-sub">
              Artificial greenery designed to look real, last forever, and need nothing from you.
            </p>
            <div className="hero-cta-row">
              <a
                href="#footer"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("footer");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
                }}
              >
                Get in Touch
              </a>
              <Link href="/products-services" className="btn-ghost">Browse</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT STRIP ═══════════════════════════════ */}
      <section className="about-strip">
        <div className="about-strip-left">
          <p className="eyebrow">About Us</p>
          <h2 className="section-heading">
            We turn bare spaces<br />into green ones
          </h2>
        </div>
        <div className="about-strip-divider" aria-hidden="true" />
        <div className="about-strip-right">
          <p className="body-text">
            Rich Haven Artificial Garden, established in 2014, specializes in artificial wall greens, potted plants, and artificial turf. We provide high-quality, low-maintenance greenery solutions designed to enhance residential and commercial spaces with a fresh, natural look all year round.
          </p>
          <Link href="/about" className="pill-link">Learn more</Link>
        </div>
      </section>

      {/* ═══ PROJECT GALLERY ════════════════════════════ */}
      <section className="projects-section">
        <div className="section-header">
          <div className="section-header-left">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Our Work</p>
            <h2 className="section-heading">
              Project Highlights
            </h2>
            <p className="body-text" style={{ marginTop: "8px" }}>A showcase of completed installations across real spaces.</p>
          </div>
        </div>

        <div className="fp-gallery">
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

        <div className="section-cta-row">
          <Link href="/projects" className="pill-link">View all projects</Link>
        </div>
      </section>

      {/* ═══ PRODUCTS ════════════════════════════════════ */}
      <section className="products-section" aria-labelledby="products-heading">
        <div className="section-header">
          <div>
            <p className="eyebrow">What We Offer</p>
            <h2 className="section-heading" id="products-heading">
              Products &amp; Services
            </h2>
            <p className="body-text" style={{ marginTop: "8px" }}>We supply, install, or both — for any space.</p>
          </div>
          <Link href="/products-services" className="pill-link" style={{ flexShrink: 0 }}>View all products</Link>
        </div>

        <div className="ps-grid">
          {displayedPlants.map((plant) => (
            <article className="ps-card" key={plant.name}>
              <Link href={plant.link}>
                <div className="ps-card-img-wrap">
                  <span className="ps-tag">{plant.tag}</span>
                  <img className="ps-card-img" src={plant.img} alt={plant.name} />
                  <div className="ps-card-img-scrim" />
                </div>
                <div className="ps-card-body">
                  <h3 className="ps-card-name">{plant.name}</h3>
                  <p className="ps-card-sub">{plant.sublabel}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="apply-bar">
          <span className="apply-label">Available for</span>
          {[
            { Icon: House, name: "Residential Homes" },
            { Icon: Building2, name: "Commercial Offices" },
            { Icon: ShoppingBag, name: "Retail & Boutiques" },
            { Icon: Hotel, name: "Hotels & Resorts" },
            { Icon: UtensilsCrossed, name: "Restaurants & Cafés" },
            { Icon: CalendarDays, name: "Events & Exhibitions" },
          ].map(({ Icon, name }) => (
            <span className="apply-chip" key={name}>
              <Icon className="apply-chip-icon" size={12} strokeWidth={1.5} />
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ═════════════════════════════ */}
      <section className="ba-section">
        <div className="ba-inner">
          <div className="ba-header">
            <p className="eyebrow" style={{ justifyContent: "center" }}>The Transformation</p>
            <h2 className="section-heading" style={{ textAlign: "center" }}>
              See the Difference
            </h2>
            <p className="body-text" style={{ textAlign: "center", marginTop: "10px" }}>
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

      {/* ═══ WHY RICH HAVEN ══════════════════════════════ */}
      <section className="why-section" aria-labelledby="why-title">
        <div className="why-inner">
          <div className="why-left">
            <p className="eyebrow">What Sets Us Apart</p>
            <h2 className="section-heading" id="why-title">
              Why Choose<br />Rich Haven
            </h2>
            <p className="body-text" style={{ marginTop: "14px" }}>
              We know what works, and what truly lasts — greenery that looks perfect from day one and stays that way.
            </p>
          </div>

          <div className="why-cards">
            {shopReasons.map((reason) => (
              <article className="reason-card" key={reason.title}>
                <reason.icon className="reason-card-icon" strokeWidth={1.4} />
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ════════════════════════════════════ */}
      <div className="cta-band">
        <img className="cta-band-plant" src="/Overlap4.png" alt="" aria-hidden="true" />
        <div className="cta-band-content">
          <p className="cta-eyebrow">Let&apos;s Work Together</p>
          <h2 className="cta-title">
            Ready to start a project<br />with Rich Haven?
          </h2>
          <div className="cta-buttons">
            <a
              href="#footer"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("footer");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
              }}
            >
              Get in Touch
            </a>
            <Link href="/products-services" className="btn-ghost">Browse Products</Link>
          </div>
        </div>
      </div>

    </main>
  );
}