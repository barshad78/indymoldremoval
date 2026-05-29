# CLAUDE.md — Indy Mold Removal Site

## Project Overview
This is a **Rank & Rent local lead generation website** for mold removal services
in Indianapolis, IN. The site is designed to rank on Google for local mold removal
searches and generate inbound phone calls that are forwarded to a paying tenant
(a local mold remediation business).

The owner of this site is NOT the service provider. The site captures leads via
a tracked phone number (CallRail) and contact form. The owner rents the lead flow
to a local business for a flat monthly fee.

---

## Core Principles

### 1. SEO is the #1 priority
Every page must be built with local SEO in mind. This is not a portfolio site or
a branding exercise — it exists to rank on Google and generate phone calls.

- Title tags, meta descriptions, H1s, and body copy must include target keywords
- LocalBusiness JSON-LD schema must be present on every page
- Sitemap and robots.txt must be auto-generated
- All images must have descriptive alt text with keywords where natural
- Page load speed is critical — no heavy libraries, no unnecessary JS

### 2. All site-specific content lives in `config.ts`
Nothing city-specific, business-specific, or keyword-specific should be hardcoded
into components. Every piece of variable content (business name, phone number,
city, keywords, services, FAQs, service areas) comes from `config.ts`.

This is what makes the site a reusable template. To launch a new site, duplicate
the repo and update `config.ts` only.

### 3. Phone number is sacred
The tracking phone number (CallRail) must appear:
- In the site header (sticky, always visible)
- In the hero section as a large, tappable CTA
- In the footer
- In the LocalBusiness schema

Never hardcode a phone number. Always use `siteConfig.phone` from config.

### 4. Mobile-first
The majority of local service searches happen on mobile. Every layout decision
should start with mobile and scale up to desktop — not the other way around.

### 5. Simple beats clever
This site competes against neglected local business websites, not enterprise SEO
players. A clean, fast, well-structured simple site wins. Do not over-engineer.

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSG where possible for speed |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS | No CSS-in-JS |
| Deployment | Vercel | Free tier sufficient |
| Forms | Native HTML form + Formspree or similar | No backend needed |
| Analytics | Google Analytics 4 (optional) | Via config flag |
| Call tracking | CallRail JS snippet | Injected in layout.tsx |

---

## Project Structure

```
/
├── CLAUDE.md                  ← You are here
├── config.ts                  ← ALL site-specific content (edit this per site)
├── app/
│   ├── layout.tsx             ← Root layout: fonts, schema, CallRail snippet, GA
│   ├── page.tsx               ← Homepage
│   ├── sitemap.ts             ← Auto-generated sitemap
│   ├── robots.ts              ← robots.txt
│   ├── services/
│   │   └── [slug]/
│   │       └── page.tsx       ← Dynamic service pages
│   ├── locations/
│   │   └── [slug]/
│   │       └── page.tsx       ← Dynamic location/area pages
│   └── contact/
│       └── page.tsx           ← Contact page with form
├── components/
│   ├── Header.tsx             ← Sticky nav with phone CTA
│   ├── Hero.tsx               ← H1, subheading, phone CTA, trust signals
│   ├── ServiceGrid.tsx        ← Service cards grid
│   ├── ServiceBlock.tsx       ← Alternating text+image service sections
│   ├── TrustBar.tsx           ← Icons: Licensed, Insured, Free Estimates, etc.
│   ├── FAQ.tsx                ← Accordion FAQ with schema markup
│   ├── CTABanner.tsx          ← Mid-page and bottom call-to-action strips
│   ├── ContactForm.tsx        ← Simple lead capture form
│   ├── Footer.tsx             ← NAP, links, schema
│   └── JsonLd.tsx             ← LocalBusiness JSON-LD schema component
├── lib/
│   └── schema.ts              ← Generates JSON-LD from config
└── public/
    └── images/                ← Site images (optimized WebP)
```

---

## config.ts Shape

When building or modifying pages, always reference `config.ts` for content.
Never hardcode strings that belong in config. The shape is:

```ts
{
  // Business identity
  businessName: string
  tagline: string
  phone: string           // CallRail tracking number
  email: string
  city: string
  state: string
  stateAbbr: string
  zip: string
  address: string         // Can be a P.O. Box or omitted if no physical location

  // SEO
  domain: string
  primaryKeyword: string
  metaTitle: string
  metaDescription: string
  ogImage: string

  // Content
  heroHeading: string
  heroSubheading: string
  trustSignals: string[]
  services: Service[]
  faqs: FAQ[]
  serviceAreas: ServiceArea[]

  // Features
  callRailSnippet: string | null    // Paste CallRail JS here when ready
  googleAnalyticsId: string | null  // GA4 measurement ID
}
```

---

## SEO Requirements (Non-Negotiable)

### Every page must have:
- [ ] Unique `<title>` tag — format: `{Page Keyword} | {City}, {State} | {BusinessName}`
- [ ] Unique meta description — 150–160 chars, includes keyword + soft CTA
- [ ] One H1 per page — exact or close match to target keyword
- [ ] Canonical URL
- [ ] Open Graph tags (title, description, image)

### Homepage must also have:
- [ ] LocalBusiness JSON-LD schema (see `lib/schema.ts`)
- [ ] FAQPage JSON-LD schema on the FAQ section
- [ ] NAP (Name, Address, Phone) visible in footer text — must match Google Business Profile exactly

### Generated files:
- [ ] `sitemap.ts` — includes homepage, all service pages, all location pages
- [ ] `robots.ts` — allows all, points to sitemap

---

## Page Content Guidelines

### Homepage (`app/page.tsx`)
Sections in order:
1. Hero — H1, subheading, phone CTA button, trust signals bar
2. Services overview — grid of service cards linking to service pages
3. About / Why choose us — 3–4 trust points
4. Service areas — list of covered cities/neighborhoods
5. FAQ — 6–8 questions, keyword-rich, with FAQPage schema
6. Final CTA banner — phone number, "get a free estimate"

### Service pages (`app/services/[slug]/page.tsx`)
- H1: `{Service Name} in {City}, {State}`
- 300–500 words describing the service
- Why it matters / urgency angle
- Our process (3 steps)
- CTA with phone number

### Location pages (`app/locations/[slug]/page.tsx`)
- H1: `{Primary Service} in {Neighborhood/Suburb}, {State}`
- Short paragraph about serving that area
- Link back to main service pages
- CTA with phone number

---

## Component Behavior Rules

- `Header.tsx` — sticky, phone number must be visible on mobile at all times
- `Hero.tsx` — phone number CTA must be a `tel:` link, large, and above the fold on mobile
- `FAQ.tsx` — use `<details>`/`<summary>` or simple JS accordion. Include FAQPage schema
- `ContactForm.tsx` — fields: Name, Phone, Brief description. Keep it short — fewer fields = more submissions
- `Footer.tsx` — include full NAP text, links to all pages, copyright

---

## Reuse Instructions (For Next Site)

To launch a new rank & rent site from this template:

1. Duplicate this entire folder
2. Update `config.ts` with new site details
3. Replace images in `public/images/`
4. Update `CLAUDE.md` business name and domain references
5. Deploy to Vercel with new domain
6. Create Google Business Profile for new city/niche
7. Submit to 3–5 local citations (Yelp, Angi, BBB)

Total time to next site: 2–3 hours

---

## What NOT to Do

- Do not hardcode city names, phone numbers, or business names in components
- Do not add a blog or CMS — this site does not need one to rank
- Do not add heavy animations or JavaScript-heavy UI libraries
- Do not use placeholder content (Lorem ipsum) — use real keyword-rich copy from config
- Do not skip the JSON-LD schema — it is required, not optional
- Do not use `<img>` tags — always use Next.js `<Image>` for optimization
- Do not build a backend — forms go to Formspree or similar third-party
