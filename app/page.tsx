"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import { EarlyAccessCTA, TeamLeadCTA, WhatsAppWidget, Footer } from "./components/CTAAndFooter";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      <main>
        <Hero isDark={isDark} />
        <Problem isDark={isDark} />
        <Solution isDark={isDark} />
        <HowItWorks isDark={isDark} />
        <Features isDark={isDark} />
        <Testimonials isDark={isDark} />
        <EarlyAccessCTA isDark={isDark} />
        <TeamLeadCTA isDark={isDark} />
        <FAQ isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
      <WhatsAppWidget />
    </>
  );
}
