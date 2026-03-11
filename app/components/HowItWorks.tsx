"use client";

const steps = [
  { step:1, role:"Team Lead",      icon:"🎯", title:"Team Lead Identifies Need",          desc:"A team lead recognises declining performance or wants to proactively monitor team engagement — before issues escalate." },
  { step:2, role:"Team Lead / HR", icon:"🚀", title:"Opens Paige Account",               desc:"Account creation takes less than 3 minutes. No complex onboarding, no IT involvement, no credit card required." },
  { step:3, role:"Team Lead",      icon:"🏗️", title:"Creates Team Identity",            desc:"Set up the team profile, define engagement dimensions, and choose pulse check frequency — weekly is recommended for best results." },
  { step:4, role:"Team Lead",      icon:"📩", title:"Invites Team Members",              desc:"Send invitations by email or a shareable link. Team members join in seconds. No app download required." },
  { step:5, role:"Team Member",    icon:"👋", title:"Team Member Onboards",             desc:"Members complete a 60-second onboarding, set their preferences, and understand how Paige works before their first pulse." },
  { step:6, role:"Team Member",    icon:"💬", title:"Team Takes Weekly Pulse Check",     desc:"Every week, members receive a 5-question anonymous pulse check. Takes under 2 minutes. Responses are anonymised and aggregated." },
  { step:7, role:"Team Lead",      icon:"📊", title:"Team Lead Reviews Health Report",   desc:"Paige surfaces a visual team health report scoring engagement across 6 dimensions — with trend lines and comparisons." },
  { step:8, role:"Team Lead",      icon:"🧰", title:"Apply Engagement Frameworks",       desc:"Paige's AI recommends targeted engagement playbooks for each underperforming dimension — practical, evidence-backed actions." },
  { step:9, role:"Team Lead / HR", icon:"📈", title:"Track Performance Over Time",       desc:"Watch engagement scores shift week over week. See what's working and celebrate meaningful improvements with the team." },
  { step:10, role:"All",           icon:"🔄", title:"Repeat — Build a Living Culture",   desc:"The magic of Paige is the cadence. Weekly repetition transforms engagement from a one-off event into a sustainable culture practice." },
];

const roleColors: Record<string, string> = {
  "Team Lead": "var(--red)",
  "Team Lead / HR": "var(--blue)",
  "Team Member": "var(--yellow)",
  "All": "var(--yellow)",
};

export default function HowItWorks({ isDark }: { isDark: boolean }) {
  const bg = isDark ? "var(--navy)" : "var(--grey)";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "#FFFFFF";
  const border = isDark ? "1px solid var(--border-dark)" : "1px solid rgba(0,0,0,0.08)";
  const tc = isDark ? "white" : "var(--black)";
  const ts = isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)";

  return (
    <section id="how-it-works" style={{ background: bg, padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 72px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>⚡ How It Works</div>
          <h2 style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 52px)", color: tc, margin: "0 0 16px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            From first pulse check<br />to thriving team culture.
          </h2>
          <p style={{ fontSize: 17, color: ts, lineHeight: 1.65, margin: 0 }}>
            From account creation to your first actionable team insight in under 10 minutes.
          </p>
        </div>

        {/* Steps: Sinch-style numbered list with connecting line */}
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {steps.map((step, idx) => (
            <div key={step.step} style={{ display: "flex", gap: 28, marginBottom: idx < steps.length - 1 ? 8 : 0 }}>
              {/* Left: number + line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--yellow)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 15, fontFamily: "DM Sans,sans-serif", boxShadow: "0 0 20px rgba(255,190,60,0.35)", zIndex: 2 }}>
                  {step.step}
                </div>
                {idx < steps.length - 1 && (
                  <div style={{ width: 2, flex: 1, minHeight: 32, background: "linear-gradient(to bottom, var(--yellow), rgba(255,190,60,0.1))", margin: "4px 0" }} />
                )}
              </div>
              {/* Right: card */}
              <div style={{ flex: 1, background: cardBg, border, borderRadius: 16, padding: "20px 24px", marginBottom: 8, display: "flex", gap: 16, alignItems: "flex-start", transition: "border-color 0.2s" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${roleColors[step.role]}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                  {step.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                    <h3 style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 700, fontSize: 16, color: tc, margin: 0 }}>{step.title}</h3>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 100, color: roleColors[step.role], background: `${roleColors[step.role]}15` }}>
                      {step.role}
                    </span>
                  </div>
                  <p style={{ fontSize: 14, color: ts, margin: 0, lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
