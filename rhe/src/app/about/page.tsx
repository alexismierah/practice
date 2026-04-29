"use client";

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --g-dark:   #1a3020;
          --g-mid:    #2d5435;
          --g-sage:   #5a8a62;
          --g-lt:     #8ab892;
          --g-mint:   #c4e2c8;
          --g-foam:   #edf7ee;
          --g-cream:  #f5faf5;
          --g-white:  #ffffff;
          --g-muted:  #567060;
          --g-border: rgba(90,138,98,0.18);
          --sans:     'DM Sans', sans-serif;
          --gray-md:  #eeeeee;
        }

        body { font-family: var(--sans); font-weight: 300; overflow-x: hidden; }

        /* ── HERO ──────────────────────────────────────── */
        .ab-hero {
          background: var(--gray-lt);
          padding: 88px 40px 64px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ab-hero-heading {
          font-size: clamp(1.65rem, 3.2vw, 2.65rem);
          font-weight: 300;
          color: var(--g-dark);
          line-height: 1.3;
          letter-spacing: -0.02em;
          max-width: 790px;
          margin-bottom: 36px;
          margin-top: 70px;
        }

        /* ── FULL-WIDTH IMAGE ───────────────────────────── */
        .ab-banner {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 40px;
          display: block;
        }

        .ab-banner img {
          width: 100%;
          height: 360px;
          object-fit: cover;
          border-radius: 10px;
          display: block;
          filter: brightness(0.96) saturate(0.9);
          margin-bottom: -60px;
        }

        /* ── GET TO KNOW ────────────────────────────────── */
        .ab-know-section {
          background: var(--gray-lt);
        }

        .ab-know {
          max-width: 1080px;
          margin: 0 auto;
          padding: 80px 40px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .ab-know-heading {
          font-size: clamp(1.6rem, 2.8vw, 2.3rem);
          font-weight: 300;
          color: var(--g-dark);
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .ab-know-body p {
          font-size: 18px;
          font-weight: 300;
          color: #3a3a3a;
          line-height: 1.85;
          margin-bottom: 20px;
        }

        .ab-know-body p:last-child { margin-bottom: 0; }

        .ab-know-body strong {
          font-weight: 400;
          color: var(--g-dark);
        }

        /* ── QUOTE ──────────────────────────────────────── */
        .ab-quote-section {
          background: #f3f3f3;
        }

        .ab-quote-inner {
          max-width: 1080px;
          margin: 0 auto;
          padding: 72px 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ab-quote-text {
          font-size: clamp(1.25rem, 2.6vw, 2rem);
          font-weight: 300;
          color: var(--g-dark);
          line-height: 1.55;
          letter-spacing: -0.01em;
          font-style: italic;
          text-align: center;
        }

        .ab-quote-cite {
          display: block;
          margin-top: 20px;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          color: var(--g-muted);
          letter-spacing: 0.02em;
        }

        /* ── RESPONSIVE ────────────────────────────────── */
        @media (max-width: 860px) {
          .ab-know { grid-template-columns: 1fr; gap: 32px; }
          .ab-know-heading { position: static; }
          .ab-quote-inner { grid-template-columns: 1fr; gap: 32px; }
          .ab-quote-person { flex-direction: row; align-items: center; gap: 16px; }
        }

        @media (max-width: 600px) {
          .ab-hero { padding: 60px 24px 48px; }
          .ab-banner { padding: 0; }
          .ab-banner img { height: 220px; border-radius: 8px; }
          .ab-know { padding: 56px 24px; }
          .ab-quote-inner { padding: 52px 24px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="ab-hero">
        <h1 className="ab-hero-heading">
          We focus on bringing the beauty of nature into your space without the maintenance.
        </h1>
        {/* ── FULL-WIDTH IMAGE ── */}
        <div className="ab-banner">
          <img
            src="about1.jpg"
            alt="Rich Haven garden"
          />
        </div>
      </section>

      {/* ── GET TO KNOW ── */}
      <section className="ab-know-section">
      <div className="ab-know">
        <h2 className="ab-know-heading">Get to know us</h2>
        <div className="ab-know-body">
          <p>
            At Rich Haven Artificial Garden, we bring nature-inspired beauty to every space—without the maintenance.
            We specialize in high-quality artificial greenery, including potted plants, wall greens, hanging plants, and artificial turf, thoughtfully designed to enhance homes, offices, and commercial spaces.
          </p>
          <p>
            Our products combine realistic aesthetics with durability, offering a lasting green solution that stays fresh and vibrant all year round. Whether you’re elevating an interior, transforming an outdoor area, or creating a calming atmosphere, Rich Haven Artificial Garden is committed to delivering style, quality, and timeless greenery you can rely on.
          </p>
        </div>
      </div>
      </section>
      

      {/* ── QUOTE ── */}
      {/*<section className="ab-quote-section">
        <div className="ab-quote-inner">
          <blockquote className="ab-quote-text">
            {"“Our goal is to provide beautiful, lasting greenery for people who want nature in their space but can’t afford the time or cost of real plants because everyone deserves a space that feels alive.”"}
            <cite className="ab-quote-cite">Rich Haven Artificial Garden</cite>
          </blockquote>
        </div>
      </section>*/}
    </>
  );
}
