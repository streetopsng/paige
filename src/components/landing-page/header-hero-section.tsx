"use client";
import { ArrowRight, Menu, Moon, Sun, SunMedium } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "../framer-motion-animations/scroll-reveal";

gsap.registerPlugin(ScrambleTextPlugin);

const navItems = [
  { title: "Features", link: "" },
  { title: "About Us", link: "" },
  { title: "Contact Us", link: "" },
];
const HeaderHeroSection = () => {
  const { setTheme, theme } = useTheme();

  const textRef = useRef<HTMLSpanElement>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

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
    <>
      {/* mobile menu */}
      {showMenu && (
        <section className=" md:hidden fixed w-full h-screen z-30 bg-white dark:bg-black py-4">
          <header className="flex justify-between px-4">
            <h1 className="text-primary  font-semibold text-2xl">Menu</h1>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (theme == "dark") {
                    setTheme("light");
                  } else {
                    setTheme("dark");
                  }
                }}
                type="button"
                className="cursor-pointer"
              >
                {theme == "light" ? (
                  <Moon className=" h-5 w-5" />
                ) : (
                  <Sun className=" h-5 w-5" />
                )}
              </button>
              <button className=" h-8 w-8" onClick={() => setShowMenu(false)}>
                X
              </button>
            </div>
          </header>
          <hr />

          <div className="flex flex-col px-4">
            {navItems.map((item, index) => {
              return (
                <a
                  onClick={() => setShowMenu(false)}
                  key={index}
                  href=""
                  className="mt-4 text-lg font-medium"
                >
                  {item.title}
                </a>
              );
            })}
          </div>
        </section>
      )}
      <main className="relative min-h-screen overflow-hidden  text-foreground">
        <div
          className="absolute inset-x-0 top-0 h-px bg-border"
          aria-hidden="true"
        />
        <div className="hero-gradient  absolute inset-0 opacity-70" />

        <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-4">
          <div>
            <a
              href="#home"
              className="inline-flex flex-col"
              aria-label="Paige home"
            >
              <span className="text-3xl font-semibold tracking-tight text-primary">
                Paige
              </span>
              <span className="text-[0.5rem]   text-muted-foreground">
                by{" "}
                <span className="font-medium text-[0.6rem] text-muted-foreground">
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
                key={item.title}
                href={`#${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 ">
            <button
              onClick={() => {
                if (theme == "dark") {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
              type="button"
              className="cursor-pointer md:inline hidden"
            >
              {theme == "light" ? (
                <Moon className=" h-4 w-4" />
              ) : (
                <Sun className=" h-4 w-4" />
              )}
            </button>
            <Button
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById("early-access")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
            >
              Get Early Access
            </Button>
            <Button
              type="button"
              onClick={() => setShowMenu(true)}
              className="md:hidden inline "
            >
              <Menu />
            </Button>
          </div>
        </header>

        <section
          id="home"
          className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-4xl flex-col items-center justify-center px-6 pb-20 pt-14 text-center md:px-4 md:pt-8"
        >
          <ScrollReveal direction="down">
            <div className="mb-8 inline-flex rounded-full border-2 border-primary bg-transparent px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Behavioural Technology Driven
            </div>
          </ScrollReveal>

          <h1 className="max-w-4xl text-balance text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[5.5rem]">
            <span className="font-semibold" ref={textRef}></span>
            <br />
            <ScrollReveal variant="fade">
              <span className="font-semibold text-primary ">
                you can count on.
              </span>
            </ScrollReveal>
          </h1>
          <ScrollReveal direction="up">
            <p className="mt-8 max-w-2xl  leading-6 text-muted-foreground ">
              Every team lead needs a tool that gives them deep insight into how
              their team is doing, what they need to thrive, and what to do to
              boost team engagement from anywhere and anytime.
            </p>
          </ScrollReveal>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              onClick={() => {
                document
                  .getElementById("early-access")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="min-w-52 bg-primary py-6 cursor-pointer"
            >
              Get early access
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default HeaderHeroSection;
