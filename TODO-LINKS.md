# TODO: Empty Links to Fix

This document tracks all placeholder links (`href="#"`) that need to be updated with actual destinations.

## Navigation Links

### Navbar (`src/components/navbar.tsx`)

**Desktop Menu (lines 52-54):**
- [ ] Home - `href="#"`
- [ ] Design - `href="#"`
- [ ] About - `href="#"`

**Mobile Menu (lines 63-69):**
- [ ] Home - `href="#"`
- [ ] Design - `href="#"`
- [ ] About - `href="#"`

**Suggested Actions:**
- Option 1: Link to actual pages (`/`, `/design`, `/about`)
- Option 2: Scroll to sections on landing page (`#intro`, `#design`, `#about`)
- Option 3: Keep as `#` if placeholder for future pages

---

## Footer Links

### Footer (`src/components/footer.tsx`)

**Main Links (lines 12-21):**
- [ ] Home - `href="#"` (line 12)
- [ ] Design - `href="#"` (line 15)
- [ ] About - `href="#"` (line 18)
- [ ] Careers - `href="#"` (line 21)

**Legal Links (lines 28-34):**
- [x] Privacy Policy - `href="/privacy"` (line 28) ✅ DONE
- [x] Terms Of Service - `href="/terms"` (line 31) ✅ DONE
- [ ] Cookies - `href="#"` (line 34) - Template not created yet

**Social Links (line 44):**
- [ ] LinkedIn - `href="#"` (line 44)

**Suggested Actions:**
- Main links: Should match navbar destinations
- Legal links: Create actual legal pages (`/privacy`, `/terms`, `/cookies`)
- LinkedIn: Add actual LinkedIn company profile URL

---

## Case Study Links

### What We've Built Section (`src/components/sections/what-we-have-built.section.tsx`)

**Case Studies (lines 55, 63, 71):**
- [ ] Onboarding Bot - `route: "#"` (line 55)
- [ ] CAC Calculator with AI - `route: "#"` (line 63)
- [ ] Legal Case Workflow - `route: "#"` (line 71)

**Suggested Actions:**
- Option 1: Create case study pages (`/case-studies/onboarding-bot`, etc.)
- Option 2: Remove "Case Study" links until ready
- Option 3: Link to external portfolio/demos if available
- Option 4: Add `onClick` with "Coming soon" modal

---

## Summary

**Total Empty Links:** 17
- Navbar: 6 (3 unique, duplicated for mobile)
- Footer: 8
- Case Studies: 3

**Priority:**
1. **High:** Legal links (Privacy, Terms, Cookies) - required for compliance
2. **Medium:** Navigation links (Home, Design, About) - user experience
3. **Low:** Case studies - can be "Coming soon" placeholders
4. **Low:** LinkedIn - add when company profile is ready
