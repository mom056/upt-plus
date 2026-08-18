import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import PositioningSection from '@/components/sections/PositioningSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import EdgeToEnterpriseSection from '@/components/sections/EdgeToEnterpriseSection';
import ManagedServicesSection from '@/components/sections/ManagedServicesSection';
import MethodologySection from '@/components/sections/MethodologySection';
import IndustriesPreviewSection from '@/components/sections/IndustriesPreviewSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import EcosystemSection from '@/components/sections/EcosystemSection';
import WhyUptSection from '@/components/sections/WhyUptSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';

export const metadata = {
  title: 'UPT Plus | Cybersecurity & Cloud Computing',
  description:
    'UPT Plus provides enterprise cybersecurity, cloud computing, digital infrastructure, application modernization, and managed technology solutions.',
  openGraph: {
    title: 'UPT Plus | Cybersecurity & Cloud Computing',
    description:
      'UPT Plus helps organizations build, secure, modernize, and operate the digital environments behind modern business.',
    url: 'https://upt-plus.com',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 flex flex-col">
      {/* 1. Hero (Dark) */}
      <HeroSection />

      {/* 2. Positioning (Light) */}
      <PositioningSection />

      {/* 3. Core Capabilities (Dark) */}
      <CapabilitiesSection />

      {/* 4. From Edge to Enterprise (Dark Technical Diagram) */}
      <EdgeToEnterpriseSection />

      {/* 5. Managed Services (Light) */}
      <ManagedServicesSection />

      {/* 6. How We Deliver (Dark) */}
      <MethodologySection />

      {/* 7. Industries Preview (Light/Neutral) */}
      <IndustriesPreviewSection />

      {/* 8. Case Studies / Representative Architectures (Dark) */}
      <CaseStudiesSection />

      {/* 9. Technology Ecosystem & Integration Philosophy (Light) */}
      <EcosystemSection />

      {/* 10. Why UPT Plus (Dark) */}
      <WhyUptSection />

      {/* 11. Final CTA (Dark / High-Impact) */}
      <FinalCtaSection />
    </main>
  );
}
