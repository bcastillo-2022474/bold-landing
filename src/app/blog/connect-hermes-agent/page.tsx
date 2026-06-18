import type { Metadata } from "next";
import Link from "next/link";
import { BlogCtaCard } from "@/components/blog-cta-card";
import { BlogRelatedArticles } from "@/components/blog-related-articles";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Connect Hermes Agent to Your Slack Workspace",
  description:
    "Step-by-step guide to connecting your AI Slack agent to your workspace. Learn how to create a Slack app, set the right scopes, store tokens, and verify your first AI-powered reply.",
  alternates: {
    canonical: "/blog/connect-hermes-agent",
  },
  openGraph: {
    title: "Connect Hermes Agent to Your Slack Workspace",
    description:
      "Turn your Slack into an AI-powered command center. Step-by-step AI Slack agent setup guide.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Connect Hermes Agent to Your Slack Workspace",
  description:
    "Step-by-step guide to connecting an AI Slack agent to your workspace. Learn how to create a Slack app, set the right scopes, store tokens, and verify your first AI-powered reply.",
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
      name: "Connect Hermes Agent to Slack",
      item: `${SITE.url}/blog/connect-hermes-agent`,
    },
  ],
};

export default function ConnectHermesAgentPage() {
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
                Connect Hermes Agent to Your Slack Workspace
              </span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Connect Hermes Agent to Your Slack Workspace
            </h1>
            <p className="text-muted text-base md:text-lg">
              Turn your Slack workspace into an AI-powered command center with
              an AI Slack agent. Your team can ask questions, trigger
              automations, and get research done without leaving the tools they
              already use.
            </p>
            <time className="text-sm text-muted-light">June 16, 2026</time>
          </header>

          <section className="flex flex-col gap-4 p-6 rounded-2xl bg-yellow-300/20 border border-yellow-300">
            <h2 className="text-xl font-bold">Quick answer</h2>
            <p className="text-muted">
              Hermes Slack setup starts with one private test channel, a Slack
              app with only the scopes the workflow needs, the token stored in
              the active Hermes gateway profile, and one verified reply before
              you add production channels, scheduled reports, or workflow
              automation.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Before you start</h2>
            <ul className="list-disc list-inside text-muted flex flex-col gap-2">
              <li>
                Hermes Agent installed and running on a publicly accessible
                server
              </li>
              <li>Slack workspace admin permissions</li>
              <li>A public URL or ngrok tunnel for local development</li>
            </ul>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 1: Create a Slack app for Hermes
            </h2>
            <p className="text-muted">
              Go to the{" "}
              <a
                href="https://api.slack.com/apps"
                className="underline hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                Slack API dashboard
              </a>{" "}
              and create a new app. Choose <strong>From scratch</strong>, name
              it &quot;Hermes&quot;, and select your target workspace. Install
              it into one private test channel before exposing it to production
              channels.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 2: Add the minimum Slack scopes
            </h2>
            <p className="text-muted">
              Grant only the bot token scopes your workflow actually needs.
              Navigate to <strong>OAuth & Permissions</strong> and add:
            </p>
            <ul className="list-disc list-inside text-muted flex flex-col gap-2">
              <li>
                <code className="bg-gray-100 px-1 rounded">chat:write</code> —
                Send messages as Hermes
              </li>
              <li>
                <code className="bg-gray-100 px-1 rounded">
                  channels:history
                </code>{" "}
                — Read channel messages
              </li>
              <li>
                <code className="bg-gray-100 px-1 rounded">im:history</code> —
                Read direct messages
              </li>
              <li>
                <code className="bg-gray-100 px-1 rounded">
                  app_mentions:read
                </code>{" "}
                — Respond when mentioned
              </li>
            </ul>
            <p className="text-muted">
              Avoid broad workspace access until the first workflow is verified.
              If you add scopes after the initial install, you&apos;ll need to
              reinstall the app.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 3: Store the token in Hermes
            </h2>
            <p className="text-muted">
              After installing the app to your workspace, copy the{" "}
              <strong>Bot User OAuth Token</strong>. Store it in the active
              Hermes gateway profile or environment configuration — never in
              prompts, screenshots, screenshots, or committed repository files.
            </p>
            <p className="text-muted">
              If you&apos;re using the Hermes{" "}
              <code className="bg-gray-100 px-1 rounded">config.yaml</code>, add
              the token under the Slack gateway section and set the profile as
              active.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 4: Restart the Hermes gateway
            </h2>
            <p className="text-muted">
              Restart the Hermes gateway process so it picks up the new token
              and profile. Verify the process is using the correct profile by
              checking the startup logs. If you&apos;re running Hermes with
              Docker, restart the container.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 5: Verify one private channel reply
            </h2>
            <p className="text-muted">
              Send a harmless test message in your private test channel and
              mention Hermes. Check the gateway logs to confirm the message was
              received and a response was sent. Once verified, you can add
              production channels, scheduled reports, or workflow automation.
            </p>
            <div className="p-4 rounded-xl bg-gray-50 text-sm font-mono text-muted">
              /invite @hermes
              <br />
              @hermes hello, can you hear me?
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">Pro tips</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Use Socket Mode for local development
                </h3>
                <p className="text-muted text-sm mt-1">
                  Socket Mode in Slack&apos;s developer settings doesn&apos;t
                  require a public URL and is much easier to set up for testing.
                  Enable it in your app&apos;s Settings page.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Restrict Hermes to specific channels
                </h3>
                <p className="text-muted text-sm mt-1">
                  Use{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    slack: allowedChannelIds
                  </code>{" "}
                  in your Hermes configuration to prevent the agent from
                  responding in every channel.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Configure response batching
                </h3>
                <p className="text-muted text-sm mt-1">
                  Slack&apos;s rate limits are strict. If Hermes sends many
                  messages quickly, configure response batching in the gateway
                  settings to avoid hitting limits.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">Troubleshooting</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl border border-red-200 bg-red-50">
                <h3 className="font-bold text-lg text-red-800">
                  Slack app shows &quot;not responding&quot; when mentioned
                </h3>
                <p className="text-muted text-sm mt-1">
                  Slack requires a response within 3 seconds. Enable async
                  response mode in
                  <code className="bg-gray-100 px-1 rounded"> config.yaml</code>{" "}
                  so Hermes acknowledges the message immediately and follows up
                  with the full response.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-red-200 bg-red-50">
                <h3 className="font-bold text-lg text-red-800">
                  OAuth scopes error when installing
                </h3>
                <p className="text-muted text-sm mt-1">
                  Make sure you&apos;ve added all required bot token scopes:{" "}
                  <code className="bg-gray-100 px-1 rounded">chat:write</code>,{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    channels:history
                  </code>
                  , <code className="bg-gray-100 px-1 rounded">im:history</code>
                  , and{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    app_mentions:read
                  </code>
                  . Missing scopes require reinstalling the app.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-red-200 bg-red-50">
                <h3 className="font-bold text-lg text-red-800">
                  Hermes not receiving messages in private channels
                </h3>
                <p className="text-muted text-sm mt-1">
                  Hermes must be explicitly invited to private channels with{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    /invite @hermes
                  </code>
                  . Bot scopes don&apos;t grant access to private channels by
                  default.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">How do I set up Hermes Slack?</h3>
                <p className="text-muted text-sm mt-1">
                  Create a Slack app, install it into a private test channel,
                  store the token in the active Hermes gateway profile, restart
                  the gateway, then verify one reply before adding production
                  channels.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Can Hermes post scheduled reports to Slack?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Yes. Use Hermes cron with an explicit delivery target after
                  the Slack gateway is verified. Start with a harmless test
                  report before sending production alerts.
                </p>
              </div>
            </div>
          </section>

          <BlogRelatedArticles currentSlug="connect-hermes-agent" />

          <section className="flex flex-col gap-4">
            <BlogCtaCard
              title="Need help with your AI agent setup?"
              description="We build custom AI agents, workflows, and automation for teams on Slack. Book a call and tell us what you need."
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
