import type { Metadata } from "next";
import Link from "next/link";
import { BlogCtaCard } from "@/components/blog-cta-card";
import { BlogRelatedArticles } from "@/components/blog-related-articles";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "How to Develop AI Agents with Bolt for Slack: A Complete Guide",
  description:
    "Learn how to develop AI agents bolt Slack using Bolt for JavaScript and Python. Step-by-step guide covering Slack CLI setup, custom functions, triggers, sandbox testing, and deployment.",
  alternates: {
    canonical: "/blog/develop-ai-agents-bolt-slack",
  },
  openGraph: {
    title: "How to Develop AI Agents with Bolt for Slack: A Complete Guide",
    description:
      "Step-by-step guide to develop AI agents bolt Slack using Bolt frameworks, Slack CLI, and custom functions.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Develop AI Agents with Bolt for Slack: A Complete Guide",
  description:
    "Learn how to develop AI agents bolt Slack using Bolt for JavaScript and Python. Step-by-step guide covering Slack CLI setup, custom functions, triggers, sandbox testing, and deployment.",
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
      name: "Develop AI Agents with Bolt for Slack",
      item: `${SITE.url}/blog/develop-ai-agents-bolt-slack`,
    },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Develop AI Agents with Bolt for Slack",
  description:
    "Build and deploy AI agents for Slack using Bolt frameworks, Slack CLI, and custom functions.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Set up your environment with Slack CLI",
      text: "Install the Slack CLI and log in to your workspace using slack login. Use slack create to scaffold a new project or slack init for an existing app. The CLI supports Bolt for JavaScript, Bolt for Python, and Deno Slack SDK templates.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Build custom functions for your AI agent",
      text: "Define custom Slack functions that encapsulate your AI agent logic. Each function has an input schema, an output schema, and a handler. Use Slack's SDK to call your preferred LLM provider and return structured responses to Slack.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Wire triggers to activate your agent",
      text: "Use slack trigger create to define how users activate your AI agent. Triggers can be links shared in channels, webhooks from external systems, scheduled events, or message keywords. Each trigger connects to a workflow that calls your custom functions.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Test locally with sandbox and slack run",
      text: "Run slack run to start a local development server. Slack automatically watches your files and restarts on changes. Use Slack developer sandboxes for isolated testing environments that mirror your production setup.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Deploy with slack deploy and CI/CD",
      text: "Run slack deploy to push your AI agent to Slack's managed infrastructure. Set up a CI/CD pipeline with GitHub Actions to automate testing with deno fmt --check and deno lint, then deploy on tagged releases.",
    },
  ],
};

export default function DevelopAiAgentsBoltSlackPage() {
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
              <span className="text-black">
                Develop AI Agents with Bolt for Slack
              </span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              How to Develop AI Agents with Bolt for Slack: A Complete Guide
            </h1>
            <p className="text-muted text-base md:text-lg">
              Bolt for JavaScript and Bolt for Python are Slack's official
              frameworks for building apps. Combined with the Slack CLI, they
              let you develop AI agents bolt Slack with custom functions,
              triggers, and automated deployment pipelines.
            </p>
            <time className="text-sm text-muted-light">June 17, 2026</time>
          </header>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              What Is Bolt for Slack?
            </h2>
            <p className="text-muted">
              Bolt is Slack's official open-source framework for building Slack
              apps. Available for JavaScript and Python, Bolt handles
              authentication, event routing, and message parsing so you can
              focus on your AI agent logic. It integrates directly with the
              Slack CLI and supports the full Slack app lifecycle — from local
              development to production deployment.
            </p>
            <p className="text-muted">
              For teams that need to develop AI agents bolt Slack, Bolt provides
              the foundation. You define how your agent listens to events,
              processes messages, calls LLMs, and responds — all within a
              structured framework maintained by Slack.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 1: Set Up Your Environment with Slack CLI
            </h2>
            <p className="text-muted">
              The Slack CLI is your entry point for Slack Bolt framework
              development. Install it and authenticate with your workspace using
              these commands:
            </p>
            <div className="p-4 rounded-xl bg-gray-50 text-sm font-mono text-muted">
              slack login
              <br />
              slack create my-ai-agent --template bolt-js
            </div>
            <p className="text-muted">
              The <code className="bg-gray-100 px-1 rounded">slack create</code>{" "}
              command scaffolds a new project from a template. Choose from Bolt
              for JavaScript, Bolt for Python, or Deno Slack SDK templates. Each
              comes pre-configured with the right dependencies, import maps, and
              manifest structure.
            </p>
            <p className="text-muted">
              For existing projects, use{" "}
              <code className="bg-gray-100 px-1 rounded">slack init</code> to
              add Slack CLI support. The CLI detects your framework and sets up
              the required configuration files.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 2: Build Custom Functions for Your AI Agent
            </h2>
            <p className="text-muted">
              Custom functions are the building blocks of your AI agent. Each
              function encapsulates a discrete piece of logic — calling an LLM,
              querying a database, or transforming data. Functions have typed
              inputs and outputs, making them composable and testable.
            </p>
            <p className="text-muted">
              Here's an example Slack custom function development pattern for an
              AI agent that summarizes messages:
            </p>
            <div className="p-4 rounded-xl bg-gray-50 text-sm font-mono text-muted">
              {/* Define inputs: the message to summarize */}
              <br />
              {/* Call your LLM provider (OpenAI, Anthropic, etc.) */}
              <br />
              {/* Return the summary as a structured output */}
              <br />
              {/* Bolt routes the response back to Slack */}
            </div>
            <p className="text-muted">
              Your custom Slack AI agents LLM integration goes here — you choose
              the provider, the model, and the prompt strategy. Bolt handles the
              Slack communication layer.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 3: Wire Triggers to Activate Your Agent
            </h2>
            <p className="text-muted">
              Triggers define how users activate your AI agent. Use the Slack
              CLI to create and manage triggers with{" "}
              <code className="bg-gray-100 px-1 rounded">
                slack trigger create
              </code>
              . Each trigger connects to a workflow that calls your custom
              functions.
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Link triggers</h3>
                <p className="text-muted text-sm mt-1">
                  Share a link in a channel. Users click to start the AI agent
                  workflow. Ideal for on-demand agent invocations.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Webhook triggers</h3>
                <p className="text-muted text-sm mt-1">
                  Activate your AI agent from external systems — CRMs,
                  monitoring tools, or custom APIs sending events to Slack.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Scheduled triggers</h3>
                <p className="text-muted text-sm mt-1">
                  Run your AI agent on a schedule — daily reports, weekly
                  summaries, or hourly monitoring. Fully automated.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Event triggers</h3>
                <p className="text-muted text-sm mt-1">
                  React to channel activity — new members joining, specific
                  keywords posted, or emoji reactions from team members.
                </p>
              </div>
            </div>
            <p className="text-muted">
              This is the essence of Slack trigger automation — your AI agent
              responds to the right context at the right time without manual
              intervention.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 4: Test Locally with Sandbox and slack run
            </h2>
            <p className="text-muted">
              Before deploying, test your AI agent locally using{" "}
              <code className="bg-gray-100 px-1 rounded">slack run</code>. This
              command starts a local development server that Slack connects to
              for testing. The CLI automatically watches your files and restarts
              the server when changes are detected.
            </p>
            <p className="text-muted">
              Use Slack developer sandbox testing to create isolated workspaces
              that mirror your production environment. Sandboxes let you test AI
              agent behavior, trigger workflows, and verify responses without
              affecting real team conversations.
            </p>
            <p className="text-muted">
              The Slack CLI provides{" "}
              <code className="bg-gray-100 px-1 rounded">slack doctor</code> to
              diagnose configuration issues, and{" "}
              <code className="bg-gray-100 px-1 rounded">slack activity</code>{" "}
              to view app activity logs from the Slack Platform.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 5: Deploy with slack deploy and CI/CD
            </h2>
            <p className="text-muted">
              Once your AI agent is tested, run{" "}
              <code className="bg-gray-100 px-1 rounded">slack deploy</code> to
              push it to Slack's managed infrastructure. The deploy command
              packages your app, uploads it, and makes it available to your
              workspace.
            </p>
            <p className="text-muted">
              For production-grade development, set up a Slack app CI/CD
              pipeline with GitHub Actions. Here's a typical workflow:
            </p>
            <div className="p-4 rounded-xl bg-gray-50 text-sm font-mono text-muted">
              # .github/workflows/deno.yml
              <br /># On push: run deno fmt --check and deno lint
              <br /># On tag: run slack deploy --app $APP
            </div>
            <p className="text-muted">
              This automation ensures every change is formatted, linted, and
              tested before deployment. Use environment variables and service
              tokens for secure CI/CD authorization.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              From Scaffold to Production: The Full Workflow
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="font-bold text-yellow-600 shrink-0">1.</span>
                <p className="text-muted">
                  <strong>slack create</strong> — Scaffold your AI agent project
                  from a Bolt template
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-yellow-600 shrink-0">2.</span>
                <p className="text-muted">
                  <strong>Build functions</strong> — Write custom Slack
                  functions with your LLM of choice
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-yellow-600 shrink-0">3.</span>
                <p className="text-muted">
                  <strong>slack trigger create</strong> — Wire triggers to your
                  agent workflows
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-yellow-600 shrink-0">4.</span>
                <p className="text-muted">
                  <strong>slack run</strong> — Test locally with a developer
                  sandbox
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-yellow-600 shrink-0">5.</span>
                <p className="text-muted">
                  <strong>CI/CD</strong> — Automate testing and linting with
                  GitHub Actions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-yellow-600 shrink-0">6.</span>
                <p className="text-muted">
                  <strong>slack deploy</strong> — Push to production on Slack's
                  managed platform
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  What is the Slack CLI and how do I use it?
                </h3>
                <p className="text-muted text-sm mt-1">
                  The Slack CLI is a command-line tool for creating, running,
                  and deploying Slack apps. Use slack create to scaffold a new
                  project, slack run for local development, slack trigger create
                  for workflow triggers, and slack deploy for production
                  deployment.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Can I develop AI agents bolt Slack with Python?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Yes. Bolt for Python is fully supported by the Slack CLI. Use
                  the bolt-python template with slack create, or add Slack CLI
                  support to an existing Bolt for Python project with slack
                  init.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  How do I test my AI agent before deploying?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Use slack run for local development with automatic file
                  watching. For isolated testing, create a Slack developer
                  sandbox — a separate workspace that mirrors your production
                  environment without affecting real team conversations.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  What is Slack custom function development?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Custom functions encapsulate specific logic in your Slack app
                  — calling an LLM, querying a database, or processing data.
                  They have typed inputs and outputs, making them composable,
                  testable, and reusable across multiple workflows.
                </p>
              </div>
            </div>
          </section>

          <BlogRelatedArticles currentSlug="develop-ai-agents-bolt-slack" />

          <section className="flex flex-col gap-4">
            <BlogCtaCard
              title="Need a dedicated team to build your Slack AI agent?"
              description="We develop AI agents bolt Slack, build custom Slack functions, and set up CI/CD pipelines for automated deployment. A dedicated team for slack AI agents on a monthly subscription — no hiring required."
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
