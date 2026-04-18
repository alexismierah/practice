"use client";
import Link from "next/link";
import { CloudSun, Grid2x2, Leaf, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const featuredPlants = [
  {
    name: "Artificial Grass",
    sublabel: "Sports or design spaces",
    img: "landd.png",
    link: "/products-services/grass",
  },
  {
    name: "Potted Plants and Trees",
    sublabel: "Lush Indoor Statement Accent",
    img: "https://theplantsproject.com.au/cdn/shop/files/Bird_of_Paradise_Plant_Styled_Photo_3_sizes.jpg",
    link: "/products-services/potted-plants",
  },
  {
    name: "Planter Boxes",
    sublabel: "Vibrant Designer Foliage Collection",
    img: "https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/648424462_1429741828941943_3205555062599595441_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHhyzcOGd0LQfedLo-WoqEmu1Yra36Dg727VitrfoODveK9MJ3u5DOCxeyGJyr2yOTh7gqQxWA9h8YGxbaf6Rfs&_nc_ohc=LCv9f4tZGZMQ7kNvwGkxkrk&_nc_oc=Adr0hIaMnAmPY779YI914QLOvnDQy8EOCDawkFJF5UFWnR22g8pB2AKUwza8hAnhFJM&_nc_zt=23&_nc_ht=scontent.fmnl9-1.fna&_nc_gid=RqC1R6mFu0mo3iOHrS8Rxw&_nc_ss=7a3a8&oh=00_Af2VVxRrRicsPYUagbkaYIp_QgChOXUp7p_n4gxGEIAGmg&oe=69E3E0BC",
    link: "/products-services/planter-box",
  },
  {
    name: "Wall Greens",
    sublabel: "Low-Maintenance Greenery",
    img: "https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/659113654_1448920473690745_7788257688503933853_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHuX0UmVZuYmexZkqsK2iNwNhtURVi6_bE2G1RFWLr9sU5U7ekWo31swlncyFRazXjq-toVyt2Y4Lc0GeQDvhZQ&_nc_ohc=pbb1ftAlsWIQ7kNvwHYTwyu&_nc_oc=AdotuAxS5AmsfPdBkTQgDxQVT8WSimOgGF_lv5rzK5cKPZJSuqB7ujlEjRfIgMYeZIQ&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=8IR14u51iA4tUCsPo5jdGw&_nc_ss=7a3a8&oh=00_Af0Q7FrK5QwRUqF5qaXbFwmbneWeeYnd3L-i9g3oPOrL2A&oe=69E40C8A",
    link: "/products-services/wall-greens",
  },
];

const displayedPlants = [
  {
    name: "Artificial Grass",
    sublabel: "Sports or design spaces",
    img: "https://cdn.thewirecutter.com/wp-content/media/2021/07/synthetic-lawn-2048px-802551536-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
    link: "/products-services/grass",
    tag: "01",
  },
  {
    name: "Potted Plants and Trees",
    sublabel: "Lush Indoor Statement Accent",
    img: "https://theplantsproject.com.au/cdn/shop/files/Bird_of_Paradise_Plant_Styled_Photo_3_sizes.jpg",
    link: "/products-services/potted-plants",
    tag: "02",
  },
  {
    name: "Planter Boxes",
    sublabel: "Vibrant Designer Foliage Collection",
    img: "https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/648424462_1429741828941943_3205555062599595441_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHhyzcOGd0LQfedLo-WoqEmu1Yra36Dg727VitrfoODveK9MJ3u5DOCxeyGJyr2yOTh7gqQxWA9h8YGxbaf6Rfs&_nc_ohc=LCv9f4tZGZMQ7kNvwGkxkrk&_nc_oc=Adr0hIaMnAmPY779YI914QLOvnDQy8EOCDawkFJF5UFWnR22g8pB2AKUwza8hAnhFJM&_nc_zt=23&_nc_ht=scontent.fmnl9-1.fna&_nc_gid=RqC1R6mFu0mo3iOHrS8Rxw&_nc_ss=7a3a8&oh=00_Af2VVxRrRicsPYUagbkaYIp_QgChOXUp7p_n4gxGEIAGmg&oe=69E3E0BC",
    link: "/products-services/planter-box",
    tag: "03",
  },
  {
    name: "Wall Greens",
    sublabel: "Low-Maintenance Greenery",
    img: "https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/659113654_1448920473690745_7788257688503933853_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHuX0UmVZuYmexZkqsK2iNwNhtURVi6_bE2G1RFWLr9sU5U7ekWo31swlncyFRazXjq-toVyt2Y4Lc0GeQDvhZQ&_nc_ohc=pbb1ftAlsWIQ7kNvwHYTwyu&_nc_oc=AdotuAxS5AmsfPdBkTQgDxQVT8WSimOgGF_lv5rzK5cKPZJSuqB7ujlEjRfIgMYeZIQ&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=8IR14u51iA4tUCsPo5jdGw&_nc_ss=7a3a8&oh=00_Af0Q7FrK5QwRUqF5qaXbFwmbneWeeYnd3L-i9g3oPOrL2A&oe=69E40C8A",
    link: "/products-services/wall-greens",
    tag: "04",
  },
];

const motVideos = [
  {
    label: "Video 1",
    src: "https://www.facebook.com/reel/1933138787564923",
  },
  {
    label: "Video 2",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID_2",
  },
  {
    label: "Video 3",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID_3",
  },
];

const shopReasons = [
  {
    title: "Low Maintenance",
    desc: "Enjoy beautiful greenery without watering, trimming, or fertilizing.",
    icon: Leaf,
  },
  {
    title: "Long-Lasting Quality",
    desc: "Made from durable materials that stay vibrant and fresh-looking over time.",
    icon: ShieldCheck,
  },
  {
    title: "All-Weather Friendly",
    desc: "Suitable for indoor and outdoor spaces, resistant to fading and damage.",
    icon: CloudSun,
  },
  {
    title: "Versatile Design",
    desc: "Ideal for homes, offices, commercial spaces, events, and decorative projects.",
    icon: Grid2x2,
  },
] as const;

export default function Home() {
  const [motVideoIdx, setMotVideoIdx] = useState(0);
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
          min-height: 100svh;
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
            linear-gradient(to top, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.3) 45%, rgba(0, 0, 0, 0.18) 100%),
            radial-gradient(ellipse at center, rgba(0, 0, 0, 0.25) 0%, transparent 100%);
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
          min-height: 100svh;
          padding: 110px 48px 100px;
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
          display: block;
        }

        .hero-title-bold {
          font-weight: 600;
          color: #ffffff;
          display: block;
          line-height: 1;
        }

        .hero-title-accent {
          font-style: italic;
          font-weight: 300;
          color: var(--mist);
          display: block;
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
          border-top: 1px solid rgba(255,255,255,0.08);
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

        .hero-progress-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: rgba(255,255,255,0.06);
          z-index: 4;
        }

        .hero-progress-fill {
          height: 100%;
          background: rgba(200,218,201,0.6);
          animation: lineFill 5s linear forwards;
          transform-origin: left;
        }

        @keyframes lineFill {
          from { width: 0% }
          to   { width: 100% }
        }

        .hero-animate .hero-eyebrow { animation: fadeUp 0.7s 0.1s both ease; }
        .hero-animate .hero-title { animation: fadeUp 0.9s 0.25s both ease; }
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

        /* ── WHY SHOP ── */
        .why-shop {
          background: linear-gradient(180deg, #ffffff 0%, #ffffff 60%, #c8d9cf 100%);
          padding: 96px 64px;
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

        /* ── PRODUCTS ── */
        .products-section {
          background: #fafaf8;
          padding: 96px 64px 80px;
        }

        .ps-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
        }

        .ps-eyebrow {
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #7a8f80;
          margin: 0 0 10px;
        }

        .ps-title {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 1.4vw + 1rem, 2.6rem);
          color: #163521;
          line-height: 1.1;
        }

        .ps-title em { font-style: italic; font-weight: 500; color: #2f6f44; }

        .ps-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 48px;
        }

        .ps-card {
          border-radius: 16px;
          overflow: hidden;
          background: #ffffff;
          display: block;
        }

        .ps-card a {
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }

        .ps-card-img-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 16px 16px 0 0;
        }

        .ps-card-img {
          width: 100%;
          aspect-ratio: 3 / 4;
          object-fit: cover;
          display: block;
          transition: transform .45s ease;
        }

        .ps-card:hover .ps-card-img {
          transform: scale(1.05);
        }

        .ps-card-body {
          padding: 16px 18px 18px;
          background: #ffffff;
          border: 1px solid #e8ede5;
          border-top: none;
          border-radius: 0 0 16px 16px;
        }

        .ps-card-name {
          margin: 0 0 4px;
          font-family: "Playfair Display", serif;
          font-size: 1rem;
          font-weight: 700;
          color: #163521;
          line-height: 1.25;
        }

        .ps-card-sub {
          font-size: 11px;
          color: #7a8f80;
          margin: 0;
          letter-spacing: .03em;
        }

        .ps-explore {
          font-size: 12px;
          font-weight: 500;
          color: #4a6b54;
          letter-spacing: .06em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: color .15s;
          align-self: flex-end;
        }

        .ps-explore:hover { color: #163521; }
        .ps-explore-line { width: 32px; height: 1px; background: currentColor; display: inline-block; }



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
        @media (max-width: 1024px) {
          .hero-top-bar { padding: 28px 36px; }
          .hero-index-bar { padding: 22px 36px; }
          .hero-left { padding: 90px 36px 90px; }
          .why-shop { padding: 72px 40px; }
          .why-shop-grid { grid-template-columns: 1fr; gap: 40px; }
          .why-shop-plant-col { order: -1; }
          .why-shop-plant { max-width: 260px; }
          .products-section, .services-section { padding: 72px 40px; }
          .ps-header { flex-direction: column; align-items: flex-start; gap: 20px; }
          .cta-strip { padding: 60px 40px; }
          .mot-section { padding: 72px 40px; }
        }

        @media (max-width: 768px) {
          .ps-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        }

        @media (max-width: 640px) {
          .hero-top-bar { padding: 24px 20px; }
          .hero-index-bar { padding: 18px 20px; }
          .hero-left { padding: 76px 24px 80px; }
          .hero-title { font-size: clamp(3.2rem, 12vw, 5rem); }
          .why-shop { padding: 56px 20px; }
          .products-section, .services-section { padding: 56px 20px; }
          .ps-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
          .cta-strip { padding: 48px 20px; flex-direction: column; align-items: center; }
          .mot-section { padding: 56px 20px; }
        }

        @media (max-width: 400px) {
          .ps-grid { grid-template-columns: 1fr; }
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
              <span className="hero-eyebrow-line" aria-hidden="true" />
              <span className="hero-eyebrow-text">Rich Haven Artificial Garden</span>
              <span className="hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="hero-title">
              <span className="hero-title-italic"></span>
              <span className="hero-title-bold">Greens for</span>
              <span className="hero-title-bold"> your Space.</span>
              <span className="hero-title-accent"></span>
            </h1>
          </div>

          <div className="hero-index-bar">
            <span className="hero-index-number" aria-hidden="true">
              {String(sliderIdx + 1).padStart(2, "0")} / {String(featuredPlants.length).padStart(2, "0")}
            </span>
            <span className="hero-slide-label">
              {featuredPlants[sliderIdx].name}
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

        <div className="hero-progress-line" aria-hidden="true">
          <div key={sliderIdx} className="hero-progress-fill" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MAIL ORDER TREES
      ═══════════════════════════════════════════ */}
      <section className="mot-section">



        <div className="mot-inner">
          <h2 className="mot-title">Rich Haven Artificial Garden</h2>
          <p className="mot-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </p>

          <div className="mot-video-wrap">
            <iframe
              className="mot-video-iframe"
              src={motVideos[motVideoIdx].src}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>

          <nav className="mot-video-dots" aria-label="Video navigation">
            {motVideos.map((v, i) => (
              <button
                key={v.label}
                className={`mot-video-dot${i === motVideoIdx ? " active" : ""}`}
                onClick={() => setMotVideoIdx(i)}
                aria-label={`Show ${v.label}`}
                aria-pressed={i === motVideoIdx}
              />
            ))}
          </nav>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRODUCTS
      ═══════════════════════════════════════════ */}
      <section className="products-section" aria-labelledby="products-heading">
        <div className="ps-header">
          <div>
            <p className="ps-eyebrow">What we offer</p>
            <h2 className="ps-title" id="products-heading"><em>Green</em> Solutions</h2>
            <p style={{ marginTop: 12, fontSize: 13.5, color: "#7a8f80", lineHeight: 1.7, maxWidth: 380, whiteSpace: "nowrap" }}>
              Choose your greenery — we can supply it or fully install it based on your space.
            </p>
          </div>
          <Link className="ps-explore" href="/products-services">
            <span className="ps-explore-line" />
            View all
            <span className="ps-explore-line" />
          </Link>
        </div>

        <div className="ps-grid">
          {displayedPlants.map((plant) => (
            <article className="ps-card" key={plant.name}>
              <Link href={plant.link}>
                <div className="ps-card-img-wrap">
                  <img className="ps-card-img" src={plant.img} alt={plant.name} />
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
          <p className="why-shop-eyebrow">Bring nature to your space</p>
          <h2 className="why-shop-title" id="why-shop-title">Why Choose <em>Rich Haven?</em></h2>
          <p className="why-shop-subtitle">
            From start to finish, Rich Haven transforms your space with greenery.
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

      {/* ═══════════════════════════════════════════
          CTA STRIP
      ═══════════════════════════════════════════ */}
      <section className="cta-strip" aria-label="Call to action">
        <div className="cta-strip-left">
          <p className="cta-strip-eyebrow">Let&apos;s work together</p>
          <h2 className="cta-strip-heading">
            Upgrade your space with effortless<em> greenery</em>
          </h2>
          <p className="cta-strip-sub">
            Get in touch with us. We&apos;re ready to help you find the perfect greenery for your space.
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