/**
 * Site-wide constants and configuration
 * Update these values to change content across the entire site
 */

export const SITE = {
  name: "Bold Studio",
  title: "Bold Studio - Custom Slack Apps & Automation",
  description:
    "Custom Slack apps that automate your workflows — delivered through a simple monthly subscription. No contracts. No per-project chaos.",
  tagline: "Build Faster. Scale Smarter.",
  url: "https://boldstudio.com",
} as const;

export const CONTACT = {
  support: "support@boldstudio.com",
  privacy: "privacy@boldstudio.com",
  legal: "legal@boldstudio.com",
  general: "hello@boldstudio.com",
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
    { label: "Design", href: "#" },
    { label: "About", href: "#" },
  ],
  footer: {
    company: [
      { label: "Home", href: "/" },
      { label: "Design", href: "#" },
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
    ],
    legal: [
      { label: "Pricing", href: "/pricing" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms Of Service", href: "/terms" },
      { label: "Cookies", href: "#" },
    ],
  },
} as const;

export const ROUTES = {
  home: "/",
  privacy: "/privacy",
  terms: "/terms",
  pricing: "/pricing",
  notFound: "/404",
} as const;

export const META = {
  keywords: [
    "Slack apps",
    "Slack automation",
    "workflow automation",
    "custom Slack bots",
    "Slack bot development",
    "business automation",
    "Slack integrations",
    "SaaS",
    "subscription development",
  ] as string[],
  ogImage: "/opengraph-image",
  favicon: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
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
        "We build custom Slack apps — bots, workflow automations, slash commands, modals, and integrations with your existing tools (Jira, Notion, HubSpot, etc.). Everything runs natively inside Slack.",
    },
    {
      question: "How does the subscription model work?",
      answer:
        "You subscribe to a monthly plan and submit development requests one at a time (or two at a time on Growth). We deliver within 48 or 24 hours, you review, request revisions, and repeat. Cancel or pause anytime.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "Yes, a one-time setup fee applies to all plans. The amount depends on your stack and requirements. Contact us for a quote before subscribing.",
    },
    {
      question: "What if I only need one thing built?",
      answer:
        "You can subscribe, get it built, then pause your subscription immediately. You only pay for the months you're active.",
    },
    {
      question: "Who owns the code?",
      answer:
        "You do. All custom code built for your workspace is your property. We retain rights to underlying frameworks and reusable internal components.",
    },
    {
      question: "How do I submit requests?",
      answer:
        "After onboarding you'll get access to a shared project board where you submit, prioritize, and track requests. No email threads.",
    },
  ],
  pages: {
    terms: {
      title: "Terms of Service",
      description: `Read the Terms of Service for Bold Studio. Understand your rights and obligations when using our custom Slack app development and automation services.`,
      canonical: "/terms",
      lastUpdated: "March 6, 2025",
    },
    privacy: {
      title: "Privacy Policy",
      description: `Read the Privacy Policy for Bold Studio. Learn how we collect, use, and protect your personal information.`,
      canonical: "/privacy",
      lastUpdated: "March 6, 2025",
    },
    pricing: {
      title: "Pricing",
      description:
        "Simple, predictable pricing for custom Slack app development. Starter at $1,499/mo, Growth at $3,499/mo, Enterprise at $4,999/mo. One-time setup fee of $6,500. Cancel or pause anytime.",
      canonical: "/pricing",
    },
  },
};
