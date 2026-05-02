"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [ctaPulse, setCtaPulse] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setCtaPulse(true);
    setTimeout(() => setCtaPulse(false), 550);
    const footer = document.getElementById("footer");
    if (footer) {
      const top = footer.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const services = [
    {
      num: "01",
      name: "Artificial Grass",
      desc: "Low-maintenance turf for lobbies, yards, and sports areas.",
      img: "https://cdn.thewirecutter.com/wp-content/media/2021/07/synthetic-lawn-2048px-802551536-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
      href: "/product-collections/grass",
      tag: "",
    },
    {
      num: "02",
      name: "Potted Plants & Trees",
      desc: "Curated planters for balconies, entrances, and lobbies.",
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1719266906-live-majesty-palm-plant-w-grow-pot-xl-6679ee546c94b.jpg?crop=0.803xw:1.00xh;0.0994xw,0&resize=980:",
      href: "/product-collections/potted-plants",
      tag: "",
    },
    {
      num: "03",
      name: "Wall Greens",
      desc: "Vertical gardens for homes, restaurants, and offices.",
      img: "/services-overview/p19.jpg",
      href: "/product-collections/wall-greens",
      tag: "",
    },
    {
      num: "04",
      name: "Planter Boxes",
      desc: "Elegant greenery for offices and conference rooms.",
      img: "/services-overview/p1.jpg",
      href: "/product-collections/planter-box",
      tag: "",
    },
  ];

  const steps = [
    {
      label: "Consultation",
      sub: "We listen to your vision, understand your goals, and discuss the best greenery solutions for your space.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      label: "Site Visit",
      sub: "Our team visits your location to measure the space, assess conditions, and craft a tailored design plan.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      label: "Installation",
      sub: "We professionally install everything on-site — clean, fast, and seamless. Or supply premium materials ready for you.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3L4 7v5c0 4.5 3.5 8.5 8 9.5 4.5-1 8-5 8-9.5V7L12 3z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
  ];


  return (
    <main>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,200;1,9..40,300;1,9..40,400&display=swap");

        :root {
          --ink:       #0d120b;
          --bark:      #1c2419;
          --moss:      #2e3d29;
          --fern:      #4a6741;
          --sage:      #7a9970;
          --mist:      #b5c8ae;
          --ivory:     #f2ede4;
          --parchment: #e8e0d2;
          --cream:     #f7f3ec;
          --gold:      #b89a5a;
          --gold-lt:   #d4b97a;
          --text:      #1c2419;
          --muted:     #5a6b52;
          --faint:     #8fa083;
          --serif:     "DM Sans", sans-serif;
          --sans:      "DM Sans", sans-serif;
          --border:    rgba(74,103,65,0.12);
          --gray-lt:   #f7f7f7;
          --gray-md:   #eeeeee;
          --forest:    #2d4a27;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        html, body { overflow-x: hidden; background: var(--ink); }
        .rh { font-family: var(--sans); }

        /* ─── HERO ─────────────────────────────────────────── */
        .hero {
          position: relative;
          height: 100svh;
          min-height: 680px;
          background: var(--ink);
          overflow: hidden;
        }

        /* left panel */
        .hero-left {
          position: relative;
          z-index: 4;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 72px 80px 72px;
          background: none;
        }
        .hero-left::after { display: none; }

        /* botanical SVG decoration */
        .hero-deco {
          position: absolute;
          top: -60px; right: -40px;
          width: 320px; height: 420px;
          opacity: 0.04;
          pointer-events: none;
        }

        .hero-brand {
          font-family: var(--sans);
          font-size: 10px;
          letter-spacing: 0.45em;
          text-transform: uppercase;
          color: var(--sage);
          font-weight: 300;
          margin-bottom: 52px;
          opacity: ${heroLoaded ? 1 : 0};
          transform: translateY(${heroLoaded ? 0 : 12}px);
          transition: all 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .hero-brand::before { display: none; }

        .hero-title {
          font-family: var(--serif);
          font-weight: 300;
          font-size: clamp(3rem, 5vw, 5.4rem);
          line-height: 1.02;
          letter-spacing: -0.01em;
          color: var(--ivory);
          margin-bottom: 32px;
          opacity: ${heroLoaded ? 1 : 0};
          transform: translateY(${heroLoaded ? 0 : 20}px);
          transition: all 1s cubic-bezier(0.22,1,0.36,1) 0.25s;
        }
        .hero-title em {
          font-style: italic;
          color: var(--mist);
          font-weight: 300;
        }

        .hero-sub {
          font-family: var(--sans);
          font-size: 13px;
          font-weight: 300;
          color: rgba(181,200,174,0.55);
          line-height: 1.9;
          max-width: 300px;
          margin-bottom: 48px;
          letter-spacing: 0.01em;
          opacity: ${heroLoaded ? 1 : 0};
          transform: translateY(${heroLoaded ? 0 : 16}px);
          transition: all 1s cubic-bezier(0.22,1,0.36,1) 0.4s;
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 20px;
          opacity: ${heroLoaded ? 1 : 0};
          transform: translateY(${heroLoaded ? 0 : 12}px);
          transition: all 1s cubic-bezier(0.22,1,0.36,1) 0.55s;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 28px;
          background: var(--forest);
          border: none;
          color: #fff;
          font-family: var(--sans);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 9999px;
          transition: background 0.3s, transform 0.25s, box-shadow 0.3s;
          cursor: pointer;
          white-space: nowrap;
        }
        .btn-primary:hover {
          background: var(--forest);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.15);
        }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--sans);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--forest);
          text-decoration: none;
          padding: 12px 28px;
          border: 1px solid rgba(45,74,39,0.3);
          border-radius: 9999px;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.25s;
          white-space: nowrap;
        }
        .btn-outline:hover {
          border-color: var(--forest);
          box-shadow: 0 10px 28px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }

        /* right panel - full bleed image */
        .hero-right {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
        }
        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.75) brightness(0.55);
          transform: scale(1.04);
          animation: heroZoom 12s ease-out forwards;
        }
        @keyframes heroZoom {
          from { transform: scale(1.04); }
          to   { transform: scale(1.0); }
        }
        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right, rgba(13,18,11,0.82) 0%, rgba(13,18,11,0.4) 55%, rgba(13,18,11,0.15) 100%),
            linear-gradient(to top, rgba(13,18,11,0.75) 0%, transparent 50%);
          z-index: 1;
        }

        /* floating badge */
        .hero-badge {
          position: absolute;
          bottom: 48px;
          right: 64px;
          z-index: 5;
          background: var(--gold);
          color: var(--ink);
          padding: 14px 24px;
          border-radius: 2px;
          font-family: var(--serif);
          font-size: 13px;
          font-style: italic;
          font-weight: 400;
          letter-spacing: 0.03em;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }

        /* scroll hint */
        .hero-scroll {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: rgba(181,200,174,0.3);
          font-family: var(--sans);
          font-size: 8px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 300;
        }
        .scroll-line {
          width: 0.5px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(181,200,174,0.3), transparent);
          animation: scrollPulse 2.4s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.7; transform: scaleY(1.1); }
        }


        /* ─── ABOUT ─────────────────────────────────────────── */
        .about-section {
          background: var(--gray-lt);
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100svh;
        }
        .about-img-col {
          position: relative;
          overflow: hidden;
        }
        .about-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.75);
        }
        .about-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent 60%, var(--gray-lt));
        }
        .about-text-col {
          padding: 140px 72px 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .label-tag {
          font-family: var(--sans);
          font-size: 10px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: var(--fern);
          font-weight: 400;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .label-tag::before { display: none; }
        .about-headline {
          font-family: var(--serif);
          font-size: clamp(2.8rem, 5vw, 5rem);
          font-weight: 400;
          line-height: 1.18;
          color: var(--ink);
          margin-bottom: 28px;
          letter-spacing: -0.01em;
        }
        .about-headline em {
          font-style: italic;
          color: var(--fern);
        }
        h2.about-headline {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
        }
        .about-body {
          font-family: var(--sans);
          font-size: 16px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.95;
          margin-bottom: 36px;
          max-width: 380px;
        }
        .about-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .text-link {
          font-family: var(--sans);
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--fern);
          text-decoration: none;
          font-weight: 400;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: gap 0.3s;
        }
        .text-link::after { content: "→"; }
        .text-link:hover { gap: 16px; }

        /* ─── SERVICES ──────────────────────────────────────── */
        .services-section {
          background: var(--gray-md);
          padding: 100px 72px;
        }
        .section-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: flex-end;
          margin-bottom: 56px;
          gap: 24px;
        }
        .section-label {
          font-family: var(--sans);
          font-size: 10px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: var(--sage);
          font-weight: 300;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-label::before { display: none; }
        .section-title {
          font-family: var(--serif);
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 300;
          color: var(--ink);
          line-height: 1.06;
          letter-spacing: -0.01em;
        }
        .section-title em {
          font-style: italic;
          color: var(--fern);
        }
        .view-all {
          font-family: var(--sans);
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
          font-weight: 300;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: color 0.3s, gap 0.3s;
          padding-bottom: 4px;
        }
        .view-all::after { content: "→"; }
        .view-all:hover { color: var(--fern); gap: 16px; }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .svc-card {
          position: relative;
          overflow: hidden;
          display: block;
          text-decoration: none;
          aspect-ratio: 3/4;
          background: var(--gray-md);
          cursor: pointer;
          border-radius: 10px;
        }
        .svc-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.85);
          transition: transform 0.8s cubic-bezier(0.22,1,0.36,1), filter 0.6s;
        }
        .svc-card:hover .svc-card-img {
          transform: scale(1.08);
          filter: saturate(1);
        }
        .svc-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,17,8,0.82) 0%, rgba(10,17,8,0.3) 55%, transparent 80%);
          z-index: 1;
          transition: opacity 0.4s;
        }
        .svc-tag {
          position: absolute;
          top: 18px;
          left: 18px;
          z-index: 3;
          font-family: var(--sans);
          font-size: 8px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--ink);
          background: var(--gold);
          padding: 4px 11px;
          border-radius: 1px;
          font-weight: 400;
        }
        .svc-card-body {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: 28px 24px 26px;
        }
        .svc-num {
          font-family: var(--sans);
          font-size: 9px;
          letter-spacing: 0.25em;
          color: rgba(255,255,255,0.7);
          font-weight: 400;
          margin-bottom: 8px;
          display: block;
        }
        .svc-name {
          font-family: var(--serif);
          font-size: 18px;
          font-weight: 400;
          color: #fff;
          line-height: 1.18;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .svc-desc {
          font-family: var(--sans);
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          max-width: 200px;
        }
        .svc-arrow {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 3;
          width: 34px;
          height: 34px;
          border: 0.5px solid rgba(255,255,255,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          font-size: 14px;
          opacity: 0;
          transform: translateY(6px) rotate(-45deg);
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .svc-card:hover .svc-arrow { opacity: 1; transform: translateY(0) rotate(0deg); }

        /* ─── BEFORE/AFTER ──────────────────────────────────── */
        .ba-section {
          background: var(--gray-lt);
          padding: 100px 72px;
        }
        .ba-inner {
          max-width: 1000px;
          margin: 0 auto;
        }
        .ba-header-wrap {
          margin-bottom: 48px;
        }
        .ba-container {
          position: relative;
          width: 100%;
          border-radius: 10px;
          cursor: col-resize;
          user-select: none;
          -webkit-user-select: none;
          aspect-ratio: 21/9;
          background: #111;
          overflow: hidden;
        }
        .ba-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
        }
        .ba-after {
          position: absolute;
          inset: 0;
          will-change: clip-path;
        }
        .ba-after img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
        }
        .ba-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.6);
          z-index: 10;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .ba-handle {
          position: absolute;
          top: 50%;
          background: #fff !important;
          width: 48px;
          height: 48px;
          background: var(--gold);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 11;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: col-resize;
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
          transition: transform 0.2s ease, box-shadow 0.2s;
        }
        .ba-handle:hover {
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 8px 40px rgba(0,0,0,0.2);
        }
        .ba-handle-icon {
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .ba-arr { width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; }
        .ba-arr-l { border-right: 7px solid var(--ink); }
        .ba-arr-r { border-left: 7px solid var(--ink); }
        .ba-label-pill {
          position: absolute;
          bottom: 20px;
          font-family: var(--sans);
          font-size: 8px;
          font-weight: 400;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(10px);
          padding: 6px 14px;
          border-radius: 9999px;
          z-index: 8;
          pointer-events: none;
          border: 0.5px solid rgba(255,255,255,0.12);
        }
        .ba-lb { left: 20px; }
        .ba-la { right: 20px; }

        /* ─── HOW WE WORK ───────────────────────────────────── */
        .hw-section {
          background: var(--gray-md);
          padding: 100px 72px;
        }
        .hw-header { margin-bottom: 16px; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .hw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }
        .hw-step {
          background: var(--gray-md);
          padding: 52px 40px;
          position: relative;
          transition: background 0.4s;
        }
        .hw-step:hover { background: var(--gray-md); }
        .hw-step-num {
          font-family: var(--serif);
          font-size: 64px;
          font-weight: 300;
          color: rgba(74,103,65,0.08);
          line-height: 1;
          position: absolute;
          top: 28px;
          right: 32px;
          letter-spacing: -0.03em;
          font-style: italic;
          pointer-events: none;
        }
        .hw-icon-wrap {
          width: 52px;
          height: 52px;
          border: 0.5px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--fern);
          margin-bottom: 28px;
          transition: all 0.4s;
          background: var(--gray-md);
        }
        .hw-step:hover .hw-icon-wrap {
          background: var(--fern);
          color: #fff;
          border-color: var(--fern);
          box-shadow: 0 8px 28px rgba(74,103,65,0.18);
        }
        .hw-step-label {
          font-family: var(--serif);
          font-size: 22px;
          font-weight: 400;
          color: var(--text);
          margin-bottom: 14px;
          letter-spacing: -0.01em;
        }
        .hw-step-sub {
          font-family: var(--sans);
          font-size: 13px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.9;
        }

        /* ─── CTA ───────────────────────────────────────────── */
        .cta-section {
          background: var(--gray-lt);
          padding: 90px 60px;
          position: relative;
          overflow: hidden;
        }
        .cta-bg-text {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--sans);
          font-size: 22vw;
          font-weight: 300;
          color: rgba(45,74,39,0.04);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }
        .cta-inner {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          position: relative;
          z-index: 1;
        }
        .cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--sans);
          font-size: 10px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--sage);
          font-weight: 400;
        }
        .cta-eyebrow::before, .cta-eyebrow::after { display: none; }
        .cta-headline {
          font-family: var(--serif);
          font-size: clamp(3rem, 4vw, 4.8rem);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .cta-headline em {
          font-style: italic;
          color: var(--fern);
        }
        .cta-sub {
          font-family: var(--sans);
          font-size: 13px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.7;
          max-width: 400px;
        }
        .cta-actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; justify-content: center; margin-top: 6px; }
        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 28px;
          background: var(--forest);
          border: none;
          color: #fff;
          font-family: var(--sans);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 9999px;
          transition: background 0.3s, transform 0.25s, box-shadow 0.3s;
          cursor: pointer;
        }
        .cta-btn-primary:hover {
          background: var(--fern);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.15);
        }
        @keyframes ctaPulse {
          0%   { transform: scale(0.97); }
          45%  { transform: scale(1.04); }
          100% { transform: scale(1); }
        }
        .cta-btn-primary.pulse { animation: ctaPulse 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        .cta-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 26px;
          background: transparent;
          border: 0.5px solid rgba(45,74,39,0.25);
          color: var(--muted);
          font-family: var(--sans);
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 9999px;
          transition: all 0.3s;
          cursor: pointer;
        }
        .cta-btn-ghost:hover {
          border-color: var(--forest);
          color: var(--forest);
          transform: translateY(-2px);
        }

        /* ─── RESPONSIVE ────────────────────────────────────── */
        @media (max-width: 1100px) {
          .services-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 900px) {
          /* ── Landing hero: full-bleed image, text at bottom ── */
          .about-section {
            display: block;
            position: relative;
            min-height: 100svh;
          }
          .about-img-col {
            position: absolute;
            inset: 0;
            height: 100%;
            overflow: hidden;
          }
          .about-img {
            top: 0;
            height: 100%;
            filter: saturate(0.82);
          }
          .about-img-overlay {
            background: linear-gradient(to top,
              rgba(247,247,247,0.92) 0%,
              rgba(247,247,247,0.55) 28%,
              transparent 60%);
          }
          .about-text-col {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            width: 100%;
            min-height: unset;
            margin-left: 0;
            padding: 0 32px 68px;
            justify-content: flex-end;
            z-index: 2;
          }
          .about-section .label-tag {
            color: var(--fern);
            font-size: 9px;
            letter-spacing: 0.44em;
            margin-bottom: 20px;
          }
          .about-section .about-headline {
            color: var(--ink);
            font-size: clamp(2.6rem, 8vw, 3.4rem);
            line-height: 1.06;
            letter-spacing: -0.02em;
            margin-bottom: 16px;
          }
          .about-section .about-headline em { color: var(--fern); }
          .about-section .about-body {
            color: var(--muted);
            font-size: 13px;
            line-height: 1.85;
            margin-bottom: 0;
            max-width: 300px;
          }

          /* ── Other sections ── */
          .about-headline { font-size: 1.25rem; margin-bottom: 12px; }
          .about-body { font-size: 11px; line-height: 1.7; margin-bottom: 20px; max-width: 100%; }
          .label-tag { font-size: 8px; margin-bottom: 14px; }
          .btn-primary { padding: 9px 18px; font-size: 9px; }
          .btn-outline { padding: 9px 18px; font-size: 9px; }
          .about-ctas { gap: 14px; flex-wrap: wrap; }
          .services-section { padding: 72px 32px; }
          .services-grid { grid-template-columns: 1fr 1fr; gap: 6px; }
          .svc-card { aspect-ratio: 4/5; border-radius: 10px; }
          .svc-card-body { padding: 16px 14px 18px; }
          .svc-num { font-size: 8px; margin-bottom: 4px; }
          .svc-name { font-size: 18px; margin-bottom: 6px; }
          .svc-desc { font-size: 13px; line-height: 1.6; }
          .svc-arrow { width: 26px; height: 26px; top: 12px; right: 12px; font-size: 11px; }
          .ba-section { padding: 72px 32px; }
          .ba-container { aspect-ratio: 4/3; }
          .hw-section { padding: 72px 32px; }
          .hw-grid { grid-template-columns: 1fr; }
          .cta-section { padding: 80px 32px; }
        }

        @media (max-width: 600px) {
          .about-text-col { padding: 0 24px 60px; }
          .about-section .about-headline { font-size: 13vw; }
          .about-section .about-body { font-size: 15.5px; max-width: 320px; }
          .services-section { padding: 56px 16px; }
          .services-grid { grid-template-columns: 1fr; gap: 10px; max-width: 360px; margin: 0 auto; }
          .svc-card { aspect-ratio: 3/4; border-radius: 10px; }
          .svc-card-body { padding: 12px 12px 14px; }
          .svc-name { font-size: 20px; }
          .svc-desc { font-size: 14px; line-height: 1.6; }
          .section-header { grid-template-columns: 1fr; }
          .cta-headline { font-size: 2.2rem; }
        }
      `}</style>

      <div className="rh">



        {/* ── ABOUT ── */}
        <section className="about-section">
          <div className="about-img-col">
            <img
              className="about-img"
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?w=900&q=80"
              alt="Lush artificial garden installation"
            />
            <div className="about-img-overlay" />
          </div>
          <div className="about-text-col">
            <p className="label-tag">Rich Haven</p>
            <h1 className="about-headline">
              The Garden<br />That Never<br /> Fades
            </h1>
            <p className="about-body">
              Greenery made to look natural, stay flawless, and bring lasting beauty. No maintenance needed.
            </p>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="services-section">
          <div className="section-header">
            <div>
              <p className="section-label">What we offer</p>
              <h2 className="section-title">Product<em> Collections</em></h2>
            </div>
            <a href="/product-collections" className="view-all">View all</a>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <a key={i} href={s.href} className="svc-card">
                <img className="svc-card-img" src={s.img} alt={s.name} />
                {s.tag && <span className="svc-tag">{s.tag}</span>}
                <div className="svc-card-body">
                  <h3 className="svc-name">{s.name}</h3>
                  <p className="svc-desc">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── BEFORE / AFTER ── */}
        <section className="ba-section">
          <div className="ba-inner">
          <div className="ba-header-wrap" style={{ textAlign: "center" }}>
            <p className="section-label" style={{ color: "var(--fern)", justifyContent: "center" }}>See our work</p>
            <h2 className="about-headline" style={{ color: "var(--ink)" }}>
              A Glimpse of <em>Our Craft</em>
            </h2>
          </div>
          <div className="ba-container" style={{ cursor: "default" }}>
            <video
              className="ba-img"
              autoPlay
              muted
              loop
              playsInline
              src="/RichHaven.mp4"
              style={{ objectFit: "cover" }}
            />
          </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="hw-section">
          <div className="hw-header">
            <p className="label-tag">From idea to reality</p>
            <h2 className="about-headline">How We <em>Work</em></h2>
          </div>
          <div className="hw-grid">
            {steps.map((step, i) => (
              <div key={i} className="hw-step">
                <span className="hw-step-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="hw-icon-wrap">{step.icon}</div>
                <p className="hw-step-label">{step.label}</p>
                <p className="hw-step-sub">{step.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="cta-bg-text">Haven</div>
          <div className="cta-inner">
            <p className="cta-eyebrow">Let's Work Together</p>
            <h2 className="cta-headline">
              Transform Your <em>Space</em>
            </h2>
            <p className="cta-sub">
              Whether it's a cozy home corner or a full commercial lobby — we'll source, and install the perfect greenery for you.
            </p>
            <div className="cta-actions">
              <button
                onClick={scrollToContact}
                className={`cta-btn-primary${ctaPulse ? " pulse" : ""}`}
              >
                Get in Touch
              </button>
              <a href="/product-collections" className="cta-btn-ghost">Product collections</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}