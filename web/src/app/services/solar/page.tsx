export const metadata = {
  title: "Solar Power ",
}

const features = [
  {
    title: "Solar Panel Installation",
    desc: "Installation of high-efficiency solar panels positioned for maximum sunlight exposure, ensuring optimal energy generation throughout the day.",
    icon: (
      <svg width="23" height="23" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="3"/>
        <line x1="24" y1="5" x2="24" y2="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="24" y1="38" x2="24" y2="43" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="5" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="38" y1="24" x2="43" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="34" y1="34" x2="37.5" y2="37.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="34" y1="14" x2="37.5" y2="10.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="10.5" y1="37.5" x2="14" y2="34" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Inverter & Power Management",
    desc: "Setup of inverters and control systems to convert solar energy into usable electricity, with monitoring for performance and efficiency",
    icon: (
      <svg width="21" height="21" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3"/>
        <path d="M26 10L16 26H24L22 38L32 22H24L26 10Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Battery Storage Solutions",
    desc: "Optional battery systems store excess energy for use during nighttime or power outages, ensuring continuous power supply.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M34 20V32H37C38.1046 32 39 31.1046 39 30V22C39 20.8954 38.1046 20 37 20H34Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <line x1="16" y1="20" x2="16" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="22" y1="20" x2="22" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="28" y1="20" x2="28" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Monitoring & Maintenance",
    desc: "Monitoring of energy production and system performance, with maintenance support to ensure long-term reliability and efficiency.",
    icon: (
     <svg width="27" height="27" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.5 13.5C37.5 16.5 37.5 21.5 34.5 24.5L30 29L19 18L23.5 13.5C26.5 10.5 31.5 10.5 34.5 13.5Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 13L28 17M15 22L12 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M19 18L8 29C6 31 6 34 8 36C10 38 13 38 15 36L26 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="11.5" cy="32.5" r="1.5" fill="currentColor"/>
    </svg>
    ),
  },
]

export default function SolarPowerPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --blue:    #3a89dd;
          --blue-dk: #2263a8;
          --blue-lt: #e8f3fd;
          --ink:     #0d1117;
          --ink-2:   #2d3748;
          --ink-3:   #718096;
          --rule:    rgba(13,17,23,0.08);
        }

        .sc-root {
          font-family: 'Instrument Sans', sans-serif;
          color: var(--ink-2);
        }

        /* ── Hero ── */
        .sc-hero {
          position: relative;
          min-height: 48vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #0d1117;
          text-align: center;
        }

        .sc-hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://www.chintglobal.com/content/dam/chintsite/global/en/about-us/news-center/blog/solar-power-plant-knowledge-important-featured-banner-20210222.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.35;
          width: 100%;
          height: 100%;
        }

        .sc-hero-inner {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 6rem 2.5rem 5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sc-hero-icon-wrap {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: transparent;
          border: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: var(--blue);
        }

        
        .sc-hero-h1 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(2.4rem, 5vw, 3.5rem);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1.1rem;
        }

        .sc-hero-p {
          font-size: 1.0625rem;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(255,255,255,0.55);
          max-width: 440px;
          margin: 0;
        }

        /* ── About / Features ── */
        .sc-about {
          background: #fff;
          padding: 6rem 2.5rem;
        }

        .sc-about-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 5rem;
          align-items: start;
        }

        .sc-about-left {
          position: sticky;
          top: 100px;
        }

        @media (max-width: 960px) {
          .sc-hero-inner { padding: 5rem 1.5rem 4rem; }
          .sc-about { padding: 4rem 1.5rem; }
          .sc-about-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .sc-about-left { position: static; top: auto; }
        }

        .sc-section-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 0.75rem;
        }

        .sc-about-h2 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(1.9rem, 3vw, 2.6rem);
          font-weight: 400;
          color: var(--ink);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }

        .sc-about-h2 em {
          font-style: italic;
          color: var(--blue);
        }

        .sc-about-p {
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.85;
          color: var(--ink-3);
          margin: 0;
        }

        .sc-rule {
          width: 40px;
          height: 2px;
          background: var(--blue);
          border-radius: 1px;
          margin-top: 1.5rem;
        }

        /* Feature cards */
        .sc-features {
          display: flex;
          flex-direction: column;
          gap: 1px;
          border: 1px solid var(--rule);
          border-radius: 18px;
          overflow: hidden;
        }

        .sc-feat-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 1.4rem 1.5rem;
          background: #fff;
          border-bottom: 1px solid var(--rule);
          transition: background 0.2s, transform 0.2s;
        }

        .sc-feat-row:last-child { border-bottom: none; }

        .sc-feat-row:hover {
          background: #f8fafc;
        }

        .sc-feat-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 12px;
          background: var(--blue-lt);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--blue);
          margin-top: 1px;
        }

        .sc-feat-title {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 1.05rem;
          color: var(--ink);
          margin: 0 0 4px;
          letter-spacing: -0.01em;
        }

        .sc-feat-desc {
          font-size: 0.875rem;
          font-weight: 300;
          line-height: 1.75;
          color: var(--ink-3);
          margin: 0;
        }
      `}</style>

      <div className="sc-root">

        {/* ── Hero ── */}
        <section className="sc-hero">
          <div className="sc-hero-bg" />
          <div className="sc-hero-grid" />
          <div className="sc-hero-inner">

            <div className="sc-hero-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0"
>               <path d="M17 9V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2c-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-7c0-1.66-1.34-3-3-3zM9 7c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V7z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M13.1 15.5v1.5c0 .55-.45 1-1 1s-1-.45-1-1v-1.5c-.58-.58-.7-1.53-.14-2.14.58-.61 1.53-.72 2.14-.14.62.58.72 1.52.14 2.14z" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="sc-hero-h1">Solar Power</h1>
            <p className="sc-hero-p">
              Harness clean energy from the sun to power your space efficiently and sustainably every day.
            </p>
          </div>
        </section>

        {/* ── About + Features ── */}
        <section className="sc-about">
          <div className="sc-about-inner">

            <div className="sc-about-left">
              <span className="sc-section-tag">What we do</span>
              <h2 className="sc-about-h2">
                Clean energy, <em>smart investment</em>
              </h2>
              <p className="sc-about-p">
                We supply and install solar power systems for residential, commercial, and industrial applications. From rooftop panels to complete energy solutions, our systems help reduce electricity costs, provide backup power, and promote sustainable energy use.
              </p>
              <div className="sc-rule" />
            </div>

            <div className="sc-features">
              {features.map((feat) => (
                <div key={feat.title} className="sc-feat-row">
                  <div className="sc-feat-icon">{feat.icon}</div>
                  <div>
                    <p className="sc-feat-title">{feat.title}</p>
                    <p className="sc-feat-desc">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </>
  )
}