import ScrollReveal from "./framer-motion-animations/scroll-reveal";
import SpanDisplay from "./landing-page/comp/span-display";

interface StatItem {
  value: string;
  description: string;
}
const featureCards = [
  {
    title: "6-Dimension Engagement Scoring",
    description:
      "Measure psychological safety, workload, recognition, role clarity, team cohesion, and career growth in every pulse check.",
  },
  {
    title: "Anonymous Pulse Checks",
    description:
      "Capture protected, honest feedback with lightweight anonymous check-ins built for trust and repeated participation.",
  },
  {
    title: "AI Engagement Recommendations",
    description:
      "Turn engagement signals into practical next steps with recommendations tailored to each team’s specific challenges.",
  },
  {
    title: "Trend Analysis & Benchmarks",
    description:
      "Track engagement movement over time and compare team health against internal and industry benchmark patterns.",
  },
  {
    title: "Org-Wide Dashboard",
    description:
      "Give HR leaders a single, aggregated view across teams and departments for faster, better people decisions.",
  },
  {
    title: "2-Minute Weekly Cadence",
    description:
      "Keep participation high with concise, weekly pulse checks your team can complete in minutes, not meetings.",
  },
  {
    title: "Mobile-First Experience",
    description:
      "Make every check-in effortless with a mobile-friendly flow designed for distributed and deskless teams.",
  },
  {
    title: "Custom Engagement Frameworks",
    description:
      "Adapt question sets and measurement logic to fit your culture, leadership model, and business priorities.",
  },
  {
    title: "Automated Reminders & Nudges",
    description:
      "Maintain response consistency with tasteful reminders that improve completion without feeling intrusive.",
  },
  {
    title: "Exportable Reports",
    description:
      "Download polished summaries and executive-ready reports for reviews, planning, and leadership updates.",
  },
  {
    title: "Integration Ready",
    description:
      "Connect insights into the tools your teams already use so engagement data becomes part of the operating rhythm.",
  },
  {
    title: "Privacy & Compliance Ready",
    description:
      "Built with strong data protection expectations in mind so sensitive team feedback stays secure and governable.",
  },
];

const stats: StatItem[] = [
  {
    value: "$300B+",
    description: "Spent globally on employee engagement programmes annually.",
  },
  {
    value: "3x",
    description: "Higher revenue growth for companies with engaged workforces",
  },
  {
    value: "40%",
    description: "Reduction in absenteeism with high engagement scores",
  },
  {
    value: "21%",
    description:
      "Higher profitability for companies in the top engagement quartile",
  },
];

const FeaturesSection = () => {
  return (
    <section className="  py-6 md:px-8  bg-[#FFE5D8] dark:bg-transparent">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[2rem]   px-3   md:px-8 ">
        <header className="mx-auto max-w-3xl text-center">
          <ScrollReveal direction="down">
            <SpanDisplay content="PLATFORM FEATURES" />
          </ScrollReveal>
          <ScrollReveal delay={0.5} direction="down">
            <h2 className="font-heading text-2xl leading-none text-foreground sm:text-5xl md:text-4xl">
              Everything your organization needs to
              <span className="mt-3 block text-primary">
                engage, measure, and thrive.
              </span>
            </h2>
          </ScrollReveal>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground font-body md:text-lg">
            Built for teams of 5 to 5,000, every feature is designed to reduce
            friction and maximize insight.
          </p>
        </header>
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4 ">
          {featureCards.map((feature, i) => (
            <ScrollReveal
              key={i}
              // delay={i > 1 ? i - 0.8 : i}
              direction={i % 3 == 0 ? "up" : "down"}
            >
              <article
                key={feature.title}
                className="min-h-42 h-full rounded-2xl border border-border bg-card px-5 py-3 shadow-sm transition-transform duration-200 hover:-translate-y-1 dark:bg-[#241E18] w-full"
              >
                <h3 className="font-semibold  leading-tight text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-body">
                  {feature.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <header className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <SpanDisplay content="MARKET REALITY" />
          </ScrollReveal>
          <ScrollReveal duration={0.5} direction="up">
            <h2 className="font-semibold text-2xl leading-none text-foreground sm:text-5xl md:text-4xl">
              The numbers behind the urgency
            </h2>
          </ScrollReveal>
        </header>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4  rounded-sm overflow-hidden mx-4 lg:mx-0 md:px-0 bg-[#FFBF9D66] dark:bg-[#161412]">
          {stats.map((stat, i) => (
            <ScrollReveal
              key={i}
              // delay={i > 1 ? i - 0.5 : i}
              direction={i % 3 == 0 ? "up" : "down"}
            >
              <div
                key={i}
                className={`bg-stat p-6 text-center ${
                  i < stats.length - 1 ? "border-r border-border" : ""
                }`}
              >
                <p className="font-semibold text-3xl md:text-4xl text-primary mb-2">
                  {stat.value}
                </p>
                <p className=" text-muted-foreground text-xs leading-relaxed ">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
