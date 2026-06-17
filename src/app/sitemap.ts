import type { MetadataRoute } from "next";
import { META, SITE } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
    {
      url: `${SITE.url}/blog/deploy-first-slack-workflow`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE.url}/blog/connect-hermes-agent`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE.url}/blog/slack-ai-agent-vs-custom-agents`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE.url}/blog/develop-ai-agents-bolt-slack`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE.url}/blog/slack-ai-agents-subscription-dedicated-team`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
