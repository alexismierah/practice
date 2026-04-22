"use client";
import Link from "next/link";
import { CloudSun, Grid2x2, Leaf, ShieldCheck, House, Building2, ShoppingBag, Hotel, UtensilsCrossed } from "lucide-react";
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
    setPos((Math.max(0, Math.min(clientX - rect.left, rect.width)) / rect.width) * 100);
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
      style={{ position: "relative", overflow: "hidden", cursor: "ew-resize", userSelect: "none", borderRadius: "2px", aspectRatio: "16/9", width: "100%", touchAction: "none" }}
    >
      <img src={after} alt={afterLabel} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - pos}% 0 0)`, pointerEvents: "none" }}>
        <img src={before} alt={beforeLabel} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, transform: "translateX(-50%)", width: "1px", background: "rgba(255,255,255,0.7)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: `${pos}%`, transform: "translate(-50%, -50%)", width: "44px", height: "44px", borderRadius: "50%", background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.22)", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M7 5l-4 5 4 5M13 5l4 5-4 5" stroke="#1a3d28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
  { name: "Artificial Grass", img: "planterbox/box8.jpeg" },
];

const displayedPlants = [
  { number: "01", name: "Artificial Grass", sublabel: "Sports courts, lawns & outdoor decks", img: "https://cdn.thewirecutter.com/wp-content/media/2021/07/synthetic-lawn-2048px-802551536-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp", link: "/products-services/grass" },
  { number: "02", name: "Potted Plants & Trees", sublabel: "Statement pieces for any interior", img: "https://theplantsproject.com.au/cdn/shop/files/Bird_of_Paradise_Plant_Styled_Photo_3_sizes.jpg", link: "/products-services/potted-plants" },
  { number: "03", name: "Planter Boxes", sublabel: "Defined edges, curated arrangements", img: "p1.jpg", link: "/products-services/planter-box" },
  { number: "04", name: "Wall Greens", sublabel: "Living-wall look, zero upkeep", img: "p19.jpg", link: "/products-services/wall-greens" },
];

const shopReasons = [
  { title: "No Upkeep Required", desc: "No watering schedules, no wilting, no seasonal replanting. Your greenery stays perfect on its own.", icon: Leaf },
  { title: "Built to Last", desc: "UV-stable materials that resist fading, moisture, and heavy use — indoors or outdoors, year after year.", icon: ShieldCheck },
  { title: "Weather-Proof", desc: "Designed for the Philippine climate. Humidity, heat, and rain won't touch the finish.", icon: CloudSun },
  { title: "Fits Any Space", desc: "From condo balconies to commercial lobbies — we size, design, and install for exactly your context.", icon: Grid2x2 },
] as const;

export default function Home() {
  const [sliderIdx, setSliderIdx] = useState(0);
  const servicesSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setInterval(() => setSliderIdx(i => (i + 1) % featuredPlants.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("sc-visible"); }),
      { threshold: 0.08 }
    );
    servicesSectionRef.current?.querySelectorAll(".sc-card").forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="rh-landing">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300;1,9..40,400&display=swap");

        :root {
          --forest: #0f2318;
          --fern:   #1c4a2e;
          --sage:   #3a7a52;
          --mist:   #b8d4bc;
          --stone:  #9aaa9d;
          --border: rgba(26,61,40,0.12);
          --border-l: rgba(26,61,40,0.07);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html, body { overflow-x: hidden; scrollbar-width: none; }
        ::-webkit-scrollbar { display: none; }

        .rh-landing {
          font-family: "DM Sans", sans-serif;
          background: #fff;
          color: var(--forest);
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          height: 100svh;
          min-height: 620px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.06);
          transition: opacity 1.2s ease, transform 8s ease;
        }
        .hero-img.active { opacity: 1; transform: scale(1); }

        .hero-scrim {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,25,15,0.9) 0%, rgba(10,25,15,0.45) 50%, rgba(10,25,15,0.2) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative; z-index: 2;
          width: 100%;
          padding: 0 72px 72px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
        }

        .hero-kicker {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          font-weight: 400;
          margin-bottom: 20px;
        }

        .hero-title {
          font-weight: 300;
          font-size: clamp(3.2rem, 6vw + 0.5rem, 7rem);
          line-height: 1.08;
          color: #fff;
          letter-spacing: -0.03em;
          max-width: 580px;
        }

        .hero-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 24px;
          flex-shrink: 0;
        }

        .hero-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          line-height: 1.8;
          font-weight: 300;
          max-width: 230px;
          text-align: right;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 26px;
          background: #fff;
          color: var(--forest);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 9999px;
          transition: background 0.25s;
        }
        .btn-primary:hover { background: var(--mist); }

        /* ── BEFORE / AFTER ── */
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

        /* ── SERVICES ── */
        .services-section {
          background: #fff;
          padding: 100px 80px;
        }

        .sm-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
          margin-bottom: 72px;
        }

        .eyebrow {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #111;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-heading {
          font-weight: 300;
          font-size: clamp(1.7rem, 2.2vw + 0.6rem, 2.8rem);
          color: var(--forest);
          line-height: 1.12;
          letter-spacing: -0.02em;
        }

        .body-text {
          font-size: 14px;
          color: var(--stone);
          line-height: 1.85;
          font-weight: 300;
        }

        .sm-mosaic {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          column-gap: 24px;
          align-items: start;
        }

        .sc-card {
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s ease, transform 0.65s ease;
          text-decoration: none;
          color: inherit;
        }
        .sc-card.sc-visible { opacity: 1; transform: translateY(0); }
        .sc-card:nth-child(1) { transition-delay: 0s; }
        .sc-card:nth-child(2) { transition-delay: 0.1s; }
        .sc-card:nth-child(3) { transition-delay: 0.05s; }
        .sc-card:nth-child(4) { transition-delay: 0.15s; }

        .sc-number {
          font-size: 78px;
          font-weight: 300;
          color: #d4d4d4;
          line-height: 1;
          letter-spacing: -3px;
          margin-bottom: -10px;
          user-select: none;
        }

        .sc-title {
          font-size: 15.5px;
          font-weight: 300;
          color: #111;
          margin: 0 0 6px;
          line-height: 1.3;
        }

        .sc-sub {
          font-size: 12px;
          color: var(--stone);
          font-weight: 300;
          margin: 0 0 14px;
          line-height: 1.6;
        }

        .sc-img-wrap {
          width: 100%;
          aspect-ratio: 1 / 1.06;
          border-radius: 6px;
          overflow: hidden;
          background: #e5e5e5;
          position: relative;
        }
        .sc-img-wrap::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.15) 100%);
          pointer-events: none;
        }
        .sc-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .sc-card:hover .sc-img-wrap img { transform: scale(1.06); }

        .pill-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--fern);
          text-decoration: none;
          padding: 11px 22px;
          border-radius: 9999px;
          background: rgba(28,74,46,0.08);
          transition: background 0.25s;
        }
        .pill-link:hover { background: rgba(28,74,46,0.14); }

        .sm-cta-row {
          display: flex;
          justify-content: center;
          margin-top: 48px;
        }

        /* ── WHY ── */
        .why-section {
          background: #fafafa;
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

        .why-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .reason-card {
          background: #fff;
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
          width: 20px; height: 20px;
          color: #111;
          margin-bottom: 14px;
          display: block;
        }

        .reason-card h3 {
          font-size: 13px;
          font-weight: 600;
          color: #111;
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }

        .reason-card p {
          font-size: 12.5px;
          color: var(--stone);
          line-height: 1.8;
          font-weight: 300;
        }

        /* ── CTA BAND ── */
        .cta-band {
          background: var(--fern);
          padding: 48px 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
          position: relative;
          overflow: hidden;
        }
        .cta-band::before {
          content: "";
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 80% 50%, rgba(58,122,82,0.4) 0%, transparent 65%);
          pointer-events: none;
        }

        .cta-band-plant {
          position: absolute;
          right: 0; bottom: 0;
          height: 300px;
          top: -57px;
          object-fit: contain;
          pointer-events: none;
          z-index: 1;
          filter: brightness(0.9);
        }

        .cta-band-content {
          position: relative; z-index: 2;
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
        }

        .cta-title {
          font-size: clamp(1.8rem, 2.5vw + 0.5rem, 2.8rem);
          font-weight: 300;
          color: #fff;
          line-height: 1.18;
          letter-spacing: -0.02em;
        }
        .cta-title em { font-style: italic; color: var(--mist); font-weight: 300; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .hero-content, .ba-section, .services-section, .why-section, .cta-band { padding-left: 48px; padding-right: 48px; }
        }

        @media (max-width: 900px) {
          .hero-content { flex-direction: column; align-items: flex-start; gap: 24px; }
          .hero-right { align-items: flex-start; }
          .hero-sub { text-align: left; }
          .sm-mosaic { grid-template-columns: repeat(2, 1fr); column-gap: 20px; }
          .sc-card:nth-child(even) { margin-top: 140px; }
          .sm-header { grid-template-columns: 1fr; gap: 16px; }
          .why-inner { grid-template-columns: 1fr; gap: 48px; }
        }

        @media (max-width: 768px) {
          .hero-content { padding: 0 28px 48px; }
          .ba-section, .services-section, .why-section { padding: 64px 28px; }
          .cta-band { padding: 36px 28px; text-align: center; flex-direction: column; }
          .cta-band-plant { display: none; }
          .why-cards { gap: 12px; }
        }

        @media (max-width: 600px) {
          .sm-mosaic { display: flex; flex-direction: column; gap: 40px; }
          .sc-card:nth-child(even) { margin-top: 0; }
          .sc-img-wrap { aspect-ratio: 4/3; }
        }

        @media (max-width: 420px) {
          .why-cards { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        {featuredPlants.map((plant, i) => (
          <img key={plant.name} className={`hero-img${i === sliderIdx ? " active" : ""}`} src={plant.img} alt={plant.name} />
        ))}
        <div className="hero-scrim" />

        <div className="hero-content">
          <div>
            <p className="hero-kicker">Rich Haven Artificial Garden</p>
            <h1 className="hero-title">Bring Nature<br />to your Space</h1>
          </div>
          <div className="hero-right">
            <p className="hero-sub">Artificial greenery designed to look real, last forever, and require no maintenance.</p>
            <a
              href="#footer"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("footer");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
              }}
            >
              Browse
            </a>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="ba-section">
        <div className="ba-inner">
          <div className="ba-header">
            <p className="eyebrow" style={{ justifyContent: "center" }}>The Transformation</p>
            <h2 className="section-heading" style={{ textAlign: "center" }}>We turn bare spaces into green ones</h2>
            <p className="body-text" style={{ textAlign: "center", marginTop: "10px" }}>Drag the handle to compare before and after.</p>
          </div>
          <BeforeAfterSlider
            before="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2012/7/25/5/RX-HGMAG004_Yes-Thats-the-Same-House-096-a_s4x3.jpg.rend.hgtvcom.791.594.85.suffix/1400972392314.webp"
            after="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2012/7/25/5/RX-HGMAG004_Yes-Thats-the-Same-House-096-b_s4x3.jpg.rend.hgtvcom.791.594.85.suffix/1400972415145.webp"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section" ref={servicesSectionRef} aria-labelledby="services-heading">
        <div className="sm-header">
          <div>
            <p className="eyebrow">What We Offer</p>
            <h2 className="section-heading" id="services-heading">Our Products<br />&amp; Services</h2>
          </div>
          <p className="body-text" style={{ paddingTop: "32px" }}>
            From lush potted trees to seamless wall panels, every product is crafted to look indistinguishable from the real thing — and designed to stay that way.
          </p>
        </div>

        <div className="sm-mosaic">
          {displayedPlants.map(plant => (
            <Link href={plant.link} className="sc-card" key={plant.number}>
              <span className="sc-number">{plant.number}</span>
              <h3 className="sc-title">{plant.name}</h3>
              <p className="sc-sub">{plant.sublabel}</p>
              <div className="sc-img-wrap">
                <img src={plant.img} alt={plant.name} loading="lazy" />
              </div>
            </Link>
          ))}
        </div>

        <div className="sm-cta-row">
          <Link href="/products-services" className="pill-link">View all products</Link>
        </div>
      </section>

      {/* WHY RICH HAVEN */}
      <section className="why-section" aria-labelledby="why-title">
        <div className="why-inner">
          <div>
            <p className="eyebrow">What Sets Us Apart</p>
            <h2 className="section-heading" id="why-title">Why Choose<br />Rich Haven</h2>
            <p className="body-text" style={{ marginTop: "14px" }}>
              Greenery that looks perfect from day one and stays that way — no effort required.
            </p>
          </div>
          <div className="why-cards">
            {shopReasons.map(reason => (
              <article className="reason-card" key={reason.title}>
                <reason.icon className="reason-card-icon" strokeWidth={1.4} />
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <div className="cta-band">
        <img className="cta-band-plant" src="/Overlap4.png" alt="" aria-hidden="true" />
        <div className="cta-band-content">
          <p className="cta-eyebrow">Let&apos;s Work Together</p>
          <h2 className="cta-title">
            Ready to start a project<br />with Rich Haven?
          </h2>
        </div>
      </div>
    </main>
  );
}