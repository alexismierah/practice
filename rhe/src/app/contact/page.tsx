"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        .cp *, .cp *::before, .cp *::after { box-sizing: border-box; }

        .cp {
          background: #fff;
          font-family: 'DM Sans', sans-serif;
          color: #111;
          min-height: 100vh;
        }

        /* ── Top section ── */
        .cp-top {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 4rem;
          max-width: 1140px;
          margin: 0 auto;
          padding: 3rem 4rem 2rem;
          align-items: start;
        }

        /* ── Left ── */
        .cp-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #888;
          font-weight: 400;
          margin-bottom: 0.75rem;
        }
        .cp-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 4vw, 3.6rem);
          font-weight: 700;
          font-style: italic;
          line-height: 1.05;
          color: #047857; /* emerald-700 */
          margin-bottom: 2.25rem;
          letter-spacing: -0.01em;
        }

        /* form grid */
        .cp-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .cp-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-bottom: 1rem;
        }
        .cp-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #888;
          font-weight: 500;
        }
        .cp-input,
        .cp-select {
          width: 100%;
          padding: 0.65rem 1.1rem;
          border: 1px solid #e0e0e0;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #111;
          background: #f5f5f5;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          appearance: none;
        }
        .cp-input:focus,
        .cp-select:focus {
          border-color: #2f6f44;
          background: #fff;
        }
        .cp-input::placeholder { color: #bbb; font-style: italic; }
        .cp-textarea {
          width: 100%;
          padding: 0.75rem 1.1rem;
          border: 1px solid #e0e0e0;
          border-radius: 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #111;
          background: #f5f5f5;
          outline: none;
          resize: none;
          min-height: 110px;
          line-height: 1.75;
          transition: border-color 0.2s, background 0.2s;
        }
        .cp-textarea:focus { border-color: #2f6f44; background: #fff; }
        .cp-textarea::placeholder { color: #bbb; font-style: italic; }

        .cp-btn-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .cp-submit {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.8rem 1.6rem;
          background: #047857; /* emerald-700 */
          color: #fff;
          border: none;
          border-radius: 999px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .cp-submit:hover { background: #2f6f44; transform: translateY(-1px); }
        .cp-submit:active { transform: scale(0.98); }
        .cp-submit-icon {
          width: 28px;
          height: 28px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cp-submit-icon svg {
          width: 13px;
          height: 13px;
          stroke: #111;
          fill: none;
          stroke-width: 2.2;
        }

        /* ── Right ── */
        .cp-right {
          padding-top: 3.75rem;
        }
        .cp-tagline {
          font-family: 'DM Sans', serif;
          font-size: 15px;
          font-style: italic;
          font-weight: 400;
          line-height: 1.9;
          color: #666;
          margin-bottom: 1.75rem;
          max-width: 340px;
        }
        .cp-img-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 4/5;
          background: #eee;
        }
        .cp-img-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .cp-img-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(6px);
          border-radius: 999px;
          padding: 0.3rem 0.85rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: #111;
        }

        /* ── Bottom info strip ── */
        .cp-bottom {
          border-top: 1px solid #ebebeb;
          max-width: 1140px;
          margin: 0 auto;
          padding: 3rem 4rem 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
        }
        .cp-info-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
        }
        .cp-info-icon {
          width: 42px;
          height: 42px;
          border: 1px solid #e0e0e0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.25rem;
        }
        .cp-info-icon svg {
          width: 17px;
          height: 17px;
          stroke: #444;
          fill: none;
          stroke-width: 1.6;
        }
        .cp-info-title {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 600;
          color: #111;
          letter-spacing: -0.01em;
        }
        .cp-info-line {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #666;
          line-height: 1.7;
        }

        /* ── Success ── */
        .cp-success {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 3rem 0;
        }
        .cp-success-icon {
          width: 52px;
          height: 52px;
          border: 1px solid #d0e8d6;
          border-radius: 50%;
          background: #f2f9f4;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cp-success-icon svg {
          width: 20px;
          height: 20px;
          stroke: #2f6f44;
          fill: none;
          stroke-width: 2.2;
        }
        .cp-success h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.9rem;
          font-style: italic;
          font-weight: 700;
          color: #111;
          letter-spacing: -0.01em;
          margin-top: 0.5rem;
        }
        .cp-success p {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #666;
          line-height: 1.8;
        }

        @media (max-width: 860px) {
          .cp-top { grid-template-columns: 1fr; padding: 2rem 1.5rem 1.5rem; gap: 2.5rem; }
          .cp-right { padding-top: 0; }
          .cp-img-card { aspect-ratio: 16/9; }
          .cp-bottom { grid-template-columns: 1fr; padding: 2rem 1.5rem 3rem; }
          .cp-form-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="cp">

        {/* ── Top two-column section ── */}
        <div className="cp-top">

          {/* Left — heading + form */}
          <div>
            <p className="cp-eyebrow">Get in Touch</p>
            <h1 className="cp-heading">Contact Us</h1>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label className="cp-label" htmlFor="name">Name</label>
                    <input
                      id="name" name="name" type="text"
                      className="cp-input" placeholder="Your full name"
                      value={formData.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="cp-form-group">
                    <label className="cp-label" htmlFor="email">Email</label>
                    <input
                      id="email" name="email" type="email"
                      className="cp-input" placeholder="you@example.com"
                      value={formData.email} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label className="cp-label" htmlFor="phone">Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      className="cp-input" placeholder="+63 912 345 6789"
                      value={formData.phone} onChange={handleChange}
                    />
                  </div>
                  <div className="cp-form-group">
                    <label className="cp-label" htmlFor="service">Select Your Service</label>
                    <select
                      id="service" name="service"
                      className="cp-select"
                      value={formData.service} onChange={handleChange} required
                    >
                      <option value="">Select a Subject</option>
                      <option value="artificial-grass">Artificial Grass</option>
                      <option value="potted-plants">Potted Plants &amp; Trees</option>
                      <option value="wall-greens">Wall Greens</option>
                      <option value="planter">Planter</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label className="cp-label" htmlFor="date">Preferred Date</label>
                    <input
                      id="date" name="date" type="date"
                      className="cp-input"
                      value={formData.date} onChange={handleChange}
                    />
                  </div>
                  <div className="cp-form-group">
                    <label className="cp-label" htmlFor="location">Location / Area</label>
                    <input
                      id="location" name="location" type="text"
                      className="cp-input" placeholder="e.g. Quezon City"
                      value={formData.location} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="cp-form-group">
                  <label className="cp-label" htmlFor="message">Message / Special Requests</label>
                  <textarea
                    id="message" name="message"
                    className="cp-textarea"
                    placeholder="Anything else we should know?"
                    value={formData.message} onChange={handleChange}
                  />
                </div>

                <div className="cp-btn-row">
                  <button type="submit" className="cp-submit">
                    Send Message
                  </button>
                </div>
              </form>
            ) : (
              <div className="cp-success">
                <div className="cp-success-icon">
                  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h2>Message received</h2>
                <p>
                  Thank you for reaching out to Rich Haven.<br />
                  We&apos;ll confirm your enquiry within one business day.
                </p>
              </div>
            )}
          </div>

          {/* Right — tagline + image */}
          <div className="cp-right">
            <p className="cp-tagline">
              Tell us what you have in mind, and we'll be with you within 24 hours.
            </p>
            <div className="cp-img-card">
              <Image src="/land2.png" alt="Rich Haven project" fill style={{ objectFit: "cover" }} />
              <span className="cp-img-badge">Your Space</span>
            </div>
          </div>

        </div>

        {/* ── Bottom 3-column contact info ── */}
        <div className="cp-bottom">

          <div className="cp-info-col">
            <div className="cp-info-icon">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
            </div>
            <p className="cp-info-title">Call WhatsApp</p>
            <p className="cp-info-line">+63 917 123 4567<br />+63 953 987 6543</p>
          </div>

          <div className="cp-info-col">
            <div className="cp-info-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <p className="cp-info-title">Working Hours</p>
            <p className="cp-info-line">Mon – Sat: 8am – 6pm<br />Sunday: Closed</p>
          </div>

          <div className="cp-info-col">
            <div className="cp-info-icon">
              <svg viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <p className="cp-info-title">Write to Us</p>
            <p className="cp-info-line">hello@richhaven.com<br />sales@richhaven.com</p>
          </div>

        </div>
      </div>
    </>
  );
}