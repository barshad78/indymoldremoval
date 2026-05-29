import JsonLd from "@/components/JsonLd";
import { generateFAQSchema } from "@/lib/schema";
import { siteConfig } from "@/config";

interface FAQProps {
  heading?: string;
}

export default function FAQ({ heading }: FAQProps) {
  const faqSchema = generateFAQSchema(siteConfig.faqs);

  return (
    <section className="py-14 sm:py-20 bg-white">
      <JsonLd data={faqSchema} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy text-center mb-10">
          {heading ?? "Frequently Asked Questions"}
        </h2>
        <div className="space-y-3">
          {siteConfig.faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 py-4 text-brand-navy font-semibold hover:bg-gray-50 transition-colors list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-green">
                <span>{faq.question}</span>
                <span className="flex-shrink-0 text-brand-green group-open:rotate-180 transition-transform">
                  <ChevronIcon />
                </span>
              </summary>
              <div className="px-5 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
