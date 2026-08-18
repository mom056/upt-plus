import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { MANAGED_SERVICES_DATA } from '@/lib/data/servicesData';
import {
  ShieldCheck,
  Cloud,
  ServerCrash,
  Activity,
  CheckCircle2,
  PhoneCall,
  Clock,
  Settings2,
  FileCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Managed Services & Operations | Enterprise SRE, Cloud & Security Ops',
  description:
    'Post-deployment operational engineering: Managed Cloud, Managed Security (SOC/SIEM), Infrastructure monitoring, Observability, and continuous incident management.',
};

export default function ManagedServicesPage() {
  const iconMap: Record<string, any> = {
    'managed-security': ShieldCheck,
    'managed-cloud': Cloud,
    'managed-infrastructure': ServerCrash,
    'monitoring-observability': Activity,
  };

  const operationalTenets = [
    {
      title: 'Site Reliability Engineering (SRE) Discipline',
      desc: 'Applying software engineering principles to infrastructure operations, automating recovery routines, and defining strict error budget frameworks.',
      icon: Settings2,
    },
    {
      title: 'Proactive Telemetry & Anomaly Detection',
      desc: 'Synthetic transactions and distributed tracing tracking latencies, error rates, and saturation points before end users notice degradation.',
      icon: Activity,
    },
    {
      title: 'Formal Tiered Incident Triage',
      desc: 'Clear escalation protocols linking L1 automated response, L2 operational engineering, and L3 principal architects with documented post-mortem reviews.',
      icon: Clock,
    },
    {
      title: 'Audited Change Governance & Compliance',
      desc: 'All configuration alterations executed via version-controlled Infrastructure as Code with peer approval gates and ISO/IEC 27001 audit trails.',
      icon: FileCheck,
    },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Managed Services' }]} />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-16">
          <Badge variant="orange" className="mb-4">
            ENTERPRISE MANAGED SERVICES &amp; OPERATIONS
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
            We don&apos;t just deploy technology. We operate it.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            Enterprise technology environments must remain available, resilient, hardened, and financially optimized long after initial deployment. UPT Plus delivers continuous operational engineering tailored to mission-critical infrastructure.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Consult On Managed Operations
            </Button>
            <Button href="/capabilities" variant="secondary" size="lg">
              Enterprise Capability Statement
            </Button>
          </div>
        </div>

        {/* 4 Operational Tenets */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase text-orange-400 font-bold tracking-widest mb-6">
            OPERATIONAL ENGINEERING PRINCIPLES
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operationalTenets.map((tenet) => {
              const Icon = tenet.icon;
              return (
                <div
                  key={tenet.title}
                  className="p-8 rounded-2xl bg-[#0C1222] border border-white/15 shadow-xl hover:border-orange-500/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{tenet.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{tenet.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Service Domains Grid */}
        <div className="space-y-8 mb-20">
          <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-widest">
            MANAGED SERVICE SCOPES
          </div>

          {MANAGED_SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.id] || ShieldCheck;

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-10 shadow-2xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                        {service.title}
                      </h2>
                      <span className="text-xs font-mono text-slate-400 uppercase">
                        Continuous Operational Scope
                      </span>
                    </div>
                  </div>

                  <Button href="/contact" variant="outline" size="sm" withArrow className="shrink-0">
                    Inquire for this Scope
                  </Button>
                </div>

                <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((f, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#11182B] border border-white/10">
                      <div className="text-sm font-bold text-white mb-1">{f.name}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{f.details}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* SLA & Governance Assurance Block */}
        <div className="bg-[#11182B] p-8 sm:p-12 rounded-2xl border border-white/15 text-center max-w-4xl mx-auto">
          <Badge variant="purple" className="mb-4">
            GOVERNANCE &amp; ACCOUNTABILITY
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-4">
            Contractual Clarity &amp; Verifiable Metrics
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            We establish measurable Service Level Objectives (SLOs) and transparent reporting dashboards customized to your enterprise governance mandates.
          </p>

          <Button href="/contact" variant="primary" size="lg" withArrow>
            Schedule an Operations Discovery Call
          </Button>
        </div>
      </div>
    </main>
  );
}
