'use client';

import React from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionMarker from '@/components/ui/SectionMarker';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n';
import {
  Cpu,
  ShieldCheck,
  Network,
  Cloud,
  CheckCircle2,
  Layers,
} from 'lucide-react';

export default function EcosystemPage() {
  const { language } = useLanguage();

  const ecosystemTiers = [
    {
      num: '01',
      title: 'Cloud & Virtualization Platforms',
      titleAr: 'منصات الحوسبة والبيئات السحابية',
      description:
        'Architected to deploy, secure, and operate across public cloud providers, private virtualization clusters, and container fabrics.',
      descriptionAr:
        'مصممة للنشر والتأمين والتشغيل السلس عبر منصات السحابة العامة، عناقيد المحاكاة الافتراضية، ونسيج الحاويات.',
      capabilities: [
        'Multi-cloud landing zones and VPC routing topologies',
        'Cross-region data replication and disaster recovery',
        'Container cluster orchestration and health monitoring',
      ],
      capabilitiesAr: [
        'مناطق الهبوط السحابية المؤسسية وتوجيه شبكات VPC',
        'مزامنة البيانات عبر المناطق والتعافي من الكوارث',
        'إدارة عناقيد الحاويات ومراقبة مؤشرات الصحة التشغيلية',
      ],
      icon: Cloud,
    },
    {
      num: '02',
      title: 'Enterprise Security & Identity Fabrics',
      titleAr: 'نسيج الأمان المؤسسي وإدارة الهويات',
      description:
        'Standardized integrations connecting modern Identity Providers (SAML/OIDC), hardware security modules, and telemetry platforms.',
      descriptionAr:
        'تكامل قياسي مع مزودي الهويات (SAML/OIDC)، وحدات التشفير العتادية، وجدران الحماية المؤسسية.',
      capabilities: [
        'SAML 2.0 / OIDC identity federation and MFA verification',
        'Cryptographic key and secrets lifecycle management',
        'Centralized security logging and telemetry ingestion',
      ],
      capabilitiesAr: [
        'التحقق الموحد من الهويات (SAML/OIDC) والمصادقة متعددة العوامل',
        'إدارة دورة حياة مفاتيح التشفير والأسرار البرمجية',
        'تجميع وسجلات المراقبة الأمنية والتحليل الاستباقي',
      ],
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Core Optical & Enterprise Networking',
      titleAr: 'الشبكات الأساسية ومحولات البيانات',
      description:
        'Interoperable with industry-standard spine-leaf switching topologies, SD-WAN fabrics, and certified optical backbones.',
      descriptionAr:
        'توافق تشغيلي مع معمارية محولات Spine-Leaf، شبكات SD-WAN، وتمديدات الألياف الضوئية المعتمدة.',
      capabilities: [
        'Non-blocking overlay routing and VLAN segmentation',
        'Resilient carrier routing and redundant uplink pathways',
        'Continuous network flow telemetry and link auditing',
      ],
      capabilitiesAr: [
        'توجيه المسارات غير الحاجبة وعزل الشبكات الافتراضية',
        'مسارات اتصال شبكية متكررة تضمن عدم انقطاع الخدمة',
        'مراقبة حركة تدفق البيانات وفحص سلامة الخطوط باستمرار',
      ],
      icon: Network,
    },
    {
      num: '04',
      title: 'Enterprise Applications & Core Backbones',
      titleAr: 'الأنظمة والتطبيقات المؤسسية الأساسية',
      description:
        'Connecting enterprise systems of record, transactional ERP platforms, and industry databases via high-throughput API gateways.',
      descriptionAr:
        'ربط الأنظمة المؤسسية الأساسية ومنصات ERP وقواعد البيانات عبر بوابات واجهات برمجة فائقة السرعة.',
      capabilities: [
        'API Gateway rate-limiting and schema verification',
        'Event-driven asynchronous message queuing',
        'Transactional consistency across distributed services',
      ],
      capabilitiesAr: [
        'بوابات واجهات البرمجة مع ضبط معدلات الطلب والتحقق',
        'ناقل الرسائل والأحداث غير المتزامن لضمان تدفق العمليات',
        'الحفاظ على تكامل المعاملات عبر الخدمات الموزعة',
      ],
      icon: Cpu,
    },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24 bg-grid-architectural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: language === 'ar' ? 'المنظومة التقنية' : 'Technology Ecosystem' }]} />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-16">
          <SectionMarker
            number="01"
            label={language === 'ar' ? 'المنظومة والتكامل التقني' : 'TECHNOLOGY ECOSYSTEM'}
            variant="purple"
            className="mb-4"
          />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
            {language === 'ar'
              ? 'مصممة للتكامل مع أرقى بيئات التقنية المؤسسية.'
              : 'Built to integrate across modern enterprise environments.'}
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {language === 'ar'
              ? 'تعتمد UPT PLUS نهجاً هندسياً محايداً ومتقدماً يضمن انسجام الأنظمة الأمنية، السحابية، والفيزيائية مع المنظومات والمنصات العالمية الرائدة وفق متطلبات العميل المعمارية.'
              : 'UPT PLUS adheres to an architecture-first, vendor-neutral engineering methodology. We evaluate and orchestrate technology based on technical fit, security posture, and long-term operational resilience.'}
          </p>
        </div>

        {/* 4 Integration Categories */}
        <div className="space-y-8 mb-16">
          <div className="text-xs font-mono uppercase text-orange-400 font-bold tracking-widest">
            {language === 'ar' ? 'طبقات التكامل المعماري' : 'ARCHITECTURAL INTEGRATION TIERS'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecosystemTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.num}
                  className="p-6 sm:p-8 rounded-md bg-[#0D1326] border border-white/15 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500">
                        TIER {tier.num}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-2.5 font-['Space_Grotesk',sans-serif]">
                      {language === 'ar' ? tier.titleAr : tier.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {language === 'ar' ? tier.descriptionAr : tier.description}
                    </p>

                    <div className="space-y-2 pt-3.5 border-t border-white/10">
                      <div className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">
                        {language === 'ar' ? 'قدرات التكامل الفني:' : 'Integration Scope:'}
                      </div>
                      {(language === 'ar' ? tier.capabilitiesAr : tier.capabilities).map((cap, cIdx) => (
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

        {/* Neutrality & Governance Philosophy */}
        <div className="bg-[#0D1326] border border-white/15 rounded-md p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <SectionMarker
            number="02"
            label={language === 'ar' ? 'الحيادية الهندسية' : 'VENDOR NEUTRALITY'}
            variant="orange"
            className="mb-4"
          />
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-3">
            {language === 'ar'
              ? 'التزامنا بالحيادية والنزاهة المعمارية'
              : 'Our Architectural Neutrality Commitment'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6">
            {language === 'ar'
              ? 'نختار ونهندس الحلول بناءً على أفضل ملاءمة تشغيلية، أمان، واستدامة لبنية العميل، دون التقيد بحصص تجارية أو مبيعات محددة.'
              : 'We evaluate, configure, and maintain the exact combination of technologies that maximizes your uptime, security posture, and operational sovereignty.'}
          </p>
          <Button href="/contact" variant="primary" size="md" withArrow>
            {language === 'ar' ? 'استشر فريقنا التقني' : 'Consult Our Solutions Architects'}
          </Button>
        </div>
      </div>
    </main>
  );
}

