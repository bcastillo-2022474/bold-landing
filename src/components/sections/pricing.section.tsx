import type { JSX } from "react";
import { BookingModal } from "@/components/booking-modal";
import { cn } from "@/utils/cn";

function Chip({ title }: { title: string }) {
  return (
    <span className="rounded-full px-5 py-2 border border-black/10 text-sm">
      {title}
    </span>
  );
}

export function CustomersSection() {
  const chips = [
    "Founders",
    "Startup Teams",
    "Product Managers",
    "Operations Leads",
    "Growing Companies",
    "Internal Tools Teams",
  ];

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <h3 className="uppercase text-muted font-bold text-xs md:text-sm text-center tracking-wider">
        Built for teams who need ongoing development
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {chips.map((chip) => (
          <Chip title={chip} key={chip} />
        ))}
      </div>
    </div>
  );
}

type Feature = [string, boolean];

type Plan = {
  title: string;
  pricePerMonth: JSX.Element;
  features: Feature[];
  isPopular: boolean;
};

function Card({ title, pricePerMonth, features, isPopular }: Plan) {
  return (
    <article
      className={cn(
        "w-full max-w-[400px] md:max-w-[500px] lg:max-w-none lg:min-w-[280px] p-8 flex flex-col gap-6 rounded-[32px] bg-white relative border border-black/5",
        isPopular && "border-2 border-[#FFD200]",
      )}
    >
      {isPopular && (
        <div className="absolute w-full left-0 -top-3 flex justify-center">
          <span className="bg-[#FFD200] rounded-full px-5 py-1 text-[10px] uppercase font-bold tracking-wider">
            Most Popular
          </span>
        </div>
      )}
      <div>
        <h3 className="font-bold text-base md:text-lg">{title}</h3>
        {pricePerMonth}
      </div>
      <div className="flex flex-col gap-3">
        {features.map(([feature, isAvailable]: Feature) => (
          <div className="flex items-center gap-3" key={feature}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
              aria-hidden="true"
            >
              <circle
                cx="7"
                cy="7"
                r="7"
                fill={isAvailable ? "#FFD200" : "#E5E7EB"}
              />
              <path
                d="M4 7L6 9L10 5"
                stroke={isAvailable ? "black" : "#9CA3AF"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <BookingModal
        variant="link"
        label="Book a Call"
        style={isPopular ? "black" : "outline-light"}
        className="w-full text-center justify-center"
      />
    </article>
  );
}

export function PricingSection() {
  const plans: Plan[] = [
    {
      title: "Launch",
      pricePerMonth: (
        <h3 className="font-bold text-3xl md:text-4xl mt-1">
          <span>$999</span>
          <span className="text-base text-muted font-normal">/mo</span>
        </h3>
      ),
      features: [
        ["1 Slack workflow automation activo", true],
        ["Slack workspace setup", true],
        ["1 integración (CRM o DB)", true],
        ["Soporte async en Slack", true],
        ["1 revisión/iteración por semana", true],
        ["3 meses mínimo = $2,997 all-in", true],
      ],
      isPopular: false,
    },
    {
      title: "Build",
      pricePerMonth: (
        <h3 className="font-bold text-3xl md:text-4xl mt-1">
          <span>$1,999</span>
          <span className="text-base text-muted font-normal">/mo</span>
        </h3>
      ),
      features: [
        ["Hasta 3 workflows activos", true],
        ["Custom Slack app básica + workflows", true],
        ["Hasta 2 integraciones", true],
        ["AI Slack agent simple (1 pipeline)", true],
        ["Soporte async + 1 sync call/mes", true],
        ["Pausa o cancela cuando quieras", true],
      ],
      isPopular: true,
    },
    {
      title: "Scale",
      pricePerMonth: (
        <h3 className="font-bold text-3xl md:text-4xl mt-1">
          <span>$3,499</span>
          <span className="text-base text-muted font-normal">/mo</span>
        </h3>
      ),
      features: [
        ["Workflows ilimitados", true],
        ["Custom Slack apps (full)", true],
        ["AI agents multi-pipeline", true],
        ["CRM + sistemas internos", true],
        ["Iteraciones semanales", true],
        ["Soporte prioritario", true],
        ["Pausa o cancela cuando quieras", true],
      ],
      isPopular: false,
    },
    {
      title: "Operate",
      pricePerMonth: (
        <h3 className="font-bold text-3xl md:text-4xl mt-1">
          <span>$5,999</span>
          <span className="text-base text-muted font-normal">/mo</span>
        </h3>
      ),
      features: [
        ["Ecosistema de micro-apps", true],
        ["AI agents custom + seguridad", true],
        ["Integraciones ilimitadas", true],
        ["Data real-time en Slack", true],
        ["SLA + soporte 24/7", true],
        ["Dedicated engineer", true],
        ["Pausa o cancela cuando quieras", true],
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 lg:px-30 flex flex-col items-center gap-10 py-16 md:py-24">
      <CustomersSection />

      <div className="flex flex-col items-center gap-8 w-full">
        <div className="flex flex-col gap-2 items-center text-center">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Plans that scale with you
          </h2>
          <p className="text-muted text-sm md:text-base">
            Flat monthly fee. Cancel or pause anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {plans.map((plan) => (
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
