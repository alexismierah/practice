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
          font-weight: 500;
        }

        .about-heading {
          font-family: "Cormorant Garamond", serif;
          font-weight: 500;
          font-size: clamp(2rem, 3vw + 1rem, 4rem);
          line-height: 0.98;
          letter-spacing: -.02em;
          color: #163521;
          margin: 0 0 40px;
          white-space: nowrap;
        }

        .about-heading-italic {
          font-style: italic;
          color: #3f7a55;
        }

        .about-paragraph {
          font-family: "Cormorant Garamond", serif;
          font-weight: 400;
          font-size: 1.1rem;
          line-height: 1.75;
          color: rgba(26, 50, 30, 0.72);
          margin: 0;
          letter-spacing: .005em;
          width: 100%;
          text-align: justify; 
        }

        @media (min-width: 768px) {
          .about-paragraph {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <p className="about-eyebrow">Where nature meets permanence</p>

      <h1 className="about-heading">
        Rich Haven <span className="about-heading-italic">Artificial Garden</span>
      </h1>

      <p className="about-paragraph">
        At Rich Haven Artificial Garden, we bring nature-inspired beauty to every space—without the maintenance.
        We specialize in high-quality artificial greenery, including potted plants, wall greens, hanging plants, and artificial turf, thoughtfully designed to enhance homes, offices, and commercial spaces. Our products combine realistic aesthetics with durability, offering a lasting green solution that stays fresh and vibrant all year round. Whether you're elevating an interior, transforming an outdoor area, or creating a calming atmosphere, Rich Haven Artificial Garden is committed to delivering style, quality, and timeless greenery you can rely on.
      </p>

    </main>
  );
}