import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { FaqSection } from "@/components/sections/faq.section";
import { PricingPlans } from "@/components/sections/pricing.section";
import { META, PRICING_OFFERS, SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: META.pages.pricing.title,
  description: META.pages.pricing.description,
  alternates: {
    canonical: META.pages.pricing.canonical,
  },
  robots: META.robots,
  keywords: [
    "slack development pricing",
    "custom slack app cost",
    "slack automation subscription",
    "ai agent pricing",
  ],
};

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Bold Studio Slack capacity plans",
  description:
    "Slack apps, AI agents, workflows and integrations. Start with a 10-day pilot, then pay for how many requests are in progress at once.",
  url: `${SITE.url}/pricing`,
  brand: {
    "@type": "Brand",
    name: "Bold Studio",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "399",
    highPrice: "7500",
    offerCount: String(PRICING_OFFERS.length),
    offers: PRICING_OFFERS,
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
  mainEntity: META.faq.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
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

      <main className="flex flex-col items-center *:max-w-432">
        <section className="w-full px-4 md:px-10 lg:px-30 py-16 md:py-24 flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-[62ch]">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-[#FFD200]">Pricing</span>
            </h1>
            <p className="text-muted leading-relaxed">
              Pay for capacity, not hours. Start with a $1,950 10-day pilot,
              money back if it isn&apos;t live. Then Build at $1,999/mo, Growth
              at $3,995/mo, a Dedicated engineer at $7,500/mo, or Run at
              $399/mo. Cancel or pause anytime.
            </p>
          </div>
          <PricingPlans />
        </section>
        <FaqSection />
      </main>
    </div>
  );
}
