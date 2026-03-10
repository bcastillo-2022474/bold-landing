"use client";

import Image from "next/image";
import { useState } from "react";
import { BookingModal } from "@/components/booking-modal";
import { RightIcon } from "@/components/right-icon";
import { Button } from "@/components/ui/button";
import BotIcon from "../../../public/icons/bot.svg";
import HammerIcon from "../../../public/icons/hammer.svg";
import LightningIcon from "../../../public/icons/lightning.svg";
import plant from "../../../public/plant.svg";

type Workflow = {
  title: string;
  description: string;
  icon: string;
};

export function IntroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const workflows: Workflow[] = [
    {
      title: "Startup onboarding bot",
      description: "Automates employee onboarding directly inside Slack.",
      icon: BotIcon,
    },
    {
      title: "Sales recovery bot",
      description: "Recovers lost deals by triggering automated Slack alerts.",
      icon: LightningIcon,
    },
    {
      title: "Support escalation workflow",
      description: "Routes urgent tickets to the right team instantly.",
      icon: HammerIcon,
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center py-10 md:py-20 w-full gap-5 px-4 md:px-10 lg:px-30 bg-section-bg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-12 flex flex-col text-center">
          <span>Build Faster.</span>
          <span className="relative isolate">
            <span className="bg-yellow-300 w-full absolute left-0 bottom-0 -rotate-1 h-[1.5ch] scale-110"></span>
            <span className="z-10 relative">Scale Smarter.</span>
          </span>
        </h1>
        <p className="text-center font-inter text-muted items-center max-w-[60ch] px-4 text-sm md:text-base">
          Custom Slack apps that automate your workflows — delivered through a
          simple monthly subscription. No contracts. No per-project chaos.
        </p>
        <div className="flex flex-col md:flex-row justify-around max-w-[60ch] gap-3 md:gap-5 text-base md:text-lg w-full md:w-auto px-4 md:px-0">
          <BookingModal variant="button" label="Start Building" style="black" />
          <Button
            onClick={() => setIsModalOpen(true)}
            className="text-black bg-white border-3 cursor-pointer justify-center"
          >
            <span>See it in action</span>
          </Button>
        </div>
        <Image
          src={plant}
          alt="Plant Image"
          width={800}
          priority
          className="shadow-2xl rounded-2xl mt-5 md:mt-10 w-full max-w-[800px] h-auto"
        />
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl md:rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center text-center gap-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Real Slack workflows built for{" "}
                <span className="relative isolate">
                  <span className="bg-yellow-300 w-full absolute left-0 bottom-0 -rotate-1 h-[1.5ch] scale-110"></span>
                  <span className="z-10 relative">modern teams</span>
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full mt-4">
                {workflows.map((workflow) => (
                  <div
                    key={workflow.title}
                    className="flex flex-col gap-4 p-4 md:p-6 rounded-2xl border border-border-light hover:border-yellow-300 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-yellow-300 flex items-center justify-center">
                      <Image
                        src={workflow.icon}
                        alt={workflow.title}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold text-sm md:text-base">
                        {workflow.title}
                      </h3>
                      <p className="text-muted text-xs md:text-sm">
                        {workflow.description}
                      </p>
                    </div>
                    <div className="mt-2 rounded-xl bg-gray-100 aspect-video flex items-center justify-center overflow-hidden">
                      <span className="text-muted text-xs text-center px-2">
                        Demo GIF
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-3 items-center">
                <p className="text-muted text-sm">Want to see more examples?</p>
                <BookingModal variant="link" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
