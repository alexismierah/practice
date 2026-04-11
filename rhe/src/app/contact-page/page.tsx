import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Contact() {
  return (
    <main
      className="min-h-screen"
      style={{ fontFamily: "'Jost', sans-serif", background: "#F7F4EE", color: "#1C1C1A" }}
    >
      {/* ── FONT IMPORTS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .rh-hero-leaf { position: absolute; opacity: 0.07; pointer-events: none; font-size: 180px; }
        .rh-input { width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(139,115,85,0.2); border-radius: 0; padding: 10px 0; font-family: 'Jost', sans-serif; font-size: 14px; font-weight: 300; color: #1C1C1A; outline: none; transition: border-color 0.3s; }
        .rh-input::placeholder { color: #9E9890; font-weight: 300; }
        .rh-input:focus { border-bottom-color: #4A7B4E; }
        .rh-submit:hover { background: #4A7B4E !important; transform: translateY(-1px); }
        .rh-contact-item { display: flex; align-items: center; gap: 16px; padding: 18px 0; border-bottom: 1px solid rgba(139,115,85,0.2); }

        @media (max-width: 768px) {
          .rh-grid { grid-template-columns: 1fr !important; gap: 48px !important; padding: 48px 24px !important; }
          .rh-hero { padding: 60px 24px 56px !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        className="rh-hero"
        style={{
          position: "relative",
          padding: "80px 48px 72px",
          textAlign: "center",
          overflow: "hidden",
          borderBottom: "1px solid rgba(139,115,85,0.2)",
        }}
      >

        {/* decorative leaves */}
        <span className="rh-hero-leaf" style={{ left: -20, top: 20, transform: "rotate(-20deg)", color: "#2C4A2E" }}>🌿</span>
        <span className="rh-hero-leaf" style={{ right: -20, bottom: -20, transform: "rotate(160deg)", color: "#2C4A2E", fontSize: 160 }}>🌿</span>

        <span style={{
          display: "inline-block",
          fontSize: 11, fontWeight: 400, letterSpacing: "0.22em",
          textTransform: "uppercase", color: "#8B7355", marginBottom: 20,
        }}>
          Rich Haven
        </span>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(42px, 6vw, 68px)",
          fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.01em",
          marginBottom: 20,
        }}>
          Get in <em style={{ fontStyle: "italic", color: "#2C4A2E" }}>Touch</em>
        </h1>

        <div style={{ width: 40, height: 1, background: "#C4A97D", margin: "0 auto 20px" }} />

        <p style={{
          fontSize: 14, fontWeight: 300, lineHeight: 1.8,
          color: "#6B6560", maxWidth: 460, margin: "0 auto", letterSpacing: "0.02em",
        }}>
          Let&apos;s bring your space to life with premium artificial grass and
          botanical solutions. We respond within one business day.
        </p>
      </section>

      {/* ── CONTENT ── */}
      <section
        className="rh-grid"
        style={{
          maxWidth: 1080, margin: "0 auto",
          padding: "72px 48px 96px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
      >

        {/* ── FORM ── */}
        <div>
          {/* section label */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            fontSize: 10, fontWeight: 500, letterSpacing: "0.25em",
            textTransform: "uppercase", color: "#8B7355", marginBottom: 28,
          }}>
            Send a message
            <span style={{ flex: 1, height: 1, background: "rgba(139,115,85,0.2)" }} />
          </div>

          {[
            { label: "Your Name", type: "text", placeholder: "e.g. Maria Santos" },
            { label: "Email Address", type: "email", placeholder: "you@example.com" },
            { label: "Phone Number", type: "tel", placeholder: "+63 9XX XXX XXXX" },
          ].map(({ label, type, placeholder }) => (
            <div key={label} style={{ marginBottom: 20 }}>
              <label style={{
                display: "block", fontSize: 10, fontWeight: 400,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#9E9890", marginBottom: 8,
              }}>
                {label}
              </label>
              <input className="rh-input" type={type} placeholder={placeholder} />
            </div>
          ))}

          <div style={{ marginBottom: 20 }}>
            <label style={{
              display: "block", fontSize: 10, fontWeight: 400,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#9E9890", marginBottom: 8,
            }}>
              Message
            </label>
            <textarea
              className="rh-input"
              rows={5}
              placeholder="Tell us about your space and how we can help…"
              style={{ resize: "none", lineHeight: 1.7 }}
            />
          </div>

          <button
            className="rh-submit"
            style={{
              marginTop: 36, width: "100%",
              background: "#2C4A2E", color: "#F7F4EE",
              border: "none", padding: "16px 32px",
              fontFamily: "'Jost', sans-serif",
              fontSize: 11, fontWeight: 400, letterSpacing: "0.22em",
              textTransform: "uppercase", cursor: "pointer",
              transition: "background 0.3s, transform 0.15s",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
            }}
          >
            <span>Send Message</span>
          </button>
        </div>

        {/* ── INFO ── */}
        <div style={{ paddingTop: 4 }}>
          <div style={{ marginBottom: 48 }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 32, fontWeight: 300, lineHeight: 1.25, marginBottom: 12,
            }}>
              We&apos;d love to<br />
              <em style={{ fontStyle: "italic", color: "#2C4A2E" }}>hear from you</em>
            </h2>
            <p style={{ fontSize: 13, fontWeight: 300, color: "#6B6560", lineHeight: 1.8, letterSpacing: "0.02em" }}>
              Whether you&apos;re designing a rooftop garden, a commercial lobby,
              or a cosy balcony retreat — our team is here to guide you every step of the way.
            </p>
          </div>

          <ul style={{ listStyle: "none", borderTop: "1px solid rgba(139,115,85,0.2)", marginBottom: 40 }}>
            {[
              { icon: <Mail size={14} />, label: "Email", value: "hello@richhaven.com" },
              { icon: <Phone size={14} />, label: "Phone", value: "+63 912 345 6789" },
              { icon: <MapPin size={14} />, label: "Location", value: "Philippines" },
            ].map(({ icon, label, value }) => (
              <li key={label} className="rh-contact-item">
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "#EEF4EE",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, color: "#2C4A2E",
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9E9890", marginBottom: 3 }}>
                    {label}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 300 }}>{value}</div>
                </div>
              </li>
            ))}
          </ul>

          {/* hours card */}
          <div style={{
            background: "#2C4A2E",
            padding: "28px 32px",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -30, right: -30,
              width: 120, height: 120, borderRadius: "50%",
              background: "rgba(255,255,255,0.04)",
            }} />
            <div style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(244,237,220,0.5)", marginBottom: 14 }}>
              Office Hours
            </div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22, fontWeight: 300, color: "#F4EDDC",
              marginBottom: 16, letterSpacing: "0.01em",
            }}>
              When we&apos;re available
            </h3>
            <div style={{ fontSize: 13, fontWeight: 300, color: "rgba(244,237,220,0.8)", letterSpacing: "0.04em", lineHeight: 1.8 }}>
              Monday – Saturday
            </div>
            <div style={{ fontSize: 12, color: "#C4A97D", letterSpacing: "0.06em", marginTop: 6 }}>
              9:00 AM — 6:00 PM
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}