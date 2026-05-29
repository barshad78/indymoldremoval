// config.ts
// ============================================================
// ALL site-specific content lives here.
// To launch a new site: duplicate this repo, update this file only.
// Do not hardcode any of these values in components.
// ============================================================

export interface Service {
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  process: { step: string; description: string }[]
  urgencyNote?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface ServiceArea {
  slug: string
  name: string
  description: string
}

export const siteConfig = {
  // ─── Business Identity ───────────────────────────────────
  businessName: "Indy Mold Removal Pros",
  tagline: "Fast, Safe Mold Remediation in Indianapolis & Surrounding Areas",
  phone: "317-555-0000",           // Replace with CallRail tracking number
  phoneDisplay: "(317) 555-0000",  // Formatted for display
  email: "info@indymoldremoval.com",
  city: "Indianapolis",
  state: "Indiana",
  stateAbbr: "IN",
  zip: "46201",
  address: "",                     // Leave blank if no physical address

  // ─── SEO ─────────────────────────────────────────────────
  domain: "https://indymoldremoval.com",
  primaryKeyword: "mold removal Indianapolis",
  metaTitle: "Mold Removal Indianapolis IN | Free Estimates | Indy Mold Pros",
  metaDescription:
    "Professional mold removal and remediation in Indianapolis, IN. Fast response, licensed technicians, free estimates. Call (317) 555-0000 today.",
  ogImage: "/images/og-image.jpg",

  // ─── Homepage Hero ────────────────────────────────────────
  heroHeading: "Mold Removal in Indianapolis, IN",
  heroSubheading:
    "Professional mold remediation for homes and businesses across Indianapolis. Fast response, safe removal, guaranteed results.",
  heroCtaText: "Call for a Free Estimate",

  // ─── Trust Signals (shown in hero bar and about section) ─
  trustSignals: [
    "Licensed & Insured",
    "Free Estimates",
    "Same-Day Response",
    "Serving All of Indianapolis",
    "Residential & Commercial",
  ],

  // ─── Services ─────────────────────────────────────────────
  services: [
    {
      slug: "mold-inspection",
      name: "Mold Inspection",
      shortDescription:
        "Comprehensive mold testing and inspection to identify problem areas before they get worse.",
      fullDescription:
        "Our certified technicians conduct thorough mold inspections throughout your home or commercial property. We use advanced detection methods to identify visible and hidden mold growth, moisture sources, and areas at risk. You receive a clear report of findings and a recommended action plan — no pressure, no surprises.",
      process: [
        {
          step: "Visual Assessment",
          description:
            "We inspect all visible surfaces, especially high-risk areas like basements, crawl spaces, bathrooms, and around HVAC systems.",
        },
        {
          step: "Moisture Detection",
          description:
            "We use moisture meters and thermal imaging to find hidden water intrusion that feeds mold growth behind walls and under floors.",
        },
        {
          step: "Written Report",
          description:
            "You receive a clear summary of what we found, where, and exactly what needs to be done — with no obligation to hire us.",
        },
      ],
      urgencyNote:
        "Mold spreads quickly in humid conditions. If you smell something musty or see discoloration, don't wait.",
    },
    {
      slug: "mold-remediation",
      name: "Mold Remediation",
      shortDescription:
        "Complete mold removal and remediation using industry-standard containment and disposal methods.",
      fullDescription:
        "Our remediation process follows EPA guidelines to safely remove mold without spreading spores to unaffected areas. We contain the work zone, remove all affected materials, treat surfaces with antimicrobial agents, and verify clearance before we leave. We leave your space clean, dry, and mold-free.",
      process: [
        {
          step: "Containment",
          description:
            "We seal off the affected area with plastic sheeting and negative air pressure to prevent cross-contamination.",
        },
        {
          step: "Removal",
          description:
            "All mold-affected materials are safely removed and disposed of following EPA and local guidelines.",
        },
        {
          step: "Treatment & Verification",
          description:
            "Surfaces are treated with antimicrobial agents and air scrubbers are used to capture airborne spores. We verify clearance before completing the job.",
        },
      ],
    },
    {
      slug: "black-mold-removal",
      name: "Black Mold Removal",
      shortDescription:
        "Specialized removal of toxic black mold (Stachybotrys) with full containment protocols.",
      fullDescription:
        "Black mold (Stachybotrys chartarum) requires specialized handling due to its toxicity. Our technicians use full PPE, strict containment, and HEPA filtration throughout the removal process. We don't just treat the surface — we find and eliminate the moisture source to prevent recurrence.",
      process: [
        {
          step: "Identification & Testing",
          description:
            "We confirm black mold presence and assess the extent of contamination before beginning any work.",
        },
        {
          step: "Full Containment Protocol",
          description:
            "Negative air pressure systems and sealed work zones ensure spores do not spread during removal.",
        },
        {
          step: "Source Elimination",
          description:
            "We identify and address the moisture source — whether that's a leak, condensation, or flooding — so the mold cannot return.",
        },
      ],
      urgencyNote:
        "Black mold exposure can cause serious health issues. If you suspect black mold, call us immediately — do not disturb it.",
    },
    {
      slug: "water-damage-mold",
      name: "Water Damage Mold Removal",
      shortDescription:
        "Mold remediation following flooding, pipe leaks, or water damage events.",
      fullDescription:
        "Water damage creates the perfect conditions for mold growth — often within 24 to 48 hours. If your Indianapolis home or business has experienced flooding, a burst pipe, or a roof leak, mold may already be developing behind walls and under flooring. We respond quickly to assess damage and begin remediation before the problem spreads.",
      process: [
        {
          step: "Rapid Assessment",
          description:
            "We respond same-day to evaluate the extent of water damage and existing mold growth.",
        },
        {
          step: "Drying & Remediation",
          description:
            "We remove standing water, dry affected materials, and remediate any mold that has already begun to grow.",
        },
        {
          step: "Prevention Treatment",
          description:
            "Antimicrobial treatment is applied to at-risk surfaces to prevent future mold growth as the area dries.",
        },
      ],
      urgencyNote:
        "Mold can begin growing within 24–48 hours of water damage. Call us the same day you discover water intrusion.",
    },
  ] as Service[],

  // ─── FAQs ─────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does mold removal cost in Indianapolis?",
      answer:
        "Mold removal costs in Indianapolis typically range from $500 to $6,000 depending on the size of the affected area, type of mold, and materials involved. Small surface mold in a bathroom may cost a few hundred dollars, while extensive mold in a basement or crawl space can run several thousand. We provide free estimates so you know exactly what you're dealing with before committing to anything.",
    },
    {
      question: "How long does mold remediation take?",
      answer:
        "Most residential mold remediation jobs in Indianapolis take 1 to 5 days depending on the severity and scope of the problem. A small bathroom job might be completed in a single day, while a large basement or whole-home remediation may take several days. We'll give you a clear timeline during your free estimate.",
    },
    {
      question: "Is mold dangerous to my health?",
      answer:
        "Yes, many types of mold can cause health problems including respiratory issues, allergic reactions, headaches, and eye irritation. Black mold (Stachybotrys) is particularly concerning and can cause more serious symptoms with prolonged exposure. If anyone in your household is experiencing unexplained health symptoms, mold could be a contributing factor.",
    },
    {
      question: "Can I remove mold myself?",
      answer:
        "Small surface mold (less than 10 square feet) in non-porous areas can sometimes be cleaned with appropriate products. However, mold inside walls, in HVAC systems, or covering larger areas should be handled by a professional. DIY removal without proper containment often spreads spores to unaffected areas, making the problem significantly worse and more expensive to fix.",
    },
    {
      question: "Will mold come back after remediation?",
      answer:
        "Professional remediation removes existing mold completely. However, if the underlying moisture source is not addressed, mold can return. That's why we always identify and recommend fixing the root cause — whether that's a leaky pipe, poor ventilation, or foundation moisture issues. Remediation without fixing the source is only a temporary solution.",
    },
    {
      question: "Do you serve areas outside of Indianapolis?",
      answer:
        "Yes — we serve the greater Indianapolis metro area including Carmel, Fishers, Noblesville, Greenwood, Avon, Plainfield, and surrounding communities. Call us to confirm service availability in your specific location.",
    },
    {
      question: "How quickly can you respond?",
      answer:
        "We offer same-day response for mold inspections and urgent remediation needs throughout the Indianapolis area. Call us and we'll do our best to get someone out to you as quickly as possible.",
    },
    {
      question: "Do I need to leave my home during mold remediation?",
      answer:
        "For small jobs, you may be able to stay in the home as long as you avoid the work area. For larger remediation projects — especially those involving black mold or extensive contamination — we typically recommend that occupants, especially children, elderly individuals, or those with respiratory conditions, stay elsewhere during the process.",
    },
  ] as FAQ[],

  // ─── Service Areas ────────────────────────────────────────
  serviceAreas: [
    {
      slug: "carmel",
      name: "Carmel, IN",
      description:
        "Professional mold removal services for Carmel homeowners and businesses. Same-day response available.",
    },
    {
      slug: "fishers",
      name: "Fishers, IN",
      description:
        "Mold remediation throughout Fishers, IN. Fast, licensed technicians serving residential and commercial properties.",
    },
    {
      slug: "noblesville",
      name: "Noblesville, IN",
      description:
        "Serving Noblesville with complete mold inspection and removal services.",
    },
    {
      slug: "greenwood",
      name: "Greenwood, IN",
      description:
        "Mold removal in Greenwood, IN for homes, rentals, and commercial spaces.",
    },
    {
      slug: "avon",
      name: "Avon, IN",
      description:
        "Fast mold remediation response throughout Avon and Hendricks County.",
    },
    {
      slug: "plainfield",
      name: "Plainfield, IN",
      description:
        "Licensed mold removal serving Plainfield and surrounding Hendricks County communities.",
    },
    {
      slug: "lawrence",
      name: "Lawrence, IN",
      description:
        "Mold inspection and removal for Lawrence, IN residential and commercial properties.",
    },
    {
      slug: "beech-grove",
      name: "Beech Grove, IN",
      description:
        "Serving Beech Grove with professional mold remediation and water damage response.",
    },
  ] as ServiceArea[],

  // ─── About Section ────────────────────────────────────────
  aboutHeading: "Why Indianapolis Trusts Us for Mold Removal",
  aboutPoints: [
    {
      heading: "Licensed & Certified Technicians",
      body: "Our team holds the certifications required for safe mold remediation. You get professionals who know what they're doing — not a handyman with a spray bottle.",
    },
    {
      heading: "We Fix the Source, Not Just the Symptom",
      body: "Removing visible mold without addressing the moisture that caused it is a waste of money. We identify the root cause and make sure it's resolved.",
    },
    {
      heading: "Transparent Pricing",
      body: "Free estimates, no surprise charges. You'll know the full scope and cost before any work begins.",
    },
    {
      heading: "Fast Response Across Indianapolis",
      body: "Mold doesn't wait, and neither should you. We offer same-day response and serve the entire Indianapolis metro area.",
    },
  ],

  // ─── Integrations ─────────────────────────────────────────
  // Paste your CallRail snippet src URL here when you have it
  // e.g. "https://cdn.callrail.com/companies/XXXXXXXX/XXXXXXXXXXXXXXXX/12/swap.js"
  callRailSnippet: null as string | null,

  // Google Analytics 4 — paste measurement ID when ready
  // e.g. "G-XXXXXXXXXX"
  googleAnalyticsId: null as string | null,

  // Formspree endpoint for contact form
  // Sign up at formspree.io, create a form, paste the endpoint here
  // e.g. "https://formspree.io/f/XXXXXXXX"
  formspreeEndpoint: null as string | null,
}

export type SiteConfig = typeof siteConfig
