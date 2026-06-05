export const metadata = {
  title: "Access Control System | Unifix ICT Solutions",
}

const features = [
  {
    title: "Bimoteric Door Security System",
    desc: "Installation of fingerprint and facial recognition systems to secure entry points and restrict access to authorized users. Supports contactless authentication and configurable access levels for different users.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 24C12 12 36 12 44 24C36 36 12 36 4 24Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="3"/>
        <circle cx="24" cy="24" r="4" fill="currentColor"/>
        <path d="M24 16v-4M24 32v4M16 24h-4M32 24h4M17 17l-2-2M31 31l2 2M17 31l-2 2M31 17l2-2" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Card Key Access System",
    desc: "Installation of RFID and card-based entry systems for controlled and trackable access. Allows easy assignment or removal of access with entry logs for monitoring.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="12" width="36" height="24" rx="4" stroke="currentColor" strokeWidth="3"/>
        <line x1="14" y1="24" x2="34" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="36" cy="24" r="2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Boom Barrier Gate System",
    desc: "Installation of automated boom barriers for vehicle access control in parking areas, subdivisions, and secured premises. Can be integrated with card access, remotes, or license plate recognition systems.",
    icon: (
      <svg width="27" height="27" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="18" width="28" height="14" rx="2" stroke="currentColor" strokeWidth="3"/>
        <path d="M12 18L16 12H32L36 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="25" r="2" fill="currentColor"/>
        <circle cx="36" cy="25" r="2" fill="currentColor"/>
        <circle cx="16" cy="32" r="3" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="32" r="3" stroke="currentColor" strokeWidth="3"/>
      </svg>
    ),
  },
  {
    title: "Time and Attendance Integration",
    desc: "Setup of integrated time-in and time-out monitoring using biometric or card-based systems. Captures employee attendance data in real time, with logs for tracking, reporting, and payroll support.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="3"/>
        <line x1="6" y1="18" x2="42" y2="18" stroke="currentColor" strokeWidth="3"/>
        <circle cx="24" cy="28" r="6" stroke="currentColor" strokeWidth="3"/>
        <path d="M21 28l2 2 4-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function AccessControlSystemPage() {
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
          background-image: url('https://www.axis.com/sites/axis/files/styles/landscape_1920_x_500_jpg/public/2023-01/access_control_a4120ve_1_3840x1536_2301.jpg.webp?h=b77977af&itok=cmhMo-77');
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
          padding: 5rem 1.5rem 4rem;
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
          padding: 4rem 1.25rem;
        }

        .sc-about-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
        }

        /* Mobile-first: no sticky */
        .sc-about-left {
          position: static;
        }

        /* Desktop only: two columns + sticky */
        @media (min-width: 769px) {
          .sc-hero-inner {
            padding: 6rem 2.5rem 5rem;
          }
          .sc-about {
            padding: 6rem 2.5rem;
          }
          .sc-about-inner {
            grid-template-columns: 1fr 2fr;
            gap: 5rem;
          }
          .sc-about-left {
            position: sticky;
            top: 100px;
          }
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
                <path d="M17 9V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2c-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-7c0-1.66-1.34-3-3-3zM9 7c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V7z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M13.1 15.5v1.5c0 .55-.45 1-1 1s-1-.45-1-1v-1.5c-.58-.58-.7-1.53-.14-2.14.58-.61 1.53-.72 2.14-.14.62.58.72 1.52.14 2.14z" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="sc-hero-h1">Access Control System</h1>
            <p className="sc-hero-p">
              Smart access, secure spaces — control who enters, effortlessly.
            </p>
          </div>
        </section>

        {/* ── About + Features ── */}
        <section className="sc-about">
          <div className="sc-about-inner">

            <div className="sc-about-left">
              <span className="sc-section-tag">What we do</span>
              <h2 className="sc-about-h2">
                Secure every entry, <em>control every access</em>
              </h2>
              <p className="sc-about-p">
                We design and install reliable access control systems for residential, commercial, and industrial environments. From biometric door security to card-based entry and automated boom barrier gates, every solution is built for security, efficiency, and seamless integration with your property's operations.
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