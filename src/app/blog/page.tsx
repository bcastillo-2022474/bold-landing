import type { Metadata } from "next";
import Link from "next/link";
import { BookingModal } from "@/components/booking-modal";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Blog — Slack Workflow & AI Agent Tutorials",
  description:
    "Tutorials and guides for the Slack workflows builder, AI Slack agents, automation, and integrations. Learn how to deploy your first workflow and connect AI agents to your workspace. Start building today.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Bold Studio",
    description:
      "Tutorials and guides for the Slack workflows builder, AI Slack agents, automation, and integrations.",
  },
  keywords: [
    "slack blog",
    "slack workflow tutorials",
    "ai slack agents",
    "slack automation guides",
  ],
};

const posts = [
  {
    title:
      "The End of Infinite Tabs: Why Your Next Software Shouldn't Be a Web App — It Should Be a Slack Bot",
    excerpt:
      "The web app portal paradigm is ending. Learn why Slack-native bots eliminate context friction, reduce context switching, and ship software people actually use.",
    slug: "slack-native-bot-vs-web-app",
    date: "July 13, 2026",
  },
  {
    title:
      "Custom Slack App vs Buying Another Tool: When to Build vs Buy",
    excerpt:
      "A framework for deciding when to build a custom Slack app instead of buying another SaaS tool. Learn when custom Slack apps, workflows, and automation make sense for fintech and ecommerce teams.",
    slug: "custom-slack-app-vs-buy",
    date: "July 8, 2026",
  },
  {
    title:
      "Google Analytics Insights in Slack: Real-Time Marketing Monitoring Without Dashboard Fatigue",
    excerpt:
      "Monitor GA4, Google Ads, Meta Ads, Search Console, and Shopify directly in Slack. Learn how Go Insights eliminates dashboard switching with intelligent alerts for marketing and ecommerce teams.",
    slug: "ga-insights-slack-monitoring",
    date: "June 27, 2026",
  },
  {
    title:
      "Your Team Is Sitting on an AI Feature They Probably Scrolled Right Past",
    excerpt:
      "Slack quietly shipped Skills for Slackbot — step-by-step instructions your team can build, share, and reuse. Turn recurring processes into executable workflows without writing code.",
    slug: "slackbot-skills-guide",
    date: "June 26, 2026",
  },
  {
    title:
      "Slack and Jira Integration Best Practices: Automate Ticket Management and PR Reviews",
    excerpt:
      "Best practices for connecting Jira with Slack — instant issue lookups, smart notifications, slash commands, and automated ticket creation via Workflow Builder.",
    slug: "slack-jira-integration-best-practices",
    date: "June 25, 2026",
  },
  {
    title: "How to Send Emails to Slack: Complete Guide with 3 Methods",
    excerpt:
      "Send emails directly into Slack channels or DMs. Step-by-step guide covering channel email addresses, Gmail/Outlook plugins, and Slackbot forwarding.",
    slug: "send-emails-to-slack",
    date: "June 24, 2026",
  },
  {
    title: "Slack CI/CD Best Practices: Automate Your Slack App Pipeline",
    excerpt:
      "Set up a production-grade CI/CD pipeline for Slack app development. Automate testing with Slack CLI, deploy with GitHub Actions, and manage dev, staging, and production environments.",
    slug: "slack-cicd-best-practices",
    date: "June 23, 2026",
  },
  {
    title: "How to Use Slack's MCP Server with AI Agents: A Complete Guide",
    excerpt:
      "Learn how to connect AI agents to Slack via MCP — search messages, manage canvases, send messages, and orchestrate Slack AI agents from mobile or desktop using natural language.",
    slug: "slack-mcp-server-guide",
    date: "June 18, 2026",
  },
  {
    title: "How to Deploy Your First Workflow in Slack",
    excerpt:
      "A step-by-step guide to using the Slack workflows builder — from choosing a trigger to adding steps, variables, and publishing your first automation.",
    slug: "deploy-first-slack-workflow",
    date: "June 16, 2026",
  },
  {
    title: "Connect Hermes Agent to Your Slack Workspace",
    excerpt:
      "Turn your Slack workspace into an AI-powered command center. Learn how to set up your AI Slack agent with the right scopes, test it in a private channel, and deploy safely.",
    slug: "connect-hermes-agent",
    date: "June 16, 2026",
  },
  {
    title:
      "Slack AI Agent vs Custom Agents: LangGraph, Hermes, and When to Build Your Own",
    excerpt:
      "Compare Slack's native Slackbot AI agent vs custom AI agents for Slack built with LangGraph and Hermes. Learn when to build AI agents in Slack and when Slack's built-in agent is enough.",
    slug: "slack-ai-agent-vs-custom-agents",
    date: "June 17, 2026",
  },
  {
    title: "How to Develop AI Agents with Bolt for Slack: A Complete Guide",
    excerpt:
      "Learn how to develop AI agents bolt Slack using Bolt for JavaScript and Python. Step-by-step guide covering Slack CLI setup, custom functions, triggers, sandbox testing, and deployment.",
    slug: "develop-ai-agents-bolt-slack",
    date: "June 17, 2026",
  },
  {
    title: "Slack AI Agents Subscription: What You Get with a Dedicated Team",
    excerpt:
      "Compare the cost of building in-house vs a Slack AI agents subscription with a dedicated team. Includes Slack agentforce custom agents and Slack workflows with AI agents monthly.",
    slug: "slack-ai-agents-subscription-dedicated-team",
    date: "June 17, 2026",
  },
  {
    title:
      "Salesforce Agentforce in Slack: AI Agents That Work Alongside Your Team",
    excerpt:
      "Learn how Salesforce Agentforce turns AI agents into Slack teammates. Deploy HR, IT, sales, and service agents that collaborate with humans in channels and DMs.",
    slug: "salesforce-agentforce-slack",
    date: "June 22, 2026",
  },
  {
    title:
      "Slack + WhatsApp API for Ecommerce: A Case Study in Customer Service Automation",
    excerpt:
      "How a bootstrap ecommerce founder unified customer service by integrating Slack with WhatsApp Business API. Real story, real results.",
    slug: "slack-whatsapp-ecommerce-case-study",
    date: "June 22, 2026",
  },
];
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
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Bold Studio Blog",
  description:
    "Tutorials and guides for the Slack workflows builder, AI Slack agents, automation, and integrations.",
  url: `${SITE.url}/blog`,
  isPartOf: {
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Navbar />
      <main className="flex flex-col items-center gap-20 md:gap-28 *:max-w-432">
        <section className="flex flex-col items-center py-16 md:py-24 w-full gap-5 px-4 md:px-10 lg:px-30">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-12 flex flex-col text-center">
            <span className="text-[#FFD200]">Blog</span>
          </h1>
          <p className="text-center font-inter text-muted items-center max-w-[65ch] px-4 text-sm md:text-base">
            Tutorials and guides for the Slack workflows builder, AI Slack
            agents, automation, and integrations.
          </p>
        </section>

        <section className="flex flex-col gap-6 md:gap-8 px-4 md:px-10 lg:px-30 pb-16 md:pb-24 w-full max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold">Latest articles</h2>
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col gap-3 p-6 md:p-8 rounded-[32px] border border-black/5 hover:border-yellow-300 transition-colors"
              >
                <time className="text-sm text-muted-light">{post.date}</time>
                <h3 className="font-bold text-xl md:text-2xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-yellow-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted text-sm md:text-base">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-yellow-600 font-semibold text-sm hover:underline mt-2"
                >
                  Read this guide{" "}
                  <span className="sr-only">about {post.title}</span>→
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="w-full py-16 md:py-24 px-4 md:px-10 lg:px-30 flex flex-col items-center gap-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Need a custom workflow or AI agent?
          </h2>
          <p className="text-muted max-w-[60ch] text-sm md:text-base">
            We build custom Slack workflows, AI Slack agents, and automation for
            teams that want to move faster. Book a call and tell us what you
            need.
          </p>
          <BookingModal
            variant="link"
            label="Book a Call"
            style="black-white"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
