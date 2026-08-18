import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { INDUSTRIES_DATA, getIndustryBySlug } from '@/lib/data/industriesData';
import {
  Landmark,
  Radio,
  ShoppingBag,
  ShieldAlert,
  Activity,
  Factory,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.values(INDUSTRIES_DATA).map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { title: 'Industry Not Found' };
  }

  return {
    title: `${industry.name} Architecture & Solutions`,
    description: industry.heroSummary,
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const iconMap: Record<string, any> = {
    'financial-services': Landmark,
    telecom: Radio,
    retail: ShoppingBag,
    government: ShieldAlert,
    healthcare: Activity,
    manufacturing: Factory,
  };

  const Icon = iconMap[industry.id] || Landmark;

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Industries', href: '/industries' },
            { label: industry.name },
          ]}
        />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Icon className="w-6 h-6" />
            </div>
            <Badge variant="orange">{industry.tagline}</Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
            {industry.name} Architecture
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {industry.heroSummary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Request Sector Architectural Review
            </Button>
            <Button href="/capabilities" variant="secondary" size="lg">
              Enterprise Capability Statement
            </Button>
          </div>
        </div>

        {/* Challenges vs Architectures Two-Column Blueprint */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Challenges Column */}
          <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-10 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-red-400 font-bold tracking-wider mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span>Operational &amp; Regulatory Challenges</span>
            </div>

            <div className="space-y-6">
              {industry.challenges.map((c, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#11182B] border border-white/10">
                  <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Architectures Column */}
          <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-10 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-orange-400 font-bold tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Target Architectural Solutions</span>
            </div>

            <div className="space-y-6">
              {industry.solutions.map((s, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#11182B] border border-orange-500/20">
                  <h3 className="text-base font-bold text-orange-400 mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Architectural Considerations & Outcomes */}
        <div className="bg-[#11182B] border border-white/15 rounded-2xl p-8 sm:p-12 mb-16">
          <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-4">
            OPERATIONAL &amp; ARCHITECTURAL CONSIDERATIONS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-6">
            Expected Resilience &amp; Performance Baselines
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.operationalConsiderations.map((consideration, oIdx) => (
              <div key={oIdx} className="flex items-start gap-3 p-4 rounded-xl bg-[#0E1527] border border-white/10 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{consideration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="text-center bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-4">
            Architecting for {industry.name}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            Speak with an enterprise architect specialized in {industry.name.toLowerCase()} technology environments and regulatory compliances.
          </p>
          <Button href="/contact" variant="primary" size="lg" withArrow>
            Schedule Sector Architecture Consultation
          </Button>
        </div>
      </div>
    </main>
  );
}
