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
  url: "https://boldstudio.com", // TODO: Update with actual domain
} as const;

export const CONTACT = {
  // TODO: Set up actual email addresses
  support: "support@boldstudio.com",
  privacy: "privacy@boldstudio.com",
  legal: "legal@boldstudio.com",
  general: "hello@boldstudio.com",
} as const;

export const SOCIAL = {
  // TODO: Add actual social media URLs
  linkedin: "#", // Update with: https://www.linkedin.com/company/boldstudio
  twitter: "#",
  github: "#",
} as const;

export const NAVIGATION = {
  main: [
    { label: "Home", href: "#" },
    { label: "Design", href: "#" },
    { label: "About", href: "#" },
  ],
  footer: {
    company: [
      { label: "Home", href: "#" },
      { label: "Design", href: "#" },
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
    ],
    legal: [
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
  notFound: "/404",
} as const;

export const META = {
  keywords: [
    "Slack apps",
    "Slack automation",
    "workflow automation",
    "custom Slack bots",
    "business automation",
    "SaaS",
  ],
  ogImage: "/og-image.png", // TODO: Create this image
  favicon: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
} as const;
