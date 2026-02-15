import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CallToActionSection } from "@/components/sections/call-to-action";
import { IntroSection } from "@/components/sections/intro.section";
import { JustificationSection } from "@/components/sections/justification.section";
import { PricingSection } from "@/components/sections/pricing.section";
import { SolutionSection } from "@/components/sections/solution.section";
import { TestimonialSection } from "@/components/sections/testimonial.section";
import { WhatWeHaveBuiltSection } from "@/components/sections/what-we-have-built.section";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-10">
        <IntroSection />
        <JustificationSection />
        <SolutionSection />
        <WhatWeHaveBuiltSection />
        <PricingSection />
        <TestimonialSection />
        <CallToActionSection />
      </div>
      <Footer />
    </>
  );
}
