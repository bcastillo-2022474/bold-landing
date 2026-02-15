import type { JSX } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

function Chip({ title }: { title: string }) {
  return (
    <span className="rounded-full px-5 py-2 border border-muted/30">
      {title}
    </span>
  );
}

export function CustomersSection() {
  const chips = [
    "Startups",
    "Fin-techs",
    "Law Firms",
    "Saas Companies",
    "E-commerce",
    "Agencies",
  ];

  return (
    <div className="w-full gap-3 md:gap-5 bg-section-bg flex flex-col items-center pb-10 px-4">
      <h3 className="uppercase text-muted-light font-bold text-xs md:text-sm text-center">
        Helping Industry leaders to automate
      </h3>
      <div className="flex flex-wrap justify-center gap-3 md:gap-5">
        {chips.map((chip) => (
          <Chip title={chip} key={chip} />
        ))}
      </div>
    </div>
  );
}

// features description, is available or not
type Feature = [string, boolean];

type Plan = {
  title: string;
  pricePerMonth: JSX.Element;
  features: Feature[];
  isPopular: boolean;
};

function Icon({ isAvailable }: { isAvailable: boolean }) {
  const color = isAvailable ? "#22C55E" : "#9CA3AF";

  return (
    <svg
      width="15"
      height="20"
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.18333 12.6833L10.2958 8.57083L9.47917 7.75417L6.18333 11.05L4.52083 9.3875L3.70417 10.2042L6.18333 12.6833ZM7 15.8333C6.19306 15.8333 5.43472 15.6802 4.725 15.374C4.01528 15.0677 3.39792 14.6521 2.87292 14.1271C2.34792 13.6021 1.93229 12.9847 1.62604 12.275C1.31979 11.5653 1.16667 10.8069 1.16667 10C1.16667 9.19306 1.31979 8.43472 1.62604 7.725C1.93229 7.01528 2.34792 6.39792 2.87292 5.87292C3.39792 5.34792 4.01528 4.93229 4.725 4.62604C5.43472 4.31979 6.19306 4.16667 7 4.16667C7.80694 4.16667 8.56528 4.31979 9.275 4.62604C9.98472 4.93229 10.6021 5.34792 11.1271 5.87292C11.6521 6.39792 12.0677 7.01528 12.374 7.725C12.6802 8.43472 12.8333 9.19306 12.8333 10C12.8333 10.8069 12.6802 11.5653 12.374 12.275C12.0677 12.9847 11.6521 13.6021 11.1271 14.1271C10.6021 14.6521 9.98472 15.0677 9.275 15.374C8.56528 15.6802 7.80694 15.8333 7 15.8333ZM7 14.6667C8.30278 14.6667 9.40625 14.2146 10.3104 13.3104C11.2146 12.4062 11.6667 11.3028 11.6667 10C11.6667 8.69722 11.2146 7.59375 10.3104 6.68958C9.40625 5.78542 8.30278 5.33333 7 5.33333C5.69722 5.33333 4.59375 5.78542 3.68958 6.68958C2.78542 7.59375 2.33333 8.69722 2.33333 10C2.33333 11.3028 2.78542 12.4062 3.68958 13.3104C4.59375 14.2146 5.69722 14.6667 7 14.6667Z"
        fill={color}
      />
    </svg>
  );
}

function Card({ title, pricePerMonth, features, isPopular }: Plan) {
  const normal =
    "w-full max-w-[500px] lg:max-w-none lg:min-w-[320px] lg:aspect-39/43 p-6 md:p-10 flex flex-col gap-5 justify-around shadow rounded-2xl bg-white relative";
  const popular = "lg:scale-120 border-2 border-yellow-300";

  return (
    <article className={cn(normal, isPopular && popular)}>
      {isPopular && (
        <div className="absolute w-full left-0 -top-3 flex justify-center">
          <span className="bg-yellow-300 rounded-full px-5 py-1 text-[9px] uppercase font-bold">
            Most Popular
          </span>
        </div>
      )}
      <div>
        <h3 className="font-grotesk font-bold text-base md:text-lg">{title}</h3>
        {pricePerMonth}
      </div>
      <div className="flex flex-col gap-2">
        {features.map(([feature, isAvailable]: Feature) => (
          <div className="flex gap-3" key={feature}>
            <Icon isAvailable={isAvailable} />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <Button
        className={cn(
          "text-black rounded-xl cursor-pointer",
          isPopular ? "bg-yellow-300" : "border-2 bg-white",
        )}
      >
        Get Started
      </Button>
    </article>
  );
}

export function PricingSection() {
  const plans: Plan[] = [
    {
      title: "Starter",
      pricePerMonth: (
        <h3 className="font-inter font-bold text-3xl md:text-4xl">
          <span>$1,499</span>
          <span className="text-base md:text-lg text-muted font-normal">
            /mo
          </span>
        </h3>
      ),
      features: [
        ["One request at a time", true],
        ["48-hour turnaround", true],
        ["Unlimited revisions", true],
        ["Dedicated Project Manager", false],
      ],
      isPopular: false,
    },
    {
      title: "Growth",
      pricePerMonth: (
        <h3 className="font-inter font-bold text-3xl md:text-4xl">
          <span>$3,499</span>
          <span className="text-base md:text-lg text-muted font-normal">
            /mo
          </span>
        </h3>
      ),
      features: [
        ["Two request at a time", true],
        ["24-hour turnaround", true],
        ["Priority support", true],
        ["Dedicated Project Manager", true],
      ],
      isPopular: true,
    },
    {
      title: "Enterprise",
      pricePerMonth: (
        <h3 className="font-inter font-bold text-3xl md:text-4xl">Custom</h3>
      ),
      features: [
        ["Multiple workspaces", true],
        ["Custom SLA", true],
        ["On-site workshops", true],
        ["Strategy consulting", true],
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="py-10 md:py-20 w-full gap-6 md:gap-10 px-4 md:px-10 lg:px-30 bg-section-bg flex flex-col items-center">
      <CustomersSection />
      <div className="border-t w-full border-border-light"></div>
      <div className="flex flex-col gap-6 md:gap-10 items-center w-full px-4 md:px-10 lg:px-30 py-10">
        <div className="flex flex-col gap-1 items-center text-center">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Simple, predictable pricing.
          </h2>
          <h4 className="text-muted text-sm md:text-base">
            cancel or pause at any time
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-20 pt-6 md:pt-10 w-full lg:w-auto items-center lg:items-stretch">
          {plans.map((plan, i) => (
            <Card
              isPopular={plan.isPopular}
              key={plan.title}
              title={plan.title}
              pricePerMonth={plan.pricePerMonth}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
