import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="about-wrap">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap");

        .about-wrap, .about-wrap * { box-sizing: border-box; }

        .about-wrap {
          font-family: "Inter", sans-serif;
          background: #fff;
          color: #163521;
          min-height: 100vh;
          padding: 40px 8px 40px;
        }

        @media (min-width: 768px) {
          .about-wrap { padding: 96px 96px; }
        }

        .about-eyebrow {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          letter-spacing: .18em;
          color: #9aaa9f;
          text-transform: uppercase;
          margin: 0 0 20px;
          padding: 0 8px;
          font-weight: 500;
        }

        .about-hero {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 64px;
        }

        @media (min-width: 1024px) {
          .about-hero {
            flex-direction: row;
          }
        }

        .about-text {
          flex: 1;
        }

        .about-heading-block {
          margin-bottom: 4px;
          padding: 0 8px;
        }

        .about-heading {
          font-family: "Cormorant Garamond", serif;
          font-weight: 500;
          font-size: clamp(3rem, 4vw + 1rem, 4rem);
          line-height: 0.98;
          letter-spacing: -.02em;
          color: #163521;
          margin: 0;
        }

        .about-heading-italic {
          font-family: "Cormorant Garamond", serif;
          font-weight: 500;
          font-style: italic;
          font-size: clamp(3rem, 4vw + 1rem, 4rem);
          line-height: 0.98;
          letter-spacing: -.02em;
          color: #3f7a55;
          margin: 0;
          white-space: nowrap;
        }

        .about-mobile-spacer {
          margin-bottom: 24px;
        }

        @media (min-width: 1024px) {
          .about-mobile-spacer { display: none; }
        }

        .about-body {
          padding: 0 8px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-paragraph {
          font-family: "Cormorant Garamond", serif;
          font-weight: 400;
          font-size: 1.1rem;
          line-height: 1.75;
          color: rgba(26, 50, 30, 0.72);
          margin: 0;
          letter-spacing: .005em;
          margin-top: 30px;
        }

        @media (min-width: 768px) {
          .about-paragraph {
            font-size: 1.2rem;
          }
        }

        .about-image-wrap {
          display: none;
          width: 100%;
          max-width: 480px;
          margin-top: -24px;
          position: relative;
        }

        @media (min-width: 1024px) {
          .about-image-wrap {
            display: block;
            margin-top: -48px;
          }
        }

        .about-image-shadow {
          position: absolute !important;
          inset: 0;
          width: 120% !important;
          height: auto;
          object-fit: contain;
          border-radius: 16px;
          opacity: 0.13;
          filter: blur(8px) saturate(0.3) brightness(0.4);
          top: -14% !important;
          left: -10% !important;
        }

        .about-image-main {
          position: relative;
          z-index: 10;
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 16px;
          display: block;
        }
      `}</style>

      {/* Eyebrow */}
      <p className="about-eyebrow">Where nature meets permanence</p>

      {/* Hero Section */}
      <div className="about-hero">

        {/* Left: Text */}
        <div className="about-text">

          {/* Headline */}
          <div className="about-heading-block">
            <h1 className="about-heading">Rich Haven</h1>
            <h1 className="about-heading-italic">Artificial Garden</h1>
          </div>

          {/* Spacer visible only on mobile after heading block */}
          <div className="about-mobile-spacer" />

          {/* Body Copy */}
          <div className="about-body">
            <p className="about-paragraph">
              At Rich Haven Artificial Garden, we bring nature-inspired beauty to every
              space — without the maintenance. We specialize in high-quality artificial
              greenery, including potted plants, wall greens, hanging plants, and
              artificial turf, thoughtfully designed to enhance homes, offices, and
              commercial spaces.
            </p>
            <p className="about-paragraph">
              Our products combine realistic aesthetics with durability, offering a
              lasting green solution that stays fresh and vibrant all year round.
              Whether you're elevating an interior, transforming an outdoor area, or
              creating a calming atmosphere, Rich Haven delivers style, quality, and
              timeless greenery you can rely on.
            </p>
          </div>

        </div>

        {/* Right: Image — hidden on mobile, visible on lg+ */}
        <div className="about-image-wrap">

          {/* Shadow BG */}
          <Image
            src="/Untitled design (2).png"
            alt=""
            aria-hidden="true"
            width={800}
            height={600}
            className="about-image-shadow"
          />

          {/* Main Image */}
          <Image
            src="/Untitled design (2).png"
            alt="Rich Haven Artificial Garden"
            width={800}
            height={600}
            className="about-image-main"
          />

        </div>

      </div>

    </main>
  );
}