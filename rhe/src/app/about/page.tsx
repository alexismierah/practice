// app/about/page.tsx  (or pages/about.tsx for Pages Router)

export default function AboutPage() {
  return (
    <main className="about-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .about-root {
          min-height: 100vh;
          background: #ffffff;
          color: #1C1E19;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Hero ── */
        .hero {
          padding: 120px 60px 80px;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
        }

        .hero-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          max-width: 260px;
          margin: 0 auto;
          padding: 32px 0;
        }

        .hero-divider-line {
          display: block;
          width: 32px;
          height: 1px;
          background: #C8D2B8;
        }

        .hero-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7A8C6E;
          margin-bottom: 24px;
          margin-top: -40px;
        }

        .hero-headline {
          font-family: 'DM Sans', serif;
          font-size: clamp(30px, 6.5vw, 50px);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .hero-headline em {
          font-style: normal;
          font-weight: 300;
          color: black;
        }

        .hero-body {
          font-size: 17px;
          font-weight: 300;
          line-height: 1.8;
          color: #4A4D42;
          padding-bottom: 8px;
        }

        /* ── Story ── */
        .story {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 60px;
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 80px;
        }

        .story-nav {
          padding-top: 6px;
        }

        .story-nav-item {
          display: block;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9DA68E;
          margin-bottom: 20px;
          cursor: default;
        }

        .story-nav-item.active {
          color: #1C1E19;
        }

        .story-nav-item.active::before {
          content: '—  ';
          color: #3D5C35;
        }

        .story-block {
          margin-bottom: 64px;
        }

        .story-block:last-child {
          margin-bottom: 0;
        }

        .story-tag {
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #7A8C6E;
          margin-bottom: 16px;
        }

        .story-text {
          font-family: 'DM Sans', serif;
          font-size: 23px;
          line-height: 1.55;
          font-weight: 400;
          color: #1C1E19;
          margin: 0 0 16px;
        }

        .story-sub {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.75;
          color: #4A4D42;
          margin: 0;
        }

        /* ── Products strip ── */
        .products {
          max-width: 1100px;
          margin: 0 auto 80px;
          padding: 0 60px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .product-pill {
          background: #E8EDE0;
          border: 1px solid #C8D2B8;
          border-radius: 4px;
          padding: 14px 16px;
          font-size: 13px;
          font-weight: 500;
          color: #3D5C35;
          letter-spacing: 0.03em;
          text-align: center;
        }

        /* ── Closing ── */
        .closing {
          background: #fafaf7;
          color: #F5F2EC;
          padding: 100px 60px;
          text-align: center;
        }

        .closing-inner {
          max-width: 680px;
          margin: 0 auto;
        }

        .closing-quote {
          font-family: 'DM Sans', serif;
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 400;
          font-style: italic;
          line-height: 1.45;
          margin: 0 0 40px;
          color: #111111;
        }

        .closing-sig {
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #204e0d;
        }

        /* ── Responsive ── */
        @media (max-width: 680px) {
          .hero {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 80px 24px 60px;
          }

          .story {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 60px 24px;
          }

          .story-nav {
            display: none;
          }

          .products {
            grid-template-columns: repeat(2, 1fr);
            padding: 0 24px;
            margin-bottom: 60px;
          }

          .closing {
            padding: 80px 24px;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="hero">
        <div>
          <p className="hero-label">About us</p>
          <h1 className="hero-headline">
            Nature&apos;s beauty,<br /><em>without</em> the <br/> upkeep.
          </h1>
        </div>
        <p className="hero-body">
          At Rich Haven Artificial Garden, we bring nature-inspired beauty to every
          space — without the maintenance. Thoughtfully designed greenery for homes,
          offices, and commercial spaces that stays fresh and vibrant all year round.
        </p>
      </section>

      {/* Separator */}
      <div className="hero-divider">
        <span className="hero-divider-line" />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="2" fill="#7A8C6E"/>
          <path d="M10 4 C10 4 8 7 10 10 C12 7 10 4 10 4Z" fill="#7A8C6E" opacity="0.6"/>
          <path d="M10 16 C10 16 8 13 10 10 C12 13 10 16 10 16Z" fill="#7A8C6E" opacity="0.6"/>
          <path d="M4 10 C4 10 7 8 10 10 C7 12 4 10 4 10Z" fill="#7A8C6E" opacity="0.6"/>
          <path d="M16 10 C16 10 13 8 10 10 C13 12 16 10 16 10Z" fill="#7A8C6E" opacity="0.6"/>
        </svg>
        <span className="hero-divider-line" />
      </div>

      {/* Story */}
      <section className="story">
        <nav className="story-nav" aria-label="Story sections">
          <span className="story-nav-item">What we do</span>
          <span className="story-nav-item">How we do it</span>
          <span className="story-nav-item">Our promise</span>
        </nav>

        <div>
          <div className="story-block">
            <p className="story-tag">What we do</p>
            <p className="story-text">
              High-quality artificial greenery for every kind of space.
            </p>
            <p className="story-sub">
              We specialize in potted plants, wall greens, hanging plants, and artificial
              turf — each piece crafted to bring the calm and character of nature indoors
              and out, with none of the watering, pruning, or seasonal fuss.
            </p>
          </div>

          <div className="story-block">
            <p className="story-tag">How we do it</p>
            <p className="story-text">
              Realistic aesthetics. Built to last.
            </p>
            <p className="story-sub">
              Our products are designed to look and feel like the real thing — because
              artificial shouldn&apos;t mean artificial-looking. We combine durable materials
              with careful attention to detail so every piece holds its color, shape, and
              presence for years, not months.
            </p>
          </div>

          <div className="story-block">
            <p className="story-tag">Our promise</p>
            <p className="story-text">
              Style, quality, and greenery you can rely on.
            </p>
            <p className="story-sub">
              Whether you&apos;re elevating an interior, transforming an outdoor area, or
              creating a calming atmosphere, Rich Haven is committed to delivering a
              lasting green solution — one that looks just as good on day one as it does
              two years later.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="closing">
        <div className="closing-inner">
          <p className="closing-quote">
            &ldquo;A lasting green solution that stays fresh and vibrant all year round.&rdquo;
          </p>
          <p className="closing-sig">Rich Haven Artificial Garden</p>
        </div>
      </section>
    </main>
  );
}