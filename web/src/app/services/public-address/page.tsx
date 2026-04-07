export const metadata = {
  title: "Public Address System",
}

const features = [
  {
    title: "Analog and IP Speaker Installation",
    desc: "Professional installation of ceiling, wall, or outdoor speakers with multiple zone options. Analog systems provide straightforward, reliable audio for smaller setups, while IP-based systems allow scalable, networked coverage and remote management.",
    icon: (
      <svg width="23" height="23" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="6" width="28" height="36" rx="2" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <circle cx="24" cy="15" r="3" stroke="currentColor" strokeWidth="3"/>
        <circle cx="24" cy="30" r="7" stroke="currentColor" strokeWidth="3"/>
        <circle cx="24" cy="30" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Amplifiers and Audio Control",
    desc: "Integration of analog or digital amplifiers, mixers, and control units to maintain consistent sound quality. IP-based systems allow remote volume adjustments and configuration via software, while analog setups provide simple, hands-on control.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="36" height="20" rx="2" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <circle cx="15" cy="24" r="3" stroke="currentColor" strokeWidth="3"/>
        <circle cx="26" cy="24" r="3" stroke="currentColor" strokeWidth="3"/>
        <line x1="34" y1="21" x2="38" y2="21" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="34" y1="27" x2="38" y2="27" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Scheduled & Automated Messaging",
    desc: "Option to schedule announcements or automate recurring messages across multiple zones. IP systems allow centralized management, ideal for large campuses or multi-building setups, while analog systems work for straightforward, on-site paging needs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="32" height="30" rx="2" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <line x1="8" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="16" y1="6" x2="16" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <line x1="32" y1="6" x2="32" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="24" cy="30" r="3" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function CCTVSurveillanceSystemPage() {
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
          background-image: url('https://www.masstrans.in/wp-content/uploads/Passenger-Announcement-System-airport.jpeg');
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
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="sc-hero-h1">Public Address System</h1>
            <p className="sc-hero-p">
              Deliver your message with clarity and confidence, reaching every corner effortlessly.
            </p>
          </div>
        </section>

        {/* ── About + Features ── */}
        <section className="sc-about">
          <div className="sc-about-inner">

            <div className="sc-about-left">
              <span className="sc-section-tag">What we do</span>
              <h2 className="sc-about-h2">
                Clear announcements, <em>everywhere</em>
              </h2>
              <p className="sc-about-p">
                We design and install public address systems for homes, offices, commercial facilities, and outdoor spaces. From wall-mounted speakers to large-area coverage, every system ensures announcements are audible, clear, and reliable.
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