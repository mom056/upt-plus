import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { CASE_STUDIES_DATA } from '@/lib/data/projectsData';
import { ArrowRight, CheckCircle2, Layers, ShieldCheck, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Representative Projects & Case Studies | Architectural Blueprints',
  description:
    'Documented enterprise architecture blueprints across Zero Trust financial systems, elastic retail scaling, telecom core networking, and healthcare data security.',
};

export default function ProjectsHubPage() {
  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Projects & Case Studies' }]} />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-16">
          <Badge variant="orange" className="mb-4">
            REPRESENTATIVE CASE STUDIES
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
            Documented engineering architectures and outcomes.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            Examine representative architecture blueprints illustrating how UPT Plus engineers resilience, handles massive concurrency, and enforces Zero Trust security across complex enterprise workloads.
          </p>
        </div>

        {/* Architectural Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {CASE_STUDIES_DATA.map((study) => (
            <div
              key={study.id}
              className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-orange-500/50 transition-all group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                    {study.category}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                    {study.badgeType}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors font-['Space_Grotesk',sans-serif]">
                  {study.title}
                </h2>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {study.summary}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10 mb-6">
                  <div className="text-xs">
                    <span className="font-mono uppercase text-slate-400 font-bold">Challenge: </span>
                    <span className="text-slate-300">{study.challenge}</span>
                  </div>
                  <div className="text-xs">
                    <span className="font-mono uppercase text-orange-400 font-bold">Solution: </span>
                    <span className="text-slate-300">{study.solution}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Engineering Verified</span>
                </span>

                <Button href={`/projects/${study.slug}`} variant="outline" size="sm" withArrow>
                  Full Architecture Review
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Engagement Callout */}
        <div className="bg-[#11182B] border border-white/15 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <Badge variant="purple" className="mb-4">
            CONFIDENTIAL REVIEWS
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-4">
            Need an Architecture Assessment for Your Infrastructure?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Our principal architects conduct confidential, NDA-protected technical audits to evaluate your current bottlenecks, security posture, and scaling capacity.
          </p>
          <Button href="/contact" variant="primary" size="lg" withArrow>
            Schedule an Architectural Audit
          </Button>
        </div>
      </div>
    </main>
  );
}
