"use client"

import { useState } from "react"

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quote Request Submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const links = ["Home", "About", "Services", "Contact"]

  return (
    <>
      <style>{`
        .footer-root {
          font-family: 'Instrument Sans', sans-serif;
          background: #1c2333;
          color: #e8e6e1;
          position: relative;
          overflow: hidden;
        }

        .footer-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 10% 100%, rgba(58, 137, 221, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 90% 0%, rgba(58, 137, 221, 0.07) 0%, transparent 60%);
          pointer-events: none;
        }

        .footer-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 40px 56px;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.6fr;
          gap: 64px;
          position: relative;
        }

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 48px; padding: 48px 24px 40px; }
        }

        /* ─── Brand ─── */
        .brand-eyebrow {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3a89dd;
          margin-bottom: 12px;
        }

        .brand-name {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 16px;
        }

        .brand-name span {
          color: #3a89dd;
        }

        .brand-desc {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.7;
          color: #9bacc4;
          max-width: 240px;
          margin-bottom: 28px;
        }

        .social-row {
          display: flex;
          gap: 12px;
        }

        .social-dot {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          color: #7a92ad;
          font-size: 13px;
          font-weight: 600;
        }
        .social-dot:hover { border-color: #3a89dd; background: rgba(58,137,221,0.12); color: #3a89dd; }

        /* ─── Links ─── */
        .col-label {
          font-family: 'Instrument Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #4a6880;
          margin-bottom: 24px;
        }

        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nav-item {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 400;
          color: #7a92ad;
          cursor: pointer;
          padding: 6px 0;
          transition: color 0.2s;
          width: fit-content;
        }

        .nav-item::before {
          content: '';
          width: 0;
          height: 1px;
          background: #3a89dd;
          transition: width 0.25s ease;
          flex-shrink: 0;
        }

        .nav-item:hover { color: #e8e6e1; }
        .nav-item:hover::before { width: 16px; }

        /* ─── Form ─── */
        .form-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .field-wrap {
          position: relative;
        }

        .field-label {
          display: block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4a6880;
          margin-bottom: 6px;
          transition: color 0.2s;
        }

        .field-label.active { color: #3a89dd; }

        .field-input {
          width: 100%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          padding: 10px 14px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #e8e6e1;
          transition: border-color 0.2s, background 0.2s;
          outline: none;
          box-sizing: border-box;
          -webkit-appearance: none;
        }

        .field-input::placeholder { color: #5a7080; }

        .field-input:focus {
          border-color: rgba(58,137,221,0.6);
          background: rgba(58,137,221,0.06);
        }

        textarea.field-input { resize: none; }

        .submit-btn {
          margin-top: 4px;
          width: 100%;
          background: #3a89dd;
          border: none;
          border-radius: 8px;
          padding: 12px 20px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          position: relative;
          overflow: hidden;
        }

        .submit-btn:hover { background: #2a78cc; transform: translateY(-1px); }
        .submit-btn:active { transform: translateY(0); }
        .submit-btn.success { background: #1a9e6e; }

        /* ─── Divider ─── */
        .footer-divider {
          max-width: 1200px;
          margin: 0 auto;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent);
        }

        /* ─── Bottom bar ─── */
        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        @media (max-width: 600px) {
          .footer-bottom { flex-direction: column; text-align: center; padding: 20px 24px; }
        }

        .footer-copy {
          font-size: 12px;
          font-weight: 300;
          color: #5a7080;
          letter-spacing: 0.02em;
        }

        .footer-tagline {
          font-size: 11px;
          font-weight: 400;
          color: #4a6070;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .footer-tagline span { color: #3a89dd; opacity: 0.7; }
      `}</style>

      <footer className="footer-root">
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <p className="brand-eyebrow">Est. 2014</p>
            <h2 className="brand-name">Unifix ICT Solutions<span></span></h2>
            <p className="brand-desc">
              Professional tech solutions crafted to help your business thrive in a digital-first world.
            </p>
            <div className="social-row">
              {["f"].map(s => (
                <div key={s} className="social-dot">{s}</div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="col-label">Navigation</p>
            <ul className="nav-list">
              {links.map(link => (
                <li key={link} className="nav-item">{link}</li>
              ))}
            </ul>
          </div>

          {/* Quote Form */}
          <div>
            <p className="col-label">Request a Quote</p>
            <div className="form-wrap">
              {(["name", "email"] as const).map(field => (
                <div className="field-wrap" key={field}>
                  <label className={`field-label ${focused === field ? "active" : ""}`}>
                    {field === "name" ? "Full Name" : "Email Address"}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    placeholder={field === "name" ? "Jane Smith" : "jane@company.com"}
                    required
                    className="field-input"
                  />
                </div>
              ))}
              <div className="field-wrap">
                <label className={`field-label ${focused === "message" ? "active" : ""}`}>
                  Your Request
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell us what you need..."
                  required
                  rows={3}
                  className="field-input"
                />
              </div>
              <button
                onClick={handleSubmit}
                className={`submit-btn ${submitted ? "success" : ""}`}
              >
                {submitted ? "✓ Request Sent" : "Submit Request"}
              </button>
            </div>
          </div>

        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} Unifix ICT Solutions. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  )
}