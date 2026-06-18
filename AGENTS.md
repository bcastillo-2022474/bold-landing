# Bold Studio — Website Documentation for AI Agents

## Overview

**Bold Studio** is a custom software development subscription service that operates natively through Slack. This website is a Next.js 16 landing page built with TypeScript and Tailwind CSS v4.

**URL:** https://getboldstudio.com
**Tagline:** Your Dedicated Dev Team. On Demand. On Slack.
**Stack:** Next.js 16, TypeScript, Tailwind CSS v4, Tally.so (forms), custom SVG icons.

---

## Pages

### Home (`/`)

8 sections in order:

| Section | Component | Content |
|---------|-----------|---------|
| Hero | `IntroSection` | Heading + Slack UI mockup image + description paragraph |
| Justification | `JustificationSection` | 3 pain points: hiring is slow/expensive, freelancers are unreliable, agencies are rigid |
| Solution | `SolutionSection` | 4 feature cards (Dedicated Team, Slack-First, Flexible Scope, Fully Managed) + "What you can build" chips |
| Testimonial | `TestimonialSection` | Video demo of a real onboarding agent built for an ecommerce platform |
| How It Works | `HowItWorksSection` | 4 steps: Subscribe → Send tasks in Slack → We build and iterate → You review and deploy |
| Pricing | `PricingSection` | 4 plan cards with features + chips for target audience |
| CTA | `CallToActionSection` | Embedded Tally.so form |
| Footer | `Footer` | Company links, legal links, copyright |

### About (`/about`)

Company information. Mission: subscription model for continuous improvement. Founders: Rodrigo Queche, Guillermo Julca, Joaquin Ladd. Explains the Slack-native approach and why traditional project-based models are broken.

### Design (`/design`)

Technology stack and design approach. Built with Slack's native tools: Block Kit, JavaScript/TypeScript, Slack API, Slack CLI, Sandbox Testing. Emphasizes no context switching and native Slack integration.

### Blog (`/blog`)

Index page listing 6 articles:
1. **How to Use Slack's MCP Server with AI Agents** — MCP Slack server guide covering Model Context Protocol, connecting AI assistants (Claude, Perplexity, OpenAI), searching messages, managing canvases, member info, Hermes Agent Slack integration, Slack AI agents orchestation, and Slack mobile AI agent usage.
2. **How to Deploy Your First Workflow in Slack** — Workflow Builder guide covering triggers (link, webhook, scheduled, channel join, emoji, keyword), steps (Slack actions, connectors, custom), variables, buttons, permissions, publishing, and a real onboarding workflow example.
3. **Connect Hermes Agent to Your Slack Workspace** — AI agent setup guide covering Slack app creation, OAuth scopes, token storage, gateway config, Socket Mode, channel restrictions, response batching, and troubleshooting.

### Slack MCP (`/blog/slack-mcp-server-guide`)

Guide to using Slack's Model Context Protocol (MCP) server. Topics: MCP open-source protocol, connecting AI assistants securely, searching messages, reading/sending messages, managing canvases, member info access, partner setup (Claude, Perplexity, OpenAI, Cursor), Hermes Agent Slack integration, Slack AI agents orchestation, and Slack mobile AI agent best practices.

### Pricing (`/pricing`)

Four subscription plans:

| Plan | Monthly | Setup | Commitment |
|------|---------|-------|------------|
| Launch | $999 | $0 | 3-month minimum ($2,997 all-in) |
| Build (Most Popular) | $1,999 | $2,500 | None |
| Scale | $3,499 | $4,000 | None |
| Operate | $5,999 | $6,500 | None |

### Legal

- **Privacy Policy** (`/privacy`) — Data collection, usage, security, user rights
- **Terms of Service** (`/terms`) — Service terms, subscription terms, intellectual property, liability

### Error Pages

- **404** (`/not-found`) — "Page Not Found" with navigation links
- **500** (`/error`) — "Something went wrong" with retry and support contact

---

## Design System

### Colors
- Yellow: `#FFD200` (primary accent, highlights)
- Black: `#000000` (primary text, button backgrounds)
- White: `#FFFFFF` (page backgrounds, cards)
- Muted: `#6B7280` (secondary text)
- Muted Light: `#9CA3AF` (tertiary text, timestamps)

### Typography
- Primary: **Space Grotesk** (headings, body) — loaded via `next/font/google`
- Secondary: **Inter** (specialized contexts) — loaded via `next/font/google`
- Base size: 16px, line-height: 1.5

### Components
- **Cards:** `rounded-[32px]` with `border border-black/5` — no shadows
- **Buttons:** `rounded-full` — black bg + yellow text, or yellow bg + black text
- **Navbar:** Sticky white, `border-b border-black/5`, logo + nav links + "Book a Call" anchor
- **Footer:** White, two-column grid (Company + Legal), `border-t border-black/5` separator
- **Section spacing:** `py-16 md:py-24`, container `gap-20 md:gap-28`

### Responsive Breakpoints
- Mobile: `px-4`
- Tablet (`md:`): `px-10`
- Desktop (`lg:`): `px-30`
- Max content width: `max-w-432`

---

## Structured Data (JSON-LD)

| Page | Schema Types |
|------|-------------|
| Home | `ProfessionalService`, `FAQPage`, `OfferCatalog` |
| About | `Organization`, `BreadcrumbList` |
| Design | `WebApplication`, `BreadcrumbList` |
| Blog Index | `CollectionPage`, `BreadcrumbList` |
| Blog Articles | `Article`, `HowTo` (tutorials), `BreadcrumbList` |
| Pricing | `Product` + `AggregateOffer`, `FAQPage`, `BreadcrumbList` |
| Privacy | `WebPage`, `BreadcrumbList` |
| Terms | `WebPage`, `BreadcrumbList` |

---

## Contact

- **Email:** `info@getboldstudio.com` (general, support, privacy, legal)
- **Booking form:** Embedded Tally.so iframe at `/#book-a-call`
- **LinkedIn:** https://linkedin.com/company/boldstudio
- **Twitter/X:** https://twitter.com/bold_studios (`@bold_studios`)
- **GitHub:** https://github.com/boldstudio

---

## File Structure (src/)

```
src/
  app/
    page.tsx                    # Homepage
    layout.tsx                  # Root layout (fonts, metadata)
    globals.css                 # Tailwind + custom theme
    sitemap.ts                  # XML sitemap generator
    not-found.tsx               # 404 page
    error.tsx                   # 500 error page
    opengraph-image.tsx         # OG image generator
    about/page.tsx              # About page
    design/page.tsx             # Design page
    blog/page.tsx               # Blog index
    blog/deploy-first-slack-workflow/page.tsx
    blog/connect-hermes-agent/page.tsx
    pricing/page.tsx            # Pricing page
    privacy/page.tsx            # Privacy policy
    terms/page.tsx              # Terms of service
    api/contact/route.ts        # Contact API endpoint
  components/
    navbar.tsx
    footer.tsx
    booking-modal.tsx           # (unused, kept for reference)
    blog-cta-card.tsx           # Blog article CTA card
    ui/button.tsx               # Reusable button component
    sections/
      intro.section.tsx
      justification.section.tsx
      solution.section.tsx
      testimonial.section.tsx
      how-it-works.section.tsx
      pricing.section.tsx
      call-to-action.tsx
  constants/
    site.ts                     # All site-wide constants
  utils/
    cn.ts                       # clsx + tailwind-merge utility
```

---

## Key Technical Details

- **Image component:** Next.js `<Image>` with static imports for PNGs and SVGs
- **Font loading:** `next/font/google` with CSS variables (`--font-space-grotesk`, `--font-inter`)
- **Class merging:** `cn()` utility using `clsx` + `tailwind-merge`
- **Linting:** Biome (format + lint)
- **TypeScript:** Strict mode enabled

---

## Sitemap

XML sitemap at `/sitemap.xml` — includes all 9+ pages with priorities and change frequencies.

---

## MCP Slack (Model Context Protocol)

Bold Studio provides custom AI agents that integrate with Slack's MCP server. Key services:
- **MCP Slack integration** — Connect Hermes Agent to Slack's Model Context Protocol server for secure, scoped AI access
- **Slack AI agents orchestation** — Build multi-step AI workflows that chain search, message, canvas, and member actions
- **Slack mobile AI agent** — Deploy AI agents accessible from mobile devices via MCP
- **Hermes Agent Slack** — Custom AI agent platform that extends MCP with scheduled tasks, event-driven triggers, and custom integrations
