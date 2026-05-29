import React from "react";
import { siteConfig } from "@/config";

const icons: Record<number, () => React.ReactElement> = {
  0: ShieldIcon,
  1: SearchIcon,
  2: DollarIcon,
  3: ClockIcon,
};

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy text-center mb-3">
          {siteConfig.aboutHeading}
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
          We&apos;re not just another contractor. Here&apos;s why Indianapolis homeowners call us first.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {siteConfig.aboutPoints.map((point, i) => {
            const Icon = icons[i] ?? ShieldIcon;
            return (
              <div key={point.heading} className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green-light rounded-xl flex items-center justify-center">
                  <Icon />
                </div>
                <div>
                  <h3 className="font-display font-bold text-brand-navy mb-2">{point.heading}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
