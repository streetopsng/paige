import ScrollReveal from "../framer-motion-animations/scroll-reveal";

interface ProblemCard {
  label: string;
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  description: string;
}

const problemCards: ProblemCard[] = [
  {
    label: "TEAM-LEAD STRUGGLE",
    title: "Team leads are leading blind.",
    description:
      "They're held accountable for team performance and morale - but given zero tools to measure either. By the time problems surface, the damage is already done.",
  },
  {
    label: "TEAM MEMBERS",
    title: "Team members are invisible.",
    description:
      "Feedback goes into annual surveys and disappears. The result? Silent disengagement- teams mentally check out long before they physically leave.",
  },
  {
    label: "HR LEAD",
    title: "HR is always reacting, never predicting.",
    description:
      "HR leaders are charged with building culture - but their primary tool remains the annual survey. Too infrequent, too generic, and always too late to prevent attrition.",
  },
  {
    label: "COMPANIES",
    title: "Companies invest in perks, not insights.",
    description:
      "Organizations spend billions on team events, wellness benefits, and culture initiatives - without measuring whether any of it moves the needle.",
  },
];

const stats: StatItem[] = [
  {
    value: "71%",
    description:
      "of managers say they lack tools to assess team engagement effectively",
  },
  {
    value: "85%",
    description: "of employees globally are disengaged at work.",
  },
  {
    value: "$11.3T",
    description: "average cost to replace a single mid-level employee.",
  },
  {
    value: "$8.8T",
    description: "lost globally each year to employee disengagement.",
  },
];

const ProblemSection = () => {
  return (
    <section className="min-h-screen bg-background py-16  flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6 px-4 md:px-8">
          <ScrollReveal direction="down">
            <span className="bg-[#FFBF9D66]  dark:bg-transparent border-primary border text-primary text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full ">
              THE PROBLEM
            </span>
          </ScrollReveal>
        </div>

        {/* Heading */}
        <ScrollReveal delay={0.5} direction="up">
          <h1 className="text-center font-semibold  text-2xl sm:text-3xl md:text-4xl   mb-12 text-foreground px-4 md:px-8">
            The engagement crisis is real,
            <br />
            and devastatingly expensive.
          </h1>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 px-4 md:px-8">
          {problemCards.map((card, index) => (
            <ScrollReveal
              key={card.label}
              variant="fade"
              delay={index > 0 ? 1 - 0.7 : index}
              direction={index % 3 == 0 ? "right" : "left"}
            >
              <div
                key={card.label}
                className="bg-[#FFBF9D66] dark:bg-[#161412] border border-primary rounded-lg p-6 md:p-8"
              >
                <span className="text-primary text-xs font-semibold tracking-widest uppercase ">
                  {card.label}
                </span>
                <h3 className=" text-xl md:text-2xl mt-2 mb-3 text-card-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed ">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4  rounded-sm overflow-hidden mx-4 lg:mx-0 md:px-0 bg-[#FFBF9D66] dark:bg-[#161412]">
          {stats.map((stat, i) => (
            <ScrollReveal
              key={i}
              delay={i > 0 ? 1 - 0.7 : i}
              direction={i % 3 == 0 ? "right" : "left"}
            >
              <div
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

export default ProblemSection;
