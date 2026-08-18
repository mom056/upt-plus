import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import UptLogo from '@/components/logo/UptLogo';
import {
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  Lock,
  Workflow,
  FileCheck,
  Scale,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About UPT Plus | Enterprise Technology, Cybersecurity & Cloud Computing',
  description:
    'UPT Plus builds, secures, modernizes, and operates the critical digital environments powering modern enterprises across cybersecurity, cloud, and infrastructure.',
};

export default function AboutPage() {
  const pillars = [
    {
      title: 'Architectural Rigor',
      description:
        'Every system design undergoes rigorous structural analysis, failure mode evaluation, and multi-tier latency testing before deployment.',
      icon: Layers,
    },
    {
      title: 'Defense-in-Depth Security',
      description:
        'Security is not an add-on perimeter; it is embedded directly into code commits, network fabrics, and operational runbooks.',
      icon: ShieldCheck,
    },
    {
      title: 'Operational Continuity',
      description:
        'We design for continuous availability, rapid failover, and audited disaster recovery across all physical and cloud tiers.',
      icon: Cpu,
    },
    {
      title: 'Scalable Evolution',
      description:
        'Modular infrastructure and microservices decoupling ensure systems evolve predictably as enterprise demands expand.',
      icon: Workflow,
    },
  ];

  const governanceStandards = [
    {
      standard: 'Zero Trust Architecture (NIST SP 800-207)',
      focus: 'Continuous identity verification, microsegmentation, and dynamic authorization across all enterprise endpoints.',
    },
    {
      standard: 'ISO/IEC 27001 Security Management Alignment',
      focus: 'Systematic information security management controls protecting sensitive data and operational integrity.',
    },
    {
      standard: 'CIS Benchmarks & Secure Configuration Baselines',
      focus: 'Automated hardening of cloud workloads, hypervisors, switching hardware, and container runtime environments.',
    },
    {
      standard: 'Enterprise SRE & Observability Protocols',
      focus: 'Standardized telemetry, structured logging, distributed tracing, and governed incident post-mortem workflows.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About UPT Plus' }]} />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-16">
          <Badge variant="orange" className="mb-4">
            ORGANIZATION &amp; MISSION
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
            Engineering the technology foundations behind modern business.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            UPT Plus is an enterprise technology organization specializing in cybersecurity, cloud computing, digital infrastructure, application modernization, and continuous managed operations. We help institutions build, protect, and scale mission-critical digital environments.
          </p>
        </div>

        {/* Identity & Mission Overview */}
        <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12 mb-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="text-xs font-mono uppercase text-orange-400 font-bold tracking-widest">
                OUR MISSION &amp; COMMITMENT
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                Bridging Strategy, Architecture, and Continuous Operations
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Modern enterprise technology has grown increasingly distributed, heterogeneous, and exposed to sophisticated cyber threats. UPT Plus was established to eliminate fragmented IT silos by delivering unified engineering across physical data centers, hyperscale clouds, modern application backbones, and 24/7 managed defense.
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                We believe that technology must do more than simply function — it must perform under peak loads, protect confidential assets unconditionally, and scale with corporate growth.
              </p>
            </div>

            <div className="bg-[#11182B] p-8 rounded-xl border border-white/10 flex flex-col items-center text-center justify-center">
              <UptLogo variant="vertical" size="lg" withTagline={true} />
              <div className="mt-6 pt-6 border-t border-white/10 w-full text-xs font-mono text-slate-400">
                ENTERPRISE CAPABILITY FRAMEWORK
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase text-orange-400 font-bold tracking-widest mb-6">
            OUR ENGINEERING PHILOSOPHY
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-8 rounded-2xl bg-[#0C1222] border border-white/15 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk',sans-serif]">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Governance & Compliance Standards */}
        <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12 mb-20 shadow-xl">
          <div className="text-xs font-mono uppercase text-purple-400 font-bold tracking-widest mb-2">
            ENGINEERING GOVERNANCE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-8">
            Compliance, Hardening, and Industry Frameworks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {governanceStandards.map((gov) => (
              <div key={gov.standard} className="p-5 rounded-xl bg-[#11182B] border border-white/10">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{gov.standard}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">{gov.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#11182B] border border-white/15 rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-4">
            Partner With Our Architecture Team
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Discover how UPT Plus can design, harden, and manage your technology environment with engineering precision.
          </p>
          <Button href="/contact" variant="primary" size="lg" withArrow>
            Schedule an Architectural Discovery Session
          </Button>
        </div>
      </div>
    </main>
  );
}
