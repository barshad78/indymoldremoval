import Link from "next/link";
import { siteConfig } from "@/config";

interface CTABannerProps {
  heading?: string;
}

export default function CTABanner({
  heading = "Ready to Get Rid of Mold? Call Us Today.",
}: CTABannerProps) {
  return (
    <section className="bg-brand-navy py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
          {heading}
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Free estimates. Same-day response. Serving all of Indianapolis and surrounding areas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold text-xl px-10 py-4 rounded-xl transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-green focus-visible:ring-offset-brand-navy"
          >
            <PhoneIcon />
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}
