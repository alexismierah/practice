"use client";

import { useState, useEffect, useCallback } from "react";

interface Project {
  id: number;
  location: string;
  category: string;
  images: string[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    location: "Decorative Planter Box",
    category: "Commercial",
    images: ["/projects/proj1.jpeg", "/projects/proj2.jpeg", "/projects/proj3.jpeg"],
  },
  {
    id: 2,
    location: "Wall Greens",
    category: "Residential",
    images: ["/projects/proj4.jpeg", "/projects/proj5.jpeg", "/projects/proj6.jpeg"],
  },
  {
    id: 3,
    location: "Potted Artificial Plants",
    category: "Residential",
    images: ["/projects/proj15.jpeg", "/projects/proj16.jpeg", "/projects/proj17.jpeg"],
  },
  {
    id: 4,
    location: "Artificial Turf Grass",
    category: "Residential",
    images: ["/projects/proj7.jpeg", "/projects/proj8.jpeg", "/projects/proj9.jpeg"],
  },
  {
    id: 5,
    location: "Decorative Planter Box",
    category: "Commercial",
    images: [
      "/projects/proj10.jpeg", "/projects/proj11.jpeg", "/projects/proj12.jpeg",
      "/projects/proj13.jpeg", "/projects/proj38.jpeg", "/projects/proj39.jpeg",
      "/projects/proj40.jpeg", "/projects/proj41.jpeg",
    ],
  },
  {
    id: 6,
    location: "Wall Greens",
    category: "Residential",
    images: ["/projects/proj20.jpeg", "/projects/proj21.jpeg"],
  },
  {
    id: 7,
    location: "Artificial Turf Grass",
    category: "Commercial",
    images: ["/projects/proj29.jpeg", "/projects/proj30.jpeg", "/projects/proj48.jpeg"],
  },
  {
    id: 8,
    location: "Wall Greens",
    category: "Residential",
    images: ["/projects/proj25.jpeg", "/projects/proj24.jpeg"],
  },
  {
    id: 9,
    location: "Artificial Turf Grass",
    category: "Residential",
    images: ["/projects/proj42.jpeg", "/projects/proj43.jpeg"],
  },
  {
    id: 10,
    location: "Decorative Planter Box",
    category: "Commercial",
    images: ["/projects/proj28.jpeg", "/projects/proj26.jpeg", "/projects/proj27.jpeg"],
  },
  {
    id: 11,
    location: "Artificial Turf Grass",
    category: "Residential",
    images: ["/projects/proj36.jpeg", "/projects/proj37.jpeg", "/projects/proj33.jpeg"],
  },
  {
    id: 12,
    location: "Wall Greens",
    category: "Residential",
    images: ["/projects/proj50.jpeg", "/projects/proj51.jpeg", "/projects/proj52.jpeg"],
  },
  {
    id: 13,
    location: "Potted Artificial Plants",
    category: "Commercial",
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
  }

  /* ── MODAL ── */
  .rh-modal-backdrop {
    position: fixed; inset: 0;
    background: rgba(10,14,10,0.92);
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: rh-fade 0.2s ease;
    padding: 16px;
    box-sizing: border-box;
  }
  @keyframes rh-fade { from { opacity: 0; } to { opacity: 1; } }

  .rh-modal-image {
    position: relative;
    width: min(92vw, 600px);
    height: min(85vh, 500px);
    background: #111;
    animation: rh-scale 0.25s ease;
    overflow: hidden;
    border-radius: 6px;
  }
  @keyframes rh-scale { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }

  .rh-modal-main-img { width: 100%; height: 100%; object-fit: cover; display: block; animation: rh-imgfade 0.22s ease; }
  @keyframes rh-imgfade { from { opacity: 0; } to { opacity: 1; } }

  .rh-img-nav { position: absolute; top: 50%; transform: translateY(-50%); width: 36px; height: 36px; background: none; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: opacity 0.15s; z-index: 2; }
  .rh-img-nav:hover { opacity: 0.7; }
  .rh-img-nav.prev { left: 12px; }
  .rh-img-nav.next { right: 12px; }

  .rh-img-counter { position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 300; letter-spacing: 0.12em; color: rgba(255,255,255,0.6); background: rgba(0,0,0,0.42); padding: 4px 12px; z-index: 2; white-space: nowrap; border-radius: 9999px; }

  .rh-modal-close { position: absolute; top: 14px; right: 14px; width: 30px; height: 30px; background: rgba(0,0,0,0.45); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: opacity 0.15s; z-index: 2; border-radius: 50%; }
  .rh-modal-close:hover { opacity: 0.5; }

  /* ── MOBILE RESPONSIVE ── */
  @media (max-width: 768px) {
    .rh-grid {
      grid-template-columns: 1fr;
      gap: 6px;
    }

    .rh-hero-cell {
      grid-column: span 1 !important;
      min-height: auto;
      padding: 28px 20px;
    }

    .rh-card {
      grid-column: span 1 !important;
    }

    .rh-card-mobile-h { height: 260px !important; }

    .rh-modal-image {
      width: 100%;
      height: 70vw;
      min-height: 260px;
      border-radius: 10px;
    }
  }

  @media (min-width: 640px) and (max-width: 1023px) {
    .rh-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .rh-hero-cell {
      grid-column: span 2 !important;
      min-height: auto;
    }

    .rh-card {
      grid-column: span 1 !important;
    }
  }

  @media (min-width: 1024px) {
    .rh-card[data-span="4"]  { grid-column: span 4; }
    .rh-card[data-span="6"]  { grid-column: span 6; }
    .rh-card[data-span="8"]  { grid-column: span 8; }
    .rh-card[data-span="12"] { grid-column: span 12; }
  }
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

  const desktopSpan = (index: number): string => {
    const map: Record<number, string> = {
      0: "8", 1: "4", 2: "4", 3: "4",
      4: "6", 5: "6", 6: "4", 7: "4",
      8: "4", 9: "12", 10: "4", 11: "4",
      12: "4", 13: "4",
    };
    return map[index % 15] ?? "6";
  };

  const heightClass = (index: number) => {
    const map: Record<number, string> = {
      0: "h-[450px]", 1: "h-[440px]", 2: "h-[440px]", 3: "h-[440px]",
      4: "h-[445px]", 5: "h-[445px]", 6: "h-[445px]", 7: "h-[445px]",
      8: "h-[445px]", 9: "h-[395px]", 10: "h-[395px]", 11: "h-[395px]",
      12: "h-[395px]", 13: "h-[395px]",
    };
    return map[index % 13] ?? "h-[395px]";
  };

  const m = modal as ModalState;

  return (
    <>
      <style>{CSS}</style>

      <div className="rh-root min-h-screen" style={{ background: "#f7f7f7" }}>

        <section className="px-4 sm:px-8 lg:px-25 pt-1.5 pb-20">
          <div className="rh-grid">

            {/* TEXT CELL */}
            <div className="rh-hero-cell">
              <div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 400,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#8fa882",
                    marginBottom: "12px",
                  }}
                >
                  WHAT WE CREATE
                </p>

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
                  Explore Our{" "}
                  <em style={{ fontStyle: "italic", fontWeight: 300, color: "#4A6741" }}>
                    Creations
                  </em>
                </h1>

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
                className={`rh-card bg-[#ddd] ${heightClass(i)} rh-card-mobile-h`}
                data-span={desktopSpan(i)}
                onClick={() => openModal(p, 0)}
              >
                <img src={p.images[0]} alt={p.location} loading="lazy" />

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
                    {p.location}
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
                    {p.category}
                  </div>
                </div>

                <div className="rh-card-overlay">
                  <span className="rh-card-badge">{p.category}</span>
                  <div>
                    <h2
                      className="rh-root"
                      style={{ fontWeight: 300, fontSize: 24, color: "#fff", lineHeight: 1.25 }}
                    >
                      {p.location}
                    </h2>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 10,
                        fontWeight: 200,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {p.images.length} image{p.images.length > 1 ? "s" : ""}
                    </div>
                  </div>
                </div>

                <div className="rh-card-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <div className="rh-modal-image" onClick={(e) => e.stopPropagation()}>

              <img
                key={m.imgIndex}
                src={m.project.images[m.imgIndex]}
                alt={m.project.location}
                className="rh-modal-main-img"
              />

              {m.project.images.length > 1 && (
                <>
                  <button className="rh-img-nav prev" onClick={modalPrev}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                  </button>
                  <button className="rh-img-nav next" onClick={modalNext}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <div className="rh-img-counter">
                {m.imgIndex + 1} / {m.project.images.length}
              </div>

              <button className="rh-modal-close" onClick={closeModal}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

            </div>
          </div>
        )}

      </div>
    </>
  );
}