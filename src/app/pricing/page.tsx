import type { Metadata } from "next";
import { BookingModal } from "@/components/booking-modal";
import { Navbar } from "@/components/navbar";
import { META, SITE } from "@/constants/site";

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
    title: "Launch",
    price: "$999",
    features: [
      "1 active Slack workflow",
      "Slack workspace setup",
      "1 integration (CRM or DB)",
      "Async support in Slack",
      "1 review / iteration per week",
      "3-month minimum = $2,997 all-in",
    ],
    isPopular: false,
  },
  {
    title: "Build",
    price: "$1,999",
    features: [
      "Up to 3 active workflows",
      "Custom Slack app + workflows",
      "Up to 2 integrations",
      "AI agent (1 pipeline)",
      "Async support + 1 sync call/month",
      "Pause or cancel anytime",
    ],
    isPopular: true,
  },
  {
    title: "Scale",
    price: "$3,499",
    features: [
      "Unlimited workflows",
      "Custom Slack apps (full)",
      "AI agents multi-pipeline",
      "CRM + internal systems",
      "Weekly iterations",
      "Priority support",
      "Pause or cancel anytime",
    ],
    isPopular: false,
  },
  {
    title: "Operate",
    price: "$5,999",
    features: [
      "Micro-app ecosystem",
      "Custom AI agents + security",
      "Unlimited integrations",
      "Real-time data in Slack",
      "SLA + 24/7 support",
      "Dedicated engineer",
      "Pause or cancel anytime",
    ],
    isPopular: false,
  },
];

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Bold Studio Development Subscription",
  description:
    "Custom software development subscription for Slack workflows, custom Slack apps, and AI Slack agents.",
  url: `${SITE.url}/pricing`,
  brand: {
    "@type": "Brand",
    name: "Bold Studio",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "999",
    highPrice: "5999",
    offerCount: "4",
    offers: [
      {
        "@type": "Offer",
        name: "Launch",
        price: "999",
        priceCurrency: "USD",
        description:
          "1 Slack workflow automation, Slack workspace setup, 1 integration",
      },
      {
        "@type": "Offer",
        name: "Build",
        price: "1999",
        priceCurrency: "USD",
        description:
          "Up to 3 Slack workflows, custom Slack app, up to 2 integrations, simple AI agent",
      },
      {
        "@type": "Offer",
        name: "Scale",
        price: "3499",
        priceCurrency: "USD",
        description:
          "Unlimited Slack workflows, full custom Slack apps, multi-pipeline AI agents, CRM integrations",
      },
      {
        "@type": "Offer",
        name: "Operate",
        price: "5999",
        priceCurrency: "USD",
        description:
          "Micro-app ecosystem, custom AI Slack agents, unlimited integrations, real-time data, 24/7 SLA",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: `${SITE.url}/pricing`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the subscription model work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You subscribe to a monthly plan and we build and maintain your Slack workflows, custom Slack apps, and AI agents. Cancel or pause anytime.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a minimum commitment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only the Launch plan requires a 3-month minimum ($2,997 all-in). Build, Scale, and Operate have no minimum contract — pause or cancel whenever you want.",
      },
    },
    {
      "@type": "Question",
      name: "What if I only need one thing built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can subscribe, get it built, then pause your subscription immediately. You only pay for the months you're active. No long-term commitment required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel or pause my subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can cancel or pause your subscription at any time. Cancellations take effect at the end of the current billing period. There are no cancellation fees.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do. All custom code built for your project is your property. We retain rights to underlying frameworks and reusable internal components.",
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 md:px-10 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#FFD200]">Pricing</span>
        </h1>

        <p className="text-muted mb-12">
          Simple, predictable pricing for Slack workflows, custom Slack apps,
          and AI agents. Cancel or pause at any time.
        </p>

        {/* Plans */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`rounded-[32px] p-6 flex flex-col gap-5 relative ${
                  plan.isPopular
                    ? "border-2 border-yellow-300"
                    : "border border-black/5"
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
                <BookingModal
                  variant="link"
                  label="Book a Call"
                  style={plan.isPopular ? "yellow" : "outline"}
                  className="mt-auto text-center justify-center"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Questions */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Questions?</h2>
          <p className="text-muted">
            <BookingModal
              variant="link"
              label="Book a call"
              style="yellow"
              className="underline !border-0 !bg-transparent !text-muted hover:!text-black font-semibold inline p-0 h-auto"
            />{" "}
            — we're happy to help you pick the right plan or discuss custom
            arrangements for your team.
          </p>
        </section>
      </main>
    </div>
  );
}
