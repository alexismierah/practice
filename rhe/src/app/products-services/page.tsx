"use client";

import { useState } from "react";


const services = [
  {
    step: "01",
    title: "Site Assessment",
    desc: "Our team visits your space to understand the terrain, sun exposure, drainage, and design goals before any work begins.",
  },
  {
    step: "02",
    title: "Design & Planning",
    desc: "We craft a tailored landscape plan with material selections, layout, and a transparent cost breakdown.",
  },
  {
    step: "03",
    title: "Installation",
    desc: "Expert installation by trained specialists ensuring proper layering, drainage, and a seamless finish.",
  },
  {
    step: "04",
    title: "Aftercare Support",
    desc: "Post-installation check-ins and maintenance guidance to keep your green space thriving long-term.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8yrs", label: "Industry Experience" },
];

export default function ProductsServicesPage() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <div
      style={{
        fontFamily: "'Cormorant Garamond', 'Georgia', serif",
        background: "#fafaf8",
        color: "#1a1a1a",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        .product-card {
          background: #fff;
          border: 1px solid #e8e8e2;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          cursor: pointer;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .product-card:hover, .product-card.active {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.08);
          border-color: transparent;
        }
        .product-card.active {
          border: 1.5px solid #2d6a4f;
        }
        .step-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e8e8e2;
          padding: 2rem 1.75rem;
          transition: box-shadow 0.3s ease;
        }
        .step-card:hover {
          box-shadow: 0 16px 40px rgba(0,0,0,0.07);
        }
        .pill-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 11px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: #d8f3dc;
          color: #1b4332;
          margin-bottom: 1rem;
        }
        .hero-image-float {
          position: relative;
          display: inline-block;
        }
        .hero-image-float::before {
          content: '';
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: #d8f3dc;
          top: -30px;
          right: -30px;
          z-index: 0;
        }
        .stat-block {
          text-align: center;
          padding: 1.5rem 2rem;
        }
        .cta-btn {
          display: inline-block;
          background: #2d6a4f;
          color: #fff;
          padding: 14px 36px;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: background 0.25s, transform 0.2s;
        }
        .cta-btn:hover {
          background: #1b4332;
          transform: translateY(-2px);
        }
        .outline-btn {
          display: inline-block;
          background: transparent;
          color: #2d6a4f;
          padding: 13px 34px;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-decoration: none;
          cursor: pointer;
          border: 1.5px solid #2d6a4f;
          transition: all 0.25s;
        }
        .outline-btn:hover {
          background: #2d6a4f;
          color: #fff;
        }
        .section-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #40916c;
          margin-bottom: 0.75rem;
        }
        .big-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 300;
          color: #2d6a4f;
          line-height: 1;
        }
        .divider-line {
          width: 48px;
          height: 2px;
          background: #52b788;
          margin: 1.25rem 0;
          border-radius: 2px;
        }
        .icon-circle {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 1.25rem;
        }
        .floating-info-card {
          background: #fff;
          border-radius: 20px;
          padding: 2rem 2.25rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          position: relative;
          z-index: 2;
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        style={{
          padding: "2.5rem 1.5rem",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundImage: "url('/2.png')",
          backgroundSize: "cover",
          backgroundPosition: "20% ",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <p className="section-eyebrow" 
          style={{
            fontWeight: 570,
            marginTop: 20,
            marginBottom: 1,
            color: "#2D5A27"
          }}>
            PRODUCT COLLECTIONS
          
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem, 5vw, 3.5rem)",
              fontWeight: 420,
              lineHeight: 1.12,
              color: "#0d1b0f",
              marginBottom: "1.5rem",
            }}
          >
            Bringing Nature
            <br />
            <em style={{ fontStyle: "italic", color: "#2D5A27" , fontWeight: 590}}>
              Into Your Space
            </em>
          </h1>
        </div>
      </section>


      {/* ── 1ST INTRO BAND ── */}
      <section
        style={{
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Left: decorative image */}
          <div  
          style={{
            backgroundImage: "url('/p7.png')",
            backgroundSize: "contain",
            backgroundPosition: "15% center",
            backgroundRepeat: "no-repeat",
            width: "170%",
            minHeight: "600px", 
            marginTop: "-2rem",

          }}
          >

          </div>

          {/* Right: text */}
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3vw, 2.8rem)",
                fontWeight: 500,
                lineHeight: 1.2,
                color: "#0d1b0f",
                marginTop: "-8rem",
              }}
            >
              Potted Artificial Plants and Trees
            </h2>

            <div className="divider-line" />

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "#4a5568",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              We specialize in bringing the outdoors in — supplying and professionally installing turf grass, living wall greens, statement plants, and bespoke planter boxes across residential and commercial properties.
            </p>
          </div>
        </div>
      </section>


      {/* ── 2ND INTRO BAND ── */}
      <section
        style={{
          background: "#FAFAF8",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "3rem 3rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
            paddingTop: "2.5rem",
            paddingBottom: "2.5rem",
          }}
        >
          {/* Left: picture */}
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "#0d1b0f",
                marginBottom: "1.25rem",
              }}
            >
              Nature-Inspired Solutions for Modern Living
            </h2>

            <div className="divider-line" />

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "#4a5568",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              We specialize in bringing the outdoors in — supplying and professionally installing turf grass, living wall greens, statement plants, and bespoke planter boxes across residential and commercial properties.
            </p>
          </div>

          {/* Right: text */}
          <div style={{ position: "relative", height: 350 }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "80%",
                height: "100%",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 80,
                boxShadow: "0 20px 50px rgba(45,106,79,0.15)",
              }}
            >
            </div>
          </div>
        </div>
      </section>


            {/* ── 3RD INTRO BAND ── */}
      <section
        style={{
          background: "#fff",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "3rem 3rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Left: decorative image */}
          <div style={{ position: "relative", height: 350 }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "80%",
                height: "100%",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 80,
                boxShadow: "0 20px 50px rgba(45,106,79,0.15)",
              }}
            >
            </div>
          </div>

          {/* Right: text */}
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "#0d1b0f",
                marginBottom: "1.25rem",
              }}
            >
              Nature-Inspired Solutions for Modern Living
            </h2>

            <div className="divider-line" />

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "#4a5568",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              We specialize in bringing the outdoors in — supplying and professionally installing turf grass, living wall greens, statement plants, and bespoke planter boxes across residential and commercial properties.
            </p>
          </div>
        </div>
      </section>
    
    {/* ── 2ND INTRO BAND ── */}
      <section
        style={{
          background: "#FAFAF8",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "3rem 3rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
            paddingTop: "2.5rem",
            paddingBottom: "2.5rem",
          }}
        >
          {/* Left: picture */}
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3vw, 2.8rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "#0d1b0f",
                marginBottom: "1.25rem",
              }}
            >
              Nature-Inspired Solutions for Modern Living
            </h2>

            <div className="divider-line" />

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 300,
                color: "#4a5568",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              We specialize in bringing the outdoors in — supplying and professionally installing turf grass, living wall greens, statement plants, and bespoke planter boxes across residential and commercial properties.
            </p>
          </div>

          {/* Right: text */}
          <div style={{ position: "relative", height: 350 }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "80%",
                height: "100%",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 80,
                boxShadow: "0 20px 50px rgba(45,106,79,0.15)",
              }}
            >
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
