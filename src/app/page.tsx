import Image from "next/image";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CallToActionSection } from "@/components/sections/call-to-action.section";
import { JustificationSection } from "@/components/sections/justification.section";
import { SolutionSection } from "@/components/sections/solution.section";
import { WhatWeHaveBuiltSection } from "@/components/sections/what-we-have-built.section";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-10">
        <CallToActionSection />
        <JustificationSection />
        <SolutionSection />
        <WhatWeHaveBuiltSection />
      </div>
      <Footer />
    </>
  );
}
