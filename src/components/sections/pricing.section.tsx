import { BookingModal } from "@/components/booking-modal";
import {
  PRICING_ADDONS,
  PRICING_FINE_PRINT,
  PRICING_PLANS,
  PRICING_RUN,
  type PricingPlan,
} from "@/constants/site";
import { cn } from "@/utils/cn";

function Check({ available = true }: { available?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="7" fill={available ? "#FFD200" : "#E5E7EB"} />
      <path
        d="M4 7L6 9L10 5"
        stroke={available ? "black" : "#9CA3AF"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <article
      className={cn(
        "w-full p-8 flex flex-col gap-6 rounded-[32px] bg-white relative border border-black/5 h-full",
        plan.isPopular && "border-2 border-[#FFD200]",
      )}
    >
      {plan.isPopular && (
        <div className="absolute w-full left-0 -top-3 flex justify-center">
          <span className="bg-[#FFD200] rounded-full px-5 py-1 text-[10px] uppercase font-bold tracking-wider">
            Most Popular
          </span>
        </div>
      )}
      <div>
        <h3 className="font-bold text-base md:text-lg">{plan.name}</h3>
        <p className="font-bold text-3xl md:text-4xl mt-1">
          <span>{plan.priceLabel}</span>
          <span className="text-base text-muted font-normal">
            {plan.cadenceLabel}
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {plan.features.map((feature) => (
          <div className="flex items-start gap-3" key={feature}>
            <Check />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <BookingModal
        variant="link"
        label={plan.ctaLabel}
        style={plan.isPopular ? "black" : "outline-light"}
        className="w-full text-center justify-center mt-auto"
      />
    </article>
  );
}

export function PricingPlans() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full pt-4">
        {PRICING_PLANS.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>

      <article className="w-full rounded-[32px] border border-black/5 p-8 flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex flex-col gap-3 flex-1">
          <div>
            <h3 className="font-bold text-base md:text-lg">
              {PRICING_RUN.name}
            </h3>
            <p className="font-bold text-3xl md:text-4xl mt-1">
              <span>{PRICING_RUN.priceLabel}</span>
              <span className="text-base text-muted font-normal">
                {PRICING_RUN.cadenceLabel}
              </span>
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {PRICING_RUN.features.map((feature) => (
              <li className="flex items-start gap-3" key={feature}>
                <Check />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <BookingModal
          variant="link"
          label={PRICING_RUN.ctaLabel}
          style="outline-light"
          className="text-center justify-center shrink-0"
        />
      </article>

      <article className="w-full rounded-[32px] border border-black/5 p-8 flex flex-col gap-4">
        <h3 className="font-bold text-base md:text-lg">Add-ons</h3>
        <ul className="flex flex-col gap-3">
          {PRICING_ADDONS.map((addon) => (
            <li className="flex items-start gap-3" key={addon}>
              <Check />
              <span className="text-sm">{addon}</span>
            </li>
          ))}
        </ul>
      </article>

      <p className="text-sm text-muted text-center leading-relaxed max-w-[70ch] mx-auto">
        {PRICING_FINE_PRINT}
      </p>
    </div>
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full px-4 md:px-10 lg:px-30 flex flex-col items-center gap-10 py-16 md:py-24"
    >
      <div className="flex flex-col gap-2 items-center text-center max-w-[62ch]">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Pay for capacity, not hours.
        </h2>
        <p className="text-muted text-sm md:text-base leading-relaxed">
          Start with a pilot. Then choose how many requests you want in progress
          at once. Monthly, cancel or pause anytime, no minimums.
        </p>
      </div>
      <PricingPlans />
    </section>
  );
}
