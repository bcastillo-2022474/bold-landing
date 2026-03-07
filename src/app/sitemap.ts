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
  ];
}
