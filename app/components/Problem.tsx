"use client";

interface ProblemProps { isDark: boolean; }

const marketStats = [
  { value: "$8.8T", label: "Lost globally to disengagement each year", source: "Gallup 2023", color: "#FF6640" },
  { value: "85%", label: "Of employees are disengaged at work worldwide", source: "Gallup 2023", color: "#7B5CF5" },
  { value: "18%", label: "Productivity loss from actively disengaged staff", source: "Gallup", color: "#FF6640" },
  { value: "51%", label: "Of employees are actively job searching right now", source: "Gallup", color: "#00B2A9" },
  { value: "58%", label: "Of voluntary departures cite poor culture", source: "SHRM", color: "#7B5CF5" },
  { value: "$11.3K", label: "Average cost to replace a mid-level employee", source: "SHRM 2023", color: "#00B2A9" },
];

const problems = [
  {
    persona: "Team Lead", icon: "👨‍💼", color: "#FF6640",
    title: "Team leads are leading blind.",
    description: "They're held accountable for team performance and morale — but given zero tools to measure either. By the time problems surface, the damage is already done.",
    painPoints: ["No real-time visibility into team morale between 1-on-1s", "Can't spot who's burning out until they resign", "Engagement conversations feel guesswork without data", "No evidence to back resource or restructuring requests"],
    stat: "71%", statLabel: "of managers say they lack tools to assess team engagement effectively",
  },
  {
    persona: "Team Member", icon: "🧑‍💻", color: "#7B5CF5",
    title: "Team members feel invisible.",
    description: "Feedback goes into annual surveys and disappears. The result? Silent disengagement — teams mentally check out long before they physically leave.",
    painPoints: ["Annual surveys feel pointless — nothing ever changes", "No safe, anonymous space to express real concerns", "Burnout builds silently without anyone noticing", "Lack of recognition slowly erodes motivation"],
    stat: "85%", statLabel: "of employees globally are disengaged at work (Gallup 2023)",
  },
  {
    persona: "HR Lead", icon: "📊", color: "#00B2A9",
    title: "HR is always reacting, never predicting.",
    description: "HR leaders are charged with building culture — but their primary tool remains the annual survey. Too infrequent, too generic, and always too late to prevent attrition.",
    painPoints: ["Annual surveys miss real-time shifts in culture", "Attrition costs spiral before HR can intervene", "No department-level granularity in engagement data", "Culture initiatives can't be measured or iterated"],
    stat: "$11.3K", statLabel: "average cost to replace a single mid-level employee (SHRM, 2023)",
  },
  {
    persona: "Companies", icon: "🏢", color: "#00B2A9",
    title: "Companies invest in perks, not insights.",
    description: "Organisations spend billions on team events, wellness benefits, and culture initiatives — without measuring whether any of it moves the needle.",
    painPoints: ["$8.8T lost globally to disengaged employees every year", "Low engagement reduces productivity by up to 18%", "58% of voluntary departures are culture-related", "Board-level culture reports are based on gut feel, not data"],
    stat: "$8.8T", statLabel: "lost globally each year to employee disengagement (Gallup)",
  },
];

export default function Problem({ isDark }: ProblemProps) {
  const bg = isDark ? "var(--navy-2)" : "#F4F6FA";
  const cardBg = isDark ? "var(--navy-3)" : "#FFFFFF";
  const border = isDark ? "1px solid var(--border-dark)" : "1px solid #E5EAF0";
  const tc = isDark ? "white" : "#060D1B";
  const ts = isDark ? "#94A8C4" : "#475569";

  return (
    <section id="problem" style={{ background: bg, padding: "96px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: "center", color: "#FF6640", background: "rgba(255,102,64,0.08)", borderColor: "rgba(255,102,64,0.22)" }}>
            ⚠️ The Problem
          </div>
          <h2 style={{ fontFamily: "Epilogue,sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 52px)", color: tc, margin: "0 0 16px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            The engagement crisis is real.<br />And devastatingly expensive.
          </h2>
          <p style={{ fontSize: 18, color: ts, maxWidth: 580, margin: "0 auto", lineHeight: 1.6 }}>
            Every day, companies lose billions to a problem they acknowledge but rarely measure.
          </p>
        </div>

        {/* Market stats strip (Sinch-style horizontal stats) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 72 }}>
          {marketStats.map((s) => (
            <div key={s.label} style={{ background: cardBg, border, borderRadius: 16, padding: "24px 20px", borderLeft: `4px solid ${s.color}` }}>
              <div style={{ fontSize: 32, fontWeight: 900, fontFamily: "Epilogue,sans-serif", color: s.color, lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: ts, lineHeight: 1.5, marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: "var(--slate)", fontWeight: 600 }}>— {s.source}</div>
            </div>
          ))}
        </div>

        {/* ── Problem cards (Sinch: alternating split layout) ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {problems.map((p, idx) => (
            <div key={p.persona} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, background: cardBg, border, borderRadius: 24, overflow: "hidden", flexDirection: idx % 2 === 0 ? "row" : "row-reverse" as any }}>
              {/* Color accent panel */}
              <div style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}08)`, padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", borderRight: idx % 2 === 0 ? border : "none", borderLeft: idx % 2 !== 0 ? border : "none", order: idx % 2 !== 0 ? 1 : 0 }}>
                <div>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>{p.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: p.color, marginBottom: 12 }}>{p.persona}</div>
                  <h3 style={{ fontFamily: "Epilogue,sans-serif", fontWeight: 800, fontSize: "clamp(20px, 2.5vw, 28px)", color: tc, margin: "0 0 16px", lineHeight: 1.2 }}>{p.title}</h3>
                  <p style={{ fontSize: 15, color: ts, lineHeight: 1.65, margin: 0 }}>{p.description}</p>
                </div>
                <div style={{ marginTop: 32, background: `${p.color}15`, border: `1px solid ${p.color}30`, borderRadius: 14, padding: "20px 24px" }}>
                  <div style={{ fontSize: 36, fontWeight: 900, fontFamily: "Epilogue,sans-serif", color: p.color, lineHeight: 1 }}>{p.stat}</div>
                  <div style={{ fontSize: 13, color: ts, marginTop: 6, lineHeight: 1.5 }}>{p.statLabel}</div>
                </div>
              </div>
              {/* Pain points panel */}
              <div style={{ padding: "48px 40px", order: idx % 2 !== 0 ? 0 : 1 }}>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--slate)", marginBottom: 24 }}>Key Pain Points</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {p.painPoints.map((pt) => (
                    <div key={pt} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(255,102,64,0.1)", border: "1px solid rgba(255,102,64,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <span style={{ fontSize: 12, color: "#FF6640" }}>✕</span>
                      </div>
                      <p style={{ fontSize: 15, color: ts, margin: 0, lineHeight: 1.55 }}>{pt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .prob-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
