import Image from "next/image";
import { RightIcon } from "@/components/right-icon";
import { Button } from "@/components/ui/button";
import plant from "../../../public/plant.svg";

export function IntroSection() {
  return (
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
        <Button className="flex gap-2 items-center text-yellow-300 cursor-pointer justify-center">
          <span>Start Building</span>
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.175 9H-9.64664e-06V7H12.175L6.57499 1.4L7.99999 4.76837e-07L16 8L7.99999 16L6.57499 14.6L12.175 9Z"
                fill="#FFD200"
              />
            </svg>
          </div>
        </Button>
        <Button className="text-black bg-white border-3 cursor-pointer justify-center">
          <span>See it in action</span>
        </Button>
      </div>
      <Image
        src={plant}
        alt="Plant Image"
        width={800}
        className="shadow-2xl rounded-2xl mt-5 md:mt-10 w-full max-w-[800px] h-auto"
      />
    </section>
  );
}
