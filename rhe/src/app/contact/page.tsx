"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap');

        .contact-root *, .contact-root *::before, .contact-root *::after { box-sizing: border-box; }

        .contact-root {
          min-height: 100vh;
          background: #fff;
          font-family: 'Inter', sans-serif;
          color: #163521;
          display: flex;
          flex-direction: column;
        }

        /* — Header — */
        .contact-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 4rem;
          background: #fff;
          border-bottom: 1px solid #e4ebe0;
        }
        .brand {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #163521;
          text-decoration: none;
        }
        .header-nav {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .header-nav a {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #7a8f80;
          text-decoration: none;
          transition: color 0.2s;
        }
        .header-nav a:hover { color: #163521; }
        .header-nav a.active { color: #2f6f44; }

        /* — Hero banner — */
        .contact-hero {
          background: #1d3d28;
          padding: 5rem 4rem 4rem;
          position: relative;
          overflow: hidden;
        }
        .contact-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 50%, rgba(47,111,68,0.25) 0%, transparent 65%);
          pointer-events: none;
        }
        .hero-eyebrow {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7a8f80;
          margin-bottom: 1rem;
          font-weight: 400;
        }
        .hero-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 3vw + 1rem, 3.8rem);
          font-weight: 700;
          line-height: 1.08;
          color: #fff;
          letter-spacing: -0.02em;
          max-width: 560px;
        }
        .hero-heading em {
          font-style: italic;
          font-weight: 500;
          color: #7ab894;
        }
        .hero-divider {
          width: 48px;
          height: 1px;
          background: rgba(180, 220, 190, 0.3);
          margin: 2rem 0;
        }
        .hero-desc {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.9;
          color: rgba(210, 230, 216, 0.65);
          max-width: 480px;
          letter-spacing: 0.015em;
        }

        /* — Main layout — */
        .contact-main {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
          padding: 2.5rem 4rem 5rem;
          gap: 5rem;
          align-items: start;
        }

        /* — Left panel — */
        .contact-left {
          padding-top: 0.25rem;
        }
        .section-eyebrow {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7a8f80;
          margin-bottom: 0.75rem;
          font-weight: 400;
          margin-top: 2.75rem;
        }
        .section-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 1.2vw + 1rem, 2rem);
          font-weight: 700;
          color: #163521;
          margin-bottom: 1rem;
          line-height: 1.15;
        }
        .section-heading em {
          font-style: italic;
          font-weight: 500;
          color: #3f7a55;
        }
        .contact-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.85;
          color: #6b7d72;
          margin-bottom: 2.75rem;
          max-width: 360px;
        }

        /* — Contact info — */
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .info-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-icon svg {
          width: 18px;
          height: 18px;
          stroke: #2f6f44;
          fill: none;
          stroke-width: 1.8;
        }
        .info-text-label {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #7a8f80;
          font-weight: 500;
          margin-bottom: 0.2rem;
        }
        .info-text-value {
          font-size: 13px;
          color: #163521;
          font-weight: 400;
          line-height: 1.5;
        }

        /* — Divider — */
        .divider-line {
          width: 40px;
          height: 1px;
          background: #dce8d5;
          margin: 2.5rem 0;
        }
        .response-note {
          font-size: 12px;
          color: #9aaa9f;
          font-weight: 300;
          letter-spacing: 0.03em;
          line-height: 1.8;
        }

        /* — Form panel — */
        .contact-form-wrap {
          padding: 4.75rem 0;
        }
        .form-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 1.5vw + 1rem, 2.4rem);
          font-weight: 700;
          color: #163521;
          line-height: 1.1;
          margin-bottom: 0.4rem;
        }
        .form-title em {
          font-style: italic;
          font-weight: 500;
          color: #3f7a55;
        }
        .form-subtitle {
          font-size: 12px;
          color: #9aaa9f;
          font-weight: 300;
          margin-bottom: 2.5rem;
          letter-spacing: 0.02em;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 0;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 0;
          padding-bottom: 1.75rem;
        }
        .form-label {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7a8f80;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        .form-input,
        .form-select {
          width: 100%;
          padding: 0.6rem 1.1rem;
          border: 1px solid #cdddc6;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #163521;
          background: #f7faf5;
          outline: none;
          transition: border-color 0.25s, background 0.25s;
          appearance: none;
        }
        .form-textarea {
          width: 100%;
          padding: 0.75rem 1.1rem;
          border: 1px solid #cdddc6;
          border-radius: 16px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #163521;
          background: #f7faf5;
          outline: none;
          transition: border-color 0.25s, background 0.25s;
        }
        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          border-color: #2f6f44;
          background: #fff;
        }
        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #b0bfb5;
        }
        .form-textarea {
          resize: none;
          min-height: 100px;
          line-height: 1.8;
        }

        .submit-btn {
          width: auto;
          padding: 0.85rem 1.5rem;
          background: #2f6f44;
          color: #fff;
          border: none;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          margin-top: 0.25rem;
          box-shadow: 0 8px 20px rgba(20,50,30,0.25);
        }
        .submit-btn:hover {
          background: #367d4e;
          transform: translateY(-1px);
          box-shadow: 0 12px 28px rgba(20,50,30,0.35);
        }
        .submit-btn:active { transform: scale(0.99); }

        /* — Success state — */
        .success-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 3rem 2rem;
          min-height: 340px;
        }
        .success-icon {
          width: 56px;
          height: 56px;
          background: #f2f6ef;
          border: 1px solid #dce8d5;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          animation: fadeIn 0.5s ease;
        }
        .success-icon svg {
          width: 22px;
          height: 22px;
          stroke: #2f6f44;
          fill: none;
          stroke-width: 2;
        }
        .success-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #163521;
          margin-bottom: 0.65rem;
        }
        .success-text {
          font-size: 13px;
          font-weight: 300;
          color: #6b7d72;
          line-height: 1.8;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        /* — Footer — */
        .contact-footer {
          padding: 1.5rem 4rem;
          border-top: 1px solid #e4ebe0;
          background: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-copy {
          font-size: 12px;
          color: #9aaa9f;
          font-weight: 300;
          letter-spacing: 0.03em;
        }
        .footer-social {
          display: flex;
          gap: 1.5rem;
        }
        .footer-social a {
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9aaa9f;
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 400;
        }
        .footer-social a:hover { color: #163521; }

        @media (max-width: 900px) {
          .contact-main {
            grid-template-columns: 1fr;
            padding: 3rem 1.75rem;
            gap: 3rem;
          }
          .contact-header { padding: 1.25rem 1.75rem; }
          .contact-hero { padding: 3.5rem 1.75rem 3rem; }
          .header-nav { display: none; }
          .form-row { grid-template-columns: 1fr; }
          .contact-footer { padding: 1.25rem 1.75rem; flex-direction: column; gap: 0.75rem; text-align: center; }
        }
      `}</style>

      <div className="contact-root">
        {/* Header */}
        
        {/* Main */}
        <main className="contact-main">
          {/* Left */}
          <div className="contact-left">
            <p className="section-eyebrow">Reach us directly</p>
            <h2 className="section-heading">
              Contact <em>information</em>
            </h2>
            <p className="contact-desc">
              Our team is ready to help you find the perfect greenery solution for your home, office, or commercial space.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="info-text-label">Location</p>
                  <p className="info-text-value">Metro Manila, Philippines</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                </div>
                <div>
                  <p className="info-text-label">Phone</p>
                  <p className="info-text-value">+63 917 123 4567</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <p className="info-text-label">Hours</p>
                  <p className="info-text-value">Mon – Sat, 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="divider-line" />

            <p className="response-note">
              We respond to all enquiries<br />within one business day.
            </p>
          </div>

          {/* Right — Form */}
          <div className="contact-form-wrap">
            {!submitted ? (
              <>
                <h2 className="form-title">Send a <em>message</em></h2>
                <p className="form-subtitle">All fields are required</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" htmlFor="firstName">First name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="form-input"
                        placeholder="Juan"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" htmlFor="lastName">Last name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="form-input"
                        placeholder="dela Cruz"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="juan@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="project">Artificial Grass</option>
                      <option value="supply">Potted Plants and Trees</option>
                      <option value="installation">Wall Greens</option>
                      <option value="consultation">Planter</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Your message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Tell us about your space and what you have in mind…"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    Send message
                  </button>
                </form>
              </>
            ) : (
              <div className="success-wrap">
                <div className="success-icon">
                  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h2 className="success-title">Message received</h2>
                <p className="success-text">
                  Thank you for reaching out to Rich Haven.<br />
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
