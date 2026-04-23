"use client";

import { useRef, useState, useCallback } from "react";

export default function Home() {
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  const services = [
    {
      num: "01",
      name: "Artificial Grass",
      desc: "Low-maintenance turf for lobbies and sports areas.",
      img: "https://cdn.thewirecutter.com/wp-content/media/2021/07/synthetic-lawn-2048px-802551536-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
      tag: "Turf & Lawn",
      href: "/products-services/artificial-grass",
    },
    {
      num: "02",
      name: "Potted Plants & Trees",
      desc: "Curated planters for balconies, entrances, and lobbies.",
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1719266906-live-majesty-palm-plant-w-grow-pot-xl-6679ee546c94b.jpg?crop=0.803xw:1.00xh;0.0994xw,0&resize=980:",
      tag: "Indoor / Outdoor",
      href: "/products-services/potted-plants",
    },
    {
      num: "03",
      name: "Wall Greens",
      desc: "Vertical gardens for homes, restaurants, and offices.",
      img: "/services-overview/p19.jpg",
      tag: "Vertical Gardens",
      href: "/products-services/wall-greens",
    },
    {
      num: "04",
      name: "Planter Boxes",
      desc: "Elegant greenery for offices and conference rooms.",
      img: "/services-overview/p1.jpg",
      tag: "Custom Boxes",
      href: "/products-services/planter-boxes",
    },
  ];

  const steps = [
    {
      label: "Consultation",
      sub: "We listen to your vision, understand your goals, and discuss the best greenery solutions for your space.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
    },
    {
      label: "Site Visit",
      sub: "Our team visits your location to measure the space, assess conditions, and craft a tailored design plan.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      ),
    },
    {
      label: "Installation",
      sub: "We professionally install everything on-site — clean, fast, and seamless. Or supply premium materials ready for you.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3L4 7v5c0 4.5 3.5 8.5 8 9.5 4.5-1 8-5 8-9.5V7L12 3z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      ),
    },
  ];

  const reasons = [
    {
      title: "Premium Quality",
      desc: "UV-resistant, lifelike materials that stay vibrant for years without fading.",
      stat: "5yr",
      statLabel: "Warranty",
    },
    {
      title: "Zero Maintenance",
      desc: "No watering, pruning, or upkeep. Beauty without the burden.",
      stat: "0hrs",
      statLabel: "Weekly Care",
    },
    {
      title: "Custom Installations",
      desc: "Designed to fit any space — from cozy home corners to expansive lobbies.",
      stat: "100%",
      statLabel: "Custom Fit",
    },
    {
      title: "Client-First Care",
      desc: "Full support from consultation through aftercare. We're with you every step.",
      stat: "500+",
      statLabel: "Happy Clients",
    },
  ];

  const getPos = (e: MouseEvent | TouchEvent, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const clientX = (e as TouchEvent).touches ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(Math.max(pct, 2), 98);
  };

  const onSliderMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDragging.current = true;
    const el = sliderRef.current;
    const onMove = (ev: MouseEvent | TouchEvent) => { if (isDragging.current) setSliderPos(getPos(ev, el!)); };
    const onUp = () => {
      isDragging.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
  }, []);

  return (
    <main>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap");

        :root {
          --sage: #8fa882;
          --forest: #2d4a27;
          --deep: #1a2e16;
          --cream: #f7f5f0;
          --warm-white: #fafaf7;
          --text: #1c1e19;
          --text-muted: #6b7060;
          --text-faint: #a8ad9e;
          --border: rgba(45,74,39,0.12);
          --gold: #c9a96e;
          --font: "DM Sans", sans-serif;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        html, body { overflow-x: hidden; }

        .rh, .rh * { font-family: var(--font); }

        /* ── HERO ── */
        .hero { position: relative; height: 100svh; min-height: 620px; overflow: hidden; }
        .hero-bg {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; filter: brightness(0.45) saturate(0.75);
          transform: scale(1.03); animation: heroZoom 12s ease-out forwards;
        }
        @keyframes heroZoom { from { transform: scale(1.08); } to { transform: scale(1.0); } }
        .hero-grain {
          position: absolute; inset: 0; z-index: 2; opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }
        .scrim-top { position: absolute; inset: 0; z-index: 3; background: linear-gradient(170deg, rgba(10,22,8,0.7) 0%, transparent 50%); }
        .scrim-bot { position: absolute; inset: 0; z-index: 3; background: linear-gradient(to top, rgba(10,22,8,0.96) 0%, rgba(10,22,8,0.35) 40%, transparent 68%); }
        .hero-body {
          position: relative; z-index: 5; height: 100%;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 0 60px 64px;
        }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 10px; letter-spacing: 0.26em; text-transform: uppercase;
          color: var(--gold); font-weight: 400; margin-bottom: 15px;
          animation: fadeUp 1s ease 0.2s both;
        }
        .hero-grid { display: grid; grid-template-columns: 1fr auto; align-items: flex-end; gap: 48px; }
        .hero-title {
          font-family: "DM Sans", serif;
          font-weight: 300; font-size: clamp(3.2rem, 6.5vw, 7rem);
          line-height: 0.93; color: #fff; letter-spacing: -0.02em;
          animation: fadeUp 1s ease 0.4s both;
        }
        .hero-title em { font-style: italic; color: rgba(194,220,189,0.92); }
        .hero-right { display: flex; flex-direction: column; align-items: flex-end; gap: 24px; padding-bottom: 8px; animation: fadeUp 1s ease 0.6s both; }
        .hero-sub { font-size: 13px; color: rgba(255,255,255,0.48); line-height: 1.7; font-weight: 300; max-width: 200px; text-align: right; }
        .hero-actions { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
        .btn-ghost-hero {
          display: inline-flex; align-items: center; gap: 12px; padding: 10px 22px;
          background: rgba(255,255,255,0.08); border: 0.5px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
          color: rgba(255,255,255,0.75); font-size: 10px; font-weight: 400;
          letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none;
          border-radius: 9999px; transition: all 0.3s;
        }
        .btn-ghost-hero:hover { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.35); color: #fff; }

        /* ── ABOUT ── */
        .about-wrap { background: var(--warm-white); padding: 72px 60px; }
        .about-inner { max-width: 900px; margin: 0 auto; }
        .about-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--sage); margin-bottom: 20px; font-weight: 400;
        }
        .about-quote {
          font-size: clamp(1rem, 3vw, 1.8rem);
          font-weight: 300; line-height: 1.7;
          color: var(--text-muted); max-width: 900px;
          text-align: center;
        }
        .about-quote em { font-style: normal; font-weight: 500; color: var(--text); }
        .about-foot {
          margin-top: 36px; padding-top: 24px;
          border-top: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
        }
        .about-foot-left { display: flex; flex-direction: column; gap: 4px; }
        .about-foot-name { font-size: 14px; font-weight: 500; color: var(--text); letter-spacing: -0.01em; }
        .about-foot-sub { font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-faint); }
        .learn-more-link {
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--text-muted); text-decoration: none; font-weight: 400;
          display: flex; align-items: center; gap: 8px; transition: color 0.3s;
          white-space: nowrap;
        }
        .learn-more-link::after { content: "→"; transition: transform 0.3s; }
        .learn-more-link:hover { color: var(--forest); }
        .learn-more-link:hover::after { transform: translateX(4px); }

        /* ── SERVICES ── */
        .rh-services { background: var(--cream); padding: 80px 60px; }
        .rh-s-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 36px; }
        .section-eyebrow {
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--sage); margin-bottom: 10px; font-weight: 400;
          display: flex; align-items: center; gap: 10px;
        }
        .section-headline {
          font-family: "DM Sans", serif;
          font-size: clamp(1.6rem, 2.8vw, 2.2rem);
          font-weight: 300; line-height: 1.0; letter-spacing: -0.01em; color: var(--text);
        }
        .section-headline em { font-style: italic; color: var(--forest); }
        .view-all-link {
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--text-muted); text-decoration: none; font-weight: 400;
          display: flex; align-items: center; gap: 8px; transition: color 0.3s;
        }
        .view-all-link::after { content: "→"; transition: transform 0.3s; }
        .view-all-link:hover { color: var(--forest); }
        .view-all-link:hover::after { transform: translateX(4px); }
        .rh-s-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
        .rh-s-card {
          border-radius: 14px; overflow: hidden; display: block; cursor: pointer;
          text-decoration: none; position: relative; aspect-ratio: 3/4; background: #111;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease;
        }
        .rh-s-card:hover { transform: translateY(-6px) scale(1.01); box-shadow: 0 28px 56px rgba(0,0,0,0.18); }
        .rh-s-card-img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .rh-s-card:hover .rh-s-card-img { transform: scale(1.06); }
        .rh-s-card::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,16,6,0.88) 0%, rgba(8,16,6,0.18) 50%, transparent 72%);
          z-index: 1; border-radius: inherit;
        }
        .rh-s-card-body { position: absolute; bottom: 0; left: 0; right: 0; z-index: 2; padding: 24px 20px 20px; }
        .rh-s-card-num { font-size: 10px; color: var(--gold); letter-spacing: 0.22em; font-weight: 400; margin-bottom: 6px; display: block; }
        .rh-s-card-name { font-size: 16px; font-weight: 500; color: #fff; line-height: 1.2; letter-spacing: -0.01em; margin-bottom: 6px; }
        .rh-s-card-desc { font-size: 11px; font-weight: 300; color: rgba(255,255,255,0.55); line-height: 1.6; }

        /* ── BEFORE / AFTER ── */
        .ba-section { background: var(--warm-white); padding: 80px 60px; }
        .ba-inner { max-width: 1000px; margin: 0 auto; }
        .ba-header { margin-bottom: 36px; }
        .ba-container {
          position: relative; width: 100%; border-radius: 18px; overflow: hidden;
          cursor: col-resize; user-select: none; -webkit-user-select: none;
          aspect-ratio: 16/9; background: #111;
          box-shadow: 0 20px 70px rgba(0,0,0,0.13);
        }
        .ba-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }
        .ba-after { position: absolute; inset: 0; overflow: hidden; }
        .ba-after img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }
        .ba-divider { position: absolute; top: 0; bottom: 0; width: 1.5px; background: rgba(255,255,255,0.9); z-index: 10; transform: translateX(-50%); pointer-events: none; }
        .ba-handle {
          position: absolute; top: 50%; width: 44px; height: 44px;
          background: #fff; border-radius: 50%; transform: translate(-50%, -50%); z-index: 11;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.25); cursor: col-resize;
          transition: transform 0.2s ease, box-shadow 0.2s;
        }
        .ba-handle:hover { transform: translate(-50%, -50%) scale(1.1); box-shadow: 0 8px 28px rgba(0,0,0,0.3); }
        .ba-handle-arrows { display: flex; align-items: center; gap: 4px; }
        .ba-arrow { width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; }
        .ba-arrow-left { border-right: 7px solid var(--text); }
        .ba-arrow-right { border-left: 7px solid var(--text); }
        .ba-label {
          position: absolute; bottom: 14px; font-size: 9px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.9);
          background: rgba(0,0,0,0.42); backdrop-filter: blur(10px);
          padding: 5px 12px; border-radius: 9999px; z-index: 8; pointer-events: none;
          border: 0.5px solid rgba(255,255,255,0.15);
        }
        .ba-label-before { left: 14px; }
        .ba-label-after { right: 14px; }

        /* ── HOW WE WORK ── */
        .hw-section { background: var(--cream); padding: 80px 60px; }
        .hw-inner { max-width: 1000px; margin: 0 auto; }
        .hw-header { margin-bottom: 52px; }
        .hw-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; position: relative; }
        .hw-steps::before {
          content: ""; position: absolute; top: 36px; left: 15%; right: 15%;
          height: 1px; background: linear-gradient(to right, transparent, var(--border), var(--border), transparent);
          z-index: 0;
        }
        .hw-step { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 20px; }
        .hw-step-bubble {
          width: 72px; height: 72px; border-radius: 50%;
          background: var(--warm-white); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--forest); margin-bottom: 24px; position: relative; z-index: 1;
          transition: all 0.3s ease;
        }
        .hw-step:hover .hw-step-bubble { background: var(--forest); color: #fff; border-color: var(--forest); transform: scale(1.08); box-shadow: 0 10px 28px rgba(45,74,39,0.2); }
        .hw-step-num { font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--text-faint); font-weight: 400; margin-bottom: 10px; }
        .hw-step-label { font-size: 17px; font-weight: 500; color: var(--text); letter-spacing: -0.01em; margin-bottom: 10px; line-height: 1.1; }
        .hw-step-sub { font-size: 13px; font-weight: 300; color: var(--text-muted); line-height: 1.75; max-width: 210px; margin: 0 auto; }

        /* ── WHY CHOOSE US ── */
        .why-section { background: var(--warm-white); padding: 90px 60px; }
        .why-inner { max-width: 1100px; margin: 0 auto; }
        .why-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 64px; }
        .why-eyebrow {
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--sage); margin-bottom: 12px; font-weight: 400;
          display: flex; align-items: center; gap: 10px;
        }
        .why-headline {
          font-family: "DM Sans", serif;
          font-size: clamp(1.6rem, 2.8vw, 2.2rem);
          font-weight: 300; line-height: 1.0; letter-spacing: -0.01em; color: var(--text);
        }
        .why-headline em { font-style: italic; color: var(--forest); }
        .why-header-sub { font-size: 13px; font-weight: 300; color: var(--text-faint); line-height: 1.7; max-width: 240px; text-align: right; }
        .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid var(--border); }
        .why-card { padding: 40px 32px 40px 0; border-right: 1px solid var(--border); display: flex; flex-direction: column; }
        .why-card:first-child { padding-left: 0; }
        .why-card:last-child { border-right: none; padding-right: 0; padding-left: 32px; }
        .why-card:not(:first-child):not(:last-child) { padding-left: 32px; }
        .why-card-stat {
          font-family: "DM Sans", serif;
          font-size: 44px; font-weight: 300; color: var(--forest);
          line-height: 1; letter-spacing: -0.03em; margin-bottom: 4px;
        }
        .why-card-stat-label { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-faint); margin-bottom: 28px; }
        .why-card-title { font-size: 13px; font-weight: 500; color: var(--text); margin-bottom: 8px; letter-spacing: -0.01em; }
        .why-card-desc { font-size: 12px; font-weight: 300; color: var(--text-muted); line-height: 1.75; }

        /* ── CTA ── */
        .cta-section { background: var(--warm-white); padding: 90px 60px; position: relative; overflow: hidden; }
        .cta-bg-text {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          font-family: "DM Sans", serif;
          font-size: 22vw; font-weight: 300; color: rgba(45,74,39,0.04);
          white-space: nowrap; pointer-events: none; user-select: none; line-height: 1;
        }
        .cta-inner {
          max-width: 700px; margin: 0 auto; text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 20px;
          position: relative; z-index: 1;
        }
        .cta-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 10px; letter-spacing: 0.26em; text-transform: uppercase;
          color: var(--sage); font-weight: 400;
        }
        .cta-eyebrow::before, .cta-eyebrow::after { content: ""; display: block; width: 28px; height: 1px; background: var(--sage); }
        .cta-headline {
          font-family: "DM Sans", serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 300; line-height: 1.1; letter-spacing: -0.02em; color: var(--text);
        }
        .cta-headline em { font-style: italic; color: var(--forest); }
        .cta-sub { font-size: 13px; font-weight: 300; color: var(--text-muted); line-height: 1.7; max-width: 400px; }
        .cta-actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 6px; }
        .cta-btn-primary {
          display: inline-flex; align-items: center; gap: 12px; padding: 12px 28px;
          background: var(--deep); border: none; color: #fff;
          font-size: 10px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase;
          text-decoration: none; border-radius: 9999px; transition: all 0.3s; cursor: pointer;
        }
        .cta-btn-primary:hover { background: var(--forest); transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,0.15); }
        .cta-btn-ghost {
          display: inline-flex; align-items: center; gap: 12px; padding: 12px 26px;
          background: transparent; border: 0.5px solid rgba(45,74,39,0.25);
          color: var(--text-muted); font-size: 10px; font-weight: 400;
          letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none;
          border-radius: 9999px; transition: all 0.3s; cursor: pointer;
        }
        .cta-btn-ghost:hover { border-color: var(--forest); color: var(--forest); transform: translateY(-2px); }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .rh-s-grid { grid-template-columns: repeat(2, 1fr); }
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .why-card { border-bottom: 1px solid var(--border); }
          .why-card:nth-child(2) { border-right: none; padding-right: 0; }
          .why-card:nth-child(3) { padding-left: 0; border-right: 1px solid var(--border); padding-right: 32px; }
          .why-card:last-child { border-right: none; border-bottom: none; padding-left: 32px; padding-right: 0; }
          .why-card:nth-child(3), .why-card:nth-child(4) { border-bottom: none; }
        }
        @media (max-width: 900px) {
          .hero-body { padding: 0 28px 52px; }
          .hero-grid { grid-template-columns: 1fr; gap: 28px; }
          .hero-right { align-items: flex-start; }
          .hero-sub { text-align: left; }
          .hero-actions { align-items: flex-start; flex-direction: row; flex-wrap: wrap; }
          .about-wrap, .ba-section, .rh-services, .hw-section, .why-section, .cta-section { padding-left: 28px; padding-right: 28px; }
          .hw-steps { grid-template-columns: 1fr; gap: 32px; }
          .hw-steps::before { display: none; }
          .why-header { flex-direction: column; align-items: flex-start; gap: 12px; }
          .why-header-sub { text-align: left; max-width: 100%; }
        }
        @media (max-width: 600px) {
          .hero-title { font-size: 3rem; }
          .rh-s-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .about-foot { flex-direction: column; gap: 16px; align-items: flex-start; }
          .rh-s-header { flex-direction: column; align-items: flex-start; gap: 14px; }
          .why-grid { grid-template-columns: 1fr; }
          .why-card { padding: 28px 0 !important; border-right: none !important; border-bottom: 1px solid var(--border); }
          .why-card:last-child { border-bottom: none; }
          .why-card-stat { font-size: 38px; }
        }
      `}</style>

      <div className="rh">

        {/* ── HERO ── */}
        <section className="hero">
          <img className="hero-bg" src="planterbox/box8.jpeg" alt="Rich Haven artificial garden" />
          <div className="hero-grain" />
          <div className="scrim-top" />
          <div className="scrim-bot" />
          <div className="hero-body">
            <p className="hero-eyebrow">Rich Haven Artificial Garden</p>
            <div className="hero-grid">
              <h1 className="hero-title">
                Bring <em>Nature</em><br />to Your Space
              </h1>
              <div className="hero-right">
                <p className="hero-sub">Greenery that looks real, lasts forever, and needs zero maintenance.</p>
                <div className="hero-actions">
                  <a href="#footer" className="btn-ghost-hero">Explore Greens</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <div className="about-wrap">
          <div className="about-inner">
            <p className="about-tag">About Rich Haven</p>
            <p className="about-quote">
              We bring <em>nature-inspired beauty</em> to every space — without the maintenance. Thoughtfully designed <em>greenery</em> for homes, offices, and commercial spaces that stays <em>fresh and vibrant</em> all year round.
            </p>
            <div className="about-foot">
              <div className="about-foot-left">
                <span className="about-foot-name">Rich Haven Artificial Garden</span>
                <span className="about-foot-sub">Est. 2014</span>
              </div>
              <a href="/about" className="learn-more-link">Learn more</a>
            </div>
          </div>
        </div>

        {/* ── SERVICES ── */}
        <section className="rh-services">
          <div className="rh-s-header">
            <div>
              <p className="section-eyebrow">What we offer</p>
              <h2 className="section-headline">Our <em>Green Solutions</em></h2>
            </div>
            <a href="/products-services" className="view-all-link">View all services</a>
          </div>
          <div className="rh-s-grid">
            {services.map((s, i) => (
              <a key={i} href={s.href} className="rh-s-card">
                <img className="rh-s-card-img" src={s.img} alt={s.name} />
                <div className="rh-s-card-body">
                  <span className="rh-s-card-num">{s.num}</span>
                  <h3 className="rh-s-card-name">{s.name}</h3>
                  <p className="rh-s-card-desc">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── BEFORE / AFTER ── */}
        <section className="ba-section">
          <div className="ba-inner">
            <div className="ba-header">
              <p className="section-eyebrow">See the difference</p>
              <h2 className="section-headline">Before &amp; <em>After</em></h2>
            </div>
            <div
              className="ba-container"
              ref={sliderRef}
              onMouseDown={onSliderMouseDown}
              onTouchStart={onSliderMouseDown}
            >
              <img className="ba-img" src="/beforeafter/after2.jpg" alt="After" />
              <div className="ba-after" style={{ width: `${sliderPos}%` }}>
                <img src="/beforeafter/before2.jpg" alt="Before" />
              </div>
              <div className="ba-divider" style={{ left: `${sliderPos}%` }} />
              <div className="ba-handle" style={{ left: `${sliderPos}%` }} onMouseDown={onSliderMouseDown} onTouchStart={onSliderMouseDown}>
                <div className="ba-handle-arrows">
                  <div className="ba-arrow ba-arrow-left" />
                  <div className="ba-arrow ba-arrow-right" />
                </div>
              </div>
              <span className="ba-label ba-label-before">Before</span>
              <span className="ba-label ba-label-after">After</span>
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="hw-section">
          <div className="hw-inner">
            <div className="hw-header">
              <p className="section-eyebrow" style={{ justifyContent: "flex-start" }}>Our process</p>
              <h2 className="section-headline">How we <em>Work</em></h2>
            </div>
            <div className="hw-steps">
              {steps.map((step, i) => (
                <div key={i} className="hw-step">
                  <div className="hw-step-bubble">{step.icon}</div>
                  <p className="hw-step-num">Step {String(i + 1).padStart(2, "0")}</p>
                  <p className="hw-step-label">{step.label}</p>
                  <p className="hw-step-sub">{step.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        {/*<section className="why-section">
          <div className="why-inner">
            <div className="why-header">
              <div>
                <p className="why-eyebrow">Why us</p>
                <h2 className="why-headline">Why <em>Choose Us</em></h2>
              </div>
              <p className="why-header-sub">Six years of crafting spaces that stay beautiful — with zero upkeep.</p>
            </div>
            <div className="why-grid">
              {reasons.map((r, i) => (
                <div key={i} className="why-card">
                  <div className="why-card-stat">{r.stat}</div>
                  <div className="why-card-stat-label">{r.statLabel}</div>
                  <p className="why-card-title">{r.title}</p>
                  <p className="why-card-desc">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>*/}

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="cta-bg-text">Haven</div>
          <div className="cta-inner">
            <p className="cta-eyebrow">Transform Your Space</p>
            <h2 className="cta-headline">
              Let's bring <em>greenery</em><br />to your world
            </h2>
            <p className="cta-sub">
              Whether it's a cozy home corner or a full commercial lobby — we'll design, source, and install the perfect greenery for you.
            </p>
            <div className="cta-actions">
              <a href="#footer" className="cta-btn-primary">Get in Touch</a>
              <a href="/products-services" className="cta-btn-ghost">View Our Work</a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}