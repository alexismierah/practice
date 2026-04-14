"use client";
import Link from "next/link";

const stats = [
  { value: "1,900+", label: "Happy Plant Lovers", title: "Trusted by" },
  { value: "8,000+", label: "Exotic Green Benefits", title: "Explore" },
  { value: "520+", label: "Local Greenhouses", title: "Backed by" },
  { value: "4.9+", label: "Rated by Customers", title: "Rated" },
];

const featuredPlants = [
  {
    name: "Grass",
    sublabel: "Indoor Statement Plant",
    img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80",
  },
  {
    name: "Plants",
    sublabel: "Air-Purifying Favorite",
    img: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=600&q=80",
  },
  {
    name: "Trees",
    sublabel: "Colorful Foliage Plant",
    img: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=600&q=80",
  },
  {
    name: "Wall Garden",
    sublabel: "Low-Maintenance Choice",
    img: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=600&q=80",
  },
];

const categories = [
  {
    title: "Supply",
    desc: "Elevate your indoor space with easy-care indoor plants that thrive with minimal effort and add a relaxing, natural touch to any room.",
    plantImg: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&q=80",
  },
  {
    title: "Installation",
    desc: "Bring life to your outdoor space with vibrant, long-living plants. Perfect for patios, balconies, and your garden — back to thrive in natural light and fresh air.",
    plantImg: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=300&q=80",
  },
];

const shopReasons = [
  {
    title: "Low Maintenance",
    desc: "Enjoy beautiful greenery without watering, trimming, or fertilizing.",
    icon: "lowUpkeep",
  },
  {
    title: "Long-Lasting Quality",
    desc: "Made from durable materials that stay vibrant and fresh-looking over time.",
    icon: "durability",
  },
  {
    title: "All-Weather Friendly",
    desc: "Suitable for indoor and outdoor spaces, resistant to fading and damage.",
    icon: "weather",
  },
  {
    title: "Versatile Design",
    desc: "Ideal for homes, offices, commercial spaces, events, and decorative projects.",
    icon: "versatile",
  },
] as const;

function ReasonIcon({ id }: { id: (typeof shopReasons)[number]["icon"] }) {
  const s = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (id) {
    case "lowUpkeep":
      return (
        <g {...s}>
          <path d="M10 5.2c2.6 0 4.8 2.5 4.8 5.1 0 3.1-4.8 6.9-4.8 6.9s-4.8-3.8-4.8-6.9c0-2.6 2.2-5.1 4.8-5.1z" />
          <path d="M6.9 6.9l6.2 6.2" />
        </g>
      );
    case "durability":
      return (
        <g {...s}>
          <path d="M10 2.9l5.4 3.1v4.7c0 3.25-2.4 5.9-5.4 6.75-3-.85-5.4-3.5-5.4-6.75V6Z" />
          <path d="M7.9 10.1l1.6 1.6 3.6-3.6" />
        </g>
      );
    case "weather":
      return (
        <g {...s}>
          <circle cx="13.75" cy="6.35" r="2.05" />
          <path d="M13.75 4.1v1M13.75 8.6v1M11.55 6.35h-.95M17 6.35h-.95M11.85 4.65l-.65.65M15.65 8.05l-.65.65M15.65 4.65l-.65-.65M11.85 8.05l-.65-.65" />
          <g transform="translate(0 1.85)">
            <path d="M15 8.33h-1.05a6.67 6.67 0 1 0-6.45 8.34h7.5a4.17 4.17 0 0 0 0-8.34z" />
          </g>
        </g>
      );
    case "versatile":
      return (
        <g {...s}>
          <rect x="3.25" y="3.25" width="5.9" height="5.9" rx="1.15" />
          <rect x="10.85" y="3.25" width="5.9" height="5.9" rx="1.15" />
          <rect x="3.25" y="10.85" width="5.9" height="5.9" rx="1.15" />
          <rect x="10.85" y="10.85" width="5.9" height="5.9" rx="1.15" />
        </g>
      );
    default:
      return null;
  }
}

export default function RichHavenHome() {
  const displayedPlants = featuredPlants.slice(0, 4);

  return (
    <main className="landing">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600&display=swap");

        .landing, .landing * { box-sizing: border-box; }

        .landing {
          font-family: "Inter", sans-serif;
          background: #f2f6ef;
          min-height: 100vh;
          padding: 0;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          width: 100%;
          min-height: 78vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          background-image:
            linear-gradient(100deg, rgba(12,33,22,0.78) 0%, rgba(12,33,22,0.48) 35%, rgba(12,33,22,0.1) 65%),
            url("https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1800&q=80");
          background-size: cover;
          background-position: center;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 560px;
          padding: 72px 56px 196px;
          color: #fff;
        }

        .hero-kicker { font-size: 13px; opacity: .88; margin-bottom: 14px; }

        .hero-title {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(2rem, 2.4vw + 1rem, 3.65rem);
          line-height: 1.12;
          letter-spacing: -.01em;
        }

        .hero-copy {
          margin: 22px 0 30px;
          max-width: 470px;
          font-size: 15px;
          line-height: 1.75;
          color: rgba(248,250,248,.82);
        }

        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

        .button {
          border: none;
          border-radius: 999px;
          padding: 11px 20px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .button:hover { transform: translateY(-1px); }
        .button-primary { background: #2f6f44; color: #fff; box-shadow: 0 10px 20px rgba(27,56,35,.28); }
        .button-secondary { color: rgba(246,249,246,.95); background: rgba(255,255,255,.14); border: 1px solid rgba(255,255,255,.35); }

        /* ── STATS ── */
        .stats-wrap {
          position: absolute;
          inset: auto 36px 24px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 14px;
          z-index: 3;
        }

        .stat-card {
          background: rgba(255,255,255,.88);
          border: 1px solid rgba(10,35,20,.07);
          border-radius: 14px;
          backdrop-filter: blur(2px);
          padding: 18px 20px;
        }

        .stat-title { font-size: 11px; color: #6b796f; margin-bottom: 6px; }
        .stat-value { margin: 0; font-family: "Playfair Display", serif; font-size: 1.75rem; font-weight: 700; color: #193524; line-height: 1; }
        .stat-label { margin-top: 6px; font-size: 12px; color: #4a5f52; }

        /* ── ABOUT ── */
        .about-section {
          background: #fafbf8;
          padding: 84px 64px 92px;
        }

        .about-inner {
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }

        .about-eyebrow {
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #7a8f80;
          margin: 0 0 12px;
        }

        .about-title {
          margin: 0 0 20px;
          font-family: "Playfair Display", serif;
          font-size: clamp(1.8rem, 1.1vw + 1.1rem, 2.5rem);
          color: #163521;
          font-weight: 700;
          line-height: 1.12;
        }

        .about-title em {
          font-style: italic;
          font-weight: 500;
          color: #3f7a55;
        }

        .about-desc {
          color: #4d6258;
          font-size: 15px;
          line-height: 1.78;
          margin: 0 auto 26px;
          max-width: 34em;
        }

        .about-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #163521;
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: background .18s, transform .18s;
        }

        .about-cta:hover { background: #1e4d2e; transform: translateY(-1px); }

        /* ── WHY SHOP ── */
        .why-shop {
          background: #fff;
          padding: 96px 64px;
        }

        .why-shop-header {
          text-align: center;
          margin-bottom: 72px;
        }

        .why-shop-eyebrow {
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #7a8f80;
          margin: 0 0 14px;
          font-family: "Inter", sans-serif;
        }

        .why-shop-title {
          margin: 0 0 16px;
          font-family: "Playfair Display", serif;
          font-size: clamp(1.8rem, 1vw + 1.2rem, 2.6rem);
          color: #163521;
          font-weight: 700;
          line-height: 1.1;
        }

        .why-shop-title em {
          font-style: italic;
          font-weight: 500;
          color: #3f7a55;
        }

        .why-shop-subtitle {
          max-width: 460px;
          margin: 0 auto;
          color: #7a8f80;
          font-size: 14px;
          line-height: 1.7;
        }

        .why-shop-grid {
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(240px,340px) minmax(0,1fr);
          gap: 48px;
          align-items: center;
        }

        .why-shop-column { display: grid; gap: 0; }

        .reason {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 28px 24px;
          border-radius: 16px;
          position: relative;
        }

        .reason-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #eaf3e5;
          border: 1px solid #d0e8d4;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .reason-icon { width: 18px; height: 18px; color: #2f6f44; }

        .reason-content { flex: 1; }

        .reason h3 {
          margin: 0 0 6px;
          font-family: "Playfair Display", serif;
          color: #173523;
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.25;
        }

        .reason p {
          margin: 0;
          color: #6b7d72;
          font-size: 13px;
          line-height: 1.65;
        }

        .why-shop-plant-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .why-shop-plant-frame { position: relative; width: 100%; }

        .why-shop-plant {
          width: 100%;
          max-width: 340px;
          margin: 0 auto;
          display: block;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 24px 32px rgba(30,57,40,.18));
        }

        /* ── PRODUCTS ── */
        .products-section {
          background: #fafaf8;
          padding: 96px 64px 80px;
        }

        .ps-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
        }

        .ps-eyebrow {
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #7a8f80;
          margin: 0 0 10px;
        }

        .ps-title {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 1.4vw + 1rem, 2.6rem);
          color: #163521;
          line-height: 1.1;
        }

        .ps-title em { font-style: italic; font-weight: 500; }

        .ps-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 1px;
          background: #e2e8df;
          border: 1px solid #e2e8df;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 48px;
        }

        .ps-card {
          background: #fff;
          display: flex;
          flex-direction: column;
          transition: background .18s;
        }

        .ps-card:hover { background: #f8fbf7; }

        .ps-card-img {
          width: 100%;
          aspect-ratio: 3/2.6;
          object-fit: cover;
          display: block;
        }

        .ps-card-body { padding: 18px 20px 20px; flex: 1; display: flex; flex-direction: column; }

        .ps-card-name {
          margin: 0 0 4px;
          font-family: "Playfair Display", serif;
          font-size: 1rem;
          font-weight: 700;
          color: #163521;
          line-height: 1.25;
        }

        .ps-card-sub {
          font-size: 11px;
          color: #9aaa9f;
          margin: 0;
          letter-spacing: .03em;
        }

        .ps-explore {
          font-size: 12px;
          font-weight: 500;
          color: #4a6b54;
          letter-spacing: .06em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: color .15s;
          align-self: flex-end;
        }

        .ps-explore:hover { color: #163521; }
        .ps-explore-line { width: 32px; height: 1px; background: currentColor; display: inline-block; }

        /* ── SERVICES ── */
        .services-section {
          background: #163521;
          padding: 96px 64px;
        }

        .svc-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
        }

        .svc-eyebrow {
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: rgba(255,255,255,.45);
          margin: 0 0 10px;
        }

        .svc-title {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 1.4vw + 1rem, 2.6rem);
          color: #fff;
          line-height: 1.1;
        }

        .svc-title em { font-style: italic; font-weight: 500; color: rgba(255,255,255,.65); }

        .svc-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 20px;
        }

        .svc-card {
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 16px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 160px;
          min-height: 240px;
          transition: border-color .2s;
        }

        .svc-card:hover { border-color: rgba(255,255,255,.25); }

        .svc-card-body { padding: 36px 32px; display: flex; flex-direction: column; }

        .svc-card-title {
          margin: 0 0 12px;
          font-family: "Playfair Display", serif;
          color: #fff;
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .svc-card-desc {
          margin: 0;
          color: rgba(255,255,255,.5);
          font-size: 13px;
          line-height: 1.7;
        }

        .svc-card-img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .hero-content { padding: 48px 30px 240px; }
          .stats-wrap { grid-template-columns: repeat(2,minmax(0,1fr)); inset: auto 24px 18px; }
          .about-section { padding: 72px 40px 80px; }
          .why-shop { padding: 72px 40px; }
          .why-shop-grid { grid-template-columns: 1fr; gap: 40px; }
          .why-shop-plant-col { order: -1; }
          .why-shop-plant { max-width: 260px; }
          .products-section, .services-section { padding: 72px 40px; }
          .ps-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .ps-header { flex-direction: column; align-items: flex-start; gap: 20px; }
          .svc-header { flex-direction: column; align-items: flex-start; gap: 20px; }
        }

        @media (max-width: 640px) {
          .hero { min-height: 88vh; background-position: 62% center; }
          .hero-content { padding: 30px 16px 310px; }
          .stats-wrap { grid-template-columns: 1fr; inset: auto 12px 12px; }
          .about-section { padding: 56px 20px 64px; }
          .why-shop { padding: 56px 20px; }
          .why-shop-header { margin-bottom: 48px; }
          .products-section, .services-section { padding: 56px 20px; }
          .ps-grid { grid-template-columns: 1fr; }
          .svc-grid { grid-template-columns: 1fr; }
          .svc-card { grid-template-columns: 1fr; }
          .svc-card-img { height: 180px; }
          .reason { padding: 20px 16px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-kicker">Breathe life into your space</p>
          <h1 className="hero-title">Discover beautiful indoor plants for every corner of your home</h1>
          <p className="hero-copy">From indoor greens to outdoor beauties, shop plants, pots, and care tools delivered with love.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/products-services">View Products & Services</Link>
            <button className="button button-secondary" type="button">Watch How</button>
          </div>
        </div>
        <div className="stats-wrap">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <div className="stat-title">{stat.title}</div>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about-section" aria-labelledby="about-title">
        <div className="about-inner">
          <p className="about-eyebrow">Our story</p>
          <h2 className="about-title" id="about-title">We Are <em>Rich Haven</em></h2>
          <p className="about-desc">
            We started with a simple belief — a greener home is a happier home — and built Rich Haven from a
            small local nursery into a place plant lovers trust. Every plant, pot, and care kit is chosen with
            care, and we stay close by with honest guidance so your space can thrive.
          </p>
          <Link className="about-cta" href="/about">
            Learn more about us
          </Link>
        </div>
      </section>

      {/* ── WHY SHOP ── */}
      <section className="why-shop" aria-labelledby="why-shop-title">
        <div className="why-shop-header">
          <p className="why-shop-eyebrow">Our promise to you</p>
          <h2 className="why-shop-title" id="why-shop-title">Why Choose <em>Rich Haven?</em></h2>
          <p className="why-shop-subtitle">
            From your screen to your space, we make plant shopping simple, smooth, and stress-free.
          </p>
        </div>

        <div className="why-shop-grid">
          <div className="why-shop-column">
            {shopReasons.slice(0, 2).map((reason) => (
              <article className="reason" key={reason.title}>
                <div className="reason-icon-wrap" aria-hidden="true">
                  <svg className="reason-icon" viewBox="0 0 20 20" aria-hidden="true">
                    <ReasonIcon id={reason.icon} />
                  </svg>
                </div>
                <div className="reason-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="why-shop-plant-col">
            <div className="why-shop-plant-frame">
              <img className="why-shop-plant" src="/plant.png" alt="Potted indoor plant" />
            </div>
          </div>

          <div className="why-shop-column">
            {shopReasons.slice(2).map((reason) => (
              <article className="reason" key={reason.title}>
                <div className="reason-icon-wrap" aria-hidden="true">
                  <svg className="reason-icon" viewBox="0 0 20 20" aria-hidden="true">
                    <ReasonIcon id={reason.icon} />
                  </svg>
                </div>
                <div className="reason-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="products-section" aria-labelledby="products-heading">
        <div className="ps-header">
          <div>
            <p className="ps-eyebrow">Curated collection</p>
            <h2 className="ps-title" id="products-heading">Our <em>Products</em></h2>
          </div>
          <Link className="ps-explore" href="/products-services">
            <span className="ps-explore-line" />
            View all products
            <span className="ps-explore-line" />
          </Link>
        </div>

        <div className="ps-grid">
          {displayedPlants.map((plant) => (
            <article className="ps-card" key={plant.name}>
              <img className="ps-card-img" src={plant.img} alt={plant.name} />
              <div className="ps-card-body">
                <h3 className="ps-card-name">{plant.name}</h3>
                <p className="ps-card-sub">{plant.sublabel}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section" aria-labelledby="services-title">
        <div className="svc-header">
          <div>
            <p className="svc-eyebrow">What we offer</p>
            <h2 className="svc-title" id="services-title">Our <em>Services</em></h2>
          </div>
        </div>

        <div className="svc-grid">
          {categories.map((cat) => (
            <article className="svc-card" key={cat.title}>
              <div className="svc-card-body">
                <h3 className="svc-card-title">{cat.title}</h3>
                <p className="svc-card-desc">{cat.desc}</p>
              </div>
              <img className="svc-card-img" src={cat.plantImg} alt={cat.title} />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}