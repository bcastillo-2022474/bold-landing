import type { Metadata } from "next";
import Link from "next/link";
import { BlogCtaCard } from "@/components/blog-cta-card";
import { BlogRelatedArticles } from "@/components/blog-related-articles";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { META, SITE } from "@/constants/site";

const SLUG = "custom-ai-agent-slack-workspace";
const TITLE =
  "Benefits of a Custom AI Agent Inside Your Slack Workspace: Tool Calling and Semantic Kernel";
const DESCRIPTION =
  "Learn how a custom AI agent in Slack uses tool calling and Semantic Kernel to query CRMs, create tasks, and execute actions — turning Slack into an operational layer over your existing stack.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: META.robots,
  keywords: [
    "custom AI agent Slack",
    "Slack AI agent tool calling",
    "Semantic Kernel Slack",
    "centralize tools in Slack",
    "Slack workspace AI agent",
    "Slack CRM agent",
    "human-in-the-loop Slack agent",
  ],
  alternates: {
    canonical: `/blog/${SLUG}`,
    types: {
      "text/markdown": `/aeo/${SLUG}.md`,
      "application/ld+json": `/aeo/${SLUG}.json`,
    },
  },
  openGraph: {
    title: TITLE,
    description:
      "A custom Slack AI agent can understand intent, call business tools, and execute actions with Semantic Kernel — without leaving Slack.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  image: `${SITE.url}/opengraph-image`,
  url: `${SITE.url}/blog/${SLUG}`,
  mainEntityOfPage: `${SITE.url}/blog/${SLUG}`,
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
  datePublished: "2026-08-14",
  dateModified: "2026-08-14",
  keywords: [
    "custom AI agent Slack",
    "tool calling Slack",
    "Semantic Kernel Slack",
    "centralize Slack workspace",
    "Slack operational layer",
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
      name: "Blog",
      item: `${SITE.url}/blog`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Custom AI Agent in Slack",
      item: `${SITE.url}/blog/${SLUG}`,
    },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to turn Slack into an operational layer with a custom AI agent",
  description:
    "Connect a custom Slack AI agent to business tools with tool calling and Semantic Kernel so teams can retrieve information and execute actions without leaving Slack.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Treat Slack as the interface, not another chatbot",
      text: "Define the agent as an intelligent layer over existing systems. It should understand intent, retrieve information, and execute actions — not only answer from a fixed knowledge base.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Expose business systems through tool calling",
      text: "Give the agent controlled functions such as search_customer, create_ticket, get_sales_pipeline, update_crm_record, schedule_meeting, and generate_report. The model chooses the tool, fills parameters, and uses the result before responding.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Orchestrate with Semantic Kernel",
      text: "Use Semantic Kernel to connect the language model with plugins, prompts, memory, and connectors. Keep reasoning separate from the underlying CRM, Jira, Salesforce, or HubSpot systems.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Personalize to the organization",
      text: "Configure processes, team tools, permissions, terminology, policies, authorized sources, and department workflows so the agent matches how the company actually operates.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Add human-in-the-loop controls",
      text: "Allow automatic reads where it is safe. Require human confirmation before CRM writes, external emails, or other sensitive operations.",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is a custom Slack AI agent different from a chatbot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A conventional chatbot answers from a predefined set of information. A custom AI agent in Slack understands intent, decides what information it needs, calls tools, and executes actions across CRM, ticketing, and other systems — without leaving Slack.",
      },
    },
    {
      "@type": "Question",
      name: "What is tool calling in a Slack AI agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tool calling gives the model controlled access to functions that connect to APIs, databases, CRMs, Jira, Salesforce, HubSpot, and internal systems. The agent picks the right tool, generates parameters, receives the result, and continues the task. Access can be limited by permissions and validation rules.",
      },
    },
    {
      "@type": "Question",
      name: "Why use Semantic Kernel with a Slack AI agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Semantic Kernel is an orchestration layer that connects the language model to plugins, functions, prompts, memory, and external connectors. A typical flow is User → Slack → AI Agent → Semantic Kernel → Tool Calling → Business Systems → Response in Slack.",
      },
    },
    {
      "@type": "Question",
      name: "How does a Slack AI agent reduce context switching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instead of opening Slack, searching a CRM, checking a document, then returning to Slack, the user asks for account status or pending actions. The agent queries authorized sources and returns a contextual answer in the channel. Slack becomes a unified interface over tools the team already uses.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Slack AI agent take actions without human approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can retrieve information automatically while requiring human confirmation before modifying a CRM record, sending an external email, or running a sensitive operation. That human-in-the-loop model keeps AI on repetitive work and people on important decisions.",
      },
    },
  ],
};

export default function CustomAiAgentSlackWorkspacePage() {
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
              <span className="text-black">Custom AI Agent in Slack</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Benefits of a Custom AI Agent Inside Your Slack Workspace: Tool
              Calling and Semantic Kernel
            </h1>
            <p className="text-muted text-base md:text-lg">
              Slack has evolved far beyond a communication platform. For many
              organizations, it is where decisions are made, projects are
              coordinated, documents are shared, and internal processes are
              executed. The next step is turning that workspace into an
              intelligent interface capable of understanding requests,
              retrieving information, and executing actions.
            </p>
            <time className="text-sm text-muted-light" dateTime="2026-08-14">
              August 14, 2026
            </time>
          </header>

          <section className="flex flex-col gap-4 p-6 rounded-2xl bg-yellow-300/20 border border-yellow-300">
            <h2 className="text-xl font-bold">Quick answer</h2>
            <p className="text-muted">
              A custom AI agent inside Slack is more valuable than a chatbot
              because it can call real business tools — CRM, Jira, Salesforce,
              HubSpot — and execute actions with Semantic Kernel as the
              orchestration layer. Teams stay in Slack instead of switching
              apps. Sensitive writes stay behind human approval.
            </p>
          </section>

          <p className="text-black font-semibold">
            This is where a custom AI agent inside Slack can provide
            significantly more value than a traditional chatbot.
          </p>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              From chatbot to intelligent agent
            </h2>
            <p className="text-muted">
              A conventional chatbot is typically limited to answering questions
              based on a predefined set of information. An AI agent can go
              further: it can understand user intent, determine what information
              it needs, access external tools, and execute actions across the
              company&apos;s existing systems.
            </p>
            <p className="text-muted">For example, an employee could ask:</p>
            <blockquote className="border-l-4 border-yellow-300 pl-4 text-black font-semibold">
              &ldquo;Show me the leads waiting for follow-up and create a task
              for the sales team.&rdquo;
            </blockquote>
            <p className="text-muted">
              The agent could interpret the request, query the CRM, identify the
              relevant leads, and use a tool to create the required tasks — all
              without leaving Slack.
            </p>
            <p className="text-black font-semibold">
              This reduces the need to constantly switch between applications
              and turns Slack into an intelligent interaction layer over the
              company&apos;s existing technology stack.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Tool calling: connecting AI agents to real business tools
            </h2>
            <p className="text-muted">
              One of the most important capabilities for building useful AI
              agents is tool calling.
            </p>
            <p className="text-muted">
              Instead of limiting the model to generating text, tool calling
              gives it controlled access to specific functions. These functions
              can connect to APIs, databases, CRMs, internal systems, or
              applications such as Jira, Salesforce, HubSpot, and other services
              used by the organization.
            </p>
            <p className="text-muted">
              An agent might have access to tools such as:
            </p>
            <ul className="list-disc list-inside text-muted flex flex-col gap-2 font-mono text-sm">
              <li>search_customer()</li>
              <li>create_ticket()</li>
              <li>get_sales_pipeline()</li>
              <li>update_crm_record()</li>
              <li>schedule_meeting()</li>
              <li>generate_report()</li>
            </ul>
            <p className="text-muted">
              When a user makes a request, the model determines which tool is
              required, generates the appropriate parameters, and receives the
              result before continuing the task.
            </p>
            <p className="text-black font-semibold">
              The result is an AI agent that is no longer simply generating
              text — it becomes an interface capable of performing real
              operations.
            </p>
            <p className="text-muted">
              Tool access can also be designed around specific permissions and
              validation rules, preventing the agent from having unrestricted
              access to every system in the organization.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Semantic Kernel as an orchestration layer
            </h2>
            <p className="text-muted">
              Building enterprise-grade agents also requires an architecture
              capable of managing models, tools, memory, prompts, and execution
              logic.
            </p>
            <p className="text-muted">
              Semantic Kernel can serve as an orchestration layer that connects
              the language model with the capabilities required by the agent.
              This allows teams to structure plugins, functions, prompts,
              memory, and connectors to external services.
            </p>
            <p className="text-muted">For example, an architecture could look like:</p>
            <div className="p-4 rounded-[32px] border border-black/5">
              <p className="font-semibold text-sm md:text-base">
                User → Slack → AI Agent → Semantic Kernel → Tool Calling →
                Business Systems → Response in Slack
              </p>
            </div>
            <p className="text-muted">
              This approach helps separate the agent&apos;s reasoning and
              orchestration logic from the underlying systems it interacts with,
              making the solution easier to maintain and evolve.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              A personalized experience for every organization
            </h2>
            <p className="text-muted">
              One of the biggest advantages of building a custom AI agent is
              that every organization operates differently. An agent can be
              configured to understand:
            </p>
            <ul className="list-disc list-inside text-muted flex flex-col gap-2">
              <li>Internal business processes</li>
              <li>The tools used by each team</li>
              <li>User-specific permissions</li>
              <li>Company-specific terminology</li>
              <li>Internal policies</li>
              <li>Authorized information sources</li>
              <li>Department-specific workflows</li>
            </ul>
            <p className="text-black font-semibold">
              This means the agent does not have to be another generic AI
              assistant. It can become an intelligent layer specifically adapted
              to how the organization operates.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Less context switching, less friction
            </h2>
            <p className="text-muted">
              Constantly switching between applications creates unnecessary
              friction. An employee might need to open Slack, search a CRM,
              review a document, check an internal system, and then return to
              Slack to communicate the result.
            </p>
            <p className="text-muted">
              An AI agent can reduce much of that workflow. Instead of asking
              &ldquo;Where can I find this information?&rdquo; a user can ask:
            </p>
            <blockquote className="border-l-4 border-yellow-300 pl-4 text-black font-semibold">
              &ldquo;What&apos;s the current status of this account and what
              actions are still pending?&rdquo;
            </blockquote>
            <p className="text-muted">
              The agent can query authorized sources and return a contextualized
              answer directly in Slack.
            </p>
            <p className="text-black font-semibold">
              The goal isn&apos;t to replace every application in the stack. It
              is to create a unified interface for interacting with the systems
              teams already use.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Automation with human control
            </h2>
            <p className="text-muted">
              Customization also makes it possible to establish clear boundaries
              around what the agent can and cannot do.
            </p>
            <p className="text-muted">
              For example, an organization might allow an agent to automatically
              retrieve sales information while requiring human confirmation
              before modifying a CRM record, sending an external email, or
              executing a sensitive operation.
            </p>
            <p className="text-black font-semibold">
              This introduces a human-in-the-loop model, where AI handles
              repetitive work while important decisions remain under human
              supervision.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              The real value: turning Slack into an operational layer
            </h2>
            <p className="text-muted">
              The primary advantage of an AI agent inside Slack isn&apos;t
              simply being able to &ldquo;chat with AI.&rdquo;
            </p>
            <p className="text-muted">
              The real value emerges when the agent can understand business
              context, access the right tools, and safely execute actions.
            </p>
            <p className="text-muted">
              With tool calling, Semantic Kernel, and an architecture designed
              around an organization&apos;s specific processes, Slack can become
              an operational interface for sales, support, operations, HR,
              engineering, and other teams.
            </p>
            <p className="text-black font-semibold">
              Instead of adding another application to the technology stack,
              organizations can build an intelligent layer on top of the tools
              they already use.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  How is a custom Slack AI agent different from a chatbot?
                </h3>
                <p className="text-muted text-sm mt-1">
                  A chatbot answers from a fixed knowledge base. A custom agent
                  understands intent, calls tools, and executes actions across
                  CRM, ticketing, and other systems without leaving Slack.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  What is tool calling in a Slack AI agent?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Tool calling gives the model controlled functions that connect
                  to APIs, CRMs, Jira, Salesforce, HubSpot, and internal
                  systems. The agent chooses the tool, fills parameters, and
                  uses the result before responding.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Why use Semantic Kernel with a Slack AI agent?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Semantic Kernel orchestrates models, plugins, prompts, memory,
                  and connectors. The typical flow is User → Slack → AI Agent →
                  Semantic Kernel → Tool Calling → Business Systems → Response
                  in Slack.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Can a Slack AI agent take actions without human approval?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Reads can be automatic. Writes — CRM updates, external emails,
                  sensitive operations — should require human confirmation.
                </p>
              </div>
            </div>
          </section>

          <BlogRelatedArticles currentSlug={SLUG} />

          <section className="flex flex-col gap-4">
            <BlogCtaCard
              title="Want a custom AI agent inside Slack?"
              description="We design and build custom AI agents for Slack, connected to your existing tools, APIs, and workflows — turning repetitive processes into intelligent, actionable workflows."
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
