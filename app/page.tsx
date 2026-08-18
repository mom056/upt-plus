import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import EdgeToEnterpriseSection from '@/components/sections/EdgeToEnterpriseSection';
import WhyUptSection from '@/components/sections/WhyUptSection';
import EcosystemSection from '@/components/sections/EcosystemSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

export const metadata = {
  title: 'UPT Plus | Cybersecurity & Cloud Computing',
  description:
    'UPT Plus provides enterprise cybersecurity, cloud computing, and digital infrastructure solutions engineered for mission-critical digital environments.',
  openGraph: {
    title: 'UPT Plus | Cybersecurity & Cloud Computing',
    description:
      'UPT Plus helps organizations build, secure, and operate the digital environments behind modern business.',
    url: 'https://upt-plus.com',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 flex flex-col">
      {/* 1. Hero (Dark) */}
      <HeroSection />

      {/* 2. What We Do: Cybersecurity, Cloud Computing, Digital Infrastructure (Dark) */}
      <CapabilitiesSection />

      {/* 3. From Edge to Enterprise (Dark Technical Diagram) */}
      <EdgeToEnterpriseSection />

      {/* 4. Why UPT Plus (Dark Architectural Principles) */}
      <WhyUptSection />

      {/* 5. Technology Ecosystem & Integration Philosophy (Light) */}
      <EcosystemSection />

      {/* 6. Final CTA (Dark / High-Impact) */}
      <FinalCtaSection />
    </main>
  );
}

