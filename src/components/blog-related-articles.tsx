import Link from "next/link";

const articles = [
  {
    title: "How to Use Slack's MCP Server with AI Agents: A Complete Guide",
    excerpt:
      "Connect AI agents to Slack via MCP — search messages, manage canvases, and orchestrate workflows using natural language.",
    slug: "slack-mcp-server-guide",
  },
  {
    title: "How to Deploy Your First Workflow in Slack",
    excerpt:
      "Build and publish automated workflows using the Slack Workflow Builder — triggers, steps, variables, and publishing.",
    slug: "deploy-first-slack-workflow",
  },
  {
    title: "Connect Hermes Agent to Your Slack Workspace",
    excerpt:
      "Set up your AI Slack agent with the right scopes, test it in a private channel, and deploy safely.",
    slug: "connect-hermes-agent",
  },
  {
    title:
      "Slack AI Agent vs Custom Agents: LangGraph, Hermes, and When to Build Your Own",
    excerpt:
      "Compare Slack's native AI agent vs custom agents built with LangGraph and Hermes.",
    slug: "slack-ai-agent-vs-custom-agents",
  },
  {
    title: "How to Develop AI Agents with Bolt for Slack: A Complete Guide",
    excerpt:
      "Develop AI agents using Bolt for JavaScript and Python — CLI setup, custom functions, triggers, sandbox testing, and deployment.",
    slug: "develop-ai-agents-bolt-slack",
  },
  {
    title: "Slack AI Agents Subscription: What You Get with a Dedicated Team",
    excerpt:
      "Compare building in-house vs a subscription with a dedicated team for Slack AI agents.",
    slug: "slack-ai-agents-subscription-dedicated-team",
  },
];

export function BlogRelatedArticles({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const related = articles.filter((a) => a.slug !== currentSlug);

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl md:text-3xl font-bold">Related articles</h2>
      <div className="flex flex-col gap-4">
        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="p-4 rounded-[32px] border border-black/5 hover:border-yellow-300 transition-colors flex flex-col gap-2"
          >
            <h3 className="font-bold text-base md:text-lg hover:text-yellow-600 transition-colors">
              {article.title}
            </h3>
            <p className="text-muted text-sm">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
