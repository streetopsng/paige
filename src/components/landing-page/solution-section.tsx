import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import SpanDisplay from "./comp/span-display";

interface AudienceCard {
  id: string;
  title: string;
  description: string;
}

interface ValueCard {
  id: string;
  title: string;
  description: string;
}

const audienceCards: AudienceCard[] = [
  {
    id: "01",
    title: "For Organizations",
    description:
      "Reduce attrition and build a data-driven culture that attracts and retains top talent.",
  },
  {
    id: "02",
    title: "For HR Teams",
    description:
      "Replace slow annual surveys with real-time, continuous engagement intelligence.",
  },
  {
    id: "03",
    title: "For Team Leads",
    description:
      "Know your team's mood and morale before issues escalate into crises.",
  },
  {
    id: "04",
    title: "For Team Members",
    description:
      "Share how you truly feel, anonymously, and watch leadership take action.",
  },
];

const valueCards: ValueCard[] = [
  {
    id: "01",
    title: "Reduce Costly Attrition",
    description:
      "Identify flight risks before they become departures. Save tens of thousands per role retained.",
  },
  {
    id: "02",
    title: "Culture As A Competitive Advantage",
    description:
      "Identify high-risk hires before they become departures. Save tens of thousands per role retained.",
  },
  {
    id: "03",
    title: "Org-Wide Visibility",
    description:
      "Aggregate engagement across all teams and departments in one executive dashboard.",
  },
  {
    id: "04",
    title: "Prove People ROI",
    description:
      "Tie engagement initiatives to business outcomes and measure actual impact.",
  },
  {
    id: "05",
    title: "Industry Benchmarks",
    description:
      "See how your engagement compares to peers in your sector and company size cohort.",
  },
  {
    id: "06",
    title: "Compliance Ready",
    description:
      "GDPR-compliant, SOC2-ready. Your team data is protected and never misused.",
  },
  {
    id: "07",
    title: "Leadership Accountability",
    description:
      "Engagement score tied to team leads create visible accountability at every management layer.",
  },
  {
    id: "08",
    title: "Faster Culture Transformation",
    description:
      "Weekly cadence accelerates change. Don't wait 12 months to know if it's working.",
  },
];

const tabs = [
  "For Organizations",
  "For HR Teams & Leads",
  "For Team Leads",
  "For Team Members",
];

const SolutionSection = () => {
  return (
    <section className="bg-background px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="mx-auto max-w-3xl text-center">
          <SpanDisplay content="THE SOLUTION" />
          <h2 className="text-4xl leading-none text-foreground sm:text-5xl md:text-6xl">
            Introducing <span className="text-primary">Paige</span>
            <span className="mt-2 block text-3xl italic sm:text-4xl md:text-5xl">
              by StreetOps
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg font-body">
            The first team engagement intelligence platform built for the
            realities of modern work — continuous, actionable, and designed for
            every layer of your organization.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {audienceCards.map((card) => (
            <article
              key={card.id}
              className="rounded-[1.25rem] border  bg-[#FFBF9D66] dark:bg-[#241E18] border-primary p-5  transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-full border border-primary text-[11px] font-semibold text-primary font-body">
                {card.id}
              </div>
              <h3 className="text-lg leading-tight text-card-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-body">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-y-2  items-center md:justify-evenly justify-between ">
          {tabs.map((tab, index) => (
            <span
              key={tab}
              className={`rounded-full border md:w-1/5 w-[45%] text-center  text-[11px] md:font-semibold uppercase   py-1 ${
                "border-border bg-background text-foreground"
                // index === 0
                //   ? "border-primary bg-primary text-primary-foreground"
                //   : "border-border bg-background text-foreground"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="  gap-8 lg:flex lg:justify-between items-end lg:gap-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
              Build a culture that retains top talent and drives performance
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground font-body">
              Organizations using Paige gain full visibility into team
              engagement across the entire company — unlocking proactive,
              data-driven people management at scale.
            </p>
          </div>

          <div className="lg:justify-self-end md:pt-0 pt-6">
            <Button
              size="lg"
              className="rounded-full px-8 font-body text-base shadow-sm cursor-pointer"
            >
              Get early access
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map((card) => (
            <article
              key={card.id}
              className="bg-[#FFBF9D66] dark:bg-[#241E18] border-primary rounded-[1.25rem] border  p-5 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="border-primary mb-4 flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold text-primary font-body">
                {card.id}
              </div>
              <h3 className="text-lg leading-tight text-card-foreground">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-body">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
