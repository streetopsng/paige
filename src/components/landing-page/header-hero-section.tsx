"use client";
import { ArrowRight, Moon, Sun, SunMedium } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useEffect, useRef } from "react";
import ScrollReveal from "../framer-motion-animations/scroll-reveal";

gsap.registerPlugin(ScrambleTextPlugin);

const navItems = ["Features", "About Us", "Contact Us"];
const HeaderHeroSection = () => {
  const { setTheme, theme } = useTheme();

  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      duration: 2,
      scrambleText: {
        text: " Team Engagement",
        chars: "upperAndLowerCase",
        speed: 0.5,
      },
    });
  }, []);
  return (
    <main className="relative min-h-screen overflow-hidden  text-foreground">
      <div
        className="absolute inset-x-0 top-0 h-px bg-border"
        aria-hidden="true"
      />
      <div
        className="hero-gradient  absolute inset-0 opacity-70"

        // style={{
        //   background:
        //     "radial-gradient(circle at 50% 36%, hsl(var(--hero-glow) / 0.22), transparent 28%), linear-gradient(180deg, transparent, hsl(var(--background)))",
        // }}
      />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-4">
        <div>
          <a
            href="#home"
            className="inline-flex flex-col"
            aria-label="Paige home"
          >
            <span className="text-3xl font-semibold tracking-tight text-primary">
              Paige
            </span>
            <span className="text-[0.65rem]   text-muted-foreground">
              by{" "}
              <span className="font-medium text-[0.8rem] text-muted-foreground">
                StreetOps
              </span>
            </span>
          </a>
        </div>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <div
          onClick={() => {
            if (theme == "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
          className="flex items-center gap-3"
        >
          <button type="button" className="cursor-pointer">
            {theme == "light" ? (
              <Moon className=" h-4 w-4" />
            ) : (
              <Sun className=" h-4 w-4" />
            )}
          </button>
          <Button size="lg">Get Early Access</Button>
        </div>
      </header>

      <section
        id="home"
        className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-4xl flex-col items-center justify-center px-6 pb-20 pt-14 text-center md:px-4 md:pt-8"
      >
        <ScrollReveal direction="down">
          <div className="mb-8 inline-flex rounded-full border border-primary bg-transparent px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary">
            Behavioural Technology Driven
          </div>
        </ScrollReveal>

        <h1 className="max-w-4xl text-balance text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[5.5rem]">
          <span className="font-semibold" ref={textRef}></span>
          <br />
          <ScrollReveal variant="fade">
            <span className="font-semibold text-primary">
              you can count on.
            </span>
          </ScrollReveal>
        </h1>
        <ScrollReveal direction="up">
          <p className="mt-8 max-w-2xl text-balance text-base leading-6 text-muted-foreground md:text-xl">
            Every team lead needs a tool that gives them deep insight into how
            their team is doing, what they need to thrive, and what to do to
            boost team engagement from anywhere and anytime.
          </p>
        </ScrollReveal>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Button className="min-w-52 bg-primary py-5">
            Get early access
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default HeaderHeroSection;
