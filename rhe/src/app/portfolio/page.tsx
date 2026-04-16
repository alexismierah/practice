"use client";

import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    tag: "Residential Garden",
    title: "Alabang Estate — Backyard Sanctuary",
    location: "Muntinlupa City, Metro Manila",
    featured: true,
    // Replace with your actual video URL
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    svg: (
      <svg className="rh-card-visual" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="360" fill="#2d4a24"/>
        <rect x="0" y="200" width="640" height="160" fill="#3a5f2e"/>
        <rect x="0" y="220" width="640" height="20" fill="#4a7a38" opacity="0.4"/>
        <rect x="80" y="60" width="200" height="160" rx="4" fill="#1e3318" opacity="0.5"/>
        <rect x="100" y="80" width="160" height="120" rx="2" fill="#243d1c" opacity="0.7"/>
        <rect x="360" y="90" width="180" height="130" rx="4" fill="#1e3318" opacity="0.5"/>
        <rect x="375" y="105" width="150" height="100" rx="2" fill="#243d1c" opacity="0.7"/>
        {[210,228,246,264,282,300,318,336].map((y, i) => (
          <rect key={i} x="0" y={y} width="640" height="8" fill="#5a8a4a" opacity={i % 2 === 0 ? 0.35 : 0.25}/>
        ))}
        <rect x="290" y="200" width="60" height="160" fill="#c8b89a" opacity="0.5"/>
        <rect x="295" y="200" width="50" height="160" fill="#d4c4aa" opacity="0.3"/>
        <rect x="0" y="0" width="640" height="70" fill="#a8c496" opacity="0.2"/>
        <rect x="16" y="16" width="120" height="24" rx="12" fill="#1e3318" opacity="0.7"/>
        <text x="76" y="32" textAnchor="middle" fontFamily="Georgia,serif" fontSize="10" fill="#a8d896" letterSpacing="2">FEATURED</text>
      </svg>
    ),
  },
  {
    id: 2,
    tag: "Rooftop",
    title: "BGC Sky Terrace",
    location: "Taguig City",
    featured: false,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    svg: (
      <svg className="rh-card-visual" viewBox="0 0 300 225" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="225" fill="#3b5e32"/>
        <rect x="0" y="0" width="300" height="100" fill="#2a4522"/>
        <rect x="0" y="110" width="300" height="115" fill="#6b9459" opacity="0.6"/>
        {[120,133,146,159,172,185,198,211].map((y, i) => (
          <rect key={i} x="0" y={y} width="300" height="7" fill="#7aad65" opacity={i % 2 === 0 ? 0.5 : 0.35}/>
        ))}
        <rect x="30" y="75" width="30" height="40" rx="3" fill="#8a6a4a" opacity="0.8"/>
        <rect x="35" y="50" width="20" height="30" rx="4" fill="#4a7a38" opacity="0.9"/>
        <rect x="200" y="68" width="36" height="46" rx="3" fill="#7a5a3a" opacity="0.8"/>
        <rect x="207" y="40" width="22" height="35" rx="4" fill="#3d6e2a" opacity="0.9"/>
        <line x1="0" y1="115" x2="300" y2="115" stroke="#bfab94" strokeWidth="2" opacity="0.5"/>
      </svg>
    ),
  },
  {
    id: 3,
    tag: "Playground",
    title: "Pasig Family Garden",
    location: "Pasig City",
    featured: false,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    svg: (
      <svg className="rh-card-visual" viewBox="0 0 300 225" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="225" fill="#e8d9b8"/>
        <rect x="0" y="130" width="300" height="95" fill="#5f8c4a"/>
        {[135,147,159,171,183,195,207,219].map((y, i) => (
          <rect key={i} x="0" y={y} width="300" height="6" fill="#78a85f" opacity={i % 2 === 0 ? 0.5 : 0.3}/>
        ))}
        <rect x="50" y="50" width="90" height="80" rx="3" fill="#d4895a" opacity="0.8"/>
        <rect x="60" y="30" width="70" height="25" rx="3" fill="#b86d3c" opacity="0.9"/>
        <line x1="140" y1="50" x2="190" y2="130" stroke="#c07840" strokeWidth="6" strokeLinecap="round" opacity="0.8"/>
        <line x1="230" y1="20" x2="220" y2="100" stroke="#8a6a3a" strokeWidth="2" opacity="0.7"/>
        <line x1="260" y1="20" x2="250" y2="100" stroke="#8a6a3a" strokeWidth="2" opacity="0.7"/>
        <rect x="215" y="95" width="40" height="8" rx="4" fill="#8a6a3a" opacity="0.8"/>
      </svg>
    ),
  },
  {
    id: 4,
    tag: "Courtyard",
    title: "Makati Zen Walkway",
    location: "Makati City",
    featured: false,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    svg: (
      <svg className="rh-card-visual" viewBox="0 0 300 225" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="225" fill="#2c3e2a"/>
        <rect x="110" y="0" width="80" height="225" fill="#8a7a68" opacity="0.4"/>
        <rect x="0" y="0" width="110" height="225" fill="#3e6030"/>
        {Array.from({length:16},(_,i)=>i).map(i => (
          <rect key={i} x="0" y={i*14} width="110" height="8" fill="#5a8c48" opacity={i%2===0?0.5:0.3}/>
        ))}
        <rect x="190" y="0" width="110" height="225" fill="#3e6030"/>
        {Array.from({length:16},(_,i)=>i).map(i => (
          <rect key={i} x="190" y={i*14} width="110" height="8" fill="#5a8c48" opacity={i%2===0?0.5:0.3}/>
        ))}
        {[20,70,120,170].map((y, i) => (
          <rect key={i} x="120" y={y} width="60" height="40" rx="3" fill="#c4b49a" opacity="0.6"/>
        ))}
      </svg>
    ),
  },
  {
    id: 5,
    tag: "Poolside",
    title: "Laguna Poolside Retreat — Canlubang",
    location: "Calamba, Laguna",
    featured: true,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    svg: (
      <svg className="rh-card-visual" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
        <rect width="640" height="360" fill="#1a3a4e"/>
        <rect x="100" y="60" width="440" height="220" rx="40" fill="#2a7a9e" opacity="0.85"/>
        <rect x="110" y="70" width="420" height="200" rx="35" fill="#3a8fb8" opacity="0.5"/>
        <line x1="150" y1="100" x2="490" y2="100" stroke="#6ac5e8" strokeWidth="1" opacity="0.3"/>
        <line x1="160" y1="130" x2="480" y2="130" stroke="#6ac5e8" strokeWidth="1" opacity="0.2"/>
        <line x1="140" y1="160" x2="500" y2="160" stroke="#6ac5e8" strokeWidth="1" opacity="0.3"/>
        <rect x="0" y="280" width="640" height="80" fill="#4a7a3a"/>
        <rect x="0" y="0" width="100" height="360" fill="#4a7a3a"/>
        <rect x="540" y="0" width="100" height="360" fill="#4a7a3a"/>
        {Array.from({length:22},(_,i)=>i).map(i=>(
          <rect key={i} x="5" y={i*12} width="90" height="6" fill="#5a9248" opacity={i%2===0?0.4:0.25}/>
        ))}
        {[140,240,320,420].map((x,i)=>(
          <rect key={i} x={x} y="288" width="80" height="22" rx="5" fill="#c8b08a" opacity="0.75"/>
        ))}
      </svg>
    ),
  },
  {
    id: 6,
    tag: "Commercial",
    title: "QC Office Biophilic Wall",
    location: "Quezon City",
    featured: false,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    svg: (
      <svg className="rh-card-visual" viewBox="0 0 300 225" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="225" fill="#f5f0e8"/>
        <rect x="0" y="0" width="300" height="150" fill="#e8e0cc"/>
        <rect x="20" y="20" width="55" height="110" rx="4" fill="#5a8a4a" opacity="0.8"/>
        <rect x="85" y="20" width="55" height="110" rx="4" fill="#4a7a3a" opacity="0.7"/>
        <rect x="150" y="20" width="55" height="110" rx="4" fill="#3d6e2a" opacity="0.8"/>
        <rect x="215" y="20" width="65" height="110" rx="4" fill="#4f8040" opacity="0.7"/>
        <rect x="0" y="150" width="300" height="75" fill="#5a8a4a"/>
        {[155,167,179,191,203,215].map((y,i)=>(
          <rect key={i} x="0" y={y} width="300" height="6" fill="#78a85f" opacity={i%2===0?0.5:0.3}/>
        ))}
      </svg>
    ),
  },
];

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M6 4.5L13.5 9L6 13.5V4.5Z" fill="currentColor"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const LeafDivider = () => (
  <div className="pf-leaf-divider">
    <div className="pf-leaf-line" />
    <div className="pf-leaf-dot" />
    <div className="pf-leaf-line" />
  </div>
);

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeProject]);

  const openModal = (project: typeof projects[0]) => {
    setActiveProject(project);
    setTimeout(() => videoRef.current?.play(), 100);
  };

  const closeModal = () => {
    videoRef.current?.pause();
    setActiveProject(null);
  };

  return (
    <main className="pf-page">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap");

        .pf-page, .pf-page * { box-sizing: border-box; }

        .pf-page {
          font-family: "Inter", sans-serif;
          background: #f2f6ef;
          min-height: 100vh;
          padding: 80px 64px;
        }

        .pf-inner { max-width: 1200px; margin: 0 auto; }

        /* ── HEADER ── */
        .pf-eyebrow {
          text-align: center;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #7a8f80;
          margin: 0 0 14px;
          font-weight: 400;
        }

        .pf-title {
          text-align: center;
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(2rem, 2vw + 1.2rem, 3.2rem);
          color: #163521;
          line-height: 1.1;
          letter-spacing: -.02em;
          margin: 0 0 16px;
        }

        .pf-title em {
          font-style: italic;
          font-weight: 500;
          color: #3f7a55;
        }

        .pf-subtitle {
          text-align: center;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #7a8f80;
          line-height: 1.75;
          max-width: 520px;
          margin: 0 auto;
          letter-spacing: .015em;
        }

        /* ── LEAF DIVIDER ── */
        .pf-leaf-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 40px 0;
        }
        .pf-leaf-line { width: 64px; height: 1px; background: #7a9e6e; opacity: .5; }
        .pf-leaf-dot {
          width: 10px; height: 10px;
          background: #7a9e6e; opacity: .7;
          border-radius: 50% 0;
          transform: rotate(45deg);
        }

        /* ── GRID ── */
        .pf-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-top: 8px;
        }

        /* ── CARD ── */
        .pf-card {
          position: relative;
          border-radius: 16px;
          border: 1px solid rgba(26, 46, 26, 0.1);
          overflow: hidden;
          cursor: pointer;
          background: #fff;
          transition: transform .3s ease, border-color .25s ease, box-shadow .3s ease;
        }

        .pf-card:hover {
          transform: translateY(-4px);
          border-color: rgba(47, 111, 68, 0.3);
          box-shadow: 0 16px 40px rgba(20, 50, 30, 0.14);
        }

        .pf-card.featured { grid-column: span 2; }

        .rh-card-visual { width: 100%; display: block; }

        /* ── PLAY OVERLAY ── */
        .pf-card-visual-wrap { position: relative; overflow: hidden; }

        .pf-play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(8, 26, 16, 0);
          transition: background .3s ease;
        }

        .pf-card:hover .pf-play-overlay { background: rgba(8, 26, 16, 0.38); }

        .pf-play-btn {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.94);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2f6f44;
          cursor: pointer;
          transform: scale(0.65);
          opacity: 0;
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), opacity .25s ease;
          box-shadow: 0 8px 28px rgba(0,0,0,0.22);
          pointer-events: none;
        }

        .pf-card:hover .pf-play-btn {
          transform: scale(1);
          opacity: 1;
        }

        /* ── INFO BAR ── */
        .pf-card-info {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 16px 20px 18px;
          background: #fff;
          border-top: 1px solid rgba(26, 46, 26, 0.06);
        }

        .pf-card-tag {
          display: block;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #7a8f80;
          margin-bottom: 4px;
          font-weight: 500;
        }

        .pf-card-title {
          font-family: "Playfair Display", serif;
          font-weight: 700;
          color: #163521;
          line-height: 1.25;
          margin: 0 0 3px;
        }

        .pf-card.featured .pf-card-title { font-size: 1.05rem; }
        .pf-card:not(.featured) .pf-card-title { font-size: .92rem; }

        .pf-card-location {
          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          font-weight: 300;
          color: #9aaa9f;
          letter-spacing: .01em;
        }

        /* ── WATCH LABEL ── */
        .pf-watch-label {
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #2f6f44;
          opacity: 0;
          transition: opacity .2s ease;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .pf-card:hover .pf-watch-label { opacity: 1; }

        .pf-watch-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #2f6f44;
          animation: pf-pulse 1.6s ease-in-out infinite;
        }

        @keyframes pf-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .45; transform: scale(0.65); }
        }

        /* ── MODAL BACKDROP ── */
        .pf-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(8, 20, 12, 0);
          backdrop-filter: blur(0px);
          transition: background .35s ease, backdrop-filter .35s ease;
          pointer-events: none;
        }

        .pf-modal-backdrop.open {
          background: rgba(8, 20, 12, 0.8);
          backdrop-filter: blur(10px);
          pointer-events: all;
        }

        /* ── MODAL BOX ── */
        .pf-modal {
          position: relative;
          width: 100%;
          max-width: 880px;
          border-radius: 20px;
          overflow: hidden;
          background: #0d1f12;
          border: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 48px 120px rgba(0,0,0,0.55);
          transform: scale(0.86) translateY(28px);
          opacity: 0;
          transition: transform .42s cubic-bezier(.34,1.2,.64,1), opacity .35s ease;
        }

        .pf-modal-backdrop.open .pf-modal {
          transform: scale(1) translateY(0);
          opacity: 1;
        }

        /* ── MODAL HEADER ── */
        .pf-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 24px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }

        .pf-modal-tag {
          font-family: "Inter", sans-serif;
          font-size: 10px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #7ab88a;
          font-weight: 500;
          margin: 0 0 4px;
        }

        .pf-modal-title {
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: 1.08rem;
          color: #e8f2e8;
          margin: 0 0 3px;
          line-height: 1.2;
        }

        .pf-modal-location {
          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          font-weight: 300;
          color: rgba(180, 210, 185, 0.5);
          margin: 0;
        }

        .pf-modal-close {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: rgba(200, 220, 205, 0.65);
          transition: background .2s, color .2s, border-color .2s;
          flex-shrink: 0;
        }

        .pf-modal-close:hover {
          background: rgba(255,255,255,0.13);
          border-color: rgba(255,255,255,0.22);
          color: #fff;
        }

        /* ── VIDEO ── */
        .pf-modal-video {
          width: 100%;
          display: block;
          background: #000;
          max-height: 520px;
          object-fit: contain;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .pf-page { padding: 64px 40px; }
          .pf-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .pf-card.featured { grid-column: span 2; }
        }

        @media (max-width: 640px) {
          .pf-page { padding: 48px 20px; }
          .pf-grid { grid-template-columns: 1fr; }
          .pf-card.featured { grid-column: span 1; }
          .pf-modal-backdrop { padding: 12px; }
          .pf-modal-header { padding: 14px 16px 12px; }
        }
      `}</style>

      <div className="pf-inner">
        <p className="pf-eyebrow">Our Work</p>
        <h1 className="pf-title">Crafted with <em>Nature</em> in Mind</h1>
        <p className="pf-subtitle">
          A curated selection of artificial grass and landscaping transformations — spaces
          reimagined with texture, longevity, and quiet elegance.
        </p>

        <LeafDivider />

        <div className="pf-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`pf-card${project.featured ? " featured" : ""}`}
              onClick={() => openModal(project)}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              role="button"
              tabIndex={0}
              aria-label={`Watch video: ${project.title}`}
              onKeyDown={(e) => e.key === "Enter" && openModal(project)}
            >
              <div className="pf-card-visual-wrap">
                {project.svg}
                <div className="pf-play-overlay">
                  <div className="pf-play-btn">
                    <PlayIcon />
                  </div>
                </div>
              </div>

              <div className="pf-card-info">
                <div>
                  <span className="pf-card-tag">{project.tag}</span>
                  <h3 className="pf-card-title">{project.title}</h3>
                  <span className="pf-card-location">{project.location}</span>
                </div>
                <div className="pf-watch-label">
                  <span className="pf-watch-dot" />
                  Watch
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── VIDEO MODAL ── */}
      <div
        className={`pf-modal-backdrop${activeProject ? " open" : ""}`}
        onClick={(e) => e.target === e.currentTarget && closeModal()}
        aria-modal="true"
        role="dialog"
      >
        {activeProject && (
          <div className="pf-modal">
            <div className="pf-modal-header">
              <div>
                <p className="pf-modal-tag">{activeProject.tag}</p>
                <h2 className="pf-modal-title">{activeProject.title}</h2>
                <p className="pf-modal-location">{activeProject.location}</p>
              </div>
              <button className="pf-modal-close" onClick={closeModal} aria-label="Close video">
                <CloseIcon />
              </button>
            </div>
            <video
              ref={videoRef}
              className="pf-modal-video"
              src={activeProject.videoUrl}
              controls
              playsInline
            />
          </div>
        )}
      </div>
    </main>
  );
}