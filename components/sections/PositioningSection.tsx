'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import Badge from '@/components/ui/Badge';
import { ShieldCheck, Layers, Cpu, CheckCircle } from 'lucide-react';

export default function PositioningSection() {
  const { language, t } = useLanguage();

  const coreTenets = [
    {
      title: 'Architectural Cohesion',
      titleAr: 'التماسك المعماري الشامل',
      desc: 'Eliminating fragmented IT silos by designing networks, cloud, and security as one unified operational system.',
      descAr: 'القضاء على الجزر المنعزلة عبر تصميم الشبكات والسحابة والأمن كنظام تشغيلي موحد ومتكامل.',
      icon: Layers,
    },
    {
      title: 'Security by Design',
      titleAr: 'الأمان المدمج بالتصميم',
      desc: 'Embedding Zero Trust verification, encryption, and API shields directly into core deployment pipelines.',
      descAr: 'تضمين ضوابط انعدام الثقة (Zero Trust) والتشفير وحماية واجهات البرمجة مباشرة في مسار النشر الأساسي.',
      icon: ShieldCheck,
    },
    {
      title: 'Operational Precision',
      titleAr: 'الدقة والانضباط التشغيلي',
      desc: 'Ensuring continuous health telemetry, low latency, and rapid incident triage across multi-site environments.',
      descAr: 'ضمان مراقبة القياسات اللحظية، وانخفاض الكمون، والمعالجة السريعة للحوادث في البيئات متعددة المواقع.',
      icon: Cpu,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F7F8FA] text-[#101827] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Headline Block */}
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="purple" className="mb-6">
            {t.positioning.eyebrow}
          </Badge>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0D1326] font-['Space_Grotesk',sans-serif] leading-[1.12]">
            {t.positioning.headline}
          </h2>

          <div className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-purple-900 font-['Space_Grotesk',sans-serif]">
            {t.positioning.subheadline}
          </div>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            {t.positioning.body}
          </p>
        </div>

        {/* 3 Structural Tenets Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreTenets.map((tenet, idx) => {
            const Icon = tenet.icon;
            return (
              <div
                key={tenet.title}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-800 mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-[#0D1326] mb-3">
                  {language === 'ar' ? tenet.titleAr : tenet.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {language === 'ar' ? tenet.descAr : tenet.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
