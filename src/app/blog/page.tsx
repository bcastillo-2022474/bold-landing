import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Blog - Bold Studio",
  description:
    "Tutorials and guides for the Slack workflows builder, AI Slack agents, automation, and integrations. Learn how to deploy your first workflow and connect AI agents to your workspace.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog - Bold Studio",
    description:
      "Tutorials and guides for the Slack workflows builder, AI Slack agents, automation, and integrations.",
  },
};

const posts = [
  {
    title: "How to Deploy Your First Workflow in Slack",
    excerpt:
      "A step-by-step guide to using the Slack workflows builder — from choosing a trigger to adding steps, variables, and publishing your first automation.",
    slug: "deploy-first-slack-workflow",
    date: "June 16, 2026",
  },
  {
    title: "Connect Hermes Agent to Your Slack Workspace",
    excerpt:
      "Turn your Slack workspace into an AI-powered command center. Learn how to set up your AI Slack agent with the right scopes, test it in a private channel, and deploy safely.",
    slug: "connect-hermes-agent",
    date: "June 16, 2026",
  },
];

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
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Bold Studio Blog",
  description:
    "Tutorials and guides for the Slack workflows builder, AI Slack agents, automation, and integrations.",
  url: `${SITE.url}/blog`,
  isPartOf: {
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Navbar />
      <main className="flex flex-col items-center gap-20 md:gap-28 *:max-w-432">
        <section className="flex flex-col items-center py-16 md:py-24 w-full gap-5 px-4 md:px-10 lg:px-30">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-12 flex flex-col text-center">
            <span className="text-[#FFD200]">Blog</span>
          </h1>
          <p className="text-center font-inter text-muted items-center max-w-[65ch] px-4 text-sm md:text-base">
            Tutorials and guides for the Slack workflows builder, AI Slack
            agents, automation, and integrations.
          </p>
        </section>

        <section className="flex flex-col gap-6 md:gap-8 px-4 md:px-10 lg:px-30 pb-16 md:pb-24 w-full max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold">Latest articles</h2>
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col gap-3 p-6 md:p-8 rounded-[32px] border border-black/5 hover:border-yellow-300 transition-colors"
              >
                <time className="text-sm text-muted-light">{post.date}</time>
                <h3 className="font-bold text-xl md:text-2xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-yellow-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted text-sm md:text-base">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-yellow-600 font-semibold text-sm hover:underline mt-2"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="w-full py-16 md:py-24 px-4 md:px-10 lg:px-30 flex flex-col items-center gap-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Need a custom workflow or AI agent?
          </h2>
          <p className="text-muted max-w-[60ch] text-sm md:text-base">
            We build custom Slack workflows, AI Slack agents, and automation for
            teams that want to move faster. Book a call and tell us what you
            need.
          </p>
          <a
            href="/#book-a-call"
            className="inline-block rounded-full bg-black text-white font-semibold px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            Book a Call
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
