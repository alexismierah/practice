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
      const response = await fetch("/api/send-email", {
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

  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/unifixictsolutions", icon: "f" },
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

        .brand-eyebrow {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3a89dd;
          margin-bottom: 12px;
        }

        .brand-name {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 16px;
        }

        .brand-desc {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.7;
          color: #9bacc4;
          max-width: 240px;
          margin-bottom: 28px;
        }

        .social-row { display: flex; gap: 12px; }

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
          text-decoration: none;
        }
        .social-dot:hover { border-color: #3a89dd; background: rgba(58,137,221,0.12); color: #3a89dd; }

        .col-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #4a6880;
          margin-bottom: 24px;
        }

        .nav-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 2px; }

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
          text-decoration: none;
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

        .form-wrap { display: flex; flex-direction: column; gap: 12px; }

        .field-wrap { position: relative; }

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
        .field-input:focus { border-color: rgba(58,137,221,0.6); background: rgba(58,137,221,0.06); }
        .field-input.has-error { border-color: rgba(239,68,68,0.6); }

        textarea.field-input { resize: none; }

        .field-error { color: #ef4444; font-size: 12px; margin-top: 4px; font-weight: 500; }

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
        }

        .submit-btn:hover:not(:disabled) { background: #2a78cc; transform: translateY(-1px); }
        .submit-btn:active:not(:disabled) { transform: translateY(0); }
        .submit-btn.success { background: #1a9e6e; }
        .submit-btn:disabled { cursor: not-allowed; opacity: 0.7; }

        .footer-divider {
          max-width: 1200px;
          margin: 0 auto;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent);
        }

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

        .footer-copy { font-size: 12px; font-weight: 300; color: #5a7080; letter-spacing: 0.02em; }
      `}</style>

      <footer id="footer" className="footer-root">
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <p className="brand-eyebrow">Est. 2014</p>
            <h2 className="brand-name">Unifix ICT Solutions</h2>
            <p className="brand-desc">Professional tech solutions crafted to help your business thrive.</p>
            <p className="brand-desc">
              hello@unifixictsolutions.com<br />(02) 8294 0531<br />+63 936 496 8421
            </p>
            <div className="social-row">
              {socialLinks.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="social-dot" aria-label={label}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links — now actual anchor tags */}
          <div>
            <p className="col-label">Navigation</p>
            <ul className="nav-list">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="nav-item">{label}</a>
                </li>
              ))}
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
                {loading ? "Sending..." : submitted ? "✓ Request Sent" : "Submit Request"}
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