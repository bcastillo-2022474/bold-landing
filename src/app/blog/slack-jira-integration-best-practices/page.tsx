import type { Metadata } from "next";
import Link from "next/link";
import { BlogCtaCard } from "@/components/blog-cta-card";
import { BlogRelatedArticles } from "@/components/blog-related-articles";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { META, SITE } from "@/constants/site";

export const metadata: Metadata = {
  title:
    "Slack and Jira Integration Best Practices: Automate Ticket Management and PR Reviews",
  description:
    "Learn the best practices for integrating Jira with Slack. Automate ticket notifications, review PRs, use slash commands, and connect Workflow Builder with Jira for seamless development workflows.",
  robots: META.robots,
  alternates: {
    canonical: "/blog/slack-jira-integration-best-practices",
  },
  openGraph: {
    title: "Slack and Jira Integration Best Practices",
    description:
      "Best practices for using Jira with Slack — ticket notifications, PR reviews, slash commands, and workflow automation for engineering teams.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Slack and Jira Integration Best Practices: Automate Ticket Management and PR Reviews",
  description:
    "Learn the best practices for integrating Jira with Slack. Automate ticket notifications, review PRs, use slash commands, and connect Workflow Builder with Jira for seamless development workflows.",
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
  datePublished: "2026-06-25",
  dateModified: "2026-06-25",
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
      name: "Jira Integration Best Practices",
      item: `${SITE.url}/blog/slack-jira-integration-best-practices`,
    },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Integrate Jira with Slack",
  description:
    "Best practices for connecting Jira and Slack — install the Jira Cloud app, configure notifications, use slash commands, and automate ticket management.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Install the Jira Cloud app for Slack",
      text: "Install the Jira Cloud app from the Slack App Directory. Once connected, type any issue key (like PROJ-123) and the Jira bot will automatically post a summary with status, assignee, and priority.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Configure project notifications per channel",
      text: "Subscribe specific Slack channels to specific Jira projects. Use the /jira manage command to control which notifications each channel receives. Keep bug alerts in #bugs, feature updates in #product, and sprint changes in #engineering.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Use slash commands for quick actions",
      text: "Type /jira <issue-key> to look up any issue instantly. Use /jira connect to link a Jira Cloud instance, and /jira manage to update notification preferences without leaving Slack.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Create Jira tickets from Slack workflows",
      text: "Use the Workflow Builder to create Jira tickets automatically from Slack triggers like emoji reactions, keyword mentions, or form submissions. This eliminates manual ticket creation.",
    },
  ],
};

export default function SlackJiraIntegrationPage() {
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
                Jira Integration Best Practices
              </span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Slack and Jira Integration Best Practices: Automate Ticket
              Management and PR Reviews
            </h1>
            <p className="text-muted text-base md:text-lg">
              Bringing Jira into Slack eliminates the constant context switching
              between your issue tracker and your communication hub. Here are
              the best practices for making the most of the Jira Cloud app,
              slash commands, and automated workflows.
            </p>
            <time className="text-sm text-muted-light">June 25, 2026</time>
          </header>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Why connect Jira to Slack?
            </h2>
            <p className="text-muted">
              Engineering teams live in two tools: Slack for communication and
              Jira for issue tracking. Every time someone switches from a Slack
              conversation to look up a ticket in Jira, they lose context and
              momentum. By integrating the two, your team can view, create, and
              update Jira tickets without leaving Slack. Notifications go
              directly to the right channels, and issue summaries appear
              automatically when someone mentions a ticket key.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Best Practice 1: Install the Jira Cloud app for instant issue
              lookups
            </h2>
            <p className="text-muted">
              The <strong>Jira Cloud app for Slack</strong> is the official
              integration that connects Jira Software Cloud with your Slack
              workspace. Once installed, simply type an issue key like{" "}
              <strong>PROJ-123</strong> in any channel or DM, and the Jira bot
              automatically posts an issue summary with the status, assignee,
              priority, and description. This works in real time as you type, so
              your team never has to ask "what's the status on that bug?" again.
            </p>
            <p className="text-muted">
              For Jira Server or Data Center instances, the older{" "}
              <strong>Jira Server alerts</strong> app is available. It focuses
              on notifications rather than interactive lookups, but still keeps
              your team informed.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Best Practice 2: Configure smart notifications per channel
            </h2>
            <p className="text-muted">
              Notification fatigue is real. Instead of flooding one channel with
              every Jira event, subscribe different channels to different Jira
              projects and event types.
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Channel-specific subscriptions
                </h3>
                <p className="text-muted text-sm mt-1">
                  Use the <strong>/jira manage</strong> slash command to
                  configure which channels receive updates from which projects.
                  Route bug alerts to <strong>#bugs</strong>, feature tickets to{" "}
                  <strong>#product</strong>, and sprint changes to{" "}
                  <strong>#engineering</strong>.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Event type filtering</h3>
                <p className="text-muted text-sm mt-1">
                  Filter by event type — issue created, status changed, comment
                  added, or assignee updated. This keeps each channel focused on
                  what matters to that team.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Best Practice 3: Master slash commands for quick actions
            </h2>
            <p className="text-muted">
              The Jira Cloud app provides three essential slash commands that
              let you interact with Jira entirely from Slack:
            </p>
            <div className="flex flex-col gap-3">
              <div className="p-4 rounded-[32px] bg-gray-50">
                <p className="font-bold font-mono text-sm">
                  /jira &lt;issue-key&gt;
                </p>
                <p className="text-muted text-sm mt-1">
                  Look up any issue instantly. Returns a formatted card with
                  status, assignee, priority, and description. No need to open
                  Jira at all for quick checks.
                </p>
              </div>
              <div className="p-4 rounded-[32px] bg-gray-50">
                <p className="font-bold font-mono text-sm">
                  /jira connect &lt;url&gt;
                </p>
                <p className="text-muted text-sm mt-1">
                  Link your Jira Cloud instance to Slack. Only needs to be done
                  once during setup.
                </p>
              </div>
              <div className="p-4 rounded-[32px] bg-gray-50">
                <p className="font-bold font-mono text-sm">/jira manage</p>
                <p className="text-muted text-sm mt-1">
                  Open the management panel to configure subscriptions,
                  connected projects, and notification preferences across all
                  channels.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Best Practice 4: Automate ticket creation from Slack workflows
            </h2>
            <p className="text-muted">
              One of the most powerful integrations is connecting{" "}
              <Link
                href="/blog/deploy-first-slack-workflow"
                className="text-yellow-600 hover:underline"
              >
                Slack's Workflow Builder
              </Link>{" "}
              with Jira. You can create automated workflows that generate Jira
              tickets when specific events happen in Slack — without writing any
              code.
            </p>
            <div className="flex flex-col gap-4 p-4 rounded-[32px] border border-black/5">
              <h3 className="font-bold text-lg">Practical examples</h3>
              <ul className="list-disc list-inside text-muted flex flex-col gap-2 text-sm">
                <li>
                  When someone reacts with 🐛 in <strong>#bugs</strong>,
                  automatically create a Jira bug ticket with the channel
                  message as the description
                </li>
                <li>
                  When a form is submitted in Slack, create a feature request
                  ticket in Jira and post the ticket ID back to the channel
                </li>
                <li>
                  On a scheduled cadence, generate a sprint report ticket with
                  recent GitHub commits and PR statuses
                </li>
              </ul>
            </div>
            <p className="text-muted">
              This eliminates manual ticket creation and ensures nothing falls
              through the cracks. For advanced automation needs, consider
              combining this with{" "}
              <Link
                href="/blog/slack-cicd-best-practices"
                className="text-yellow-600 hover:underline"
              >
                CI/CD pipelines
              </Link>{" "}
              to bridge PR merges directly to Jira ticket transitions.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Best Practice 5: Review PRs and tickets collaboratively in Slack
            </h2>
            <p className="text-muted">
              When a developer sends a pull request, the associated Jira ticket
              status should update automatically. Combine your GitHub or
              Bitbucket integration with Jira in Slack to create a unified
              review flow:
            </p>
            <ol className="list-decimal list-inside text-muted flex flex-col gap-3">
              <li>
                A PR is opened — notification appears in{" "}
                <strong>#pr-reviews</strong>
              </li>
              <li>Team discusses the PR in a Slack thread</li>
              <li>
                Team members use <strong>/jira PROJ-123</strong> to check the
                ticket status without leaving the thread
              </li>
              <li>
                When the PR is merged, the Jira ticket transitions automatically
                via the CI/CD pipeline
              </li>
              <li>
                The channel receives a "Deployed to staging" notification with
                the ticket summary
              </li>
            </ol>
            <p className="text-muted mt-2">
              This keeps the entire development lifecycle visible in Slack
              without forcing anyone to chase updates across multiple tools.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Quick reference</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4 font-bold">Feature</th>
                    <th className="text-left py-3 pr-4 font-bold">Method</th>
                    <th className="text-left py-3 pr-4 font-bold">
                      What you get
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Issue lookup</td>
                    <td className="py-3 pr-4">Type key or /jira</td>
                    <td className="py-3 pr-4 text-muted">
                      Instant summary card
                    </td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Notifications</td>
                    <td className="py-3 pr-4">App subscription</td>
                    <td className="py-3 pr-4 text-muted">
                      Per-channel, per-project filtering
                    </td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Ticket creation</td>
                    <td className="py-3 pr-4">Workflow Builder</td>
                    <td className="py-3 pr-4 text-muted">
                      Trigger-based auto-creation
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Management</td>
                    <td className="py-3 pr-4">/jira manage</td>
                    <td className="py-3 pr-4 text-muted">
                      Centralized config panel
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Can I use Jira with Slack on a free plan?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Yes. The Jira Cloud app for Slack works on all Slack plans.
                  Some advanced notification features and the Workflow Builder
                  connector are available on paid plans only.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Does it work with Jira Server or Data Center?
                </h3>
                <p className="text-muted text-sm mt-1">
                  The interactive Jira Cloud app requires Jira Software Cloud.
                  For Jira Server and Data Center, use the Jira Server alerts
                  integration which supports event notifications.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  How do I prevent notification overload?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Use the <strong>/jira manage</strong> command to configure
                  per-channel subscriptions. Subscribe each channel only to
                  relevant projects and event types. Use channel-specific
                  routing to keep alerts organized.
                </p>
              </div>
            </div>
          </section>

          <BlogRelatedArticles currentSlug="slack-jira-integration-best-practices" />

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Next steps</h2>
            <p className="text-muted">
              Start by installing the Jira Cloud app from the Slack App
              Directory, then configure your first channel subscription using{" "}
              <strong>/jira manage</strong>. From there, explore the Workflow
              Builder to automate ticket creation and connect your CI/CD
              pipeline for end-to-end visibility.
            </p>
            <BlogCtaCard
              title="Need a custom Jira + Slack integration?"
              description="We build custom Slack integrations, automated workflows, and AI agents that connect Jira, GitHub, and your entire toolchain. Book a call and tell us what you need."
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
