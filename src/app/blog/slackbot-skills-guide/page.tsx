import type { Metadata } from "next";
import Link from "next/link";
import { BlogCtaCard } from "@/components/blog-cta-card";
import { BlogRelatedArticles } from "@/components/blog-related-articles";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { META, SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Your Team Is Sitting on an AI Feature They Probably Scrolled Right Past",
  description:
    "Slack quietly shipped Skills for Slackbot — step-by-step instructions your team can build, share, and reuse. Turn recurring processes into executable workflows without writing a single line of code.",
  robots: META.robots,
  alternates: {
    canonical: "/blog/slackbot-skills-guide",
  },
  openGraph: {
    title: "Slack Just Quietly Shipped Skills for Slackbot — Here's Why Most Teams Will Miss This",
    description:
      "Slackbot Skills let your team encode repeatable processes. Build once, share across channels, and let Slackbot execute them every single time.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Your Team Is Sitting on an AI Feature They Probably Scrolled Right Past",
  description:
    "Slack quietly shipped Skills for Slackbot — step-by-step instructions your team can build, share, and reuse. Turn tribal knowledge into executable infrastructure without writing code.",
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
  datePublished: "2026-06-26",
  dateModified: "2026-06-26",
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
      name: "Slackbot Skills Guide",
      item: `${SITE.url}/blog/slackbot-skills-guide`,
    },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create and Use Slackbot Skills",
  description:
    "Build step-by-step instructions for Slackbot to handle recurring tasks — from quarterly reports to support triage.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open Slackbot's Skills tab",
      text: "On desktop, click Slackbot at the top of your screen. Navigate to the Skills tab to see available skills and create new ones.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Create a Skill with Slackbot's help",
      text: "Click Add Skill and select Create with Slackbot. Slackbot will ask you a series of questions to understand what you want the Skill to do, then create a draft for your approval.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Or build a Skill from scratch",
      text: "Click Add Skill and select Create from Scratch. Write a clear description, name your Skill, add step-by-step instructions, and define the expected output format — like a Canvas or a Slack message draft.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Share the Skill with your team",
      text: "Hover over the Skill and click the Share icon. Choose specific channels or individuals. Once shared, Slackbot will automatically use the Skill when relevant questions are asked.",
    },
  ],
};

export default function SlackbotSkillsGuidePage() {
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
                Slackbot Skills Guide
              </span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Your Team Is Sitting on an AI Feature They Probably Scrolled Right
              Past
            </h1>
            <p className="text-muted text-base md:text-lg">
              Slack just quietly shipped Skills for Slackbot — and most teams
              won&apos;t notice until a competitor is already using it to move
              faster than them.
            </p>
            <time className="text-sm text-muted-light">June 26, 2026</time>
          </header>

          <section className="flex flex-col gap-4 p-6 rounded-2xl bg-yellow-300/20 border border-yellow-300">
            <h2 className="text-xl font-bold">Quick answer</h2>
            <p className="text-muted">
              Slackbot Skills are step-by-step instructions you give Slackbot
              for tasks your team repeats constantly — building quarterly
              reports, drafting event plans, or pulling data across
              spreadsheets. Available on Business+ and Enterprise Grid plans.
              Anyone on your team can create them, share them to channels or
              individuals, and owners can assign them by role. You can even
              import an existing Canvas as a Skill. Once a Skill exists,
              Slackbot executes the process the same way, every single time.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              What are Slackbot Skills?
            </h2>
            <p className="text-muted">
              Instead of Slackbot giving you a generic, one-off answer every
              time, Skills let you encode repeatable processes. Think of them as
              executable Standard Operating Procedures that live inside your
              workspace. You describe the steps, Slackbot follows them. No more
              re-explaining how to run a client kickoff or triage a support
              ticket. No more "well it depends who does it." The process becomes
              the process.
            </p>
            <p className="text-muted">
              Slackbot automatically finds and uses the right Skill when you
              ask a relevant question. You can also manually attach a Skill to a
              prompt the same way you attach a file, channel, or person. The
              result is consistent, repeatable execution across your entire
              team — regardless of who is doing the work.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              What makes Skills a game-changer
            </h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Anyone on the team can build one
                </h3>
                <p className="text-muted text-sm mt-1">
                  You don&apos;t need admin access or developer skills. If you
                  know the process, you can turn it into a Skill. Slackbot can
                  even help you build it by asking a few questions — or you can
                  create one from scratch with your own steps, description, and
                  expected output format.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">They&apos;re shareable</h3>
                <p className="text-muted text-sm mt-1">
                  Once someone builds a good Skill, they can push it straight to
                  the channels or people who need it. Institutional knowledge
                  stops living in one person&apos;s head and starts living in
                  the workspace itself. Anyone can explore available skills and
                  add them to their Slackbot.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Assignable by role
                </h3>
                <p className="text-muted text-sm mt-1">
                  Owners and admins can hand the right Skills to the right
                  people based on what their job actually requires. Onboarding a
                  process becomes a five-minute setup instead of a three-week
                  shadow period.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Import from any Canvas
                </h3>
                <p className="text-muted text-sm mt-1">
                  If you&apos;ve already documented "how we do X" in a Slack
                  Canvas, you&apos;re one click away from making it executable.
                  Click Add Skill and select Import a Skill to convert your
                  existing documentation into a live, runnable process.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Why this is bigger than it sounds
            </h2>
            <p className="text-muted">
              Most founders miss the real point. This isn&apos;t really an "AI
              feature." It&apos;s a mechanism for turning tribal knowledge into
              infrastructure. The way your team runs a client kickoff, triages a
              support ticket, or preps a board update — that process, the one
              currently living in Slack messages, a Notion page nobody opens, or
              a senior person&apos;s head — can now be encoded once and reused
              forever.
            </p>
            <p className="text-muted">
              The companies that win with tools like this aren&apos;t the ones
              chasing every AI headline. They&apos;re the ones who take 30
              minutes this week to turn their three most-repeated workflows into
              Skills before it becomes "everyone does this" and the advantage
              disappears.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              How to create your first Skill
            </h2>
            <p className="text-muted">
              Slack gives you two ways to create Skills. Both are accessible
              from the Slackbot menu at the top of your screen:
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Create with Slackbot
                </h3>
                <p className="text-muted text-sm mt-1">
                  Slackbot walks you through a series of questions to understand
                  what you want the Skill to do — describe the task, the steps
                  involved, and the desired output. Slackbot drafts the Skill
                  and asks for your approval before publishing.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">
                  Create from scratch
                </h3>
                <p className="text-muted text-sm mt-1">
                  Write a clear description of what the Skill does (Slackbot
                  uses this to decide when to activate it), name it, add
                  step-by-step instructions, and define the expected result —
                  whether that&apos;s a Canvas, a message draft, or a report
                  summary.
                </p>
              </div>
            </div>
            <p className="text-muted">
              Once created, test it by sending a message to Slackbot or
              mentioning the Skill in a relevant conversation. You can edit
              Skills anytime — either manually or by asking Slackbot to make
              changes for you.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              The opportunity gap
            </h2>
            <p className="text-muted">
              At Bold Studio, this is the exact gap we build for. We work with
              fintech, eCommerce, and SaaS teams who already live inside Slack
              all day but are leaving real leverage on the table — because
              nobody&apos;s had the time or reason to sit down and systematize
              what they already know how to do.
            </p>
            <p className="text-muted">
              Skills are available now on Business+ and Enterprise Grid plans.
              They cost nothing extra. The only investment is 30 minutes of your
              team&apos;s attention to identify and encode your most repeated
              workflows.
            </p>
            <p className="text-muted">
              If your team&apos;s "process" still only exists in someone&apos;s
              memory, that&apos;s your first Skill to build.
            </p>
          </section>

          <BlogRelatedArticles currentSlug="slackbot-skills-guide" />

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Next steps</h2>
            <p className="text-muted">
              Open Slack, click Slackbot at the top of your screen, and explore
              the Skills tab. Create your first Skill — start with something
              small like "How we file a bug report" or "Weekly team update
              format." Share it with your channel, and watch Slackbot handle it
              from there. For teams that want to go further, Bold Studio builds
              custom Slack workflows, AI agents, and automations that turn your
              entire operation into a well-oiled machine.
            </p>
            <BlogCtaCard
              title="Need help systematizing your Slack workflows?"
              description="We build custom Slack automations, AI agents, and Skills-ready processes for teams that want to move faster. Book a call and tell us what you need."
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
