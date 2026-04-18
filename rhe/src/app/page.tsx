"use client";
import Link from "next/link";
import { CloudSun, Grid2x2, Leaf, ShieldCheck, ChevronDown } from "lucide-react";
import { useState } from "react";

const featuredPlants = [
  {
    name: " Artificial Grass",
    sublabel: "Sports or design spaces",
    img: "https://cdn.thewirecutter.com/wp-content/media/2021/07/synthetic-lawn-2048px-802551536-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
    link: "/products-services/grass",
  },
  {
    name: "Potted Plants and Trees",
    sublabel: "Lush Indoor Statement Accent",
    img: "https://theplantsproject.com.au/cdn/shop/files/Bird_of_Paradise_Plant_Styled_Photo_3_sizes.jpg",
    link: "/products-services/potted-plants",
  },
  {
    name: "Planter Boxes",
    sublabel: "Vibrant Designer Foliage Collection",
    img: "https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/648424462_1429741828941943_3205555062599595441_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHhyzcOGd0LQfedLo-WoqEmu1Yra36Dg727VitrfoODveK9MJ3u5DOCxeyGJyr2yOTh7gqQxWA9h8YGxbaf6Rfs&_nc_ohc=LCv9f4tZGZMQ7kNvwGkxkrk&_nc_oc=Adr0hIaMnAmPY779YI914QLOvnDQy8EOCDawkFJF5UFWnR22g8pB2AKUwza8hAnhFJM&_nc_zt=23&_nc_ht=scontent.fmnl9-1.fna&_nc_gid=RqC1R6mFu0mo3iOHrS8Rxw&_nc_ss=7a3a8&oh=00_Af2VVxRrRicsPYUagbkaYIp_QgChOXUp7p_n4gxGEIAGmg&oe=69E3E0BC",
    link: "/products-services/planter-box",
  },
  {
    name: "Wall Greens",
    sublabel: "Low-Maintenance Greenery",
    img: "https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/659113654_1448920473690745_7788257688503933853_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHuX0UmVZuYmexZkqsK2iNwNhtURVi6_bE2G1RFWLr9sU5U7ekWo31swlncyFRazXjq-toVyt2Y4Lc0GeQDvhZQ&_nc_ohc=pbb1ftAlsWIQ7kNvwHYTwyu&_nc_oc=AdotuAxS5AmsfPdBkTQgDxQVT8WSimOgGF_lv5rzK5cKPZJSuqB7ujlEjRfIgMYeZIQ&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=8IR14u51iA4tUCsPo5jdGw&_nc_ss=7a3a8&oh=00_Af0Q7FrK5QwRUqF5qaXbFwmbneWeeYnd3L-i9g3oPOrL2A&oe=69E40C8A",
    link: "/products-services/wall-greens",
  },
];

const svcItems = [
  {
    name: "Artificial Grass Supply",
    desc: "Premium quality artificial turf for sports courts, residential lawns, rooftop gardens, and commercial spaces — durable, UV-resistant, and always lush.",
    img: "https://cdn.thewirecutter.com/wp-content/media/2021/07/synthetic-lawn-2048px-802551536-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
  },
  {
    name: "Potted Plants & Trees",
    desc: "Bring lush indoor and outdoor statement pieces to any room or corner with our curated range of lifelike potted plants and statement trees.",
    img: "https://theplantsproject.com.au/cdn/shop/files/Bird_of_Paradise_Plant_Styled_Photo_3_sizes.jpg",
  },
  {
    name: "Planter Box Design",
    desc: "Vibrant designer foliage collections arranged in custom planter boxes — perfect for lobbies, offices, balconies, and event installations.",
    img: "https://scontent.fmnl9-1.fna.fbcdn.net/v/t39.30808-6/648424462_1429741828941943_3205555062599595441_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHhyzcOGd0LQfedLo-WoqEmu1Yra36Dg727VitrfoODveK9MJ3u5DOCxeyGJyr2yOTh7gqQxWA9h8YGxbaf6Rfs&_nc_ohc=LCv9f4tZGZMQ7kNvwGkxkrk&_nc_oc=Adr0hIaMnAmPY779YI914QLOvnDQy8EOCDawkFJF5UFWnR22g8pB2AKUwza8hAnhFJM&_nc_zt=23&_nc_ht=scontent.fmnl9-1.fna&_nc_gid=RqC1R6mFu0mo3iOHrS8Rxw&_nc_ss=7a3a8&oh=00_Af2VVxRrRicsPYUagbkaYIp_QgChOXUp7p_n4gxGEIAGmg&oe=69E3E0BC",
  },
  {
    name: "Wall Greens Installation",
    desc: "Low-maintenance vertical green walls professionally installed to transform any bare wall into a stunning living-look feature — indoors or outdoors.",
    img: "https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/659113654_1448920473690745_7788257688503933853_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHuX0UmVZuYmexZkqsK2iNwNhtURVi6_bE2G1RFWLr9sU5U7ekWo31swlncyFRazXjq-toVyt2Y4Lc0GeQDvhZQ&_nc_ohc=pbb1ftAlsWIQ7kNvwHYTwyu&_nc_oc=AdotuAxS5AmsfPdBkTQgDxQVT8WSimOgGF_lv5rzK5cKPZJSuqB7ujlEjRfIgMYeZIQ&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=8IR14u51iA4tUCsPo5jdGw&_nc_ss=7a3a8&oh=00_Af0Q7FrK5QwRUqF5qaXbFwmbneWeeYnd3L-i9g3oPOrL2A&oe=69E40C8A",
  },
  {
    name: "Space Consultation",
    desc: "Not sure what fits your space? Our team offers on-site or virtual consultations to help you select the right greenery combination and layout.",
    img: "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/598973170_1362085932374200_5536687096599188254_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGT0NG2TUJ5zSjWYQraD6ZFFz_SIjbfnecXP9IiNt-d5_ez5o5kNtzkM5eDqinu72xI0FFPFLKj1zgTFqyBkNJ7&_nc_ohc=p-RKDlyUvKYQ7kNvwHk0n0C&_nc_oc=AdqXMFp0qpigA8hNiov7C0Y9BB1PMllCrpVI-xQFcGk6zoNPmlAfmtueJDfQ5wxPcN4&_nc_zt=23&_nc_ht=scontent.fmnl9-4.fna&_nc_gid=RlRA6aQz6kjKovVCBWNnxQ&_nc_ss=7a3a8&oh=00_Af3Z8g_ZVDiyLRYHXKxfFykMiJt6Us38xM_hF4VPQcX7Vw&oe=69E40501",
  },
];

const categories = [
  {
    title: "Supply",
    desc: "We supply quality grass, potted plants, planter boxes, and wall gardens to enhance your space with ease and a natural touch to any room.",
    plantImg: "https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/598973170_1362085932374200_5536687096599188254_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGT0NG2TUJ5zSjWYQraD6ZFFz_SIjbfnecXP9IiNt-d5_ez5o5kNtzkM5eDqinu72xI0FFPFLKj1zgTFqyBkNJ7&_nc_ohc=p-RKDlyUvKYQ7kNvwHk0n0C&_nc_oc=AdqXMFp0qpigA8hNiov7C0Y9BB1PMllCrpVI-xQFcGk6zoNPmlAfmtueJDfQ5wxPcN4&_nc_zt=23&_nc_ht=scontent.fmnl9-4.fna&_nc_gid=RlRA6aQz6kjKovVCBWNnxQ&_nc_ss=7a3a8&oh=00_Af3Z8g_ZVDiyLRYHXKxfFykMiJt6Us38xM_hF4VPQcX7Vw&oe=69E40501",
  },
  {
    title: "Installation",
    desc: "Bring your space to life with expert installation of grass, plants, planter boxes, and wall gardens creating a fresh, natural environment that's built to last.",
    plantImg: "https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/661958724_1455321336383992_8103217024831523114_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGWFYPUbrw88s88TgFQYjUVE244JEBz8NoTbjgkQHPw2oki82kse-3lXjyP5wR8JOAne0DzEZws_hu6VimYAZWJ&_nc_ohc=fSU2WOIPwa8Q7kNvwEt0T_w&_nc_oc=AdofztDrpzhClF8hgZ5ivFiHcvMLQdUha7MEIDPJsmUoxusTm6mR3eBfbZI9byTCQ0o&_nc_zt=23&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=J7OgKli0DC-Qel3y6a2xxg&_nc_ss=7a3a8&oh=00_Af2seg98qtQ9QMrHbRGgF6F2N871SG4Mmujv36Hmq27M8g&oe=69E40115",
  },
];

const shopReasons = [
  {
    title: "Low Maintenance",
    desc: "Enjoy beautiful greenery without watering, trimming, or fertilizing.",
    icon: Leaf,
  },
  {
    title: "Long-Lasting Quality",
    desc: "Made from durable materials that stay vibrant and fresh-looking over time.",
    icon: ShieldCheck,
  },
  {
    title: "All-Weather Friendly",
    desc: "Suitable for indoor and outdoor spaces, resistant to fading and damage.",
    icon: CloudSun,
  },
  {
    title: "Versatile Design",
    desc: "Ideal for homes, offices, commercial spaces, events, and decorative projects.",
    icon: Grid2x2,
  },
] as const;

const faqs = [
  {
    q: "Are your plants completely artificial?",
    a: "Yes, all our products are made from high-quality artificial materials designed to mimic the look and feel of real plants — no watering, pruning, or sunlight required.",
  },
  {
    q: "Do you offer installation services?",
    a: "Absolutely. Our team handles full installation of grass, plants, planter boxes, and wall gardens for both residential and commercial spaces.",
  },
  {
    q: "How long do your products last?",
    a: "With proper care, our artificial plants can last many years. They're UV-resistant and built to retain their color and shape through different weather conditions.",
  },
  {
    q: "Can I use your plants outdoors?",
    a: "Yes. Our range is suitable for both indoor and outdoor environments, including patios, balconies, offices, and event spaces.",
  },
];

export default function Home() {
  const displayedPlants = featuredPlants.slice(0, 4);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openSvc, setOpenSvc] = useState<number>(1);

  return (
    <main className="landing">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap");

        .landing, .landing * { box-sizing: border-box; }

        .landing {
          font-family: "Inter", sans-serif;
          background: #f2f6ef;
          min-height: 100vh;
          padding: 0;
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          background-image:
            linear-gradient(
              175deg,
              rgba(8, 26, 16, 0.18) 0%,
              rgba(8, 26, 16, 0.32) 25%,
              rgba(8, 26, 16, 0.62) 55%,
              rgba(8, 26, 16, 0.88) 100%
            ),
            url("/p62.png");
          background-size: cover;
          background-position: center;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 720px;
          padding: 0 72px 96px;
          color: #fff;
        }

        .hero-spacer { height: 42px; }

        .hero-title {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(2.4rem, 3vw + 1rem, 4.2rem);
          line-height: 1.08;
          letter-spacing: -.02em;
          color: #fff;
        }

        .hero-divider {
          width: 48px;
          height: 1px;
          background: rgba(180, 220, 190, 0.3);
          margin: 36px 0;
        }

        .hero-copy {
          margin: 0 0 0;
          max-width: 480px;
          font-size: 14px;
          line-height: 1.9;
          color: rgba(210, 230, 216, 0.58);
          font-weight: 300;
          letter-spacing: .015em;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 44px;
        }

        .button {
          border: none;
          border-radius: 999px;
          padding: 12px 24px;
          font-size: 12.5px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
          text-decoration: none;
          letter-spacing: .06em;
          text-transform: uppercase;
        }
        .button:hover { transform: translateY(-1px); }
        .button-primary {
          background: #2f6f44;
          color: #fff;
          box-shadow: 0 12px 28px rgba(20, 50, 30, 0.35);
        }
        .button-primary:hover { background: #367d4e; }
        .button-secondary {
          color: rgba(230, 245, 232, 0.85);
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(4px);
        }
        .button-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.35);
        }
        .button-primary-dark { background: #2f6f44; color: #fff; box-shadow: 0 8px 20px rgba(0,0,0,.25); }

        /* ── WHY SHOP ── */
        .why-shop {
          background: #fff;
          padding: 96px 64px;
        }

        .why-shop-header {
          text-align: center;
          margin-bottom: 72px;
        }

        .why-shop-eyebrow {
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #7a8f80;
          margin: 0 0 14px;
          font-family: "Inter", sans-serif;
        }

        .why-shop-title {
          margin: 0 0 16px;
          font-family: "Playfair Display", serif;
          font-size: clamp(1.8rem, 1vw + 1.2rem, 2.6rem);
          color: #163521;
          font-weight: 700;
          line-height: 1.1;
        }

        .why-shop-title em {
          font-style: italic;
          font-weight: 500;
          color: #3f7a55;
        }

        .why-shop-subtitle {
          max-width: 460px;
          margin: 0 auto;
          color: #7a8f80;
          font-size: 14px;
          line-height: 1.7;
        }

        .why-shop-grid {
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(300px,370px) minmax(0,1fr);
          gap: 48px;
          align-items: center;
        }

        .why-shop-column { display: grid; gap: 0; }

        .reason {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 28px 24px;
          border-radius: 16px;
          position: relative;
        }

        .reason-icon-wrap {
          display: flex;
          align-items: flex-start;
          flex-shrink: 0;
        }

        .reason-icon { width: 32px; height: 25px; color: #2f6f44; }

        .reason-content { flex: 1; }

        .reason h3 {
          margin: 0 0 6px;
          font-family: "Playfair Display", serif;
          color: #173523;
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.25;
        }

        .reason p {
          margin: 0;
          color: #6b7d72;
          font-size: 13px;
          line-height: 1.65;
        }

        .why-shop-plant-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .why-shop-plant-frame { position: relative; width: 100%; }

        .why-shop-plant {
          width: 100%;
          max-width: 340px;
          margin: 0 auto;
          display: block;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 24px 32px rgba(30,57,40,.18));
        }

        /* ── SERVICES ACCORDION ── */
        .svc-accordion-section {
          background: #fafbf8;
          padding: 96px 64px;
        }

        .svc-accordion-layout {
          display: grid;
          grid-template-columns: 220px 1fr 1.15fr;
          gap: 40px;
          align-items: start;
        }

        .svc-accordion-left { display: flex; flex-direction: column; }

        .svc-accordion-eyebrow {
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #7a8f80;
          margin: 0 0 10px;
        }

        .svc-accordion-heading {
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 2vw + 0.8rem, 2.8rem);
          color: #163521;
          line-height: 1.08;
          margin: 0 0 16px;
        }

        .svc-accordion-heading em {
          font-style: italic;
          font-weight: 500;
          color: #3f7a55;
        }

        .svc-accordion-desc {
          font-size: 13px;
          line-height: 1.8;
          color: #7a8f80;
          margin: 0 0 32px;
        }

        .svc-view-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #2f6f44;
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 11px 22px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: .06em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background .2s ease;
          align-self: flex-start;
        }

        .svc-view-all:hover { background: #367d4e; }

        .svc-accordion-label {
          font-size: 10px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: #b0bfb5;
          margin-top: 40px;
          padding-top: 16px;
          border-top: 1px solid #e4ebe0;
        }

        .svc-accordion-img-wrap {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }

        .svc-accordion-img {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          display: block;
          transition: opacity .35s ease;
        }

        .svc-accordion-list {
          display: flex;
          flex-direction: column;
        }

        .svc-acc-item {
          border-bottom: 1px solid #e4ebe0;
        }

        .svc-acc-item:first-child {
          border-top: 1px solid #e4ebe0;
        }

        .svc-acc-trigger {
          width: 100%;
          background: none;
          border: none;
          padding: 16px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          cursor: pointer;
          border-radius: 0;
          transition: background .15s;
          text-align: left;
        }

        .svc-acc-trigger.active {
          background: #1d3d28;
          border-radius: 10px;
          margin: 3px 0;
        }

        .svc-acc-item:has(.active) {
          border-color: transparent;
        }

        .svc-acc-name {
          font-family: "Playfair Display", serif;
          font-size: .95rem;
          font-weight: 700;
          color: #1d3d28;
          margin: 0;
          transition: color .15s;
          line-height: 1.3;
        }

        .svc-acc-trigger.active .svc-acc-name {
          color: #fff;
        }

        .svc-acc-arrow {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #e8ede5;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background .15s;
        }

        .svc-acc-trigger.active .svc-acc-arrow {
          background: #3f7a55;
        }

        .svc-acc-arrow svg {
          width: 10px;
          height: 10px;
          color: #2f6f44;
          transition: color .15s;
        }

        .svc-acc-trigger.active .svc-acc-arrow svg {
          color: #fff;
        }

        .svc-acc-body {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height .3s ease, opacity .25s ease;
          padding: 0 18px;
        }

        .svc-acc-body.open {
          max-height: 120px;
          opacity: 1;
          padding-bottom: 16px;
        }

        .svc-acc-desc {
          font-size: 12.5px;
          color: #6b7d72;
          line-height: 1.72;
          margin: 0;
        }

        /* ── PRODUCTS ── */
        .products-section {
          background: #fafaf8;
          padding: 96px 64px 80px;
        }

        .ps-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
        }

        .ps-eyebrow {
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #7a8f80;
          margin: 0 0 10px;
        }

        .ps-title {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 1.4vw + 1rem, 2.6rem);
          color: #163521;
          line-height: 1.1;
        }

        .ps-title em { font-style: italic; font-weight: 500; }

        .ps-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 1px;
          background: #e2e8df;
          border: 1px solid #e2e8df;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 48px;
        }

        .ps-card {
          background: #fff;
          display: flex;
          flex-direction: column;
          transition: background .18s;
        }

        .ps-card:hover { background: #f8fbf7; }

        .ps-card-img {
          width: 100%;
          aspect-ratio: 3/2.6;
          object-fit: cover;
          display: block;
        }

        .ps-card-body { padding: 18px 20px 20px; flex: 1; display: flex; flex-direction: column; }

        .ps-card-name {
          margin: 0 0 4px;
          font-family: "Playfair Display", serif;
          font-size: 1rem;
          font-weight: 700;
          color: #163521;
          line-height: 1.25;
        }

        .ps-card-sub {
          font-size: 11px;
          color: #9aaa9f;
          margin: 0;
          letter-spacing: .03em;
        }

        .ps-explore {
          font-size: 12px;
          font-weight: 500;
          color: #4a6b54;
          letter-spacing: .06em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: color .15s;
          align-self: flex-end;
        }

        .ps-explore:hover { color: #163521; }
        .ps-explore-line { width: 32px; height: 1px; background: currentColor; display: inline-block; }

        /* ── SERVICES (original cards) ── */
        .services-section {
          background: linear-gradient(180deg, #ffffff 0%, #ffffff 65%, #c8d9cf 100%);
          padding: 96px 64px;
        }

        .svc-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 56px;
        }

        .svc-eyebrow {
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #7a8f80;
          margin: 0 0 10px;
        }

        .svc-title {
          margin: 0;
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 1.4vw + 1rem, 2.6rem);
          color: #163521;
          line-height: 1.1;
        }

        .svc-title em { font-style: italic; font-weight: 500; color: #3f7a55; }

        .svc-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 20px;
        }

        .svc-card {
          border: 1px solid rgba(26,46,26,0.08);
          border-radius: 16px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 160px;
          min-height: 240px;
          transition: border-color .2s;
        }

        .svc-card:hover { border-color: rgba(26,46,26,0.15); }

        .svc-card-body { padding: 36px 32px; display: flex; flex-direction: column; }

        .svc-card-title {
          margin: 0 0 12px;
          font-family: "Playfair Display", serif;
          color: #163521;
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .svc-card-desc {
          margin: 0;
          color: #7a8f80;
          font-size: 13px;
          line-height: 1.7;
        }

        .svc-card-img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ── FAQs ── */
        .faq-section {
          background: #fafbf8;
          padding: 80px 64px;
        }

        .faq-inner {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-eyebrow {
          font-size: 11px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #7a8f80;
          margin: 0 0 10px;
        }

        .faq-heading {
          font-family: "Playfair Display", serif;
          font-size: clamp(1.6rem, 1.2vw + 1rem, 2.2rem);
          font-weight: 700;
          color: #163521;
          line-height: 1.1;
          margin: 0 0 40px;
        }

        .faq-heading em {
          font-style: italic;
          font-weight: 500;
          color: #3f7a55;
        }

        .faq-item { border-bottom: 1px solid #dce8d5; }
        .faq-item:first-of-type { border-top: 1px solid #dce8d5; }

        .faq-trigger {
          width: 100%;
          background: none;
          border: none;
          padding: 20px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          text-align: left;
        }

        .faq-trigger:hover .faq-q { color: #2f6f44; }

        .faq-q {
          font-family: "Playfair Display", serif;
          font-size: 1rem;
          font-weight: 700;
          color: #1d3d28;
          margin: 0;
          line-height: 1.4;
          transition: color .15s;
        }

        .faq-chevron {
          width: 16px;
          height: 16px;
          color: #7a8f80;
          flex-shrink: 0;
          transition: transform .25s ease;
        }

        .faq-chevron.open { transform: rotate(180deg); }

        .faq-body {
          overflow: hidden;
          transition: max-height .3s ease, opacity .25s ease;
          max-height: 0;
          opacity: 0;
        }

        .faq-body.open { max-height: 200px; opacity: 1; }

        .faq-a {
          font-size: 13.5px;
          color: #6b7d72;
          line-height: 1.72;
          margin: 0;
          padding-bottom: 20px;
        }

        /* ── CTA STRIP ── */
        .cta-strip {
          background: #c8d9cf;
          border-top: none;
          padding: 88px 64px 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-strip::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect x='50' y='50' width='300' height='300' fill='none' stroke='%23b08a4e' stroke-width='1'/%3E%3Crect x='100' y='100' width='200' height='200' fill='none' stroke='%23b08a4e' stroke-width='0.8'/%3E%3Cline x1='50' y1='200' x2='350' y2='200' stroke='%23b08a4e' stroke-width='0.6'/%3E%3Cline x1='200' y1='50' x2='200' y2='350' stroke='%23b08a4e' stroke-width='0.6'/%3E%3Ccircle cx='200' cy='200' r='100' fill='none' stroke='%23b08a4e' stroke-width='0.7'/%3E%3C/svg%3E");
          background-size: 360px 360px;
          background-position: left -60px center, right -60px center;
          background-repeat: no-repeat;
          opacity: 0.04;
          pointer-events: none;
        }

        .cta-strip-left { position: relative; z-index: 1; }

        .cta-strip-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          pointer-events: none;
          z-index: 2;
          line-height: 0;
        }

        .cta-strip-wave svg {
          display: block;
          width: 100%;
          height: 64px;
        }

        .cta-strip-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #2d5040;
          margin: 0 0 12px;
          font-weight: 500;
        }

        .cta-strip-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.9rem, 1.5vw + 1.1rem, 2.8rem);
          font-weight: 600;
          color: #1a3d2b;
          line-height: 1.1;
          margin: 0;
        }

        .cta-strip-heading em {
          font-style: italic;
          font-weight: 400;
          color: #2d5040;
        }

        .cta-strip-sub {
          font-family: 'DM Sans', sans-serif;
          margin: 18px auto 0;
          font-size: 0.87rem;
          color: #3d5c4a;
          line-height: 1.8;
          max-width: 440px;
          font-weight: 300;
        }

        .cta-strip-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          margin-top: 32px;
        }

        .cta-strip-btn-outline {
          font-family: 'DM Sans', sans-serif;
          border: 1.5px solid #2d5040;
          color: #2d5040;
          background: transparent;
          border-radius: 999px;
          padding: 11px 26px;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.25s, border-color 0.25s;
        }

        .cta-strip-btn-outline:hover {
          background: rgba(45,80,64,0.1);
          border-color: #2d5040;
        }

        .cta-strip-btn-primary {
          font-family: 'DM Sans', sans-serif;
          background: #2d5040;
          color: #ffffff;
          border: none;
          border-radius: 999px;
          padding: 11px 26px;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.25s, transform 0.2s;
        }

        .cta-strip-btn-primary:hover {
          background: #3d6b54;
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .cta-strip { padding: 60px 40px; }
        }

        @media (max-width: 640px) {
          .cta-strip { padding: 48px 20px; flex-direction: column; align-items: center; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .hero-content { padding: 0 40px 72px; }
          .why-shop { padding: 72px 40px; }
          .why-shop-grid { grid-template-columns: 1fr; gap: 40px; }
          .why-shop-plant-col { order: -1; }
          .why-shop-plant { max-width: 260px; }
          .svc-accordion-section { padding: 72px 40px; }
          .svc-accordion-layout { grid-template-columns: 1fr; gap: 32px; }
          .svc-accordion-img { aspect-ratio: 16/9; }
          .svc-accordion-desc { max-width: 100%; }
          .products-section, .services-section { padding: 72px 40px; }
          .ps-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .ps-header { flex-direction: column; align-items: flex-start; gap: 20px; }
          .svc-header { flex-direction: column; align-items: flex-start; gap: 20px; }
          .faq-section { padding: 72px 40px; }
        }

        @media (max-width: 640px) {
          .hero { min-height: 100vh; min-height: 100svh; background-position: 62% center; }
          .hero-content { padding: 0 24px 56px; max-width: 100%; }
          .hero-title { font-size: clamp(2rem, 6vw + 0.5rem, 3rem); }
          .why-shop { padding: 56px 20px; }
          .why-shop-header { margin-bottom: 48px; }
          .svc-accordion-section { padding: 56px 20px; }
          .products-section, .services-section { padding: 56px 20px; }
          .ps-grid { grid-template-columns: 1fr; }
          .svc-grid { grid-template-columns: 1fr; }
          .svc-card { grid-template-columns: 1fr; }
          .svc-card-img { height: 180px; }
          .reason { padding: 20px 16px; }
          .faq-section { padding: 56px 20px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-spacer" aria-hidden="true" />
          <h1 className="hero-title">
            Elevate every space <br /> with enduring, nature‑inspired <br/>greenery look
          </h1>
          <div className="hero-divider" />
          <p className="hero-copy">
            Thoughtfully crafted for homes, offices, and commercial spaces — our premium artificial greenery delivers the quiet beauty of nature without the upkeep, season after season.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/products-services">View Products & Services</Link>
            <Link className="button button-secondary" href="/portfolio">Our Portfolio</Link>
          </div>
        </div>
      </section>

      {/* ── WHY SHOP ── */}
      <section className="why-shop" aria-labelledby="why-shop-title">
        <div className="why-shop-header">
          <p className="why-shop-eyebrow">Bring nature to your space</p>
          <h2 className="why-shop-title" id="why-shop-title">Why Choose <em>Rich Haven?</em></h2>
          <p className="why-shop-subtitle">
            From start to finish, Rich Haven transforms your space with greenery.
          </p>
        </div>

        <div className="why-shop-grid">
          <div className="why-shop-column">
            {shopReasons.slice(0, 2).map((reason) => (
              <article className="reason" key={reason.title}>
                <div className="reason-icon-wrap" aria-hidden="true">
                  <reason.icon className="reason-icon" aria-hidden="true" strokeWidth={1.8} />
                </div>
                <div className="reason-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="why-shop-plant-col">
            <div className="why-shop-plant-frame">
              <img className="why-shop-plant" src="/p3.png" alt="Potted indoor plant" />
            </div>
          </div>

          <div className="why-shop-column">
            {shopReasons.slice(2).map((reason) => (
              <article className="reason" key={reason.title}>
                <div className="reason-icon-wrap" aria-hidden="true">
                  <reason.icon className="reason-icon" aria-hidden="true" strokeWidth={1.8} />
                </div>
                <div className="reason-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>



      {/* ── PRODUCTS ── */}
      <section className="products-section" aria-labelledby="products-heading">
        <div className="ps-header">
          <div>
            <p className="ps-eyebrow">What we offer</p>
            <h2 className="ps-title" id="products-heading">Our <em>Products</em></h2>
          </div>
          <Link className="ps-explore" href="/products-services">
            <span className="ps-explore-line" />
            View all products
            <span className="ps-explore-line" />
          </Link>
        </div>

        <div className="ps-grid">
          {displayedPlants.map((plant) => (
            <article className="ps-card" key={plant.name}>
              <Link href={plant.link}>
                <img className="ps-card-img" src={plant.img} alt={plant.name} />
                <div className="ps-card-body">
                  <h3 className="ps-card-name">{plant.name}</h3>
                  <p className="ps-card-sub">{plant.sublabel}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── SERVICES (original supply/installation cards) ── */}
      <section className="services-section" aria-labelledby="services-title">
        <div className="svc-header">
          <div>
            <p className="svc-eyebrow">What we offer</p>
            <h2 className="svc-title" id="services-title">Our <em>Services</em></h2>
          </div>
        </div>

        <div className="svc-grid">
          {categories.map((cat) => (
            <article className="svc-card" key={cat.title}>
              <div className="svc-card-body">
                <h3 className="svc-card-title">{cat.title}</h3>
                <p className="svc-card-desc">{cat.desc}</p>
              </div>
              <img className="svc-card-img" src={cat.plantImg} alt={cat.title} />
            </article>
          ))}
        </div>
      </section>

      {/* ── FAQs ── */}
      {/* <section className="faq-section" aria-labelledby="faq-title">
        <div className="faq-inner">
          <p className="faq-eyebrow">Got questions?</p>
          <h2 className="faq-heading" id="faq-title">Frequently <em>Asked Questions</em></h2>

          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <button
                className="faq-trigger"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <p className="faq-q">{faq.q}</p>
                <ChevronDown
                  className={`faq-chevron${openFaq === i ? " open" : ""}`}
                  strokeWidth={2}
                />
              </button>
              <div className={`faq-body${openFaq === i ? " open" : ""}`}>
                <p className="faq-a">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── CTA STRIP ── */}
      <section className="cta-strip" aria-label="Call to action">
        <div className="cta-strip-left">
          <p className="cta-strip-eyebrow">Let&apos;s work together</p>
          <h2 className="cta-strip-heading">
            Ready to transform your <em>space?</em>
          </h2>
          <p className="cta-strip-sub">
            Explore our full range of premium artificial greenery or get in touch. We&apos;re happy to help you find the perfect fit for your space.
          </p>
        </div>
        {/* wave transition into footer */}
        <div className="cta-strip-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>
    </main>
  );
}