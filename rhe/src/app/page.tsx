"use client";
import Link from "next/link";
import { CloudSun, Grid2x2, Leaf, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const featuredPlants = [
  {
    name: "Artificial Grass",
    img: "https://scontent.fmnl9-7.fna.fbcdn.net/v/t39.30808-6/488259046_1214367554029587_4385088471884268293_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=SM4GFcnuc4sQ7kNvwHv-Z66&_nc_oc=AdqOXQPp9nycrWqJNAfI2KNrbl2mEz89gTyQmFOAxJn2lrVHnBZep-spkiwLIe9J0CI&_nc_zt=23&_nc_ht=scontent.fmnl9-7.fna&_nc_gid=KrckpwN1v86Eirt6pydtKQ&_nc_ss=7a3a8&oh=00_Af1J0H9nRbFnXMXVUFhXrJi9LxkcIxzZduK15QaHh9a5Gw&oe=69EA18E8",
  },
  {
    name: "Potted Plants and Trees",
    img: "PottedPlants.png",
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => setSliderIdx(i => (i + 1) % featuredPlants.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="landing">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,200;9..40,300;9..40,400;9..40,500&family=Playfair+Display:ital,wght@0,500;0,700;1,400;1,600&display=swap");

        :root {
          --mist: #c8dac9;
          --cream: #f5f2ec;
        }

        .landing, .landing * { box-sizing: border-box; margin: 0; padding: 0; }

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
          justify-content: flex-start;
          width: 100%;
          min-height: 110svh;
          padding: 140px 48px 100px;
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
          margin-bottom: 32px;
          justify-content: center;
        }

        .hero-eyebrow-line {
          width: 36px;
          height: 1px;
          background: rgba(200,218,201,0.5);
        }

        .hero-eyebrow-text {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(200,218,201,0.75);
          font-weight: 300;
          font-family: "DM Sans", sans-serif;
        }

        .hero-title {
          font-family: "Cormorant Garamond", serif;
          font-weight: 300;
          font-size: clamp(4rem, 7vw + 1rem, 9rem);
          line-height: 0.9;
          letter-spacing: -0.01em;
          color: #ffffff;
          margin-bottom: 0;
        }

        .hero-title-italic {
          font-style: italic;
          font-weight: 300;
          color: rgba(255,255,255,0.85);
          display: inline;
        }

        .hero-title-bold {
          font-weight: 600;
          color: #ffffff;
          display: inline;
          line-height: 1;
        }

        .hero-title-accent {
          font-style: italic;
          font-weight: 300;
          color: var(--mist);
          display: block;
        }

        .hero-subtitle {
          margin-top: 28px;
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.04em;
          line-height: 1.7;
          max-width: 380px;
          font-family: "DM Sans", sans-serif;
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

        @keyframes lineFill {
          from { width: 0% }
          to   { width: 100% }
        }

        .hero-animate .hero-eyebrow { animation: fadeUp 0.7s 0.1s both ease; }
        .hero-animate .hero-title { animation: fadeUp 0.9s 0.25s both ease; }
        .hero-animate .hero-subtitle { animation: fadeUp 0.8s 0.4s both ease; }
        .hero-animate .hero-desc { animation: fadeUp 0.8s 0.45s both ease; }
        .hero-animate .hero-actions { animation: fadeUp 0.8s 0.6s both ease; }
        .hero-animate .hero-index-bar { animation: fadeIn 0.7s 0.75s both ease; }

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
          padding: 100px 80px;
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
          gap: 24px;
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
        }


        .intro-strip-heading {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(2rem, 2vw + 1rem, 3rem);
          font-weight: 600;
          color: #163521;
          line-height: 1.15;
          margin: 0;
        }

        .intro-strip-heading em {
          font-style: italic;
          font-weight: 400;
          color: #3f7a55;
        }

        .intro-strip-body {
          font-size: 14px;
          color: #7a8f80;
          line-height: 1.85;
          margin: 0;
          font-weight: 300;
        }

        .intro-strip-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #163521;
          font-weight: 500;
          text-decoration: none;
          transition: gap 0.2s;
        }

        .intro-strip-link:hover { gap: 16px; }

        .intro-strip-link-line {
          width: 32px;
          height: 1px;
          background: currentColor;
          transition: width 0.2s;
        }

        .intro-strip-link:hover .intro-strip-link-line { width: 48px; }

        @media (max-width: 900px) {
          .intro-strip { grid-template-columns: 1fr; gap: 0; padding: 72px 40px; }
          .intro-strip-divider { display: none; }
          .intro-strip-left { padding-right: 0; padding-bottom: 40px; border-bottom: 1px solid #e8ede5; margin-bottom: 40px; }
          .intro-strip-right { padding-left: 0; }
        }

        @media (max-width: 640px) {
          .intro-strip { padding: 56px 20px; }
        }

        /* ── WHY SHOP ── */
        .why-shop {
          background: linear-gradient(180deg, #f7f9f7 0%, #f7f9f7 60%, #c8d9cf 100%);
          padding: 96px 64px 120px;
        }

        .why-shop-header {
          text-align: center;
          margin-bottom: 72px;
        }

        .why-shop-eyebrow {
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #7a8f80;
          margin: 0 0 14px;
          font-family: "DM Sans", sans-serif;
        }

        .why-shop-title {
          margin: 0 0 16px;
          font-family: "Playfair Display", serif;
          font-size: clamp(1.8rem, 1vw + 1.2rem, 2.6rem);
          color: #163521;
          font-weight: 700;
          line-height: 1.1;
        }

        .why-shop-title em {
          font-style: italic;
          font-weight: 500;
          color: #3f7a55;
        }

        .why-shop-subtitle {
          max-width: 460px;
          margin: 0 auto;
          color: #7a8f80;
          font-size: 14px;
          line-height: 1.7;
        }

        .why-shop-grid {
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(300px,370px) minmax(0,1fr);
          gap: 48px;
          align-items: center;
        }

        .why-shop-column { display: grid; gap: 0; }

        .reason {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 28px 24px;
          border-radius: 16px;
          position: relative;
        }

        .reason-icon-wrap {
          display: flex;
          align-items: flex-start;
          flex-shrink: 0;
        }

        .reason-icon { width: 32px; height: 25px; color: #2f6f44; }

        .reason-content { flex: 1; }

        .reason h3 {
          margin: 0 0 6px;
          font-family: "Playfair Display", serif;
          color: #173523;
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.25;
        }

        .reason p {
          margin: 0;
          color: #6b7d72;
          font-size: 13px;
          line-height: 1.65;
        }

        .why-shop-plant-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .why-shop-plant-frame { position: relative; width: 100%; }

        .why-shop-plant {
          width: 100%;
          max-width: 340px;
          margin: 0 auto;
          display: block;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 24px 32px rgba(30,57,40,.18));
        }

        /* ── FEATURED PROJECTS ── */
        .featured-projects {
          background: #f7f9f7;
          padding: 96px 80px;
        }

        .fp-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 48px;
          gap: 20px;
        }

        .fp-header-left { width: 100%; }

        .fp-label {
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #2f6f44;
          font-weight: 500;
          margin-bottom: 14px;
        }

        .fp-title {
          font-family: "Cormorant Garamond", serif;
          font-size: clamp(1.9rem, 2vw + 1rem, 2.8rem);
          font-weight: 600;
          color: #163521;
          margin: 0 0 10px;
          line-height: 1.1;
        }

        .fp-title em { font-style: italic; font-weight: 400; color: #3f7a55; }

        .fp-desc {
          font-size: 13.5px;
          color: #7a8f80;
          line-height: 1.8;
          max-width: 380px;
          margin: 0 auto;
          font-weight: 300;
        }

        .fp-view-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #163521;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          transition: gap 0.2s;
          flex-shrink: 0;
        }

        .fp-view-link:hover { gap: 16px; }
        .fp-view-link-line { width: 32px; height: 1px; background: currentColor; display: inline-block; transition: width 0.2s; }
        .fp-view-link:hover .fp-view-link-line { width: 48px; }

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
          font-style: italic;
        }

        @media (max-width: 900px) {
          .featured-projects { padding: 72px 40px; }
          .fp-header { flex-direction: column; align-items: flex-start; }
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
          padding: 100px 80px 96px;
        }

        .ps-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 64px;
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
          font-weight: 600;
          font-size: clamp(2rem, 2vw + 1rem, 3rem);
          color: #163521;
          line-height: 1.1;
        }

        .ps-title em { font-style: italic; font-weight: 400; color: #3f7a55; }

        .ps-header-sub {
          font-size: 13.5px;
          color: #7a8f80;
          line-height: 1.75;
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
          border-radius: 20px;
          overflow: hidden;
          background: #f7f9f7;
          display: block;
          position: relative;
          transition: transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s;
        }

        .ps-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(22,53,33,0.12);
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
          border-radius: 20px 20px 0 0;
        }

        .ps-card-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: "Cormorant Garamond", serif;
          font-size: 0.75rem;
          font-weight: 400;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.06em;
          background: rgba(0,0,0,0.22);
          backdrop-filter: blur(6px);
          padding: 4px 10px;
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

        .ps-card:hover .ps-card-img { transform: scale(1.06); }

        .ps-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,35,20,0.4) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .ps-card:hover .ps-card-img-overlay { opacity: 1; }

        .ps-card-body {
          padding: 18px 20px 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .ps-card-name {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-size: 1rem;
          font-weight: 700;
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
          padding-top: 14px;
          font-size: 10px;
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
          width: 22px;
          height: 1px;
          background: currentColor;
          transition: width 0.2s;
        }

        .ps-card:hover .ps-card-arrow-line { width: 32px; }

        .ps-explore {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #163521;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          transition: gap 0.2s;
        }

        .ps-explore:hover { gap: 16px; }
        .ps-explore-line { width: 32px; height: 1px; background: currentColor; display: inline-block; transition: width 0.2s; }
        .ps-explore:hover .ps-explore-line { width: 48px; }



        /* ── CTA STRIP ── */
        .cta-strip {
          background: #c8d9cf;
          padding: 88px 64px 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-strip::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect x='50' y='50' width='300' height='300' fill='none' stroke='%23b08a4e' stroke-width='1'/%3E%3Crect x='100' y='100' width='200' height='200' fill='none' stroke='%23b08a4e' stroke-width='0.8'/%3E%3Cline x1='50' y1='200' x2='350' y2='200' stroke='%23b08a4e' stroke-width='0.6'/%3E%3Cline x1='200' y1='50' x2='200' y2='350' stroke='%23b08a4e' stroke-width='0.6'/%3E%3Ccircle cx='200' cy='200' r='100' fill='none' stroke='%23b08a4e' stroke-width='0.7'/%3E%3C/svg%3E");
          background-size: 360px 360px;
          background-position: left -60px center, right -60px center;
          background-repeat: no-repeat;
          opacity: 0.04;
          pointer-events: none;
        }

        .cta-strip-left { position: relative; z-index: 1; }

        .cta-strip-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          pointer-events: none;
          z-index: 2;
          line-height: 0;
        }

        .cta-strip-wave svg { display: block; width: 100%; height: 64px; }

        .cta-strip-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #2d5040;
          margin: 0 0 12px;
          font-weight: 500;
        }

        .cta-strip-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.9rem, 1.5vw + 1.1rem, 2.8rem);
          font-weight: 600;
          color: #1a3d2b;
          line-height: 1.1;
          margin: 0;
        }

        .cta-strip-heading em { font-style: italic; font-weight: 400; color: #2d5040; }

        .cta-strip-sub {
          font-family: 'DM Sans', sans-serif;
          margin: 18px auto 0;
          font-size: 0.87rem;
          color: #3d5c4a;
          line-height: 1.8;
          max-width: 440px;
          font-weight: 300;
        }

        .cta-strip-actions {
          margin-top: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: #163521;
          color: #ffffff;
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 100px;
          transition: background 0.2s, transform 0.2s;
        }

        .cta-btn-primary:hover {
          background: #0e2416;
          transform: translateY(-1px);
        }

        .cta-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #163521;
          font-weight: 500;
          text-decoration: none;
          transition: gap 0.2s;
        }

        .cta-btn-ghost:hover { gap: 16px; }
        .cta-btn-ghost-line { width: 28px; height: 1px; background: currentColor; display: inline-block; transition: width 0.2s; }
        .cta-btn-ghost:hover .cta-btn-ghost-line { width: 40px; }

        /* ── MAIL ORDER TREES ── */
        .mot-section {
          background: #ffffff;
          padding: 96px 64px 80px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .mot-inner {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .mot-title {
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(1.9rem, 2vw + 1rem, 2.8rem);
          color: #163521;
          line-height: 1.1;
          margin-bottom: 18px;
        }

        .mot-desc {
          font-size: 14px;
          color: #7a8f80;
          line-height: 1.8;
          max-width: 520px;
          margin: 0 auto 40px;
          font-weight: 300;
        }

        .mot-video-wrap {
          width: 100%;
          max-width: 680px;
          margin: 0 auto;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #1a2e20;
        }

        .mot-video-iframe {
          width: 100%;
          aspect-ratio: 16/9;
          border: none;
          display: block;
        }

        .mot-video-dots {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 20px;
        }

        .mot-video-dot {
          width: 20px;
          height: 2px;
          background: #c8dac9;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.3s, width 0.3s cubic-bezier(.4,0,.2,1);
        }

        .mot-video-dot.active {
          background: #2d5a3d;
          width: 40px;
        }

        /* ── RESPONSIVE ── */

        /* ≤1024px — tablet landscape */
        @media (max-width: 1024px) {
          .hero-index-bar { padding: 22px 36px; }
          .hero-left { padding: 60px 36px 90px; }

          .intro-strip { padding: 80px 48px; }

          .featured-projects { padding: 72px 48px; }

          .why-shop { padding: 72px 40px 100px; }
          .why-shop-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
          .why-shop-plant-col { display: none; }

          .products-section { padding: 72px 40px; }
          .ps-grid { grid-template-columns: repeat(2, 1fr); }
          .ps-header-sub { white-space: normal; }

          .cta-strip { padding: 72px 48px 120px; }

          .mot-section { padding: 72px 40px; }
        }

        /* ≤900px — tablet portrait */
        @media (max-width: 900px) {
          .intro-strip { grid-template-columns: 1fr; gap: 0; padding: 64px 40px; }
          .intro-strip-divider { display: none; }
          .intro-strip-left { padding-right: 0; padding-bottom: 40px; border-bottom: 1px solid #e8ede5; margin-bottom: 40px; }
          .intro-strip-right { padding-left: 0; }

          .featured-projects { padding: 64px 40px; }
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
          .hero-left { padding: 80px 28px 80px; }

          .why-shop-grid { grid-template-columns: 1fr; gap: 0; }
          .why-shop-header { margin-bottom: 48px; }

          .ps-header { flex-direction: column; align-items: flex-start; gap: 16px; margin-bottom: 40px; }
          .ps-header-sub { white-space: normal; }

          .cta-strip { padding: 60px 36px 110px; }
        }

        /* ≤640px — phone */
        @media (max-width: 640px) {
          .hero-index-bar { padding: 18px 20px; flex-direction: column; align-items: center; justify-content: center; gap: 10px; }
          .hero-index-number { display: none; }
          .hero-left { min-height: 100svh; padding: 60px 24px 80px; }
          .hero-title { font-size: clamp(3rem, 11vw, 4.5rem); }
          .hero-subtitle { font-size: 13px; max-width: 280px; }

          .intro-strip { padding: 48px 20px; }
          .intro-strip-heading { font-size: clamp(1.6rem, 5vw, 2rem); }
          .intro-strip-body { font-size: 13px; }

          .featured-projects { padding: 48px 20px; }
          .fp-gallery {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 180px 140px 140px;
          }

          .why-shop { padding: 56px 20px 88px; }
          .why-shop-title { font-size: clamp(1.5rem, 5vw, 1.8rem); }
          .why-shop-subtitle { font-size: 13px; }
          .reason { padding: 20px 16px; }
          .reason h3 { font-size: 0.95rem; }
          .reason p { font-size: 12.5px; }

          .products-section { padding: 48px 20px; }
          .ps-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .ps-title { font-size: clamp(1.5rem, 5vw, 1.8rem); }
          .ps-card-name { font-size: 0.85rem; }
          .ps-card-sub { font-size: 10px; }

          .cta-strip { padding: 48px 20px 100px; flex-direction: column; align-items: center; }
          .cta-strip-heading { font-size: clamp(1.5rem, 5vw, 1.9rem); }
          .cta-strip-sub { font-size: 0.82rem; }
          .cta-strip-actions { flex-direction: column; gap: 20px; }

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

        <div className={`hero-left${mounted ? " hero-animate" : ""}`}>
          <div className="hero-headline-block">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-text">Rich Haven Artificial Garden</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-bold">Bring</span> <span className="hero-title-italic">Nature</span> <span className="hero-title-bold">to</span>
              <span className="hero-title-bold" style={{ display: "block", marginTop: "0" }}>your Space</span>
            </h1>

            <p className="hero-subtitle">
              Artificial greenery designed to look real, last forever, and need nothing from you.
            </p>
          </div>

          <div className="hero-index-bar">
            <span className="hero-index-number" aria-hidden="true">
              {String(sliderIdx + 1).padStart(2, "0")} / {String(featuredPlants.length).padStart(2, "0")}
            </span>
            <nav className="hero-nav-dots" aria-label="Slide navigation">
              {featuredPlants.map((plant, i) => (
                <button
                  key={plant.name}
                  className={`hero-dot${i === sliderIdx ? " active" : ""}`}
                  onClick={() => setSliderIdx(i)}
                  aria-label={`Show ${plant.name}`}
                  aria-pressed={i === sliderIdx}
                />
              ))}
            </nav>
          </div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════
          INTRO STRIP
      ═══════════════════════════════════════════ */}
      <section className="intro-strip">
        <div className="intro-strip-left">
          <span className="intro-strip-label">Who we are</span>
          <h2 className="intro-strip-heading">
            We turn <em><br />bare spaces into</em> green ones
          </h2>
        </div>
        <div className="intro-strip-divider" aria-hidden="true" />
        <div className="intro-strip-right">
          <p className="intro-strip-body">
            Rich Haven specializes in artificial wall greens, potted plants, planter boxes, and turf — supplying and installing greenery for homes, offices, and commercial spaces across the Philippines. Every piece is chosen for how it looks, how it holds up, and how little you&apos;ll have to think about it.
          </p>
          <Link className="intro-strip-link" href="/about">
            <span className="intro-strip-link-line" />
            Our story
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED PROJECTS
      ═══════════════════════════════════════════ */}
      <section className="featured-projects">
        <div className="fp-header">
          <div className="fp-header-left">
            <p className="fp-label">Our work</p>
            <h2 className="fp-title">Featured <em>Projects</em></h2>
            <p className="fp-desc">
              Real installs, real spaces — from residential balconies to commercial lobbies.
            </p>
          </div>
        </div>

        <div className="fp-gallery">
          {/* Large hero image — spans full height on left */}
          <div className="fp-gallery-item fp-gallery-item--large">
            <img className="fp-gallery-img" src="/p1.jpg" alt="Artificial grass installation" />
            <div className="fp-gallery-overlay">
              <span className="fp-gallery-caption">Artificial Grass</span>
            </div>
          </div>

          {/* Top right — small */}
          <div className="fp-gallery-item">
            <img className="fp-gallery-img" src="/p19.jpg" alt="Wall greens project" />
            <div className="fp-gallery-overlay">
              <span className="fp-gallery-caption">Wall Greens</span>
            </div>
          </div>

          {/* Top right — small */}
          <div className="fp-gallery-item">
            <img className="fp-gallery-img" src="/p36.png" alt="Planter box design" />
            <div className="fp-gallery-overlay">
              <span className="fp-gallery-caption">Planter Boxes</span>
            </div>
          </div>

          {/* Bottom wide — spans 2 cols */}
          <div className="fp-gallery-item fp-gallery-item--wide">
            <img className="fp-gallery-img" src="/p10.png" alt="Garden installation" />
            <div className="fp-gallery-overlay">
              <span className="fp-gallery-caption">Garden Installation</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
          <Link className="fp-view-link" href="/projects">
            <span className="fp-view-link-line" />
            View all projects
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRODUCTS
      ═══════════════════════════════════════════ */}
      <section className="products-section" aria-labelledby="products-heading">
        <div className="ps-header">
          <div>
            <p className="ps-eyebrow">What we offer</p>
            <h2 className="ps-title" id="products-heading">Pick your <em>Greenery</em></h2>
            <p className="ps-header-sub">
              We supply, install, or both — whatever your space needs.
            </p>
          </div>
          <Link className="ps-explore" href="/products-services">
            <span className="ps-explore-line" />
            View all products
          </Link>
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
      </section>

      {/* ═══════════════════════════════════════════
          WHY SHOP
      ═══════════════════════════════════════════ */}
      <section className="why-shop" aria-labelledby="why-shop-title">
        <div className="why-shop-header">
          <p className="why-shop-eyebrow">What sets us apart</p>
          <h2 className="why-shop-title" id="why-shop-title">Why Choose <em>Rich Haven?</em></h2>
          <p className="why-shop-subtitle">
            We know what holds up — and what doesn&apos;t.
          </p>
        </div>

        <div className="why-shop-grid">
          <div className="why-shop-column">
            {shopReasons.slice(0, 2).map((reason) => (
              <article className="reason" key={reason.title}>
                <div className="reason-icon-wrap" aria-hidden="true">
                  <reason.icon className="reason-icon" strokeWidth={1.8} />
                </div>
                <div className="reason-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="why-shop-plant-col">
            <div className="why-shop-plant-frame">
              <img className="why-shop-plant" src="/p3.png" alt="Potted indoor plant" />
            </div>
          </div>

          <div className="why-shop-column">
            {shopReasons.slice(2).map((reason) => (
              <article className="reason" key={reason.title}>
                <div className="reason-icon-wrap" aria-hidden="true">
                  <reason.icon className="reason-icon" strokeWidth={1.8} />
                </div>
                <div className="reason-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip" aria-label="Call to action">
        <div className="cta-strip-left">
          <p className="cta-strip-eyebrow">Ready when you are</p>
          <h2 className="cta-strip-heading">
            Tell us about your space.<br />We&apos;ll handle the rest.
          </h2>
          <p className="cta-strip-sub">
            Share a photo or a rough idea — we&apos;ll come back with options that fit your space, budget, and timeline.
          </p>

        </div>

        <div className="cta-strip-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>
    </main>
  );
}