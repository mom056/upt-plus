import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import { FileCheck, ShieldAlert } from 'lucide-react';
import { BRAND_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Use | Enterprise Service & Advisory Governance',
  description:
    'Terms of use and engagement principles governing access to UPT Plus corporate materials, architecture blueprints, and advisory interactions.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Terms of Use' }]} />

        <div className="mt-6 mb-12">
          <Badge variant="purple" className="mb-4">
            GOVERNANCE &amp; LEGAL
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-['Space_Grotesk',sans-serif] leading-tight">
            Terms of Use &amp; Service Framework
          </h1>
          <p className="mt-4 text-sm font-mono text-slate-400">
            Last Updated: August 2026 • Reference: UPT-LEG-TERMS-01
          </p>
        </div>

        <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12 shadow-xl space-y-8 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website and digital resources provided by UPT PLUS, you acknowledge and agree to comply with these Terms of Use. If you do not agree with any part of these terms, please discontinue use of this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
              2. Intellectual Property &amp; Architectural Blueprints
            </h2>
            <p>
              All diagrams, methodologies, whitepapers, design patterns, and case studies published on this website are the intellectual property of UPT PLUS. They are provided for informational and architectural evaluation purposes only and may not be reproduced, redistributed, or repurposed without prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
              3. Advisory Nature of Published Materials
            </h2>
            <p>
              The technical publications, whitepapers, and reference architectures represent generalized engineering frameworks. They do not constitute formal binding engineering deliverables until formally scoped, tested, and executed under a signed Master Services Agreement (MSA) or Statement of Work (SOW).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
              4. Inquiries &amp; Legal Notices
            </h2>
            <p>
              For legal inquiries, master services governance, or procurement guidelines, reach out to{' '}
              <a href={`mailto:${BRAND_CONFIG.placeholders.contactEmail}`} className="text-orange-400 font-mono hover:underline">
                {BRAND_CONFIG.placeholders.contactEmail}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
