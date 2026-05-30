import Link from "next/link";
import Image from "next/image";
import { siteConfig, Service } from "@/config";

interface ServiceBlockProps {
  slugs: string[];
}

export default function ServiceBlock({ slugs }: ServiceBlockProps) {
  const featured = siteConfig.services.filter((s) => slugs.includes(s.slug));

  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        {featured.map((service, index) => (
          <ServiceItem key={service.slug} service={service} reversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}

function ServiceItem({ service, reversed }: { service: Service; reversed: boolean }) {
  return (
    <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}>
      {/* Image */}
      <div className="w-full lg:w-1/2 flex-shrink-0">
        {service.imageSrc ? (
          <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
            <Image
              src={service.imageSrc}
              alt={service.imageAlt ?? service.name}
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-brand-teal to-brand-green aspect-[4/3] flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ServiceIcon />
              </div>
              <p className="font-display font-bold text-xl">{service.name}</p>
              <p className="text-white/80 text-sm mt-2">Indianapolis, IN</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2">
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy mb-4">
          {service.name}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {service.fullDescription}
        </p>
        {service.urgencyNote && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-6 flex gap-3">
            <WarningIcon />
            <p className="text-amber-800 text-sm">{service.urgencyNote}</p>
          </div>
        )}
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-green"
        >
          Learn More About {service.name}
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

function ServiceIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
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
