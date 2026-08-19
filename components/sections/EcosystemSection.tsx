'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import SectionMarker from '@/components/ui/SectionMarker';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function EcosystemSection() {
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ChevronLeft : ChevronRight;

  const ecosystemDomains = [
    {
      num: '01',
      category: 'Cloud & Virtualization Platforms',
      categoryAr: 'منصات الحوسبة والبيئات السحابية',
      description:
        'Engineered to integrate seamlessly with leading public clouds, private OpenStack/VMware clusters, and container fabrics.',
      descriptionAr:
        'مصممة للتكامل السلس مع السحب العامة والخاصة، عناقيد VMware/OpenStack، ونسيج تشغيل الحاويات.',
    },
    {
      num: '02',
      category: 'Enterprise Security & Identity Fabrics',
      categoryAr: 'نسيج الأمان المؤسسي وإدارة الهويات',
      description:
        'Standardized integrations across modern IdPs (SAML/OIDC), hardware security modules, enterprise firewalls, and SIEM platforms.',
      descriptionAr:
        'تكامل قياسي مع مزودي الهويات (SAML/OIDC)، وحدات التشفير العتادية، جدران الحماية، ومنصات إدارة الأحداث الأمنية.',
    },
    {
      num: '03',
      category: 'Core Optical & Enterprise Networking',
      categoryAr: 'الشبكات الضوئية الأساسية ومحولات البيانات',
      description:
        'Interoperable with carrier routing protocols (BGP/EVPN-VXLAN), software-defined WAN fabrics, and certified structured cabling.',
      descriptionAr:
        'توافق تشغيلي مع بروتوكولات توجيه المشغلين (BGP/EVPN-VXLAN)، شبكات SD-WAN، وتمديدات الكوابل الهيكلية المعتمدة.',
    },
    {
      num: '04',
      category: 'Enterprise Applications & ERP Backbones',
      categoryAr: 'التطبيقات المؤسسية وأنظمة تخطيط الموارد',
      description:
        'Connecting core banking engines, SAP/Oracle ERPs, and specialized industry databases via high-throughput API gateways.',
      descriptionAr:
        'ربط الأنظمة المصرفية الأساسية، أنظمة SAP/Oracle ERP، وقواعد البيانات التخصصية عبر بوابات واجهات برمجة فائقة السرعة.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F7F8FA] text-[#101827] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionMarker
            number="05"
            label={language === 'ar' ? 'المنظومة والتكامل التقني' : 'TECHNOLOGY ECOSYSTEM'}
            variant="purple"
            isLightSection={true}
            className="mb-4"
          />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0D1326] font-['Space_Grotesk',sans-serif] leading-[1.12]">
            {language === 'ar'
              ? 'مصممة للتكامل مع أرقى بيئات التقنية المؤسسية.'
              : 'Built to integrate across modern enterprise environments.'}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {language === 'ar'
              ? 'تعتمد UPT PLUS نهجاً هندسياً حيادياً ومتقدماً يضمن انسجام الأنظمة الأمنية، السحابية، والفيزيائية مع المنظومات والمنصات العالمية الرائدة.'
              : 'UPT PLUS adopts an architecture-first, vendor-neutral methodology to integrate security, cloud platforms, and physical infrastructure seamlessly into your existing technology investments.'}
          </p>
        </div>

        {/* Open Integration Field */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-4 border-t border-slate-200">
          {ecosystemDomains.map((item) => (
            <div
              key={item.num}
              className="flex flex-col pb-6 border-b border-slate-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-purple-700">
                  TIER {item.num}
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  INTEGRATION DOMAIN
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#0D1326] mb-2 font-['Space_Grotesk',sans-serif]">
                {language === 'ar' ? item.categoryAr : item.category}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'ar' ? item.descriptionAr : item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vendor Integration Philosophy Callout */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
          <div>
            <span className="font-bold text-[#0D1326]">
              {language === 'ar' ? 'فلسفة الشراكات والحيادية التقنية: ' : 'Vendor Integration Philosophy: '}
            </span>
            <span>
              {language === 'ar'
                ? 'نعمل وفق متطلبات العميل المعمارية لضمان أفضل توافق تشغيلي وأعلى عائد على الاستثمار.'
                : 'We evaluate and integrate technology based solely on engineering fit, operational resilience, and long-term client value.'}
            </span>
          </div>

          <Link
            href="/partners"
            className="inline-flex items-center gap-1.5 font-bold text-orange-600 hover:text-orange-700 shrink-0 group"
          >
            <span>{language === 'ar' ? 'منهجية المنظومة التقنية' : 'View Integration Framework'}</span>
            <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
