'use client';

import React from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionMarker from '@/components/ui/SectionMarker';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n';
import { CheckCircle2 } from 'lucide-react';

export default function EcosystemPage() {
  const { language } = useLanguage();

  const ecosystemDomains = [
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
    },
    {
      num: '03',
      title: 'Core Optical & Enterprise Networking',
      titleAr: 'الشبكات الأساسية ومحولات البيانات',
      description:
        'Interoperable with industry-standard spine-leaf switching topologies, SD-WAN fabrics, and structured optical backbones.',
      descriptionAr:
        'توافق تشغيلي مع معمارية محولات Spine-Leaf، شبكات SD-WAN، وتمديدات الألياف الضوئية الهيكلية.',
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
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#101827] pt-24 sm:pt-32 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumbs items={[{ label: language === 'ar' ? 'المنظومة التقنية' : 'Technology Ecosystem' }]} />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-16 sm:mb-20">
          <SectionMarker
            number="01"
            label={language === 'ar' ? 'المنظومة والتكامل التقني' : 'TECHNOLOGY ECOSYSTEM'}
            variant="navy"
            isLightSection={true}
            className="mb-4"
          />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0D1326] font-['Space_Grotesk',sans-serif] leading-[1.08] uppercase">
            {language === 'ar'
              ? 'مصممة للتكامل مع أرقى بيئات التقنية المؤسسية.'
              : 'Built to integrate across modern enterprise environments.'}
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
            {language === 'ar'
              ? 'تعتمد UPT PLUS نهجاً هندسياً محايداً ومتقدماً يضمن انسجام الأنظمة الأمنية، السحابية، والفيزيائية مع المنظومات والمنصات العالمية الرائدة وفق متطلبات العميل المعمارية.'
              : 'UPT PLUS adheres to an architecture-first, vendor-neutral engineering methodology. We evaluate and orchestrate technology based on technical fit, security posture, and long-term operational resilience.'}
          </p>
        </div>

        {/* Open Integration Architecture Schematic Track */}
        <div className="mb-16 pt-8 pb-8 border-t border-b border-slate-200">
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200 text-[10px] font-mono text-slate-500 uppercase">
            <span>TECHNOLOGY INTEGRATION ARCHITECTURE — INTEROPERABILITY MATRIX</span>
            <span className="text-orange-600">UPT CONTROL PLANE</span>
          </div>

          <div className="w-full h-36 relative">
            <svg className="w-full h-full" viewBox="0 0 1000 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="60" x2="1000" y2="60" stroke="rgba(15,23,42,0.1)" strokeDasharray="6 6" />

              <line x1="100" y1="60" x2="900" y2="60" stroke="#FF7A00" strokeWidth="2.5" />

              <circle cx="200" cy="60" r="4" fill="#FF7A00" />
              <line x1="200" y1="20" x2="200" y2="100" stroke="#94A3B8" strokeWidth="1.5" />
              <circle cx="200" cy="20" r="3" fill="#0D1326" />
              <text x="200" y="12" fill="#475569" fontSize="9" fontFamily="monospace" textAnchor="middle">CLOUD / VPC</text>

              <polygon points="380,30 420,30 410,90 390,90" fill="rgba(107,33,168,0.1)" stroke="#9333EA" strokeWidth="1.5" strokeDasharray="3 2" />
              <circle cx="400" cy="60" r="4" fill="#FF7A00" />
              <text x="400" y="112" fill="#7E22CE" fontSize="9" fontFamily="monospace" textAnchor="middle">SECURITY / IdP</text>

              <circle cx="600" cy="60" r="4" fill="#FF7A00" />
              <line x1="600" y1="20" x2="600" y2="100" stroke="#94A3B8" strokeWidth="1.5" />
              <circle cx="600" cy="100" r="3" fill="#0D1326" />
              <text x="600" y="112" fill="#475569" fontSize="9" fontFamily="monospace" textAnchor="middle">CORE NETWORKS</text>

              <circle cx="800" cy="60" r="4" fill="#FF7A00" />
              <line x1="800" y1="20" x2="800" y2="100" stroke="#94A3B8" strokeWidth="1.5" />
              <circle cx="800" cy="20" r="3" fill="#0D1326" />
              <text x="800" y="12" fill="#475569" fontSize="9" fontFamily="monospace" textAnchor="middle">ENTERPRISE APPS</text>
            </svg>
          </div>
        </div>

        {/* 4 Integration Domains: Open Editorial Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-16">
          {ecosystemDomains.map((domain) => (
            <div key={domain.num} className="flex flex-col pb-8 border-b border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-slate-600">
                  DOMAIN {domain.num}
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  INTEGRATION DOMAIN
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#0D1326] mb-2 font-['Space_Grotesk',sans-serif]">
                {language === 'ar' ? domain.titleAr : domain.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {language === 'ar' ? domain.descriptionAr : domain.description}
              </p>

              <div className="space-y-2 pt-3 border-t border-slate-200">
                <div className="text-[10px] font-mono uppercase text-slate-500 font-bold mb-1.5">
                  {language === 'ar' ? 'نطاق التكامل الهندسي:' : 'Technical Scope:'}
                </div>
                {(language === 'ar' ? domain.capabilitiesAr : domain.capabilities).map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Neutrality Commitment Callout */}
        <div className="pt-10 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase text-slate-500 font-bold mb-1">
              {language === 'ar' ? 'الحيادية الهندسية' : 'VENDOR NEUTRALITY'}
            </div>
            <h3 className="text-lg font-bold text-[#0D1326] mb-1 font-['Space_Grotesk',sans-serif]">
              {language === 'ar' ? 'التزامنا بالحيادية والنزاهة المعمارية' : 'Our Architectural Neutrality Commitment'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'ar'
                ? 'نختار ونهندس الحلول بناءً على أفضل ملاءمة تشغيلية، أمان، واستدامة لبنية العميل، دون التقيد بحصص تجارية أو مبيعات محددة.'
                : 'We evaluate and integrate technology based solely on engineering fit, operational resilience, and long-term client value.'}
            </p>
          </div>

          <div className="shrink-0">
            <Button href="/contact" variant="primary" size="md" withArrow>
              {language === 'ar' ? 'استشر فريقنا التقني' : 'Consult Our Architects'}
            </Button>
          </div>
        </div>

      </div>
    </main>
  );
}
