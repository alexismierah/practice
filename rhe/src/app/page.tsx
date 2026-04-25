"use client";

import { useRef, useState, useCallback } from "react";

export default function Home() {
  const [sliderPos, setSliderPos] = useState(50);
  const [ctaPulse, setCtaPulse] = useState(false);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

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
      href: "/products-services/grass",
    },
    {
      num: "02",
      name: "Potted Plants & Trees",
      desc: "Curated planters for balconies, entrances, and lobbies.",
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1719266906-live-majesty-palm-plant-w-grow-pot-xl-6679ee546c94b.jpg?crop=0.803xw:1.00xh;0.0994xw,0&resize=980:",
      href: "/products-services/potted-plants",
    },
    {
      num: "03",
      name: "Wall Greens",
      desc: "Vertical gardens for homes, restaurants, and offices.",
      img: "/services-overview/p19.jpg",
      href: "/products-services/wall-greens",
    },
    {
      num: "04",
      name: "Planter Boxes",
      desc: "Elegant greenery for offices and conference rooms.",
      img: "/services-overview/p1.jpg",
      href: "/products-services/planter-box",
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

  const getPos = (e: MouseEvent | TouchEvent, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const clientX = (e as TouchEvent).touches
      ? (e as TouchEvent).touches[0].clientX
      : (e as MouseEvent).clientX;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(Math.max(pct, 2), 98);
  };

  const onSliderMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      e.preventDefault();
      isDragging.current = true;
      const el = sliderRef.current;
      const onMove = (ev: MouseEvent | TouchEvent) => {
        if (isDragging.current) setSliderPos(getPos(ev, el!));
      };
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
    },
    []
  );

  return (
    <main>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,200;1,9..40,300;1,9..40,400&display=swap");

        :root {
          --sage: #8fa882;
          --forest: #2d4a27;
          --deep: #1a2e16;
          --cream: #efefef;
          --warm-white: #f7f7f7;
          --text: #1c1e19;
          --text-muted: #6b7060;
          --text-faint: #a8ad9e;
          --border: rgba(45,74,39,0.10);
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
          object-fit: cover; filter: brightness(0.38) saturate(0.65);
          transform: scale(1.0);
        }
        .hero-grain {
          position: absolute; inset: 0; z-index: 2; opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }
        .scrim-top { position: absolute; inset: 0; z-index: 3; background: linear-gradient(170deg, rgba(10,22,8,0.5) 0%, transparent 55%); }
        .scrim-bot { position: absolute; inset: 0; z-index: 3; background: linear-gradient(to top, rgba(10,22,8,0.94) 0%, rgba(10,22,8,0.22) 42%, transparent 66%); }
        .hero-body {
          position: relative; z-index: 5; height: 100%;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 0 72px 84px;
        }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 14px;
          font-size: 10px; letter-spacing: 0.36em; text-transform: uppercase;
          color: rgba(255,255,255,0.65); font-weight: 400; margin-bottom: 26px;
        }
        .hero-grid { display: grid; grid-template-columns: 1fr auto; align-items: flex-end; gap: 64px; }
        .hero-title {
          font-family: "DM Sans", sans-serif;
          font-weight: 300; font-size: clamp(3.4rem, 6.5vw, 7rem);
          line-height: 0.94; color: #fff; letter-spacing: -0.02em;
          text-shadow: 0 2px 24px rgba(0,0,0,0.18);
        }
        .hero-title em { font-style: italic; font-weight: 200; color: rgba(194,220,189,0.86); }
        .hero-right { display: flex; flex-direction: column; align-items: flex-end; gap: 32px; padding-bottom: 10px; }
        .hero-sub { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.88; font-weight: 300; max-width: 200px; text-align: right; letter-spacing: 0.01em; }
        .hero-actions { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
        .btn-ghost-hero {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 11px 26px;
          background: rgba(255,255,255,0.06); border: 0.5px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          color: rgba(255,255,255,0.8); font-size: 10px; font-weight: 400;
          letter-spacing: 0.22em; text-transform: uppercase; text-decoration: none;
          border-radius: 9999px; transition: all 0.45s cubic-bezier(0.22,1,0.36,1);
        }
        .btn-ghost-hero:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.32);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.16);
        }

        /* ── ABOUT ── */
        .about-wrap { background: var(--warm-white); padding: 80px 72px; }
        .about-inner { max-width: 920px; margin: 0 auto; text-align: center; }
        .about-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--sage); margin-bottom: 22px; font-weight: 400;
        }
        .about-quote {
          font-size: clamp(1.05rem, 2.8vw, 1.75rem);
          font-weight: 300; line-height: 1.72; color: var(--text-muted);
          font-style: italic;
        }
        .about-quote em { font-style: normal; color: var(--text); font-weight: 300; }
        .about-foot {
          margin-top: 36px; padding-top: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .learn-more-link {
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--text-muted); text-decoration: none; font-weight: 400;
          display: flex; align-items: center; gap: 8px; transition: color 0.3s;
        }
        .learn-more-link::after { content: "→"; transition: transform 0.3s; }
        .learn-more-link:hover { color: var(--forest); }
        .learn-more-link:hover::after { transform: translateX(4px); }

        /* ── SERVICES ── */
        .rh-services { background: var(--cream); padding: 100px 72px; }
        .rh-s-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 44px; }
        .section-eyebrow {
          font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--sage); margin-bottom: 12px; font-weight: 400;
          display: flex; align-items: center; gap: 14px;
        }
        .section-headline {
          font-family: "DM Sans", sans-serif;
          font-size: clamp(1.6rem, 2.8vw, 2.2rem);
          font-weight: 300; line-height: 1.0; letter-spacing: -0.015em; color: var(--text);
        }
        .section-headline em { font-style: italic; font-weight: 200; color: var(--forest); }
        .view-all-link {
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--text-muted); text-decoration: none; font-weight: 400;
          display: flex; align-items: center; gap: 10px; transition: color 0.3s;
        }
        .view-all-link::after { content: "→"; transition: transform 0.3s; }
        .view-all-link:hover { color: var(--forest); }
        .view-all-link:hover::after { transform: translateX(4px); }
        .rh-s-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .rh-s-card {
          border-radius: 10px; overflow: hidden; display: block; cursor: pointer;
          text-decoration: none; position: relative; aspect-ratio: 3/4; background: #111;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease;
        }
        .rh-s-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 32px 64px rgba(0,0,0,0.14); }
        .rh-s-card-img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); filter: saturate(0.8);
        }
        .rh-s-card:hover .rh-s-card-img { transform: scale(1.06); filter: saturate(1); }
        .rh-s-card::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(8,16,6,0.92) 0%, rgba(8,16,6,0.3) 40%, rgba(8,16,6,0.15) 65%, transparent 85%);
          z-index: 1; border-radius: inherit;
        }
        .rh-s-card-arrow {
          position: absolute; top: 18px; right: 18px; z-index: 3;
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(255,255,255,0.08); border: 0.5px solid rgba(255,255,255,0.14);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.65); font-size: 13px;
          opacity: 0; transform: translateY(5px);
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .rh-s-card:hover .rh-s-card-arrow { opacity: 1; transform: translateY(0); }
        .rh-s-card-body { position: absolute; bottom: 0; left: 0; right: 0; z-index: 2; padding: 28px 22px 22px; }
        .rh-s-card-num {
          font-size: 11px; color: var(--warm-white); letter-spacing: 0.22em; font-weight: 500;
          margin-bottom: 8px; display: block; opacity: 1;
        }
        .rh-s-card-name { font-size: 15px; font-weight: 400; color: #fff; line-height: 1.2; letter-spacing: -0.01em; margin-bottom: 7px; }
        .rh-s-card-desc { font-size: 11px; font-weight: 300; color: rgba(255,255,255,0.52); line-height: 1.65; }

        /* ── BEFORE / AFTER ── */
        .ba-section { background: var(--warm-white); padding: 100px 72px; }
        .ba-inner { max-width: 1000px; margin: 0 auto; }
        .ba-header { margin-bottom: 40px; }
        .ba-container {
          position: relative; width: 100%; border-radius: 14px; overflow: hidden;
          cursor: col-resize; user-select: none; -webkit-user-select: none;
          aspect-ratio: 16/9; background: #111;
          box-shadow: 0 24px 80px rgba(0,0,0,0.08);
        }
        .ba-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }
        .ba-after { position: absolute; inset: 0; overflow: hidden; }
        .ba-after img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }
        .ba-divider { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(255,255,255,0.8); z-index: 10; transform: translateX(-50%); pointer-events: none; }
        .ba-handle {
          position: absolute; top: 50%; width: 40px; height: 40px;
          background: #fff; border-radius: 50%; transform: translate(-50%, -50%); z-index: 11;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 24px rgba(0,0,0,0.14); cursor: col-resize;
          transition: transform 0.2s ease, box-shadow 0.2s;
        }
        .ba-handle:hover { transform: translate(-50%, -50%) scale(1.08); box-shadow: 0 8px 32px rgba(0,0,0,0.2); }
        .ba-handle-arrows { display: flex; align-items: center; gap: 4px; }
        .ba-arrow { width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; }
        .ba-arrow-left { border-right: 7px solid var(--text); }
        .ba-arrow-right { border-left: 7px solid var(--text); }
        .ba-label {
          position: absolute; bottom: 14px; font-size: 9px; font-weight: 400;
          letter-spacing: 0.26em; text-transform: uppercase; color: rgba(255,255,255,0.82);
          background: rgba(0,0,0,0.3); backdrop-filter: blur(12px);
          padding: 5px 13px; border-radius: 9999px; z-index: 8; pointer-events: none;
          border: 0.5px solid rgba(255,255,255,0.1);
        }
        .ba-label-before { left: 14px; }
        .ba-label-after { right: 14px; }

        /* ── HOW WE WORK ── */
        .hw-section { background: var(--cream); padding: 100px 72px; }
        .hw-inner { max-width: 1000px; margin: 0 auto; }
        .hw-header { margin-bottom: 60px; text-align: center; }
        .hw-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; position: relative; }
        .hw-steps::before {
          content: ""; position: absolute; top: 36px; left: 15%; right: 15%;
          height: 0.5px;
          background: linear-gradient(to right, transparent, var(--border), var(--border), transparent);
          z-index: 0;
        }
        .hw-step { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 24px; }
        .hw-step-bubble {
          width: 72px; height: 72px; border-radius: 50%;
          background: var(--warm-white); border: 0.5px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--forest); margin-bottom: 28px; position: relative; z-index: 1;
          transition: all 0.4s ease;
        }
        .hw-step:hover .hw-step-bubble { background: var(--forest); color: #fff; border-color: var(--forest); transform: scale(1.06); box-shadow: 0 12px 32px rgba(45,74,39,0.15); }
        .hw-step-num { font-size: 9px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--text-faint); font-weight: 400; margin-bottom: 12px; }
        .hw-step-label { font-size: 16px; font-weight: 400; color: var(--text); letter-spacing: -0.01em; margin-bottom: 12px; line-height: 1.1; }
        .hw-step-sub { font-size: 13px; font-weight: 300; color: var(--text-muted); line-height: 1.8; max-width: 210px; margin: 0 auto; }

        /* ── CTA ── */
        .cta-section { background: var(--warm-white); padding: 110px 72px; position: relative; overflow: hidden; }
        .cta-bg-text {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          font-family: "DM Sans", sans-serif; font-size: 22vw; font-weight: 200;
          color: rgba(45,74,39,0.03); white-space: nowrap; pointer-events: none;
          user-select: none; line-height: 1;
        }
        .cta-inner {
          max-width: 640px; margin: 0 auto; text-align: center;
          display: flex; flex-direction: column; align-items: center; gap: 28px;
          position: relative; z-index: 1;
        }
        .cta-eyebrow {
          display: inline-flex; align-items: center; gap: 16px;
          font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--sage); font-weight: 400;
        }
        .cta-headline {
          font-family: "DM Sans", sans-serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 300; line-height: 1.12; letter-spacing: -0.022em; color: var(--text);
        }
        .cta-headline em { font-style: italic; font-weight: 200; color: var(--forest); }
        .cta-sub { font-size: 14px; font-weight: 300; color: var(--text-muted); line-height: 1.88; max-width: 400px; }
        .cta-actions { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; justify-content: center; margin-top: 8px; }
        .cta-btn-primary {
          display: inline-flex; align-items: center; gap: 10px; padding: 14px 36px;
          background: var(--forest); border: none; color: #fff;
          font-size: 10px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase;
          text-decoration: none; border-radius: 9999px; transition: all 0.35s; cursor: pointer;
        }
        .cta-btn-primary:hover { background: var(--deep); transform: translateY(-2px); box-shadow: 0 12px 36px rgba(45,74,39,0.22); }
        .cta-btn-primary:active { transform: translateY(0) scale(0.96); }
        @keyframes ctaPulse {
          0%   { transform: translateY(-2px) scale(0.96); box-shadow: 0 0 0 0 rgba(45,74,39,0.4); }
          45%  { transform: translateY(-3px) scale(1.03); box-shadow: 0 0 0 14px rgba(45,74,39,0); }
          100% { transform: translateY(-2px) scale(1); box-shadow: 0 12px 36px rgba(45,74,39,0.22); }
        }
        .cta-btn-primary.pulse { animation: ctaPulse 0.55s cubic-bezier(0.22,1,0.36,1) forwards; }
        .cta-btn-ghost {
          display: inline-flex; align-items: center; gap: 10px; padding: 14px 30px;
          background: transparent; border: 0.5px solid rgba(45,74,39,0.18);
          color: var(--text-muted); font-size: 10px; font-weight: 400;
          letter-spacing: 0.22em; text-transform: uppercase; text-decoration: none;
          border-radius: 9999px; transition: all 0.35s; cursor: pointer;
        }
        .cta-btn-ghost:hover { border-color: var(--forest); color: var(--forest); transform: translateY(-2px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .rh-s-grid { grid-template-columns: repeat(2, 1fr); }
          .wa-grid { grid-template-columns: 1fr; }
          .wa-top { grid-template-columns: 1fr; gap: 24px; }
          .features-strip { flex-wrap: wrap; }
          .features-strip-item { flex: 1 1 calc(50% - 1px); min-width: 0; border-bottom: 0.5px solid var(--border); }
        }
        @media (max-width: 900px) {
          .hero-body { padding: 0 32px 60px; }
          .hero-grid { grid-template-columns: 1fr; gap: 28px; }
          .hero-right { align-items: flex-start; }
          .hero-sub { text-align: left; max-width: 100%; }
          .hero-actions { align-items: flex-start; flex-direction: row; flex-wrap: wrap; }
          .about-wrap, .ba-section, .rh-services, .hw-section,
          .why-section, .cta-section, .wa-section { padding-left: 32px; padding-right: 32px; }
          .features-strip { padding: 0 32px; }
          .hw-steps { grid-template-columns: 1fr; gap: 32px; }
          .hw-steps::before { display: none; }
          .wa-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .hero-title { font-size: 2.9rem; }
          .rh-s-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .rh-s-header { flex-direction: column; align-items: flex-start; gap: 14px; }
          .features-strip { flex-direction: column; }
          .features-strip-item { border-right: none; padding-left: 0; padding-right: 0; }
          .wa-grid { grid-template-columns: 1fr; }
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
                Bring Nature <br />to Your Space
              </h1>
              <div className="hero-right">
                <p className="hero-sub">Greenery that looks real, lasts forever, and needs zero maintenance.</p>
                <div className="hero-actions">
                  <a href="/products-services" className="btn-ghost-hero">Explore Greens</a>
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
              We believe beautiful spaces shouldn't come with a <em>maintenance bill</em>.
              Our artificial gardens are crafted to look indistinguishable from the real thing —
              so your space stays <em>lush and vibrant</em> every single day, without any effort on your part.
            </p>
            <div className="about-foot">
              <a href="/about" className="learn-more-link">Our story</a>
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
            <a href="/products-services" className="view-all-link">View all</a>
          </div>
          <div className="rh-s-grid">
            {services.map((s, i) => (
              <a key={i} href={s.href} className="rh-s-card">
                <img className="rh-s-card-img" src={s.img} alt={s.name} />
                <span className="rh-s-card-arrow">↗</span>
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
              <p className="section-eyebrow">See the transformation</p>
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
              <div
                className="ba-handle"
                style={{ left: `${sliderPos}%` }}
                onMouseDown={onSliderMouseDown}
                onTouchStart={onSliderMouseDown}
              >
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
              <p className="section-eyebrow" style={{ justifyContent: "center" }}>From idea to reality</p>
              <h2 className="section-headline">Our <em>process</em></h2>
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

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="cta-bg-text">Haven</div>
          <div className="cta-inner">
            <p className="cta-eyebrow">Ready to transform?</p>
            <h2 className="cta-headline">
              Your space deserves<br />to be <em>always green</em>
            </h2>
            <p className="cta-sub">
              Tell us about your space and we'll design the perfect greenery solution —
              from a single planter to a full garden installation.
            </p>
            <div className="cta-actions">
              <button onClick={scrollToContact} className={`cta-btn-primary${ctaPulse ? " pulse" : ""}`}>
                Get in Touch
              </button>
              <a href="/products-services" className="cta-btn-ghost">Browse Products</a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}