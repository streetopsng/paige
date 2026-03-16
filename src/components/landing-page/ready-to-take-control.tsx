import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const ReadyToTakeControl = () => {
  return (
    <section className=" px-2 py-16 md:px-8  bg-primary">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem]  py-10 text-center text-foreground  md:px-10 ">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-semibold text-3xl leading-[0.95]  md:text-5xl">
            Ready to take control of your team&apos;s engagement?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-foreground/80 font-body md:text-base">
            Stop leading blind. Join team leads using Paige to build teams that
            are engaged, performing, and built to last.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              size="lg"
              className="h-11 cursor-pointer rounded-lg bg-white px-6 font-body text-sm font-semibold text-primary hover:bg-background/90"
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
