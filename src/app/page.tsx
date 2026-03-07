import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CallToActionSection } from "@/components/sections/call-to-action";
import { IntroSection } from "@/components/sections/intro.section";
import { JustificationSection } from "@/components/sections/justification.section";
import { PricingSection } from "@/components/sections/pricing.section";
import { SolutionSection } from "@/components/sections/solution.section";
import { TestimonialSection } from "@/components/sections/testimonial.section";
import { WhatWeHaveBuiltSection } from "@/components/sections/what-we-have-built.section";
import { CONTACT, META, SITE } from "@/constants/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: CONTACT.general,
  priceRange: "$$$",
  serviceType: "Slack App Development & Automation",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Slack Automation Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "1499",
        priceCurrency: "USD",
        description: "One request at a time, 48-hour turnaround, unlimited revisions.",
      },
      {
        "@type": "Offer",
        name: "Growth",
        price: "3499",
        priceCurrency: "USD",
        description: "Two requests at a time, 24-hour turnaround, priority support, dedicated Project Manager.",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "4999",
        priceCurrency: "USD",
        description: "Multiple workspaces, custom SLA, on-site workshops, strategy consulting.",
      },
    ],
  },
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main className="flex flex-col items-center gap-10 *:max-w-432">
        <IntroSection />
        <JustificationSection />
        <SolutionSection />
        <WhatWeHaveBuiltSection />
        <PricingSection />
        <TestimonialSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
}
