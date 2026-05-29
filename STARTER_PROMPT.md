# Claude Code Starter Prompt — Indy Mold Removal Site

Copy and paste this entire prompt into Claude Code to scaffold the full site.
Run it from inside the `/mold-removal-indy` project folder.

---

## PROMPT (paste this into Claude Code)

I need you to build a complete local SEO lead generation website for a rank-and-rent
business. The site generates inbound phone calls for mold removal services in
Indianapolis, IN, then forwards those calls to a paying local business client.

Read the `CLAUDE.md` file in this project folder first — it contains all
architectural rules, SEO requirements, and constraints that must be followed.
Then read `config.ts` — all site content and configuration comes from that file.

---

### What to build

Scaffold a complete Next.js 14 App Router project with the following:

**1. Project setup**
- Next.js 14 with App Router and TypeScript (strict mode)
- Tailwind CSS for styling
- Install dependencies: `next`, `react`, `react-dom`, `typescript`,
  `tailwindcss`, `autoprefixer`, `postcss`, `@types/react`, `@types/node`
- Configure `tailwind.config.ts` and `postcss.config.js`
- Configure `next.config.ts` with image domains and basic performance settings
- Configure `tsconfig.json` with strict mode and path aliases (`@/` → `./`)

**2. Root layout (`app/layout.tsx`)**
- Import and apply Google Fonts — use a clean, professional font pairing:
  one slightly distinctive display font for headings, one readable sans for body
- Inject LocalBusiness JSON-LD schema from `lib/schema.ts`
- Inject CallRail JS snippet if `siteConfig.callRailSnippet` is not null
- Inject Google Analytics 4 script if `siteConfig.googleAnalyticsId` is not null
- Set default Open Graph meta tags from config
- Make the layout mobile-first

**3. SEO files**
- `app/sitemap.ts` — generates sitemap including homepage, all service slugs,
  all location slugs, and the contact page
- `app/robots.ts` — allow all crawlers, point to sitemap URL

**4. Schema library (`lib/schema.ts`)**
- Export a `generateLocalBusinessSchema()` function that reads from `siteConfig`
  and returns a valid LocalBusiness JSON-LD object
- Export a `generateFAQSchema(faqs)` function for FAQPage schema
- Both must be typed

**5. Components — build all of these:**

`components/Header.tsx`
- Sticky header, visible at all times on scroll
- Logo/business name on the left
- Phone number as a large `tel:` link on the right — always visible on mobile
- Simple nav links (Services, Locations, Contact) — hamburger on mobile
- Background: white with a subtle bottom border

`components/Hero.tsx`
- Full-width section, not full-viewport-height
- H1 from `siteConfig.heroHeading`
- Subheading from `siteConfig.heroSubheading`
- Large phone CTA button — `tel:` link, green or high-contrast color
- Secondary CTA button linking to `/contact`
- Trust signals bar below (from `siteConfig.trustSignals`) with checkmark icons

`components/TrustBar.tsx`
- Horizontal bar showing trust signals from config
- Simple icons + text, clean layout
- Works standalone (used in hero) and as a section

`components/ServiceGrid.tsx`
- Grid of service cards (2 columns mobile, 4 desktop)
- Each card: service name, short description, link to `/services/[slug]`
- Cards from `siteConfig.services`

`components/ServiceBlock.tsx`
- Alternating layout: text left + image placeholder right, then right + left
- Used on the homepage to highlight 2–3 key services in more detail
- Image placeholder: a styled div with the service name, teal/green background
- Each block has a CTA button linking to the full service page

`components/AboutSection.tsx`
- Heading from `siteConfig.aboutHeading`
- Grid of about points from `siteConfig.aboutPoints` (icon + heading + body)
- Use simple SVG icons (shield for licensed, magnifier for inspection, etc.)

`components/ServiceAreaList.tsx`
- Section listing all service areas from `siteConfig.serviceAreas`
- Simple grid of linked pills or cards
- Each links to `/locations/[slug]`

`components/FAQ.tsx`
- Accordion FAQ using `<details>`/`<summary>` HTML elements (no JS required)
- Questions and answers from `siteConfig.faqs`
- Includes FAQPage JSON-LD schema block injected inline
- Keyword-rich content already in config

`components/CTABanner.tsx`
- Full-width banner with strong contrast (dark background)
- Heading: "Ready to Get Rid of Mold? Call Us Today."
- Large phone number as `tel:` link
- Secondary link to `/contact`
- Used at mid-page and bottom of homepage

`components/ContactForm.tsx`
- Fields: First Name, Phone Number, Brief Description (textarea)
- Submit goes to `siteConfig.formspreeEndpoint` if set, otherwise shows
  a "Coming soon" message gracefully
- No complex validation — keep it simple, more fields = fewer submissions
- Success state: "Thanks! We'll call you back shortly."

`components/Footer.tsx`
- NAP block: business name, phone (tel: link), email, city/state
- Navigation links
- Service area list (abbreviated — top 4–5)
- Copyright line
- Note: NAP text must exactly match what will be submitted to Google Business Profile

`components/JsonLd.tsx`
- Simple wrapper component: accepts a JSON object, renders it as
  `<script type="application/ld+json">`

**6. Pages — build all of these:**

`app/page.tsx` (Homepage)
Sections in this order:
1. `<Hero />`
2. `<TrustBar />` (if not already in hero)
3. `<ServiceGrid />` with heading "Our Mold Removal Services"
4. `<ServiceBlock />` for top 2 services (mold-remediation, black-mold-removal)
5. `<AboutSection />`
6. `<ServiceAreaList />` with heading "Serving Indianapolis & Surrounding Areas"
7. `<CTABanner />`
8. `<FAQ />` with heading "Common Questions About Mold Removal in Indianapolis"
9. `<CTABanner />` (repeated at bottom)

`app/services/[slug]/page.tsx`
- Dynamic page for each service in `siteConfig.services`
- `generateStaticParams()` returns all service slugs
- `generateMetadata()` returns SEO-optimized title and description per service
- Page layout:
  - H1: `{service.name} in {city}, {stateAbbr}`
  - Full description paragraph
  - Process steps (3-step list with numbers)
  - Urgency note if present
  - CTA banner with phone number
  - Link back to homepage
- Include LocalBusiness schema

`app/locations/[slug]/page.tsx`
- Dynamic page for each service area in `siteConfig.serviceAreas`
- `generateStaticParams()` returns all location slugs
- `generateMetadata()` returns title like "Mold Removal in {area.name} | {businessName}"
- Page layout:
  - H1: `Mold Removal in {area.name}`
  - Area description from config
  - Short paragraph about serving the area with a link to main services
  - List of services with links
  - CTA banner with phone number

`app/contact/page.tsx`
- H1: "Contact Indy Mold Removal Pros"
- Short intro paragraph
- `<ContactForm />`
- Phone number prominently displayed as alternative to form
- Business hours note (placeholder: "Mon–Sat 7am–7pm")

**7. Design requirements**
- Color palette: white background, dark navy or charcoal text, green or teal
  as the primary action/CTA color (conveys trust and cleanliness)
- No generic purple gradients, no heavy drop shadows
- Mobile-first — the phone CTA must be immediately visible above the fold on a 390px screen
- Clean, professional, and fast — this is a service business site, not a portfolio
- Use Next.js `<Image>` for all images with proper `alt` text from config
- All interactive elements must have visible focus states (accessibility)

**8. Performance**
- All pages should be statically generated at build time (SSG)
- No client-side data fetching
- Minimize `use client` — only use it where strictly necessary (contact form, mobile nav toggle)
- Tailwind purging configured correctly so CSS bundle is small

---

### What NOT to do
- Do not create a blog or CMS
- Do not use any component libraries (shadcn, MUI, Chakra, etc.) — Tailwind only
- Do not hardcode any city names, phone numbers, or business names in components
- Do not use Lorem ipsum — all copy comes from `config.ts`
- Do not skip the JSON-LD schema
- Do not use `<img>` — always use Next.js `<Image>`
- Do not add unnecessary dependencies

---

### Deliverables checklist
When done, confirm each of these exists and works:

- [ ] `config.ts` — unchanged from what I provided
- [ ] `CLAUDE.md` — unchanged
- [ ] `app/layout.tsx` — schema, fonts, optional CallRail/GA injection
- [ ] `app/page.tsx` — full homepage with all sections
- [ ] `app/sitemap.ts` — generates valid sitemap
- [ ] `app/robots.ts` — allows crawlers
- [ ] `app/services/[slug]/page.tsx` — dynamic service pages with metadata
- [ ] `app/locations/[slug]/page.tsx` — dynamic location pages with metadata
- [ ] `app/contact/page.tsx` — contact page with form
- [ ] `lib/schema.ts` — LocalBusiness + FAQ schema generators
- [ ] All 10 components built and used
- [ ] `package.json` with all dependencies
- [ ] `tailwind.config.ts` configured
- [ ] Site runs with `npm run dev` without errors
- [ ] `npm run build` completes without errors

Start by scaffolding `package.json`, then layout and config wiring, then
components, then pages. Tell me when each major section is complete.
