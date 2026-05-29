import { Metadata } from "next";
import { siteConfig } from "@/config";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import ServiceBlock from "@/components/ServiceBlock";
import AboutSection from "@/components/AboutSection";
import ServiceAreaList from "@/components/ServiceAreaList";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: siteConfig.metaTitle,
  description: siteConfig.metaDescription,
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <ServiceBlock slugs={["mold-remediation", "black-mold-removal"]} />
      <AboutSection />
      <ServiceAreaList />
      <CTABanner />
      <FAQ heading={`Common Questions About Mold Removal in ${siteConfig.city}`} />
      <CTABanner heading="Don't Wait — Mold Spreads Fast. Call for a Free Estimate." />
    </>
  );
}
