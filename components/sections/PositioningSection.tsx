'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import SectionMarker from '@/components/ui/SectionMarker';
import { ShieldCheck, Layers, Cpu } from 'lucide-react';

export default function PositioningSection() {
  const { language, t } = useLanguage();

  const coreTenets = [
    {
      num: '01',
      title: 'Architectural Cohesion',
      titleAr: 'التماسك المعماري الشامل',
      desc: 'Eliminating fragmented IT silos by designing networks, cloud, and security as one unified operational system.',
      descAr: 'القضاء على الجزر المنعزلة عبر تصميم الشبكات والسحابة والأمن كنظام تشغيلي موحد ومتكامل.',
      icon: Layers,
    },
    {
      num: '02',
      title: 'Security by Design',
      titleAr: 'الأمان المدمج بالتصميم',
      desc: 'Embedding Zero Trust verification, encryption, and API shields directly into core deployment pipelines.',
      descAr: 'تضمين ضوابط انعدام الثقة (Zero Trust) والتشفير وحماية واجهات البرمجة مباشرة في مسار النشر الأساسي.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Operational Precision',
      titleAr: 'الدقة والانضباط التشغيلي',
      desc: 'Ensuring continuous health telemetry, low latency, and rapid incident triage across multi-site environments.',
      descAr: 'ضمان مراقبة القياسات اللحظية، وانخفاض الكمون، والمعالجة السريعة للحوادث في البيئات متعددة المواقع.',
      icon: Cpu,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F7F8FA] text-[#101827] border-b border-slate-200 bg-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-slate-200">
          <div className="lg:col-span-6">
            <SectionMarker
              label={t.positioning.eyebrow}
              variant="purple"
              isLightSection={true}
              className="mb-4"
            />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0D1326] font-['Space_Grotesk',sans-serif] leading-[1.12]">
              {t.positioning.headline}
            </h2>
            <div className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-purple-900 font-['Space_Grotesk',sans-serif]">
              {t.positioning.subheadline}
            </div>
          </div>

          <div className="lg:col-span-6 flex items-end">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {t.positioning.body}
            </p>
          </div>
        </div>

        {/* 3 Architectural Tenet Rails (De-carded) */}
        <div className="mt-12 divide-y divide-slate-200">
          {coreTenets.map((tenet) => {
            const Icon = tenet.icon;
            return (
              <div
                key={tenet.title}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group"
              >
                {/* Number & Indicator */}
                <div className="md:col-span-2 flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-slate-400 group-hover:text-purple-700 transition-colors">
                    {tenet.num}
                  </span>
                  <div className="w-8 h-8 rounded bg-purple-100/60 flex items-center justify-center text-purple-900 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0D1326]">
                    {language === 'ar' ? tenet.titleAr : tenet.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {language === 'ar' ? tenet.descAr : tenet.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

