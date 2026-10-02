/**
 * Site-wide constants and configuration
 * Update these values to change content across the entire site
 */

export const SITE = {
  name: "Bold Studio",
  title: "Slack Apps, AI Agents & Workflows for Startups | Bold Studio",
  description:
    "We build Slack apps, AI agents, workflows and integrations that bring your pipelines into Slack. For startups, fintech and ecommerce. 10-day pilot, money back.",
  tagline: "Stop switching tools. Run your work in Slack.",
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

export type PricingPlan = {
  name: string;
  price: string;
  priceLabel: string;
  cadenceLabel: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaLabel: string;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Pilot",
    price: "1950",
    priceLabel: "$1,950",
    cadenceLabel: "one-time",
    description:
      "One workflow or agent live in your Slack in 10 business days, or a 100% refund. The fee is credited to month 1 if you subscribe.",
    features: [
      "One workflow or agent live in 10 business days",
      "Built in your workspace and your GitHub",
      "100% refund if it isn't live by day 10",
      "Fee credited to month 1 if you subscribe",
    ],
    isPopular: false,
    ctaLabel: "Start a pilot",
  },
  {
    name: "Build",
    price: "1999",
    priceLabel: "$1,999",
    cadenceLabel: "/mo",
    description:
      "1 active request at a time. Workflows, a custom Slack app, or an AI agent (1 pipeline). Up to 2 integrations. Async support and 1 sync call a month.",
    features: [
      "1 active request at a time",
      "Workflows, a custom Slack app, or an AI agent (1 pipeline)",
      "Up to 2 integrations",
      "Async support + 1 sync call/month",
      "Pause or cancel anytime",
    ],
    isPopular: true,
    ctaLabel: "Talk to us",
  },
  {
    name: "Growth",
    price: "3995",
    priceLabel: "$3,995",
    cadenceLabel: "/mo",
    description:
      "2 active requests. Full custom Slack apps, multi-pipeline AI agents, CRM and internal systems, weekly iterations, and priority support.",
    features: [
      "2 active requests at a time",
      "Full custom Slack apps",
      "Multi-pipeline AI agents",
      "CRM + internal systems",
      "Weekly iterations",
      "Priority support",
    ],
    isPopular: false,
    ctaLabel: "Talk to us",
  },
  {
    name: "Dedicated",
    price: "7500",
    priceLabel: "$7,500",
    cadenceLabel: "/mo",
    description:
      "A dedicated engineer during business hours with US Eastern overlap, unlimited integrations, and a micro-app ecosystem. 24/7 support with SLA is a separate add-on.",
    features: [
      "Dedicated engineer during business hours",
      "US Eastern hours overlap",
      "Unlimited integrations",
      "Micro-app ecosystem",
      "24/7 support with SLA is a +$1,500/mo add-on",
    ],
    isPopular: false,
    ctaLabel: "Talk to us",
  },
];

export const PRICING_RUN: PricingPlan = {
  name: "Run",
  price: "399",
  priceLabel: "$399",
  cadenceLabel: "/mo",
  description:
    "Maintenance, monitoring and small tweaks of what we built. A step-down instead of cancelling.",
  features: [
    "Maintenance, monitoring and small tweaks of what we built",
    "A step-down instead of cancelling",
  ],
  isPopular: false,
  ctaLabel: "Talk to us",
};

export const PRICING_ADDONS = [
  "24/7 support + SLA: +$1,500/mo on Growth or Dedicated",
  "AI and paid API usage included up to $25/mo. Above that, billed at cost",
  "Workspace Health Audit",
  "Slack migrations from Discord, Teams, or Google Chat, as a fixed-scope project after paid discovery",
] as const;

export const PRICING_FINE_PRINT =
  "Save 5% paying quarterly, 15% paying annually. Pause or cancel anytime, no minimum commitment. Code lives in your GitHub. Client-specific code and IP are assigned to you on payment.";

export const PRICING_OFFERS = [...PRICING_PLANS, PRICING_RUN].map((plan) => ({
  "@type": "Offer" as const,
  name: plan.name,
  price: plan.price,
  priceCurrency: "USD",
  description: plan.description,
}));

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
    "AI agents orchestration",
    "Slack workspace management",
    "Slack integrations for startups",
    "Slack automation fintech",
    "Slack ecommerce automation",
    "reduce context switching",
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
      question: "What happens if the pilot isn't live by day 10?",
      answer:
        "You get your $1,950 back. Live means the agreed workflow or agent runs in your Slack workspace, as defined in writing at kickoff.",
    },
    {
      question: "Who owns the code?",
      answer:
        "You do. We build in your GitHub and your Slack workspace from day one, and client-specific code and IP are assigned to you on payment. We only keep our generic templates.",
    },
    {
      question: "What counts as a request?",
      answer:
        'One piece of work with a clear outcome, like "route Book a Call leads to #inbound-leads with a Claim button." Big projects are split into requests.',
    },
    {
      question: "What hours do you work?",
      answer:
        "We're based in Guatemala (UTC-6 all year) and overlap with US Eastern business hours. We reply in Slack during those hours.",
    },
    {
      question: "Is there a minimum commitment?",
      answer:
        "No. Plans are monthly. Pause or cancel anytime. Prepay quarterly for 5% off, or annually for 15% off.",
    },
    {
      question: "Do you work with fintech data?",
      answer:
        "Yes, with care: least-privilege access, no sensitive data in Slack messages unless your policy allows it, and an audit trail in threads.",
    },
    {
      question: "What tools do you integrate?",
      answer:
        "Anything with an API. Common ones: Stripe, HubSpot, Linear, Shopify, Notion, Google Workspace, your database.",
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
        "Start with a $1,950 10-day pilot, money back if it isn't live. Then Build $1,999/mo, Growth $3,995/mo or a Dedicated engineer at $7,500/mo. Cancel anytime.",
      canonical: "/pricing",
    },
  },
};
