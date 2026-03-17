"use client";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

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
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const benefits = [
  "Free to use during the beta period",
  "No credit card required",
  "Direct access to the StreetOps team",
  "Founder pricing locked for 12 months post-launch",
];

const EarlyAccessSection = () => {
  const [formData, setFormData] = useState({
    workEmail: "",
    yourName: "",
    whoIAm: "",
    companyName: "",
  });

  const [isLoading, setIsloading] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.companyName ||
      !formData.yourName ||
      !formData.whoIAm ||
      !formData.workEmail
    ) {
      toast.error("empty field, please fill the form");
      return;
    }
    try {
      setIsloading(true);

      const res = await fetch("/api/email/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const response = await res.json();
      if (response.success) {
        toast.success(
          "Your request was successfully sent , we'll get back to you promptly",
        );
        setFormData({
          workEmail: "",
          yourName: "",
          whoIAm: "",
          companyName: "",
        });
      } else if (response.status == 400) {
        toast.error("an error occured");
      } else {
        toast.error(
          "sorry, currently unable to process your request at this, kinldy try again later or reach out to us via our email: streetopsng@gmail.com",
        );
      }
    } catch (error) {
      toast.error("something went wrong");
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <section className="bg-background  py-6 md:px-8 ">
      <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2rem]   md:px-10  lg:grid-cols-2 lg:items-start lg:gap-10">
        <div className="max-w-xl px-4">
          <ScrollReveal delay={0.5} direction="up">
            <span className="bg-[#FFBF9D66] dark:bg-[#5C3D0066] text-primary font-poppins     text-xs font-semibold tracking-widest uppercase px-4 py-1 rounded-full ">
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
            <p className="mt-5 max-w-lg text-md  font-mont">
              Join our early access list today. Beta users get founder pricing
              locked in for 12 months, white-glove onboarding, and the ability
              to shape the product roadmap.
            </p>
          </ScrollReveal>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start text-sm  gap-3   font-mont text-muted-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4  " />
                <span className=" text-sm font-light ">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md bg-[#FFE5D8] dark:bg-[#201E1D] p-5 md:p-6">
          <div>
            <h3 className=" text-3xl text-inverse-foreground">
              Request Early Access
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-inverse-muted font-mont">
              We&apos;ll reach out with your onboarding details within 48 hours.
            </p>
          </div>

          <form
            className="mt-6 space-y-3"
            id="early-access"
            // aria-label="Early access request form"
            onSubmit={handleSubmit}
          >
            <Input
              type="email"
              value={formData.workEmail}
              onChange={(e) =>
                setFormData({ ...formData, workEmail: e.target.value })
              }
              placeholder="Work email address"
              className="h-12 focus:border-none border-border/40 bg-white dark:bg-[#2A231E]   placeholder:text-inverse-muted focus-visible:ring-primary"
            />
            <Input
              type="name"
              placeholder="Your name"
              value={formData.yourName}
              onChange={(e) =>
                setFormData({ ...formData, yourName: e.target.value })
              }
              className="h-12  focus:border-none border-border/40 bg-white dark:bg-[#2A231E] placeholder:text-inverse-muted focus-visible:ring-primary"
            />
            <Select
              onValueChange={(value) =>
                setFormData({ ...formData, whoIAm: value })
              }
            >
              <SelectTrigger className="min-h-12  border-border/40  bg-[#F0F0F0] dark:bg-[#181614] focus:ring-primary w-full">
                <SelectValue placeholder="I am a..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="founder">Founder / Executive</SelectItem>
                <SelectItem value="executive">Executive</SelectItem>
                <SelectItem value="hr-leader">HR Leader</SelectItem>
                <SelectItem value="people-manager">People Manager</SelectItem>
                <SelectItem value="team-memeber">Team Member</SelectItem>
                <SelectItem value="Others">Others</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="text"
              placeholder="Company name"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              className="h-12 border-border/40 bg-white dark:bg-[#2A231E] placeholder:text-inverse-muted focus-visible:ring-primary"
            />

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="mt-2 h-12 w-full rounded-xl font-body text-primary-foreground cursor-pointer font-mont"
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    Request Access
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
            {/* <Button
              type="submit"
              size="lg"
              className="mt-2 h-12 w-full rounded-xl font-body text-primary-foreground cursor-pointer"
            >
              Request Access
              <ArrowRight className="h-4 w-4" />
            </Button> */}
          </form>

          <p className="mt-5 text-center text-xs leading-relaxed text-inverse-muted font-mont">
            By submitting, you agree to our Privacy Policy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;
