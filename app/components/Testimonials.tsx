"use client";

const testimonials = [
  { quote:"StreetOps ran a team engagement workshop for our sales department and the results were immediate. Paige feels like the natural digital extension of that work — exactly what we'd been looking for.", name:"Adaeze Okonkwo", title:"Head of People & Culture", company:"FinServe Nigeria", initials:"AO", color:"#00B2A9" },
  { quote:"Our team leads had no visibility into how their teams were really doing. After StreetOps' engagement programme, they started asking the right questions. A platform like Paige would make that transformation 3x faster.", name:"Tunde Adesanya", title:"Chief Operating Officer", company:"TechBridge Africa", initials:"TA", color:"#7B5CF5" },
  { quote:"The data StreetOps shared about disengagement costs was staggering. When Paige launches, we're first in line — this is exactly what our 200-person organisation needs to stay competitive.", name:"Ngozi Eze", title:"Director of Talent", company:"Meridian Consulting Group", initials:"NE", color:"#FF6640" },
  { quote:"The team at StreetOps genuinely understands the African workplace. Their frameworks are grounded in our realities, not copied from Silicon Valley. I'm excited for Paige to bring that to a digital platform.", name:"Emeka Ibeh", title:"VP of Human Resources", company:"Apex Group", initials:"EI", color:"#00B2A9" },
  { quote:"After StreetOps worked with our management team, retention improved by 22% in 6 months. If Paige can operationalise even half of what they teach, it'll be a game-changer for HR teams across the continent.", name:"Funke Adeleke", title:"HR Manager", company:"Pinnacle Telecoms", initials:"FA", color:"#7B5CF5" },
  { quote:"As a team lead, I was sceptical about engagement tools. But seeing what StreetOps did with our group changed my mind. Paige is the tool I wish I'd had from day one of leading a team.", name:"Chukwuemeka Nwosu", title:"Engineering Team Lead", company:"DataCore Solutions", initials:"CN", color:"#FF6640" },
];

export default function Testimonials({ isDark }: { isDark: boolean }) {
  const bg = isDark ? "var(--navy)" : "#FFFFFF";
  const tc = isDark ? "white" : "#060D1B";
  const ts = isDark ? "#94A8C4" : "#475569";

  return (
    <section id="testimonials" style={{ background: bg, padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 64px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>💬 Testimonials</div>
          <h2 style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", color: tc, margin: "0 0 16px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            What leaders say about<br /><span style={{ color: "var(--yellow)" }}>StreetOps' engagement work.</span>
          </h2>
          <p style={{ fontSize: 17, color: ts, lineHeight: 1.65, margin: 0 }}>
            Businesses that have experienced StreetOps' engagement programmes share why they're excited for Paige.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div style={{ display: "flex", gap: 2 }}>
                {[...Array(5)].map((_,s) => <span key={s} style={{ color: "var(--yellow)", fontSize: 14 }}>★</span>)}
              </div>
              <blockquote style={{ fontSize: 14.5, color: ts, lineHeight: 1.7, margin: 0, fontStyle: "italic", flex: 1 }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 8, borderTop: "1px solid var(--border-dark)" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 13, fontFamily: "DM Sans,sans-serif", flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: tc, fontFamily: "DM Sans,sans-serif" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: ts }}>{t.title}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
