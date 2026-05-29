import { Metadata } from "next";
import { siteConfig } from "@/config";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: `Contact ${siteConfig.businessName} | ${siteConfig.city}, ${siteConfig.stateAbbr}`,
  description: `Contact ${siteConfig.businessName} for mold removal services in ${siteConfig.city}. Call ${siteConfig.phoneDisplay} or send us a message for a free estimate.`,
  alternates: {
    canonical: `${siteConfig.domain}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
            Contact {siteConfig.businessName}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Ready to get started? Call us for the fastest response, or fill out the form and we&apos;ll get back to you shortly.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-display font-bold text-xl text-brand-navy mb-6">
                Request a Free Estimate
              </h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div>
              <h2 className="font-display font-bold text-xl text-brand-navy mb-6">
                Prefer to Call?
              </h2>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 bg-brand-green-light border border-green-200 rounded-xl px-5 py-4 mb-6 hover:border-brand-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green group"
              >
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Call us directly</p>
                  <p className="font-display font-bold text-2xl text-brand-navy group-hover:text-brand-green transition-colors">
                    {siteConfig.phoneDisplay}
                  </p>
                </div>
              </a>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex gap-3">
                  <ClockIcon />
                  <div>
                    <p className="font-semibold text-gray-800">Business Hours</p>
                    <p>Mon–Sat: 7:00 AM – 7:00 PM</p>
                    <p>Emergency response available</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <EmailIcon />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-brand-green hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <PinIcon />
                  <div>
                    <p className="font-semibold text-gray-800">Service Area</p>
                    <p>{siteConfig.city} and surrounding communities including Carmel, Fishers, Noblesville, Greenwood, and more.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
                <p className="text-amber-800 text-sm font-semibold mb-1">Urgent mold situation?</p>
                <p className="text-amber-700 text-sm">
                  Mold can spread within 24–48 hours. For same-day service, please call us directly rather than using the form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
