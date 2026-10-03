import type { Metadata } from "next";
import Link from "next/link";
import { BlogCtaCard } from "@/components/blog-cta-card";
import { BlogRelatedArticles } from "@/components/blog-related-articles";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { META, SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Slack AI Agents Subscription: What You Get with a Dedicated Team",
  description:
    "Compare the cost of building in-house vs a Slack AI agents subscription with a dedicated team for slack AI agents. Includes Slack agentforce custom agents and Slack workflows with AI agents monthly.",
  robots: META.robots,
  alternates: {
    canonical: "/blog/slack-ai-agents-subscription-dedicated-team",
  },
  openGraph: {
    title: "Slack AI Agents Subscription: What You Get with a Dedicated Team",
    description:
      "A Slack AI agents subscription gives you a dedicated team for slack AI agents with Slack agentforce custom agents and workflows included monthly.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Slack AI Agents Subscription: What You Get with a Dedicated Team",
  description:
    "Compare the cost of building in-house vs a Slack AI agents subscription with a dedicated team for slack AI agents. Includes Slack agentforce custom agents and Slack workflows with AI agents monthly.",
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
  datePublished: "2026-06-17",
  dateModified: "2026-06-17",
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
      name: "Slack AI Agents Subscription",
      item: `${SITE.url}/blog/slack-ai-agents-subscription-dedicated-team`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Slack AI agents subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Slack AI agents subscription is a monthly service where a dedicated team builds, tests, and maintains custom AI agents for your Slack workspace. You submit requests through Slack, we build and iterate, and you can pause or cancel anytime.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build Slack agentforce custom agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build custom agents using Salesforce Agentforce that integrate CRM data, automate lead management, update account records, and resolve support cases directly inside Slack without leaving your workspace.",
      },
    },
    {
      "@type": "Question",
      name: "What if I only need one Slack workflow built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with the $1,950 10-day pilot, or subscribe and pause when the work is done. There is no minimum commitment. Run at $399/mo keeps what we built maintained if you are not ready to cancel.",
      },
    },
    {
      "@type": "Question",
      name: "How is a Slack AI agents subscription different from hiring a developer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No hiring process, no interviewing, no benefits, no onboarding. A dedicated team for slack AI agents starts building on day one. You get development, testing, deployment, and maintenance for a single monthly price.",
      },
    },
  ],
};

export default function SlackAiAgentsSubscriptionPage() {
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
              <span className="text-black">Slack AI Agents Subscription</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Slack AI Agents Subscription: What You Get with a Dedicated Team
            </h1>
            <p className="text-muted text-base md:text-lg">
              Building Slack AI agents in-house means hiring, provisioning
              environments, managing infrastructure, and handling ongoing
              maintenance. A Slack AI agents subscription gives you a dedicated
              team for slack AI agents — with Slack agentforce custom agents and
              Slack workflows with AI agents monthly included.
            </p>
            <time className="text-sm text-muted-light">June 17, 2026</time>
          </header>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              The Hidden Cost of Building Slack AI Agents In-House
            </h2>
            <p className="text-muted">
              At first glance, building your own Slack AI agent seems
              straightforward. Slack provides developer sandboxes for free, the
              Slack CLI is open source, and Bolt frameworks handle the
              boilerplate. But the real cost isn't the tools — it's the time.
            </p>
            <p className="text-muted">
              Setting up a development environment, configuring triggers,
              writing custom functions, testing in isolated sandboxes, deploying
              to production, and maintaining everything across updates takes
              teams three to six months for their first production agent. And
              that's before you consider the cost of hiring a Slack developer,
              onboarding them, and hoping they stay long enough to deliver
              value.
            </p>
            <p className="text-muted">
              Developer sandboxes are isolated Enterprise org environments with
              their own users, channels, and data — perfect for testing, but
              they don't build the agent for you. You still need a team to write
              the code, configure the triggers, and wire everything together.
              That's where a Slack AI agents subscription changes the equation.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              What a Slack AI Agents Subscription Includes
            </h2>
            <p className="text-muted">
              A Slack AI agents subscription replaces the need to hire, onboard,
              and manage a development team. Instead, you get a dedicated team
              that handles everything — from environment setup to production
              deployment.
            </p>

            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-[32px] border border-black/5">
                <h3 className="text-xl font-bold">
                  Dedicated Team for Slack AI Agents
                </h3>
                <p className="text-muted mt-2">
                  Your subscription includes a team that handles the full
                  lifecycle — Slack CLI configuration, custom function
                  development, trigger setup, isolated sandbox testing, and
                  production deployment. No hiring, no interviewing, no ramp-up
                  time. We start building on day one.
                </p>
              </div>

              <div className="p-6 rounded-[32px] border border-black/5">
                <h3 className="text-xl font-bold">
                  Slack Workflows with AI Agents Monthly
                </h3>
                <p className="text-muted mt-2">
                  Submit as many workflow automation requests as your plan
                  allows. Each workflow can include AI agent capabilities — from
                  simple message summarization to complex multi-step autonomous
                  agents. You describe what you need in Slack, we build and
                  iterate until it's right.
                </p>
              </div>

              <div className="p-6 rounded-[32px] border border-black/5">
                <h3 className="text-xl font-bold">
                  Slack Agentforce Custom Agents
                </h3>
                <p className="text-muted mt-2">
                  For teams using Salesforce, we build custom Agentforce-powered
                  agents that live inside Slack. These agents manage leads,
                  update account records, create cases, resolve support tickets,
                  and generate pipeline reports — all through natural
                  conversation in Slack channels. Your CRM stays updated without
                  anyone leaving the app.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Our Development Process: From Sandbox to Production
            </h2>
            <p className="text-muted">
              Every agent we build goes through a structured pipeline before it
              reaches your workspace. We use isolated development environments
              that mirror your production setup — separate workspaces with their
              own users, channels, and data — so nothing breaks while we build.
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Environment setup and configuration
                </h3>
                <p className="text-muted text-sm mt-1">
                  We provision a dedicated development workspace with
                  email-domain-restricted access and configurable session
                  controls. This keeps your production data completely isolated
                  while we build and test.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Agent development and testing
                </h3>
                <p className="text-muted text-sm mt-1">
                  Custom functions, trigger configurations, LLM integrations,
                  and workflow logic are built and tested in the sandbox. Every
                  edge case is validated before any code touches your production
                  workspace.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Staged deployment</h3>
                <p className="text-muted text-sm mt-1">
                  Once validated, we deploy to your production Slack workspace
                  using a controlled rollout — starting with a single private
                  channel, verifying responses, then expanding to broader
                  access.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Ongoing iteration and maintenance
                </h3>
                <p className="text-muted text-sm mt-1">
                  Your subscription includes continuous improvements. Submit
                  changes, new features, or bug fixes through Slack and we
                  iterate. No separate maintenance contracts or per-hour fees.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Pricing That Scales with Your Needs
            </h2>
            <p className="text-muted">
              All plans include Slack workflows with AI agents monthly support.
              Pick the plan that matches your current needs and scale as you
              grow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-[32px] border border-black/5 flex flex-col gap-2">
                <h3 className="font-bold text-lg">Pilot · $1,950 one-time</h3>
                <p className="text-muted text-sm">
                  One workflow or agent live in 10 business days, or a 100%
                  refund. The fee is credited to month 1 if you subscribe.
                </p>
              </div>
              <div className="p-5 rounded-[32px] border border-yellow-300 bg-yellow-50 flex flex-col gap-2">
                <h3 className="font-bold text-lg">Build · $1,999/mo</h3>
                <p className="text-muted text-sm">
                  1 active request at a time. Workflows, a custom Slack app, or
                  an AI agent (1 pipeline). Up to 2 integrations. Async support
                  and 1 sync call a month.
                </p>
              </div>
              <div className="p-5 rounded-[32px] border border-black/5 flex flex-col gap-2">
                <h3 className="font-bold text-lg">Growth · $3,995/mo</h3>
                <p className="text-muted text-sm">
                  2 active requests. Full custom Slack apps, multi-pipeline AI
                  agents, CRM and internal systems, weekly iterations, priority
                  support.
                </p>
              </div>
              <div className="p-5 rounded-[32px] border border-black/5 flex flex-col gap-2">
                <h3 className="font-bold text-lg">Dedicated · $7,500/mo</h3>
                <p className="text-muted text-sm">
                  Dedicated engineer during business hours with US Eastern
                  overlap, unlimited integrations, and a micro-app ecosystem.
                  24/7 support with SLA is a +$1,500/mo add-on.
                </p>
              </div>
              <div className="p-5 rounded-[32px] border border-black/5 flex flex-col gap-2 md:col-span-2">
                <h3 className="font-bold text-lg">Run · $399/mo</h3>
                <p className="text-muted text-sm">
                  Maintenance, monitoring and small tweaks of what we built. A
                  step-down instead of cancelling.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  What is a Slack AI agents subscription?
                </h3>
                <p className="text-muted text-sm mt-1">
                  A monthly subscription where a dedicated team builds, tests,
                  and maintains custom AI agents for your Slack workspace. You
                  submit requests through Slack, we build and iterate, and you
                  can pause or cancel anytime.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Do you build Slack agentforce custom agents?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Yes. We build custom agents using Salesforce Agentforce that
                  integrate CRM data, automate lead management, update account
                  records, and resolve support cases directly inside Slack.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  What if I only need one Slack workflow built?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Start with the $1,950 pilot, or subscribe and pause when you
                  are done. There is no minimum commitment. Run at $399/mo keeps
                  what we built maintained.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  How is this different from hiring a developer?
                </h3>
                <p className="text-muted text-sm mt-1">
                  No hiring process, no interviewing, no benefits, no
                  onboarding. We start building on day one. You get full team
                  coverage for a single monthly price.
                </p>
              </div>
            </div>
          </section>

          <BlogRelatedArticles currentSlug="slack-ai-agents-subscription-dedicated-team" />

          <section className="flex flex-col gap-4">
            <BlogCtaCard
              title="Ready for a Slack AI agents subscription?"
              description="We're a dedicated team for slack AI agents. We build Slack agentforce custom agents and deliver Slack workflows with AI agents monthly. Book a call and tell us what you need."
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
