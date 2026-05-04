"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ─── DATA ──────────────────────────────────────────────────────────────────────

type CategoryKey =
  | "Potted Artificial Plants"
  | "Artificial Wall Greens"
  | "Artificial Turf Grass"
  | "Decorative Planter Box"
  | "Premium Hanging Plants";

interface RawProject {
  category: CategoryKey;
  images: string[];
}

const RAW_PROJECTS: RawProject[] = [
  { category: "Decorative Planter Box", images: ["/projects/proj1.jpeg", "/projects/proj2.jpeg", "/projects/proj3.jpeg",
    "/projects/proj10.jpeg", "/projects/proj11.jpeg", "/projects/pb1.jpg", "/projects/pb2.jpg",  "/projects/pb4.jpg", 
    "/projects/pb6.jpg", "/projects/pb7.jpg", "/projects/pb8.jpg", "/projects/pb10.jpg", "/projects/proj12.jpeg", 
    "/projects/proj28.jpeg", "/projects/proj26.jpeg", "/projects/proj27.jpeg"
  ]},
  { category: "Artificial Wall Greens", images: ["/projects/proj4.jpeg", "/projects/proj5.jpeg", "/projects/proj6.jpeg", 
    "/projects/proj20.jpeg", "/projects/proj21.jpeg", "/projects/proj25.jpeg", "/projects/proj24.jpeg", 
    "/projects/proj50.jpeg", "/projects/proj51.jpeg", "/projects/proj52.jpeg", "/projects/proj13.jpeg",
    "/projects/ag17.jpg", "/projects/ag17.1.jpg", "/projects/ag17.2.jpg", "/projects/ag1.jpg", "/projects/ag2.jpg", 
    "/projects/ag3.jpg", "/projects/ag4.jpg", "/projects/ag5.jpg", "/projects/ag6.jpg", "/projects/ag7.jpg", 
    "/projects/ag9.jpg", "/projects/ag10.jpg", "/projects/ag11.jpg",  "/projects/ag12.jpg", "/projects/ag13.jpg", 
    "/projects/ag14.jpg", "/projects/ag15.jpg", "/projects/ag20.jpg", "/projects/ag21.jpg"
  ]},
  { category: "Artificial Turf Grass", images: ["/projects/proj7.jpeg", "/projects/proj8.jpeg", "/projects/proj9.jpeg", 
    "/projects/proj42.jpeg", "/projects/proj43.jpeg", "/projects/proj36.jpeg", "/projects/proj37.jpeg", 
    "/projects/proj33.jpeg", "/projects/proj38.jpeg", "/projects/proj39.jpeg", "/projects/proj40.jpeg", 
    "/projects/proj41.jpeg", "/projects/g1.jpg", "/projects/g2.jpg", "/projects/g3.jpg", "/projects/g4.jpg",
    "/projects/g5.jpg", "/projects/g6.jpg", "/projects/g7.jpg", "/projects/g8.jpg", "/projects/g9.jpg",
    "/projects/g10.jpg", "/projects/g11.jpg", "/projects/g12.jpg", "/projects/g13.jpg", "/projects/g14.jpg",
    "/projects/proj30.jpeg", "/projects/proj48.jpeg", 
  ]},
  { category: "Potted Artificial Plants", images: ["/projects/proj15.jpeg", "/projects/proj16.jpeg", "/projects/proj17.jpeg", 
    "/projects/proj53.jpeg", "/projects/proj54.jpeg", "/projects/proj55.jpeg", "/projects/pt1.jpg",
    "/projects/pt2.jpg", "/projects/pt3.jpg", "/projects/pt4.jpg"
  ]},
  { category: "Premium Hanging Plants", images: ["/projects/h3.jpg", "/projects/h2.2.jpg", 
    "/projects/h4.jpg", "/projects/h7.jpg", "/projects/h5.jpg", 
  ]},
];

const CATEGORY_ORDER: CategoryKey[] = [
  "Decorative Planter Box",
  "Artificial Wall Greens",
  "Artificial Turf Grass",
  "Potted Artificial Plants",
  "Premium Hanging Plants",
];

const CATEGORIES = CATEGORY_ORDER.map((key) => ({
  key,
  images: RAW_PROJECTS.filter((p) => p.category === key).flatMap((p) => p.images),
})).filter((c) => c.images.length > 0);

// FIX #4 & #7 — hoist shared constants to module scope so they're stable
// references (no useCallback dep warnings, no magic numbers inside components)
const AUTOPLAY_INTERVAL_MS = 2500;
const RESUME_DELAY_MS      = 2500;
const TRANSITION_DURATION_MS = 520; // must match CSS: 0.52s

// ─── CSS ───────────────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@200;300;400;500&display=swap');

  :root {
    --green-dark: #1e2a1b;
    --green-mid: #4A6741;
    --green-light: #8fa882;
    --cream: #f4f3ee;
    --radius: 10px;
    --gap: 10px;
    --margin: 5vw;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  .pg-root { font-family: 'DM Sans', sans-serif; background: var(--cream); min-height: 100vh; }

  /* ─── HERO ─── */
  .hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .hero-bg { position: absolute; inset: 0; }
  .hero-bg img {
    width: 100%; height: 100%;
    object-fit: cover;
    transform: scale(1.04);
    animation: heroZoom 14s ease-out forwards;
    display: block;
  }
  @keyframes heroZoom {
    from { transform: scale(1.04); }
    to   { transform: scale(1.0); }
  }

  .hero-center {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 8vw;
    flex: 1;
    margin-top: 50px;
  }

  .hero-eyebrow {
    font-size: 10px;
    font-weight: 300;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #3f6f30;
    margin-bottom: 15px;
    margin-left: 2px;
  }

  .hero-title {
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(2.4rem, 5vw, 5.2rem);
    font-weight: 300;
    line-height: 1.05;
    color: #000;
  }
  .hero-title .line1 { display: block; }
  .hero-title .line2 {
    display: block;
    font-style: italic;
    color: #4A6741;
    margin-top: 10px;
  }

  .hero-desc {
    font-size: 14px;
    font-weight: 300;
    color: #6B7060;
    line-height: 1.88;
    max-width: 650px;
    margin-top: 20px;
  }

  .hero-bottom {
    display: flex;
    gap: 0;
    margin-top: 25px;
    align-items: flex-start;
  }

  .hero-stat {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 50px 0 0;
    border-right: 1px solid #6B7060;
    margin-right: 50px;
    gap: 4px;
  }
  .hero-stat:last-child { border-right: none; margin-right: 0; padding-right: 0; }

  .hero-stat-num {
    font-family: 'DM Sans', sans-serif;
    font-size: 2rem;
    font-weight: 300;
    color: #6B7060;
    line-height: 1;
  }
  .hero-stat-label {
    font-size: 9px;
    font-weight: 300;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #6B7060;
  }

  /* ─── CATEGORY SECTION ─── */
  .cat-section { padding: 70px 0 28px; }
  .cat-header {
    padding: 0 var(--margin) 18px;
    display: flex; align-items: flex-end; justify-content: space-between;
    margin-bottom: 30px;
    position: relative;
  }
  .cat-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: var(--margin);
    right: var(--margin);
    height: 1px;
    background: rgba(0,0,0,0.12);
  }
  .cat-name {
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(1.7rem, 3vw, 2.8rem);
    font-weight: 390; color: var(--green-dark); line-height: 1;
    margin-bottom: 5px;
  }
  .cat-count {
    font-size: 10px; font-weight: 300;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--green-light);
  }

  /* ─── CAROUSEL ─── */
  .carousel-wrap { position: relative; }
  .carousel-outer { margin: 0 var(--margin); }
  .carousel-clip { overflow: hidden; width: 100%; }
  .carousel-inner {
    cursor: grab;
    user-select: none;
    -webkit-user-select: none;
    touch-action: pan-y;
  }
  .carousel-inner:active { cursor: grabbing; }
  .carousel-track {
    display: flex;
    gap: var(--gap);
    will-change: transform;
    transition: transform 0.52s cubic-bezier(0.25,0.46,0.45,0.94);
  }
  .carousel-track.no-anim { transition: none !important; }

  .c-slide {
    flex: 0 0 auto;
    width: 390px; height: 390px;
    border-radius: var(--radius);
    overflow: hidden;
    background: #ccc;
    position: relative;
    cursor: pointer;
  }
  .c-slide img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.35s;
    filter: brightness(0.84);
    pointer-events: none;
    -webkit-user-drag: none;
  }
  .c-slide:hover img { transform: scale(1.05); filter: brightness(0.58); }

  .c-slide-bottom {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 36px 18px 16px;
    background: linear-gradient(to top, rgba(10,18,8,0.75) 0%, transparent 100%);
    pointer-events: none;
    transition: opacity 0.3s;
  }
  .c-slide:hover .c-slide-bottom { opacity: 0; }

  .c-slide-num {
    font-size: 9px; font-weight: 300;
    letter-spacing: 0.25em; text-transform: uppercase;
    color: rgba(255,255,255,0.38);
  }

  .c-slide-hover {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: opacity 0.3s; pointer-events: none;
  }
  .c-slide:hover .c-slide-hover { opacity: 1; pointer-events: auto; }

  .c-view-btn {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.85);
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 9px; font-weight: 400;
    letter-spacing: 0.22em; text-transform: uppercase;
    padding: 10px 22px; border-radius: 9999px;
    cursor: pointer;
    transition: background 0.2s, border-color 0.2s;
  }
  .c-view-btn:hover { background: rgba(255,255,255,0.1); border-color: #fff; }

  .c-arrow {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 40px; height: 40px;
    background: rgba(255,255,255,0.92);
    border: none; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; z-index: 10;
    box-shadow: 0 2px 14px rgba(0,0,0,0.1);
    transition: box-shadow 0.2s, background 0.2s;
  }
  .c-arrow:hover { background: #fff; box-shadow: 0 4px 18px rgba(0,0,0,0.15); }
  .c-arrow.prev { left: calc(var(--margin) - 20px); }
  .c-arrow.next { right: calc(var(--margin) - 20px); }

  .c-dots {
    display: flex; gap: 6px; justify-content: center;
    margin-top: 16px;
  }
  .c-dot {
    width: 5px; height: 5px; border-radius: 50%;
    background: rgba(74,103,65,0.22);
    border: none; padding: 0; cursor: pointer;
    transition: background 0.3s, transform 0.3s;
  }
  .c-dot.on { background: var(--green-mid); transform: scale(1.5); }

  /* ─── MODAL ─── */
  .m-backdrop {
    position: fixed; inset: 0;
    background: rgba(6,10,6,0.95);
    z-index: 999;
    display: flex; align-items: center; justify-content: center;
    animation: mfade 0.2s ease;
    padding: 12px;
  }
  @keyframes mfade { from { opacity: 0; } to { opacity: 1; } }
  .m-box {
    position: relative;
    width: min(74vw, 520px);
    height: min(80vh, 500px);
    background: #000;
    border-radius: 6px;
    overflow: hidden;
    animation: mscale 0.22s ease;
  }
  @keyframes mscale { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
  .m-img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    animation: mimgfade 0.28s ease;
  }
  @keyframes mimgfade { from { opacity: 0; } to { opacity: 1; } }
  .m-nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 40px; height: 40px;
    background: rgba(0,0,0,0.45); border: none; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; z-index: 2;
    transition: background 0.2s;
  }
  .m-nav:hover { background: rgba(0,0,0,0.72); }
  .m-nav.prev { left: 14px; }
  .m-nav.next { right: 14px; }
  .m-close {
    position: absolute; top: 12px; right: 12px;
    width: 32px; height: 32px;
    background: rgba(0,0,0,0.5); border: none; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; z-index: 3;
    transition: background 0.2s;
  }
  .m-close:hover { background: rgba(0,0,0,0.8); }
  .m-counter {
    position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%);
    font-size: 10px; font-weight: 300; letter-spacing: 0.14em;
    color: rgba(255,255,255,0.4);
    background: rgba(0,0,0,0.35); padding: 4px 14px;
    border-radius: 9999px; z-index: 2; white-space: nowrap;
  }

  /* ─── MOBILE ─── */
  @media (max-width: 640px) {
    :root { --margin: 16px; }
    .hero { height: 100svh; }
    .hero-desc { font-size: 12px; max-width: 280px; }

    .hero-bottom {
      justify-content: flex-start;
      width: 100%;
      gap: 0;
    }
    .hero-stat {
      flex: 0 0 auto;
      align-items: flex-start;
      padding: 0 20px 0px 5px;
      margin-right: 0;
    }

    .hero-stat-num { font-size: 1.3rem; }
    .cat-section { padding: 32px 0 12px; }
    .cat-header {
      padding-bottom: 14px;
      margin-bottom: 14px;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
    .c-slide { width: 340px !important; height: 260px !important; }
    .c-arrow { display: none; }
    .m-box { width: 100%; height: 60vw; min-height: 220px; border-radius: 10px; }
    .m-nav { width: 34px; height: 34px; }
    .m-nav.prev { left: 8px; }
    .m-nav.next { right: 8px; }
  }

  @media (min-width: 641px) and (max-width: 1023px) {
    :root { --margin: 4vw; }
    .c-slide { width: 340px; height: 340px; }
  }
`;

// ─── CAROUSEL ──────────────────────────────────────────────────────────────────

interface CarouselProps {
  images: string[];
  categoryName: string;
  onOpen: (idx: number) => void;
}

function Carousel({ images, categoryName, onOpen }: CarouselProps) {
  const N = images.length;

  const allImgs: { src: string; realIdx: number }[] = [
    ...images.map((src, i) => ({ src, realIdx: i })),
    ...images.map((src, i) => ({ src, realIdx: i })),
    ...images.map((src, i) => ({ src, realIdx: i })),
  ];

  const trackRef       = useRef<HTMLDivElement>(null);
  const wrapRef        = useRef<HTMLDivElement>(null);
  const trackIdxRef    = useRef(N);
  const isAnimating    = useRef(false);
  const isDragging     = useRef(false);
  const autoRef        = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isVisible      = useRef(false);

  const [activeDot, setActiveDot] = useState(0);

  const slideStride = useCallback((): number => {
    const slide = trackRef.current?.querySelector<HTMLElement>(".c-slide");
    if (!slide) return 400;
    const gap = parseFloat(getComputedStyle(trackRef.current!).gap) || 10;
    return slide.getBoundingClientRect().width + gap;
  }, []);

  const applyOffset = useCallback((idx: number, animate: boolean) => {
    const track = trackRef.current;
    if (!track) return;
    if (!animate) {
      track.classList.add("no-anim");
      track.style.transform = `translateX(${-(idx * slideStride())}px)`;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      track.offsetHeight;
      track.classList.remove("no-anim");
    } else {
      track.style.transform = `translateX(${-(idx * slideStride())}px)`;
    }
  }, [slideStride]);

  // ── Snap-back on transitionend ─────────────────────────────────────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName !== "transform") return;
      const cur = trackIdxRef.current;
      if (cur < N || cur >= 2 * N) {
        const realIdx = ((cur % N) + N) % N;
        trackIdxRef.current = N + realIdx;
        applyOffset(N + realIdx, false);
      }
      isAnimating.current = false;
    };
    track.addEventListener("transitionend", onTransitionEnd);
    return () => track.removeEventListener("transitionend", onTransitionEnd);
  }, [N, applyOffset]);

  const moveTo = useCallback((newIdx: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    trackIdxRef.current = newIdx;
    setActiveDot(((newIdx % N) + N) % N);
    applyOffset(newIdx, true);
  }, [N, applyOffset]);

  const goNext = useCallback(() => moveTo(trackIdxRef.current + 1), [moveTo]);
  const goPrev = useCallback(() => moveTo(trackIdxRef.current - 1), [moveTo]);
  const goTo   = useCallback((realIdx: number) => moveTo(N + realIdx), [N, moveTo]);

  // ── Auto-play ──────────────────────────────────────────────────────────────
  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (isVisible.current && !isAnimating.current) goNext();
    }, AUTOPLAY_INTERVAL_MS);
  }, [goNext]);

  const pauseAuto = useCallback(() => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; }
  }, []);

  // FIX #4 — RESUME_DELAY_MS is a module-level constant, no dep warning
  const scheduleResume = useCallback(() => {
    pauseAuto();
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      if (isVisible.current) startAuto();
    }, RESUME_DELAY_MS);
  }, [pauseAuto, startAuto]);

  // ── Initialise position ────────────────────────────────────────────────────
  useEffect(() => {
    const raf = requestAnimationFrame(() => applyOffset(N, false));
    return () => cancelAnimationFrame(raf);
  }, [N, applyOffset]);

  // ── Resize ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const onResize = () => applyOffset(trackIdxRef.current, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [applyOffset]);

  // ── Intersection observer ─────────────────────────────────────────────────
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      isVisible.current = e.isIntersecting;
      if (e.isIntersecting) startAuto(); else pauseAuto();
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [startAuto, pauseAuto]);

  // FIX #6 — clean up autoplay interval + resume timer on unmount
  useEffect(() => {
    return () => {
      if (autoRef.current)        clearInterval(autoRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // ── Drag / swipe ──────────────────────────────────────────────────────────
  const dragRef = useRef({ active: false, startX: 0, delta: 0 });

  const onPointerDown = useCallback((x: number) => {
    if (isAnimating.current) return;
    dragRef.current = { active: true, startX: x, delta: 0 };
    isDragging.current = false;
    pauseAuto();
    trackRef.current?.classList.add("no-anim");
  }, [pauseAuto]);

  const onPointerMove = useCallback((x: number) => {
    if (!dragRef.current.active) return;
    const delta = x - dragRef.current.startX;
    dragRef.current.delta = delta;
    if (Math.abs(delta) > 5) isDragging.current = true;
    if (!isDragging.current) return;
    const track = trackRef.current;
    if (!track) return;
    const base = trackIdxRef.current * slideStride();
    track.style.transform = `translateX(${-(base - delta)}px)`;
  }, [slideStride]);

  const onPointerUp = useCallback(() => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    const track = trackRef.current;
    if (track) track.classList.remove("no-anim");

    const { delta } = dragRef.current;
    const threshold = slideStride() * 0.25;

    if (delta < -threshold) {
      goNext();
    } else if (delta > threshold) {
      goPrev();
    } else {
      // FIX #7 — use TRANSITION_DURATION_MS constant instead of magic 560
      // so this stays in sync with the CSS transition duration in one place
      applyOffset(trackIdxRef.current, true);
      setTimeout(() => { isAnimating.current = false; }, TRANSITION_DURATION_MS + 40);
    }

    setTimeout(() => {
      isDragging.current = false;
      scheduleResume();
    }, 60);
  }, [goNext, goPrev, applyOffset, slideStride, scheduleResume]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => onPointerMove(e.clientX);
    const onUp   = () => onPointerUp();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup",   onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup",   onUp);
    };
  }, [onPointerMove, onPointerUp]);

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="carousel-wrap" ref={wrapRef}>
      <div className="carousel-outer">
        <div className="carousel-clip">
          <div
            className="carousel-inner"
            onMouseDown={(e) => { e.preventDefault(); onPointerDown(e.clientX); }}
            onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
            onTouchMove={(e) => { e.preventDefault(); onPointerMove(e.touches[0].clientX); }}
            onTouchEnd={(e) => {
              dragRef.current.delta = e.changedTouches[0].clientX - dragRef.current.startX;
              onPointerUp();
            }}
          >
            <div ref={trackRef} className="carousel-track">
              {allImgs.map(({ src, realIdx }, trackIdx) => {
                const displayNum = realIdx + 1;
                return (
                  <div
                    key={trackIdx}
                    className="c-slide"
                    onClick={() => { if (!isDragging.current) onOpen(realIdx); }}
                  >
                    <img
                      src={src}
                      alt={`${categoryName} ${displayNum}`}
                      loading={trackIdx >= N - 1 && trackIdx <= N + 3 ? "eager" : "lazy"}
                      draggable={false}
                    />
                    <div className="c-slide-bottom">
                      <div className="c-slide-num">
                        {String(displayNum).padStart(2, "0")} / {String(N).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="c-slide-hover">
                      <button
                        className="c-view-btn"
                        onClick={(e) => { e.stopPropagation(); if (!isDragging.current) onOpen(realIdx); }}
                      >
                        View Full
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {N > 1 && (
        <>
          <button className="c-arrow prev" aria-label="Previous" onClick={() => { goPrev(); scheduleResume(); }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2d3b29" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <button className="c-arrow next" aria-label="Next" onClick={() => { goNext(); scheduleResume(); }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2d3b29" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <div className="c-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`c-dot${i === activeDot ? " on" : ""}`}
            onClick={() => { goTo(i); scheduleResume(); }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── MODAL ─────────────────────────────────────────────────────────────────────

interface ModalProps {
  images: string[];
  categoryName: string;
  startIdx: number;
  onClose: () => void;
}

function Modal({ images, categoryName, startIdx, onClose }: ModalProps) {
  const [idx, setIdx]  = useState(startIdx);
  const total          = images.length;
  const autoRef        = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchRef       = useRef(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [total]);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(next, AUTOPLAY_INTERVAL_MS);
  }, [next]);

  const pauseAuto = useCallback(() => {
    if (autoRef.current) { clearInterval(autoRef.current); autoRef.current = null; }
  }, []);

  // FIX #4 — RESUME_DELAY_MS is module-level, no dep warning
  const scheduleResume = useCallback(() => {
    pauseAuto();
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(startAuto, RESUME_DELAY_MS);
  }, [pauseAuto, startAuto]);

  // Modal already had cleanup — kept intact, refs now use module constants
  useEffect(() => {
    startAuto();
    return () => {
      if (autoRef.current)        clearInterval(autoRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [startAuto]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")     { next(); scheduleResume(); }
      else if (e.key === "ArrowLeft") { prev(); scheduleResume(); }
      else if (e.key === "Escape")    onClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [next, prev, scheduleResume, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="m-backdrop" onClick={onClose}>
      <div
        className="m-box"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => { touchRef.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchRef.current;
          if (dx < -40)      { next(); scheduleResume(); }
          else if (dx > 40)  { prev(); scheduleResume(); }
        }}
      >
        <img key={idx} src={images[idx]} alt={`${categoryName} ${idx + 1}`} className="m-img" />
        {total > 1 && (
          <>
            <button className="m-nav prev" onClick={() => { prev(); scheduleResume(); }} aria-label="Previous image">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <button className="m-nav next" onClick={() => { next(); scheduleResume(); }} aria-label="Next image">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        <div className="m-counter">{idx + 1} / {total}</div>
        <button className="m-close" onClick={onClose} aria-label="Close">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────

interface ModalState { categoryIdx: number; imgIdx: number; }

// FIX #5 — galleryRef removed; it was declared and attached but never read
export default function ProjectsPage() {
  const [modal, setModal] = useState<ModalState | null>(null);

  const openModal  = (ci: number, ii: number) => setModal({ categoryIdx: ci, imgIdx: ii });
  const closeModal = useCallback(() => setModal(null), []);
  const activeCat  = modal !== null ? CATEGORIES[modal.categoryIdx] : null;

  const totalPhotos = CATEGORIES.reduce((a, c) => a + c.images.length, 0);

  return (
    <>
      <style>{CSS}</style>
      <div className="pg-root">

        {/* ── HERO ── */}
        <div className="hero">
          <div className="hero-bg">
            <img src="/projects/project.png" alt="Featured greenery project" loading="eager" />
          </div>
          <div className="hero-center">
            <p className="hero-eyebrow">Premium Artificial Greenery</p>
            <h1 className="hero-title">
              <span className="line1">Explore Our</span>
              <span className="line2">Green Creations</span>
            </h1>
            <p className="hero-desc">
              This is a glimpse of our project featuring premium artificial greenery 
              crafted to transform residential and commercial spaces with a fresh, natural 
              look that last. Explore more of our work to discover how we can bring the same 
              elevated, lasting beauty to your space. Each design is carefully curated to match 
              modern aesthetics while maintaining a realistic appearance. Get inspired and see how 
              we can turn ordinary areas into refreshing environments.
            </p>
            <div className="hero-bottom">
              <div className="hero-stat">
                <div className="hero-stat-num">{totalPhotos}+</div>
                <div className="hero-stat-label">Photos</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">{CATEGORIES.length}</div>
                <div className="hero-stat-label">Categories</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">100%</div>
                <div className="hero-stat-label">Artificial</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── GALLERY ── */}
        <div>
          {CATEGORIES.map((cat, ci) => (
            <section key={cat.key} className="cat-section">
              <div className="cat-header">
                <h2 className="cat-name">{cat.key}</h2>
                <span className="cat-count">
                  {cat.images.length} photo{cat.images.length !== 1 ? "s" : ""}
                </span>
              </div>
              <Carousel
                images={cat.images}
                categoryName={cat.key}
                onOpen={(ii) => openModal(ci, ii)}
              />
            </section>
          ))}
        </div>

      </div>

      {modal !== null && activeCat && (
        <Modal
          images={activeCat.images}
          categoryName={activeCat.key}
          startIdx={modal.imgIdx}
          onClose={closeModal}
        />
      )}
    </>
  );
}