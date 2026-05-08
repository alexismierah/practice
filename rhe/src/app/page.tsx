"use client";

import { useState } from "react";

export default function Home() {
  const [ctaPulse, setCtaPulse] = useState(false);

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
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      label: "Site Visit",
      sub: "Our team visits your location to measure the space, assess conditions, and craft a tailored design plan.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      label: "Installation",
      sub: "We professionally install everything on-site, clean, fast, and seamless. Or supply premium materials ready for you.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3L4 7v5c0 4.5 3.5 8.5 8 9.5 4.5-1 8-5 8-9.5V7L12 3z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
  ];

  return (
    <main>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Playfair+Display:ital@1&display=swap");

        :root {
          --white:      #ffffff;
          --snow:       #fafaf8;
          --linen:      #f5f2ec;
          --linen-md:   #ede8df;
          --linen-dk:   #e2dbd0;
          --sage-lt:    #e8efe5;
          --sage-pale:  #d4e1cf;
          --sage:       #7a9e70;
          --fern:       #4d7c42;
          --forest:     #2e5c24;
          --forest-dk:  #1f4018;
          --bark:       #3a2e22;
          --gold:       #c4a35a;
          --gold-lt:    #e0c88a;
          --text:       #1e2b1a;
          --muted:      #6b7d64;
          --faint:      #9aad92;
          --border:     rgba(77,124,66,0.14);
          --border-lt:  rgba(77,124,66,0.08);
          --serif:      "DM Sans", sans-serif;
          --sans:       "DM Sans", sans-serif;
          --shadow-sm:  0 2px 12px rgba(46,92,36,0.07);
          --shadow-md:  0 8px 40px rgba(46,92,36,0.10);
          --shadow-lg:  0 20px 60px rgba(46,92,36,0.13);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        html, body { overflow-x: hidden; background: var(--snow); }
        .rh { font-family: var(--sans); }

        /* ─── PILL NAV / BREADCRUMB ─────────────────────────── */
        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--sans);
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--fern);
          font-weight: 500;
          margin-bottom: 20px;
        }
        .eyebrow-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--sage);
          flex-shrink: 0;
        }

        /* ─── ABOUT ─────────────────────────────────────────── */
        .about-section {
          background: var(--snow);
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
        }
        /* decorative cutout for the image to bleed into the text side */
        .about-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent 70%, var(--snow));
        }
        .about-text-col {
          padding: 120px 72px 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--snow);
        }

        .about-headline {
          font-family: var(--serif);
          font-size: clamp(2.8rem, 5vw, 5rem);
          font-weight: 400;
          line-height: 1.1;
          color: var(--text);
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }
        .about-headline em {
          font-style: italic;
          color: #4A6741;
        }
        .about-section .about-headline em {
          font-family: "Playfair Display", Georgia, serif;
        }
        h2.about-headline em {
          font-family: "DM Sans", sans-serif;
        }
        h2.about-headline {
          font-size: clamp(2rem, 3.2vw, 2.8rem);
          font-weight: 300;
        }
        .about-body {
          font-family: var(--sans);
          font-size: 15px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.9;
          margin-bottom: 40px;
          max-width: 360px;
        }
        .about-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .text-link {
          font-family: var(--sans);
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--fern);
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: gap 0.3s;
        }
        .text-link::after { content: "→"; }
        .text-link:hover { gap: 16px; }

        /* ─── STATS ROW ─────────────────────────────────────── */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          margin-top: 56px;
          padding-top: 40px;
          border-top: 1px solid var(--linen-md);
        }
        .stat-item {
          padding: 0 24px 0 0;
        }
        .stat-item + .stat-item {
          padding-left: 24px;
          border-left: 1px solid var(--linen-md);
        }
        .stat-num {
          font-family: var(--serif);
          font-size: 2.8rem;
          font-weight: 300;
          color: var(--text);
          line-height: 1;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }
        .stat-num em { font-style: italic; color: var(--fern); }
        .stat-label {
          font-family: var(--sans);
          font-size: 11px;
          font-weight: 300;
          color: var(--muted);
          letter-spacing: 0.04em;
        }

        /* ─── SERVICES ──────────────────────────────────────── */
        .services-section {
          background: #eeeeee;
          padding: 100px 72px;
        }
        .section-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          margin-bottom: 52px;
          gap: 24px;
        }
        .section-title {
          font-family: var(--serif);
          font-size: clamp(2rem, 3.2vw, 2.8rem);
          font-weight: 300;
          color: var(--text);
          line-height: 1.08;
          letter-spacing: -0.01em;
        }
        .section-title em {
          font-style: italic;
          color: #4A6741;
        }
        .view-all {
          font-family: var(--sans);
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--fern);
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 4px;
          white-space: nowrap;
        }
        .va-arrow { display: inline-block; transition: transform 0.3s; }
        .view-all:hover .va-arrow { transform: translateX(6px); }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .svc-card {
          position: relative;
          overflow: hidden;
          display: block;
          text-decoration: none;
          aspect-ratio: 3/4;
          background: var(--linen-md);
          cursor: pointer;
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
        }
        .svc-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.9s cubic-bezier(0.22,1,0.36,1), filter 0.6s;
          filter: saturate(0.9) brightness(0.96);
        }
        .svc-card:hover .svc-card-img {
          transform: scale(1.07);
          filter: saturate(1.05) brightness(1.0);
        }
        .svc-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top,
            rgba(15,25,12,0.78) 0%,
            rgba(15,25,12,0.22) 50%,
            rgba(15,25,12,0.0) 80%);
          z-index: 1;
          transition: opacity 0.4s;
        }
        .svc-card:hover .svc-card-overlay {
          opacity: 1.0;
        }
        .svc-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 3;
          font-family: var(--sans);
          font-size: 8px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--bark);
          background: var(--gold-lt);
          padding: 5px 12px;
          border-radius: 9999px;
          font-weight: 500;
        }
        .svc-card-body {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: 28px 22px 26px;
        }
        .svc-name {
          font-family: var(--serif);
          font-size: 20px;
          font-weight: 400;
          color: #fff;
          line-height: 1.15;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .svc-desc {
          font-family: var(--sans);
          font-size: 11.5px;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          line-height: 1.65;
          max-width: 200px;
        }

        /* ─── VIDEO / CRAFT SECTION ────────────────────────── */
        .ba-section {
          background: var(--snow);
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
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 21/9;
          background: var(--linen-md);
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

        /* ─── HOW WE WORK ───────────────────────────────────── */
        .hw-section {
          background: #eeeeee;
          padding: 100px 72px;
        }
        .hw-header { margin-bottom: 16px; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .hw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }
        .hw-step {
          background: #eeeeee;
          padding: 52px 40px;
          position: relative;
          transition: background 0.4s;
        }
        .hw-step:hover { background: #eeeeee; }
        .hw-step-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }
        .hw-step-num {
          font-family: var(--serif);
          font-size: 48px;
          font-weight: 300;
          color: rgba(74,103,65,0.18);
          line-height: 1;
          letter-spacing: -0.03em;
          font-style: italic;
          pointer-events: none;
          flex-shrink: 0;
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
          transition: all 0.4s;
          background: #eeeeee;
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
          background: var(--snow);
          padding: 110px 60px;
          position: relative;
          overflow: hidden;
        }
        /* decorative organic shape */
        .cta-watermark {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--serif);
          font-size: clamp(120px, 24vw, 260px);
          font-weight: 400;
          color: rgba(0,0,0,0.04);
          letter-spacing: 0.08em;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
        }
        .cta-inner {
          max-width: 680px;
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
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--fern);
          font-weight: 400;
        }
        .cta-headline {
          font-family: var(--serif);
          font-size: clamp(3rem, 4.5vw, 5rem);
          font-weight: 300;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: var(--text);
        }
        .cta-headline em {
          font-style: italic;
          color: #4A6741;
        }
        .cta-sub {
          font-family: var(--sans);
          font-size: 14px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.75;
          max-width: 400px;
        }
        .cta-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 8px;
        }
        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
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
          box-shadow: 0 6px 24px rgba(46,92,36,0.22);
        }
        .cta-btn-primary:hover {
          background: var(--forest-dk);
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(46,92,36,0.28);
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
          gap: 10px;
          padding: 14px 30px;
          background: transparent;
          border: 1px solid rgba(46,92,36,0.3);
          color: var(--forest);
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
          background: rgba(46,92,36,0.06);
          transform: translateY(-2px);
        }

        /* ─── RESPONSIVE ────────────────────────────────────── */
        @media (max-width: 1100px) {
          .services-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 900px) {
          .about-section {
            display: block;
            position: relative;
            min-height: 100svh;
          }
          .about-img-col {
            position: absolute;
            inset: 0;
            height: 100%;
          }
          .about-img-overlay {
            background: linear-gradient(to top,
              rgba(250,250,248,0.95) 0%,
              rgba(250,250,248,0.6) 32%,
              transparent 62%);
          }
          .about-text-col {
            position: absolute;
            bottom: 0; left: 0; right: 0;
            padding: 0 32px 36px;
            justify-content: flex-end;
            z-index: 2;
            background: transparent;
          }
          .stats-row { display: none; }
          .about-headline { font-size: clamp(3rem, 7vw, 5rem); }

          .services-section { padding: 72px 24px; }
          .services-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
          .svc-card { border-radius: 12px; }
          .svc-card-body { padding: 18px 14px 20px; }
          .svc-name { font-size: 18px; }

          .ba-section { padding: 72px 24px; }
          .ba-container { aspect-ratio: 4/3; border-radius: 14px; }

          .hw-section { padding: 72px 32px; }
          .hw-grid { grid-template-columns: 1fr; }

          .cta-section { padding: 80px 32px; }
        }
        @media (max-width: 600px) {
          .about-text-col { padding: 0 24px 28px; }
          .about-headline { font-size: clamp(2.2rem, 9.5vw, 3rem); }
          .about-body { font-size: 14px; max-width: 280px; }
          .services-section { padding: 56px 16px; }
          .services-grid { grid-template-columns: 1fr; max-width: 340px; margin: 0 auto; }
          .section-header { grid-template-columns: 1fr; }
          .cta-headline { font-size: 2.4rem; }
        }
        @media (max-width: 600px) and (hover: none) and (pointer: coarse) {
          .about-headline { font-size: clamp(3rem, 12vw, 4rem); }
          .about-body { font-size: 16px; max-width: 320px; }
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
            <p className="section-eyebrow">Rich Haven</p>
            <h1 className="about-headline">
              The Garden<br />That Never<br /><em>Fades</em>
            </h1>
            <p className="about-body">
              Greenery made to look natural, stay  <br />flawless, and bring lasting beauty.  <br />No maintenance needed.
            </p>
            <div className="about-ctas">
              <a href="/product-collections" className="text-link">View product collections</a>
            </div>

          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="services-section">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">What We Offer</p>
              <h2 className="section-title">Product<em> Collections</em></h2>
            </div>
            <a href="/product-collections" className="view-all">View all<span className="va-arrow">→</span></a>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <a key={i} href={s.href} className="svc-card">
                <img className="svc-card-img" src={s.img} alt={s.name} />
                <div className="svc-card-overlay" />
                {s.tag && <span className="svc-tag">{s.tag}</span>}
                <div className="svc-card-body">
                  <h3 className="svc-name">{s.name}</h3>
                  <p className="svc-desc">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── VIDEO / CRAFT ── */}
        <section className="ba-section">
          <div className="ba-inner">
            <div className="ba-header-wrap" style={{ textAlign: "center" }}>
              <p className="section-eyebrow" style={{ justifyContent: "center" }}>See Our Work</p>
              <h2 className="about-headline" style={{ color: "var(--text)" }}>
                A Glimpse of <em>Our Craft</em>
              </h2>
            </div>
            <div className="ba-container">
              <video
                className="ba-img"
                autoPlay
                muted
                loop
                playsInline
                src="/random/RichHaven.mp4"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="hw-section">
          <div className="hw-header">
            <p className="section-eyebrow">From idea to reality</p>
            <h2 className="about-headline">How We <em>Work</em></h2>
          </div>
          <div className="hw-grid">
            {steps.map((step, i) => (
              <div key={i} className="hw-step">
                <div className="hw-step-top">
                  <span className="hw-step-num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="hw-icon-wrap">{step.icon}</div>
                </div>
                <p className="hw-step-label">{step.label}</p>
                <p className="hw-step-sub">{step.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section" id="footer">
          <div className="cta-watermark">Haven</div>
          <div className="cta-inner">
            <p className="cta-eyebrow">
              Let's Work Together
            </p>
            <h2 className="cta-headline">
              Transform Your <em>Space</em>
            </h2>
            <p className="cta-sub">
              Whether it's a cozy home corner or a full commercial lobby we'll source and install the perfect greenery for you.
            </p>
            <div className="cta-actions">
              <button
                onClick={scrollToContact}
                className={`cta-btn-primary${ctaPulse ? " pulse" : ""}`}
              >
                Get in Touch
              </button>
              <a href="/product-collections" className="view-all">Product Collections<span className="va-arrow">→</span></a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}