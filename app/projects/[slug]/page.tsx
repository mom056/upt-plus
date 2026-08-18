import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { CASE_STUDIES_DATA, getCaseStudyBySlug } from '@/lib/data/projectsData';
import {
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  Server,
  Activity,
  ArrowRight,
  Terminal,
  Clock,
  Workflow,
} from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES_DATA.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${study.title} | Engineering Case Study`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Projects & Case Studies', href: '/projects' },
            { label: study.title },
          ]}
        />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="orange">{study.category}</Badge>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
              {study.badgeType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.1]">
            {study.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {study.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {study.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-orange-400 font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 3-Column Structured Breakdown: Challenge -> Architecture -> Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Challenge Panel */}
          <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-7 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-red-400 font-bold tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{study.challenge}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
              Environment: {study.environment}
            </div>
          </div>

          {/* Architecture Details Panel */}
          <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-7 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-orange-400 font-bold tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span>Architectural Blueprint</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{study.architectureDetails}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
              Zero Trust &amp; high availability standards
            </div>
          </div>

          {/* Solution Strategy Panel */}
          <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-7 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-purple-400 font-bold tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{study.solution}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
              {study.diagramConcept}
            </div>
          </div>
        </div>

        {/* Implementation Steps */}
        <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12 mb-16 shadow-xl">
          <div className="text-xs font-mono uppercase text-orange-400 font-bold tracking-wider mb-4">
            GOVERNED IMPLEMENTATION PHASES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-8">
            Phased Architecture Execution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.implementationSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#11182B] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-orange-400 font-bold uppercase mb-2">
                    {step.phase}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Qualitative Technical Outcome */}
        <div className="bg-[#11182B] border border-white/15 rounded-2xl p-8 sm:p-12 mb-16">
          <div className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider mb-4">
            VERIFIED ARCHITECTURAL OUTCOME
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-6">
            Operational &amp; Business Impact
          </h2>

          <div className="flex items-start gap-4 p-6 rounded-xl bg-[#0E1527] border border-white/10 text-base text-slate-200">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{study.qualitativeOutcome}</p>
          </div>
        </div>

        {/* Architectural Consultation Footer */}
        <div className="text-center bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-4">
            Discuss a Similar Architecture for Your Enterprise
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-6">
            Review detailed architectural diagrams, sizing models, and migration roadmaps with our principal engineering team.
          </p>
          <Button href="/contact" variant="primary" size="lg" withArrow>
            Schedule Technical Deep-Dive
          </Button>
        </div>
      </div>
    </main>
  );
}
