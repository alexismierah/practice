"use client";

import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import { navLinks } from "./Header";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [focused, setFocused] = useState<"name" | "email" | "phone" | "message" | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Failed to send message.");
      }

      setFormStatus("sent");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setFormStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Unable to send message. Please try again."
      );
    }
  };

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600&display=swap");

        .garden-footer {
          font-family: "Inter", sans-serif;
          background-color: #f8f6f1;
          color: #2e2e2e;
          position: relative;
          overflow: hidden;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 48px 48px;
          position: relative;
          z-index: 1;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr 1fr;
          gap: 64px;
          margin-bottom: 64px;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .footer-inner {
            padding: 48px 24px 32px;
          }
        }

        /* Brand column */
        .brand-col {}

        .brand-leaf {
          font-size: 32px;
          margin-bottom: 16px;
          display: block;
          filter: hue-rotate(0deg);
        }

        .brand-name {
          font-family: "Playfair Display", serif;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #2a3d22;
          margin: 0 0 6px;
          line-height: 1.1;
        }

        .brand-tagline {
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #7a9e6e;
          font-weight: 400;
          margin: 0 0 24px;
        }

        .brand-desc {
          font-size: 14px;
          line-height: 1.8;
          color: #5c5c5c;
          font-weight: 300;
          margin-bottom: 28px;
        }

        .social-links {
          display: flex;
          gap: 14px;
        }

        .social-btn {
          width: 38px; height: 38px;
          border: 1px solid #c8d8be;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #5a7d4e;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          background: transparent;
          cursor: pointer;
        }

        .social-btn:hover {
          background: #7a9e6e;
          border-color: #7a9e6e;
          color: #fff;
          transform: translateY(-2px);
        }

        /* Nav links */
        .links-col {}

        .col-heading {
          font-family: "Playfair Display", serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #7a9e6e;
          margin: 0 0 20px;
        }

        .nav-links {
          list-style: none;
          margin: 0; padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 20px;
        }

        .nav-links a {
          text-decoration: none;
          font-size: 13.5px;
          color: #4a4a4a;
          font-weight: 300;
          letter-spacing: 0.03em;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-links a::before {
          content: '—';
          font-size: 10px;
          color: #b5c4a1;
        }

        .nav-links a:hover {
          color: #2a3d22;
        }

        .contact-info {
          margin-top: 28px;
        }

        .contact-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-bottom: 12px;
          font-size: 13px;
          color: #5c5c5c;
          font-weight: 300;
        }

        .contact-icon {
          color: #7a9e6e;
          font-size: 14px;
          margin-top: 1px;
          flex-shrink: 0;
        }

        /* Form column */
        .form-col {}

        .enquiry-form {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .field-wrapper {
          position: relative;
          margin-bottom: 14px;
        }

        .field-wrapper label {
          display: block;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8a8a8a;
          margin-bottom: 5px;
          font-weight: 400;
          transition: color 0.2s;
        }

        .field-wrapper.focused label {
          color: #7a9e6e;
        }

        .field-wrapper input,
        .field-wrapper textarea,
        .field-wrapper select {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #d0d9c8;
          padding: 8px 0;
          font-size: 13.5px;
          color: #2e2e2e;
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          outline: none;
          transition: border-color 0.3s;
          box-sizing: border-box;
          appearance: none;
          resize: none;
          -webkit-appearance: none;
        }

        .field-wrapper input::placeholder,
        .field-wrapper textarea::placeholder {
          color: #b8b8b8;
          font-size: 12px;
        }

        .field-wrapper input:focus,
        .field-wrapper textarea:focus,
        .field-wrapper select:focus {
          border-bottom-color: #7a9e6e;
        }

        .field-line {
          position: absolute;
          bottom: 0; left: 0;
          height: 1px;
          width: 0;
          background: #7a9e6e;
          transition: width 0.4s ease;
        }

        .field-wrapper.focused .field-line {
          width: 100%;
        }

        .submit-btn {
          margin-top: 8px;
          padding: 10px 24px;
          background: #2d5a27;
          color: #fff;
          border: none;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: normal;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.25s ease;
          align-self: flex-start;
        }

        .submit-btn:hover {
          background: #1e3d1a;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(45,90,39,0.25);
        }

        .success-msg,
        .error-msg {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          font-size: 13px;
          margin-top: 8px;
          animation: fadeIn 0.4s ease;
        }

        .success-msg {
          background: #edf3e9;
          border-left: 2px solid #7a9e6e;
          color: #2a3d22;
        }

        .error-msg {
          background: #fbe9e9;
          border-left: 2px solid #d66a6a;
          color: #8a1b1b;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Horizontal rule */
        .footer-rule {
          border: none;
          border-top: 1px solid #dce8d4;
          margin: 0;
        }

        /* Bottom bar */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 28px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-bottom p {
          font-size: 12px;
          color: #9a9a9a;
          margin: 0;
          font-weight: 300;
          letter-spacing: 0.03em;
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-links a {
          font-size: 11.5px;
          color: #9a9a9a;
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }

        .footer-bottom-links a:hover {
          color: #7a9e6e;
        }

        .botanical-accent {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 13px;
          color: #b5c4a1;
          display: flex;
          align-items: center;
          gap: 8px;
        }
      `}</style>

      <footer className="garden-footer">
        <div className="footer-inner">
          <div className="footer-grid">

            {/* Brand Column */}
            <div className="brand-col">
              <h2 className="brand-name">Rich Haven</h2>
              <p className="brand-tagline">Garden · Nature · Living</p>
              <p className="brand-desc">
                Cultivating beauty and bringing nature closer to your everyday life. From rare botanicals to curated garden essentials — grown with care, delivered with love.
              </p>
              <div className="social-links">
                <a className="social-btn" href="#" title="Instagram">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a className="social-btn" href="#" title="Facebook">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>

            {/* Centre: Form */}
            <div className="form-col">
              <p className="col-heading">Send an Enquiry</p>

              <form className="enquiry-form" onSubmit={handleSubmit}>
                {formStatus === "error" && statusMessage ? (
                  <div className="error-msg">{statusMessage}</div>
                ) : null}
                  <div className="form-row">
                    <div className={`field-wrapper ${focused === "name" ? "focused" : ""}`}>
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        required
                      />
                      <div className="field-line" />
                    </div>
                    <div className={`field-wrapper ${focused === "email" ? "focused" : ""}`}>
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hello@mail.com"
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        required
                      />
                      <div className="field-line" />
                    </div>
                  </div>

                  <div className={`field-wrapper ${focused === "phone" ? "focused" : ""}`}>
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0912 345 6789"
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                    />
                    <div className="field-line" />
                  </div>

                  <div className={`field-wrapper ${focused === "message" ? "focused" : ""}`}>
                    <label>Your Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your garden, plant needs, or any questions…"
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      required
                    />
                    <div className="field-line" />
                  </div>

                  <button type="submit" className="submit-btn" disabled={formStatus === "loading" || formStatus === "sent"}>
                    <span>
                      {formStatus === "loading"
                        ? "Sending..."
                        : formStatus === "sent"
                        ? "Message sent"
                        : "Send Message"}
                    </span>
                  </button>
                </form>
            </div>

            {/* Right: Links + Contacts */}
            <div className="links-col">
              <p className="col-heading">Navigation</p>
              <ul className="nav-links">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[13.5px] font-light text-[#4a4a4a] tracking-[0.03em] transition-colors duration-200 hover:text-[#2a3d22]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="contact-info">
                <p className="col-heading" style={{ marginTop: "28px" }}>Contacts</p>
                <div className="contact-item">
                  <span>+63 912 345 6789</span>
                </div>
                <div className="contact-item">                  <span>hello@richhaven.com</span>
                </div>
                <div className="contact-item">
                  <span>Metro Manila, Philippines</span>
                </div>
              </div>
            </div>

          </div>

          <hr className="footer-rule" />

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Rich Haven Garden. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;