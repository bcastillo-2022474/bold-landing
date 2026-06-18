import type { Metadata } from "next";
import Link from "next/link";
import { BlogCtaCard } from "@/components/blog-cta-card";
import { BlogRelatedArticles } from "@/components/blog-related-articles";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title:
    "Slack AI Agent vs Custom Agents: LangGraph, Hermes, and When to Build Your Own",
  description:
    "Compare Slack's native Slackbot AI agent vs custom AI agents for Slack built with LangGraph and Hermes. Learn when to build AI agents in Slack and when Slack's built-in agent is enough.",
  alternates: {
    canonical: "/blog/slack-ai-agent-vs-custom-agents",
  },
  openGraph: {
    title:
      "Slack AI Agent vs Custom Agents: LangGraph, Hermes, and When to Build Your Own",
    description:
      "Compare Slackbot vs custom AI agents for Slack built with LangGraph and Hermes. Learn when to build AI agents in Slack.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Slack AI Agent vs Custom Agents: LangGraph, Hermes, and When to Build Your Own",
  description:
    "Compare Slack's native Slackbot AI agent vs custom AI agents for Slack built with LangGraph and Hermes. Learn when to build AI agents in Slack and when Slack's built-in agent is enough.",
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
      name: "Slack AI Agent vs Custom Agents",
      item: `${SITE.url}/blog/slack-ai-agent-vs-custom-agents`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Slackbot enough for AI slack agents development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For basic use cases like answering questions, summarizing threads, and scheduling meetings, Slackbot is sufficient. For custom logic, specific LLM providers, autonomous workflows, and integrations with proprietary APIs, you need custom AI agents for Slack built with frameworks like LangGraph or Hermes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use LangGraph as a Slack AI agent builder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. LangGraph from LangChain works as a Slack AI agent builder for complex, stateful agents with tool use, memory, branching logic, and multi-step reasoning. It gives you full control over which LLM to use and how the agent processes requests.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build custom AI agents for Slack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple custom agent typically takes 1 to 2 weeks to build and deploy. Complex autonomous agents with multi-step workflows, multiple LLM integrations, and scheduled tasks can take 4 to 8 weeks depending on requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What is Hermes agent Slack integration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hermes is a pre-built AI agent gateway designed for Slack. It handles authentication, rate limiting, channel scoping, and response batching out of the box. You configure the LLM provider and define how the agent responds to messages and commands.",
      },
    },
  ],
};

export default function SlackAiAgentVsCustomAgentsPage() {
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
                Slack AI Agent vs Custom Agents
              </span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Slack AI Agent vs Custom Agents: LangGraph, Hermes, and When to
              Build Your Own
            </h1>
            <p className="text-muted text-base md:text-lg">
              Slack's new Slackbot brings AI directly into your workspace. But
              for teams that need custom AI agents for Slack with specific LLMs,
              workflows, and autonomy, custom agent frameworks like LangGraph
              and Hermes offer a different path.
            </p>
            <time className="text-sm text-muted-light">June 17, 2026</time>
          </header>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              What Is Slackbot? Slack's Native AI Agent
            </h2>
            <p className="text-muted">
              Slackbot is Slack's built-in AI agent. It lives inside your
              workspace, has access to conversation context, files, and
              connected apps. It can answer questions, summarize threads,
              prepare meeting agendas, analyze documents, create reports, and
              orchestrate other agents via Salesforce Agentforce.
            </p>
            <p className="text-muted">
              The key advantage is that it's turnkey — no development required.
              You type a question and Slackbot responds using Slack's own AI
              infrastructure. However, you cannot control which LLM powers it,
              how it processes your data, or add custom logic beyond what Slack
              provides. Your AI capabilities are limited to what Slack decides
              to ship.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              What Are Custom AI Agents for Slack?
            </h2>
            <p className="text-muted">
              Custom AI agents for Slack are built from the ground up using
              agent frameworks like LangGraph from LangChain or pre-built tools
              like Hermes. These agents give you full control over the LLM
              provider, the agent's logic, its tools, and how it interacts with
              your workspace.
            </p>

            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-[32px] border border-black/5">
                <h3 className="text-xl font-bold">
                  AI Slack Agents Development with LangGraph
                </h3>
                <p className="text-muted mt-2">
                  LangGraph lets you build complex, stateful agents with
                  branching logic, tool use, memory, and multi-step reasoning.
                  You define exactly which LLM to use — OpenAI, Anthropic,
                  Gemini, or open-source models — and how the agent processes
                  requests. This is ideal for teams that need to integrate LLMs
                  as agents in Slack with full control over behavior.
                </p>
              </div>

              <div className="p-6 rounded-[32px] border border-black/5">
                <h3 className="text-xl font-bold">
                  Hermes Agent Slack Integration
                </h3>
                <p className="text-muted mt-2">
                  Hermes is a pre-built agent gateway designed specifically for
                  Slack. It handles authentication, rate limiting, channel
                  scoping, and response batching out of the box. You configure
                  the LLM provider, define workflows, and Hermes manages the
                  rest. It's a faster path to deploying a Slack AI agent
                  compared to building everything from scratch.
                </p>
              </div>

              <div className="p-6 rounded-[32px] border border-black/5">
                <h3 className="text-xl font-bold">
                  Build AI Agents in Slack with Custom Code
                </h3>
                <p className="text-muted mt-2">
                  For teams that need maximum flexibility, custom agents are
                  built directly on the Slack SDK with any LLM provider. This
                  approach gives you complete freedom — from data processing
                  pipelines to custom UI components in Slack. The trade-off is
                  that it requires a Slack bot with AI agents development team
                  behind it to build and maintain.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Slackbot vs Custom Agents: Side-by-Side
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base border-collapse">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4 font-bold">
                      Capability
                    </th>
                    <th className="text-left py-3 px-4 font-bold">Slackbot</th>
                    <th className="text-left py-3 pl-4 font-bold">
                      Custom Agent
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  <tr>
                    <td className="py-3 pr-4 font-semibold">Setup</td>
                    <td className="py-3 px-4 text-muted">Turnkey, no code</td>
                    <td className="py-3 pl-4 text-muted">
                      Requires development
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold">LLM choice</td>
                    <td className="py-3 px-4 text-muted">
                      Slack-controlled only
                    </td>
                    <td className="py-3 pl-4 text-muted">Any provider</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold">Custom logic</td>
                    <td className="py-3 px-4 text-muted">
                      Limited to Slack's features
                    </td>
                    <td className="py-3 pl-4 text-muted">
                      Full control via LangGraph
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold">Tool use</td>
                    <td className="py-3 px-4 text-muted">
                      Slack + Salesforce apps
                    </td>
                    <td className="py-3 pl-4 text-muted">
                      Any API, any database
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold">
                      Autonomous operation
                    </td>
                    <td className="py-3 px-4 text-muted">
                      Basic orchestration only
                    </td>
                    <td className="py-3 pl-4 text-muted">
                      Full autonomous agents
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold">Data privacy</td>
                    <td className="py-3 px-4 text-muted">
                      Slack's infrastructure
                    </td>
                    <td className="py-3 pl-4 text-muted">
                      Your own infrastructure
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-semibold">Cost</td>
                    <td className="py-3 px-4 text-muted">
                      Included in Slack plan
                    </td>
                    <td className="py-3 pl-4 text-muted">Dev + LLM costs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              When to Use Slackbot
            </h2>
            <p className="text-muted">
              Slackbot is ideal for teams that want instant AI capabilities
              without any development work. Use it for quick answers from your
              workspace's conversation history, summarizing long threads,
              preparing meeting agendas, analyzing uploaded files, and
              generating reports. If your needs fit within Slack's built-in
              capabilities, Slackbot is the right choice.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              When to Build Custom AI Agents for Slack
            </h2>
            <p className="text-muted">
              Build custom AI agents for Slack when your requirements go beyond
              what a pre-built agent can offer. Here are the scenarios where
              custom wins:
            </p>
            <ul className="list-disc list-inside text-muted flex flex-col gap-2">
              <li>
                You need a specific LLM provider — fine-tuned models,
                open-source deployments, or a model that Slackbot doesn't
                support
              </li>
              <li>
                Your workflows require complex multi-step logic with branching,
                conditionals, and state management that only LangGraph can
                provide
              </li>
              <li>
                You need to integrate with proprietary APIs, databases, or
                internal tools that aren't available through Slack's connector
                ecosystem
              </li>
              <li>
                You want autonomous scheduled agents that act without human
                prompts — pulling data, generating reports, and sending updates
                on a schedule
              </li>
              <li>
                You require full control over data residency, privacy, and
                security — keeping everything in your own infrastructure
              </li>
            </ul>

            <div className="p-6 rounded-[32px] bg-gray-50 flex flex-col gap-3">
              <h3 className="text-xl font-bold">
                Real-World Example: Autonomous Customer Support Agent
              </h3>
              <p className="text-muted">
                A fintech company needed an autonomous AI agent in Slack that
                could query customer transaction data, check fraud status
                against their internal systems, escalate to human agents when
                thresholds were exceeded, and generate weekly support reports —
                all without leaving Slack.
              </p>
              <p className="text-muted">
                Slackbot could not access their internal APIs or integrate with
                their fraud detection database. A custom LangGraph agent was
                built with LLM integration as a Slack app to handle the full
                pipeline. The agent now routes requests, enriches responses with
                proprietary data, and schedules automated reports — operating as
                a true autonomous AI agent in their Slack workspace.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              How to Get Started Building AI Agents in Slack
            </h2>
            <p className="text-muted">
              If you're evaluating custom AI agents for your team, here's a
              practical path to get started:
            </p>
            <ol className="list-decimal list-inside text-muted flex flex-col gap-3">
              <li>
                <strong>Define the use case</strong> — What specific task should
                the agent handle? Start with one clear workflow before
                expanding.
              </li>
              <li>
                <strong>Choose the framework</strong> — LangGraph for complex
                stateful agents with branching logic, or Hermes for faster
                Slack-native deployment.
              </li>
              <li>
                <strong>Select your LLM</strong> — OpenAI, Anthropic, Gemini, or
                open-source models depending on your accuracy, latency, and
                privacy needs.
              </li>
              <li>
                <strong>Build and test</strong> — Start with one private
                channel, one workflow, and verify every response before
                expanding to production.
              </li>
              <li>
                <strong>Iterate and scale</strong> — Add more channels, more
                workflows, scheduled tasks, and multi-agent orchestration as you
                validate the value.
              </li>
            </ol>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Is Slackbot enough for AI slack agents development?
                </h3>
                <p className="text-muted text-sm mt-1">
                  For basic use cases like answering questions, summarizing
                  threads, and scheduling meetings, Slackbot is sufficient. For
                  custom logic, specific LLM providers, autonomous workflows,
                  and integrations with proprietary APIs, you need custom AI
                  agents for Slack built with frameworks like LangGraph or
                  Hermes.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Can I use LangGraph as a Slack AI agent builder?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Yes. LangGraph works as a Slack AI agent builder for complex,
                  stateful agents with tool use, memory, branching logic, and
                  multi-step reasoning. It gives you full control over which LLM
                  to use and how the agent processes requests.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  What is Hermes agent Slack integration?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Hermes is a pre-built AI agent gateway designed for Slack. It
                  handles authentication, rate limiting, channel scoping, and
                  response batching out of the box. You configure the LLM
                  provider and define how the agent responds to messages and
                  commands.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  How long does it take to build custom AI agents for Slack?
                </h3>
                <p className="text-muted text-sm mt-1">
                  A simple custom agent typically takes 1 to 2 weeks to build
                  and deploy. Complex autonomous agents with multi-step
                  workflows, multiple LLM integrations, and scheduled tasks can
                  take 4 to 8 weeks depending on requirements.
                </p>
              </div>
            </div>
          </section>

          <BlogRelatedArticles currentSlug="slack-ai-agent-vs-custom-agents" />

          <section className="flex flex-col gap-4">
            <BlogCtaCard
              title="Need a custom AI agent for your Slack workspace?"
              description="We're a Slack bot with AI agents development team. We build custom AI agents, workflows, and automation for teams on a monthly subscription. Book a call and tell us what you need."
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
