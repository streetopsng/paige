"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQItem({ q, a, isDark }: { q: string; a: string; isDark: boolean }) {
  const [open, setOpen] = useState(false);
  const tc = isDark ? "white" : "#060D1B";
  const ts = isDark ? "#94A8C4" : "#475569";
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", gap: 16, textAlign: "left" }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: tc, fontFamily: "DM Sans,sans-serif", lineHeight: 1.4 }}>{q}</span>
        <span style={{ color: "var(--yellow)", flexShrink: 0 }}>{open ? <Minus size={17} /> : <Plus size={17} />}</span>
      </button>
      {open && (
        <div style={{ padding: "0 22px 18px", fontSize: 14, color: ts, lineHeight: 1.7 }}>{a}</div>
      )}
    </div>
  );
}

const faqGroups = [
  { group:"For Team Leads", icon:"👥", color:"#FF6640", faqs:[
    { q:"How long does it take to set up Paige for my team?", a:"Setup takes less than 10 minutes. You create your account, build your team profile, and invite team members via a link or email. No IT involvement required. Your first pulse check can go out within the hour." },
    { q:"Will my team members actually complete the pulse checks?", a:"Paige is designed for high completion rates. Each pulse check is 5 questions and takes under 2 minutes. Automated, friendly reminders are sent via email or in-app. Most teams see 75–90% completion rates within 3 weeks of consistent use." },
    { q:"Can I see individual responses from team members?", a:"No — and that's by design. Paige shows you aggregated team scores and trends, not individual responses. This protects anonymity and builds the psychological safety needed for honest feedback." },
    { q:"What actions should I take based on the scores?", a:"Paige's AI generates specific engagement playbooks for each dimension that needs attention. These are practical, time-boxed actions — facilitated retrospectives, 1-on-1 frameworks, workload audits, and recognition rituals tailored to your team." },
    { q:"What if my team is very small — say 5 people?", a:"Paige works for teams of any size. For very small teams (under 8 members), we aggregate anonymously at the group level to protect individual privacy while still delivering useful team insights." },
  ]},
  { group:"For HR Leads", icon:"📋", color:"#7B5CF5", faqs:[
    { q:"How does Paige differ from our existing annual engagement survey?", a:"Annual surveys are slow, infrequent, and always too late to prevent disengagement. Paige runs weekly pulse checks that take 2 minutes — delivering real-time, continuous data instead of a once-a-year snapshot that's stale on arrival." },
    { q:"Can I view data across all teams in the organisation?", a:"Yes. HR admins and senior leaders have access to an org-wide dashboard showing aggregate engagement across every team, department, and the overall company — with full drill-down capability to any level." },
    { q:"How do we handle GDPR and data privacy?", a:"Paige is fully GDPR-compliant. All responses are anonymised at collection. We do not sell or share individual data. Organisations retain ownership of their data and can request deletion at any time." },
    { q:"Can HR customise the pulse check questions?", a:"Yes. Paige ships with a science-backed default question set, but HR admins can add custom questions, modify question sets per department, and align pulse checks to specific culture initiatives or business strategies." },
    { q:"Can we integrate Paige with our existing HRIS or Slack?", a:"Integrations with Slack, Microsoft Teams, and major HRIS platforms are on our roadmap for Phase 2. Early access clients will be first to access integrations as they launch — and will have input into which integrations are prioritised." },
  ]},
  { group:"For Companies", icon:"🏢", color:"#00B2A9", faqs:[
    { q:"What ROI can we expect from using Paige?", a:"Clients typically see measurable improvements in engagement scores within 6–8 weeks. Reduced attrition (saving 33–200% of annual salary per retained employee), improved productivity, and fewer performance escalations are most commonly cited outcomes." },
    { q:"How is Paige priced?", a:"Paige is priced per seat, per month with volume discounts for companies over 50 employees. Pricing details will be confirmed at beta launch. Early access clients benefit from founder pricing locked in for 12 months post-launch." },
    { q:"Is our company's engagement data secure?", a:"Absolutely. Paige uses enterprise-grade encryption at rest and in transit. We are SOC2 Type II compliant in progress, and GDPR-ready from day one. We do not use your company's data to train AI models without explicit consent." },
    { q:"Can Paige scale with us as we grow?", a:"Paige is architected for scale — from 10-person startups to enterprise organisations of 10,000+. Multi-tier hierarchy (teams, departments, regions, entities) is supported natively in the platform." },
    { q:"What happens during the beta phase?", a:"Beta users get full platform access, white-glove onboarding support from the StreetOps team, direct access to the product roadmap, and the ability to influence feature development. Beta pricing is locked in for 12 months post-launch." },
  ]},
];

export default function FAQ({ isDark }: { isDark: boolean }) {
  const bg = isDark ? "var(--navy)" : "#F4F6FA";
  const tc = isDark ? "white" : "#060D1B";
  const ts = isDark ? "#94A8C4" : "#475569";
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <section id="faq" style={{ background: bg, padding: "96px 0" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>❓ FAQs</div>
          <h2 style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", color: tc, margin: "0 0 16px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Frequently asked questions.
          </h2>
          <p style={{ fontSize: 17, color: ts, margin: 0 }}>Everything you need to know before getting started with Paige.</p>
        </div>

        {/* Group tabs */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
          {faqGroups.map((g, i) => (
            <button
              key={g.group}
              onClick={() => setActiveGroup(i)}
              style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 100, border: `1.5px solid ${activeGroup === i ? g.color : "var(--border-dark)"}`, background: activeGroup === i ? `${g.color}15` : "transparent", color: activeGroup === i ? g.color : ts, fontWeight: 600, fontSize: 14, cursor: "pointer", transition: "all 0.2s", fontFamily: "DM Sans,sans-serif" }}
            >
              <span>{g.icon}</span> {g.group}
            </button>
          ))}
        </div>

        <div>
          {faqGroups[activeGroup].faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}
