import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { CONTACT, META } from "@/constants/site";

export const metadata: Metadata = {
  title: META.pages.pricing.title,
  description: META.pages.pricing.description,
  alternates: {
    canonical: META.pages.pricing.canonical,
  },
  robots: META.robots,
};

const plans = [
  {
    title: "Enterprise",
    price: "$4,999",
    features: [
      "Real-time operational data",
      "Micro-app ecosystems",
      "Custom security protocols",
      "Priority 24/7 support",
    ],
    isPopular: false,
  },
  {
    title: "Growth",
    price: "$3,499",
    features: [
      "Custom Slack apps",
      "CRM & internal system integrations",
      "Product-level automation",
      "Iterative improvements",
    ],
    isPopular: true,
  },
  {
    title: "Starter",
    price: "$1,499",
    features: [
      "Automated workflows",
      "Operational organization",
      "Administrative efficiency",
      "Slack-native tools",
    ],
    isPopular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 md:px-10 py-10 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="relative isolate inline-block">
            <span className="bg-yellow-300 w-full absolute left-0 bottom-0 -rotate-1 h-[1.5ch] scale-110" />
            <span className="z-10 relative">Pricing</span>
          </span>
        </h1>

        <p className="text-muted mb-12">
          Simple, predictable pricing. Cancel or pause at any time.
        </p>

        {/* Plans */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`rounded-2xl p-8 flex flex-col gap-6 shadow relative ${
                  plan.isPopular
                    ? "border-2 border-yellow-300"
                    : "border border-gray-100"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute w-full left-0 -top-3 flex justify-center">
                    <span className="bg-yellow-300 rounded-full px-5 py-1 text-[9px] uppercase font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div>
                  <h2 className="font-bold text-lg mb-2">{plan.title}</h2>
                  <p className="font-inter font-bold text-4xl">
                    {plan.price}
                    <span className="text-base font-normal text-muted">
                      /mo
                    </span>
                  </p>
                </div>
                <ul className="flex flex-col gap-2 text-muted text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 items-start">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${CONTACT.general}`}
                  className={`mt-auto text-center py-3 px-6 rounded-xl font-semibold text-sm transition-colors ${
                    plan.isPopular
                      ? "bg-yellow-300 text-black hover:bg-yellow-400"
                      : "border-2 border-black text-black hover:bg-black hover:text-white"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Setup Fee */}
        <section className="mb-12 p-8 bg-yellow-300/20 border border-yellow-300 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3">One-time Setup Fee</h2>
          <p className="text-muted mb-4">
            All plans include a one-time setup fee of{" "}
            <strong className="text-black">$6,500</strong> covering
            architecture, deployment and initial integrations.
          </p>
          <p className="text-muted">
            Have questions about what's included?{" "}
            <a
              href={`mailto:${CONTACT.general}`}
              className="underline hover:text-black"
            >
              Contact us
            </a>{" "}
            before subscribing.
          </p>
        </section>

        {/* Refund Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted mb-4">
              We stand behind our work. If we have not delivered any results
              within <strong className="text-black">45 days</strong> of your
              subscription start date, you are entitled to a full refund of your
              monthly subscription fee for that period.
            </p>
            <p className="text-muted mb-4">
              To request a refund under this policy, contact us at{" "}
              <a
                href={`mailto:${CONTACT.support}`}
                className="underline hover:text-black"
              >
                {CONTACT.support}
              </a>{" "}
              with your account details. Refund requests are reviewed within 5
              business days.
            </p>
            <p className="text-muted">
              Please note: the one-time setup fee is non-refundable once
              onboarding has begun.
            </p>
          </div>
        </section>

        {/* FAQ teaser */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Questions?</h2>
          <p className="text-muted">
            Reach out at{" "}
            <a
              href={`mailto:${CONTACT.general}`}
              className="underline hover:text-black"
            >
              {CONTACT.general}
            </a>{" "}
            — we're happy to help you pick the right plan or discuss custom
            arrangements for your team.
          </p>
        </section>
      </main>
    </div>
  );
}
