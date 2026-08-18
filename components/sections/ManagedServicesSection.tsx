'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import Badge from '@/components/ui/Badge';
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
    <section className="py-20 sm:py-28 bg-[#F7F8FA] text-[#101827] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="purple" className="mb-4">
            {language === 'ar' ? 'الخدمات المدارة والعمليات' : 'MANAGED TECHNOLOGY OPERATIONS'}
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0D1326] font-['Space_Grotesk',sans-serif] leading-[1.15]">
            {language === 'ar' ? 'نحن لا نكتفي بنشر التقنية.' : "We don't just deploy technology."}
          </h2>

          <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-orange-600 font-['Space_Grotesk',sans-serif] mt-1">
            {language === 'ar' ? 'نحن نديرها ونشغلها باحترافية.' : 'We operate it.'}
          </div>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {language === 'ar'
              ? 'يجب أن تظل الأنظمة التكنولوجية عالية التوافر، آمنة، محسنة التكاليف، وقابلة للصيانة المستمرة بعد مرحلة التنفيذ. تقدم UPT PLUS دعماً تشغيلياً مستمراً يضمن صمود بيئتكم الرقمية.'
              : 'Technology must remain highly available, secure, optimized, and maintainable long after implementation. UPT PLUS provides post-deployment operational engineering to ensure your environment delivers continuous business resilience.'}
          </p>
        </div>

        {/* 4 Managed Service Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MANAGED_SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.id] || ShieldAlert;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {language === 'ar' ? 'عمليات مستمرة' : 'Continuous Ops'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0D1326] mb-2">
                    {language === 'ar' ? service.titleAr : service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {language === 'ar' ? service.descriptionAr : service.description}
                  </p>

                  {/* Key Operational Features */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
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

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
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
        <div className="mt-12 text-center">
          <Button href="/managed-services" variant="light" size="lg" withArrow>
            {language === 'ar' ? 'استكشف كافة الخدمات المدارة' : 'Explore Managed Services'}
          </Button>
        </div>
      </div>
    </section>
  );
}
