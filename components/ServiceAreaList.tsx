import Link from "next/link";
import { siteConfig } from "@/config";

export default function ServiceAreaList() {
  return (
    <section id="locations" className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy text-center mb-3">
          Serving Indianapolis &amp; Surrounding Areas
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
          We provide mold removal services throughout the Indianapolis metro area. Click your city for more information.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {siteConfig.serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/locations/${area.slug}`}
              className="flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-brand-navy hover:border-brand-green hover:text-brand-green hover:shadow-sm transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              <PinIcon />
              {area.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}
