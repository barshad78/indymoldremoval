import Link from "next/link";
import { siteConfig } from "@/config";

export default function Hero() {
  return (
    <section className="bg-brand-navy text-white py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            {siteConfig.heroHeading}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
            {siteConfig.heroSubheading}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-green focus-visible:ring-offset-brand-navy"
            >
              <PhoneIcon />
              {siteConfig.heroCtaText}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Send Us a Message
            </Link>
          </div>

          {/* Phone number large display */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 text-brand-green-light hover:text-white text-2xl font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
          >
            <PhoneIcon className="w-6 h-6" />
            {siteConfig.phoneDisplay}
          </a>
        </div>

        {/* Trust signals bar */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {siteConfig.trustSignals.map((signal) => (
              <li key={signal} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckIcon />
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}
