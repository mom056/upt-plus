import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import {
  Cpu,
  ShieldCheck,
  Network,
  Cloud,
  Layers,
  CheckCircle2,
  Lock,
  GitBranch,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology Ecosystem & Integration Philosophy | Vendor Neutrality',
  description:
    'UPT Plus engineers seamless integrations across public clouds, private virtualization, core enterprise networking, Zero Trust identity, and mission-critical ERP backbones.',
};

export default function PartnersPage() {
  const ecosystemTiers = [
    {
      title: 'Hyperscale Cloud & Container Fabrics',
      description:
        'Architected to deploy, secure, and operate seamlessly across AWS, Microsoft Azure, Google Cloud Platform, and on-premises Kubernetes/OpenShift distributions.',
      capabilities: [
        'Multi-cloud landing zones and VPC peering',
        'Cross-cloud replication and disaster recovery',
        'Terraform / OpenTofu Infrastructure as Code modules',
        'FinOps rightsizing and reserved instance governance',
      ],
      icon: Cloud,
    },
    {
      title: 'Enterprise Security & Zero Trust Identity',
      description:
        'Standardized integrations connecting leading enterprise Identity Providers (Entra ID, Okta, Ping), Next-Gen Firewalls (Palo Alto, Fortinet), and SIEM/SOAR platforms.',
      capabilities: [
        'SAML 2.0 / OIDC federation & mTLS authorization',
        'Hardware Security Module (HSM) key management',
        'Distributed microsegmentation policies',
        'Automated vulnerability & compliance feeds',
      ],
      icon: ShieldCheck,
    },
    {
      title: 'Optical Backbones & Datacenter Switching',
      description:
        'Interoperable with industry-leading spine-leaf switching hardware, software-defined WAN controllers, and optical transmission platforms.',
      capabilities: [
        'EVPN-VXLAN non-blocking overlay routing',
        'Carrier BGP multi-homing and Anycast DNS',
        'High-density fiber optic backbone distribution',
        'SNMP/gNMI telemetry and automated flow analysis',
      ],
      icon: Network,
    },
    {
      title: 'Enterprise ERP & Core Systems of Record',
      description:
        'Connecting legacy databases (Oracle, IBM DB2, Mainframe) and Tier-1 ERPs (SAP S/4HANA) to modern cloud-native frontends and microservices.',
      capabilities: [
        'Event-driven Kafka message routing',
        'API Gateway rate-limiting & schema governance',
        'Change Data Capture (CDC) streaming backplanes',
        'Transactional integrity with zero data drift',
      ],
      icon: Cpu,
    },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Technology Ecosystem' }]} />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-16">
          <Badge variant="purple" className="mb-4">
            INTEGRATION ARCHITECTURE
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
            Built to integrate across modern enterprise environments.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            UPT Plus adheres to a rigorous, vendor-neutral engineering philosophy. We evaluate, integrate, and orchestrate technology solely based on technical fit, security posture, and long-term operational resilience for our clients.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" size="lg" withArrow>
              Discuss Technical Integration Requirements
            </Button>
            <Button href="/capabilities" variant="secondary" size="lg">
              Enterprise Capability Statement
            </Button>
          </div>
        </div>

        {/* Integration Domains */}
        <div className="space-y-8 mb-20">
          <div className="text-xs font-mono uppercase text-orange-400 font-bold tracking-widest">
            ENTERPRISE INTEGRATION CATEGORIES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecosystemTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.title}
                  className="p-8 rounded-2xl bg-[#0C1222] border border-white/15 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk',sans-serif]">
                      {tier.title}
                    </h2>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {tier.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-white/10">
                      <div className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">
                        Integration Capabilities:
                      </div>
                      {tier.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Integration Policy Governance Box */}
        <div className="bg-[#11182B] border border-white/15 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <Badge variant="orange" className="mb-4">
            GOVERNANCE &amp; NEUTRALITY
          </Badge>
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-4">
            Our Architectural Neutrality Commitment
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            We do not sell proprietary vendor hardware quotas. We select, configure, and maintain the exact combination of technologies that maximizes your system uptime, performance benchmarks, and compliance governance.
          </p>
          <Button href="/contact" variant="primary" size="lg" withArrow>
            Consult With Our Solutions Architects
          </Button>
        </div>
      </div>
    </main>
  );
}
