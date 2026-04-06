import Link from "next/link"

export const metadata = {
  title: "Home",
}

const services = [
  {
    num: "01",
    title: "Structured Cabling",
    desc: "Scalable, standards-compliant cabling infrastructure engineered for reliability and long-term growth.",
    tag: "Infrastructure",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    href: "/services/structured-cabling",
  },
  {
    num: "02",
    title: "CCTV Systems",
    desc: "High-definition surveillance solutions that keep your premises and people protected around the clock.",
    tag: "Security",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80",
    href: "/services/cctv",
  },
  {
    num: "03",
    title: "Network & Security",
    desc: "Enterprise-grade networking with layered security protocols that protect data and maximize uptime.",
    tag: "Networking",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    href: "/services/network-security",
  },
]

const partners = ["Cisco", "Hikvision", "Ubiquiti", "Axis", "Palo Alto", "Fortinet"]

const stats = [
  { n: "500+", l: "Projects Delivered" },
  { n: "15 yrs", l: "Experience" },
  { n: "98%", l: "Client Satisfaction" },
  { n: "24/7", l: "Support" },
]

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Instrument+Sans:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --blue:      #3a89dd;
          --blue-dark: #2a6db8;
          --blue-lt:   #e8f2fc;
          --blue-xlt:  #f0f7ff;
          --ink:       #111827;
          --ink-2:     #374151;
          --ink-3:     #6b7280;
          --surface:   #f9fafb;
          --white:     #ffffff;
          --border:    rgba(17,24,39,0.09);
          --border-2:  rgba(17,24,39,0.05);
        }

        .root {
          font-family: 'Instrument Sans', sans-serif;
          background: var(--white);
          color: var(--ink);
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(10,20,40,0.82) 0%,
            rgba(10,20,40,0.65) 50%,
            rgba(10,20,40,0.30) 100%
          );
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 8rem 2.5rem 6rem;
          width: 100%;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #93c5fd;
          margin-bottom: 1.75rem;
          padding: 6px 14px;
          border: 1px solid rgba(147,197,253,0.3);
          border-radius: 999px;
          background: rgba(58,137,221,0.12);
          backdrop-filter: blur(4px);
        }
        .hero-dot { width: 5px; height: 5px; border-radius: 50%; background: #93c5fd; flex-shrink: 0; }
        .hero h1 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(3rem, 6vw, 5.25rem);
          font-weight: 400;
          line-height: 1.08;
          color: #fff;
          max-width: 16ch;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        .hero h1 em {
          font-style: italic;
          color: #93c5fd;
        }
        .hero-sub {
          font-size: 1.125rem;
          color: rgba(255,255,255,0.65);
          max-width: 42ch;
          line-height: 1.75;
          margin-bottom: 2.75rem;
          font-weight: 300;
        }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }
        .btn-primary {
          display: inline-block;
          background: var(--blue);
          color: #fff;
          padding: 14px 28px;
          border-radius: 8px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover { background: var(--blue-dark); transform: translateY(-1px); }
        .btn-ghost-white {
          display: inline-block;
          border: 1px solid rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.85);
          padding: 14px 28px;
          border-radius: 8px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
          backdrop-filter: blur(4px);
          background: rgba(255,255,255,0.05);
        }
        .btn-ghost-white:hover { border-color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.1); }
        .hero-scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.35);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          animation: floatDown 2.2s ease-in-out infinite;
        }
        @keyframes floatDown {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(6px); }
        }

        /* ── STATS ── */
        .stats { background: var(--blue); padding: 0 2.5rem; }
        .stats-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stat-item {
          padding: 2rem 0;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.15);
        }
        .stat-item:last-child { border-right: none; }
        .stat-n {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 2.25rem;
          font-weight: 400;
          color: #fff;
          line-height: 1;
        }
        .stat-l {
          font-size: 11px;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 5px;
        }

        /* ── ABOUT ── */
        .about { background: var(--white); padding: 7rem 2.5rem; }
        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 1.25rem;
        }
        .about h2 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(1.75rem, 3vw, 2.75rem);
          font-weight: 400;
          line-height: 1.2;
          color: var(--ink);
          margin-bottom: 1.25rem;
        }
        .about h2 em { font-style: italic; color: var(--blue); }
        .about p {
          font-size: 0.9375rem;
          color: var(--ink-3);
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 1rem;
        }
        .btn-outline {
          display: inline-block;
          margin-top: 0.75rem;
          padding: 12px 24px;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--ink-2);
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-outline:hover { border-color: var(--blue); color: var(--blue); background: var(--blue-xlt); }
        .about-image {
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 4/3;
          position: relative;
        }
        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .about-image:hover img { transform: scale(1.03); }
        .about-image-badge {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(8px);
          border-radius: 12px;
          padding: 1rem 1.25rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12);
        }
        .badge-num {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 1.75rem;
          font-weight: 400;
          color: var(--blue);
          line-height: 1;
        }
        .badge-label { font-size: 11px; color: var(--ink-3); margin-top: 3px; font-weight: 300; }

        /* ── SERVICES ── */
        .services { background: var(--surface); padding: 7rem 2.5rem; border-top: 1px solid var(--border-2); }
        .services-inner { max-width: 1200px; margin: 0 auto; }
        .services-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3.5rem;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .services-head h2 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(1.75rem, 3vw, 2.75rem);
          font-weight: 400;
          line-height: 1.2;
          color: var(--ink);
        }
        .services-head h2 em { font-style: italic; color: var(--blue); }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .svc-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .svc-card:hover {
          box-shadow: 0 12px 40px rgba(58,137,221,0.12);
          transform: translateY(-4px);
        }
        .svc-img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .svc-card:hover .svc-img { transform: scale(1.04); }
        .svc-img-wrap { overflow: hidden; flex-shrink: 0; }
        .svc-body { padding: 1.75rem; display: flex; flex-direction: column; flex: 1; }
        .svc-num {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.8rem;
          font-style: italic;
          color: var(--ink-3);
          margin-bottom: 0.5rem;
        }
        .svc-card h3 {
          font-size: 1.0625rem;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 0.625rem;
        }
        .svc-card p {
          font-size: 0.875rem;
          color: var(--ink-3);
          line-height: 1.7;
          font-weight: 300;
          flex: 1;
        }
        .svc-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-2);
        }
        .svc-tag {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--blue);
          background: var(--blue-xlt);
          border-radius: 999px;
          padding: 3px 10px;
          border: 1px solid rgba(58,137,221,0.15);
        }
        .svc-link {
          font-size: 0.8125rem;
          color: var(--blue);
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: gap 0.2s;
        }
        .svc-card:hover .svc-link { gap: 9px; }

        /* ── PARTNERS ── */
        .partners { padding: 6rem 2.5rem; background: var(--white); }
        .partners-inner { max-width: 1200px; margin: 0 auto; }
        .partners-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2.75rem;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .partners-head h2 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 2rem;
          font-weight: 400;
          color: var(--ink);
        }
        .partners-head p {
          font-size: 0.9rem;
          color: var(--ink-3);
          font-weight: 300;
          max-width: 30ch;
          line-height: 1.65;
          text-align: right;
        }
        .partners-row { display: flex; flex-wrap: wrap; gap: 0.75rem; }
        .partner-chip {
          padding: 11px 24px;
          border: 1px solid var(--border);
          border-radius: 9px;
          background: var(--surface);
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--ink-2);
          transition: border-color 0.2s, color 0.2s, background 0.15s;
          cursor: default;
        }
        .partner-chip:hover { border-color: var(--blue); color: var(--blue); background: var(--blue-xlt); }

        /* ── CTA ── */
        .cta {
          position: relative;
          overflow: hidden;
          padding: 7rem 2.5rem;
        }
        .cta-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }
        .cta-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15,30,60,0.88) 0%, rgba(58,137,221,0.65) 100%);
          z-index: 1;
        }
        .cta-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .cta h2 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(2rem, 3.5vw, 3.25rem);
          font-weight: 400;
          color: #fff;
          line-height: 1.2;
        }
        .cta h2 em { font-style: italic; color: #bfdbfe; }
        .cta-right { display: flex; flex-direction: column; gap: 1.25rem; align-items: flex-start; }
        .cta p { font-size: 1rem; color: rgba(255,255,255,0.6); line-height: 1.75; font-weight: 300; }
        .cta-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-white {
          display: inline-block;
          background: #fff;
          color: var(--blue-dark);
          padding: 14px 28px;
          border-radius: 8px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-white:hover { background: #e8f2fc; transform: translateY(-1px); }
        .btn-ghost-white2 {
          display: inline-block;
          border: 1px solid rgba(255,255,255,0.35);
          color: rgba(255,255,255,0.85);
          padding: 14px 28px;
          border-radius: 8px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-ghost-white2:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.08); }

        @media (max-width: 900px) {
          .about-inner, .cta-inner { grid-template-columns: 1fr; gap: 3rem; }
          .services-grid { grid-template-columns: 1fr; }
          .stats-inner { grid-template-columns: repeat(2,1fr); }
          .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.15); }
          .partners-head p { text-align: left; }
          .services-head { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="root">

        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>
              Smart<em> Solutions</em><br />for Smarter Operations
            </h1>
            <p className="hero-sub">
              We deliver reliable ICT solutions for businesses of all sizes. From installation to maintenance, our team ensures your communication and security systems stay connected, secure, and running smoothly.
            </p>
            <div className="hero-actions">
              <Link href="/services" className="btn-primary">Explore Services</Link>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <div className="stats">
          <div className="stats-inner">
            {stats.map(({ n, l }) => (
              <div className="stat-item" key={l}>
                <div className="stat-n">{n}</div>
                <div className="stat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── About ── */}
        <section className="about">
          <div className="about-inner">
            <div>
              <div className="eyebrow">About Us</div>
              <h2> Unifix ICT <em>Solutions</em></h2>
              <p>Unifix ICT Solutions by Rich Haven Enterprises (RHE) is a reliable company engaged in the supply of products and services for telecommunications industry since October 2014.</p>
              <p>The company’s primary objective is to provide services that satisfy customer requirements. We ensure that we satisfy even the most specific expectations our clients have by providing comprehensive telecommunications and ICT solutions. </p>
              <Link href="/about" className="btn-outline">Read Our Story</Link>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                alt="Our team at work"
              />
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="services">
          <div className="services-inner">
            <div className="services-head">
              <div>
                <div className="eyebrow">Our Services</div>
                <h2>What we <em>do best</em></h2>
              </div>
              <Link href="/services" className="btn-outline">View All Services</Link>
            </div>
            <div className="services-grid">
              {services.map((s) => (
                <div className="svc-card" key={s.title}>
                  <div className="svc-img-wrap">
                    <img src={s.img} alt={s.title} className="svc-img" />
                  </div>
                  <div className="svc-body">
                    <div className="svc-num">{s.num}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <div className="svc-footer">
                      <span className="svc-tag">{s.tag}</span>
                      <Link href={s.href} className="svc-link">
                        Learn more
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partners ── */}
        <section className="partners">
          <div className="partners-inner">
            <div className="partners-head">
              <div>
                <div className="eyebrow">Technology Partners</div>
                <h2>Trusted brands we work with</h2>
              </div>
              <p>Certified installers and resellers for industry-leading technology manufacturers.</p>
            </div>
            <div className="partners-row">
              {partners.map((p) => (
                <div className="partner-chip" key={p}>{p}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta">
          <div className="cta-bg" />
          <div className="cta-overlay" />
          <div className="cta-inner">
            <h2>Ready to build something <em>exceptional?</em></h2>
            <div className="cta-right">
              <p>Tell us about your project and we'll put together a solution that fits your goals and budget.</p>
              <div className="cta-btns">
                <Link href="#footer" className="btn-white">Request a Qoute</Link>
                <Link href="/services" className="btn-ghost-white2">View Services</Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}