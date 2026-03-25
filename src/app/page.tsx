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
  description: SITE.description,
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
        name: "Starter",
        price: "1499",
        priceCurrency: "USD",
        description:
          "1 task at a time, 48-hour turnaround, unlimited revisions, Slack communication.",
      },
      {
        "@type": "Offer",
        name: "Growth",
        price: "3499",
        priceCurrency: "USD",
        description:
          "2 concurrent tasks, 24-hour turnaround, priority support, dedicated Project Manager.",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "4999",
        priceCurrency: "USD",
        description:
          "Unlimited concurrent tasks, custom SLA, multiple workspaces, strategy consulting.",
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
