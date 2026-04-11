export const metadata = {
  title: "Parking System",
}

const features = [
  {
    title: "LED Parking Signage",
    desc: "Installation of bright, easy-to-read LED displays that show available parking slots in real-time. Signage can be placed at entrances, intersections, or individual zones, ensuring drivers always know where to park without wasting time searching.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 16H26C28.2091 16 30 17.7909 30 20C30 22.2091 28.2091 24 26 24H18V16Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
        <line x1="18" y1="24" x2="18" y2="32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Sensors & Camera Detection",
    desc: "Deployment of ultrasonic, infrared, or camera-based sensors to detect vehicle presence in each parking slot. The system updates the LED signage automatically and can track occupancy trends for reporting.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="3"/>
        <circle cx="24" cy="24" r="1" fill="currentColor"/>
        <path d="M12.6863 12.6863C9.5621 15.8105 8 19.9052 8 24C8 28.0948 9.5621 32.1895 12.6863 35.3137M35.3137 12.6863C38.4379 15.8105 40 19.9052 40 24C40 28.0948 38.4379 32.1895 35.3137 35.3137" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Guidance & Flow Management",
    desc: "Intelligent guidance using visual indicators, arrows, or floor lights to direct drivers to free spaces quickly. Combined with signage and sensors, this ensures smooth traffic flow throughout the parking area and prevents bottlenecks.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3"/>
        <line x1="24" y1="36" x2="24" y2="12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M16 20L24 12L32 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Access Control & Boom Barriers",
    desc: "Integration of automated boom barriers, RFID cards, QR codes, or token-based entry for secure vehicle access. Logs of entries and exits are maintained for security and monitoring purposes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3"/>
        <line x1="12" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function ParkingGuidanceSystemPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --blue:    #3a89dd; --blue-dk: #2263a8; --blue-lt: #e8f3fd;
          --ink: #0d1117; --ink-2: #2d3748; --ink-3: #718096;
          --rule: rgba(13,17,23,0.08);
        }

        .sc-root { font-family: 'Instrument Sans', sans-serif; color: var(--ink-2); }

        .sc-hero {
          position: relative; min-height: 48vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; background: #0d1117; text-align: center;
        }

        .sc-hero-bg {
          position: absolute; inset: 0;
          background-image: url('https://alshareefgroup.com/wp-content/uploads/2024/12/Parking-Management-Systems-scaled.jpg');
          background-size: cover; background-position: center;
          opacity: 0.35; width: 100%; height: 100%;
        }

        .sc-hero-inner {
          position: relative; max-width: 800px; margin: 0 auto;
          padding: 5rem 1.5rem 4rem;
          display: flex; flex-direction: column; align-items: center;
        }

        .sc-hero-icon-wrap {
          width: 80px; height: 80px; border-radius: 20px;
          background: transparent; border: transparent;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1rem; color: var(--blue);
        }

        .sc-hero-h1 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(2.4rem, 5vw, 3.5rem); font-weight: 400;
          color: #ffffff; line-height: 1.1;
          letter-spacing: -0.02em; margin-bottom: 1.1rem;
        }

        .sc-hero-p {
          font-size: 1.0625rem; font-weight: 300; line-height: 1.75;
          color: rgba(255,255,255,0.55); max-width: 440px; margin: 0;
        }

        .sc-about { background: #fff; padding: 4rem 1.25rem; }

        .sc-about-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr;
          gap: 2rem; align-items: start;
        }

        /* Mobile-first: no sticky */
        .sc-about-left { position: static; }

        /* Desktop only: two columns + sticky */
        @media (min-width: 769px) {
          .sc-hero-inner { padding: 6rem 2.5rem 5rem; }
          .sc-about { padding: 6rem 2.5rem; }
          .sc-about-inner { grid-template-columns: 1fr 2fr; gap: 5rem; }
          .sc-about-left { position: sticky; top: 100px; }
        }

        .sc-section-tag {
          display: inline-block; font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--blue); margin-bottom: 0.75rem;
        }

        .sc-about-h2 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(1.9rem, 3vw, 2.6rem); font-weight: 400;
          color: var(--ink); line-height: 1.15;
          letter-spacing: -0.02em; margin-bottom: 1rem;
        }

        .sc-about-h2 em { font-style: italic; color: var(--blue); }
        .sc-about-p { font-size: 1rem; font-weight: 300; line-height: 1.85; color: var(--ink-3); margin: 0; }
        .sc-rule { width: 40px; height: 2px; background: var(--blue); border-radius: 1px; margin-top: 1.5rem; }

        .sc-features {
          display: flex; flex-direction: column; gap: 1px;
          border: 1px solid var(--rule); border-radius: 18px; overflow: hidden;
        }

        .sc-feat-row {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 1.4rem 1.5rem; background: #fff;
          border-bottom: 1px solid var(--rule);
          transition: background 0.2s, transform 0.2s;
        }

        .sc-feat-row:last-child { border-bottom: none; }
        .sc-feat-row:hover { background: #f8fafc; }

        .sc-feat-icon {
          width: 44px; height: 44px; min-width: 44px; border-radius: 12px;
          background: var(--blue-lt); display: flex; align-items: center;
          justify-content: center; color: var(--blue); margin-top: 1px;
        }

        .sc-feat-title { font-family: 'Instrument Sans', sans-serif; font-size: 1.05rem; color: var(--ink); margin: 0 0 4px; letter-spacing: -0.01em; }
        .sc-feat-desc { font-size: 0.875rem; font-weight: 300; line-height: 1.75; color: var(--ink-3); margin: 0; }
      `}</style>

      <div className="sc-root">
        <section className="sc-hero">
          <div className="sc-hero-bg" />
          <div className="sc-hero-inner">
            <div className="sc-hero-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" opacity="0">
                <path d="M17 9V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2c-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-7c0-1.66-1.34-3-3-3zM9 7c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V7z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <h1 className="sc-hero-h1">Parking System</h1>
            <p className="sc-hero-p">Manage every space with ease, streamline vehicle entry, and make parking effortless.</p>
          </div>
        </section>

        <section className="sc-about">
          <div className="sc-about-inner">
            <div className="sc-about-left">
              <span className="sc-section-tag">What we do</span>
              <h2 className="sc-about-h2">Smart parking, <em>hassle free</em></h2>
              <p className="sc-about-p">
                We design and install advanced parking guidance systems for residential, commercial, and industrial facilities. From LED signage to real-time sensor networks, our solutions guide drivers to available spaces efficiently, reduce congestion, and improve overall parking management. Every system is engineered for safety, accuracy, and seamless operation.
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