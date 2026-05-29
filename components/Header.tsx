"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 font-display font-bold text-lg text-brand-navy leading-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded"
          >
            <span className="text-brand-green">Indy</span> Mold Removal
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link href="/#services" className="hover:text-brand-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded">
              Services
            </Link>
            <Link href="/#locations" className="hover:text-brand-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded">
              Locations
            </Link>
            <Link href="/contact" className="hover:text-brand-green transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green rounded">
              Contact
            </Link>
          </nav>

          {/* Phone CTA — always visible */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold px-4 py-2 rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-green"
          >
            <PhoneIcon />
            <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
            <span className="sm:hidden">Call Now</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden ml-2 p-2 rounded text-gray-600 hover:text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-gray-100 py-3 flex flex-col gap-1 text-sm font-medium">
            <Link
              href="/#services"
              className="px-2 py-2 rounded text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#locations"
              className="px-2 py-2 rounded text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/contact"
              className="px-2 py-2 rounded text-gray-700 hover:text-brand-green hover:bg-gray-50 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
