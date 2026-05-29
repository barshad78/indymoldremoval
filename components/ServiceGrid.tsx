import Link from "next/link";
import { siteConfig } from "@/config";

export default function ServiceGrid() {
  return (
    <section id="services" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy text-center mb-3">
          Our Mold Removal Services
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
          From initial inspection to full remediation — we handle every stage of the mold removal process.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:border-brand-green hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              <div className="w-10 h-10 bg-brand-green-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-green transition-colors">
                <MoldIcon className="w-5 h-5 text-brand-green group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-brand-navy mb-2 group-hover:text-brand-green transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {service.shortDescription}
              </p>
              <span className="mt-4 text-brand-green text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
