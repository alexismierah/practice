export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --dg: #1a2e1e; --mg: #2d4a32; --sage: #7a9e7e; --sage-light: #a8c5ab;
          --cream: #f7f7f7; --cream2: #eeeeee; --cream3: #e5e5e5; --muted: #6b7c6d;
        }

        body { background: var(--cream); color: var(--dg); font-family: 'DM Sans', sans-serif; overflow-x: hidden; }


        /* INTRO */
        .intro { padding: 140px 56px 96px; background: var(--cream); display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; max-width: 1100px; margin: 0 auto; }
        .intro-left { display: flex; flex-direction: column; }
        .section-label { font-size: 10px; letter-spacing: .36em; text-transform: uppercase; color: var(--sage); margin-bottom: 20px; }
        .intro-heading { font-family: 'DM Sans', sans-serif; font-weight: 300; font-size: clamp(32px, 4vw, 46px); line-height: 1.15; color: var(--dg); letter-spacing: -.5px; }
        .intro-heading em { font-style: italic; color: var(--mg); }
        .intro-divider { width: 40px; height: 1px; background: var(--sage); margin: 32px 0; opacity: 0.5; }
        .intro-body { font-size: 15px; font-weight: 300; line-height: 1.95; color: var(--muted); }
        .intro-right { display: flex; flex-direction: column; gap: 28px; }
        .intro-stat { padding: 28px 32px; background: var(--cream2); border-radius: 12px; }
        .intro-stat-num { font-family: 'DM Sans', sans-serif; font-weight: 200; font-size: 40px; color: var(--mg); letter-spacing: -1px; line-height: 1; margin-bottom: 8px; }
        .intro-stat-label { font-size: 13px; font-weight: 300; color: var(--muted); line-height: 1.6; }

        /* PILLARS */
        .pillars-wrap { background: var(--cream); padding: 0 56px 96px; }
        .pillars-inner { max-width: 1000px; margin: 0 auto; }
        .pillars-top { margin-bottom: 56px; }
        .pillars-heading { font-family: 'DM Sans', sans-serif; font-weight: 300; font-size: clamp(28px, 3.5vw, 38px); color: var(--dg); line-height: 1.1; letter-spacing: -.5px; margin-top: 12px; }
        .pillars-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; }
        .pillar-card { background: #ffffff; padding: 32px 40px; display: flex; flex-direction: column; border-radius: 2px; }
        .pillar-num { display: none; }
        .pillar-icon { width: 44px; height: 44px; border-radius: 10px; background: var(--cream2); display: flex; align-items: center; justify-content: center; margin-bottom: 24px; }
        .pillar-name { font-family: 'DM Sans', sans-serif; font-weight: 300; font-size: 24px; color: var(--dg); line-height: 1.15; margin-bottom: 8px; letter-spacing: -.3px; }
        .pillar-sub { font-size: 13px; font-style: italic; font-weight: 300; color: var(--sage); margin-bottom: 20px; }
        .pillar-body { font-size: 14px; font-weight: 300; line-height: 1.9; color: var(--muted); }


        @media (max-width: 768px) {
          .intro {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 135px 24px 56px;
          }
          .section-label { font-size: 10px; letter-spacing: 0.38em; color: var(--mg); margin-bottom: 14px; }
          .intro-heading { font-size: clamp(26px, 7vw, 34px); }
          .intro-body { font-size: 14px; line-height: 1.85; }
          .intro-divider { margin: 20px 0; }
          .intro-right { flex-direction: row; gap: 10px; }
          .intro-stat { padding: 20px 18px; flex: 1; border-radius: 10px; }
          .intro-stat-num { font-size: 26px; margin-bottom: 6px; }
          .intro-stat-label { font-size: 11px; line-height: 1.5; }
          .pillars-wrap { padding: 0 24px 60px; }
          .pillars-grid { grid-template-columns: 1fr; gap: 2px; }
          .pillar-card { padding: 28px 24px; }
          .pillar-name { font-size: 20px; }
          .pillar-sub { font-size: 12px; margin-bottom: 14px; }
          .pillar-body { font-size: 13px; line-height: 1.8; }
          .pillar-icon { width: 38px; height: 38px; margin-bottom: 18px; }
        }
      `}</style>

      <div>
        {/* Intro */}
        <section style={{ background: "var(--cream)" }}>
          <div className="intro">
            <div className="intro-left">
              <p className="section-label">Our story</p>
              <h2 className="intro-heading">Rich Haven<br /><em>Artificial Garden</em></h2>
              <div className="intro-divider" />
              <p className="intro-body">
                We bring nature-inspired beauty to every space — without the maintenance.
                Thoughtfully designed greenery for homes, offices, and commercial spaces
                that stays fresh and vibrant all year round. Because you shouldn't have
                to choose between beauty and convenience.
              </p>
            </div>
            <div className="intro-right">
              <div className="intro-stat">
                <div className="intro-stat-num">100%</div>
                <p className="intro-stat-label">Maintenance-free greenery — no watering, pruning, or replacing needed.</p>
              </div>
              <div className="intro-stat">
                <div className="intro-stat-num">Every<br/>Space</div>
                <p className="intro-stat-label">From compact home corners to full commercial lobbies, we design for all environments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="pillars-wrap">
          <div className="pillars-inner">
<div className="pillars-grid">
              {[
                {
                  num: "01", name: "What we do", sub: "Greenery for every kind of space.",
                  body: "Our collection covers potted plants, wall greens, hanging plants, and artificial turf — bringing the calm of nature indoors and out with none of the upkeep.",
                  icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C10 2 4 6 4 11a6 6 0 0012 0C16 6 10 2 10 2z" stroke="#7a9e7e" strokeWidth="1.2"/><line x1="10" y1="11" x2="10" y2="18" stroke="#7a9e7e" strokeWidth="1.2"/></svg>,
                },
                {
                  num: "02", name: "How we do it", sub: "Realistic. Built to last.",
                  body: "Our products are designed to look and feel like the real thing — durable materials, careful detail, and color that holds for years, not months. Artificial shouldn't mean artificial-looking.",
                  icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="#7a9e7e" strokeWidth="1.2"/><path d="M7 10l2 2 4-4" stroke="#7a9e7e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                },
              ].map((p, i) => (
                <div key={i} className="pillar-card">
                  <p className="pillar-num">{p.num}</p>
                  <div className="pillar-icon">{p.icon}</div>
                  <h3 className="pillar-name">{p.name}</h3>
                  <p className="pillar-sub">{p.sub}</p>
                  <p className="pillar-body">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}