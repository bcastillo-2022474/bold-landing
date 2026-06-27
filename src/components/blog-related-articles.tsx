import Link from "next/link";

const articles = [
  {
    title: "How to Send Emails to Slack: Complete Guide with 3 Methods",
    excerpt:
      "Send emails directly into Slack channels or DMs. Step-by-step guide covering channel email addresses, Gmail/Outlook plugins, and Slackbot forwarding.",
    slug: "send-emails-to-slack",
  },
  {
    title: "Slack CI/CD Best Practices: Automate Your Slack App Pipeline",
    excerpt:
      "Set up CI/CD pipelines for Slack app development with GitHub Actions, Slack CLI testing, and environment management.",
    slug: "slack-cicd-best-practices",
  },
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
  {
    title:
      "Salesforce Agentforce in Slack: AI Agents That Work Alongside Your Team",
    excerpt:
      "Learn how Salesforce Agentforce turns AI agents into Slack teammates. Deploy HR, IT, sales, and service agents in channels and DMs.",
    slug: "salesforce-agentforce-slack",
  },
  {
    title:
      "Slack + WhatsApp API for Ecommerce: A Case Study in Customer Service Automation",
    excerpt:
      "How a bootstrap ecommerce founder unified customer service by integrating Slack with WhatsApp Business API.",
    slug: "slack-whatsapp-ecommerce-case-study",
  },
];

export function BlogRelatedArticles({ currentSlug }: { currentSlug: string }) {
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
