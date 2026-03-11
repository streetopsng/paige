"use client";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

/* ── Early Access CTA ── */
export function EarlyAccessCTA({ isDark }: { isDark: boolean }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ts = isDark ? "#94A8C4" : "#475569";

  return (
    <section id="early-access" style={{ background: isDark ? "var(--navy)" : "#F8FAFD", padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Left: copy */}
          <div>
            <div className="section-label">🚀 Beta Access — Limited Spots</div>
            <h2 style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", color: isDark ? "white" : "#060D1B", margin: "0 0 20px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Be first to experience<br /><span style={{ color: "var(--yellow)" }}>Paige by StreetOps.</span>
            </h2>
            <p style={{ fontSize: 17, color: ts, lineHeight: 1.7, marginBottom: 32 }}>
              Join our early access list today. Beta users get founder pricing locked in for 12 months, white-glove onboarding, and the ability to shape the product roadmap.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Free to use during the beta period","No credit card required","Direct access to the StreetOps team","Founder pricing locked for 12 months post-launch"].map((pt) => (
                <div key={pt} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(0,178,169,0.15)", border: "1px solid rgba(0,178,169,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 10, color: "var(--yellow)" }}>✓</span>
                  </div>
                  <span style={{ fontSize: 14, color: ts }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div style={{ background: isDark ? "rgba(255,255,255,0.03)" : "white", border: isDark ? "1px solid var(--border-dark)" : "1px solid #E5EAF0", borderRadius: 24, padding: "40px 36px", boxShadow: "0 24px 60px rgba(0,0,0,0.12)" }}>
            {!submitted ? (
              <>
                <h3 style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 800, fontSize: 22, color: isDark ? "white" : "#060D1B", margin: "0 0 8px" }}>Request Early Access</h3>
                <p style={{ fontSize: 14, color: ts, marginBottom: 28 }}>We'll reach out with your onboarding details within 48 hours.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input
                    type="email" placeholder="Work email address" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: isDark ? "1px solid var(--border-dark)" : "1px solid #CBD5E1", background: isDark ? "rgba(255,255,255,0.05)" : "white", color: isDark ? "white" : "#060D1B", fontSize: 14, outline: "none", fontFamily: "Inter,sans-serif" }}
                  />
                  <input
                    type="text" placeholder="Your name" 
                    style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: isDark ? "1px solid var(--border-dark)" : "1px solid #CBD5E1", background: isDark ? "rgba(255,255,255,0.05)" : "white", color: isDark ? "white" : "#060D1B", fontSize: 14, outline: "none", fontFamily: "Inter,sans-serif" }}
                  />
                  <select
                    value={role} onChange={(e) => setRole(e.target.value)}
                    style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: isDark ? "1px solid var(--border-dark)" : "1px solid #CBD5E1", background: isDark ? "var(--navy)" : "white", color: role ? (isDark ? "white" : "#060D1B") : "var(--white)", fontSize: 14, outline: "none", fontFamily: "Inter,sans-serif" }}
                  >
                    <option value="">I am a…</option>
                    <option value="company">Company Executive / Founder</option>
                    <option value="hr">HR Professional / People Lead</option>
                    <option value="team-lead">Team Lead / Manager</option>
                    <option value="team-member">Team Member</option>
                  </select>
                  <input
                    type="text" placeholder="Company name"
                    style={{ width: "100%", padding: "13px 16px", borderRadius: 10, border: isDark ? "1px solid var(--border-dark)" : "1px solid #CBD5E1", background: isDark ? "rgba(255,255,255,0.05)" : "white", color: isDark ? "white" : "#060D1B", fontSize: 14, outline: "none", fontFamily: "Inter,sans-serif" }}
                  />
                  <button
                    onClick={() => { if (email && role) setSubmitted(true); }}
                    className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: 15, borderRadius: 10 }}
                  >
                    Request Access <ArrowRight size={16} />
                  </button>
                </div>
                <p style={{ fontSize: 12, color: "var(--white)", marginTop: 16, textAlign: "center" }}>
                  By submitting, you agree to our Privacy Policy. No spam, ever.
                </p>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 800, fontSize: 22, color: isDark ? "white" : "#060D1B", margin: "0 0 12px" }}>You're on the list!</h3>
                <p style={{ fontSize: 15, color: ts, lineHeight: 1.6 }}>We'll be in touch within 48 hours with your early access details. Welcome to the future of team engagement.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Team Lead CTA Band ── */
export function TeamLeadCTA({ isDark }: { isDark: boolean }) {
  return (
    <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #006B66 0%, #00B2A9 50%, #00D9CF 100%)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: -40, right: 80, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", bottom: -60, left: 40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ fontSize: 48, marginBottom: 20 }}>👥</div>
        <h2 style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 900, fontSize: "clamp(24px, 4vw, 44px)", color: "white", margin: "0 0 16px", letterSpacing: "-0.02em", lineHeight: 1.15, maxWidth: 700 }}>
          Ready to take control of your team's engagement?
        </h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 560, margin: "0 0 36px", lineHeight: 1.65 }}>
          Stop leading blind. Join team leads using Paige to build teams that are engaged, performing, and built to last.
        </p>
        <a href="#early-access" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 32px", background: "white", color: "#006B66", fontWeight: 700, fontSize: 15, borderRadius: 10, textDecoration: "none", fontFamily: "DM Sans,sans-serif", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}>
          Join as a Team Lead <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

/* ── WhatsApp Widget ── */
export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="wa-widget" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
      {isOpen && (
        <div className="wa-popup">
          <div style={{ background: "#075E54", padding: "16px 16px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontWeight: 800, fontFamily: "DM Sans,sans-serif", fontSize: 16 }}>P</span>
              </div>
              <div>
                <div style={{ color: "white", fontWeight: 700, fontSize: 14 }}>Paige Support</div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 11 }}>Online · Replies instantly</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.7)", cursor: "pointer" }}><X size={16} /></button>
          </div>
          <div style={{ padding: "16px", background: "#ECE5DD" }}>
            <div style={{ background: "white", borderRadius: "0 12px 12px 12px", padding: "10px 14px", marginBottom: 14, boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
              <p style={{ fontSize: 13.5, color: "#1A1A1A", margin: 0, lineHeight: 1.5 }}>
                👋 Hi there! I'm here to help you learn more about Paige. Ask me anything about the platform, pricing, or getting early access!
              </p>
              <p style={{ fontSize: 11, color: "#888", margin: "6px 0 0", textAlign: "right" }}>Just now ✓✓</p>
            </div>
            <a
              href="https://wa.me/2348000000000?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Paige%20by%20StreetOps"
              target="_blank" rel="noopener noreferrer"
              style={{ display: "block", width: "100%", padding: "12px", background: "#25D366", color: "white", textAlign: "center", borderRadius: 10, fontWeight: 600, fontSize: 14, textDecoration: "none", transition: "background 0.2s" }}
            >
              Start Chat on WhatsApp →
            </a>
          </div>
        </div>
      )}

      {!isOpen && showBubble && (
        <div style={{ background: "white", borderRadius: 14, boxShadow: "0 8px 24px rgba(0,0,0,0.15)", padding: "10px 14px", maxWidth: 200, position: "relative" }}>
          <button onClick={() => setShowBubble(false)} style={{ position: "absolute", top: -8, right: -8, width: 20, height: 20, borderRadius: "50%", background: "#9CA3AF", border: "none", cursor: "pointer", color: "white", fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
          <p style={{ fontSize: 12.5, color: "#374151", margin: 0, fontWeight: 500 }}>💬 Questions? Chat with us!</p>
        </div>
      )}

      <button className="wa-btn" onClick={() => { setIsOpen(!isOpen); setShowBubble(false); }} aria-label="Chat on WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.02L7.55 18.85L4.43 19.65L5.24 16.61L5.05 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.51 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 13.98C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.31C14.22 13.51 13.78 14.02 13.61 14.19C13.43 14.37 13.26 14.39 13.01 14.27C12.76 14.15 11.96 13.89 11.01 13.04C10.26 12.37 9.77 11.54 9.62 11.29C9.46 11.04 9.6 10.9 9.73 10.78C9.84 10.67 10.01 10.47 10.13 10.3C10.24 10.15 10.29 10.03 10.37 9.86C10.45 9.7 10.41 9.53 10.35 9.41C10.29 9.29 9.77 8.06 9.56 7.56C9.36 7.07 9.15 7.14 9 7.13C8.86 7.13 8.7 7.13 8.53 7.33Z"/>
        </svg>
      </button>
    </div>
  );
}

/* ── Footer ── */
export function Footer({ isDark }: { isDark: boolean }) {
  const footerLinks = {
    Products: [
      { label: "Paige — Team Engagement Platform", href: "#" },
      { label: "StreetOps Workshops", href: "#" },
      { label: "Engagement Frameworks", href: "#" },
      { label: "People Analytics Dashboard", href: "#" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Contact Us", href: "#contact" },
      { label: "The People Economics (Newsletter)", href: "#" },
      { label: "Careers", href: "#" },
    ],
    Legal: [
      { label: "Terms of Use", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Data Protection Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer id="contact" style={{ background: "#040A15", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
          {/* Brand column */}
          <div>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #00B2A9, #007A75)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontWeight: 900, fontSize: 18, fontFamily: "DM Sans,sans-serif" }}>P</span>
              </div>
              <div>
                <div style={{ color: "white", fontFamily: "DM Sans,sans-serif", fontWeight: 800, fontSize: 20, lineHeight: 1 }}>Paige</div>
                <div style={{ color: "#6B80A0", fontSize: 10, letterSpacing: "0.06em" }}>by StreetOps</div>
              </div>
            </a>
            <p style={{ fontSize: 14, color: "#6B80A0", lineHeight: 1.7, maxWidth: 300, marginBottom: 24 }}>
              Paige is the team engagement intelligence platform helping organisations build high-performing, psychologically safe teams — one pulse check at a time.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { label: "Li", href: "#" },
                { label: "Tw", href: "#" },
                { label: "Ig", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href} style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6B80A0", fontSize: 12, fontWeight: 700, textDecoration: "none", transition: "background 0.2s, color 0.2s" }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <h4 style={{ color: "white", fontFamily: "DM Sans,sans-serif", fontWeight: 700, fontSize: 14, marginBottom: 20, marginTop: 0 }}>{cat}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} style={{ fontSize: 13.5, color: "#6B80A0", textDecoration: "none", transition: "color 0.15s", lineHeight: 1.4, display: "block" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#00B2A9")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#6B80A0")}
                    >{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 28 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13, color: "#4A5568", margin: 0 }}>
            © {new Date().getFullYear()} StreetOps. All rights reserved. Paige is a product of StreetOps Ltd.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy","Terms of Use","Cookie Policy"].map((link) => (
              <a key={link} href="#" style={{ fontSize: 13, color: "#4A5568", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00B2A9")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4A5568")}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
