"use client";

const features = [
  { icon:"📊", color:"var(--yellow)", title:"6-Dimension Engagement Scoring",  sub:"Measures psychological safety, workload, recognition, role clarity, team cohesion, and career growth in every pulse check." },
  { icon:"🔒", color:"var(--blue)", title:"Anonymous Pulse Checks",           sub:"Anonymity protected by architecture, not just policy — building the trust needed for honest, unfiltered feedback." },
  { icon:"🤖", color:"var(--yellow)", title:"AI Engagement Recommendations",    sub:"Personalised engagement playbooks — not generic tips, but targeted interventions for your team's specific challenges." },
  { icon:"📈", color:"var(--red)", title:"Trend Analysis & Benchmarks",      sub:"Track engagement week-on-week. Compare against industry benchmarks to know where your team stands globally." },
  { icon:"🏢", color:"var(--blue)", title:"Org-Wide Dashboard",               sub:"HR leaders get an aggregated view across all teams and departments from a single, powerful dashboard." },
  { icon:"⚡", color:"var(--yellow)", title:"2-Minute Weekly Cadence",          sub:"Pulse checks are short by design. No survey fatigue, no dropped participation after week 3." },
  { icon:"📱", color:"var(--red)", title:"Mobile-First Experience",          sub:"Pulse checks work seamlessly on any device. No app download required — just a link from any browser." },
  { icon:"🎯", color:"var(--blue)", title:"Custom Engagement Frameworks",     sub:"Customise question sets and dimensions to align with specific culture initiatives or business objectives." },
  { icon:"🔔", color:"var(--yellow)", title:"Automated Reminders & Nudges",    sub:"Gentle, configurable reminders ensure high participation rates. Paige nudges without nagging." },
  { icon:"📑", color:"var(--red)", title:"Exportable Reports",              sub:"Generate and export polished engagement reports for board presentations or leadership reviews in one click." },
  { icon:"🔗", color:"var(--blue)", title:"Integration Ready",              sub:"Integrates with Slack, Teams, and major HRIS platforms. Coming in Phase 2 of the beta." },
  { icon:"🌍", color:"var(--yellow)", title:"GDPR & Data Compliance",         sub:"Enterprise-grade data protection. GDPR compliant, SOC2 in progress. Your team's data stays yours." },
];

const marketStats = [
  { value: "$300B+", label: "Spent globally on employee engagement programmes annually", icon: "💸" },
  { value: "3x",     label: "Higher revenue growth for companies with engaged workforces", icon: "📈" },
  { value: "40%",    label: "Reduction in absenteeism with high engagement scores", icon: "🏥" },
  { value: "21%",    label: "Higher profitability for companies in the top engagement quartile", icon: "💰" },
];

export default function Features({ isDark }: { isDark: boolean }) {
  const bg = isDark ? "var(--navy)" : "#FFFFFF";
  const altBg = isDark ? "var(--navy)" : "var(--grey)";
  const border = isDark ? "1px solid var(--border-dark)" : "1px solid rgba(0,0,0,0.08)";
  const tc = isDark ? "white" : "var(--black)";
  const ts = isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)";

  return (
    <>
      {/* Platform features */}
      <section id="features" style={{ background: bg, padding: "96px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 64px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>🛠️ Platform Features</div>
            <h2 style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", color: tc, margin: "0 0 16px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Everything your organisation needs to<br /><span style={{ color: "var(--yellow)" }}>engage, measure, and thrive.</span>
            </h2>
            <p style={{ fontSize: 17, color: ts, lineHeight: 1.65, margin: 0 }}>
              Built for teams of 5 to 5,000. Every feature designed to reduce friction and maximise insight.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
            {features.map((f, i) => (
              <div key={i} className="benefit-card">
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${f.color}14`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 700, fontSize: 16, color: tc, margin: "0 0 8px" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: ts, margin: 0, lineHeight: 1.6 }}>{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market statistics band */}
      <section style={{ background: altBg, padding: "80px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: "center" }}>📊 Market Reality</div>
            <h2 style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 42px)", color: tc, margin: 0, letterSpacing: "-0.025em" }}>
              The numbers behind the urgency.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {marketStats.map((s) => (
              <div key={s.label} style={{ textAlign: "center", background: isDark ? "rgba(255,255,255,0.03)" : "white", border, borderRadius: 20, padding: "36px 24px" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontSize: 44, fontWeight: 900, fontFamily: "DM Sans,sans-serif", color: "var(--yellow)", lineHeight: 1, marginBottom: 12 }}>{s.value}</div>
                <p style={{ fontSize: 14, color: ts, margin: 0, lineHeight: 1.55 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
