"use client"

import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

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

const partners = [
  { name: "Dahua",       logo: "/logos/dahua.png" },
  { name: "Ruijie",      logo: "/logos/ruijie.png" },
  { name: "TP-Link",     logo: "/logos/tplink.png" },
  { name: "BDCOM",       logo: "/logos/bdcom.png" },
  { name: "ITC Audio",   logo: "/logos/itc-audio.png" },
  { name: "Growatt",     logo: "/logos/growatt.png" },
  { name: "Hopewind",    logo: "/logos/hopewind.png" },
  { name: "Belden",      logo: "/logos/belden.svg" },
  { name: "Hikvision",   logo: "/logos/hikvision.png" },
  { name: "ZKTeco",      logo: "/logos/zkteco.png" },
  { name: "KSTAR",       logo: "/logos/kstar.jpeg" },
  { name: "Yeastar",     logo: "/logos/yeastar.jpg" },
  { name: "Deltapath",   logo: "/logos/deltapath.png" },
  { name: "Sangfor",     logo: "/logos/sangfor.png" },
  { name: "TOA",         logo: "/logos/toa.png" },
  { name: "Grandstream", logo: "/logos/grandstream.png" },
]

const stats = [
  {
    label: "Reliable Technology",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
      </svg>
    ),
  },
  {
    label: "Safe & Secure",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    label: "Innovative Solutions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
  },
]

function PartnerLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="partner-logo-wrap">
      <img
        src={logo}
        alt={name}
        onError={(e) => {
          const img = e.currentTarget
          img.style.display = "none"
          const badge = img.nextElementSibling as HTMLElement
          if (badge) badge.style.display = "flex"
        }}
      />
      <span className="partner-text-badge">{name}</span>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@300;400;500&display=swap');
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
          position: relative; min-height: 100vh;
          display: flex; align-items: center; overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80');
          background-size: cover; background-position: center; z-index: 0;
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(105deg, rgba(10,20,40,0.82) 0%, rgba(10,20,40,0.65) 50%, rgba(10,20,40,0.30) 100%);
          z-index: 1;
        }
        .hero-content {
          position: relative; z-index: 2;
          max-width: 1200px; margin: 0 auto;
          padding: 8rem 2.5rem 6rem; width: 100%;
        }
        .hero h1 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(3rem, 6vw, 5.25rem);
          font-weight: 400; line-height: 1.08; color: #fff;
          max-width: 16ch; margin-bottom: 1.5rem; letter-spacing: -0.02em;
        }
        .hero h1 em { font-style: italic; color: #93c5fd; }
        .hero-sub {
          font-size: 1.125rem; color: rgba(255,255,255,0.65);
          max-width: 42ch; line-height: 1.75; margin-bottom: 2.75rem; font-weight: 300;
        }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }
        .btn-primary {
          display: inline-block; background: var(--blue); color: #fff;
          padding: 14px 28px; border-radius: 8px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.9rem; font-weight: 500; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover { background: var(--blue-dark); transform: translateY(-1px); }

        /* ── STATS ── */
        .stats { background: #1e3a5f; padding: 0 2.5rem; }
        .stats-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(3, 1fr);
        }
        .stat-item {
          padding: 24px 32px;
          display: flex; align-items: center; justify-content: center; gap: 12px;
          border-right: 1px solid rgba(255,255,255,0.1);
          transition: background 0.2s;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: rgba(255,255,255,0.05); }
        .stat-icon {
          width: 36px; height: 36px; border-radius: 9px;
          background: rgba(147,197,253,0.15);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .stat-icon svg { width: 18px; height: 18px; }
        .stat-n {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 15px; font-weight: 500; color: #fff; letter-spacing: -0.01em;
        }

        /* ── ABOUT ── */
        .about { background: var(--white); padding: 7rem 2.5rem; }
        .about-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center;
        }
        .eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: var(--blue); margin-bottom: 1.25rem; }
        .about h2 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(1.75rem, 3vw, 2.75rem);
          font-weight: 400; line-height: 1.2; color: var(--ink); margin-bottom: 1.25rem;
        }
        .about h2 em { font-style: italic; color: var(--blue); }
        .about p { font-size: 0.9375rem; color: var(--ink-3); line-height: 1.8; font-weight: 300; margin-bottom: 1rem; }
        .btn-outline {
          display: inline-block; margin-top: 0.75rem; padding: 12px 24px;
          border: 1px solid var(--border); border-radius: 8px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.875rem; font-weight: 500; color: var(--ink-2); text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-outline:hover { border-color: var(--blue); color: var(--blue); background: var(--blue-xlt); }
        .about-image { border-radius: 20px; overflow: hidden; aspect-ratio: 4/3; }
        .about-image img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
        .about-image:hover img { transform: scale(1.03); }

        /* ── SERVICES ── */
        .services { background: var(--surface); padding: 7rem 2.5rem; border-top: 1px solid var(--border-2); }
        .services-inner { max-width: 1200px; margin: 0 auto; }
        .services-head {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-bottom: 3.5rem; gap: 2rem; flex-wrap: wrap;
        }
        .services-head h2 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(1.75rem, 3vw, 2.75rem); font-weight: 400; line-height: 1.2; color: var(--ink);
        }
        .services-head h2 em { font-style: italic; color: var(--blue); }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .svc-card {
          background: var(--white); border: 1px solid var(--border); border-radius: 18px;
          overflow: hidden; display: flex; flex-direction: column;
          transition: box-shadow 0.25s, transform 0.25s;
        }
        .svc-card:hover { box-shadow: 0 12px 40px rgba(58,137,221,0.12); transform: translateY(-4px); }
        .svc-img { width: 100%; height: 210px; object-fit: cover; display: block; transition: transform 0.5s ease; }
        .svc-card:hover .svc-img { transform: scale(1.04); }
        .svc-img-wrap { overflow: hidden; flex-shrink: 0; }
        .svc-body { padding: 1.75rem; display: flex; flex-direction: column; flex: 1; }
        .svc-num { font-size: 0.8rem; font-style: italic; color: var(--ink-3); margin-bottom: 0.5rem; }
        .svc-card h3 { font-size: 1.0625rem; font-weight: 500; color: var(--ink); margin-bottom: 0.625rem; }
        .svc-card p { font-size: 0.875rem; color: var(--ink-3); line-height: 1.7; font-weight: 300; flex: 1; }
        .svc-footer {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-2);
        }
        .svc-tag {
          font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--blue); background: var(--blue-xlt); border-radius: 999px;
          padding: 3px 10px; border: 1px solid rgba(58,137,221,0.15);
        }
        .svc-link {
          font-size: 0.8125rem; color: var(--blue); text-decoration: none; font-weight: 500;
          display: inline-flex; align-items: center; gap: 5px; transition: gap 0.2s;
        }
        .svc-card:hover .svc-link { gap: 9px; }

        /* ── PARTNERS ── */
        .partners { padding: 6rem 2.5rem; background: var(--white); }
        .partners-inner { max-width: 1200px; margin: 0 auto; }
        .partners-head { text-align: center; margin-bottom: 2.75rem; }
        .partners-head h2 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 2rem; font-weight: 400; color: var(--ink); margin-top: 0.5rem;
        }

        /* ── MARQUEE ── */
        .marquee-track {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .marquee-inner {
          display: flex; align-items: center; gap: 2.5rem;
          width: max-content;
          animation: marquee 36s linear infinite;
        }
        .marquee-inner:hover { animation-play-state: paused; }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .partner-logo-wrap {
          display: flex; align-items: center; justify-content: center;
          width: 150px; height: 64px; flex-shrink: 0;
          opacity: 0.75; transition: opacity 0.3s;
        }
        .partner-logo-wrap:hover { opacity: 1; }
        .partner-logo-wrap img { max-width: 120px; max-height: 44px; object-fit: contain; display: block; }
        .partner-text-badge {
          display: none; align-items: center; justify-content: center;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.8125rem; font-weight: 600; color: var(--ink-2);
          letter-spacing: -0.01em; white-space: nowrap;
          padding: 6px 14px; border: 1.5px solid var(--border); border-radius: 6px;
        }

        /* ── CTA ── */
        .cta { position: relative; overflow: hidden; padding: 7rem 2.5rem; }
        .cta-bg {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80');
          background-size: cover; background-position: center; z-index: 0;
        }
        .cta-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(15,30,60,0.88) 0%, rgba(58,137,221,0.65) 100%);
          z-index: 1;
        }
        .cta-inner {
          position: relative; z-index: 2; max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
        }
        .cta h2 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(2rem, 3.5vw, 3.25rem); font-weight: 400; color: #fff; line-height: 1.2;
        }
        .cta h2 em { font-style: italic; color: #bfdbfe; }
        .cta-right { display: flex; flex-direction: column; gap: 1.25rem; align-items: flex-start; }
        .cta p { font-size: 1rem; color: rgba(255,255,255,0.6); line-height: 1.75; font-weight: 300; }
        .cta-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-white {
          display: inline-block; background: #fff; color: var(--blue-dark);
          padding: 14px 28px; border-radius: 8px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.9rem; font-weight: 500; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-white:hover { background: #e8f2fc; transform: translateY(-1px); }
        .btn-ghost-white2 {
          display: inline-block; border: 1px solid rgba(255,255,255,0.35);
          color: rgba(255,255,255,0.85); padding: 14px 28px; border-radius: 8px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.9rem; font-weight: 400; text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-ghost-white2:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.08); }

        @media (max-width: 900px) {
          .about-inner, .cta-inner { grid-template-columns: 1fr; gap: 3rem; }
          .services-grid { grid-template-columns: 1fr; }
          .stats-inner { grid-template-columns: 1fr; }
          .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); justify-content: flex-start; }
          .stat-item:last-child { border-bottom: none; }
          .services-head { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="root">

        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <Breadcrumbs
              className="text-white/70 mb-6 [&_a:hover]:text-white"
              items={[{ name: "Home", path: "/" }]}
            />
            <h1>Smart<em> Solutions</em><br />for Smarter Operations</h1>
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
            {stats.map(({ label, icon }) => (
              <div className="stat-item" key={label}>
                <div className="stat-icon">{icon}</div>
                <div className="stat-n">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── About ── */}
        <section className="about">
          <div className="about-inner">
            <div>
              <div className="eyebrow">About Us</div>
              <h2>Unifix ICT <em>Solutions</em></h2>
              <p>Unifix ICT Solutions by Rich Haven Enterprises (RHE) is a reliable company engaged in the supply of products and services for telecommunications industry since October 2014.</p>
              <p>The company's primary objective is to provide services that satisfy customer requirements. We ensure that we satisfy even the most specific expectations our clients have by providing comprehensive telecommunications and ICT solutions.</p>
              <Link href="/about" className="btn-outline">Read Our Story</Link>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80" alt="Our team at work" />
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
              <div className="eyebrow">Brand Partners</div>
              <h2>Trusted brands we work with</h2>
            </div>
            <div className="marquee-track">
              <div className="marquee-inner">
                {[...partners, ...partners].map((p, i) => (
                  <PartnerLogo key={i} name={p.name} logo={p.logo} />
                ))}
              </div>
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
              <p>Every project comes with its own needs and challenges. Tell us your priorities, and we'll fill them to your satisfaction.</p>
              <div className="cta-btns">
                <Link href="/services" className="btn-ghost-white2">View Services</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}