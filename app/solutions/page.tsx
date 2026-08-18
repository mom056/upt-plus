import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { SOLUTIONS_DATA } from '@/lib/data/solutionsData';
import { ShieldCheck, CloudCog, Server, Code2, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions Overview | Enterprise Architecture',
  description:
    'Comprehensive enterprise technology solutions spanning cybersecurity, cloud computing, digital infrastructure, and application modernization.',
};

export default function SolutionsOverviewPage() {
  const solutions = Object.values(SOLUTIONS_DATA);

  const iconMap: Record<string, any> = {
    cybersecurity: ShieldCheck,
    cloud: CloudCog,
    infrastructure: Server,
    applications: Code2,
  };

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Solutions' }]} />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-16">
          <Badge variant="orange" className="mb-4">
            ENTERPRISE SOLUTIONS
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.1]">
            Technology built around the business.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            Security, cloud, infrastructure, and applications should operate as one interconnected environment — not isolated technology silos. UPT Plus delivers cohesive architecture for mission-critical operations.
          </p>
        </div>

        {/* 4 Pillars Deep Grid */}
        <div className="space-y-12">
          {solutions.map((sol, index) => {
            const Icon = iconMap[sol.id] || ShieldCheck;
            const isEven = index % 2 === 0;

            return (
              <div
                key={sol.id}
                id={sol.id}
                className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group hover:border-orange-500/40 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                          {sol.tagline}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                          {sol.title}
                        </h2>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-4">
                      {sol.headline}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
                      {sol.overview}
                    </p>

                    {/* Capabilities preview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {sol.capabilities.slice(0, 4).map((cap) => (
                        <div key={cap.title} className="p-3.5 rounded-lg bg-[#11182B] border border-white/10 text-xs">
                          <div className="font-bold text-slate-200 mb-1">{cap.title}</div>
                          <div className="text-slate-400 line-clamp-2">{cap.description}</div>
                        </div>
                      ))}
                    </div>

                    <Button href={`/solutions/${sol.slug}`} variant="primary" size="md" withArrow>
                      Explore {sol.title} Architecture
                    </Button>
                  </div>

                  {/* Strategic Value Aside */}
                  <div className="bg-[#11182B] p-6 sm:p-8 rounded-xl border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-4">
                        Strategic Outcomes:
                      </div>
                      <ul className="space-y-3">
                        {sol.strategicValue.map((val, vIdx) => (
                          <li key={vIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{val}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 font-mono">
                      Architectural standard: ISO/IEC 27001 &amp; Zero Trust aligned
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
