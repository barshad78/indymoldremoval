import { siteConfig } from "@/config";

export default function TrustBar() {
  return (
    <section className="bg-brand-teal-light border-y border-teal-200 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {siteConfig.trustSignals.map((signal) => (
            <li key={signal} className="flex items-center gap-2 text-sm font-medium text-brand-navy">
              <CheckIcon />
              {signal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand-teal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}
