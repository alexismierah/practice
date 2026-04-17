"use client";

import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

        .footer-root {
          --sage: #8faa8b;
          --sage-light: #b5c9b1;
          --sage-pale: #dde8db;
          --cream: #f7f4ee;
          --ivory: #fdfbf7;
          --stone: #c9c0b0;
          --stone-mid: #a09584;
          --blush: #e8d5c4;
          --terracotta: #c4845a;
          --moss: #5a7a55;
          --text-main: #3a3530;
          --text-soft: #7a706a;
          --text-muted: #aaa098;

          font-family: 'Jost', sans-serif;
          background-color: #ffffff;
          color: var(--text-main);
          position: relative;
          overflow: hidden;
        }

        /* ─── Decorative botanical SVG watermark ─── */
        .footer-bg-botanical {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.055;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='420' viewBox='0 0 420 420'%3E%3Cellipse cx='210' cy='210' rx='160' ry='50' fill='none' stroke='%238faa8b' stroke-width='1.2'/%3E%3Cellipse cx='210' cy='210' rx='50' ry='160' fill='none' stroke='%238faa8b' stroke-width='1.2'/%3E%3Ccircle cx='210' cy='210' r='130' fill='none' stroke='%238faa8b' stroke-width='0.8'/%3E%3Cpath d='M210 80 Q250 160 210 210 Q170 160 210 80Z' fill='%238faa8b' opacity='.3'/%3E%3Cpath d='M210 340 Q250 260 210 210 Q170 260 210 340Z' fill='%238faa8b' opacity='.3'/%3E%3Cpath d='M80 210 Q160 250 210 210 Q160 170 80 210Z' fill='%238faa8b' opacity='.3'/%3E%3Cpath d='M340 210 Q260 250 210 210 Q260 170 340 210Z' fill='%238faa8b' opacity='.3'/%3E%3C/svg%3E");
          background-size: 380px 380px;
          background-position: right -60px bottom -60px;
          background-repeat: no-repeat;
        }

        /* ─── Top divider ─── */
        .footer-divider-top {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--sage-light), var(--blush), var(--sage-light), transparent);
        }

        /* ─── Main layout ─── */
        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 72px 40px 48px;
          display: grid;
          grid-template-columns: 1fr 1.55fr;
          gap: 80px;
          align-items: start;
        }

        @media (max-width: 860px) {
          .footer-inner {
            grid-template-columns: 1fr;
            gap: 56px;
            padding: 56px 24px 40px;
          }
        }

        /* ─── Left column ─── */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 28px;
          padding-left: 40px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .footer-logo-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
        }

        .footer-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .footer-logo-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.65rem;
          font-weight: 600;
          color: var(--moss);
          letter-spacing: 0.01em;
        }

        .footer-logo-tagline {
          font-size: 0.72rem;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--stone-mid);
          margin-top: 4px;
        }

        .footer-desc {
          font-size: 0.9rem;
          line-height: 1.75;
          color: var(--text-soft);
          font-weight: 300;
          max-width: 320px;
        }

        /* ─── Nav links ─── */
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-nav-label {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--sage);
          margin-bottom: 4px;
        }

        .footer-nav a {
          font-size: 0.88rem;
          color: var(--text-soft);
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 300;
          display: inline-flex;
          align-items: center;
        }

        .footer-nav a:hover {
          color: var(--moss);
        }

        /* ─── Social ─── */
        .footer-socials {
          display: flex;
          gap: 14px;
          margin-top: 4px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border: 1.5px solid var(--stone-mid);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          text-decoration: none;
          transition: all 0.25s;
          background: transparent;
          cursor: pointer;
        }

        .footer-social-btn:hover {
          border-color: var(--moss);
          color: var(--moss);
          background: var(--sage-pale);
          transform: translateY(-2px);
        }

        .footer-social-btn svg {
          width: 15px;
          height: 15px;
          fill: currentColor;
        }

        /* ─── Right column — Contact form (floating, no container) ─── */
        .footer-form-wrap {
          padding: 0 60px 0 0;
          position: relative;
        }

        .footer-form-heading {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--text-main);
          margin-bottom: 4px;
        }

        .footer-form-heading em {
          font-style: italic;
          color: var(--moss);
        }

        .footer-form-sub {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 300;
          letter-spacing: 0.04em;
          margin-bottom: 28px;
        }

        .footer-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .footer-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
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
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--stone-mid);
        }

        .footer-field input,
        .footer-field textarea {
          background: #ffffff !important;
          border: 1px solid var(--stone);
          border-radius: 999px;
          padding: 11px 20px;
          font-family: 'Jost', sans-serif;
          font-size: 0.88rem;
          font-weight: 300;
          color: var(--text-main);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          resize: none;
        }

        .footer-field textarea {
          border-radius: 24px;
          min-height: 96px;
          padding: 14px 20px;
        }

        .footer-field input::placeholder,
        .footer-field textarea::placeholder {
          color: var(--text-muted);
          font-style: italic;
        }

        .footer-field input:focus,
        .footer-field textarea:focus {
          border-color: var(--sage);
          box-shadow: 0 0 0 3px rgba(143,170,139,0.12);
        }

        /* ─── Submit button ─── */
        .footer-submit {
          align-self: flex-start;
          position: relative;
          background: var(--moss);
          color: var(--ivory);
          border: none;
          padding: 9px 24px;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: Capitalize;
          cursor: pointer;
          transition: all 0.25s;
          border-radius: 999px;
          overflow: hidden;
        }

        .footer-submit::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.4s;
        }

        .footer-submit:hover {
          transform: translateY(-1px);
        }


        .footer-submit:active {
          transform: translateY(0);
        }

        /* ─── Success message ─── */
        .footer-success {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          background: var(--sage-pale);
          border-left: 3px solid var(--sage);
          font-size: 0.85rem;
          color: var(--moss);
          font-weight: 400;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ─── Bottom bar ─── */
        .footer-bottom {
          position: relative;
          z-index: 1;
          border-top: 1px solid var(--sage-pale);
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
          font-size: 0.76rem;
          color: var(--text-muted);
          font-weight: 300;
          letter-spacing: 0.04em;
        }

        .footer-copy a {
          color: var(--sage);
          text-decoration: none;
        }

        .footer-bottom-links {
          display: flex;
          gap: 22px;
        }

        .footer-bottom-links a {
          font-size: 0.74rem;
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 300;
          letter-spacing: 0.06em;
          transition: color 0.2s;
        }

        .footer-bottom-links a:hover {
          color: var(--moss);
        }
      `}</style>

      <footer className="footer-root" id="footer">
        <div className="footer-bg-botanical" aria-hidden="true" />


        <div className="footer-inner">
          {/* ── Left: Brand + Nav ── */}
          <div className="footer-brand">
            {/* Logo */}
            <div className="footer-logo">
              <div className="footer-logo-text">
                <span className="footer-logo-name">Rich Haven</span>
                <span className="footer-logo-tagline">Artificial Garden</span>
              </div>
            </div>

            <p className="footer-desc">
              Bringing enduring botanical beauty into every space — our curated collection of lifelike artificial greenery is crafted for those who value the timeless elegance of nature.
            </p>

            {/* Nav */}
            <nav className="footer-nav">
              <span className="footer-nav-label">Contact Us</span>
              <a href="mailto:hello@richhaven.com">hello@richhaven.com</a>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
              <a href="#">123 Greenleaf Ave, Garden City</a>
              <a href="#">Mon – Sat, 9am – 6pm</a>
            </nav>

            {/* Socials */}
            <div className="footer-socials">
              {/* Instagram */}
              <a href="#" className="footer-social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="footer-social-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="footer-form-wrap">
            <h3 className="footer-form-heading">Get in <em>Touch</em></h3>
            <p className="footer-form-sub">We'd love to help you design your perfect garden space.</p>

            {submitted ? (
              <div className="footer-success">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Thank you — we'll be in touch shortly.
              </div>
            ) : (
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
                      placeholder="your@email.com"
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
                    placeholder="+1 (234) 567-890"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="footer-field">
                  <label htmlFor="footer-msg">Your Message</label>
                  <textarea
                    id="footer-msg"
                    name="message"
                    placeholder="Tell us about your space or project…"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="footer-submit">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} <a href="#">Verdana Studio</a>. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Shipping Info</a>
          </div>
        </div>
      </footer>
    </>
  );
}