import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { META, SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Design",
  description:
    "See how we design and build custom Slack apps, Slack workflows, and AI agents using Block Kit, Slack API, and TypeScript. Slack-native development for modern teams.",
  alternates: {
    canonical: "/design",
  },
  robots: META.robots,
  keywords: [
    "slack block kit",
    "slack api development",
    "slack app design",
    "slack cli",
  ],
};

const technologies = [
  {
    title: "Block Kit",
    description: "Interactive Slack UI components",
  },
  {
    title: "JavaScript / TypeScript",
    description: "Scalable and maintainable app logic",
  },
  {
    title: "Slack API",
    description: "Deep integrations with workspace tools",
  },
  {
    title: "Slack CLI",
    description: "Fast development and deployment",
  },
  {
    title: "Sandbox Testing",
    description: "Safe environments before production",
  },
];

function TechnologyCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const colors = [
    "bg-yellow-300",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-amber-400",
    "bg-yellow-300",
  ];

  return (
    <article className="flex flex-col gap-2 p-5 rounded-[32px] bg-white border border-black/5">
      <div
        className={`w-10 h-10 rounded-lg ${colors[index]} flex items-center justify-center`}
        role="img"
        aria-label={`${title} icon`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <title>{title}</title>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="black" />
          <path
            d="M2 17L12 22L22 17"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="font-bold text-base md:text-lg">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </article>
  );
}

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Bold Studio - Design & Development",
  description:
    "Custom Slack app design and development for Slack workflows, AI agents, and automations using Block Kit, Slack API, and TypeScript.",
  url: `${SITE.url}/design`,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "1499",
    priceCurrency: "USD",
    priceValidUntil: new Date(
      new Date().setFullYear(new Date().getFullYear() + 1),
    )
      .toISOString()
      .split("T")[0],
    description: "Starting at $1,499/month subscription",
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
      name: "Design",
      item: `${SITE.url}/design`,
    },
  ],
};

export default function DesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
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
            <span>Built for Slack.</span>
            <span>
              <span className="text-[#FFD200]">Designed for speed</span>.
            </span>
          </h1>
          <p className="text-center font-inter text-muted items-center max-w-[65ch] px-4 text-sm md:text-base">
            Every custom Slack app and workflow is crafted using the native
            tools and frameworks provided by Slack, ensuring performance,
            reliability, and seamless integration with your workspace.
          </p>
        </section>

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-16 md:py-24 text-center w-full items-center">
          <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-12 lg:px-24">
            We design interactive workflows using Block Kit
          </h2>
          <p className="text-muted px-4 md:px-0 max-w-[70ch]">
            Enabling rich UI components directly inside Slack messages, modals,
            and workflows — so your team can act without leaving the
            conversation.
          </p>
        </section>

        <section className="py-16 md:py-24 w-full gap-6 md:gap-10 px-4 md:px-10 lg:px-30 flex flex-col items-center">
          <div className="flex flex-col gap-1 items-center text-center">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
              Our Stack
            </h2>
            <p className="text-muted text-sm md:text-base">
              Behind the scenes, we build using modern developer tools and
              Slack&apos;s official ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full max-w-5xl">
            {technologies.map((tech, index) => (
              <TechnologyCard
                key={tech.title}
                title={tech.title}
                description={tech.description}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 md:gap-10 px-4 md:px-10 lg:px-30 py-16 md:py-24 text-center w-full items-center">
          <h2 className="text-2xl md:text-3xl font-bold px-4 md:px-12 lg:px-24">
            No context switching. Just productivity.
          </h2>
          <p className="text-muted px-4 md:px-0 max-w-[65ch]">
            This stack allows us to prototype quickly, test safely, and ship
            powerful Slack workflows and custom Slack apps that feel native to
            your team&apos;s workflow.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
