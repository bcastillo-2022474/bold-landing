import Image from "next/image";
import { RightIcon } from "@/components/right-icon";
import { Button } from "@/components/ui/button";
import plant from "../../../public/plant.svg";

export function IntroSection() {
  return (
    <section className="flex flex-col items-center py-20 w-full gap-5 px-30 bg-[#F8F9FA]">
      <h1 className="text-5xl font-bold leading-12 flex flex-col text-center">
        <span>Build Faster.</span>
        <span className="relative isolate">
          <span className="bg-yellow-300 w-full absolute left-0 bottom-0 -rotate-1 h-[1.5ch] scale-110"></span>
          <span className="z-10 relative">Scale Smarter.</span>
        </span>
      </h1>
      <p className="text-center font-inter text-[#6B7280] items-center max-w-[60ch]">
        Custom Slack apps that automate your workflows — delivered through a
        simple monthly subscription. No contracts. No per-project chaos.
      </p>
      <div className="flex justify-around max-w-[60ch] gap-5 text-lg">
        <Button className="flex gap-2 items-center text-yellow-300 cursor-pointer">
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
        <Button className="text-black bg-white border-3 cursor-pointer">
          <span>See it in action</span>
        </Button>
      </div>
      <Image
        src={plant}
        alt="Plant Image"
        width={800}
        className="shadow-2xl rounded-2xl mt-10"
      />
    </section>
  );
}
