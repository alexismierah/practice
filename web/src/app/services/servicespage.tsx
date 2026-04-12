"use client"

import Link from "next/link"
import Breadcrumbs from "@/components/Breadcrumbs"

const services = [
  {
    name: "Structured & Network Cabling",
    desc: "We design and implement reliable cabling infrastructure that forms the backbone of your connectivity — built for scale, speed, and long-term performance.",
    tag: "Infrastructure",
    href: "/services/structured-cabling",
    img: "https://20659463.fs1.hubspotusercontent-na1.net/hubfs/20659463/Best%20Practices%20for%20Regular%20Data%20Center%20Cleaning%20and%20Maintenance%20-%20Featured%20Image%20-%201200x700.png",
  },
  {
    name: "CCTV Surveillance",
    desc: "Our solutions include IP camera networks for continuous site monitoring, remote security management, and intelligent video analytics.",
    tag: "Security",
    href: "/services/cctv",
    img: "https://www.securitastechnology.com/sites/securitastechnology.com/files/media/2022-01/Modern%20CCTV%20camera%20on%20a%20wall.jpg",
  },
  {
    name: "IP-PBX System",
    desc: "We design and implement scalable VoIP telephony architectures that manage internal and external voice communications over a unified data network.",
    tag: "Communication",
    href: "/services/ip-pbx",
    img: "https://roicallcentersolutions.com/wp-content/uploads/2018/02/business-businessmen-classroom-267507.jpg",
  },
  {
    name: "Access Control System",
    desc: "Secure and efficient entry management using smart card readers, biometric authentication, and centralized access policies across your premises.",
    tag: "Security",
    href: "/services/access-control",
    img: "https://inbound.usisecurity.com/hubfs/Depositphotos_33384173_l-2015-min.jpg",
  },
  {
    name: "Public Address System",
    desc: "Clear and reliable audio systems for announcements, emergency broadcasts, and background audio across large facilities and multi-zone environments.",
    tag: "Audio",
    href: "/services/public-address",
    img: "https://www.masstrans.in/wp-content/uploads/Passenger-Announcement-System-airport.jpeg",
  },
  {
    name: "Network & Security",
    desc: "Robust enterprise networking architecture with integrated firewall, intrusion detection, and end-to-end encryption for comprehensive protection.",
    tag: "Network",
    href: "/services/network-security",
    img: "https://www.hotbot.com/articles/wp-content/uploads/2025/11/top-networking-equipment-in-2025-best-routers-switches-access-points-jw-scaled.jpeg",
  },
  {
    name: "Conference System",
    desc: "Professional audio-visual conference setups with seamless integration for hybrid meetings, presentations, and collaboration in any room size.",
    tag: "AV",
    href: "/services/conference",
    img: "https://www.holzmedia.de/workspace/bilder/produkte/individuelle-konferenztischanlage-c3-bild-977.jpg",
  },
  {
    name: "Parking System",
    desc: "Smart parking management with automated barriers, ANPR cameras, and real-time monitoring for efficient vehicle flow and space utilization.",
    tag: "Automation",
    href: "/services/parking",
    img: "https://alshareefgroup.com/wp-content/uploads/2024/12/Parking-Management-Systems-scaled.jpg",
  },
  {
    name: "Solar Power",
    desc: "Sustainable photovoltaic energy systems designed for commercial and industrial applications, reducing costs and carbon footprint.",
    tag: "Energy",
    href: "/services/solar",
    img: "https://www.chintglobal.com/content/dam/chintsite/global/en/about-us/news-center/blog/solar-power-plant-knowledge-important-featured-banner-20210222.jpg",
  },
  {
    name: "UPS",
    desc: "Reliable uninterruptible power supply solutions that protect critical equipment and ensure business continuity during outages.",
    tag: "Energy",
    href: "/services/ups",
    img: "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-UNINTERRUPTIBLE-POWER-SUPPLY-UPS-01296-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
  },
  {
    name: "LED Display",
    desc: "High-brightness LED display installations for indoor and outdoor advertising, wayfinding, and dynamic information boards.",
    tag: "Display",
    href: "/services/led-display",
    img: "https://www.viewsonic.com/vsAssetFile/ph/img/resize/product-rc/_direct_view_led/LDC031-180/sc/Lobby.webp",
  },
  {
    name: "Video Intercom",
    desc: "Integrated video intercom systems for residential and commercial buildings with remote door access and mobile app connectivity.",
    tag: "Security",
    href: "/services/video-intercom",
    img: "https://images.ctfassets.net/5kq8dse7hipf/4XT22KM3SK6kZJxVB9swsU/2d0c5908226ad37ff784282b667e3d28/intercom-system-cost.jpg",
  },
]

const tagColors: Record<string, { bg: string; color: string; border: string }> = {
  Infrastructure: { bg: "#eff6ff",   color: "#1d4ed8", border: "#bfdbfe" },
  Security:       { bg: "#fef2f2",   color: "#b91c1c", border: "#fecaca" },
  Communication:  { bg: "#f0fdf4",   color: "#15803d", border: "#bbf7d0" },
  Audio:          { bg: "#fdf4ff",   color: "#7e22ce", border: "#e9d5ff" },
  Network:        { bg: "#eff6ff",   color: "#1d4ed8", border: "#bfdbfe" },
  AV:             { bg: "#fff7ed",   color: "#c2410c", border: "#fed7aa" },
  Automation:     { bg: "#f0fdfa",   color: "#0f766e", border: "#99f6e4" },
  Energy:         { bg: "#fefce8",   color: "#a16207", border: "#fde68a" },
  Display:        { bg: "#fdf4ff",   color: "#7e22ce", border: "#e9d5ff" },
}

export default function ServicesPage() {
  function scrollToFooter(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const el = document.getElementById("footer")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Instrument+Sans:wght@300;400;500&display=swap');

        :root {
          --blue:      #3a89dd;
          --blue-dark: #2a6db8;
          --blue-xlt:  #f0f7ff;
          --ink:       #111827;
          --ink-2:     #374151;
          --ink-3:     #6b7280;
          --ink-4:     #9ca3af;
          --surface:   #f9fafb;
          --border:    rgba(17,24,39,0.08);
          --border-2:  rgba(17,24,39,0.05);
        }

        .sp { font-family: 'Instrument Sans', sans-serif; background: #fff; color: var(--ink); }

        /* ── HERO ── */
        .sp-hero {
          position: relative;
          overflow: hidden;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          padding: 5.5rem 4rem 4.5rem;
        }
        .sp-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--border-2) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-2) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }
        .sp-hero-inner {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .sp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 1.25rem;
        }
        .sp-eyebrow-bar { width: 24px; height: 1.5px; background: var(--blue); }
        .sp-hero h1 {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(2.75rem, 5vw, 4.25rem);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 0.875rem;
        }
        .sp-hero h1 em { font-style: italic; color: var(--blue); }
        .sp-hero-sub {
          font-size: 1rem;
          color: var(--ink-3);
          font-weight: 300;
          line-height: 1.7;
          max-width: 44ch;
        }
        .sp-hero-stat { text-align: right; flex-shrink: 0; }
        .sp-hero-stat-n {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 5.5rem;
          font-weight: 400;
          line-height: 1;
          color: var(--ink);
          letter-spacing: -0.04em;
        }
        .sp-hero-stat-l {
          font-size: 11px;
          color: var(--ink-4);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-top: 4px;
        }

        /* ── SERVICE ROWS ── */
        .sp-rows {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 2.5rem 2.5rem;
          background: #f1f5f9;
        }

        .sp-row {
          display: grid;
          grid-template-columns: 1fr 420px;
          text-decoration: none;
          color: inherit;
          min-height: 260px;
          position: relative;
          transition: background 0.22s, box-shadow 0.22s, transform 0.22s;
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .sp-row:hover {
          background: var(--blue-xlt) !important;
          box-shadow: 0 8px 32px rgba(17,24,39,0.09);
          transform: translateY(-2px);
        }

        .sp-row::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--blue);
          transform: scaleY(0);
          transform-origin: center;
          transition: transform 0.25s ease;
          border-radius: 3px 0 0 3px;
        }
        .sp-row:hover::before { transform: scaleY(1); }

        .sp-row-text {
          padding: 2.75rem 3rem 2.75rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0;
        }
        .sp-row-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .sp-row-num {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.875rem;
          font-style: italic;
          color: var(--ink-4);
        }
        .sp-row-tag {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
          border: 1px solid;
        }
        .sp-row-name {
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(1.375rem, 2vw, 1.875rem);
          font-weight: 400;
          line-height: 1.2;
          color: var(--ink);
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }
        .sp-row:hover .sp-row-name { color: var(--blue); }
        .sp-row-desc {
          font-size: 0.9rem;
          color: var(--ink-3);
          line-height: 1.75;
          font-weight: 300;
          max-width: 50ch;
          margin-bottom: 1.5rem;
        }
        .sp-row-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8375rem;
          font-weight: 500;
          color: var(--blue);
          transition: gap 0.2s;
        }
        .sp-row:hover .sp-row-cta { gap: 14px; }
        .sp-row-cta-circle {
          width: 28px; height: 28px;
          border-radius: 50%;
          border: 1.5px solid var(--blue);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.18s;
        }
        .sp-row:hover .sp-row-cta-circle { background: var(--blue); color: #fff; }

        .sp-row-img {
          position: relative;
          overflow: hidden;
        }
        .sp-row-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .sp-row:hover .sp-row-img img { transform: scale(1.05); }
        .sp-row-img-shade {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.25) 0%, transparent 40%);
          pointer-events: none;
          transition: opacity 0.3s;
        }
        .sp-row:hover .sp-row-img-shade { opacity: 0; }

        /* ── CTA ── */
        .sp-cta {
          position: relative;
          overflow: hidden;
          background: var(--ink);
          padding: 5.5rem 4rem;
          text-align: center;
        }
        .sp-cta-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(58,137,221,0.13) 0%, transparent 70%);
          pointer-events: none;
        }
        .sp-cta h2 {
          position: relative;
          font-family: 'Instrument Sans', sans-serif;
          font-size: clamp(1.75rem, 3vw, 2.75rem);
          font-weight: 400;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        .sp-cta h2 em { font-style: italic; color: #93c5fd; }
        .sp-cta p {
          position: relative;
          font-size: 0.9375rem;
          color: rgba(255,255,255,0.5);
          font-weight: 300;
          margin-bottom: 2rem;
        }
        .sp-cta-btn {
          position: relative;
          display: inline-block;
          background: var(--blue);
          color: #fff;
          padding: 14px 32px;
          border-radius: 8px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          cursor: pointer;
        }
        .sp-cta-btn:hover { background: var(--blue-dark); transform: translateY(-1px); }

        @media (max-width: 860px) {
          .sp-row { grid-template-columns: 1fr; min-height: auto; }
          .sp-row-img { aspect-ratio: 16/9; }
          .sp-row-text { padding: 2rem 1.5rem; }
          .sp-hero { padding: 3.5rem 1.5rem 3rem; }
          .sp-cta { padding: 4rem 1.5rem; }
          .sp-hero-stat { display: none; }
          .sp-rows { padding: 1.5rem; gap: 1rem; }
        }
      `}</style>

      <div className="sp">

        {/* Hero */}
        <section className="sp-hero">
          <div className="sp-hero-grid" />
          <div className="sp-hero-inner">
            <div>
              <Breadcrumbs
                items={[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                ]}
              />
              <div className="sp-eyebrow">
                <span/>
                What We Offer
              </div>
              <h1>Our <em>Services</em></h1>
              <p className="sp-hero-sub">
                Technology solutions for businesses from infrastructure to intelligent systems.
              </p>
            </div>
            <div className="sp-hero-stat">
              <div className="sp-hero-stat-n">{String(services.length).padStart(2, "0")}</div>
              <div className="sp-hero-stat-l">Services Available</div>
            </div>
          </div>
        </section>

        {/* Rows */}
        <div className="sp-rows">
          {services.map((svc, i) => {
            const c = tagColors[svc.tag] ?? tagColors["Infrastructure"]
            return (
              <Link key={svc.href} href={svc.href} className="sp-row">
                <div className="sp-row-text">
                  <div className="sp-row-meta">
                    <span className="sp-row-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="sp-row-tag" style={{ background: c.bg, color: c.color, borderColor: c.border }}>
                      {svc.tag}
                    </span>
                  </div>
                  <h2 className="sp-row-name">{svc.name}</h2>
                  <p className="sp-row-desc">{svc.desc}</p>
                  <div className="sp-row-cta">
                    Explore service
                    <span className="sp-row-cta-circle">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6h7M6 2.5L9.5 6 6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="sp-row-img">
                  <img src={svc.img} alt={svc.name} />
                  <div className="sp-row-img-shade" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <section className="sp-cta">
          <div className="sp-cta-glow" />
          <h2>Not sure what you <em>need?</em></h2>
          <p>Talk to our team — we'll recommend the right solution for your business.</p>
          <a href="#footer" className="sp-cta-btn" onClick={scrollToFooter}>Request a Quote</a>
        </section>

      </div>
    </>
  )
}