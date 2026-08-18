import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import { ShieldCheck, Lock, FileCheck } from 'lucide-react';
import { BRAND_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | Data Governance & Confidentiality',
  description:
    'UPT Plus privacy and data governance framework adhering to international data protection principles, confidentiality protocols, and Zero Trust security.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="mt-6 mb-12">
          <Badge variant="orange" className="mb-4">
            DATA GOVERNANCE &amp; PRIVACY
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-['Space_Grotesk',sans-serif] leading-tight">
            Privacy Policy &amp; Confidentiality Protocol
          </h1>
          <p className="mt-4 text-sm font-mono text-slate-400">
            Last Updated: August 2026 • Reference: UPT-SEC-POL-01
          </p>
        </div>

        <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12 shadow-xl space-y-8 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
              1. Enterprise Privacy Commitment
            </h2>
            <p>
              UPT PLUS (&quot;Organization&quot;, &quot;we&quot;, &quot;our&quot;) is committed to protecting the privacy, confidentiality, and data integrity of all prospective and existing enterprise clients, partners, and visitors interacting with our platform and engineering advisory services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
              2. Data Collected &amp; Purpose of Processing
            </h2>
            <p>
              We collect information provided directly through our contact and architectural assessment forms, including corporate name, business email address, organization name, phone number, and technical project scope. This data is utilized exclusively for evaluating architectural feasibility, assigning domain specialists, and communicating regarding enterprise solutions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
              3. Non-Disclosure &amp; Confidentiality
            </h2>
            <p>
              All proprietary architectural blueprints, vulnerability assessments, network topologies, and business constraints disclosed during technical discovery sessions are handled under strict professional confidentiality and mutual Non-Disclosure Agreements (NDAs). We never sell, lease, or monetize client data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
              4. Cookies &amp; Telemetry
            </h2>
            <p>
              We maintain an essential-only telemetry policy. We do not embed invasive cross-site advertising pixels or tracking beacons. Cookies stored on your browser are strictly utilized for session routing, language preference persistence, and security verification.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
              5. Contacting the Security &amp; Data Protection Desk
            </h2>
            <p>
              For inquiries regarding our data handling protocols or to exercise data access/erasure rights, contact our security officer at{' '}
              <a href={`mailto:${BRAND_CONFIG.placeholders.securityEmail}`} className="text-orange-400 font-mono hover:underline">
                {BRAND_CONFIG.placeholders.securityEmail}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
