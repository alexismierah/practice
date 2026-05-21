"use client"

import { useState } from "react"

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; message?: string }>({})

  const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const isValidPhone = (phone: string): boolean => /^[0-9+\-\s()]+$/.test(phone) || phone === ""

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const filtered = name === "phone" ? value.replace(/[^0-9+\-\s()]/g, "") : value
    setFormData(prev => ({ ...prev, [name]: filtered }))
    setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const newErrors: typeof errors = {}
    if (!formData.name.trim()) newErrors.name = "Please enter your name"
    if (!formData.email.trim()) newErrors.email = "Please enter your email address"
    else if (!isValidEmail(formData.email)) newErrors.email = "Please enter a valid email address"
    if (formData.phone && !isValidPhone(formData.phone)) newErrors.phone = "Please enter a valid phone number"
    if (!formData.message.trim()) newErrors.message = "Please enter your message"
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/email-send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", phone: "", message: "" })
        setErrors({})
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        const errorData = await response.json()
        setErrors({ email: errorData.error || "Failed to send message" })
      }
    } catch {
      setErrors({ email: "Failed to send message. Please try again later." })
    } finally {
      setLoading(false)
    }
  }

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
  ]

  const fields = [
    { key: "name" as const, label: "Full Name", type: "text", placeholder: "Enter your name", required: true },
    { key: "email" as const, label: "Email Address", type: "email", placeholder: "Enter your email", required: true },
    { key: "phone" as const, label: "Contact Number", type: "tel", placeholder: "Enter your contact number", required: false },
  ]

  return (
    <>
      <style>{`
        .footer-root {
          font-family: 'Instrument Sans', sans-serif;
          background: #111827;
          color: #e8e6e1;
          position: relative;
          overflow: hidden;
        }

        .footer-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 0% 100%, rgba(58, 137, 221, 0.1) 0%, transparent 55%),
            radial-gradient(ellipse 50% 50% at 100% 0%, rgba(96, 165, 250, 0.06) 0%, transparent 55%),
            radial-gradient(ellipse 40% 40% at 50% 80%, rgba(58, 137, 221, 0.04) 0%, transparent 60%);
          pointer-events: none;
        }

        .footer-grid {
          max-width: 1240px;
          margin: 0 auto;
          padding: 80px 48px 64px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.8fr;
          gap: 72px;
          position: relative;
        }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 48px; padding: 56px 32px 48px; }
        }

        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; gap: 40px; padding: 48px 24px 40px; }
        }

        /* Brand column */
        .brand-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #3a89dd;
          margin-bottom: 14px;
        }

        .brand-name {
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 14px;
        }

        .brand-desc {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: #7a92ad;
          max-width: 230px;
          margin-bottom: 28px;
        }

        .social-row { display: flex; gap: 10px; }

        .social-dot {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
          color: #7a92ad;
          text-decoration: none;
        }
        .social-dot:hover {
          border-color: rgba(58,137,221,0.5);
          background: rgba(58,137,221,0.1);
          transform: translateY(-2px);
        }
        .social-dot:hover svg { fill: #3a89dd; }
        .social-dot svg { fill: #9bacc4; transition: fill 0.2s; }

        /* Column label */
        .col-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #3a89dd;
          margin-bottom: 20px;
        }

        /* Nav */
        .nav-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0; }

        .nav-item {
          display: inline-flex;
          align-items: center;
          font-size: 14.5px;
          font-weight: 400;
          color: #7a92ad;
          padding: 7px 0;
          transition: color 0.2s;
          width: fit-content;
          text-decoration: none;
        }

        .nav-item:hover { color: #e8e6e1; }

        /* Contacts */
        .contact-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0; }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          font-weight: 300;
          color: #7a92ad;
          padding: 7px 0;
          cursor: default;
        }

        /* Form */
        .form-wrap { display: flex; flex-direction: column; gap: 10px; }

        .field-wrap { position: relative; }

        .field-label {
          display: block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4a6880;
          margin-bottom: 6px;
          transition: color 0.2s;
        }

        .field-label.active { color: #3a89dd; }

        .field-input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 999px;
          padding: 10px 16px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #e8e6e1;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          outline: none;
          box-sizing: border-box;
          -webkit-appearance: none;
        }

        .field-input::placeholder { color: #445566; }
        .field-input:focus {
          border-color: rgba(58,137,221,0.5);
          background: rgba(58,137,221,0.05);
          box-shadow: 0 0 0 3px rgba(58,137,221,0.08);
        }
        .field-input.has-error { border-color: rgba(239,68,68,0.5); }

        textarea.field-input { resize: none; border-radius: 24px; padding: 11px 16px; }

        .field-error { color: #ef4444; font-size: 11px; margin-top: 4px; font-weight: 500; }

        .submit-btn {
          margin-top: 6px;
          width: auto;
          align-self: flex-start;
          background: linear-gradient(135deg, #3a89dd 0%, #2a78cc 100%);
          border: none;
          border-radius: 999px;
          padding: 9px 22px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #fff;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(58,137,221,0.25);
        }

        .submit-btn:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(58,137,221,0.35);
        }
        .submit-btn:active:not(:disabled) { transform: translateY(0); }
        .submit-btn.success { background: linear-gradient(135deg, #1a9e6e 0%, #158a5e 100%); box-shadow: 0 4px 16px rgba(26,158,110,0.3); }
        .submit-btn:disabled { cursor: not-allowed; opacity: 0.6; }

        /* Bottom bar */
        .footer-bottom {
          max-width: 1240px;
          margin: 0 auto;
          padding: 22px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        @media (max-width: 600px) {
          .footer-bottom { flex-direction: column; text-align: center; padding: 20px 24px; }
        }

        .footer-copy { font-size: 12px; font-weight: 300; color: #3d5166; letter-spacing: 0.03em; }
        .footer-tagline { font-size: 11px; font-weight: 400; color: #2d4156; letter-spacing: 0.05em; }
      `}</style>

      <footer id="footer" className="footer-root">
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <p className="brand-eyebrow">Est. 2014</p>
            <h2 className="brand-name">Unifix ICT Solutions</h2>
            <p className="brand-desc">Professional tech solutions crafted to help your business thrive in the digital age.</p>

            <div className="social-row">
              <a
                href="https://www.facebook.com/unifixictsolutions"
                target="_blank"
                rel="noreferrer"
                className="social-dot"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation + Contacts */}
          <div>
            <p className="col-label">Navigation</p>
            <ul className="nav-list">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="nav-item">{label}</a>
                </li>
              ))}
            </ul>

            <p className="col-label" style={{ marginTop: "32px" }}>Contacts</p>
            <ul className="contact-list">
              <li><span className="contact-item">hello@unifixictsolutions.com</span></li>
              <li><span className="contact-item">(02) 8294 0531</span></li>
              <li><span className="contact-item">+63 936 496 8421</span></li>
            </ul>
          </div>

          {/* Quote Form */}
          <div>
            <p className="col-label">Request a Quote</p>
            <div className="form-wrap">
              {fields.map(({ key, label, type, placeholder, required }) => (
                <div className="field-wrap" key={key}>
                  <label className={`field-label ${focused === key ? "active" : ""}`}>{label}</label>
                  <input
                    type={type}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    onFocus={() => setFocused(key)}
                    onBlur={() => setFocused(null)}
                    placeholder={placeholder}
                    required={required}
                    className={`field-input ${errors[key] ? "has-error" : ""}`}
                  />
                  {errors[key] && <div className="field-error">{errors[key]}</div>}
                </div>
              ))}

              <div className="field-wrap">
                <label className={`field-label ${focused === "message" ? "active" : ""}`}>Your Request</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell us what you need..."
                  required
                  rows={3}
                  className={`field-input ${errors.message ? "has-error" : ""}`}
                />
                {errors.message && <div className="field-error">{errors.message}</div>}
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading || submitted}
                className={`submit-btn ${submitted ? "success" : ""}`}
              >
                {loading ? "Sending..." : submitted ? "Request Sent" : "Submit Request"}
              </button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Unifix ICT Solutions. All rights reserved.</span>
          <span className="footer-tagline">Trusted IT Partner Since 2014</span>
        </div>
      </footer>
    </>
  )
}
