"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/config";

export default function Hero() {
  return (
    <section className="bg-brand-navy text-white py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left column — headline, CTAs, trust signals */}
          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
              {siteConfig.heroHeading}
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
              {siteConfig.heroSubheading}
            </p>

            {/* Phone CTA */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-green focus-visible:ring-offset-brand-navy mb-4"
            >
              <PhoneIcon />
              {siteConfig.heroCtaText}
            </a>

            {/* Large phone number display */}
            <div className="mb-8">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 text-brand-green-light hover:text-white text-2xl font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
              >
                <PhoneIcon className="w-6 h-6" />
                {siteConfig.phoneDisplay}
              </a>
            </div>

            {/* Trust signals — shown below form on mobile, here on desktop */}
            <div className="hidden lg:block pt-8 border-t border-white/10">
              <TrustSignals />
            </div>
          </div>

          {/* Right column — inline lead form */}
          <div>
            <HeroForm />
          </div>

        </div>

        {/* Trust signals — mobile only, below both columns */}
        <div className="lg:hidden mt-10 pt-8 border-t border-white/10">
          <TrustSignals />
        </div>
      </div>
    </section>
  );
}

function TrustSignals() {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3">
      {siteConfig.trustSignals.map((signal) => (
        <li key={signal} className="flex items-center gap-2 text-sm text-gray-300">
          <CheckIcon />
          {signal}
        </li>
      ))}
    </ul>
  );
}

function HeroForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!siteConfig.formspreeEndpoint) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
      {status === "success" ? (
        <div className="text-center py-6">
          <div className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
            <SuccessCheckIcon />
          </div>
          <h3 className="font-display font-bold text-brand-navy text-xl mb-2">
            We got your message!
          </h3>
          <p className="text-gray-500 text-sm">
            Someone will be in touch with you shortly. For urgent needs, call us directly at{" "}
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-semibold text-brand-green hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
          </p>
        </div>
      ) : (
        <>
          <h2 className="font-display font-bold text-brand-navy text-xl mb-5">
            Get a Free Estimate
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="hero-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="hero-name"
                name="name"
                type="text"
                required
                autoComplete="given-name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition text-sm"
                placeholder="Your first name"
              />
            </div>

            <div>
              <label
                htmlFor="hero-phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="hero-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition text-sm"
                placeholder={siteConfig.phoneDisplay}
              />
            </div>

            <div>
              <label
                htmlFor="hero-description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Brief Description{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                id="hero-description"
                name="description"
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition resize-none text-sm"
                placeholder="Tell us about your mold situation..."
              />
            </div>

            {status === "error" && (
              <p className="text-red-600 text-sm">
                Something went wrong. Please try again or call us directly at{" "}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-semibold underline"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-brand-green hover:bg-brand-green-dark disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-green text-sm"
            >
              {status === "submitting" ? "Sending..." : "Request Free Estimate"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function SuccessCheckIcon() {
  return (
    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}
