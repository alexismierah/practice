"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    if (!email.trim() || !message.trim()) {
      setErrorMessage("Please enter your email and message.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || undefined,
          phone: phone.trim() || undefined,
          email: email.trim(),
          subject: subject.trim() || undefined,
          message: message.trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setName("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setErrorMessage("Network error. Check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <main style={{ fontFamily: "'Jost', sans-serif", background: "#ffffff", color: "#2d5a2d", overflow: "visible" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

        :root {
          --forest: #2d5a2d;
          --sage: #7ab87a;
          --sage-mid: #8ec88e;
          --sage-light: #a8d8a8;
          --cream: #f5f0e8;
          --gold: #c9a84c;
          --border: rgba(122,184,122,0.18);
          --muted: #80aa80;
          --body: #456045;
          --bg-icon: #edf7ed;
        }

        .ct *, .ct *::before, .ct *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── PAGE SHELL ── */
        .ct-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 5rem clamp(1.5rem, 5vw, 3rem) 7rem;
        }

        /* ── PAGE HEADER ── */
        .ct-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: end;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 4rem;
        }

        .ct-eyebrow {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
        }

        .ct-eyebrow-line { width: 20px; height: 1px; background: var(--gold); }
        .ct-eyebrow-text {
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
        }

        .ct-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 500;
          color: var(--forest);
          line-height: 1.12;
          letter-spacing: -0.01em;
        }

        .ct-title em { font-style: italic; color: var(--sage); }

        .ct-head-right {
          padding-bottom: 0.2rem;
        }

        .ct-tagline {
          font-size: 0.9rem;
          line-height: 1.9;
          color: var(--body);
          font-weight: 300;
          margin-bottom: 1.8rem;
        }

        /* Contact details inline in header */
        .ct-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .ct-detail {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.82rem;
          color: var(--body);
          font-weight: 300;
        }

        .ct-detail-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--bg-icon);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--sage);
          flex-shrink: 0;
        }

        .ct-detail-label {
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 400;
          display: block;
          margin-bottom: 1px;
        }

        /* ── BODY: form + sidebar ── */
        .ct-body {
          display: flex;
          flex-direction: row;
          gap: 5rem;
          align-items: flex-start;
        }

        .ct-form-col {
          flex: 1;
          min-width: 0;
        }

        /* ── FORM ── */
        .ct-form-label-row {
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .ct-form-label-row::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        .ct-field {
          margin-bottom: 1.6rem;
        }

        .ct-field-label {
          display: block;
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 400;
          margin-bottom: 0.5rem;
        }

        .ct-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border);
          border-radius: 0;
          padding: 0.6rem 0;
          font-family: 'Jost', sans-serif;
          font-size: 0.875rem;
          font-weight: 300;
          color: var(--forest);
          outline: none;
          transition: border-color 0.25s;
        }

        .ct-input::placeholder { color: #b8d4b8; font-weight: 300; }
        .ct-input:focus { border-bottom-color: var(--sage); }

        .ct-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }

        .ct-btn {
          margin-top: 2rem;
          width: 100%;
          padding: 0.85rem 2rem;
          background: var(--forest);
          color: var(--cream);
          border: none;
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 10px;
          transition: background 0.2s;
        }

        .ct-btn:hover { background: var(--sage); }
        .ct-btn:disabled { opacity: 0.65; cursor: not-allowed; }
        .ct-btn:disabled:hover { background: var(--forest); }

        .ct-form-status {
          margin-top: 1rem;
          font-size: 0.82rem;
          font-weight: 300;
          line-height: 1.5;
        }
        .ct-form-status--ok { color: var(--sage); }
        .ct-form-status--err { color: #8b4040; }

        /* ── SIDEBAR ── */
        .ct-sidebar {
          width: 360px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          position: sticky;
          top: 2rem;
          align-self: flex-start;
        }

        .ct-info-block {
          background: #fff;
          padding: 1.6rem 1.5rem;
          border-radius: 13px 13px 0 0;
        }

        .ct-info-block-label {
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 500;
          margin-bottom: 0.9rem;
        }

        .ct-info-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.82rem;
          color: var(--body);
          font-weight: 300;
          line-height: 1.5;
        }

        .ct-info-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--bg-icon);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--sage);
          flex-shrink: 0;
        }

        .ct-hours-block {
          background: var(--forest);
          padding: 1.6rem 1.5rem;
        }

        .ct-hours-label {
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.45);
          font-weight: 500;
          margin-bottom: 0.9rem;
        }

        .ct-hours-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.3rem;
          font-weight: 500;
          color: var(--cream);
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .ct-hours-title em { font-style: italic; color: rgba(232,201,122,0.85); }

        .ct-hours-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 0.55rem 0;
          border-bottom: 1px solid rgba(245,240,232,0.07);
          font-size: 0.78rem;
          font-weight: 300;
        }

        .ct-hours-row:last-child { border-bottom: none; }

        .ct-hours-day { color: rgba(245,240,232,0.55); letter-spacing: 0.02em; }
        .ct-hours-time { color: rgba(245,240,232,0.9); letter-spacing: 0.04em; }
        .ct-hours-closed { color: rgba(245,240,232,0.3); font-style: italic; }

        .ct-note-block {
          background: #f4fbf4;
          padding: 1.3rem 1.5rem;
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          border-radius: 0 0 13px 13px;
        }

        .ct-note-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
          margin-top: 0.35rem;
          opacity: 0.6;
        }

        .ct-note-text {
          font-size: 0.75rem;
          line-height: 1.65;
          color: var(--muted);
          font-weight: 300;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .ct-body { flex-direction: column; gap: 3rem; }
          .ct-sidebar { position: static; width: 100%; }
        }

        @media (max-width: 680px) {
          .ct-head { grid-template-columns: 1fr; gap: 2rem; }
          .ct-row { grid-template-columns: 1fr; gap: 0; }
        }
      `}</style>

      <div className="ct">
        <div className="ct-wrap">

          {/* ── HEADER ── */}
          <div className="ct-head">
            <div>
              <div className="ct-eyebrow">
                <span className="ct-eyebrow-line" />
                <span className="ct-eyebrow-text">Contact Us</span>
              </div>
              <h1 className="ct-title">
                Let's bring your<br />
                space to <em>life.</em>
              </h1>
            </div>

            <div className="ct-head-right">
              <p className="ct-tagline">
                Have a project in mind or need advice on the right greenery for your space? Reach out — we respond within one business day.
              </p>
              <div className="ct-details">
                {[
                  { icon: <Mail size={13} />, label: "Email", value: "hello@richhaven.net" },
                  { icon: <Phone size={13} />, label: "Phone", value: "+63 916 236 6737" },
                  { icon: <MapPin size={13} />, label: "Location", value: "Las Piñas City, Philippines" },
                ].map(({ icon, label, value }) => (
                  <div className="ct-detail" key={label}>
                    <div className="ct-detail-icon">{icon}</div>
                    <div>
                      <span className="ct-detail-label">{label}</span>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── BODY ── */}
          <div className="ct-body">

            {/* FORM */}
            <div className="ct-form-col">
              <div className="ct-form-label-row">Send a message</div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="ct-row">
                  <div className="ct-field">
                    <label className="ct-field-label" htmlFor="contact-name">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      className="ct-input"
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="e.g. Maria Santos"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="ct-field">
                    <label className="ct-field-label" htmlFor="contact-phone">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      className="ct-input"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+63 9XX XXX XXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="ct-field">
                  <label className="ct-field-label" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    className="ct-input"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="ct-field">
                  <label className="ct-field-label" htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    className="ct-input"
                    type="text"
                    name="subject"
                    placeholder="e.g. Artificial turf for my garden"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="ct-field">
                  <label className="ct-field-label" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="ct-input"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your space and what you have in mind…"
                    style={{ resize: "none", lineHeight: 1.75 }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button
                  className="ct-btn"
                  type="submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>

                {status === "success" && (
                  <p className="ct-form-status ct-form-status--ok" role="status">
                    Thank you — your message was sent. We will get back to you
                    soon.
                  </p>
                )}
                {status === "error" && errorMessage && (
                  <p className="ct-form-status ct-form-status--err" role="alert">
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>

            {/* SIDEBAR */}
            <div className="ct-sidebar">

              <div className="ct-info-block">
                <div className="ct-info-block-label">Our location</div>
                <div className="ct-info-row">
                  <div className="ct-info-icon"><MapPin size={13} /></div>
                  Las Piñas City, Metro Manila, Philippines
                </div>
              </div>

              <div className="ct-hours-block">
                <div className="ct-hours-label">Office Hours</div>
                <h3 className="ct-hours-title">When we're <em>available</em></h3>
                {[
                  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
                  { day: "Saturday", time: "9:00 AM – 6:00 PM" },
                  { day: "Sunday", time: null },
                ].map(({ day, time }) => (
                  <div className="ct-hours-row" key={day}>
                    <span className="ct-hours-day">{day}</span>
                    {time
                      ? <span className="ct-hours-time">{time}</span>
                      : <span className="ct-hours-closed">Closed</span>
                    }
                  </div>
                ))}
              </div>

              <div className="ct-note-block">
                <div className="ct-note-dot" />
                <p className="ct-note-text">
                  We typically respond to all inquiries within one business day. For urgent matters, please call us directly.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}