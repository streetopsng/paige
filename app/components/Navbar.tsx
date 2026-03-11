"use client";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps { isDark: boolean; toggleTheme: () => void; }

const navItems = [
  {
    label: "Features",
    href: "#features",
    mega: {
      cols: [
        { title: "Pulse Intelligence", links: [
          { label: "Weekly Pulse Checks", href: "#features" },
          { label: "6-Dimension Scoring", href: "#features" },
          { label: "AI Recommendations", href: "#features" },
          { label: "Trend Analysis", href: "#features" },
        ]},
        { title: "Team Management", links: [
          { label: "Team Health Report", href: "#features" },
          { label: "Org-Wide Dashboard", href: "#features" },
          { label: "Engagement Frameworks", href: "#features" },
          { label: "Exportable Reports", href: "#features" },
        ]},
        { title: "Platform", links: [
          { label: "Anonymous Mode", href: "#features" },
          { label: "Mobile-First", href: "#features" },
          { label: "Integrations (Beta)", href: "#features" },
          { label: "GDPR Compliant", href: "#features" },
        ]},
      ],
    },
  },
  {
    label: "How It Works",
    href: "#how-it-works",
    mega: {
      cols: [
        { title: "For Team Leads", links: [
          { label: "Open Account", href: "#how-it-works" },
          { label: "Build Team Profile", href: "#how-it-works" },
          { label: "Invite Team Members", href: "#how-it-works" },
          { label: "Review Health Reports", href: "#how-it-works" },
        ]},
        { title: "For Team Members", links: [
          { label: "Quick Onboarding", href: "#how-it-works" },
          { label: "Weekly Pulse Check", href: "#how-it-works" },
          { label: "Anonymous Feedback", href: "#how-it-works" },
          { label: "See Your Impact", href: "#how-it-works" },
        ]},
      ],
    },
  },
  {
    label: "About Us",
    href: "#about",
    mega: {
      cols: [
        { title: "Company", links: [
          { label: "About StreetOps", href: "#about" },
          { label: "Our Mission", href: "#about" },
          { label: "The Team", href: "#about" },
        ]},
        { title: "Resources", links: [
          { label: "Blog", href: "#" },
          { label: "The People Economics (Newsletter)", href: "#" },
          { label: "Engagement Frameworks", href: "#" },
        ]},
      ],
    },
  },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.className = isDark ? "" : "light-mode";
  }, [isDark]);

  const tc = isDark ? "text-white" : "text-[#060D1B]";
  const logoSubColor = isDark ? "text-[#94A8C4]" : "text-[#6B80A0]";

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span>🚀 Paige Beta is now open — Limited early access spots available.&nbsp;
          <a href="#early-access" style={{ textDecoration: "underline", fontWeight: 600 }}>Claim your spot →</a>
        </span>
      </div>

      {/* Utility Nav */}
      <div className="utility-nav">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 20, height: 38 }}>
          <a href="#contact" style={{ fontSize: 12, fontWeight: 500, color: "var(--white)", textDecoration: "none" }}>Support</a>
          <div style={{ width: 1, height: 14, background: "var(--border-dark)" }} />
          <a href="#early-access" style={{ fontSize: 12, fontWeight: 500, color: "var(--white)", textDecoration: "none" }}>Login</a>
          <div style={{ width: 1, height: 14, background: "var(--border-dark)" }} />
          <span style={{ fontSize: 12, fontWeight: 500, color: "var(--white)" }}>EN</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="main-nav" style={{ boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #00B2A9, #007A75)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontWeight: 900, fontSize: 18, fontFamily: "DM Sans,sans-serif" }}>P</span>
            </div>
            <div>
              <div className={`${tc}`} style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 800, fontSize: 20, lineHeight: 1 }}>Paige</div>
              <div className={logoSubColor} style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.06em", lineHeight: 1.2 }}>by StreetOps</div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 36, position: "relative" }}>
            {navItems.map((item) => (
              <div key={item.label} className="nav-item" style={{ position: "relative" }}>
                <a href={item.href} className="nav-link" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  {item.label}
                  {item.mega && <ChevronDown size={13} style={{ opacity: 0.6 }} />}
                </a>
                {item.mega && (
                  <div className="mega-menu" style={{ display: "none", gap: 32 }}>
                    {item.mega.cols.map((col) => (
                      <div key={col.title} style={{ minWidth: 160 }}>
                        <div className="mega-col-title">{col.title}</div>
                        {col.links.map((link) => (
                          <a key={link.label} href={link.href} className="mega-link">{link.label}</a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={toggleTheme}
              style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid var(--border-dark)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: isDark ? "white" : "#374151", transition: "background 0.2s" }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a href="#early-access" className="btn-outline" style={{ padding: "9px 18px", fontSize: 13 }}>Log in</a>
            <a href="#early-access" className="btn-primary pulse-ring" style={{ padding: "9px 18px", fontSize: 13 }}>Get Early Access</a>
          </div>

          {/* Mobile hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="sm-show">
            <button onClick={toggleTheme} style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid var(--border-dark)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: isDark ? "white" : "#374151" }}>
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button onClick={() => setMobileOpen(true)} style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid var(--border-dark)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: isDark ? "white" : "#374151" }}>
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, background: isDark ? "var(--navy)" : "#FFFFFF", zIndex: 200, overflowY: "auto", padding: "20px 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #00B2A9, #007A75)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontWeight: 900, fontSize: 16, fontFamily: "DM Sans,sans-serif" }}>P</span>
              </div>
              <span className={tc} style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 800, fontSize: 18 }}>Paige</span>
            </a>
            <button onClick={() => setMobileOpen(false)} style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid var(--border-dark)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: isDark ? "white" : "#374151" }}>
              <X size={18} />
            </button>
          </div>
          {navItems.map((item) => (
            <div key={item.label} style={{ borderBottom: "1px solid var(--border-dark)", paddingBottom: 16, marginBottom: 16 }}>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", background: "none", border: "none", padding: "8px 0", cursor: "pointer" }}
              >
                <a href={item.href} className={`${tc}`} style={{ fontFamily: "DM Sans,sans-serif", fontWeight: 700, fontSize: 18, textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
                {item.mega && <ChevronDown size={16} style={{ color: "var(--white)", transform: mobileExpanded === item.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />}
              </button>
              {item.mega && mobileExpanded === item.label && (
                <div style={{ paddingLeft: 12, marginTop: 8 }}>
                  {item.mega.cols.map((col) => (
                    <div key={col.title} style={{ marginBottom: 12 }}>
                      <div className="mega-col-title">{col.title}</div>
                      {col.links.map((link) => (
                        <a key={link.label} href={link.href} className="mega-link" onClick={() => setMobileOpen(false)}>{link.label}</a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
            <a href="#early-access" className="btn-outline" style={{ justifyContent: "center" }} onClick={() => setMobileOpen(false)}>Log in</a>
            <a href="#early-access" className="btn-primary" style={{ justifyContent: "center" }} onClick={() => setMobileOpen(false)}>Get Early Access</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hide-mobile { display: none !important; }
          .sm-show { display: flex !important; }
        }
        @media (min-width: 901px) {
          .sm-show { display: none !important; }
          .nav-item:hover .mega-menu { display: flex !important; }
        }
      `}</style>
    </>
  );
}
