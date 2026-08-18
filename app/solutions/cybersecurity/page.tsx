import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { SOLUTIONS_DATA } from '@/lib/data/solutionsData';
import { ShieldCheck, Lock, CheckCircle2, ShieldAlert, Cpu, Activity, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cybersecurity Architecture | Zero Trust, Cloud & API Security',
  description:
    'Enterprise cybersecurity architectures: Zero Trust, Application & API security, Cloud posture hardening, DDoS resilience, and managed security operations.',
};

export default function CybersecuritySolutionPage() {
  const data = SOLUTIONS_DATA.cybersecurity;

  const securityFrameworks = [
    {
      title: 'Zero Trust Network Architecture (ZTNA)',
      desc: 'Eliminates perimeter assumptions. Every session undergoes continuous cryptographic authentication, dynamic device posture checks, and least-privilege scoping.',
      icon: Lock,
    },
    {
      title: 'Application & API Shielding',
      desc: 'Real-time schema validation, rate-limiting, and deep token introspection guarding GraphQL and REST APIs against automated credential attacks and logic abuse.',
      icon: ShieldCheck,
    },
    {
      title: 'Cloud Workload Hardening',
      desc: 'Unified security posture management across AWS, Azure, GCP, and private clouds — ensuring immutable Infrastructure as Code and automated secret rotation.',
      icon: Cpu,
    },
    {
      title: 'DDoS & Volumetric Resilience',
      desc: 'Multi-layer Anycast scrubbing and BGP traffic deflection absorbing multi-gigabit volumetric attacks before backend services experience latency degradation.',
      icon: Activity,
    },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Solutions', href: '/solutions' },
            { label: 'Cybersecurity' },
          ]}
        />

        {/* Hero Banner */}
        <div className="max-w-4xl mt-6 mb-16">
          <Badge variant="orange" className="mb-4">
            ENTERPRISE CYBERSECURITY
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
            Defend complex environments with architecture-first security.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {data.overview}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Request Security Architecture Review
            </Button>
            <Button href="/capabilities" variant="secondary" size="lg">
              Download Capability Statement
            </Button>
          </div>
        </div>

        {/* Core Architecture Framework Grid */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase text-orange-400 font-bold tracking-widest mb-6">
            DEFENSE-IN-DEPTH ARCHITECTURAL FRAMEWORK
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityFrameworks.map((fw) => {
              const Icon = fw.icon;
              return (
                <div
                  key={fw.title}
                  className="p-8 rounded-2xl bg-[#0C1222] border border-white/15 shadow-xl hover:border-orange-500/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{fw.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{fw.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Capabilities (6-grid) */}
        <div className="mb-20 bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12">
          <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-widest mb-2">
            SPECIALIZED DEFENSIVE DOMAINS
          </div>
          <h2 className="text-3xl font-black text-white font-['Space_Grotesk',sans-serif] mb-8">
            Complete Defensive Spectrum
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
              Architectural Guardrail Enforcement
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
                Connect With a Security Architect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
