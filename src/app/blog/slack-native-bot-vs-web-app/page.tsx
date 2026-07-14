import type { Metadata } from "next";
import Link from "next/link";
import { BlogCtaCard } from "@/components/blog-cta-card";
import { BlogRelatedArticles } from "@/components/blog-related-articles";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { META, SITE } from "@/constants/site";

export const metadata: Metadata = {
  title:
    "The End of Infinite Tabs: Why Your Next Software Shouldn't Be a Web App — It Should Be a Slack Bot",
  description:
    "The web app portal paradigm is ending. Learn why Slack-native bots eliminate context friction, reduce context switching, and deliver better software for B2B teams.",
  robots: META.robots,
  alternates: {
    canonical: "/blog/slack-native-bot-vs-web-app",
  },
  openGraph: {
    title: "The End of Infinite Tabs: Why Your Next Software Should Be a Slack Bot",
    description:
      "Stop building portals nobody visits. Slack-native bots eliminate context switching, reduce friction, and ship faster. Here's why the web app paradigm is ending.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The End of Infinite Tabs: Why Your Next Software Shouldn't Be a Web App — It Should Be a Slack Bot",
  description:
    "Learn why Slack-native bots are replacing web apps for internal operations, approval workflows, and team automations. Reduce context friction and ship software people actually use.",
  image: `${SITE.url}/opengraph-image`,
  author: {
    "@type": "Organization",
    name: "Bold Studio",
    url: SITE.url,
  },
  publisher: {
    "@type": "Organization",
    name: "Bold Studio",
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/logo-192.png`,
    },
  },
  datePublished: "2026-07-13",
  dateModified: "2026-07-13",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${SITE.url}/blog`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "The End of Infinite Tabs",
      item: `${SITE.url}/blog/slack-native-bot-vs-web-app`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "When should I build a Slack bot instead of a web app?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Build a Slack bot when your team already operates in Slack for decisions, approvals, and execution. If the workflow involves actionable alerts, approval chains, recurring commands, or internal operations — a Slack bot eliminates context friction and adoption barriers that web portals create.",
      },
    },
    {
      "@type": "Question",
      "name": "What are the benefits of Slack-native software over web apps?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Near-zero adoption friction (lives where the team already is), enriched context (reads conversation threads, knows channels and members), faster iteration cycles (Slack blocks are faster to build than full UI screens), and distribution through trust networks (one team adopts, others see it working in Slack).",
      },
    },
    {
      "@type": "Question",
      "name": "When does building a web app still make sense?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Web apps are still the right call for dense analytics dashboards, complex onboarding flows, and tools that external users need without having Slack. But for internal operations, approval workflows, and team automations, a Slack bot is almost always faster, cheaper, and more effective.",
      },
    },
    {
      "@type": "Question",
      "name": "How does Slack's platform support building bots?",
      acceptedAnswer: {
        "@type": "Answer",
        "text": "Slack offers Block Kit for conversational UI, Workflow Builder for no-code automations, the Bolt SDK for custom apps in Node.js or Python, and a Marketplace with real distribution. This is a mature B2B software distribution platform with millions of active users already inside it.",
      },
    },
  ],
};

export default function SlackNativeBotVsWebAppPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
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
      <main className="flex flex-col items-center gap-20 md:gap-28 *:max-w-432">
        <article className="max-w-3xl w-full px-4 md:px-10 py-16 md:py-24 flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <nav className="text-sm text-muted-light">
              <Link href="/blog" className="hover:text-black">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-black">
                The End of Infinite Tabs
              </span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              The End of Infinite Tabs: Why Your Next Software Shouldn&apos;t Be a Web App — It Should Be a Slack Bot
            </h1>
            <p className="text-muted text-base md:text-lg">
              The average knowledge worker has 8 apps open simultaneously.
              Switches context 25 times per hour. And yet, when their company needs to automate something — approve an expense, assign a ticket, trigger a critical alert — the default answer is always the same: &ldquo;let&apos;s build a portal.&rdquo;
            </p>
            <time className="text-sm text-muted-light">July 13, 2026</time>
          </header>

          <p className="text-muted">
            That&apos;s not a solution. That&apos;s just another place nobody&apos;s going to want to come back to.
          </p>

          <section className="flex flex-col gap-4">
            <p className="text-muted">
              I&apos;ve spent the last couple of years working with fintech, eCommerce, and B2B SaaS teams, and the pattern is consistent: the most underused internal tools are always the ones living on a separate URL. The dashboard you &ldquo;should check every morning.&rdquo; The approval system with its own login. The weekly report that arrives by email with a link to a platform nobody remembers the name of.
            </p>
            <p className="text-black font-semibold">
              The problem isn&apos;t the functionality. It&apos;s context friction.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Slack isn&apos;t a messaging app. It&apos;s your team&apos;s operating system.
            </h2>
            <p className="text-muted">
              Over 90% of B2B teams already live in Slack. Not as a peripheral tool — as their primary work surface. That&apos;s where decisions get made, problems escalate, execution gets coordinated.
            </p>
            <p className="text-black font-semibold">
              So the real question is: why do we keep building software that exists outside of where your team already operates?
            </p>
            <p className="text-muted">
              A well-built Slack bot doesn&apos;t compete with your stack. It completes it. It takes events from your systems — a failed payment, a new order, a contract about to expire — and turns them into actionable interactions, directly in the right channel, with the right context, for the right person.
            </p>
            <p className="text-black font-semibold">
              No new URL. No new login. No onboarding nobody&apos;s going to complete.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              The paradigm shift most technical teams aren&apos;t seeing yet
            </h2>
            <p className="text-muted">
              The web app was the right answer when Slack didn&apos;t exist or when API integrations were genuinely hard. Today, neither of those excuses applies.
            </p>
            <p className="text-muted">
              Slack has a mature platform: Block Kit for conversational UI, Workflow Builder for no-code automations, the Bolt SDK for custom apps in Node or Python, and a Marketplace with real distribution models. This isn&apos;t a workaround — it&apos;s a B2B software distribution platform with millions of users already inside it.
            </p>
            <p className="text-muted">
              Here&apos;s what changes when you build Slack-native:
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <div className="p-4 rounded-[32px] border border-black/5">
              <h3 className="font-bold text-lg">
                Near-zero adoption friction
              </h3>
              <p className="text-muted text-sm mt-1">
                The product lives where the team already lives. No convincing anyone to install something new.
              </p>
            </div>
            <div className="p-4 rounded-[32px] border border-black/5">
              <h3 className="font-bold text-lg">
                Enriched context
              </h3>
              <p className="text-muted text-sm mt-1">
                You can read the conversation thread, know who&apos;s in which channel, understand the moment. No portal has that.
              </p>
            </div>
            <div className="p-4 rounded-[32px] border border-black/5">
              <h3 className="font-bold text-lg">
                Faster iteration cycles
              </h3>
              <p className="text-muted text-sm mt-1">
                A Slack block is faster to build and test than a full UI screen. Feedback loops are immediate.
              </p>
            </div>
            <div className="p-4 rounded-[32px] border border-black/5">
              <h3 className="font-bold text-lg">
                Distribution through trust networks
              </h3>
              <p className="text-muted text-sm mt-1">
                In B2B, if one team adopts your Slack app, the conversation to expand it to another department already happens in Slack. The most powerful sales channel is the product itself.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              When it applies — and when it doesn&apos;t
            </h2>
            <p className="text-muted">
              I&apos;m not saying eliminate your visual interface. There are cases where the web app is the right call: dense analytics dashboards, complex onboarding flows, tools that external users need without having Slack.
            </p>
            <p className="text-black font-semibold">
              But for internal operations, approval workflows, actionable alerts, recurring commands, and team automations — building a separate web app is almost always the most expensive and least effective path.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              The question that matters
            </h2>
            <p className="text-muted">
              The question I ask every client before we start designing a solution is simple: where is your team when they need to make this decision?
            </p>
            <p className="text-black font-semibold">
              If the answer is Slack, the software should live in Slack.
            </p>
            <p className="text-muted">
              The &ldquo;build a portal for that&rdquo; paradigm is ending. Teams that understand this early will move faster, with less friction, and with software people actually use.
            </p>
            <p className="text-black font-semibold">
              Infinite tabs had their moment. That moment is over.
            </p>
          </section>

          <BlogRelatedArticles currentSlug="slack-native-bot-vs-web-app" />

          <section className="flex flex-col gap-4">
            <BlogCtaCard
              title="Building a Slack bot instead of a web app?"
              description="We build Slack-native software for fintech, eCommerce, and B2B SaaS teams that want real automation without adding operational complexity. Book a call and let's talk."
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
