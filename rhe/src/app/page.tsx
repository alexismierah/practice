"use client";

const stats = [
  { value: "1,900+", label: "Happy Plant Lovers", title: "Trusted by" },
  { value: "8,000+", label: "Exotic Green Benefits", title: "Explore" },
  { value: "520+", label: "Local Greenhouses", title: "Backed by" },
  { value: "4.9+", label: "Rated by Customers", title: "Rated" },
];

const featuredPlants = [
  {
    name: "Monstera Deliciosa",
    sublabel: "Indoor Statement Plant",
    price: "$20.00",
    originalPrice: "$30.00",
    featured: true,
    img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80",
    tag: "All plants",
  },
  {
    name: "Peace Lily",
    sublabel: "Air-Purifying Favorite",
    price: "$20.00",
    originalPrice: "$30.00",
    img: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=600&q=80",
    tag: "New Arrivals",
  },
  {
    name: "Caladium",
    sublabel: "Colorful Foliage Plant",
    price: "$20.00",
    originalPrice: "$30.00",
    img: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=600&q=80",
    tag: "Sales",
  },
  {
    name: "ZZ Plant",
    sublabel: "Low-Maintenance Choice",
    price: "$20.00",
    originalPrice: "$30.00",
    img: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=600&q=80",
    tag: "Easy Care",
  },
  {
    name: "Fiddle Leaf Fig",
    sublabel: "Bold Focal Greenery",
    price: "$20.00",
    originalPrice: "$30.00",
    img: "https://images.unsplash.com/photo-1534710961216-75c88202f43e?w=600&q=80",
    tag: "All plants",
  },
  {
    name: "Anthurium",
    sublabel: "Exotic Flowering Plant",
    price: "$20.00",
    originalPrice: "$30.00",
    img: "https://images.unsplash.com/photo-1612965607446-25e1332775ae?w=600&q=80",
    tag: "New Arrivals",
  },
  {
    name: "Pothos",
    sublabel: "Trailing Vine Beauty",
    price: "$20.00",
    originalPrice: "$30.00",
    img: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=600&q=80",
    tag: "Easy Care",
  },
  {
    name: "Rubber Plant",
    sublabel: "Glossy Statement Tree",
    price: "$20.00",
    originalPrice: "$30.00",
    img: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&q=80",
    tag: "All plants",
  },
];

const categories = [
  {
    title: "Supply",
    desc: "Elevate your indoor space with easy-care indoor plants that thrive with minimal effort and add a relaxing, natural touch to any room.",
    img: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&q=80",
    plantImg: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&q=80",
  },
  {
    title: "Installation",
    desc: "Bring life to your outdoor space with vibrant, long-living plants. Perfect for patios, balconies, and your garden — back to thrive in natural light and fresh air.",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    plantImg: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=300&q=80",
  },
];

const shopReasons = [
  { title: "Free and Fast Delivery", desc: "Enjoy doorstep delivery in your city and nearby areas in 2-4 days.", icon: "D" },
  { title: "Hassle-Free Returns", desc: "Changed your mind? Returns are simple and quick within 30 days, no stress.", icon: "R" },
  { title: "24/7 Customer Support", desc: "We are here whenever you need us, day or night.", icon: "S" },
  { title: "Secure Payments", desc: "Pay safely with encrypted checkout and trusted payment partners.", icon: "P" },
];

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
          padding: 0 0 80px;
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
          margin-bottom: 0;
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

        /* ── WHY SHOP ── */
        .why-shop {
          background: #fff;
          padding: 72px 48px;
          text-align: center;
          border-top: 1px solid #e4ece1;
          border-bottom: 1px solid #e4ece1;
          margin-top: 0;
        }

        .why-shop-title { margin: 0; font-family: "Playfair Display", serif; font-size: clamp(1.8rem,1vw + 1.2rem,2.4rem); color: #163521; }
        .why-shop-subtitle { max-width: 470px; margin: 14px auto 40px; color: #6f7f75; font-size: 13px; line-height: 1.6; }

        .why-shop-grid {
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(220px,320px) minmax(0,1fr);
          gap: 40px;
          align-items: center;
          text-align: left;
        }

        .why-shop-column { display: grid; gap: 28px; }

        .reason { display: flex; gap: 16px; align-items: flex-start; }

        .reason-icon {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1px solid #d5e4d8;
          color: #345f47;
          display: inline-flex; align-items: center; justify-content: center;
          font-weight: 600; font-size: 12px;
          flex-shrink: 0;
          background: #f7fbf6;
        }

        .reason h3 { margin: 0 0 6px; font-family: "Playfair Display", serif; color: #173523; font-size: 1.05rem; }
        .reason p { margin: 0; color: #64776b; font-size: 12px; line-height: 1.65; }

        .why-shop-plant {
          width: 100%; max-width: 520px; margin: 0 auto; display: block;
          filter: drop-shadow(0 14px 16px rgba(30,57,40,.22));
        }

        /* ── PRODUCTS ── */
        .products-section {
          background: #ffffff;
          padding: 80px 48px 64px;
          text-align: center;
          margin-top: 0;
        }

        .products-heading {
          margin: 0 0 10px;
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 1.2vw + 1rem, 2.2rem);
          color: #163521;
        }

        .products-subheading {
          margin: 0 0 32px;
          font-size: 13px;
          color: #7a8f80;
          line-height: 1.6;
        }

        /* tabs */
        .product-tabs {
          display: flex;
          justify-content: center;
          gap: 0;
          margin-bottom: 48px;
        }

        .product-tab {
          background: none;
          border: none;
          padding: 10px 24px;
          font-size: 13px;
          font-weight: 500;
          color: #8a9e91;
          cursor: pointer;
          position: relative;
          transition: color .18s;
        }

        .product-tab.active {
          color: #163521;
          font-weight: 600;
        }

        .product-tab.active::after {
          content: "";
          position: absolute;
          bottom: -1.5px;
          left: 0; right: 0;
          height: 2px;
          background: #2f6f44;
          border-radius: 2px 2px 0 0;
        }

        /* grid */
        .product-grid-new {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }

        .product-card-new {
          background: #f5f7f4;
          border-radius: 18px;
          padding: 0 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: visible;
          transition: box-shadow .2s ease, transform .2s ease;
          text-align: left;
        }

        .product-card-new:hover {
          box-shadow: 0 8px 28px rgba(20,50,30,.10);
          transform: translateY(-3px);
        }

        .product-card-new.is-featured {
          background: #f0f5ef;
          box-shadow: 0 6px 20px rgba(20,60,35,.12);
        }

        .product-img-wrap {
          width: 100%;
          height: 180px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: visible;
          margin-bottom: 16px;
          position: relative;
        }

        .product-img-wrap img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 14px 14px 0 0;
          display: block;
          position: relative;
          z-index: 1;
        }

        .product-card-new.is-featured .product-img-wrap img {
          transform: scale(1.04);
          transform-origin: bottom center;
        }

        .product-info {
          width: 100%;
          padding: 0 18px;
        }

        .product-name-new {
          margin: 0 0 6px;
          font-family: "Playfair Display", serif;
          font-size: 1rem;
          font-weight: 700;
          color: #163521;
        }

        .product-pricing {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
        }

        .price-original {
          font-size: 12px;
          color: #aab8b0;
          text-decoration: line-through;
        }

        .price-current {
          font-size: 13px;
          font-weight: 600;
          color: #163521;
        }

        .product-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-order {
          flex: 1;
          background: #1e4d2e;
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: background .18s;
        }

        .btn-order:hover { background: #2f6f44; }

        .btn-cart {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1px solid #d4e2d8;
          background: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background .18s, border-color .18s;
          font-size: 15px;
        }

        .btn-cart:hover { background: #f0f7f2; border-color: #2f6f44; }

        .explore-more-wrap {
          display: flex;
          justify-content: center;
          margin-top: 8px;
        }

        .btn-explore {
          background: none;
          border: 1px solid #c5d9cb;
          border-radius: 999px;
          padding: 12px 32px;
          font-size: 13px;
          font-weight: 500;
          color: #2b5c3a;
          cursor: pointer;
          transition: background .18s, border-color .18s;
        }

        .btn-explore:hover { background: #f0f7f2; border-color: #2f6f44; }

        /* ── SERVICES ── */
        .services-section {
          background: #e8efe5;
          padding: 72px 48px;
        }

        .services-section-title {
          margin: 0 0 32px;
          font-family: "Playfair Display", serif;
          color: #163521;
          font-size: clamp(1.8rem, 1vw + 1.4rem, 2.6rem);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 24px;
        }

        .service-card {
          position: relative;
          background: #d4e3cf;
          border-radius: 20px;
          overflow: hidden;
          padding: 36px 32px 30px;
          display: flex;
          flex-direction: column;
          min-height: 280px;
        }

        .service-bg {
          position: absolute;
          inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          opacity: .18;
          pointer-events: none;
        }

        .service-tag {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,.55);
          border: 1px solid rgba(255,255,255,.7);
          border-radius: 999px;
          padding: 4px 12px 4px 8px;
          font-size: 12px;
          color: #2d5a3d;
          font-weight: 500;
          width: fit-content;
          margin-bottom: 20px;
        }

        .service-tag-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #3d7a52;
          flex-shrink: 0;
        }

        .service-body {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          gap: 18px;
          align-items: flex-end;
        }

        .service-text { flex: 1; display: flex; flex-direction: column; gap: 10px; }

        .service-title {
          margin: 0;
          font-family: "Playfair Display", serif;
          color: #163521;
          font-size: 1.45rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .service-desc { margin: 0; color: #3e5c47; font-size: 13px; line-height: 1.65; max-width: 280px; }

        .service-cta {
          margin-top: 20px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fff;
          border: none;
          border-radius: 999px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 600;
          color: #1e4d2e;
          cursor: pointer;
          width: fit-content;
          transition: transform .18s, background .18s;
        }

        .service-cta:hover { transform: translateY(-1px); background: #f0f8f2; }

        .service-plant-wrap {
          flex-shrink: 0;
          width: 130px; height: 160px;
          align-self: flex-end;
        }

        .service-plant-img {
          width: 100%; height: 100%;
          object-fit: cover;
          border-radius: 14px;
        }

        /* ── NEWSLETTER ── */
        .newsletter {
          text-align: center;
          background: #173b24;
          color: #fff;
          padding: 80px 48px;
          margin-top: 0;
        }

        .newsletter-title {
          margin: 0 0 16px;
          font-family: "Playfair Display", serif;
          color: #fff;
          font-size: clamp(1.8rem, 1vw + 1.4rem, 2.6rem);
        }

        .newsletter p {
          max-width: 620px;
          margin: 0 auto 32px;
          color: rgba(241,247,241,.82);
          line-height: 1.7;
          font-size: 15px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .hero-content { padding: 48px 30px 240px; }
          .stats-wrap { grid-template-columns: repeat(2,minmax(0,1fr)); inset: auto 24px 18px; }
          .product-grid-new { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .why-shop { padding: 56px 32px; }
          .why-shop-grid { grid-template-columns: 1fr; text-align: center; gap: 32px; }
          .why-shop-column { gap: 24px; }
          .reason { justify-content: center; text-align: left; max-width: 360px; margin: 0 auto; }
          .service-plant-wrap { width: 100px; height: 130px; }
          .products-section { padding: 64px 32px 48px; }
          .services-section { padding: 56px 32px; }
          .newsletter { padding: 64px 32px; }
        }

        @media (max-width: 640px) {
          .landing { padding: 0 0 40px; }
          .hero { min-height: 88vh; background-position: 62% center; }
          .hero-content { padding: 30px 16px 310px; }
          .hero-copy { font-size: 14px; line-height: 1.65; }
          .stats-wrap { grid-template-columns: 1fr; inset: auto 12px 12px; }
          .why-shop { padding: 48px 20px; }
          .why-shop-subtitle { margin-bottom: 28px; }
          .products-section { padding: 48px 20px 40px; }
          .product-grid-new, .services-grid { grid-template-columns: 1fr; }
          .services-section { padding: 48px 20px; }
          .service-plant-wrap { width: 90px; height: 110px; }
          .service-card { padding: 28px 22px 24px; }
          .product-tabs { gap: 0; overflow-x: auto; justify-content: flex-start; }
          .product-tab { padding: 9px 14px; white-space: nowrap; }
          .newsletter { padding: 56px 20px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-kicker">Breathe life into your space</p>
          <h1 className="hero-title">Discover beautiful indoor plants for every corner of your home</h1>
          <p className="hero-copy">From indoor greens to outdoor beauties, shop plants, pots, and care tools delivered with love.</p>
          <div className="hero-actions">
            <button className="button button-primary" type="button">View Products & Services <span>➜</span></button>
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

      {/* ── WHY SHOP ── */}
      <section className="why-shop" aria-labelledby="why-shop-title">
        <h2 className="why-shop-title" id="why-shop-title">Why Choose Rich Haven?</h2>
        <p className="why-shop-subtitle">From your screen to your space - we are here to make plant shopping smooth and stress-free.</p>
        <div className="why-shop-grid">
          <div className="why-shop-column">
            {shopReasons.slice(0, 2).map((reason) => (
              <article className="reason" key={reason.title}>
                <span className="reason-icon" aria-hidden="true">{reason.icon}</span>
                <div><h3>{reason.title}</h3><p>{reason.desc}</p></div>
              </article>
            ))}
          </div>
          <img className="why-shop-plant" src="/plant.png" alt="Potted indoor plant" />
          <div className="why-shop-column">
            {shopReasons.slice(2).map((reason) => (
              <article className="reason" key={reason.title}>
                <span className="reason-icon" aria-hidden="true">{reason.icon}</span>
                <div><h3>{reason.title}</h3><p>{reason.desc}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* ── PRODUCTS ── */}
<section className="products-section" aria-labelledby="products-heading">
  <style>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Inter:wght@400;500&display=swap");

    .products-section {
      background: #fafaf8;
      padding: 96px 64px 80px;
    }

    .ps-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 56px;
      border-bottom: 1px solid #e2e8df;
      padding-bottom: 28px;
    }

    .ps-eyebrow {
      font-size: 11px;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: #7a8f80;
      margin: 0 0 10px;
      font-family: "Inter", sans-serif;
    }

    .ps-title {
      margin: 0;
      font-family: "Playfair Display", serif;
      font-weight: 700;
      font-size: clamp(1.8rem, 1.4vw + 1rem, 2.6rem);
      color: #163521;
      line-height: 1.1;
    }

    .ps-title em {
      font-style: italic;
      font-weight: 500;
    }

    .ps-tabs {
      display: flex;
      gap: 0;
      border: none;
      border-radius: 0;
      padding: 0;
      background: transparent;
      align-self: flex-end;
    }

    .ps-tab {
      background: none;
      border: none;
      padding: 7px 18px;
      font-size: 12px;
      font-family: "Inter", sans-serif;
      font-weight: 500;
      color: #7a8f80;
      cursor: pointer;
      border-radius: 999px;
      transition: background .15s, color .15s;
      white-space: nowrap;
    }

    .ps-tab.active {
      background: #163521;
      color: #fff;
    }

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

    .ps-card-body {
      padding: 18px 20px 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

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
      font-family: "Inter", sans-serif;
      margin: 0 0 14px;
      letter-spacing: .03em;
    }

    .ps-card-footer {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .ps-price {
      font-family: "Inter", sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: #163521;
    }

    .ps-price-orig {
      font-size: 11px;
      color: #b8c6be;
      text-decoration: line-through;
      margin-left: 5px;
      font-weight: 400;
    }

    .ps-btn-add {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 1px solid #c8d8cc;
      background: #fff;
      color: #2f6f44;
      font-size: 18px;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background .15s, border-color .15s;
      flex-shrink: 0;
    }

    .ps-btn-add:hover { background: #f0f7f2; border-color: #2f6f44; }

    .ps-footer {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ps-explore {
      font-family: "Inter", sans-serif;
      font-size: 12px;
      font-weight: 500;
      color: #4a6b54;
      letter-spacing: .06em;
      text-transform: uppercase;
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0;
      transition: color .15s;
    }

    .ps-explore:hover { color: #163521; }

    .ps-explore-line {
      width: 32px;
      height: 1px;
      background: currentColor;
      display: inline-block;
    }

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
      padding-bottom: 28px;
      border-bottom: 1px solid rgba(255,255,255,.12);
    }

    .svc-eyebrow {
      font-size: 11px;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: rgba(255,255,255,.45);
      margin: 0 0 10px;
      font-family: "Inter", sans-serif;
    }

    .svc-title {
      margin: 0;
      font-family: "Playfair Display", serif;
      font-weight: 700;
      font-size: clamp(1.8rem, 1.4vw + 1rem, 2.6rem);
      color: #fff;
      line-height: 1.1;
    }

    .svc-title em {
      font-style: italic;
      font-weight: 500;
      color: rgba(255,255,255,.65);
    }

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

    .svc-card-body {
      padding: 36px 32px;
      display: flex;
      flex-direction: column;
    }

    .svc-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 999px;
      padding: 4px 12px;
      font-size: 11px;
      letter-spacing: .06em;
      text-transform: uppercase;
      color: rgba(255,255,255,.6);
      font-family: "Inter", sans-serif;
      font-weight: 500;
      width: fit-content;
      margin-bottom: 20px;
    }

    .svc-badge-dot {
      width: 5px; height: 5px;
      border-radius: 50%;
      background: #5ab87a;
      flex-shrink: 0;
    }

    .svc-card-title {
      margin: 0 0 12px;
      font-family: "Playfair Display", serif;
      color: #fff;
      font-size: 1.35rem;
      font-weight: 700;
      line-height: 1.2;
    }

    .svc-card-desc {
      margin: 0 0 auto;
      color: rgba(255,255,255,.5);
      font-size: 13px;
      line-height: 1.7;
      font-family: "Inter", sans-serif;
    }

    .svc-card-cta {
      margin-top: 28px;
      font-family: "Inter", sans-serif;
      font-size: 12px;
      font-weight: 500;
      color: rgba(255,255,255,.7);
      letter-spacing: .06em;
      text-transform: uppercase;
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 0;
      transition: color .15s;
    }

    .svc-card-cta:hover { color: #fff; }

    .svc-card-cta-line {
      width: 24px;
      height: 1px;
      background: currentColor;
      display: inline-block;
      transition: width .2s;
    }

    .svc-card-cta:hover .svc-card-cta-line { width: 36px; }

    .svc-card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    @media (max-width: 1024px) {
      .products-section, .services-section { padding: 72px 40px; }
      .ps-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
      .ps-header, .svc-header { flex-direction: column; align-items: flex-start; gap: 20px; }
    }

    @media (max-width: 640px) {
      .products-section, .services-section { padding: 56px 20px; }
      .ps-grid { grid-template-columns: 1fr; }
      .ps-tabs { flex-wrap: wrap; border-radius: 12px; }
      .svc-grid { grid-template-columns: 1fr; }
      .svc-card { grid-template-columns: 1fr; }
      .svc-card-img { height: 180px; }
    }
  `}</style>

  <div className="ps-header">
    <div>
      <p className="ps-eyebrow">Curated collection</p>
      <h2 className="ps-title" id="products-heading">Our<em> Products</em></h2>
    </div>
    <div className="ps-tabs">
    <button className="ps-explore" type="button">
      <span className="ps-explore-line" />
      View all products
      <span className="ps-explore-line" />
    </button>
    </div>
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
      <h2 className="svc-title" id="services-title">Our<em> Services</em></h2>
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