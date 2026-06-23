import type { Metadata } from "next";
import Link from "next/link";
import { BlogCtaCard } from "@/components/blog-cta-card";
import { BlogRelatedArticles } from "@/components/blog-related-articles";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title:
    "Salesforce Agentforce in Slack: AI Agents That Work Alongside Your Team",
  description:
    "Learn how Salesforce Agentforce turns AI agents into Slack teammates. Deploy HR, IT, sales, and service agents that collaborate with humans in channels and DMs.",
  alternates: {
    canonical: "/blog/salesforce-agentforce-slack",
  },
  openGraph: {
    title: "Salesforce Agentforce in Slack: AI Agents as Teammates",
    description:
      "Agentforce brings AI agents into Slack as team members. @Mention them, assign tasks, and automate workflows across departments.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Salesforce Agentforce in Slack: AI Agents That Work Alongside Your Team",
  description:
    "Learn how Salesforce Agentforce turns AI agents into Slack teammates. Deploy HR, IT, sales, and service agents that collaborate with humans in channels and DMs using conversational context and Einstein Trust Layer security.",
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
  datePublished: "2026-06-22",
  dateModified: "2026-06-22",
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
      name: "Salesforce Agentforce in Slack",
      item: `${SITE.url}/blog/salesforce-agentforce-slack`,
    },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get Started with Salesforce Agentforce in Slack",
  description:
    "Deploy AI agents powered by Salesforce Agentforce inside your Slack workspace. Choose a template, configure permissions, and start collaborating with AI teammates in channels and DMs.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Choose an agent template",
      text: "Pick from pre-built agent templates for HR, IT, Sales, Service, Marketing, Legal, Engineering, or Supply Chain. Each template comes with configured skills and suggested permissions.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Connect your data sources",
      text: "Grant the agent access to relevant Slack channels and connected enterprise systems. Conversational data from public channels enriches agent context through RAG and enterprise search.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Configure Slack actions",
      text: "Enable the agent to perform Slack actions — create channels, update canvases, send DMs, manage lists. Set boundaries using guardrails and permission scopes.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Deploy and @mention your agent",
      text: "Add the agent to a channel and @mention it like any teammate. It will respond to requests, execute actions, and escalate complex issues to human team members when needed.",
    },
  ],
};

const agents = [
  {
    title: "HR Agent",
    description:
      "Assists with onboarding, benefits questions, and professional development guidance. Handles tier-1 HR requests so your people team can focus on strategic initiatives.",
  },
  {
    title: "IT Agent",
    description:
      "Resolves support tickets, runs incident communications, and handles access requests directly in Slack channels. Escalates only when human intervention is required.",
  },
  {
    title: "Service Agent",
    description:
      "Identifies subject matter experts, surfaces historical data, and resolves customer issues by pulling context from past conversations and connected CRM systems.",
  },
  {
    title: "Sales Agent",
    description:
      "Prepares executive briefs, creates proposals, and proactively reaches out to leads. Works alongside your sales team inside deal-specific Slack channels.",
  },
  {
    title: "Marketing Agent",
    description:
      "Optimizes campaigns, generates content drafts, builds campaign plans, and tracks performance metrics — all within Slack conversations.",
  },
  {
    title: "Legal Agent",
    description:
      "Simplifies compliance workflows, automates approval processes, and answers policy questions. Reduces the cycle time for legal reviews and contract approvals.",
  },
  {
    title: "Engineering Agent",
    description:
      "Accelerates planning, design, development, and QA cycles. Tracks bugs, surfaces PR status, and coordinates releases across engineering channels.",
  },
  {
    title: "Supply Chain Agent",
    description:
      "Manages supplier communications, automates warehouse operations, and improves demand forecasting by pulling data from ERP systems into Slack.",
  },
];

const faqItems = [
  {
    q: "What is Salesforce Agentforce?",
    a: "Agentforce is Salesforce's platform for building and deploying AI agents that work alongside humans. Inside Slack, Agentforce agents become team members that can be @mentioned, assigned tasks, and trusted to execute actions within defined guardrails.",
  },
  {
    q: "How is Agentforce different from Slack's built-in AI?",
    a: "Slack's built-in AI (like Slack AI search and recaps) focuses on helping humans find information faster. Agentforce agents are autonomous — they take action, make decisions within their scope, and execute multi-step workflows without waiting for human input at every step.",
  },
  {
    q: "Can Agentforce agents access my private Slack channels?",
    a: "No. Administrators control exactly which data and channels agents can access. By default, agents can only see public conversational data that you explicitly grant. Private channels and DMs are excluded unless specifically authorized.",
  },
  {
    q: "Does Agentforce use my company data to train LLMs?",
    a: "Absolutely not. Salesforce never uses customer data to train large language models. The Einstein Trust Layer ensures data masking, no-data-retention agreements with LLM providers, and continuous toxicity monitoring on all agent outputs.",
  },
  {
    q: "Can I build custom AI agents alongside Agentforce?",
    a: "Yes. Slack's platform supports three types of agents: Agentforce (pre-built templates), custom AI assistants built with the Slack API and your choice of LLM, and third-party assistants from Slack Marketplace like Adobe Express and Cohere.",
  },
];

export default function SalesforceAgentforceSlackPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
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
              <span className="text-black">Salesforce Agentforce in Slack</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Salesforce Agentforce in Slack: AI Agents That Work Alongside Your
              Team
            </h1>
            <p className="text-muted text-base md:text-lg">
              Salesforce Agentforce brings AI agents directly into Slack as team
              members. @Mention them in channels, assign tasks, and automate
              workflows across HR, IT, Sales, Service, and more. Here is
              everything you need to know.
            </p>
            <time className="text-sm text-muted-light">June 22, 2026</time>
          </header>

          <section className="flex flex-col gap-4 p-6 rounded-2xl bg-yellow-300/20 border border-yellow-300">
            <h2 className="text-xl font-bold">Quick answer</h2>
            <p className="text-muted">
              Salesforce Agentforce is a platform that turns AI agents into
              Slack teammates. You @mention them in channels and DMs just like
              any coworker. They access conversational context from Slack and
              connected business systems to answer questions, automate tasks,
              and execute actions — all within Einstein Trust Layer security
              guardrails. Choose from pre-built templates for HR, IT, Sales,
              Service, Marketing, Legal, Engineering, or Supply Chain, or build
              custom AI assistants using the Slack API.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              What Is Salesforce Agentforce?
            </h2>
            <p className="text-muted">
              Agentforce is Salesforce&apos;s platform for creating, deploying,
              and managing AI agents that operate alongside human employees. In
              Slack, these agents become active team members — they live in
              channels, participate in threads, respond to DMs, and take action
              autonomously within defined boundaries.
            </p>
            <p className="text-muted">
              Unlike traditional chatbots that follow scripted decision trees,
              Agentforce agents use large language models, retrieval-augmented
              generation (RAG), and real-time conversational data to understand
              context, reason through problems, and execute multi-step
              workflows. They learn from the conversational history of your
              workspace and improve over time without manual retraining.
            </p>
            <p className="text-muted">
              For teams already using Slack as their central hub, Agentforce
              eliminates the need to switch between tools. An agent can pull
              customer history from Salesforce, check inventory from an ERP,
              draft a response, and post it to a channel — all triggered by a
              single @mention.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              The Three Types of AI Agents in Slack
            </h2>
            <p className="text-muted">
              Slack supports three categories of AI agents, each with different
              levels of customization and control:
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  1. Agentforce (Salesforce)
                </h3>
                <p className="text-muted text-sm mt-1">
                  Pre-built agent templates powered by Salesforce. They draw on
                  conversational data from Slack plus trusted business data from
                  Salesforce and connected systems. Best for teams that want a
                  ready-to-deploy solution with enterprise-grade security.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  2. Custom AI Assistants (Slack API)
                </h3>
                <p className="text-muted text-sm mt-1">
                  Build your own AI assistants using the Slack API and your
                  preferred LLM provider. Full control over behavior, data
                  sources, and integration logic. These assistants can be
                  deployed as Slack apps with custom functions and triggers.
                  Read our guide on{" "}
                  <Link
                    href="/blog/develop-ai-agents-bolt-slack"
                    className="text-yellow-600 hover:underline"
                  >
                    developing AI agents with Bolt for Slack
                  </Link>{" "}
                  to get started.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  3. Third-Party AI Assistants
                </h3>
                <p className="text-muted text-sm mt-1">
                  Pre-configured AI apps from the Slack Marketplace by partners
                  like Adobe Express and Cohere. These are ready to install and
                  require no development work. They are reviewed by Slack for
                  quality and security before publication.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Pre-Built Agent Templates for Every Department
            </h2>
            <p className="text-muted">
              Agentforce ships with ready-to-use agent templates tailored to
              common business functions. Each template comes with pre-configured
              skills, suggested data access scopes, and recommended Slack
              actions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {agents.map((agent) => (
                <div
                  key={agent.title}
                  className="p-4 rounded-[32px] border border-black/5 flex flex-col gap-2"
                >
                  <h3 className="font-bold text-lg">{agent.title}</h3>
                  <p className="text-muted text-sm">{agent.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Why Conversational Context Makes Agents Smarter
            </h2>
            <p className="text-muted">
              The key differentiator of Agentforce in Slack is access to
              conversational data. Every Slack workspace is a living repository
              of institutional knowledge — decisions made in threads, context
              shared in channels, and expertise scattered across DMs. Agentforce
              agents tap into this unstructured data using retrieval-augmented
              generation (RAG) to produce relevant, context-aware responses.
            </p>
            <p className="text-muted">
              When an agent is @mentioned with a question, it does not just
              search a database. It searches the conversational history of your
              workspace, pulls related messages and files, checks connected
              business systems via the{" "}
              <Link
                href="/blog/slack-mcp-server-guide"
                className="text-yellow-600 hover:underline"
              >
                MCP Slack server
              </Link>
              , and synthesizes everything into an answer or action. The result
              is an agent that understands context the way a human team member
              would — because it has access to the same conversations.
            </p>
            <p className="text-muted">
              According to Slack, organizations that connect conversational data
              to their AI agents see up to a 40% improvement in task performance
              compared to agents that only access structured databases.
              Unstructured data — messages, files, audio, video — improves an
              agent&apos;s reasoning and decision-making capabilities
              significantly.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              What Agentforce Agents Can Do in Slack
            </h2>
            <p className="text-muted">
              Once deployed, Agentforce agents can execute a growing set of
              Slack-native actions autonomously:
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Create and manage channels
                </h3>
                <p className="text-muted text-sm mt-1">
                  Agents can spin up new channels for projects, incidents, or
                  initiatives — complete with the right members, topic, and
                  purpose — without waiting for a human admin.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Update Slack canvases</h3>
                <p className="text-muted text-sm mt-1">
                  Agents can create and update canvases with meeting notes,
                  project status, or documentation. Your team always has access
                  to the latest information inside Slack.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Send DMs and notifications
                </h3>
                <p className="text-muted text-sm mt-1">
                  Agents can reach out to team members via direct message to
                  request information, notify about changes, or escalate issues
                  that require human intervention.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Manage lists and workflows
                </h3>
                <p className="text-muted text-sm mt-1">
                  Agents can create and update Slack lists, trigger workflows,
                  and track task progress. Combined with the{" "}
                  <Link
                    href="/blog/deploy-first-slack-workflow"
                    className="text-yellow-600 hover:underline"
                  >
                    Slack Workflow Builder
                  </Link>
                  , agents become powerful automation engines inside your
                  workspace.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Security and Trust: The Einstein Trust Layer
            </h2>
            <p className="text-muted">
              Every Agentforce interaction is protected by the Einstein Trust
              Layer — a security framework built into the Salesforce platform
              that works silently behind every agent response:
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  No LLM training on your data
                </h3>
                <p className="text-muted text-sm mt-1">
                  Salesforce never uses customer data to train large language
                  models. After the LLM generates a response, all data is
                  discarded through no-data-retention agreements with providers.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Data masking</h3>
                <p className="text-muted text-sm mt-1">
                  Sensitive information — company names, person names, financial
                  data — is masked before being sent to the LLM. The agent never
                  processes raw sensitive data.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Toxicity monitoring</h3>
                <p className="text-muted text-sm mt-1">
                  All agent outputs are continuously scored for toxicity and
                  harmful content. Guardrails prevent agents from exhibiting
                  unwanted behaviors or accessing restricted data.
                </p>
              </div>
            </div>
            <p className="text-muted">
              For teams that need custom AI agents with specific security
              requirements, see our guide on{" "}
              <Link
                href="/blog/connect-hermes-agent"
                className="text-yellow-600 hover:underline"
              >
                connecting Hermes Agent to your Slack workspace
              </Link>{" "}
              for a detailed walkthrough of OAuth scopes, token storage, and
              channel restrictions.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
            <div className="flex flex-col gap-4">
              {faqItems.map((item) => (
                <div
                  key={item.q}
                  className="p-4 rounded-[32px] border border-black/5"
                >
                  <h3 className="font-bold">{item.q}</h3>
                  <p className="text-muted text-sm mt-1">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <BlogRelatedArticles currentSlug="salesforce-agentforce-slack" />

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Next steps</h2>
            <p className="text-muted">
              Salesforce Agentforce is transforming how teams collaborate with
              AI in Slack. Whether you use pre-built templates or build custom
              AI assistants, the key is starting with clear use cases and the
              right data access. To learn more about the underlying technology,
              read our comparison of{" "}
              <Link
                href="/blog/slack-ai-agent-vs-custom-agents"
                className="text-yellow-600 hover:underline"
              >
                Slack AI agent vs custom agents
              </Link>{" "}
              and our guide on{" "}
              <Link
                href="/blog/slack-ai-agents-subscription-dedicated-team"
                className="text-yellow-600 hover:underline"
              >
                what you get with a Slack AI agents subscription
              </Link>
              .
            </p>
            <BlogCtaCard
              title="Need help deploying AI agents in Slack?"
              description="We build custom AI agents, configure Agentforce integrations, and automate Slack workflows for teams that want to move faster. Book a call and tell us what you need."
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
