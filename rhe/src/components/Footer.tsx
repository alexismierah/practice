"use client";

import { useState } from "react";

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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-root {
          --forest: #1e3a2f;
          --forest-mid: #2d5040;
          --forest-light: #3d6b54;
          --forest-pale: #dce8e2;
          --charcoal: #ffffff;
          --charcoal-mid: #f4f5f4;
          --charcoal-soft: #dde3e0;
          --brass: #2d5040;
          --brass-light: #3d6b54;
          --off-white: #1a1f1c;
          --warm-white: #ffffff;
          --stone: #5a6a64;
          --stone-dark: #8a9a94;
          --text-main: #1a1f1c;
          --text-soft: #4a5450;
          --text-muted: #8a9a94;

          font-family: 'DM Sans', sans-serif;
          background-color: #ffffff;
          color: var(--text-main);
          position: relative;
          overflow: hidden;
        }

        /* Subtle geometric background pattern — replaces botanical */
        .footer-bg-botanical {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect x='50' y='50' width='300' height='300' fill='none' stroke='%23b08a4e' stroke-width='1'/%3E%3Crect x='100' y='100' width='200' height='200' fill='none' stroke='%23b08a4e' stroke-width='0.8'/%3E%3Cline x1='50' y1='200' x2='350' y2='200' stroke='%23b08a4e' stroke-width='0.6'/%3E%3Cline x1='200' y1='50' x2='200' y2='350' stroke='%23b08a4e' stroke-width='0.6'/%3E%3Ccircle cx='200' cy='200' r='100' fill='none' stroke='%23b08a4e' stroke-width='0.7'/%3E%3C/svg%3E");
          background-size: 360px 360px;
          background-position: right -40px bottom -40px;
          background-repeat: no-repeat;
        }

        /* ─── 3-column layout ─── */
        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 72px 40px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr 1.4fr;
          gap: 60px;
          align-items: start;
        }

        @media (max-width: 960px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            padding: 56px 24px 40px;
          }
          .footer-form-wrap {
            grid-column: 1 / -1;
            padding: 0 !important;
          }
        }

        @media (max-width: 600px) {
          .footer-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-form-wrap {
            grid-column: unset;
          }
        }

        /* ─── Left column: Brand ─── */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .footer-logo-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--brass-light);
          letter-spacing: 0.03em;
        }

        .footer-logo-tagline {
          font-size: 0.68rem;
          font-weight: 400;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--stone);
          margin-top: 6px;
        }

        .footer-desc {
          font-size: 0.87rem;
          line-height: 1.8;
          color: var(--stone);
          font-weight: 300;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
          margin-top: 4px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border: 1px solid var(--charcoal-soft);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--stone);
          text-decoration: none;
          transition: all 0.25s;
          background: transparent;
          cursor: pointer;
        }

        .footer-social-btn:hover {
          border-color: var(--brass);
          color: var(--brass-light);
          background: rgba(176, 138, 78, 0.08);
          transform: translateY(-2px);
        }

        .footer-social-btn svg {
          width: 15px;
          height: 15px;
          fill: currentColor;
        }

        /* ─── Center column: Contact + Services ─── */
        .footer-middle {
          display: flex;
          flex-direction: column;
          gap: 35px;
          margin-top: 13px;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .footer-nav-label {
          font-size: 0.66rem;
          font-weight: 500;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--brass);
          margin-bottom: 8px;

        }

        .footer-nav a,
        .footer-nav span.footer-nav-item {
          font-size: 0.86rem;
          color: var(--stone);
          text-decoration: none;
          font-weight: 300;
          display: inline-flex;
          align-items: center;
          transition: color 0.2s;
        }

        .footer-nav a:hover {
          color: var(--off-white);
        }

        /* ─── Right column: Form ─── */
        .footer-form-wrap {
          padding: 0;
          position: relative;
          margin-top: -0px;
        }

        .footer-form-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 400;
          color: var(--off-white);
          margin-bottom: 4px;
        }

        .footer-form-heading em {
          font-style: italic;
          color: var(--brass-light);
        }

        .footer-form-sub {
          font-size: 0.82rem;
          color: var(--stone);
          font-weight: 300;
          letter-spacing: 0.04em;
          margin-bottom: 24px;
        }

        .footer-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        @media (max-width: 560px) {
          .footer-form-row {
            grid-template-columns: 1fr;
          }
        }

        .footer-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .footer-field label {
          font-size: 0.66rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--stone-dark);
        }

        .footer-field input,
        .footer-field textarea {
          background: var(--charcoal-mid) !important;
          border: 1px solid var(--charcoal-soft);
          border-radius: 999px;
          padding: 11px 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.87rem;
          font-weight: 300;
          color: var(--off-white);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          resize: none;
        }

        .footer-field textarea {
          border-radius: 24px;
          min-height: 90px;
          padding: 14px 18px;
        }

        .footer-field input::placeholder,
        .footer-field textarea::placeholder {
          color: var(--stone-dark);
        }

        .footer-field input:focus,
        .footer-field textarea:focus {
          border-color: var(--brass);
          box-shadow: 0 0 0 3px rgba(176, 138, 78, 0.1);
        }

        /* ─── Submit button ─── */
        .footer-submit {
          align-self: flex-start;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-width: 148px;
          background: var(--brass);
          color: #ffffff;
          border: none;
          padding: 11px 26px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.25s, transform 0.2s;
          border-radius: 999px;
          overflow: hidden;
        }

        .footer-submit:hover {
          background: var(--brass-light);
          transform: translateY(-1px);
        }

        .footer-submit:active {
          transform: translateY(0);
        }

        .footer-submit.sent {
          background: var(--forest-light);
          color: var(--off-white);
        }

        .footer-submit .check-icon {
          display: none;
          width: 14px;
          height: 14px;
          stroke: #ffffff;
          stroke-width: 2.5;
          fill: none;
          flex-shrink: 0;
        }

        .footer-submit.sent .check-icon {
          display: block;
        }

        /* ─── Bottom bar ─── */
        .footer-bottom {
          position: relative;
          z-index: 1;
          border-top: 1px solid var(--charcoal-soft);
          max-width: 1180px;
          margin: 0 auto;
          padding: 20px 40px;
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
            padding: 20px 24px;
          }
        }

        .footer-copy {
          font-size: 0.75rem;
          color: var(--stone-dark);
          font-weight: 300;
          letter-spacing: 0.04em;
        }

        .footer-copy a {
          color: var(--brass);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-copy a:hover {
          color: var(--brass-light);
        }

        .footer-bottom-links {
          display: flex;
          gap: 22px;
        }

        .footer-bottom-links a {
          font-size: 0.74rem;
          color: var(--stone-dark);
          text-decoration: none;
          font-weight: 300;
          letter-spacing: 0.06em;
          transition: color 0.2s;
        }

        .footer-bottom-links a:hover {
          color: var(--brass-light);
        }
      `}</style>

      <footer className="footer-root" id="footer">
        <div className="footer-bg-botanical" aria-hidden="true" />

        <div className="footer-inner">

          {/* ── Col 1: Brand ── */}
          <div className="footer-brand">
            <div className="footer-logo-text">
              <span className="footer-logo-name">Rich Haven</span>
              <span className="footer-logo-tagline">Artificial Garden</span>
            </div>

            <p className="footer-desc">
              Bringing enduring botanical beauty into every space, a thoughtfully curated collection of lifelike artificial greenery crafted for those who appreciate the timeless elegance of nature.
            </p>

            <div className="footer-socials">
              <a href="https://www.instagram.com/richhavenartificial/" className="footer-social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/richhavengarden" className="footer-social-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* ── Col 2: Contact + Services ── */}
          <div className="footer-middle">
            <nav className="footer-nav">
              <span className="footer-nav-label">Contact Us</span>
              <span className="footer-nav-item">hello@richhaven.net</span>
              <span className="footer-nav-item">0916 236 6737</span>

            </nav>

            <nav className="footer-nav">
              <span className="footer-nav-label">Our Products</span>
              <a href="/products-services/grass">Artificial Grass</a>
              <a href="/products-services/potted-plants">Potted Plants & Trees</a>
              <a href="/products-services/planter-box">Planter Boxes</a>
              <a href="/products-services/wall-greens">Wall Greens</a>
            </nav>
          </div>

          {/* ── Col 3: Contact Form ── */}
          <div className="footer-form-wrap">
            <h3 className="footer-form-heading">Get in <em>Touch</em></h3>
            <p className="footer-form-sub">Have a question or planning your next space? Get in touch with us.</p>

            <form className="footer-form" onSubmit={handleSubmit}>
              <div className="footer-form-row">
                <div className="footer-field">
                  <label htmlFor="footer-name">Full Name</label>
                  <input
                    id="footer-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="footer-field">
                  <label htmlFor="footer-email">Email Address</label>
                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    placeholder="hello@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="footer-field">
                <label htmlFor="footer-phone">Phone Number</label>
                <input
                  id="footer-phone"
                  name="phone"
                  type="tel"
                  placeholder="09** *** ****"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="footer-field">
                <label htmlFor="footer-msg">Your Message</label>
                <textarea
                  id="footer-msg"
                  name="message"
                  placeholder="Tell us what you're looking for…"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              {error && (
                <p style={{ fontSize: "0.8rem", color: "#c0392b", margin: 0 }}>{error}</p>
              )}
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
          <div className="footer-bottom-links">
            <span className="footer-copy">Make Your Space Green</span>
          </div>
        </div>
      </footer>
    </>
  );
}