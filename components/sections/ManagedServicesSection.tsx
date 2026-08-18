'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import SectionMarker from '@/components/ui/SectionMarker';
import Button from '@/components/ui/Button';
import { MANAGED_SERVICES_DATA } from '@/lib/data/servicesData';
import {
  ShieldAlert,
  Cloud,
  ServerCrash,
  Activity,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export default function ManagedServicesSection() {
  const { language, isRTL } = useLanguage();

  const iconMap: Record<string, any> = {
    'managed-security': ShieldAlert,
    'managed-cloud': Cloud,
    'managed-infrastructure': ServerCrash,
    'monitoring-observability': Activity,
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 sm:py-28 bg-[#F7F8FA] text-[#101827] border-b border-slate-200 bg-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <SectionMarker
            number="03"
            label={language === 'ar' ? 'الخدمات المدارة والعمليات' : 'MANAGED TECHNOLOGY OPERATIONS'}
            variant="purple"
            isLightSection={true}
            className="mb-4"
          />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0D1326] font-['Space_Grotesk',sans-serif] leading-[1.12]">
            {language === 'ar' ? 'نحن لا نكتفي بنشر التقنية.' : "We don't just deploy technology."}
          </h2>

          <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-orange-600 font-['Space_Grotesk',sans-serif] mt-1">
            {language === 'ar' ? 'نحن نديرها ونشغلها باحترافية.' : 'We operate it.'}
          </div>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {language === 'ar'
              ? 'يجب أن تظل الأنظمة التكنولوجية عالية التوافر، آمنة، محسنة التكاليف، وقابلة للصيانة المستمرة بعد مرحلة التنفيذ. تقدم UPT PLUS دعماً تشغيلياً مستمراً يضمن صمود بيئتكم الرقمية.'
              : 'Technology must remain highly available, secure, optimized, and maintainable long after implementation. UPT PLUS provides post-deployment operational engineering to ensure your environment delivers continuous business resilience.'}
          </p>
        </div>

        {/* 4 Structured Managed Service Rails */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MANAGED_SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.id] || ShieldAlert;

            return (
              <div
                key={service.id}
                className="bg-white rounded-md p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:border-orange-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-10 h-10 rounded bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      {language === 'ar' ? 'عمليات مستمرة' : 'Continuous Ops'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0D1326] mb-2">
                    {language === 'ar' ? service.titleAr : service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {language === 'ar' ? service.descriptionAr : service.description}
                  </p>

                  {/* Key Operational Features */}
                  <div className="space-y-2 pt-3.5 border-t border-slate-100 mb-5">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-slate-700">
                        <span className="font-semibold text-slate-900">
                          {language === 'ar' ? feat.nameAr : feat.name}:
                        </span>{' '}
                        <span className="text-slate-600">
                          {language === 'ar' ? feat.detailsAr : feat.details}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{language === 'ar' ? 'انضباط وحوكمة مدققة' : 'Audited Governance'}</span>
                  </div>

                  <Link
                    href="/managed-services"
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    <span>{language === 'ar' ? 'استعراض النطاق' : 'View Scope'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Action CTA */}
        <div className="mt-10 text-center">
          <Button href="/managed-services" variant="light" size="md" withArrow>
            {language === 'ar' ? 'استكشف كافة الخدمات المدارة' : 'Explore Managed Services'}
          </Button>
        </div>
      </div>
    </section>
  );
}

