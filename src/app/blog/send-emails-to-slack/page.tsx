import type { Metadata } from "next";
import Link from "next/link";
import { BlogCtaCard } from "@/components/blog-cta-card";
import { BlogRelatedArticles } from "@/components/blog-related-articles";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "How to Send Emails to Slack: Complete Guide with 3 Methods",
  description:
    "Learn how to send emails to Slack using 3 methods: create a channel email address, use Gmail or Outlook plugins, or forward emails to Slackbot. Step-by-step tutorial.",
  alternates: {
    canonical: "/blog/send-emails-to-slack",
  },
  openGraph: {
    title: "How to Send Emails to Slack: Complete Guide with 3 Methods",
    description:
      "Send emails directly into Slack channels or DMs. Step-by-step guide covering channel email addresses, Gmail/Outlook plugins, and Slackbot forwarding.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Send Emails to Slack: Complete Guide with 3 Methods",
  description:
    "Learn how to send emails to Slack using 3 methods: create a channel email address for paid plans, use Gmail or Outlook plugins for individual forwarding, or set up Slackbot forwarding for personal use. Step-by-step instructions with screenshots.",
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
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
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
      name: "Send Emails to Slack",
      item: `${SITE.url}/blog/send-emails-to-slack`,
    },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Send Emails to Slack",
  description:
    "Three methods to send emails into Slack: email addresses for channels, Gmail/Outlook plugins, and Slackbot forwarding.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Choose a method",
      text: "Pick from three methods: channel email address (paid plans), Gmail/Outlook plugin (all plans), or Slackbot forwarding (all plans).",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Set up your email integration",
      text: "For channels: open the channel, click the name, go to Integrations, select 'Send emails to this channel', and get an email address. For plugins: install Slack for Gmail from Google Workspace Marketplace or Slack for Outlook from Microsoft AppSource. For Slackbot: go to Preferences > Messages & Media and get a forwarding address.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Start sending emails to Slack",
      text: "Send emails directly to the channel email address, or use the plugin button in Gmail/Outlook to forward individual emails, or configure your email client to auto-forward to your Slackbot address.",
    },
  ],
};

export default function SendEmailsToSlackPage() {
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
              <span className="text-black">How to Send Emails to Slack</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              How to Send Emails to Slack: Complete Guide with 3 Methods
            </h1>
            <p className="text-muted text-base md:text-lg">
              Slack helps you centralize work communications, including emails.
              There are three ways to send emails to Slack depending on your
              plan and how you want to use them once they arrive.
            </p>
            <time className="text-sm text-muted-light">June 24, 2026</time>
          </header>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Why send emails to Slack?
            </h2>
            <p className="text-muted">
              Email inboxes are crowded. Critical updates from clients,
              automated reports from monitoring tools, and support tickets often
              get buried under newsletters and spam. By forwarding emails
              directly into Slack channels, your team sees important
              communications right where conversations already happen. No more
              switching between email and Slack to find that one client message.
            </p>
            <p className="text-muted">
              Slack offers three distinct methods to bring emails into your
              workspace: dedicated email addresses for channels (paid plans),
              Gmail and Outlook plugins (all plans), and Slackbot forwarding
              (all plans). Each method serves a different use case, and you can
              combine them across your workspace.
            </p>
          </section>

          <section className="flex flex-col gap-4 p-6 rounded-2xl bg-yellow-300/20 border border-yellow-300">
            <h2 className="text-xl font-bold">Quick answer</h2>
            <p className="text-muted">
              You can send emails to Slack in three ways: create a unique email
              address for any channel or DM (paid plans), install the Slack
              plugin for Gmail or Outlook (all plans), or set up a Slackbot
              forwarding address (all plans). Paid plans give you channel email
              addresses for team-wide visibility. Plugins and Slackbot are
              better for individual use.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Method 1: Create an email address for a channel or DM
            </h2>
            <p className="text-muted">
              This method works on paid Slack plans (Pro, Business+, and
              Enterprise Grid). It creates a dedicated email address that anyone
              with it can use to send emails directly into a specific channel or
              direct message conversation.
            </p>
            <div className="flex flex-col gap-4 p-4 rounded-[32px] border border-black/5">
              <h3 className="font-bold text-lg">Step-by-step setup</h3>
              <ol className="flex flex-col gap-3 text-muted list-decimal pl-5">
                <li>
                  Open the channel or DM where you want to receive emails.
                </li>
                <li>
                  Click the channel name or member name in the conversation
                  header.
                </li>
                <li>Click the Integrations tab.</li>
                <li>
                  Select <strong>Send emails to this channel</strong> or{" "}
                  <strong>Send emails to this conversation</strong>.
                </li>
                <li>
                  Click <strong>Get email address</strong> to generate a unique
                  address.
                </li>
                <li>
                  Copy the address to set up auto-forwarding in your email
                  client or add it to your address book.
                </li>
              </ol>
            </div>
            <p className="text-muted">
              Once created, Slackbot posts a notice visible only to you, with an
              option to share the email address with the channel. Owners and
              admins can manage who can create email addresses for channels from
              the workspace settings.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">
              Customize how emails appear in Slack
            </h3>
            <p className="text-muted">
              You can set a custom label and icon for emails sent to a channel.
              Open the channel, click the name, go to Integrations, and select
              the email option. Click{" "}
              <strong>Customize email appearance</strong> to upload an image or
              pick an emoji, then set a display name. This makes it easy for
              team members to recognize automated email notifications at a
              glance.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">
              How to remove an email address from a channel
            </h3>
            <p className="text-muted">
              Owners, admins, and members with permission can delete the email
              address from any channel or DM they belong to. Open the
              conversation, go to Integrations, select the email option, and
              click <strong>Delete address</strong>. Once deleted, emails sent
              to that address will no longer post to Slack.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Method 2: Use Slack email plugins for Gmail and Outlook
            </h2>
            <p className="text-muted">
              Slack provides official plugins for Gmail and Outlook that let you
              forward individual emails to any channel or person. These plugins
              work on all Slack plans and are ideal for forwarding specific
              messages rather than setting up auto-forwarding.
            </p>

            <div className="flex flex-col gap-4 p-4 rounded-[32px] border border-black/5">
              <h3 className="font-bold text-lg">Slack for Gmail</h3>
              <ol className="flex flex-col gap-3 text-muted list-decimal pl-5">
                <li>
                  Install <strong>Slack for Gmail</strong> from the Google
                  Workspace Marketplace.
                </li>
                <li>
                  Open any email and click the Slack icon in the right sidebar.
                </li>
                <li>
                  Click <strong>Connect to Slack</strong> and authorize access.
                </li>
                <li>
                  Choose a channel or person from the dropdown and click{" "}
                  <strong>Send to [name]</strong>.
                </li>
              </ol>
              <p className="text-muted text-sm">
                To disconnect, go to Google Workspace Marketplace &gt; Manage
                apps &gt; find Slack &gt; click Manage &gt; Remove.
              </p>
            </div>

            <div className="flex flex-col gap-4 p-4 rounded-[32px] border border-black/5">
              <h3 className="font-bold text-lg">Slack for Outlook</h3>
              <p className="text-muted text-sm">
                Available for Office 365 only. Not compatible with on-premises
                Exchange, POP/IMAP, or national cloud deployments.
              </p>
              <ol className="flex flex-col gap-3 text-muted list-decimal pl-5">
                <li>
                  Install <strong>Slack for Outlook</strong> from Microsoft
                  AppSource.
                </li>
                <li>
                  Open an email and click the Slack icon (desktop) or the three
                  dots menu &gt; Slack for Outlook (browser).
                </li>
                <li>Select a channel or person and click Send to Slack.</li>
              </ol>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Method 3: Forward emails to Slackbot
            </h2>
            <p className="text-muted">
              Slackbot forwarding gives you a personal email address that
              delivers messages directly to your Slackbot DM. This works on all
              plans and is the simplest way to receive emails privately.
            </p>
            <div className="flex flex-col gap-4 p-4 rounded-[32px] border border-black/5">
              <h3 className="font-bold text-lg">Setup steps</h3>
              <ol className="flex flex-col gap-3 text-muted list-decimal pl-5">
                <li>Click your profile picture in the sidebar.</li>
                <li>Select Preferences &gt; Messages &amp; Media.</li>
                <li>
                  Scroll to <strong>Bring your emails into Slack</strong> and
                  click <strong>Get a forwarding address</strong>.
                </li>
                <li>
                  Copy the generated address and configure a forwarding rule in
                  your email client.
                </li>
              </ol>
            </div>
            <p className="text-muted">
              To stop forwarding, go back to the same section in Preferences and
              click <strong>Disable this address</strong>. If emails stop
              delivering, check with your workspace admin to confirm that
              incoming emails are enabled for your organization.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Method comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="text-left py-3 pr-4 font-bold">Method</th>
                    <th className="text-left py-3 pr-4 font-bold">Plan</th>
                    <th className="text-left py-3 pr-4 font-bold">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Channel email address</td>
                    <td className="py-3 pr-4">Paid plans</td>
                    <td className="py-3 pr-4 text-muted">
                      Team-wide visibility, auto-forwarding
                    </td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-3 pr-4">Gmail/Outlook plugin</td>
                    <td className="py-3 pr-4">All plans</td>
                    <td className="py-3 pr-4 text-muted">
                      Individual email forwarding
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Slackbot forwarding</td>
                    <td className="py-3 pr-4">All plans</td>
                    <td className="py-3 pr-4 text-muted">
                      Personal inbox consolidation
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
                  Can I send emails to Slack on a free plan?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Yes, you can use the Gmail and Outlook plugins or Slackbot
                  forwarding on the free plan. Channel email addresses require a
                  paid plan (Pro, Business+, or Enterprise Grid).
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Does HIPAA compliance affect sending emails to Slack?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Yes. If your Enterprise Grid organization is HIPAA-compliant,
                  sending emails to Slack is not available. This restriction
                  applies to all three methods.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Why are my emails not showing up in Slack?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Incoming emails may be disabled for your workspace. Contact an
                  owner or admin to check the workspace settings. Also verify
                  that you are sending from an authorized address.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Can I customize how forwarded emails look in Slack?
                </h3>
                <p className="text-muted text-sm mt-1">
                  For channel email addresses, yes — you can set a custom icon
                  and display name. For plugins and Slackbot forwarding, the
                  appearance is determined by Slack's default formatting.
                </p>
              </div>
            </div>
          </section>

          <BlogRelatedArticles currentSlug="send-emails-to-slack" />

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Next steps</h2>
            <p className="text-muted">
              Sending emails to Slack is one of the easiest ways to reduce
              context switching and keep your team aligned. Start with the
              method that fits your plan and workflow — channel addresses for
              team visibility, plugins for selective forwarding, or Slackbot for
              personal use.
            </p>
            <BlogCtaCard
              title="Need help setting up Slack integrations?"
              description="We build custom Slack workflows, integrations, and automation for teams that want to move faster. Book a call and tell us what you need."
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
