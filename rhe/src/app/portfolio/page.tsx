"use client";

import { useState } from "react";

const projects = [
  {
    id: 1,
    tag: "Residential Garden",
    title: "Alabang Estate — Backyard Sanctuary",
    location: "Muntinlupa City, Metro Manila",
    featured: true,
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

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const LeafDivider = () => (
  <div className="flex items-center justify-center gap-3 my-8">
    <div className="w-16 h-px bg-[#7a9e6e] opacity-50" />
    <div
      className="w-2.5 h-2.5 rounded-tl-full bg-[#7a9e6e] opacity-70"
      style={{ transform: "rotate(45deg)", borderRadius: "50% 0" }}
    />
    <div className="w-16 h-px bg-[#7a9e6e] opacity-50" />
  </div>
);

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <main className="min-h-screen px-6 py-20 bg-background">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p
          className="text-center text-[11px] tracking-[0.25em] uppercase text-[#7a9e6e] mb-3"
          style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)" }}
        >
          Our Work
        </p>

        <h1
          className="text-center text-4xl md:text-5xl font-normal leading-tight [font-family:var(--font-playfair)]"
        >
          Crafted with{" "}
          <em className="italic text-[#5a8a4a] not-italic" style={{ fontStyle: "italic" }}>
            Nature
          </em>{" "}
          in Mind
        </h1>

        <p className="text-center text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed font-light">
          A curated selection of artificial grass and landscaping transformations — spaces
          reimagined with texture, longevity, and quiet elegance.
        </p>

        <LeafDivider />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={[
                "relative rounded-2xl border border-border/40 overflow-hidden cursor-pointer transition-transform duration-300",
                project.featured ? "md:col-span-2" : "",
                hovered === project.id ? "-translate-y-1" : "",
              ].join(" ")}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Illustration */}
              <div className="w-full">
                {project.svg}
              </div>

              {/* Info bar */}
              <div className="flex items-end justify-between px-4 py-3 bg-background">
                <div>
                  <span
                    className="block text-[10px] tracking-[0.18em] uppercase text-[#7a9e6e] mb-0.5"
                    style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)" }}
                  >
                    {project.tag}
                  </span>
                  <h3
                    className={[
                      "font-normal leading-snug [font-family:var(--font-playfair)]",
                      project.featured ? "text-base md:text-lg" : "text-sm md:text-base",
                    ].join(" ")}
                  >
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground font-light">{project.location}</span>
                </div>

                {/* Arrow — visible on hover */}
                <div
                  className={[
                    "flex-shrink-0 w-7 h-7 rounded-full border border-border/60 flex items-center justify-center bg-background text-muted-foreground transition-opacity duration-200",
                    hovered === project.id ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                >
                  <ArrowIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}