import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CallToActionSection } from "@/components/sections/call-to-action";
import { HowItWorksSection } from "@/components/sections/how-it-works.section";
import { IntroSection } from "@/components/sections/intro.section";
import { JustificationSection } from "@/components/sections/justification.section";
import { PricingSection } from "@/components/sections/pricing.section";
import { SolutionSection } from "@/components/sections/solution.section";
import { TestimonialSection } from "@/components/sections/testimonial.section";
import { CONTACT, META, SITE } from "@/constants/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description:
    "Build custom Slack apps, automate Slack workflows, and deploy AI Slack agents with your dedicated dev team on Slack.",
  url: SITE.url,
  email: CONTACT.general,
  priceRange: "$$$",
  serviceType: "Custom Software Development",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Subscription Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Launch",
        price: "999",
        priceCurrency: "USD",
        description:
          "1 Slack workflow automation, Slack workspace setup, 1 integration, async support, 1 revision per week.",
      },
      {
        "@type": "Offer",
        name: "Build",
        price: "1999",
        priceCurrency: "USD",
        description:
          "Up to 3 Slack workflows, custom Slack app, up to 2 integrations, simple AI agent, async + sync support.",
      },
      {
        "@type": "Offer",
        name: "Scale",
        price: "3499",
        priceCurrency: "USD",
        description:
          "Unlimited Slack workflows, full custom Slack apps, multi-pipeline AI agents, CRM integrations, priority support.",
      },
      {
        "@type": "Offer",
        name: "Operate",
        price: "5999",
        priceCurrency: "USD",
        description:
          "Micro-app ecosystem, custom AI Slack agents, unlimited integrations, real-time data, 24/7 SLA, dedicated engineer.",
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
      <main className="flex flex-col items-center gap-20 md:gap-28 *:max-w-432">
        {/* HERO: Explain what Bold Studio is and how it's different */}
        <IntroSection />

        {/* PROBLEM: Introduce the pains of traditional development */}
        <JustificationSection />

        {/* SOLUTION: Explain the Bold Studio model + What you can build */}
        <SolutionSection />

        {/* SOCIAL PROOF: Testimonials after solution explanation */}
        <TestimonialSection />

        {/* HOW IT WORKS: Step-by-step process */}
        <HowItWorksSection />

        {/* PRICING: Plans with clear model description */}
        <PricingSection />

        {/* FINAL CTA: Direct action-oriented CTA */}
        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
}
