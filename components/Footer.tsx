import Link from "next/link";
import { siteConfig } from "@/config";

export default function Footer() {
  const year = new Date().getFullYear();
  const topAreas = siteConfig.serviceAreas.slice(0, 5);

  return (
    <footer className="bg-brand-navy-mid text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* NAP */}
          <div className="lg:col-span-2">
            <p className="font-display font-bold text-white text-lg mb-3">
              {siteConfig.businessName}
            </p>
            <p className="text-sm mb-1">{siteConfig.tagline}</p>
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-brand-green hover:text-white font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                {siteConfig.city}, {siteConfig.state} {siteConfig.zip}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Services</p>
            <ul className="space-y-2 text-sm">
              {siteConfig.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <p className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Service Areas</p>
            <ul className="space-y-2 text-sm">
              {topAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/locations/${area.slug}`}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#locations"
                  className="text-brand-green hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                >
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {year} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
