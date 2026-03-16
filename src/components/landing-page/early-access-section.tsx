import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SpanDisplay from "./comp/span-display";
import ScrollReveal from "../framer-motion-animations/scroll-reveal";

const benefits = [
  "Free to use during the beta period",
  "No credit card required",
  "Direct access to the StreetOps team",
  "Founder pricing locked for 12 months post-launch",
];

const EarlyAccessSection = () => {
  return (
    <section className="bg-background  py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2rem]   py-8   md:px-10 md:py-10 lg:grid-cols-2 lg:items-start lg:gap-10">
        <div className="max-w-xl px-4">
          <ScrollReveal delay={0.5} direction="up">
            <span className="bg-[#FFBF9D66]  dark:bg-transparent border-primary border  text-primary text-xs font-semibold tracking-widest uppercase px-4 py-1 rounded-full ">
              Beta Access — Limited Spots
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.7} direction="down">
            <h2 className="mt-6 font-semibold text-3xl leading-none  md:text-5xl">
              Be first to experience <span className="text-primary">Paige</span>{" "}
              by StreetOps.
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="down">
            <p className="mt-5 max-w-lg text-lg  text-inverse-muted font-body">
              Join our early access list today. Beta users get founder pricing
              locked in for 12 months, white-glove onboarding, and the ability
              to shape the product roadmap.
            </p>
          </ScrollReveal>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-sm  font-body"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4  " />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md bg-[#FFE5D8] dark:bg-[#201E1D] p-5 md:p-6">
          <div>
            <h3 className="font-heading text-3xl text-inverse-foreground">
              Request Early Access
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-inverse-muted font-body">
              We&apos;ll reach out with your onboarding details within 48 hours.
            </p>
          </div>

          <form
            className="mt-6 space-y-3"
            aria-label="Early access request form"
          >
            <Input
              type="email"
              placeholder="Work email address"
              className="h-12 focus:border-none border-border/40 bg-white dark:bg-[#2A231E]   placeholder:text-inverse-muted focus-visible:ring-primary"
            />
            <Input
              type="text"
              placeholder="Your name"
              className="h-12  focus:border-none border-border/40 bg-white dark:bg-[#2A231E] placeholder:text-inverse-muted focus-visible:ring-primary"
            />
            <Select>
              <SelectTrigger className="min-h-12  border-border/40  bg-[#F0F0F0] dark:bg-[#181614] focus:ring-primary w-full">
                <SelectValue placeholder="I am a..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="founder">Founder / Executive</SelectItem>
                <SelectItem value="hr">HR Leader</SelectItem>
                <SelectItem value="manager">People Manager</SelectItem>
                <SelectItem value="employee">Team Member</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="text"
              placeholder="Company name"
              className="h-12 border-border/40 bg-white dark:bg-[#2A231E] placeholder:text-inverse-muted focus-visible:ring-primary"
            />

            <Button
              type="button"
              size="lg"
              className="mt-2 h-12 w-full rounded-xl font-body text-primary-foreground cursor-pointer"
            >
              Request Access
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="mt-5 text-center text-xs leading-relaxed text-inverse-muted font-body">
            By submitting, you agree to our Privacy Policy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
