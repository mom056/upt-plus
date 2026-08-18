import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { SOLUTIONS_DATA } from '@/lib/data/solutionsData';
import { CloudCog, CheckCircle2, Server, Cpu, Database, RefreshCw, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cloud Computing Architecture | Enterprise Hybrid & Distributed Fabric',
  description:
    'High-availability enterprise cloud engineering: Multi-zone architecture, automated migration, hybrid interconnects, disaster recovery, and FinOps optimization.',
};

export default function CloudSolutionPage() {
  const data = SOLUTIONS_DATA.cloud;

  const cloudPillars = [
    {
      title: 'Enterprise Landing Zones & Multi-Zone VPCs',
      desc: 'Declarative, governed cloud boundaries enforcing automated network routing, security baselines, and standardized IAM hierarchies across AWS, Azure, and GCP.',
      icon: CloudCog,
    },
    {
      title: 'Active-Active Hybrid Cloud Fabric',
      desc: 'Encrypted direct interconnects uniting on-premises core datacenters with distributed cloud regions for low-latency workload orchestration.',
      icon: Server,
    },
    {
      title: 'Disaster Recovery & Continuous Replication',
      desc: 'Zero-data-loss synchronous and asynchronous replication achieving sub-minute RTO/RPO with automated failover orchestration.',
      icon: RefreshCw,
    },
    {
      title: 'FinOps & Continuous Rightsizing',
      desc: 'Dynamic compute scaling, tiered storage policies, and container resource optimizations eliminating idle overhead and predicting infrastructure spend.',
      icon: Cpu,
    },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'Cloud Computing' },
          ]}
        />

        {/* Hero Banner */}
        <div className="max-w-4xl mt-6 mb-16">
          <Badge variant="purple" className="mb-4">
            ENTERPRISE CLOUD COMPUTING
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
            Architect high-performance, resilient cloud foundations.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {data.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Request Cloud Architecture Consultation
            </Button>
            <Button href="/capabilities" variant="secondary" size="lg">
              Download Capability Statement
            </Button>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase text-purple-400 font-bold tracking-widest mb-6">
            DISTRIBUTED CLOUD ARCHITECTURE PILLARS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cloudPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 rounded-2xl bg-[#0C1222] border border-white/15 shadow-xl hover:border-purple-500/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Capabilities (6-grid) */}
        <div className="mb-20 bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12">
          <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-widest mb-2">
            SPECIALIZED CLOUD CAPABILITIES
          </div>
          <h2 className="text-3xl font-black text-white font-['Space_Grotesk',sans-serif] mb-8">
            Complete Cloud Engineering Lifecycle
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-xl bg-[#11182B] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-white mb-2">{cap.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{cap.description}</p>
                </div>
                {cap.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Components & Strategic Value */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#0C1222] p-8 sm:p-10 rounded-2xl border border-white/15">
            <h3 className="text-xl font-bold text-white mb-6 font-['Space_Grotesk',sans-serif]">
              Target Architectural Baseline
            </h3>
            <div className="space-y-4">
              {data.architecturalComponents.map((comp) => (
                <div key={comp.name} className="p-4 rounded-lg bg-[#11182B] border border-white/10">
                  <div className="font-bold text-sm text-slate-200 mb-1">{comp.name}</div>
                  <div className="text-xs text-slate-400">{comp.purpose}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0C1222] p-8 sm:p-10 rounded-2xl border border-white/15 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 font-['Space_Grotesk',sans-serif]">
                Verified Strategic Value
              </h3>
              <ul className="space-y-4">
                {data.strategicValue.map((val, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Button href="/contact" variant="primary" size="md" withArrow className="w-full">
                Connect With a Cloud Architect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
