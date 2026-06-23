import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CONTACT, META, SITE, SOCIAL } from "@/constants/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Bold Studio — your dedicated dev team on Slack. We build custom Slack apps, automate Slack workflows, and deploy AI agents. Subscribe and start building today.",
  alternates: {
    canonical: "/about",
  },
  robots: META.robots,
  keywords: [
    "about bold studio",
    "custom slack apps",
    "slack automation team",
    "slack development subscription",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  description:
    "A Slack-native software factory for building custom Slack apps, automating Slack workflows, and deploying AI agents.",
  url: SITE.url,
  email: CONTACT.general,
  sameAs: [SOCIAL.linkedin, SOCIAL.twitter, SOCIAL.github],
  founder: [
    { "@type": "Person", name: "Rodrigo Queche" },
    { "@type": "Person", name: "Guillermo Julca" },
    { "@type": "Person", name: "Joaquin Ladd" },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${SITE.url}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main className="flex flex-col items-center gap-20 md:gap-28 *:max-w-432">
        <section className="flex flex-col items-center py-16 md:py-24 w-full gap-5 px-4 md:px-10 lg:px-30">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-12 flex flex-col text-center">
            <span>We believe software</span>
            <span>
              should evolve —{" "}
              <span className="text-[#FFD200]">not be abandoned</span>.
            </span>
          </h1>
        </section>

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-16 md:py-24 text-center w-full items-center">
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

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-16 md:py-24 text-center w-full items-center">
          <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-12 lg:px-24">
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
            We build and maintain custom Slack apps that automate Slack
            workflows, integrate systems, and bring operational tools directly
            into the place where teams already work every day: Slack.
          </p>
        </section>

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-16 md:py-24 text-center w-full items-center">
          <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-12 lg:px-24">
            Why Slack
          </h2>
          <p className="text-muted px-4 md:px-0 max-w-[65ch]">
            Modern teams run on communication. With the ecosystem of Slack,
            custom Slack apps and AI agents can live directly inside
            conversations, transforming chat into a powerful operational layer
            for startups, fintech companies, and ecommerce teams.
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

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-16 md:py-24 text-center w-full items-center">
          <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-12 lg:px-24">
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

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-16 md:py-24 text-center w-full items-center">
          <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-12 lg:px-24">
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
