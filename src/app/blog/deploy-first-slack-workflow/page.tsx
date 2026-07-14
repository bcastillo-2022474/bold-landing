import type { Metadata } from "next";
import Link from "next/link";
import { BlogCtaCard } from "@/components/blog-cta-card";
import { BlogRelatedArticles } from "@/components/blog-related-articles";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { META, SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "How to Deploy Your First Workflow in Slack",
  description:
    "Learn how to use the Slack workflows builder to build and publish automated workflows. Step-by-step guide covering triggers, steps, variables, buttons, and publishing.",
  robots: META.robots,
  alternates: {
    canonical: "/blog/deploy-first-slack-workflow",
  },
  openGraph: {
    title: "How to Deploy Your First Workflow in Slack",
    description:
      "Step-by-step guide to the Slack workflows builder — create, configure, and publish automated workflows in Slack.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Deploy Your First Workflow in Slack",
  description:
    "A step-by-step guide to the Slack workflows builder — from choosing a trigger to adding steps, variables, and publishing your first automation.",
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
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
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
      name: "Deploy Your First Workflow in Slack",
      item: `${SITE.url}/blog/deploy-first-slack-workflow`,
    },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Deploy Your First Workflow in Slack",
  description:
    "Build and publish an automated workflow using the Slack workflows builder.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open the Workflow Builder",
      text: "On desktop, click Tools in the sidebar. Under Workflows, click New in the top right corner. Select Create Workflow.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Choose a trigger",
      text: "Select how your workflow starts: from a link, webhook, schedule, when a member joins a channel, when an emoji reaction is used, or when a message is posted with specific keywords.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Add steps",
      text: "Add Slack actions (send a message, add someone to a channel) or connector steps (Google Sheets, Zoom). Use variables to pass dynamic data and buttons to pause the workflow for user input.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Configure permissions and publish",
      text: "Add a title, description, and icon. Set workflow managers and access permissions. Click Finish, review the details, then click Publish.",
    },
  ],
};

export default function DeployFirstWorkflowPage() {
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
                How to Deploy Your First Workflow in Slack
              </span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              How to Deploy Your First Workflow in Slack
            </h1>
            <p className="text-muted text-base md:text-lg">
              Automate repetitive tasks and work more efficiently in Slack. This
              guide walks you through building your first workflow from scratch
              using the Workflow Builder.
            </p>
            <time className="text-sm text-muted-light">June 16, 2026</time>
          </header>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              What is a Slack workflow?
            </h2>
            <p className="text-muted">
              A Slack workflow is an automated sequence of actions that runs
              when a specific trigger event happens. Instead of manually posting
              messages, adding people to channels, or sending reminders, you can
              set up a workflow to do it for you. Workflows live inside Slack
              and can connect with third-party services like Google Sheets,
              Zoom, and Jira.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Prerequisites</h2>
            <ul className="list-disc list-inside text-muted flex flex-col gap-2">
              <li>A Slack workspace on a paid plan</li>
              <li>Permission to create workflows (default for all members)</li>
              <li>
                Access to the Workflow Builder from the Tools or Automations tab
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 1: Open the Workflow Builder
            </h2>
            <p className="text-muted">
              On desktop, click <strong>Tools</strong> in the sidebar. Under{" "}
              <strong>Workflows</strong>, click <strong>New</strong> in the top
              right corner, then select <strong>Create Workflow</strong>.
            </p>
            <p className="text-muted">
              If you don&apos;t see the Tools tab, look for the{" "}
              <strong>Automations</strong> tab instead. You may need to click{" "}
              <strong>More</strong> to find it.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 2: Choose a trigger
            </h2>
            <p className="text-muted">
              The trigger is what starts your workflow. Click{" "}
              <strong>Choose an event</strong> and select one of these options:
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">From a link</h3>
                <p className="text-muted text-sm mt-1">
                  Share a link in Slack. People click a{" "}
                  <strong>Start Workflow</strong> button to run it. Note: links
                  only work inside Slack, not from a browser.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">From a webhook</h3>
                <p className="text-muted text-sm mt-1">
                  Configure external events to trigger your workflow via a
                  webhook URL.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Scheduled</h3>
                <p className="text-muted text-sm mt-1">
                  Set a date, time, and cadence. The workflow runs automatically
                  on schedule.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  When a member joins a channel
                </h3>
                <p className="text-muted text-sm mt-1">
                  Specify a channel. The workflow runs every time someone joins
                  it.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  When an emoji reaction is used
                </h3>
                <p className="text-muted text-sm mt-1">
                  Pick an emoji and a channel. The workflow triggers when
                  someone uses that reaction.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">When a message is posted</h3>
                <p className="text-muted text-sm mt-1">
                  The workflow starts when a message containing specific
                  keywords is posted in a channel.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 3: Add steps
            </h2>
            <p className="text-muted">
              Steps are the actions your workflow performs. They run in the
              order you specify when someone starts the workflow.
            </p>
            <h3 className="text-xl font-bold">Types of steps</h3>
            <div className="flex flex-col gap-3">
              <div className="p-4 rounded-[32px] bg-gray-50">
                <h4 className="font-bold">Slack actions</h4>
                <p className="text-muted text-sm">
                  Send a message, add someone to a channel, create a channel, or
                  set a channel topic.
                </p>
              </div>
              <div className="p-4 rounded-[32px] bg-gray-50">
                <h4 className="font-bold">Connector steps</h4>
                <p className="text-muted text-sm">
                  Perform actions in third-party services like Google Sheets
                  (add a row), Zoom (create a meeting), or Jira (create a
                  ticket).
                </p>
              </div>
              <div className="p-4 rounded-[32px] bg-gray-50">
                <h4 className="font-bold">Custom steps</h4>
                <p className="text-muted text-sm">
                  Built by developers for your organization using Slack&apos;s
                  APIs.
                </p>
              </div>
            </div>
            <h3 className="text-xl font-bold">Using variables and buttons</h3>
            <p className="text-muted">
              <strong>Variables</strong> let your workflow use information from
              previous steps. For example, you can insert the person who started
              the workflow as a variable in a message. Click the insert variable
              icon in a step to select from available variables.
            </p>
            <p className="text-muted">
              <strong>Buttons</strong> pause the workflow until someone clicks
              them. You can use buttons to show forms, request approvals, or let
              someone claim a task. You can also add branching to route users
              through different paths based on conditions.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 4: Configure permissions and publish
            </h2>
            <p className="text-muted">
              Before publishing, add a title, description, and icon by clicking
              the workflow icon in the top left corner of the Workflow Builder.
            </p>
            <h3 className="text-xl font-bold">Add workflow managers</h3>
            <p className="text-muted">
              Managers can edit, unpublish, or delete the workflow. Click the
              three-dot icon in the top right, select <strong>Settings</strong>,
              then add people under <strong>Workflow Managers</strong>.
            </p>
            <h3 className="text-xl font-bold">Set access permissions</h3>
            <p className="text-muted">
              By default, everyone in your workspace can find and use your
              workflow. To change this, go to <strong>Settings</strong> and
              adjust who can find, use, and copy the workflow. You can also
              include external organizations connected via Slack Connect.
            </p>
            <h3 className="text-xl font-bold">Publish</h3>
            <p className="text-muted">
              Click <strong>Finish</strong> in the top right corner, review the
              details and permissions, then click <strong>Publish</strong>. If
              your workflow starts from a link, share the link in Slack so
              people can use it.
            </p>
          </section>

          <section className="flex flex-col gap-6 p-6 md:p-8 rounded-[32px] bg-gray-50">
            <h2 className="text-2xl md:text-3xl font-bold">
              Real example: Build an onboarding workflow
            </h2>
            <p className="text-muted">
              Here&apos;s a practical example: create a workflow that runs every
              time someone joins your #new-hires channel.
            </p>
            <ol className="list-decimal list-inside text-muted flex flex-col gap-3">
              <li>
                <strong>Trigger:</strong> When a member joins the #new-hires
                channel
              </li>
              <li>
                <strong>Step 1:</strong> Send a welcome message to the channel
                mentioning the new member
              </li>
              <li>
                <strong>Step 2:</strong> Add the new member to #engineering and
                #announcements
              </li>
              <li>
                <strong>Step 3:</strong> Send a direct message to the onboarding
                buddy with the new member&apos;s name
              </li>
              <li>
                <strong>Step 4:</strong> Create a Google Sheets row to track the
                onboarding
              </li>
            </ol>
            <p className="text-muted mt-2">
              Once published, every new hire gets a smooth onboarding experience
              automatically.
            </p>
          </section>

          <BlogRelatedArticles currentSlug="deploy-first-slack-workflow" />

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Next steps</h2>
            <p className="text-muted">
              Now that you&apos;ve deployed your first workflow, try adding
              branching for conditional logic, connecting more third-party apps,
              or building custom steps with Slack&apos;s API.
            </p>
            <BlogCtaCard
              title="Need a custom workflow or AI agent?"
              description="We build custom Slack workflows, AI agents, and automation for teams that want to move faster. Book a call and tell us what you need."
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
