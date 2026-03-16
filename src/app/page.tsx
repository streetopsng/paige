import FeaturesSection from "@/components/features-section";
import EarlyAccessSection from "@/components/landing-page/early-access-section";
import FaqSection from "@/components/landing-page/faq";
import FooterSection from "@/components/landing-page/footer-section";
import HeaderHeroSection from "@/components/landing-page/header-hero-section";
import ProblemSection from "@/components/landing-page/problem";
import ReadyToTakeControl from "@/components/landing-page/ready-to-take-control";
import SolutionSection from "@/components/landing-page/solution-section";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeaderHeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <EarlyAccessSection />
      <FaqSection />
      <ReadyToTakeControl />
      <FooterSection />
    </div>
  );
}
