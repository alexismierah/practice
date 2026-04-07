export const metadata = {
  title: "UPS",
}

const features = [
  {
    title: "Horizontal & Backbone Cabling",
    desc: "Cat6A, Cat6, and fiber optic installation from telecoms room to every workstation and access point.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="9" width="18" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6" cy="11" r="1.2" fill="currentColor"/>
        <circle cx="11" cy="11" r="1.2" fill="currentColor"/>
        <circle cx="16" cy="11" r="1.2" fill="currentColor"/>
        <line x1="6" y1="9" x2="6" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="16" y1="9" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="6" y1="13" x2="6" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="16" y1="13" x2="16" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Patch Panel & Cabinet Setup",
    desc: "Neat, labelled patch panels, managed cable trays, and rack installations for clean, serviceable comms rooms.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="6" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="7.5" y1="6" x2="7.5" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <line x1="11" y1="6" x2="11" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <line x1="14.5" y1="6" x2="14.5" y2="16" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        <circle cx="11" cy="18.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Fiber Optic Networks",
    desc: "Single-mode and multi-mode fiber splicing, termination, and OTDR-verified testing for high-speed links.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="11" y1="3" x2="11" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="11" y1="14" x2="11" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="3" y1="11" x2="8" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Testing & Certification",
    desc: "Every link tested with Fluke DSX-600 and certified to TIA-568 standards. Full documentation provided.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 2.5a9.5 9.5 0 00-6.5 2.3A9.55 9.55 0 002 9c0 4.42 3.02 8.14 7.12 9.2a9.5 9.5 0 001.88.28C15.97 18.48 20 14.64 20 9c0-.82-.1-1.62-.3-2.38A9.5 9.5 0 0011 2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: "As-Built Documentation",
    desc: "Detailed floor plans, port schedules, and cable records — so your team can manage the network for years to come.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="5" y="3" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="8" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="11.5" x2="14" y2="11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="15" x2="11" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function UPSPage() {
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
          background-image: url('https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-UNINTERRUPTIBLE-POWER-SUPPLY-UPS-01296-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp');
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

        @media (max-width: 768px) {
          .sc-hero-inner { padding: 5rem 1.5rem 4rem; }
          .sc-about { padding: 4rem 1.5rem; }
          .sc-about-inner { grid-template-columns: 1fr; gap: 2.5rem; }
        }

        .sc-about-left {
          position: sticky;
          top: 100px;
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

            <h1 className="sc-hero-h1">Uninterruptible Power Supply</h1>
            <p className="sc-hero-p">
              Reliable backup power solutions — designed to keep your systems running, built to last.
            </p>
          </div>
        </section>

        {/* ── About + Features ── */}
        <section className="sc-about">
          <div className="sc-about-inner">

            <div className="sc-about-left">
              <span className="sc-section-tag">What we do</span>
              <h2 className="sc-about-h2">
                The backbone of your network, <em>done right</em>
              </h2>
              <p className="sc-about-p">
                We design and install scalable structured cabling systems for commercial, industrial,
                and enterprise environments. From Cat6A copper runs to fiber optic backbones, every
                cable we lay is certified, documented, and future-proofed for the demands of
                tomorrow&apos;s technology.
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