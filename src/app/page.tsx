import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CallToActionSection } from "@/components/sections/call-to-action";
import { CustomersSection } from "@/components/sections/customers.section";
import { FaqSection } from "@/components/sections/faq.section";
import { HowItWorksSection } from "@/components/sections/how-it-works.section";
import { IntroSection } from "@/components/sections/intro.section";
import { JustificationSection } from "@/components/sections/justification.section";
import { PricingSection } from "@/components/sections/pricing.section";
import { SolutionSection } from "@/components/sections/solution.section";
import { TestimonialSection } from "@/components/sections/testimonial.section";
import { CONTACT, META, PRICING_OFFERS, SITE } from "@/constants/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: CONTACT.general,
  priceRange: "$$$",
  serviceType: "Slack apps, AI agents, workflows and integrations",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Slack capacity plans",
    itemListElement: PRICING_OFFERS,
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
        <IntroSection />
        <JustificationSection />
        <SolutionSection />
        <TestimonialSection />
        <CustomersSection />
        <HowItWorksSection />
        <PricingSection />
        <FaqSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  );
}
