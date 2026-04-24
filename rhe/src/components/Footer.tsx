"use client";

import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [btnSent, setBtnSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError((json as { error?: string }).error ?? "Failed to send. Please try again.");
        return;
      }
      setFormData({ name: "", email: "", phone: "", message: "" });
      setBtnSent(true);
      setTimeout(() => setBtnSent(false), 3000);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        .footer-root {
          --sage: #8fa882;
          --forest: #2d4a27;
          --deep: #1a2e16;
          --cream: #f7f5f0;
          --warm-white: #fafaf7;
          --text: #1c1e19;
          --text-muted: #6b7060;
          --text-faint: #a8ad9e;
          --font: 'DM Sans', sans-serif;

          font-family: var(--font);
          background: var(--cream);
          color: var(--text);
          position: relative;
          overflow: hidden;
        }

        .footer-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }

        .footer-watermark {
          position: absolute;
          bottom: -4vw;
          left: -2vw;
          font-family: var(--font);
          font-size: 22vw;
          font-weight: 300;
          color: rgba(45,74,39,0.04);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
          z-index: 0;
          letter-spacing: -0.02em;
        }

        /* ── Main layout ── */
        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 60px 56px;
          display: grid;
          grid-template-columns: 1fr 240px 1.9fr;
          align-items: start;
        }

        @media (max-width: 1000px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            padding: 60px 36px 44px;
          }
          .footer-form-col {
            grid-column: 1 / -1;
            padding: 48px 0 0 !important;
            margin-top: 48px;
          }
        }

        @media (max-width: 640px) {
          .footer-inner {
            grid-template-columns: 1fr;
            padding: 48px 28px 36px;
          }
          .footer-mid-col {
            padding: 40px 0 0 !important;
            margin-top: 40px;
          }
          .footer-form-col {
            padding: 40px 0 0 !important;
            margin-top: 0;
          }
        }

        /* ── Col 1: Brand ── */
        .footer-brand-col {
          padding-right: 52px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .footer-logo-wrap {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          margin-left: -4px;
        }

        .footer-logo-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.7rem;
          font-weight: 500;
          color: var(--forest);
          letter-spacing: 0.01em;
        }

        .footer-logo-tagline {
          font-size: 0.58rem;
          font-weight: 400;
          letter-spacing: 0.30em;
          text-transform: uppercase;
          color: var(--text-faint);
          margin-top: 3px;
        }

        .footer-desc {
          font-family: var(--font);
          font-size: 0.85rem;
          font-weight: 300;
          line-height: 1.85;
          color: var(--text-muted);
          max-width: 260px;
        }

        .footer-socials {
          display: flex;
          gap: 10px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.3s;
          background: rgba(45,74,39,0.06);
          cursor: pointer;
        }

        .footer-social-btn:hover {
          color: var(--forest);
          background: rgba(45,74,39,0.12);
          transform: translateY(-2px);
        }

        .footer-social-btn svg {
          width: 14px;
          height: 14px;
          fill: currentColor;
        }

        .footer-est-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(45,74,39,0.06);
          align-self: flex-start;
        }

        .footer-est-chip span {
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--text-faint);
          font-weight: 400;
        }

        .footer-est-chip-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--text-faint);
        }

        /* ── Col 2: Nav/Contact ── */
        .footer-mid-col {
          padding-left: 48px;
          display: flex;
          flex-direction: column;
          gap: 44px;
        }

        .footer-nav-block {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Section label — same height as form heading so they align */
        .footer-nav-label {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--sage);
          /* match the form's eyebrow + heading gap so first item aligns */
          margin-bottom: 14px;
        }

        .footer-nav-item {
          font-size: 0.80rem;
          color: var(--text-muted);
          font-weight: 300;
          display: block;
          letter-spacing: 0.01em;
          padding: 4px 0;
          text-decoration: none;
        }

        .footer-nav-link {
          font-size: 0.80rem;
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 300;
          display: block;
          letter-spacing: 0.01em;
          padding: 4px 0;
          transition: color 0.25s;
        }

        .footer-nav-link:hover {
          color: var(--forest);
        }

        /* ── Col 3: Form ── */
        .footer-form-col {
          padding-left: 60px;
          position: relative;
        }

        /* "Get in Touch" heading — vertically aligned with the first nav label */
        .footer-form-heading {
          font-family: var(--font);
          font-size: clamp(1.5rem, 2.2vw, 2rem);
          font-weight: 300;
          color: var(--text);
          /* same bottom margin as .footer-nav-label so items below align */
          margin-bottom: 20px;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .footer-form-heading em {
          font-style: italic;
          color: var(--forest);
        }

        .footer-form-sub {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 300;
          letter-spacing: 0.02em;
          margin-bottom: 28px;
          line-height: 1.75;
          max-width: 340px;
        }

        .footer-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        @media (max-width: 560px) {
          .footer-form-row { grid-template-columns: 1fr; }
        }

        .footer-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .footer-field label {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--text-faint);
          transition: color 0.25s;
        }

        .footer-field.is-focused label {
          color: var(--forest);
        }

        .footer-field input,
        .footer-field textarea {
          background: var(--warm-white) !important;
          border: none;
          border-radius: 999px;
          padding: 11px 18px;
          font-family: var(--font);
          font-size: 0.86rem;
          font-weight: 300;
          color: var(--text);
          outline: none;
          transition: background 0.25s, box-shadow 0.25s;
          resize: none;
          -webkit-appearance: none;
          box-shadow: 0 2px 8px rgba(45,74,39,0.06);
        }

        .footer-field textarea {
          border-radius: 18px;
          min-height: 90px;
          padding: 14px 18px;
        }

        .footer-field input::placeholder,
        .footer-field textarea::placeholder {
          color: var(--text-faint);
        }

        .footer-field input:focus,
        .footer-field textarea:focus {
          background: #ffffff !important;
          box-shadow: 0 4px 16px rgba(45,74,39,0.1);
        }

        /* ── Submit button ── */
        .footer-submit {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 148px;
          background: var(--forest);
          color: #fff;
          border: none;
          padding: 12px 28px;
          font-family: var(--font);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.3s, transform 0.25s, box-shadow 0.3s;
          border-radius: 9999px;
          margin-top: 4px;
        }

        .footer-submit:hover:not(:disabled) {
          background: var(--forest);
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.15);
        }

        .footer-submit:active { transform: translateY(0); }

        .footer-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
          transform: none;
        }

        .footer-submit.sent {
          background: var(--sage);
        }

        .footer-submit .check-icon {
          display: none;
          width: 14px;
          height: 14px;
          stroke: #ffffff;
          stroke-width: 2.5;
          fill: none;
          flex-shrink: 0;
          margin-right: 4px;
        }

        .footer-submit.sent .check-icon {
          display: block;
        }

        .footer-error {
          font-size: 0.78rem;
          color: #c0392b;
          margin: 0;
          padding: 8px 16px;
          background: rgba(192,57,43,0.06);
          border-radius: 8px;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 22px 60px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 640px) {
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            padding: 16px 28px 32px;
            gap: 10px;
          }
        }

        .footer-copy {
          font-size: 10px;
          color: var(--text-faint);
          font-weight: 300;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .footer-copy a {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-copy a:hover { color: var(--forest); }

        .footer-bottom-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-faint);
        }

        .footer-bottom-badge-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--text-faint);
        }

        /* ── Animations ── */
        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .footer-brand-col { animation: fadeUpIn 0.7s ease both; }
        .footer-mid-col   { animation: fadeUpIn 0.7s 0.1s ease both; }
        .footer-form-col  { animation: fadeUpIn 0.7s 0.2s ease both; }
      `}</style>

      <footer className="footer-root" id="footer">
        <div className="footer-grain" aria-hidden="true" />
        {/*<div className="footer-watermark" aria-hidden="true">Haven</div>*/}

        <div className="footer-inner">

          {/* ── Col 1: Brand ── */}
          <div className="footer-brand-col">
            <div className="footer-logo-wrap">
              <Image
                src="/logo.png"
                alt="Rich Haven logo"
                width={62}
                height={62}
                style={{ objectFit: "contain", marginTop: "-36px", width: "auto" }}
              />
              <div className="footer-logo-text">
                <span className="footer-logo-name">Rich Haven</span>
                <span className="footer-logo-tagline">Artificial Garden</span>
              </div>
            </div>

            <p className="footer-desc">
              Bringing enduring botanical beauty into every space — a thoughtfully curated collection of lifelike artificial greenery crafted for those who appreciate the timeless elegance of nature.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/richhavenartificial/"
                className="footer-social-btn"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/richhavengarden"
                className="footer-social-btn"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* ── Col 2: Contact + Products ── */}
          <div className="footer-mid-col">
            <nav className="footer-nav-block">
              <span className="footer-nav-label">Contact Us</span>
              <span className="footer-nav-item">hello@richhaven.net</span>
              <span className="footer-nav-item">0916 236 6737</span>
            </nav>

            <nav className="footer-nav-block">
              <span className="footer-nav-label">Green Solutions</span>
              <a className="footer-nav-link" href="/products-services/grass">Artificial Grass</a>
              <a className="footer-nav-link" href="/products-services/potted-plants">Potted Plants &amp; Trees</a>
              <a className="footer-nav-link" href="/products-services/planter-box">Planter Boxes</a>
              <a className="footer-nav-link" href="/products-services/wall-greens">Wall Greens</a>
            </nav>
          </div>

          {/* ── Col 3: Form ── */}
          <div className="footer-form-col">
            <h3 className="footer-form-heading">Get in <em>Touch</em></h3>
            <p className="footer-form-sub">Have a question or planning your next space? We'd love to hear from you.</p>

            <form className="footer-form" onSubmit={handleSubmit}>
              <div className="footer-form-row">
                <div className={`footer-field${focused === "name" ? " is-focused" : ""}`}>
                  <label htmlFor="footer-name">Full Name</label>
                  <input
                    id="footer-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
                <div className={`footer-field${focused === "email" ? " is-focused" : ""}`}>
                  <label htmlFor="footer-email">Email Address</label>
                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    placeholder="hello@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
              </div>

              <div className={`footer-field${focused === "phone" ? " is-focused" : ""}`}>
                <label htmlFor="footer-phone">Phone Number</label>
                <input
                  id="footer-phone"
                  name="phone"
                  type="tel"
                  placeholder="09** *** ****"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div className={`footer-field${focused === "message" ? " is-focused" : ""}`}>
                <label htmlFor="footer-msg">Your Message</label>
                <textarea
                  id="footer-msg"
                  name="message"
                  placeholder="Tell us what you're looking for…"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  required
                />
              </div>

              {error && <p className="footer-error">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className={`footer-submit${btnSent ? " sent" : ""}`}
              >
                <svg className="check-icon" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {submitting ? "Sending…" : btnSent ? "Sent" : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} <a href="#">Rich Haven Artificial Garden</a>. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}