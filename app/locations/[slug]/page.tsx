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
  return siteConfig.serviceAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const area = siteConfig.serviceAreas.find((a) => a.slug === params.slug);
  if (!area) return {};

  const title = `Mold Removal in ${area.name} | ${siteConfig.businessName}`;
  const description = `Professional mold removal and remediation services in ${area.name}. Licensed technicians, free estimates. Call ${siteConfig.phoneDisplay} for same-day response.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.domain}/locations/${area.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.domain}/locations/${area.slug}`,
    },
  };
}

export default function LocationPage({ params }: Props) {
  const area = siteConfig.serviceAreas.find((a) => a.slug === params.slug);
  if (!area) notFound();

  const schema = generateLocalBusinessSchema();

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-brand-green text-sm font-semibold uppercase tracking-wide mb-3">
            Serving {area.name}
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Mold Removal in {area.name}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
            {area.description}
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

      {/* Content */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-gray-600 leading-relaxed text-lg mb-10">
            {siteConfig.businessName} provides professional mold inspection and remediation services throughout {area.name}. Whether you&apos;re dealing with visible mold growth, water damage, or suspect a hidden mold problem, our licensed technicians respond quickly and work efficiently to eliminate the problem at its source.
          </p>

          {/* Services */}
          <h2 className="font-display font-bold text-2xl text-brand-navy mb-6">
            Mold Removal Services Available in {area.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {siteConfig.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-brand-green hover:shadow-sm transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
              >
                <div className="w-8 h-8 bg-brand-green-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green transition-colors">
                  <CheckIcon />
                </div>
                <div>
                  <p className="font-semibold text-brand-navy group-hover:text-brand-green transition-colors text-sm">
                    {service.name}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed mt-0.5 line-clamp-2">
                    {service.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Why choose */}
          <div className="bg-brand-teal-light rounded-2xl px-6 py-8 mb-10">
            <h2 className="font-display font-bold text-xl text-brand-navy mb-4">
              Why {area.name} Residents Choose Us
            </h2>
            <ul className="space-y-3">
              {siteConfig.trustSignals.map((signal) => (
                <li key={signal} className="flex items-center gap-3 text-brand-navy-mid text-sm">
                  <CheckFilledIcon />
                  {signal}
                </li>
              ))}
            </ul>
          </div>

          {/* Back link */}
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green-dark font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
            >
              <ArrowLeftIcon />
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      <CTABanner heading={`Need Mold Removal in ${area.name}? Call Us Today.`} />
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

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand-green group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CheckFilledIcon() {
  return (
    <svg className="w-4 h-4 text-brand-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
