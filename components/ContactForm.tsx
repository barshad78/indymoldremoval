"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/config";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!siteConfig.formspreeEndpoint) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
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

  if (status === "success") {
    return (
      <div className="bg-brand-green-light border border-green-200 rounded-xl px-6 py-8 text-center">
        <div className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckIcon />
        </div>
        <h3 className="font-display font-bold text-brand-navy text-xl mb-2">
          Thanks! We&apos;ll Call You Back Shortly.
        </h3>
        <p className="text-gray-600">
          We typically respond within a few hours. For faster service, call us directly at{" "}
          <a href={`tel:${siteConfig.phone}`} className="font-semibold text-brand-green hover:underline">
            {siteConfig.phoneDisplay}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          First Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="given-name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
          placeholder="Your first name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition"
          placeholder="(317) 721-7571"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Brief Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition resize-none"
          placeholder="Tell us a bit about your mold situation..."
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or call us at{" "}
          <a href={`tel:${siteConfig.phone}`} className="font-semibold underline">
            {siteConfig.phoneDisplay}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-brand-green hover:bg-brand-green-dark disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-green"
      >
        {status === "submitting" ? "Sending..." : "Request a Free Estimate"}
      </button>
    </form>
  );
}

function CheckIcon() {
  return (
    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}
