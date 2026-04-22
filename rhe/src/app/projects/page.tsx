"use client";

import { useState, KeyboardEvent } from "react";

interface Project {
  id: number;
  title: string;
  location: string;
  industry: string;
  service: string;
  images: string[];
}

interface ModalState {
  project: Project;
  imgIndex: number;
}

type DropdownName = "region" | "industry" | "service";

const projects: Project[] = [
  {
    id: 1,
    title: "Boston Scientific HQ",
    location: "Madrid, Spain",
    industry: "Life Sciences",
    service: "Design & Build",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
    ],
  },
  {
    id: 2,
    title: "Bryan, Garnier & Co",
    location: "Paris, France",
    industry: "Finance",
    service: "Workplace Design",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80",
    ],
  },
  {
    id: 3,
    title: "Boston Scientific",
    location: "Hemel Hempstead, UK",
    industry: "Life Sciences",
    service: "Design & Build",
    images: [
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    ],
  },
  {
    id: 4,
    title: "onsemi",
    location: "Milan, Italy",
    industry: "Technology",
    service: "Workplace Design",
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80",
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=1200&q=80",
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=1200&q=80",
    ],
  },
  {
    id: 5,
    title: "Global Software Co.",
    location: "Sydney, Australia",
    industry: "Technology",
    service: "Design & Build",
    images: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80",
    ],
  },
  {
    id: 6,
    title: "Tripadvisor",
    location: "Lisbon, Portugal",
    industry: "Technology",
    service: "Workplace Design",
    images: [
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80",
    ],
  },
  {
    id: 7,
    title: "Tower Research Capital",
    location: "Amsterdam, Netherlands",
    industry: "Finance",
    service: "Design & Build",
    images: [
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
    ],
  },
  {
    id: 8,
    title: "Global Software Co.",
    location: "Sydney, Australia",
    industry: "Technology",
    service: "Fit Out",
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80",
    ],
  },
];

const regions = ["All Regions", "Europe", "Asia Pacific", "Americas", "Middle East"];
const industries = ["All Industries", "Technology", "Finance", "Life Sciences", "Legal"];
const services = ["All Services", "Workplace Design", "Design & Build", "Fit Out", "Consulting"];

export default function ProjectsPage() {
  const [activeRegion, setActiveRegion] = useState("All Regions");
  const [activeIndustry, setActiveIndustry] = useState("All Industries");
  const [activeService, setActiveService] = useState("All Services");
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null);
  const [modal, setModal] = useState<ModalState | null>(null);

  const filtered = projects.filter((p) => {
    const industryMatch = activeIndustry === "All Industries" || p.industry === activeIndustry;
    const serviceMatch = activeService === "All Services" || p.service === activeService;
    return industryMatch && serviceMatch;
  });

  const openModal = (project: Project, imgIndex: number = 0) => {
    setModal({ project, imgIndex });
  };

  const closeModal = () => setModal(null);

  const modalPrev = () => {
    if (!modal) return;
    const len = modal.project.images.length;
    setModal((m) => m ? { ...m, imgIndex: (m.imgIndex - 1 + len) % len } : null);
  };

  const modalNext = () => {
    if (!modal) return;
    const len = modal.project.images.length;
    setModal((m) => m ? { ...m, imgIndex: (m.imgIndex + 1) % len } : null);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!modal) return;
    if (e.key === "ArrowRight") modalNext();
    if (e.key === "ArrowLeft") modalPrev();
    if (e.key === "Escape") closeModal();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .pr-root {
          font-family: 'DM Sans', sans-serif;
          color: #1a1a1a;
          background: #fff;
          min-height: 100vh;
        }

        /* ── Hero ── */
        .pr-hero {
          position: relative;
          height: 620px;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 48px 52px;
        }

        .pr-hero-bg {
          position: absolute;
          inset: 0;
          background: url('/planterbox/box8.jpeg') center/cover;
          filter: brightness(0.28);
        }

        .pr-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .pr-eyebrow {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: rgba(251, 251, 251, 0.89);
          margin-bottom: 5px;
          display: block;
          text-align: center;
        }

        .pr-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 52px;
          line-height: 1;
          color: rgba(251, 251, 251, 0.89);
          letter-spacing: -0.02em;
          text-align: center;
        }

        .pr-hero-title em {
          font-style: italic;
          color: rgba(255,255,255,0.5);
        }

        /* ── Filter Bar (below title) ── */
        .pr-filter-section {
          padding: 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pr-filter-group {
          position: relative;
        }


        .pr-filter-btn:hover,
        .pr-filter-btn.open,
        .pr-filter-btn.active {
          color: #1a1a1a;
          border-bottom-color: #1a1a1a;
        }

        .pr-filter-btn svg {
          width: 9px; height: 9px;
          stroke: currentColor; fill: none; stroke-width: 2;
          transition: transform 0.18s;
          flex-shrink: 0;
        }

        .pr-filter-btn.open svg { transform: rotate(180deg); }

        .pr-filter-sep {
          width: 1px; height: 14px;
          background: #e0e0e0;
          flex-shrink: 0;
        }


        .pr-dd-item {
          display: block;
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          letter-spacing: 0.03em;
          color: #2d5040;
          padding: 10px 18px;
          cursor: pointer;
          transition: background 0.12s;
        }

        .pr-dd-item:hover { background: #f5f5f5; color: #1a1a1a; }
        .pr-dd-item.selected { color: #1a1a1a; font-weight: 500; }

        .pr-filter-count {
          margin-left: auto;
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 0.08em;
          color: #aaa;
          white-space: nowrap;
        }

        /* ── Grid ── */
        .pr-section {
          padding: 70px 52px 80px;
        }

        .pr-section-label {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-weight: 400;
          font-size: 13px;
          color: #aaa;
          margin-bottom: 28px;
          letter-spacing: 0.04em;
        }

        .pr-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 8px;
        }

        .pr-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          background: #f0f0f0;
        }

        .pr-card:nth-child(7n+1) {
        grid-column: span 6; /* left large */
      }

      .pr-card:nth-child(7n+2) {
        grid-column: span 3; /* left small */
      }

      .pr-card:nth-child(7n+3) {
        grid-column: span 3; /* left small */
      }

      .pr-card:nth-child(7n+4) {
        grid-column: span 6; /* left large bottom */
      }

      /* RIGHT SIDE (3 featured images) */
      .pr-card:nth-child(7n+5) {
        grid-column: span 6; /* right big */
      }

      .pr-card:nth-child(7n+6) {
        grid-column: span 3; /* right small */
      }

      .pr-card:nth-child(7n+7) {
        grid-column: span 3; /* right small */
      }

        .pr-card-img {
          width: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s;
          filter: brightness(0.88) saturate(0.9);
        }

        .pr-card:hover .pr-card-img {
          transform: scale(1.05);
          filter: brightness(0.72) saturate(0.85);
        }

        .pr-card-info {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 48px 24px 22px;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%);
        }

        .pr-card-service {
          display: inline-block;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          margin-bottom: 6px;
        }

        .pr-card-title {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: 17px;
          color: #fff;
          line-height: 1.25;
        }

        .pr-card-loc {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          margin-top: 4px;
          letter-spacing: 0.05em;
        }

        .pr-card-arrow {
          position: absolute;
          top: 18px; right: 18px;
          width: 30px; height: 30px;
          border: 0.5px solid rgba(255,255,255,0.3);
          display: flex; align-items: center; justify-content: center;
          opacity: 0;
          transform: translateY(-4px) translateX(4px);
          transition: opacity 0.25s, transform 0.25s;
        }

        .pr-card:hover .pr-card-arrow {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }

        .pr-card-arrow svg {
          width: 12px; height: 12px;
          stroke: #fff; fill: none; stroke-width: 1.8;
        }

        /* ── Thumbnails on card ── */
        .pr-card-thumbs {
          position: absolute;
          bottom: 20px; right: 18px;
          display: flex;
          gap: 10px;
          opacity: 0;
          transition: opacity 0.25s;
        }

        .pr-card:hover .pr-card-thumbs {
          opacity: 1;
        }

        .pr-card-thumb {
          width: 36px;
          height: 28px;
          object-fit: cover;
          border: 1px solid rgba(255,255,255,0.4);
          cursor: pointer;
          transition: border-color 0.15s, transform 0.15s;
          flex-shrink: 0;
        }

        .pr-card-thumb:hover {
          border-color: rgba(255,255,255,0.9);
          transform: scale(1.08);
        }

        /* ── Modal ── */
        .pr-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.88);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .pr-modal {
          position: relative;
          width: min(80vw, 800px);
          border-radius: 6px;
          overflow: hidden; /* VERY IMPORTANT */
          background: #ffffff; /* or rgba(17,17,17,0.95) */
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }

        .pr-modal-image-box {
          position: relative;
          width: 100%;
          line-height: 0;
          overflow: hidden; /* IMPORTANT */
        }

        .pr-modal-img {
          width: 100%;
          max-height: 65vh;
          object-fit: cover;
          display: block;
        }

        /* INSIDE IMAGE CLOSE BUTTON */
        .pr-modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 50;

          width: 36px;
          height: 36px;

          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(6px);

          border: 0.5px solid rgba(255, 255, 255, 0.3);

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;
        }

        .pr-modal-close svg {
          width: 14px;
          height: 14px;
          stroke: #fff;
          fill: none;
          stroke-width: 1.8;
        }
                  
        .pr-modal-img {
          width: 100%;
          max-height: 65vh;
          object-fit: cover;
          display: block;
        }

        .pr-modal-bar {
          background: #111;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pr-modal-info {}

        .pr-modal-title {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: 18px;
          color: #fff;
          letter-spacing: 0.01em;
        }

        .pr-modal-sub {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.08em;
          margin-top: 3px;
        }

        .pr-modal-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .pr-modal-nav {
          width: 36px; height: 36px;
          border: 0.5px solid rgba(255,255,255,0.2);
          background: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.15s, background 0.15s;
        }

        .pr-modal-nav:hover {
          border-color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.05);
        }

        .pr-modal-nav svg {
          width: 14px; height: 14px;
          stroke: #fff; fill: none; stroke-width: 1.8;
        }

        .pr-modal-counter {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.1em;
          min-width: 36px;
          text-align: center;
        }


        /* Thumbnails strip */
        .pr-modal-thumbs {
          display: flex;
          gap: 3px;
          margin-top: 3px;
        }

        .pr-modal-thumb {
          width: 72px;
          height: 48px;
          object-fit: cover;
          cursor: pointer;
          opacity: 0.45;
          border: 1.5px solid transparent;
          transition: opacity 0.15s, border-color 0.15s;
          flex-shrink: 0;
        }

        .pr-modal-thumb.active {
          opacity: 1;
          border-color: #fff;
        }

        .pr-modal-thumb:hover { opacity: 0.8; }

        /* ── Empty State ── */
        .pr-empty {
          grid-column: 1 / -1;
          padding: 80px 0;
          text-align: center;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 20px;
          color: #bbb;
          background: #fff;
        }

        @media (max-width: 768px) {
          .pr-hero { padding: 32px 20px; height: 280px; }
          .pr-hero-title { font-size: 48px; }
          .pr-filter-section { padding: 0 20px; overflow-x: auto; }
          .pr-section { padding: 32px 20px 60px; }
          .pr-card { grid-column: span 12 !important; }
          .pr-modal { width: 96vw; }
        }
          
      `}</style>

      <div
        className="pr-root"
        onClick={() => setOpenDropdown(null)}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        {/* ── Hero ── */}
        <section className="pr-hero">
          <div className="pr-hero-bg" />
          <div className="pr-hero-content">
            <span className="pr-eyebrow">RICH HAVEN ARTIFICIAL GRADEN</span>
            <h1 className="pr-hero-title">Projects </h1>
          </div>
        </section>

        

        {/* ── Projects Grid ── */}
        <section className="pr-section">
          <div className="pr-grid">
            {filtered.length === 0 ? (
              <p className="pr-empty">No projects match the selected filters.</p>
            ) : (
              filtered.map((p) => (
                <article key={p.id} className="pr-card" onClick={() => openModal(p, 0)}>
                  <img src={p.images[0]} alt={p.title} className="pr-card-img" loading="lazy" />
                  <div className="pr-card-info">
                    <span className="pr-card-service">{p.service}</span>
                    <h2 className="pr-card-title">{p.title}</h2>
                    <p className="pr-card-loc">{p.location}</p>
                  </div>
                  {/* Thumbnail strip on hover */}
                  {p.images.length > 1 && (
                    <div className="pr-card-thumbs" onClick={(e) => e.stopPropagation()}>
                      {p.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt=""
                          className="pr-card-thumb"
                          onClick={(e) => { e.stopPropagation(); openModal(p, idx); }}
                        />
                      ))}
                    </div>
                  )}
                  <div className="pr-card-arrow">
                    <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>

        {/* ── Modal ── */}
        {modal && (
          <div className="pr-modal-backdrop" onClick={closeModal}>
            <div className="pr-modal" onClick={(e) => e.stopPropagation()}>

              {/* IMAGE CONTAINER */}
              <div className="pr-modal-image-box">

                {/* MAIN IMAGE */}
                <img
                  key={modal.imgIndex}
                  src={modal.project.images[modal.imgIndex]}
                  alt={modal.project.title}
                  className="pr-modal-img"
                />

                {/* CLOSE BUTTON (INSIDE IMAGE OVERLAY) */}
                <button className="pr-modal-close" onClick={closeModal}>
                  <svg viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

              </div>

              {/* THUMBNAILS */}
              {modal.project.images.length > 1 && (
                <div className="pr-modal-thumbs">
                  {modal.project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt=""
                      className={`pr-modal-thumb ${
                        idx === modal.imgIndex ? "active" : ""
                      }`}
                      onClick={() =>
                        setModal((m) =>
                          m ? { ...m, imgIndex: idx } : null
                        )
                      }
                    />
                  ))}
                </div>
              )}

              {/* BOTTOM BAR */}
              <div className="pr-modal-bar">
                <div className="pr-modal-info">
                  <p className="pr-modal-title">{modal.project.title}</p>
                  <p className="pr-modal-sub">
                    {modal.project.location} · {modal.project.industry}
                  </p>
                </div>

                {modal.project.images.length > 1 && (
                  <div className="pr-modal-controls">
                    <button className="pr-modal-nav" onClick={modalPrev}>
                      <svg viewBox="0 0 24 24">
                        <path d="M19 12H5M12 5l-7 7 7 7" />
                      </svg>
                    </button>

                    <span className="pr-modal-counter">
                      {modal.imgIndex + 1} / {modal.project.images.length}
                    </span>

                    <button className="pr-modal-nav" onClick={modalNext}>
                      <svg viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}
      </div>
    </>
  );
}