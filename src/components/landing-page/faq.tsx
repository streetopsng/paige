import { Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "../framer-motion-animations/scroll-reveal";

const faqCategories = ["For Team Leads", "For HR Leads", "For Companies"];

const faqItems = [
  {
    question: "Will my team members actually complete the pulse checks?",
    answer:
      "Yes — the experience is designed to take around two minutes, with lightweight prompts and a cadence that feels sustainable instead of disruptive.",
  },
  {
    question: "Can I see individual responses from team members?",
    answer:
      "No. Paige is built around trust-first feedback, so leaders see patterns, signals, and trends rather than exposing individual anonymous responses.",
  },
  {
    question: "What actions should I take based on the scores?",
    answer:
      "The platform highlights where friction is building and helps teams focus on practical next steps, whether that means manager coaching, workload changes, or clearer recognition rituals.",
  },
  {
    question: "What if my team is very small — say 5 people?",
    answer:
      "It still works well for small teams. Reporting is designed to protect anonymity while helping smaller groups establish a consistent rhythm for honest feedback and action.",
  },
];

const FaqSection = () => {
  return (
    <section className=" px-2 py-10 md:px-8  bg-[#FFE5D8] dark:bg-transparent">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-inverse px-2  text-inverse-foreground md:px-10 ">
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex justify-center">
            <ScrollReveal direction="down">
              <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary font-body">
                FAQs
              </span>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4} direction="up">
            <h2 className="font-semibold text-3xl  md:text-5xl">
              Frequently asked questions
            </h2>
          </ScrollReveal>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {faqCategories.map((category, index) => (
              <span
                key={category}
                className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] font-body ${
                  index === 0
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-black bg-inverse-card text-inverse-foreground "
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </header>

        <div className="mx-auto mt-10 max-w-4xl">
          <Accordion
            type="single"
            collapsible
            className="w-full [&>svg]:hidden"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className=""
              >
                <AccordionTrigger className="py-5 text-left text-sm text-inverse-foreground hover:no-underline font-body ">
                  <span>{item.question}</span>
                  {/* <span className=" ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border/40 bg-inverse-card text-inverse-muted">
                    <Plus className="h-3.5 w-3.5" />
                  </span> */}
                </AccordionTrigger>
                <AccordionContent className="pr-12 text-sm leading-relaxed text-inverse-muted font-body">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
