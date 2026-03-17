"use client";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const ReadyToTakeControl = () => {
  return (
    <section className=" px-2 py-20 md:px-8  relative text-white bg-primary">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem]  text-center   md:px-10 ">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-semibold text-3xl leading-[0.95]  md:text-5xl">
            Ready to take control of your team&apos;s engagement?
          </h2>

          <p className="mx-auto mt-8  max-w-xl text-sm leading-relaxed  font-mont font-semibold md:text-base">
            Stop leading blind. Join team leads using Paige to build teams that
            are engaged, performing, and built to last.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              size="lg"
              onClick={() => {
                document
                  .getElementById("early-access")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="h-11 cursor-pointer rounded-lg bg-white px-6 font-mont text-sm font-semibold text-primary"
            >
              Get early access
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToTakeControl;
