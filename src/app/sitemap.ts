import type { MetadataRoute } from "next";
import { META, SITE } from "@/constants/site";

const blogSlugs = [
  "slack-native-bot-vs-web-app",
  "deploy-first-slack-workflow",
  "connect-hermes-agent",
  "slack-ai-agent-vs-custom-agents",
  "develop-ai-agents-bolt-slack",
  "slack-ai-agents-subscription-dedicated-team",
  "slack-mcp-server-guide",
  "salesforce-agentforce-slack",
  "slack-whatsapp-ecommerce-case-study",
  "slack-cicd-best-practices",
  "send-emails-to-slack",
  "slack-jira-integration-best-practices",
  "slackbot-skills-guide",
  "custom-slack-app-vs-buy",
  "ga-insights-slack-monitoring",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.url}${META.pages.terms.canonical}`,
      lastModified: new Date(META.pages.terms.lastUpdated),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE.url}${META.pages.privacy.canonical}`,
      lastModified: new Date(META.pages.privacy.lastUpdated),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE.url}${META.pages.pricing.canonical}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/design`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${SITE.url}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
