"use client";

import { useState, useEffect, useCallback } from "react";

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  desc: string;
  area: string;
  images: string[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Casa Bella Residence",
    location: "Makati City",
    category: "Commercial",
    desc: "Full living wall installation across indoor dining and lounge areas",
    area: "320 sqm",
    images: ["/projects/proj1.jpeg", "/projects/proj2.jpeg", "/projects/proj3.jpeg"],
  },
  {
    id: 2,
    title: "BGC Corporate Tower",
    location: "Bonifacio Global City",
    category: "Commercial",
    desc: "Rooftop terrace turf installation with premium artificial grass",
    area: "180 sqm",
    images: ["/projects/proj4.jpeg", "/projects/proj5.jpeg", "/projects/proj6.jpeg"],
  },
  {
    id: 3,
    title: "Serene Garden Villa",
    location: "Alabang",
    category: "Residential",
    desc: "Curated collection of potted tropicals for indoor and poolside areas",
    area: "Assorted",
    images: ["/projects/proj15.jpeg", "/projects/proj16.jpeg", "/projects/proj17.jpeg"],
  },
  {
    id: 4,
    title: "Eastwood Mall Atrium",
    location: "Quezon City",
    category: "Commercial",
    desc: "Large-scale vertical garden feature wall in the main atrium",
    area: "540 sqm",
    images: ["/projects/proj7.jpeg", "/projects/proj8.jpeg", "/projects/proj9.jpeg"],
  },
  {
    id: 5,
    title: "The Greenfield Club",
    location: "Mandaluyong",
    category: "Commercial",
    desc: "Custom planter boxes lining the event hall perimeter and entryway",
    area: "Modular",
    images: [
      "/projects/proj10.jpeg", "/projects/proj11.jpeg", "/projects/proj12.jpeg",
      "/projects/proj13.jpeg", "/projects/proj38.jpeg", "/projects/proj39.jpeg",
      "/projects/proj40.jpeg", "/projects/proj41.jpeg",
    ],
  },
  {
    id: 6,
    title: "Sun Valley Estates",
    location: "Antipolo",
    category: "Residential",
    desc: "Residential lawn replacement with ultra-realistic turf grass",
    area: "260 sqm",
    images: ["/projects/proj20.jpeg", "/projects/proj21.jpeg"],
  },
  {
    id: 7,
    title: "Solana Hotel Lobby",
    location: "Pasay City",
    category: "Commercial",
    desc: "Oversized potted palms and ferns for lobby and corridor ambience",
    area: "Assorted",
    images: [
      "/projects/proj29.jpeg", "/projects/proj30.jpeg", "/projects/proj48.jpeg"
    ],
  },
  {
    id: 8,
    title: "Casa Bella Residence",
    location: "Makati City",
    category: "Commercial",
    desc: "Full living wall installation across indoor dining and lounge areas",
    area: "320 sqm",
    images: ["/projects/proj28.jpeg", "/projects/proj26.jpeg", "/projects/proj27.jpeg"],
  },
  {
    id: 9,
    title: "Casa Bella Residence",
    location: "Makati City",
    category: "Commercial",
    desc: "Full living wall installation across indoor dining and lounge areas",
    area: "320 sqm",
    images: ["/projects/proj25.jpeg", "/projects/proj24.jpeg"],
  },
  {
    id: 10,
    title: "Casa Bella Residence",
    location: "Makati City",
    category: "Commercial",
    desc: "Full living wall installation across indoor dining and lounge areas",
    area: "320 sqm",
    images: ["/projects/proj42.jpeg", "/projects/proj43.jpeg"],
  },
  {
    id: 11,
    title: "Casa Bella Residence",
    location: "Makati City",
    category: "Commercial",
    desc: "Full living wall installation across indoor dining and lounge areas",
    area: "320 sqm",
    images: ["/projects/proj36.jpeg", "/projects/proj37.jpeg", "/projects/proj33.jpeg"],
  },
  {
    id: 12,
    title: "Casa Bella Residence",
    location: "Makati City",
    category: "Commercial",
    desc: "Full living wall installation across indoor dining and lounge areas",
    area: "320 sqm",
    images: ["/projects/proj50.jpeg", "/projects/proj51.jpeg", "/projects/proj52.jpeg"],
  },
  {
    id: 13,
    title: "Casa Bella Residence",
    location: "Makati City",
    category: "Commercial",
    desc: "Full living wall installation across indoor dining and lounge areas",
    area: "320 sqm",
    images: ["/projects/proj53.jpeg", "/projects/proj54.jpeg", "/projects/proj55.jpeg"],
  },
];

const FILTERS = ["All Projects", "Residential", "Commercial"];

interface ModalState {
  project: Project;
  imgIndex: number;
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@200;300;400;500&display=swap');

  .rh-root { font-family: 'DM Sans', sans-serif; }
  .rh-serif { font-family: 'DM Sans', serif; }

  .rh-hero-bg {
    background-image: url('/projects/proj27.jpeg');
    background-size: cover;
    background-position: center;
  }
  .rh-hero-overlay {
    background: linear-gradient(to bottom, rgba(15,22,15,0.55) 0%, rgba(15, 22, 15, 0.55) 60%, rgba(15, 22, 15, 0.20) 100%);
  }
  .rh-hero-pattern {
    background-image:
      repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.02) 40px),
      repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.025) 40px);
  }

  /* ── FILTER BUTTONS: rounder, white-outlined, transparent fill ── */
  .rh-hero-filter {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px; font-weight: 300; letter-spacing: 0.14em; text-transform: uppercase;
    color: rgba(255,255,255,0.65);
    padding: 9px 22px;
    border: 1px solid rgba(255,255,255,0.55);
    background: transparent;
    cursor: pointer;
    transition: color 0.2s, background 0.2s, border-color 0.2s;
    white-space: nowrap;
    backdrop-filter: blur(4px);
    border-radius: 999px;
  }
  .rh-hero-filter:hover {
    color: #fff;
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.85);
  }
  .rh-hero-filter.active {
    color: #fff;
    background: rgba(255,255,255,0.18);
    border-color: #fff;
  }

  .rh-card { position: relative; overflow: hidden; cursor: pointer; }
  .rh-card img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s; filter: brightness(0.88); }
  .rh-card:hover img { transform: scale(1.06); filter: brightness(0.55); }

  .rh-card-static { position: absolute; bottom: 0; left: 0; right: 0; padding: 32px 18px 14px; background: linear-gradient(to top, rgba(10,15,10,0.72) 0%, transparent 100%); pointer-events: none; transition: opacity 0.3s; }
  .rh-card:hover .rh-card-static { opacity: 0; }

  .rh-card-overlay { position: absolute; inset: 0; padding: 18px; display: flex; flex-direction: column; justify-content: space-between; background: linear-gradient(to top, rgba(15,20,15,0.9) 0%, rgba(15,20,15,0.1) 60%, transparent 100%); opacity: 0; transition: opacity 0.35s; pointer-events: none; }
  .rh-card:hover .rh-card-overlay { opacity: 1; pointer-events: auto; }

  /* ── CARD ARROW: icon only, no box ── */
  .rh-card-arrow {
    position: absolute; top: 14px; right: 14px;
    width: 28px; height: 28px;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transform: translate(4px,-4px);
    transition: opacity 0.25s, transform 0.25s;
    background: none; border: none;
  }
  .rh-card:hover .rh-card-arrow { opacity: 1; transform: translate(0,0); }

  /* ── CATEGORY BADGE: hover changes to gold ── */
  .rh-card-badge {
    font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 300;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: #e8d5b0; padding: 4px 10px; align-self: flex-start;
    border: 0.5px solid rgba(184,152,106,0.55);
    background: rgba(184,152,106,0.2);
    transition: color 0.2s, background 0.2s, border-color 0.2s;
    cursor: pointer;
  }
  .rh-card:hover .rh-card-badge:hover {
    color: #1a1a18;
    background: #e8d5b0;
    border-color: #e8d5b0;
  }

  .rh-category-badge { font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 300; letter-spacing: 0.14em; text-transform: uppercase; color: #2d3d2d; padding: 4px 10px; background: #ede9e2; }

  /* Modal */
  .rh-modal-backdrop { position: fixed; inset: 0; background: rgba(10,14,10,0.92); z-index: 999; display: flex; align-items: center; justify-content: center; animation: rh-fade 0.2s ease; }
  @keyframes rh-fade { from { opacity: 0; } to { opacity: 1; } }

  .rh-modal-split { position: relative; width: min(92vw, 980px); height: min(82vh, 500px); display: flex; background: #fff; animation: rh-scale 0.25s ease; overflow: hidden; }
  @keyframes rh-scale { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }

  /* Left image panel */
  .rh-modal-left { position: relative; flex: 0 0 58%; background: #111; overflow: hidden; }
  .rh-modal-main-img { width: 100%; height: 100%; object-fit: cover; display: block; animation: rh-imgfade 0.22s ease; }
  @keyframes rh-imgfade { from { opacity: 0; } to { opacity: 1; } }

  /* ── MODAL NAV: icon only, no background box ── */
  .rh-img-nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 36px; height: 36px;
    background: none; border: none;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    transition: opacity 0.15s;
    z-index: 2;
  }
  .rh-img-nav:hover { opacity: 0.7; }
  .rh-img-nav.prev { left: 12px; }
  .rh-img-nav.next { right: 12px; }

  /* Counter bottom-center of image */
  .rh-img-counter { position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 300; letter-spacing: 0.12em; color: rgba(255,255,255,0.6); background: rgba(0,0,0,0.42); padding: 4px 12px; z-index: 2; white-space: nowrap; }

  /* Right content panel */
  .rh-modal-right { flex: 1; display: flex; flex-direction: column; padding: 48px 28px 50px; position: relative; overflow-y: auto; }

  /* ── MODAL CLOSE: icon only, no background box ── */
  .rh-modal-close {
    position: absolute; top: 14px; right: 14px;
    width: 30px; height: 30px;
    background: none; border: none;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: opacity 0.15s;
    z-index: 2;
  }
  .rh-modal-close:hover { opacity: 0.5; }

  .rh-detail-row { display: flex; align-items: center; gap: 10px; padding: 7px 0; border-bottom: 0.5px solid rgba(0,0,0,0.07); }
  .rh-detail-label { font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #4a5450; flex: 0 0 80px; }
  .rh-detail-value { font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 300; color: #1a1a18; }

  /* Thumbnail strip */
  .rh-thumb-strip { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 4px; }
  .rh-thumb {
    width: 52px; height: 36px; object-fit: cover; cursor: pointer;
    opacity: 0.4; border: 1.5px solid transparent;
    transition: opacity 0.15s, border-color 0.15s; flex-shrink: 0;
  }
  .rh-thumb.active { opacity: 1; border-color: #b8986a; }

  .rh-tagline-bg { background: linear-gradient(160deg, #1a2a1a 0%, #2d3d2d 50%, #1a1a18 100%); }

  .rh-btn-gold { font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 300; letter-spacing: 0.18em; text-transform: uppercase; color: #e8d5b0; padding: 12px 28px; cursor: pointer; text-decoration: none; display: inline-block; border: 0.5px solid rgba(184,152,106,0.55); background: rgba(184,152,106,0.1); }
  .rh-btn-ghost { font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 300; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.4); padding: 12px 28px; cursor: pointer; text-decoration: none; display: inline-block; border: 0.5px solid rgba(255,255,255,0.12); background: transparent; }
`;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [modal, setModal] = useState<ModalState | null>(null);

  const filtered =
    activeFilter === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const openModal = (project: Project, imgIndex = 0) =>
    setModal({ project, imgIndex });

  const closeModal = useCallback(() => setModal(null), []);

  const modalPrev = useCallback(() => {
    setModal((m) =>
      m ? { ...m, imgIndex: (m.imgIndex - 1 + m.project.images.length) % m.project.images.length } : null
    );
  }, []);

  const modalNext = useCallback(() => {
    setModal((m) =>
      m ? { ...m, imgIndex: (m.imgIndex + 1) % m.project.images.length } : null
    );
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!modal) return;
      if (e.key === "ArrowRight") modalNext();
      if (e.key === "ArrowLeft") modalPrev();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modal, modalNext, modalPrev, closeModal]);

  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);

  const spanClass = (index: number) => {
    const map: Record<number, string> = {
      0: "col-span-7", 1: "col-span-5",
      2: "col-span-4", 3: "col-span-4",
      4: "col-span-4", 5: "col-span-5",
      6: "col-span-7", 7: "col-span-12",
    };
    return map[index % 8] ?? "col-span-6";
  };

  const aspectClass = (index: number) => {
    const map: Record<number, string> = {
      0: "h-[395px]", 1: "h-[395px]",
      2: "h-[445px]", 3: "h-[445px]",
      4: "h-[445px]", 5: "h-[395px]",
      6: "h-[395px]", 7: "h-[395px]",
    };
    return map[index % 8] ?? "h-[395px]";
  };

  const m = modal as ModalState;

  return (
    <>
      <style>{CSS}</style>

      <div className="rh-root bg-[#f7f4ef] text-[#1a1a18] min-h-screen">

        {/* Hero — 285px height */}
        <section className="relative overflow-hidden flex flex-col items-center justify-center pb-0" style={{ height: "285px" }}>
          <div className="rh-hero-bg absolute inset-0" />
          <div className="rh-hero-overlay absolute inset-0" />
          <div className="rh-hero-pattern absolute inset-0" />

          <svg className="absolute right-[-20px] top-[-30px] opacity-[0.05]" width="560" height="560" viewBox="0 0 600 600">
            <path d="M300 50 C400 100 550 200 500 350 C450 480 300 530 150 480 C50 440 30 300 80 200 C130 100 200 0 300 50Z" stroke="white" strokeWidth="1" fill="none" />
            <path d="M300 50 C300 50 300 300 150 480" stroke="white" strokeWidth="0.5" fill="none" />
            <path d="M300 50 C350 200 420 280 500 350" stroke="white" strokeWidth="0.5" fill="none" />
          </svg>

          <div className="relative flex flex-col items-center pb-6">
            <h1 className="rh-serif font-light text-[52px] leading-none text-white tracking-tight text-center pt-[15px]">
              Our <em className="italic text-white">Projects</em>
            </h1>
            <p className="text-[12px] font-extralight tracking-[0.12em] text-white/35 mt-3 mb-5">
              Premium artificial greenery &#8212; crafted for lasting beauty
            </p>
            <div className="flex items-center gap-2 flex-wrap justify-center px-6">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`rh-hero-filter${activeFilter === f ? " active" : ""}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b8986a]/40 to-transparent" />
        </section>

        {/* Projects Grid */}
        <section className="px-30 pt-14 pb-20">
          {filtered.length === 0 ? (
            <p className="rh-serif italic text-[22px] text-[#8a8679] text-center py-20">
              No projects in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-12 gap-1.5">
              {filtered.map((p, i) => (
                <article
                  key={p.id}
                  className={`rh-card bg-[#ddd] rounded-sm ${spanClass(i)} ${aspectClass(i)}`}
                  onClick={() => openModal(p, 0)}
                >
                  <img src={p.images[0]} alt={p.title} loading="lazy" />
                  <div className="rh-card-static">
                    <div className="rh-serif font-light text-[18px] text-white/90 leading-tight">{p.title}</div>
                    <div className="text-[10px] font-extralight tracking-[0.08em] text-white/40 mt-0.5">
                      {p.location} &#183; {p.area}
                    </div>
                  </div>
                  <div className="rh-card-overlay">
                    <span className="rh-card-badge">{p.category}</span>
                    <div>
                      <div className="text-[10px] font-extralight tracking-[0.25em] uppercase text-white/40 mb-1">
                        {p.images.length} image{p.images.length > 1 ? "s" : ""}
                      </div>
                      <h2 className="rh-serif font-light text-[25px] text-white leading-tight">{p.title}</h2>
                      <p className="text-[11px] font-extralight text-white/45 mt-1.5 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                  {/* Arrow icon only — no box */}
                  <div className="rh-card-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Tagline */}
          <div className="rh-tagline-bg mt-16 px-16 py-20 flex flex-col items-center text-center relative overflow-hidden">
            <svg className="absolute left-[-60px] bottom-[-40px] opacity-[0.05]" width="420" height="420" viewBox="0 0 600 600">
              <path d="M300 50 C400 100 550 200 500 350 C450 480 300 530 150 480 C50 440 30 300 80 200 C130 100 200 0 300 50Z" stroke="white" strokeWidth="1" fill="none" />
            </svg>
            <svg className="absolute right-[-40px] top-[-20px] opacity-[0.04]" width="300" height="300" viewBox="0 0 600 600">
              <path d="M300 50 C400 100 550 200 500 350 C450 480 300 530 150 480 C50 440 30 300 80 200 C130 100 200 0 300 50Z" stroke="white" strokeWidth="1" fill="none" />
            </svg>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#b8986a]/50" />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8986a" strokeWidth="1">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M12 6v6M12 16h.01" />
              </svg>
              <div className="w-12 h-px bg-[#b8986a]/50" />
            </div>
            <blockquote className="rh-serif font-light italic text-[38px] leading-[1.2] text-white/90 max-w-2xl mb-6">
              &#8220;Nature, reimagined.<br />
              <em className="text-[#b8986a]/80 not-italic font-extralight">&#27704;&#24601;&#20043;&#32905; &#8212; forever green.&#8221;</em>
            </blockquote>
            <p className="text-[12px] font-extralight tracking-[0.22em] uppercase text-white/30 mb-10">
              Rich Haven &#183; Premium Artificial Greenery &#183; Philippines
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="rh-btn-gold">View All Services</a>
              <a href="#" className="rh-btn-ghost">Contact Us</a>
            </div>
          </div>
        </section>

        {/* Modal */}
        {modal !== null && (
          <div className="rh-modal-backdrop" onClick={closeModal}>
            <div className="rh-modal-split" onClick={(e) => e.stopPropagation()}>

              {/* LEFT: image + icon-only nav arrows */}
              <div className="rh-modal-left">
                <img
                  key={m.imgIndex}
                  src={m.project.images[m.imgIndex]}
                  alt={m.project.title}
                  className="rh-modal-main-img"
                />

                {m.project.images.length > 1 && (
                  <>
                    <button className="rh-img-nav prev" onClick={modalPrev}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 5l-7 7 7 7" />
                      </svg>
                    </button>
                    <button className="rh-img-nav next" onClick={modalNext}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                <div className="rh-img-counter">
                  {m.imgIndex + 1} / {m.project.images.length}
                </div>
              </div>

              {/* RIGHT: content + thumbnails */}
              <div className="rh-modal-right">
                {/* Close — icon only, no box */}
                <button className="rh-modal-close" onClick={closeModal}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

                <h2 className="rh-serif font-light text-[28px] leading-tight text-[#1a1a18] mb-4.5 pr-8">
                  {m.project.title}
                </h2>

                <div className="mb-5" style={{ borderTop: "0.5px solid rgba(0,0,0,0.07)" }}>
                  <div className="rh-detail-row">
                    <span className="rh-detail-label">Location</span>
                    <span className="rh-detail-value">{m.project.location}</span>
                  </div>
                  <div className="rh-detail-row">
                    <span className="rh-detail-label">Area</span>
                    <span className="rh-detail-value">{m.project.area}</span>
                  </div>
                  <div className="rh-detail-row">
                    <span className="rh-detail-label">Category</span>
                    <span className="rh-category-badge">{m.project.category}</span>
                  </div>
                </div>

                <p className="text-[12px] font-normal text-[#4a4a46] leading-[1.85] mb-2">
                  {m.project.desc.charAt(0).toUpperCase() + m.project.desc.slice(1)}, executed with our signature attention to material quality and natural aesthetics.
                </p>

                {/* Thumbnail strip */}
                {m.project.images.length > 1 && (
                  <div className="mt-auto pt-5" style={{ borderTop: "0.5px solid rgba(0,0,0,0.07)" }}>
                    <span className="text-[10px] font-light tracking-[0.18em] uppercase text-[#8a8679] block mb-3">
                      Photos
                    </span>
                    <div className="rh-thumb-strip">
                      {m.project.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt=""
                          className={`rh-thumb${idx === m.imgIndex ? " active" : ""}`}
                          onClick={() => setModal((prev) => (prev ? { ...prev, imgIndex: idx } : null))}
                        />
                      ))}
                    </div>
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