import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { META } from "@/constants/site";

export const metadata: Metadata = {
  title: "About - Bold Studio",
  description:
    "Learn about Bold Studio - the Slack-native software factory for modern teams who want to build faster and scale smarter.",
  alternates: {
    canonical: "/about",
  },
  robots: META.robots,
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-10 *:max-w-432">
        <section className="flex flex-col items-center py-10 md:py-20 w-full gap-5 px-4 md:px-10 lg:px-30">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-12 flex flex-col text-center">
            <span className="relative isolate">
              <span className="bg-yellow-300 w-full absolute left-0 bottom-0 -rotate-1 h-[1.5ch] scale-110"></span>
              <span className="z-10 relative">We believe software</span>
            </span>
            <span>should evolve — not be abandoned.</span>
          </h1>
        </section>

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-10 text-center w-full items-center">
          <p className="text-muted px-4 md:px-0 max-w-[70ch] text-base md:text-lg">
            Most software projects start the same way: a large upfront payment,
            months of development, and a final delivery that slowly becomes
            outdated.
          </p>
          <p className="text-black font-semibold px-4 md:px-0 max-w-[70ch] text-base md:text-lg">
            At Bold Studio, we believe that model is broken.
          </p>
          <p className="text-muted px-4 md:px-0 max-w-[70ch] text-base md:text-lg">
            Instead of charging massive project fees that leave products without
            long-term support, we built a different approach: a subscription
            model designed for continuous improvement.
          </p>
          <p className="text-black font-bold px-4 md:px-0 max-w-[70ch] text-base md:text-lg">
            Because the real problem isn&apos;t building software. It&apos;s
            maintaining it.
          </p>
        </section>

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-10 text-center w-full items-center bg-section-bg">
          <h2 className="font-grotesk text-2xl md:text-3xl font-bold px-4 md:px-12 lg:px-24">
            Companies launch tools, integrations, and automations
          </h2>
          <p className="text-muted px-4 md:px-0 max-w-[65ch]">
            That work on day one — but without ongoing updates, bug fixes, and
            improvements, those tools eventually become technical debt.
          </p>
          <p className="text-black font-semibold px-4 md:px-0 max-w-[65ch]">
            That&apos;s why Bold Studio was created.
          </p>
          <p className="text-muted px-4 md:px-0 max-w-[65ch]">
            We build and maintain custom Slack applications that automate
            workflows, integrate systems, and bring operational tools directly
            into the place where teams already work every day: Slack.
          </p>
        </section>

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-10 text-center w-full items-center">
          <h2 className="font-grotesk text-2xl md:text-3xl font-bold px-4 md:px-12 lg:px-24">
            Why Slack
          </h2>
          <p className="text-muted px-4 md:px-0 max-w-[65ch]">
            Modern teams run on communication. With the ecosystem of Slack,
            applications can live directly inside conversations, transforming
            chat into a powerful operational layer for startups, fintech
            companies, and ecommerce teams.
          </p>
          <p className="text-black font-semibold px-4 md:px-0 max-w-[65ch]">
            Instead of building standalone tools that create more dashboards, we
            focus on bringing the product to the workflow.
          </p>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-muted text-sm md:text-base">
              Less context switching.
            </p>
            <p className="font-bold text-lg md:text-xl">
              More action inside the conversation.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-10 text-center w-full items-center bg-section-bg">
          <h2 className="font-grotesk text-2xl md:text-3xl font-bold px-4 md:px-12 lg:px-24">
            The Founders
          </h2>
          <p className="text-muted px-4 md:px-0 max-w-[65ch]">
            Bold Studio was started by three founders who shared the same
            frustration with traditional software development.
          </p>
          <ul className="text-left text-muted px-4 md:px-0 max-w-[65ch] flex flex-col gap-4">
            <li>
              <span className="text-black font-semibold">
                Too many great ideas
              </span>{" "}
              died after launch.
            </li>
            <li>
              <span className="text-black font-semibold">Too many tools</span>{" "}
              stopped evolving because the original project ended.
            </li>
            <li>
              <span className="text-black font-semibold">
                Too many companies
              </span>{" "}
              were forced to choose between expensive agencies or unstable
              internal tools.
            </li>
          </ul>
          <p className="text-black font-semibold px-4 md:px-0 max-w-[65ch]">
            So we built something different. A studio focused on shipping fast,
            iterating constantly, and maintaining software as a living system.
          </p>
        </section>

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-10 text-center w-full items-center">
          <h2 className="font-grotesk text-2xl md:text-3xl font-bold px-4 md:px-12 lg:px-24">
            Our goal is simple:
          </h2>
          <p className="text-muted px-4 md:px-0 max-w-[65ch]">
            Help startups build and scale operational tools inside Slack —
            without the friction of traditional development projects.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
