/**
 * Site-wide constants and configuration
 * Update these values to change content across the entire site
 */

export const SITE = {
  name: "Bold Studio",
  title: "Bold Studio - Custom Software Development Subscription",
  description:
    "Your dedicated dev team on Slack. Build custom Slack apps, automate Slack workflows, and deploy AI Slack agents via monthly subscription. Skip hiring — start building today.",
  tagline: "Your Dedicated Dev Team. On Demand. On Slack.",
  url: "https://getboldstudio.com",
} as const;

export const CONTACT = {
  support: "info@getboldstudio.com",
  privacy: "info@getboldstudio.com",
  legal: "info@getboldstudio.com",
  general: "info@getboldstudio.com",
} as const;

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/boldstudio",
  twitter: "https://twitter.com/bold_studios",
  twitterHandle: "@bold_studios",
  github: "https://github.com/boldstudio",
} as const;

export const NAVIGATION = {
  main: [
    { label: "Home", href: "/" },
    { label: "Design", href: "/design" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  footer: {
    company: [
      { label: "Home", href: "/" },
      { label: "Design", href: "/design" },
      { label: "About", href: "/about" },
    ],
    legal: [
      { label: "Pricing", href: "/pricing" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms Of Service", href: "/terms" },
    ],
  },
} as const;

export const ROUTES = {
  home: "/",
  design: "/design",
  about: "/about",
  blog: "/blog",
  privacy: "/privacy",
  terms: "/terms",
  pricing: "/pricing",
  notFound: "/404",
} as const;

export const META = {
  keywords: [
    "ai slack agent",
    "slack workflows",
    "slack workflows builder",
    "workflow builder slack",
    "slack workflow",
    "custom slack apps",
    "custom slack",
    "Slack automation",
    "Slack bot development",
    "business automation",
    "Slack integrations",
    "subscription development",
    "MCP Slack",
    "Slack MCP server",
    "Slack AI agents orchestration",
    "Slack mobile AI agent",
    "Hermes Agent Slack",
    "AI agents orchestation",
  ] as string[],
  ogImage: "/opengraph-image",
  favicon: "/favicon.ico",
  appleTouchIcon: "/bold_studio_logo.png",
  icons: {
    icon192: "/logo-192.png",
    icon512: "/logo-512.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1 as const,
      "max-image-preview": "large" as const,
      "max-snippet": -1 as const,
    },
  },
  faq: [
    {
      question: "What exactly do you build?",
      answer:
        "We build custom software — Slack workflows, AI Slack agents, custom Slack apps, internal tools, API integrations, and automations. If you can describe it, we can build it.",
    },
    {
      question: "How does the subscription model work?",
      answer:
        "You subscribe to a monthly plan and submit development requests through Slack. We build, you review, we iterate. Cancel or pause anytime.",
    },
    {
      question: "Is there a minimum commitment?",
      answer:
        "Only the Launch plan requires a 3-month minimum ($2,997 all-in). Build, Scale, and Operate have no minimum contract — pause or cancel whenever you want.",
    },
    {
      question: "What if I only need one thing built?",
      answer:
        "You can subscribe, get it built, then pause your subscription immediately. You only pay for the months you're active.",
    },
    {
      question: "Who owns the code?",
      answer:
        "You do. All custom code built for your project is your property. We retain rights to underlying frameworks and reusable internal components.",
    },
    {
      question: "How do I submit requests?",
      answer:
        "Simply send us a message in Slack describing what you need. No formal specs required — just explain the problem and desired outcome.",
    },
  ],
  pages: {
    terms: {
      title: "Terms of Service",
      description: `Read the Terms of Service for Bold Studio. Understand your rights and obligations when using our custom Slack app development, Slack workflows, and automation services.`,
      canonical: "/terms",
      lastUpdated: "March 6, 2025",
    },
    privacy: {
      title: "Privacy Policy",
      description: `Read the Privacy Policy for Bold Studio. Learn how we collect, use, and protect your personal information when using our custom Slack apps and workflow automation services.`,
      canonical: "/privacy",
      lastUpdated: "March 6, 2025",
    },
    pricing: {
      title: "Pricing",
      description:
        "Simple, predictable pricing for Slack workflows, custom Slack apps, and AI agents. Launch at $999/mo, Build at $1,999/mo, Scale at $3,499/mo, Operate at $5,999/mo. Cancel or pause anytime.",
      canonical: "/pricing",
    },
  },
};
