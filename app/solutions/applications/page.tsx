import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { SOLUTIONS_DATA } from '@/lib/data/solutionsData';
import { Code2, Layers, Cpu, Database, CheckCircle2, GitBranch, Terminal } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Application Modernization | Cloud-Native, Microservices & Enterprise Integration',
  description:
    'Modernize legacy monolithic systems into decoupled, event-driven, containerized microservices with zero downtime and automated CI/CD pipelines.',
};

export default function ApplicationsSolutionPage() {
  const data = SOLUTIONS_DATA.applications;

  const appPillars = [
    {
      title: 'Monolith Decoupling & Strangler Fig Migration',
      desc: 'Incrementally extracting mission-critical business logic into domain-driven microservices with zero downtime and real-time data sync backplanes.',
      icon: Layers,
    },
    {
      title: 'Event-Driven Microservices & Kafka Backbones',
      desc: 'High-throughput publish-subscribe message buses enabling asynchronous transactions, transactional outbox patterns, and fault-tolerant decoupling.',
      icon: Cpu,
    },
    {
      title: 'Enterprise API Gateway & ERP Interconnects',
      desc: 'Unified rate-limiting, OAuth2/mTLS token mediation, schema registries, and telemetry backbones integrating SAP, Oracle, and modern React/Next.js frontends.',
      icon: Code2,
    },
    {
      title: 'Containerization & Declarative GitOps',
      desc: 'Production Kubernetes orchestration, ArgoCD reconciliation loops, automated vulnerability scanning, and multi-region blue-green rollout strategies.',
      icon: GitBranch,
    },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'Application Modernization' },
          ]}
        />

        {/* Hero Banner */}
        <div className="max-w-4xl mt-6 mb-16">
          <Badge variant="purple" className="mb-4">
            APPLICATION MODERNIZATION
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
            Transform legacy software into resilient, cloud-native services.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {data.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Request Modernization Assessment
            </Button>
            <Button href="/capabilities" variant="secondary" size="lg">
              Download Capability Statement
            </Button>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase text-purple-400 font-bold tracking-widest mb-6">
            MODERN SOFTWARE ARCHITECTURE DISCIPLINES
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {appPillars.map((pillar) => {
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
            SPECIALIZED ENGINEERING DISCIPLINES
          </div>
          <h2 className="text-3xl font-black text-white font-['Space_Grotesk',sans-serif] mb-8">
            Complete Application Engineering Stack
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
              Modernization Engineering Standards
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
                Connect With a Lead Software Architect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
