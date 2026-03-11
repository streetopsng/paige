"use client";
import { ArrowRight, TrendingUp, Users, BarChart2, CheckCircle } from "lucide-react";

interface HeroProps { isDark: boolean; }

const logos = ["FinServe","TechBridge","Meridian","Apex Group","Pinnacle","DataCore","Orbit HR","PeopleCo","NexaGroup","StrataCorp"];

const usecaseCards = [
  { icon:"🏢", color:"#00B2A9", title:"For Organisations", desc:"Reduce attrition and build a data-driven culture that attracts and retains top talent.", href:"#companies" },
  { icon:"📋", color:"#7B5CF5", title:"For HR Teams", desc:"Replace slow annual surveys with real-time, continuous engagement intelligence.", href:"#hr-teams" },
  { icon:"👥", color:"#FF6640", title:"For Team Leads", desc:"Know your team's mood and morale before issues escalate into crises.", href:"#team-leads" },
  { icon:"🙋", color:"#00B2A9", title:"For Team Members", desc:"Share how you truly feel, anonymously — and watch leadership take action.", href:"#team-members" },
];

export default function Hero({ isDark }: HeroProps) {
  const tc = isDark ? "text-white" : "text-[#060D1B]";
  const ts = isDark ? "text-[#94A8C4]" : "text-[#475569]";

  return (
    <section className="hero-bg" style={{ paddingTop: 80, paddingBottom: 0 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Hero Text Block (Sinch: centred, large, two CTAs) ── */}
        <div style={{ textAlign: "center", paddingTop: 80, paddingBottom: 64, maxWidth: 860, margin: "0 auto" }}>
          <div className="section-label fade-up" style={{ justifyContent: "center" }}>
            🚀 Now in Beta — Limited Early Access
          </div>
          <h1 className={`fade-up fade-up-1 ${tc}`} style={{ fontFamily: "Epilogue,sans-serif", fontWeight: 900, fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.08, margin: "0 0 24px", letterSpacing: "-0.03em" }}>
            Team engagement<br />
            <span style={{ color: "var(--teal)" }}>you can count on.</span>
          </h1>
          <p className={`fade-up fade-up-2 ${ts}`} style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.65, maxWidth: 620, margin: "0 auto 36px" }}>
            Paige is the AI-powered pulse check platform that helps HR leads and managers measure, understand, and improve team health — weekly, continuously, and effortlessly.
          </p>
          <div className="fade-up fade-up-3" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
            <a href="#early-access" className="btn-primary pulse-ring" style={{ fontSize: 15, padding: "14px 28px" }}>
              Get Early Access <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="btn-outline" style={{ fontSize: 15, padding: "14px 28px" }}>
              See how it works
            </a>
          </div>
          <div className="fade-up fade-up-4" style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", justifyContent: "center" }}>
            {["No credit card required","2-minute team setup","GDPR compliant"].map((pt) => (
              <span key={pt} className={ts} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500 }}>
                <CheckCircle size={13} style={{ color: "var(--teal)" }} /> {pt}
              </span>
            ))}
          </div>
        </div>

        {/* ── Dashboard Visual (Sinch: feature screenshot or mockup) ── */}
        <div className="float-anim" style={{ maxWidth: 900, margin: "0 auto 0", position: "relative" }}>
          <div className="dash-card" style={{ borderRadius: 20, overflow: "hidden", padding: 0 }}>
            {/* Header bar */}
            <div style={{ background: "linear-gradient(90deg, var(--navy-3), var(--navy-4))", padding: "14px 20px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid var(--border-dark)" }}>
              <div style={{ display: "flex", gap: 6 }}>
                {["#FF5F57","#FFBD2E","#28C840"].map((c) => <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />)}
              </div>
              <div style={{ flex: 1, height: 28, background: "rgba(255,255,255,0.05)", borderRadius: 6, marginLeft: 8, display: "flex", alignItems: "center", paddingLeft: 12 }}>
                <span style={{ fontSize: 11, color: "var(--slate)", fontFamily: "monospace" }}>app.paige.ai/dashboard</span>
              </div>
            </div>
            {/* Dashboard body */}
            <div style={{ padding: "24px", background: isDark ? "var(--navy-2)" : "#F8FAFD" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
                {[
                  { label: "Overall Engagement", value: "78%", delta: "+6%", icon: <BarChart2 size={16} />, color: "#00B2A9" },
                  { label: "Active Team Members", value: "24/26", delta: "92%", icon: <Users size={16} />, color: "#7B5CF5" },
                  { label: "Trend (4 weeks)", value: "↑ 12pts", delta: "improving", icon: <TrendingUp size={16} />, color: "#FF6640" },
                ].map((s) => (
                  <div key={s.label} className="dash-card" style={{ textAlign: "center", padding: "16px 12px" }}>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 8, color: s.color }}>{s.icon}</div>
                    <div style={{ fontSize: 22, fontWeight: 800, fontFamily: "Epilogue,sans-serif", color: isDark ? "white" : "#060D1B", lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: 10, color: "var(--slate-light)", marginTop: 4, marginBottom: 2 }}>{s.label}</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: s.color }}>{s.delta}</div>
                  </div>
                ))}
              </div>
              <div className="dash-card" style={{ padding: "20px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, fontFamily: "Epilogue,sans-serif", color: isDark ? "white" : "#060D1B" }}>Engagement Dimensions — Engineering Team</span>
                  <span style={{ fontSize: 11, color: "var(--teal)", fontWeight: 600, background: "rgba(0,178,169,0.1)", padding: "3px 10px", borderRadius: 100 }}>Week 12</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { label: "Psychological Safety", value: 84, color: "#00B2A9" },
                    { label: "Workload Balance", value: 61, color: "#FF6640" },
                    { label: "Recognition & Growth", value: 73, color: "#7B5CF5" },
                    { label: "Team Cohesion", value: 91, color: "#00B2A9" },
                    { label: "Role Clarity", value: 79, color: "#7B5CF5" },
                    { label: "Career Development", value: 68, color: "#FF6640" },
                  ].map((d) => (
                    <div key={d.label}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                        <span style={{ fontSize: 12, color: isDark ? "var(--slate-light)" : "#475569", fontWeight: 500 }}>{d.label}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: isDark ? "white" : "#060D1B" }}>{d.value}%</span>
                      </div>
                      <div className="prog-track">
                        <div className="prog-fill" style={{ width: `${d.value}%`, background: d.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating notification chips */}
          <div style={{ position: "absolute", top: 80, right: -20, background: isDark ? "var(--navy-3)" : "white", border: "1px solid rgba(0,178,169,0.3)", borderRadius: 14, padding: "10px 14px", boxShadow: "0 12px 30px rgba(0,0,0,0.25)", maxWidth: 180 }} className="hide-mobile">
            <div style={{ fontSize: 10, color: "var(--teal)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>🔔 Alert</div>
            <div style={{ fontSize: 12, color: isDark ? "white" : "#060D1B", fontWeight: 600 }}>Workload score dropped</div>
            <div style={{ fontSize: 11, color: "var(--slate-light)" }}>Action recommended</div>
          </div>

          <div style={{ position: "absolute", bottom: 100, left: -20, background: isDark ? "var(--navy-3)" : "white", border: "1px solid rgba(123,92,245,0.3)", borderRadius: 14, padding: "10px 14px", boxShadow: "0 12px 30px rgba(0,0,0,0.25)", maxWidth: 180 }} className="hide-mobile">
            <div style={{ fontSize: 10, color: "#7B5CF5", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>✅ Pulse Complete</div>
            <div style={{ fontSize: 12, color: isDark ? "white" : "#060D1B", fontWeight: 600 }}>24 responses in</div>
            <div style={{ fontSize: 11, color: "var(--slate-light)" }}>92% participation</div>
          </div>
        </div>

        {/* ── Trusted by (Sinch: logo marquee strip) ── */}
        <div style={{ padding: "60px 0 0", borderTop: "1px solid var(--border-dark)", marginTop: 64 }}>
          <p style={{ textAlign: "center", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--slate)", marginBottom: 28 }}>
            Trusted by forward-thinking organisations
          </p>
          <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
            <div className="marquee-track">
              {[...logos, ...logos].map((l, i) => (
                <span key={i} style={{ fontSize: 14, fontWeight: 700, fontFamily: "Epilogue,sans-serif", color: "var(--slate)", letterSpacing: "0.04em", whiteSpace: "nowrap", opacity: 0.6 }}>{l}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Audience use-case cards (Sinch: 4-card grid after hero) ── */}
        <div id="about" style={{ padding: "80px 0" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Built For Every Layer of Your Organisation</div>
            <h2 className={tc} style={{ fontFamily: "Epilogue,sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4vw, 42px)", margin: 0, letterSpacing: "-0.02em" }}>
              One platform. Every stakeholder.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {usecaseCards.map((c) => (
              <a key={c.title} href={c.href} className="usecase-card" style={{ textDecoration: "none", display: "block", padding: 28 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${c.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>{c.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: c.color, marginBottom: 8 }}>
                  {c.title}
                </div>
                <h3 className={tc} style={{ fontFamily: "Epilogue,sans-serif", fontWeight: 700, fontSize: 18, margin: "0 0 10px", lineHeight: 1.3 }}>{c.title}</h3>
                <p className={`${isDark ? "text-[#94A8C4]" : "text-[#475569]"}`} style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                <div style={{ marginTop: 16, color: c.color, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 4 }}>
                  Learn more <ArrowRight size={13} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
