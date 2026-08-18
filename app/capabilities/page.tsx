import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import UptLogo from '@/components/logo/UptLogo';
import {
  ShieldCheck,
  CloudCog,
  Server,
  Code2,
  CheckCircle2,
  FileText,
  Printer,
  Lock,
  Layers,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise Capability Statement | UPT PLUS',
  description:
    'Formal executive capability statement detailing core technical competencies, delivery methodology, compliance standards, and architectural governance.',
};

export default function CapabilitiesPage() {
  const capabilityMatrix = [
    {
      domain: 'Cybersecurity & Defense Architecture',
      icon: ShieldCheck,
      competencies: [
        'Zero Trust Network Architecture (ZTNA) & Identity Federation',
        'API Security Gateway, Web Application Firewall (WAF) & Rate Limiting',
        'Cloud Security Posture Management (CSPM) & CI/CD Security Gates',
        'Volumetric DDoS Deflection & Anycast Scrubbing Architecture',
        'Enterprise Security Incident Event Management (SIEM/SOC integration)',
      ],
    },
    {
      domain: 'Cloud Computing & Distributed Fabric',
      icon: CloudCog,
      competencies: [
        'Multi-Cloud Enterprise Landing Zones & IaC Automation (Terraform/OpenTofu)',
        'Active-Active Hybrid Cloud Network Fabric & Direct Peering',
        'Zero-Data-Loss Disaster Recovery & Automated Failover Orchestration',
        'FinOps Cloud Economics, Rightsizing & Reserved Capacity Governance',
        'Enterprise Container Platforms (Kubernetes / OpenShift)',
      ],
    },
    {
      domain: 'Digital Infrastructure & Data Center Engineering',
      icon: Server,
      competencies: [
        'Spine-Leaf EVPN-VXLAN High-Throughput Datacenter Switching',
        'Software-Defined WAN (SD-WAN) Multi-Site Mesh Interconnects',
        'High-Density Structured Cabling (Cat 6A, OM4/OM5 Fiber Optic Backbones)',
        'Critical Facility Telemetry (Power, Thermal, Physical Security Monitoring)',
        'Industrial Wireless, Core Routing & Edge Compute Deployment',
      ],
    },
    {
      domain: 'Application Modernization & Systems Integration',
      icon: Code2,
      competencies: [
        'Monolithic Architecture Decoupling & Strangler Fig Migration',
        'Event-Driven Microservices Architecture (Apache Kafka / Event Grids)',
        'Core ERP Interconnects (SAP, Oracle, Mainframe Integration via REST/gRPC)',
        'Declarative GitOps Continuous Delivery & Automated Rollbacks',
        'Enterprise Web & Mobile Interfaces (Next.js, TypeScript, React)',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Enterprise Capability Statement' }]} />

        {/* Executive Header */}
        <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12 mt-6 mb-12 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <Badge variant="orange" className="mb-3">
                OFFICIAL CAPABILITY STATEMENT
              </Badge>
              <h1 className="text-3xl sm:text-4xl font-black text-white font-['Space_Grotesk',sans-serif]">
                UPT PLUS Enterprise Capabilities
              </h1>
              <p className="text-sm font-mono text-slate-400 mt-1">
                Ref: UPT-CAP-2026 • Cybersecurity &amp; Cloud Computing
              </p>
            </div>

            <UptLogo variant="horizontal" size="md" withTagline={false} />
          </div>

          {/* Executive Summary */}
          <div className="pt-8">
            <h2 className="text-xs font-mono uppercase text-orange-400 font-bold tracking-widest mb-3">
              EXECUTIVE STATEMENT
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              UPT PLUS is an enterprise technology organization delivering strategic architecture, system integration, cybersecurity engineering, and managed operations for mission-critical institutions. We specialize in designing resilient, high-availability digital foundations capable of operating under extreme concurrency and sophisticated threat conditions.
            </p>
          </div>
        </div>

        {/* 4 Core Competency Domains */}
        <div className="space-y-8 mb-16">
          <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-widest">
            CORE TECHNICAL COMPETENCIES &amp; SCOPE
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilityMatrix.map((matrix) => {
              const Icon = matrix.icon;
              return (
                <div
                  key={matrix.domain}
                  className="bg-[#0C1222] border border-white/15 rounded-xl p-7 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
                        {matrix.domain}
                      </h3>
                    </div>

                    <ul className="space-y-2.5 pt-3 border-t border-white/10">
                      {matrix.competencies.map((comp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Governance, Standards & Delivery Lifecycle */}
        <div className="bg-[#11182B] border border-white/15 rounded-2xl p-8 sm:p-10 mb-16">
          <h2 className="text-xl font-bold text-white mb-6 font-['Space_Grotesk',sans-serif]">
            Delivery Governance &amp; Compliance Standards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-[#0E1527] border border-white/10">
              <div className="text-xs font-mono text-orange-400 font-bold uppercase mb-1">
                Architecture Standard
              </div>
              <div className="text-sm font-bold text-white mb-2">Zero Trust Architecture</div>
              <div className="text-xs text-slate-400">
                Aligned with NIST SP 800-207, enforcing strict mutual authentication and dynamic least privilege.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0E1527] border border-white/10">
              <div className="text-xs font-mono text-orange-400 font-bold uppercase mb-1">
                Operational Framework
              </div>
              <div className="text-sm font-bold text-white mb-2">ISO/IEC 27001 Controls</div>
              <div className="text-xs text-slate-400">
                Systematic data protection, encrypted storage, access auditing, and formal change control.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0E1527] border border-white/10">
              <div className="text-xs font-mono text-orange-400 font-bold uppercase mb-1">
                Delivery Lifecycle
              </div>
              <div className="text-sm font-bold text-white mb-2">6-Stage Governed Delivery</div>
              <div className="text-xs text-slate-400">
                Discover • Architect • Deploy • Secure • Operate • Evolve with documented milestone sign-offs.
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Procurement Information */}
        <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-2">
            Engagement &amp; RFP Inquiries
          </h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-6">
            For formal capability briefings, vendor pre-qualification, and RFP submissions, connect directly with our enterprise advisory desk.
          </p>

          <Button href="/contact" variant="primary" size="lg" withArrow>
            Initiate Enterprise Engagement
          </Button>
        </div>
      </div>
    </main>
  );
}
