"use client";
import { ArrowRight } from "lucide-react";

interface SolutionProps { isDark: boolean; }

const corePillars = [
  { num:"01", title:"Weekly Pulse Checks", sub:"Short science-backed questions under 2 minutes. High completion, rich insights, zero survey fatigue.", color:"#00B2A9" },
  { num:"02", title:"6 Engagement Dimensions", sub:"Measure safety, workload, recognition, clarity, cohesion, and growth for a complete team health picture.", color:"#7B5CF5" },
  { num:"03", title:"AI Recommendations", sub:"Paige surfaces actionable engagement playbooks based on your team's unique engagement profile.", color:"#FF6640" },
  { num:"04", title:"Anonymous & Safe", sub:"Team members respond anonymously. Psychological safety is baked into the platform's architecture — not just policy.", color:"#00B2A9" },
];

function BenefitSection({ id, audience, icon, color, header, sub, benefits, isDark, ctaHref }: {
  id: string; audience: string; icon: string; color: string; header: string; sub: string;
  benefits: {title:string;sub:string}[]; isDark: boolean; ctaHref: string;
}) {
  const tc = isDark ? "white" : "#060D1B";
  const ts = isDark ? "#94A8C4" : "#475569";
  const sectionBg = isDark ? "var(--navy)" : "#FFFFFF";
  const altBg = isDark ? "var(--navy-2)" : "#F4F6FA";

  return (
    <div id={id} style={{ padding: "96px 0", background: id === "companies" || id === "team-members" ? sectionBg : altBg }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header — Sinch style: left header + right CTA */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "flex-start", marginBottom: 56 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", color, background: `${color}12`, border: `1px solid ${color}25`, borderRadius: 100, padding: "5px 14px", marginBottom: 16 }}>
              <span>{icon}</span> For {audience}
            </div>
            <h2 style={{ fontFamily: "Epilogue,sans-serif", fontWeight: 900, fontSize: "clamp(24px, 3.5vw, 40px)", color: tc, margin: "0 0 16px", lineHeight: 1.15, letterSpacing: "-0.025em", maxWidth: 600 }}>{header}</h2>
            <p style={{ fontSize: 16, color: ts, lineHeight: 1.65, margin: 0, maxWidth: 540 }}>{sub}</p>
          </div>
          <div style={{ paddingTop: 8 }}>
            <a href={ctaHref} className="btn-primary" style={{ background: color, whiteSpace: "nowrap" as const }}>
              Get Started <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* 8-benefit grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card">
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <span style={{ fontSize: 13, fontWeight: 800, fontFamily: "Epilogue,sans-serif", color }}>{String(i+1).padStart(2,"0")}</span>
              </div>
              <h4 style={{ fontFamily: "Epilogue,sans-serif", fontWeight: 700, fontSize: 15, color: tc, margin: "0 0 8px" }}>{b.title}</h4>
              <p style={{ fontSize: 13.5, color: ts, margin: 0, lineHeight: 1.6 }}>{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Solution({ isDark }: SolutionProps) {
  const tc = isDark ? "white" : "#060D1B";
  const ts = isDark ? "#94A8C4" : "#475569";
  const cardBg = isDark ? "var(--navy-3)" : "#F8FAFC";
  const border = isDark ? "1px solid var(--border-dark)" : "1px solid #E5EAF0";

  const companyB = [
    { title:"Reduce Costly Attrition", sub:"Identify flight risks before they become departures. Save tens of thousands per role retained." },
    { title:"Culture as a Competitive Advantage", sub:"Build a measurable, data-backed culture strategy that attracts and retains top talent." },
    { title:"Org-Wide Visibility", sub:"Aggregate engagement across all teams and departments in one executive dashboard." },
    { title:"Prove People ROI", sub:"Tie engagement initiatives to business outcomes and measure actual impact." },
    { title:"Industry Benchmarks", sub:"See how your engagement compares to peers in your sector and company size cohort." },
    { title:"Compliance Ready", sub:"GDPR-compliant, SOC2-ready. Your team's data is protected and never misused." },
    { title:"Leadership Accountability", sub:"Engagement scores tied to team leads create visible accountability at every management layer." },
    { title:"Faster Culture Transformation", sub:"Weekly cadence accelerates change. Don't wait 12 months to know if it's working." },
  ];
  const hrB = [
    { title:"Real-Time Culture Intelligence", sub:"Move beyond annual surveys to a continuous culture intelligence system that reflects today, not last year." },
    { title:"Department-Level Insights", sub:"Drill into any team or department to spot culture gaps before they become talent crises." },
    { title:"Proactive Attrition Prevention", sub:"Early warning signals alert HR before disengagement leads to departure." },
    { title:"Engagement Programme ROI", sub:"Track whether your wellness and culture programmes are actually moving the needle." },
    { title:"Manager Coaching Data", sub:"Use team health data to coach underperforming managers with evidence, not anecdotes." },
    { title:"Onboarding Health Monitor", sub:"Track new hire engagement from day one. Catch early disengagement in the first 90 days." },
    { title:"Board-Ready Reporting", sub:"Generate polished, data-rich engagement reports for leadership and board presentations in one click." },
    { title:"Custom Pulse Frameworks", sub:"Add custom questions aligned to your specific culture priorities or business initiatives." },
  ];
  const leadB = [
    { title:"Know Your Team's Mood", sub:"Weekly pulse scores tell you exactly how your team is feeling — no awkward conversations required." },
    { title:"Spot Burnout Early", sub:"Workload indicators flag individuals and teams at risk before burnout strikes." },
    { title:"Data-Led 1-on-1s", sub:"Walk into every 1-on-1 armed with engagement insights, not gut feel." },
    { title:"Build Psychological Safety", sub:"Track safety scores and use recommended frameworks to create a space where teams thrive." },
    { title:"Celebrate What Works", sub:"Identify your team's engagement strengths and amplify what's already working." },
    { title:"AI Action Plans", sub:"AI-generated action plans tailored to your team's specific weak engagement dimensions." },
    { title:"Track Progress Weekly", sub:"See engagement trends week over week. Know if your actions are making a real difference." },
    { title:"Reduce Team Friction", sub:"Surface workload and interpersonal issues before they fracture team cohesion." },
  ];
  const memberB = [
    { title:"Your Voice, Anonymously", sub:"Share honest feedback without fear. Anonymity is protected at the architecture level, not just policy." },
    { title:"Be Seen & Heard", sub:"Your responses directly influence how leadership allocates support and recognition." },
    { title:"2-Minute Weekly Check-In", sub:"A quick pulse that fits into any workday. No lengthy forms, no survey fatigue." },
    { title:"Personal Wellbeing Tracker", sub:"Access a personal engagement dashboard to reflect on your work health over time." },
    { title:"Engagement Transparency", sub:"See how your team's aggregate score changes over time — not just send and forget." },
    { title:"A Safer Workplace", sub:"Platforms that listen create safer workplaces. Paige holds leadership accountable." },
    { title:"Feel Valued", sub:"When engagement improves, recognition increases. Paige helps teams celebrate wins together." },
    { title:"Drive Real Change", sub:"Your data contributes directly to the decisions your company makes about culture and people." },
  ];

  return (
    <div id="solution">
      {/* Intro section */}
      <section style={{ background: isDark ? "var(--navy)" : "#FFFFFF", padding: "96px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div className="section-label">✨ The Solution</div>
              <h2 style={{ fontFamily: "Epilogue,sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 52px)", color: tc, margin: "0 0 20px", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                Introducing Paige<br /><span style={{ color: "var(--teal)" }}>by StreetOps</span>
              </h2>
              <p style={{ fontSize: 17, color: ts, lineHeight: 1.7, marginBottom: 32 }}>
                The first team engagement intelligence platform built for the realities of modern work — continuous, actionable, and designed for every layer of your organisation.
              </p>
              <p style={{ fontSize: 17, color: ts, lineHeight: 1.7, marginBottom: 40 }}>
                Stop guessing about your team's engagement. Start measuring it weekly — and watch culture transform from a feeling into a metric.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#early-access" className="btn-primary">Get Early Access <ArrowRight size={15} /></a>
                <a href="#how-it-works" className="btn-outline">See How It Works</a>
              </div>
            </div>
            {/* 4 core pillars */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {corePillars.map((p) => (
                <div key={p.num} style={{ background: cardBg, border, borderRadius: 18, padding: "24px", transition: "transform 0.2s" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, fontFamily: "Epilogue,sans-serif", color: p.color, marginBottom: 10 }}>{p.num}</div>
                  <h4 style={{ fontFamily: "Epilogue,sans-serif", fontWeight: 700, fontSize: 15, color: tc, margin: "0 0 8px" }}>{p.title}</h4>
                  <p style={{ fontSize: 13, color: ts, margin: 0, lineHeight: 1.55 }}>{p.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience benefit sections */}
      <BenefitSection id="companies"    audience="Companies"         icon="🏢" color="#00B2A9" header="Build a Culture That Retains Top Talent and Drives Performance"              sub="Organisations using Paige gain full visibility into team engagement across the entire company — enabling proactive, data-driven people management at scale."             benefits={companyB} isDark={isDark} ctaHref="#early-access" />
      <BenefitSection id="hr-teams"    audience="HR Teams & Leads"   icon="📋" color="#7B5CF5" header="Transform HR from Reactive to Predictive with Real-Time Engagement Data"   sub="Paige gives HR professionals the continuous, granular data they need to build culture programmes that actually work — and prove it to the board."                    benefits={hrB}      isDark={isDark} ctaHref="#early-access" />
      <BenefitSection id="team-leads"  audience="Team Leads"         icon="👥" color="#FF6640" header="Know Your Team Before Problems Become Crises"                              sub="Paige is your weekly team health readout — giving you the insights to lead with confidence, coach with evidence, and build teams that perform."                        benefits={leadB}    isDark={isDark} ctaHref="#early-access" />
      <BenefitSection id="team-members" audience="Team Members"      icon="🙋" color="#00B2A9" header="Your Feedback Should Actually Change Things"                              sub="Paige makes your voice count. Share how you really feel, anonymously — and watch your workplace actually respond with meaningful action."                              benefits={memberB}  isDark={isDark} ctaHref="#early-access" />
    </div>
  );
}
