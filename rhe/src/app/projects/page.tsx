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
    images: ["/projects/proj29.jpeg", "/projects/proj30.jpeg", "/projects/proj48.jpeg"],
  },
  {
    id: 8,
    title: "Casa Bella Residence",
    location: "Makati City",
    category: "Commercial",
    desc: "Full living wall installation across indoor dining and lounge areas",
    area: "320 sqm",
    images: ["/projects/proj25.jpeg", "/projects/proj24.jpeg"],
  },
  {
    id: 9,
    title: "Casa Bella Residence",
    location: "Makati City",
    category: "Commercial",
    desc: "Full living wall installation across indoor dining and lounge areas",
    area: "320 sqm",
    images: ["/projects/proj42.jpeg", "/projects/proj43.jpeg"],
  },
  {
    id: 10,
    title: "Casa Bella Residence",
    location: "Makati City",
    category: "Commercial",
    desc: "Full living wall installation across indoor dining and lounge areas",
    area: "320 sqm",
    images: ["/projects/proj28.jpeg", "/projects/proj26.jpeg", "/projects/proj27.jpeg"],
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

interface ModalState {
  project: Project;
  imgIndex: number;
}

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@200;300;400;500&display=swap');

  .rh-root { font-family: 'DM Sans', sans-serif; }
  .rh-serif { font-family: 'Cormorant Garamond', serif; }

  /* ── UNIFIED GRID ── */
  .rh-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 6px;
  }

  /* Text hero cell */
  .rh-hero-cell {
    grid-column: span 4;
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px 28px 28px;
    min-height: 420px;
  }

  /* Cards */
  .rh-card { position: relative; overflow: hidden; cursor: pointer; border-radius: 6px; }
  .rh-card img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s; filter: brightness(0.88); }
  .rh-card:hover img { transform: scale(1.06); filter: brightness(0.55); }

  .rh-card-static { position: absolute; bottom: 0; left: 0; right: 0; padding: 32px 18px 14px; background: linear-gradient(to top, rgba(10,15,10,0.72) 0%, transparent 100%); pointer-events: none; transition: opacity 0.3s; }
  .rh-card:hover .rh-card-static { opacity: 0; }

  .rh-card-overlay { position: absolute; inset: 0; padding: 18px; display: flex; flex-direction: column; justify-content: space-between; background: linear-gradient(to top, rgba(15,20,15,0.9) 0%, rgba(15,20,15,0.1) 60%, transparent 100%); opacity: 0; transition: opacity 0.35s; pointer-events: none; border-radius: 6px; }
  .rh-card:hover .rh-card-overlay { opacity: 1; pointer-events: auto; }

  .rh-card-arrow {
    position: absolute; top: 14px; right: 14px; width: 28px; height: 28px;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transform: translate(4px,-4px);
    transition: opacity 0.25s, transform 0.25s;
    background: none; border: none;
  }
  .rh-card:hover .rh-card-arrow { opacity: 1; transform: translate(0,0); }

  .rh-card-badge {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #fff;
    padding: 6px 14px;
    align-self: flex-start;
    border-radius: 9999px;
    border: 0.5px solid rgba(255,255,255,0.35);
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(8px);
    transition: color 0.2s, background 0.2s, border-color 0.2s;
    cursor: pointer;
  }
  .rh-card:hover .rh-card-badge:hover {
    color: #1a2e16;
    background: #fff;
    border-color: #fff;
  }

  .rh-category-badge {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #2d3d2d;
    padding: 5px 14px;
    background: #ede9e2;
    border-radius: 9999px;
  }

  /* Modal */
  .rh-modal-backdrop { position: fixed; inset: 0; background: rgba(10,14,10,0.92); z-index: 999; display: flex; align-items: center; justify-content: center; animation: rh-fade 0.2s ease; }
  @keyframes rh-fade { from { opacity: 0; } to { opacity: 1; } }

  .rh-modal-split { position: relative; width: min(92vw, 980px); height: min(82vh, 500px); display: flex; background: #fff; animation: rh-scale 0.25s ease; overflow: hidden; border-radius: 6px; }
  @keyframes rh-scale { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }

  .rh-modal-left { position: relative; flex: 0 0 58%; background: #111; overflow: hidden; border-radius: 6px 0 0 6px; }
  .rh-modal-main-img { width: 100%; height: 100%; object-fit: cover; display: block; animation: rh-imgfade 0.22s ease; }
  @keyframes rh-imgfade { from { opacity: 0; } to { opacity: 1; } }

  .rh-img-nav { position: absolute; top: 50%; transform: translateY(-50%); width: 36px; height: 36px; background: none; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: opacity 0.15s; z-index: 2; }
  .rh-img-nav:hover { opacity: 0.7; }
  .rh-img-nav.prev { left: 12px; }
  .rh-img-nav.next { right: 12px; }

  .rh-img-counter { position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 300; letter-spacing: 0.12em; color: rgba(255,255,255,0.6); background: rgba(0,0,0,0.42); padding: 4px 12px; z-index: 2; white-space: nowrap; border-radius: 9999px; }

  .rh-modal-right { flex: 1; display: flex; flex-direction: column; padding: 48px 28px 50px; position: relative; overflow-y: auto; background: #fff; }

  .rh-modal-close { position: absolute; top: 14px; right: 14px; width: 30px; height: 30px; background: none; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: opacity 0.15s; z-index: 2; }
  .rh-modal-close:hover { opacity: 0.5; }

  .rh-detail-row { display: flex; align-items: center; gap: 10px; padding: 7px 0; border-bottom: 0.5px solid rgba(0,0,0,0.07); }
  .rh-detail-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #a8ad9e;
    flex: 0 0 80px;
  }
  .rh-detail-value {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 300;
    color: #1c1e19;
  }

  .rh-thumb-strip { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 4px; }
  .rh-thumb { width: 52px; height: 36px; object-fit: cover; cursor: pointer; opacity: 0.4; border: 1.5px solid transparent; transition: opacity 0.15s, border-color 0.15s; flex-shrink: 0; border-radius: 3px; }
  .rh-thumb.active { opacity: 1; border-color: #b8986a; }

  .rh-btn-gold { font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 300; letter-spacing: 0.18em; text-transform: uppercase; color: #e8d5b0; padding: 12px 28px; cursor: pointer; text-decoration: none; display: inline-block; border: 0.5px solid rgba(184,152,106,0.55); background: rgba(184,152,106,0.1); }
  .rh-btn-ghost { font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 300; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.4); padding: 12px 28px; cursor: pointer; text-decoration: none; display: inline-block; border: 0.5px solid rgba(255,255,255,0.12); background: transparent; }
`;

export default function ProjectsPage() {
  const [modal, setModal] = useState<ModalState | null>(null);

  const openModal = (project: Project, imgIndex = 0) => setModal({ project, imgIndex });
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
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  const spanClass = (index: number) => {
    const map: Record<number, string> = {
      0: "col-span-8",
      1: "col-span-4",
      2: "col-span-4",
      3: "col-span-4",
      4: "col-span-6",
      5: "col-span-6",
      6: "col-span-4",
      7: "col-span-4",
      8: "col-span-4",
      9: "col-span-12",
      10: "col-span-4",
      11: "col-span-4",
      12: "col-span-4",
      13: "col-span-4",
    };
    return map[index % 15] ?? "col-span-6";
  };

  const heightClass = (index: number) => {
    const map: Record<number, string> = {
      0: "h-[450px]",
      1: "h-[440px]",
      2: "h-[440px]",
      3: "h-[440px]",
      4: "h-[445px]",
      5: "h-[445px]",
      6: "h-[445px]",
      7: "h-[445px]",
      8: "h-[445px]",
      9: "h-[395px]",
      10: "h-[395px]",
      11: "h-[395px]",
      12: "h-[395px]",
      13: "h-[395px]",
    };
    return map[index % 13] ?? "h-[395px]";
  };

  const m = modal as ModalState;

  return (
    <>
      <style>{CSS}</style>

      <div className="rh-root min-h-screen" style={{ background: "#f7f7f7" }}>

        <section className="px-25 pt-1.5 pb-20">
          <div className="rh-grid">

            {/* TEXT CELL */}
            <div className="rh-hero-cell">
              <div>
                {/* "WHAT WE CREATE" — styled like "About Rich Haven" / "What we offer" */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 400,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#8fa882",
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  WHAT WE CREATE
                </p>

                {/* "Explore Our Creations" — styled like "Your space deserves to be always green" */}
                <h1
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 300,
                    lineHeight: 1.12,
                    letterSpacing: "-0.022em",
                    color: "#1c1e19",
                    marginBottom: 24,
                  }}
                >
                  Explore{" "}
                  <em style={{ fontStyle: "italic", fontWeight: 200, color: "#2d4a27" }}>
                    Our Creations
                  </em>
                </h1>

                {/* Paragraph — styled like hw-step-sub */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "#6b7060",
                    lineHeight: 1.8,
                  }}
                >
                  A curated selection of our projects showcasing premium artificial greenery across residential and commercial spaces. Each installation is crafted to bring lasting beauty and timeless appeal.
                </p>
              </div>
            </div>

            {/* CARDS */}
            {PROJECTS.map((p, i) => (
              <article
                key={p.id}
                className={`rh-card bg-[#ddd] ${spanClass(i)} ${heightClass(i)}`}
                onClick={() => openModal(p, 0)}
              >
                <img src={p.images[0]} alt={p.title} loading="lazy" />
                <div className="rh-card-static">
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                      fontSize: 17,
                      color: "rgba(255,255,255,0.9)",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 10,
                      fontWeight: 200,
                      letterSpacing: "0.08em",
                      color: "rgba(255,255,255,0.4)",
                      marginTop: 2,
                    }}
                  >
                    {p.location} &middot; {p.area}
                  </div>
                </div>
                <div className="rh-card-overlay">
                  <span className="rh-card-badge">{p.category}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 10,
                        fontWeight: 200,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.4)",
                        marginBottom: 4,
                      }}
                    >
                      {p.images.length} image{p.images.length > 1 ? "s" : ""}
                    </div>
                    <h2
                      className="rh-root"
                      style={{ fontWeight: 300, fontSize: 24, color: "#fff", lineHeight: 1.25 }}
                    >
                      {p.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        fontWeight: 200,
                        color: "rgba(255,255,255,0.45)",
                        marginTop: 6,
                        lineHeight: 1.7,
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
                <div className="rh-card-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Modal ── */}
        {modal !== null && (
          <div className="rh-modal-backdrop" onClick={closeModal}>
            <div className="rh-modal-split" onClick={(e) => e.stopPropagation()}>
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

              <div className="rh-modal-right">
                <button className="rh-modal-close" onClick={closeModal}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1a18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal title — hw-step-label size/weight */}
                <h2
                  className="rh-root"
                  style={{
                    fontWeight: 300,
                    fontSize: 28,
                    lineHeight: 1.2,
                    color: "#1c1e19",
                    marginBottom: 18,
                    paddingRight: 32,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {m.project.title}
                </h2>

                <div style={{ borderTop: "0.5px solid rgba(0,0,0,0.07)" }}>
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

                {/* Description — hw-step-sub style */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 300,
                    color: "#6b7060",
                    lineHeight: 1.8,
                    marginTop: 16,
                  }}
                >
                  {m.project.desc.charAt(0).toUpperCase() + m.project.desc.slice(1)}, executed with our signature attention to material quality and natural aesthetics.
                </p>

                {m.project.images.length > 1 && (
                  <div className="mt-auto pt-5" style={{ borderTop: "0.5px solid rgba(0,0,0,0.07)" }}>
                    {/* "PHOTOS" label — color like paragraph, style like "What we offer" */}
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 10,
                        fontWeight: 400,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "#6b7060",
                        display: "block",
                        marginBottom: 10,
                      }}
                    >
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