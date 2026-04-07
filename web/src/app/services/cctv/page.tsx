export const metadata = {
  title: "CCTV Surveillance System",
}

const features = [
  {
    title: "Analog & IP Camera Installation",
    desc: "Professional setup of analog or IP cameras, including dome, bullet, and PTZ models. Cameras are placed for optimal coverage of entrances, hallways, offices, parking areas, and other critical zones.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0, 8)">
          <path d="M12 6H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M14 6V9H34V6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 22C8 13.1634 15.1634 6 24 6C32.8366 6 40 13.1634 40 22V26H8V22Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <circle cx="24" cy="18" r="4" stroke="currentColor" strokeWidth="3"/>
          <circle cx="24" cy="18" r="1" fill="currentColor"/>
        </g>
      </svg>
    ),
  },
  {
    title: "Remote Access & Live Monitoring",
    desc: "Configuration of DVR or NVR systems that allow live viewing from mobile devices or computers. Monitor your property in real-time, whether you’re on-site or off-site.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M12 14H36V28H12V14Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M20 34L18 38H30L28 34H20Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M16 38H32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Night Vision & Motion Detection",
    desc: "Installation of cameras with infrared capabilities and motion detection features to capture clear footage in low-light conditions or detect unusual activity automatically.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="28" height="14" rx="2" stroke="currentColor" strokeWidth="3"/>
        <circle cx="17" cy="21" r="3" stroke="currentColor" strokeWidth="3"/>
        <circle cx="31" cy="21" r="3" stroke="currentColor" strokeWidth="3"/>
        <path d="M6 21H9M39 21H42" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Recording & Storage Solutions",
    desc: "Secure storage of video footage with scheduled recording, continuous recording, or motion-triggered capture. Ensures easy playback for incident review, investigations, or compliance purposes.",
    icon: (
      <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="24" r="10" stroke="currentColor" strokeWidth="3"/>
        <circle cx="34" cy="24" r="10" stroke="currentColor" strokeWidth="3"/>
        <circle cx="14" cy="24" r="3" fill="currentColor"/>
        <circle cx="34" cy="24" r="3" fill="currentColor"/>
        <path d="M14 14H34M14 34H34" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
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
          background-image: url('https://www.securitastechnology.com/sites/securitastechnology.com/files/media/2022-01/Modern%20CCTV%20camera%20on%20a%20wall.jpg');
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

            <h1 className="sc-hero-h1">CCTV Surveillance System</h1>
            <p className="sc-hero-p">
              Watch over what matters, keep every space secure.
            </p>
          </div>
        </section>

        {/* ── About + Features ── */}
        <section className="sc-about">
          <div className="sc-about-inner">

            <div className="sc-about-left">
              <span className="sc-section-tag">What we do</span>
              <h2 className="sc-about-h2">
                Security, <em>always in sight</em>
              </h2>
              <p className="sc-about-p">
                We supply and install CCTV surveillance systems for homes, offices, and commercial facilities, providing complete coverage and peace of mind. From high-definition cameras and night-vision capabilities to networked recording and real-time remote monitoring, every system is carefully configured for reliability, clarity, and ease of use.
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