'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Cpu, ShieldCheck, Network, Cloud, ArrowRight, ArrowLeft } from 'lucide-react';

export default function EcosystemSection() {
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const ecosystemDomains = [
    {
      category: 'Cloud & Virtualization Platforms',
      categoryAr: 'منصات الحوسبة والبيئات السحابية',
      description:
        'Engineered to integrate seamlessly with leading public clouds, private OpenStack/VMware clusters, and container fabrics.',
      descriptionAr:
        'مصممة للتكامل السلس مع السحب العامة والخاصة، عناقيد VMware/OpenStack، ونسيج تشغيل الحاويات.',
      icon: Cloud,
    },
    {
      category: 'Enterprise Security & Identity Fabrics',
      categoryAr: 'نسيج الأمان المؤسسي وإدارة الهويات',
      description:
        'Standardized integrations across modern IdPs (SAML/OIDC), hardware security modules, enterprise firewalls, and SIEM platforms.',
      descriptionAr:
        'تكامل قياسي مع مزودي الهويات (SAML/OIDC)، وحدات التشفير العتادية، جدران الحماية، ومنصات إدارة الأحداث الأمنية.',
      icon: ShieldCheck,
    },
    {
      category: 'Core Optical & Enterprise Networking',
      categoryAr: 'الشبكات الضوئية الأساسية ومحولات البيانات',
      description:
        'Interoperable with carrier routing protocols (BGP/EVPN-VXLAN), software-defined WAN fabrics, and certified structured cabling.',
      descriptionAr:
        'توافق تشغيلي مع بروتوكولات توجيه المشغلين (BGP/EVPN-VXLAN)، شبكات SD-WAN، وتمديدات الكوابل الهيكلية المعتمدة.',
      icon: Network,
    },
    {
      category: 'Enterprise Applications & ERP Backbones',
      categoryAr: 'التطبيقات المؤسسية وأنظمة تخطيط الموارد',
      description:
        'Connecting core banking engines, SAP/Oracle ERPs, and specialized industry databases via high-throughput API gateways.',
      descriptionAr:
        'ربط الأنظمة المصرفية الأساسية، أنظمة SAP/Oracle ERP، وقواعد البيانات التخصصية عبر بوابات واجهات برمجة فائقة السرعة.',
      icon: Cpu,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F7F8FA] text-[#101827] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <Badge variant="purple" className="mb-4">
            {language === 'ar' ? 'المنظومة والتكامل التقني' : 'TECHNOLOGY ECOSYSTEM'}
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0D1326] font-['Space_Grotesk',sans-serif] leading-[1.15]">
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

        {/* 4 Ecosystem Domain Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ecosystemDomains.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-800 mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-[#0D1326] mb-2">
                  {language === 'ar' ? item.categoryAr : item.category}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {language === 'ar' ? item.descriptionAr : item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Link to Full Ecosystem Philosophy */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-xl bg-white border border-slate-200">
          <div className="text-sm text-slate-700">
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
            className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 shrink-0"
          >
            <span>{language === 'ar' ? 'منهجية المنظومة التقنية' : 'View Integration Framework'}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
