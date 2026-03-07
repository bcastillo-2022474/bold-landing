# TODOs

## Before going live

- [ ] **Real domain** — update `SITE.url` in `src/constants/site.ts` (currently `https://boldstudio.com`)
- [ ] **Email addresses** — set real values for `CONTACT.support/privacy/legal/general` in `src/constants/site.ts`
- [ ] **Social handles** — verify LinkedIn and GitHub slugs in `SOCIAL` (`src/constants/site.ts`); currently set to `/boldstudio`
- [ ] **OG image** — `public/og-image.png` does not exist. The `/opengraph-image.tsx` edge route covers social sharing, but the static fallback is missing. Either create a 1200×630 PNG or remove `META.ogImage` references.

## After deploy

- [ ] **Google Search Console** — verify site ownership and submit `/sitemap.xml`
- [ ] **Lighthouse audit** — run Core Web Vitals check; fix any LCP/CLS issues before indexing matters
