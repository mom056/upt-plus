import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { INDUSTRIES_DATA } from '@/lib/data/industriesData';
import {
  Landmark,
  Radio,
  ShoppingBag,
  ShieldAlert,
  Activity,
  Factory,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industry Solutions | Mission-Critical Sector Architectures',
  description:
    'Tailored cybersecurity, cloud, and digital infrastructure architectures engineered for Financial Services, Telecommunications, Retail, Government, Healthcare, and Manufacturing.',
};

export default function IndustriesOverviewPage() {
  const industries = Object.values(INDUSTRIES_DATA);

  const iconMap: Record<string, any> = {
    'financial-services': Landmark,
    telecom: Radio,
    retail: ShoppingBag,
    government: ShieldAlert,
    healthcare: Activity,
    manufacturing: Factory,
  };

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Industries' }]} />

        {/* Hero Banner */}
        <div className="max-w-4xl mt-6 mb-16">
          <Badge variant="purple" className="mb-4">
            SECTOR ARCHITECTURES
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
            Engineered for the distinct pressures of critical sectors.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            Each industry operates under specific regulatory frameworks, availability tolerances, and threat surfaces. UPT Plus translates sector constraints into resilient, high-performance technology systems.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => {
            const Icon = iconMap[ind.id] || Landmark;

            return (
              <div
                key={ind.id}
                className="bg-[#0C1222] border border-white/15 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-orange-500/50 transition-all group shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono text-orange-400 uppercase tracking-wider font-bold">
                    {ind.tagline}
                  </span>

                  <h2 className="text-2xl font-bold text-white mt-1 mb-3 group-hover:text-orange-300 transition-colors font-['Space_Grotesk',sans-serif]">
                    {ind.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {ind.heroSummary}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/10 mb-6">
                    <div className="text-xs font-mono text-slate-400 uppercase font-bold">
                      Critical Focus:
                    </div>
                    {ind.challenges.slice(0, 2).map((c, cIdx) => (
                      <div key={cIdx} className="text-xs text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                        <span className="truncate">{c.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Button
                    href={`/industries/${ind.slug}`}
                    variant="outline"
                    size="sm"
                    withArrow
                    className="w-full justify-between"
                  >
                    Explore Sector Blueprint
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
