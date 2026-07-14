import type { Metadata } from "next";
import Link from "next/link";
import { BlogCtaCard } from "@/components/blog-cta-card";
import { BlogRelatedArticles } from "@/components/blog-related-articles";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { META, SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "How to Use Slack's MCP Server with AI Agents: A Complete Guide",
  description:
    "Learn how to connect AI agents to Slack using the MCP server. Search messages, manage canvases, send messages, and orchestrate Slack AI agents from mobile or desktop with natural language.",
  robots: META.robots,
  alternates: {
    canonical: "/blog/slack-mcp-server-guide",
  },
  openGraph: {
    title: "How to Use Slack's MCP Server with AI Agents",
    description:
      "Connect AI agents to Slack via MCP — search, message, canvas, and orchestrate from anywhere including your phone.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Use Slack's MCP Server with AI Agents: A Complete Guide",
  description:
    "Learn how to connect AI agents to Slack via MCP. Search messages, manage canvases, send messages, and orchestrate workflows using natural language — from desktop or mobile.",
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
  datePublished: "2026-06-18",
  dateModified: "2026-06-18",
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
      name: "Slack MCP Server Guide",
      item: `${SITE.url}/blog/slack-mcp-server-guide`,
    },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Use Slack's MCP Server with AI Agents",
  description:
    "Connect third-party AI assistants to your Slack workspace via the Model Context Protocol (MCP) server and start interacting with your data using natural language.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Choose a partner AI assistant",
      text: "Pick from supported partners like Claude, Perplexity, OpenAI, Cursor, or any MCP-compatible client. Follow their setup instructions to install the Slack MCP integration.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Connect the assistant to Slack MCP",
      text: "Authenticate and authorize the AI assistant. Grant it permission to access your Slack workspace through the MCP server. The assistant will be able to search messages, read channels, and perform actions on your behalf.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Start interacting via natural language",
      text: "Ask the AI assistant to find messages, send notifications, create canvases, or look up member profiles. All actions stay within your workspace's security boundaries.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Extend with custom AI agents like Hermes",
      text: "For advanced use cases, connect Hermes Agent or other custom Slack AI agents via MCP to orchestrate multi-step workflows, automate responses, and build custom integrations.",
    },
  ],
};

export default function SlackMcpServerGuidePage() {
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
                How to Use Slack&apos;s MCP Server with AI Agents
              </span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              How to Use Slack&apos;s MCP Server with AI Agents: A Complete
              Guide
            </h1>
            <p className="text-muted text-base md:text-lg">
              The MCP Slack server lets AI assistants like Claude and Perplexity
              securely access your workspace — search messages, send messages,
              create canvases, and look up members. Here&apos;s how to set it up
              and connect it with tools like Hermes Agent for Slack AI agents
              orchestation.
            </p>
            <time className="text-sm text-muted-light">June 18, 2026</time>
          </header>

          <section className="flex flex-col gap-4 p-6 rounded-2xl bg-yellow-300/20 border border-yellow-300">
            <h2 className="text-xl font-bold">Quick answer</h2>
            <p className="text-muted">
              MCP Slack connects third-party AI assistants to your Slack
              workspace through the Model Context Protocol. Choose a partner
              assistant, authenticate with your workspace, and start searching
              messages, sending messages, managing canvases, and accessing
              member info — all in natural language. For advanced needs, connect
              Hermes Agent Slack for custom AI agents orchestation across
              channels, mobile, and automated pipelines.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              What is the MCP Slack server?
            </h2>
            <p className="text-muted">
              The Model Context Protocol (MCP) is an open-source protocol that
              lets AI assistants securely connect to external data sources.
              Slack&apos;s MCP server gives third-party AI assistants — like
              Claude, Perplexity, and OpenAI — secure, scoped access to your
              Slack workspace. Instead of switching between tools, you can ask
              an AI to find a message from last week, check a member&apos;s
              availability, or post an update to a channel, all from the same
              chat interface.
            </p>
            <p className="text-muted">
              Slack MCP is a game-changer for Slack AI agents orchestation. It
              allows multiple AI tools to interoperate within your workspace
              without custom API integrations. Whether you&apos;re using a
              ready-made assistant or a custom agent like Hermes, MCP provides a
              standardized way for AI to read, write, and manage Slack data.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              What can AI assistants do with MCP Slack?
            </h2>
            <p className="text-muted">
              Once connected through the MCP server, AI assistants can perform
              these actions inside your workspace:
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Search inside Slack</h3>
                <p className="text-muted text-sm mt-1">
                  Find messages, files, members, and channels across your entire
                  workspace or Enterprise Grid organization. No more digging
                  through endless threads.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Read and send messages</h3>
                <p className="text-muted text-sm mt-1">
                  Retrieve channel history and send messages in any type of
                  conversation — public channels, private channels, or DMs.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Manage canvases</h3>
                <p className="text-muted text-sm mt-1">
                  Create and read Slack canvases directly from the AI assistant.
                  Use it to document decisions, share project updates, or
                  capture meeting notes.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Access member information</h3>
                <p className="text-muted text-sm mt-1">
                  Look up profile details including custom fields and statuses.
                  Great for finding who works on what without browsing the
                  directory.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 1: Choose an AI assistant partner
            </h2>
            <p className="text-muted">
              Slack&apos;s MCP server works with a growing list of partners.
              Pick the one that fits your workflow and follow their setup
              instructions:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Claude",
                "Credal AI",
                "Cursor",
                "Dropbox",
                "Guru",
                "Jasper",
                "Notion",
                "OpenAI",
                "Perplexity",
                "Thoughtspot",
                "Wordsmith",
                "Workleap",
              ].map((partner) => (
                <div
                  key={partner}
                  className="p-3 rounded-xl border border-black/5 text-center font-medium text-sm"
                >
                  {partner}
                </div>
              ))}
            </div>
            <p className="text-muted text-sm">
              Each partner has its own setup flow. In most cases, you install
              their Slack app, authenticate, and grant the MCP server permission
              to access your workspace. The process takes a few minutes.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 2: Connect the AI assistant to your Slack MCP server
            </h2>
            <p className="text-muted">
              After choosing a partner, authorize the connection. The MCP server
              uses OAuth to grant the AI assistant scoped access — it can only
              perform the actions you approve. You can revoke access at any time
              from the Slack app settings.
            </p>
            <p className="text-muted">
              Once connected, the AI assistant can start searching messages,
              sending messages, managing canvases, and looking up member
              profiles. Everything happens through natural language prompts, so
              there&apos;s no need to remember Slack commands or navigate menus.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 3: Start using MCP Slack from any device
            </h2>
            <p className="text-muted">
              Once the connection is live, you can interact with your Slack data
              through the AI assistant&apos;s interface. Ask it to find a
              message from a specific channel, summarize a thread, or post an
              update — and it handles the Slack API calls through the MCP
              server.
            </p>
            <p className="text-muted">
              For teams on the go, the Slack mobile AI agent integration is
              especially powerful. You can ask an AI assistant to search
              messages, check member status, or send messages directly from your
              phone, bridging the gap between desktop and mobile productivity.
              The Slack mobile AI agent experience through MCP means you never
              miss critical information, even when you&apos;re away from your
              desk.
            </p>
            <div className="p-4 rounded-xl bg-gray-50 text-sm font-mono text-muted">
              &ldquo;Find the message John sent last Tuesday about the Q3
              roadmap in #engineering&rdquo;
              <br />
              <br />
              &ldquo;Create a canvas for our sprint retro notes and add
              yesterday&apos;s discussion points&rdquo;
              <br />
              <br />
              &ldquo;Check if Sarah is available and send her a DM asking for
              the design files&rdquo;
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              How Hermes Agent integrates with MCP Slack
            </h2>
            <p className="text-muted">
              For teams that need more than off-the-shelf assistants, Hermes
              Agent Slack brings custom AI agents orchestation to your MCP
              setup. Hermes connects to Slack through the MCP server and extends
              its capabilities with multi-step workflows, scheduled automations,
              and custom integrations.
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Multi-step AI agents orchestation
                </h3>
                <p className="text-muted text-sm mt-1">
                  While the MCP server handles single requests, Hermes chains
                  multiple actions together. For example: search messages → pull
                  insights → format a report → post to a channel — all in one
                  automated sequence.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Scheduled and event-driven automations
                </h3>
                <p className="text-muted text-sm mt-1">
                  Hermes can respond to triggers on a schedule or based on
                  events like new messages, member joins, or reactions —
                  combining MCP access with workflow automation.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Mobile-ready Slack AI agents
                </h3>
                <p className="text-muted text-sm mt-1">
                  Hermes works seamlessly as a Slack mobile AI agent, allowing
                  you to trigger automations, check on tasks, and interact with
                  your AI agents from your phone.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">Pro tips</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Start with a test channel</h3>
                <p className="text-muted text-sm mt-1">
                  Before giving any AI assistant broad access, test the MCP
                  connection in a single private channel. Verify that it can
                  search messages, send messages, and read member profiles
                  correctly.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Use MCP with Slack mobile AI agent for on-the-go productivity
                </h3>
                <p className="text-muted text-sm mt-1">
                  One of the biggest advantages of Slack MCP is that it works
                  with mobile AI assistants. The Slack mobile AI agent
                  integration means you can search messages, look up members,
                  and manage canvases from your phone using natural language.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Combine MCP with Hermes for full AI agents orchestation
                </h3>
                <p className="text-muted text-sm mt-1">
                  For production-grade Slack AI agents orchestation, pair the
                  MCP server with Hermes Agent. Hermes handles complex
                  multi-step workflows, scheduled tasks, and custom integrations
                  that go beyond what off-the-shelf assistants can do.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">What is MCP in Slack?</h3>
                <p className="text-muted text-sm mt-1">
                  MCP stands for Model Context Protocol, an open-source protocol
                  that allows AI assistants to securely access external data.
                  The MCP Slack server gives AI tools like Claude, Perplexity,
                  and Hermes access to your workspace so they can search
                  messages, send messages, manage canvases, and look up member
                  information.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Can MCP Slack work with custom AI agents?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Yes. Hermes Agent Slack integrates with the MCP server for
                  custom Slack AI agents orchestation. You can build multi-step
                  workflows, scheduled automations, and custom responses that go
                  beyond what standard AI assistants offer.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Can I use Slack MCP from my phone?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Absolutely. The Slack mobile AI agent integration through MCP
                  lets you search messages, send messages, and manage your
                  workspace from any mobile device using natural language.
                </p>
              </div>
            </div>
          </section>

          <BlogRelatedArticles currentSlug="slack-mcp-server-guide" />

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Next steps</h2>
            <p className="text-muted">
              The MCP Slack server opens up a new way to work with your
              workspace. Start with a partner assistant to get familiar, then
              level up with Hermes Agent for custom Slack AI agents
              orchestation, mobile-ready agents, and automated pipelines that
              run on your terms.
            </p>
            <BlogCtaCard
              title="Need help with MCP Slack or custom AI agents?"
              description="We build custom AI agents, MCP integrations, and Slack automation for teams that want to move faster. Book a call and tell us what you need."
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
