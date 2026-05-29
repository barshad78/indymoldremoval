import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config";
import { generateLocalBusinessSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import CTABanner from "@/components/CTABanner";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return siteConfig.services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = siteConfig.services.find((s) => s.slug === params.slug);
  if (!service) return {};

  const title = `${service.name} in ${siteConfig.city}, ${siteConfig.stateAbbr} | ${siteConfig.businessName}`;
  const description = `${service.shortDescription} Serving ${siteConfig.city} and the greater Indianapolis metro. Free estimates — call ${siteConfig.phoneDisplay}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.domain}/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.domain}/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = siteConfig.services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const schema = generateLocalBusinessSchema();

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-brand-green text-sm font-semibold uppercase tracking-wide mb-3">
            {siteConfig.businessName}
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            {service.name} in {siteConfig.city}, {siteConfig.stateAbbr}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            {service.shortDescription}
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-green focus-visible:ring-offset-brand-navy"
          >
            <PhoneIcon />
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Full description */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed text-lg">
              {service.fullDescription}
            </p>
          </div>

          {service.urgencyNote && (
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl px-6 py-4 flex gap-3">
              <WarningIcon />
              <p className="text-amber-800 font-medium">{service.urgencyNote}</p>
            </div>
          )}

          {/* Process */}
          <div className="mt-12">
            <h2 className="font-display font-bold text-2xl text-brand-navy mb-8">
              Our {service.name} Process
            </h2>
            <div className="space-y-6">
              {service.process.map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display font-bold text-brand-navy mb-1">
                      {step.step}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green-dark font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
            >
              <ArrowLeftIcon />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
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

function ArrowLeftIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}
