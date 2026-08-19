'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import SectionMarker from '@/components/ui/SectionMarker';

export default function WhyUptSection() {
  const { language } = useLanguage();

  const differentiators = [
    {
      num: '01',
      title: 'Engineering First',
      titleAr: 'الأولوية للهندسة والتصميم',
      description:
        'Technology choices are dictated by architectural fit, resilience, and operational sustainability — never by short-term marketing hype or arbitrary vendor lock-in.',
      descriptionAr:
        'تستند قراراتنا التقنية إلى المعمارية الهندسية الصارمة، وقابلية التشغيل، والجدوى الاستراتيجية بعيداً عن الترويج التسويقي.',
    },
    {
      num: '02',
      title: 'Security by Design',
      titleAr: 'الأمان المدمج في صميم التصميم',
      description:
        'Zero Trust principles, cryptographic boundary verification, and continuous compliance are embedded directly into network fabrics and CI/CD pipelines from day one.',
      descriptionAr:
        'مبادئ انعدام الثقة (Zero Trust)، والتشفير الدقيق، ومطابقة الامتثال مدمجة مباشرة في نسيج الشبكات ومسارات التطوير منذ البداية.',
    },
    {
      num: '03',
      title: 'Integrated Delivery',
      titleAr: 'التسليم والتكامل الموحد',
      description:
        'We view strategy, architectural blueprinting, field deployment, hardening, and post-launch operations as a single continuous engineering lifecycle.',
      descriptionAr:
        'ننظر إلى الاستراتيجية، التصميم المعماري، النشر الميداني، التحصين، والتشغيل المستمر كدورة حياة هندسية واحدة ومتكاملة.',
    },
    {
      num: '04',
      title: 'Built to Scale',
      titleAr: 'مصممة للتوسع والنمو المستقبلي',
      description:
        'Every solution is engineered for current operational loads while preserving modular capacity for multi-region expansion and future technology modernization.',
      descriptionAr:
        'تُبنى حلولنا لتلبية الاحتياجات التشغيلية الحالية مع الحفاظ على مرونة معيارية كاملة للتوسع المستقبلي وتحديث التقنيات بسلاسة.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#080D1A] text-slate-100 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionMarker
            number="04"
            label={language === 'ar' ? 'فلسفة التميز الهندسي' : 'WHY UPT PLUS'}
            variant="orange"
            className="mb-4"
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk',sans-serif] tracking-tight uppercase">
            {language === 'ar'
              ? 'مبادئ هندسية صارمة تقود كل قرار تقني.'
              : 'Rigorous Engineering Principles Behind Every Decision.'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'ar'
              ? 'نلتزم بأعلى معايير الانضباط الهندسي والنزاهة المعمارية لضمان حماية واستقرار البنية التحتية للمؤسسات.'
              : 'We adhere to uncompromising architectural discipline, ensuring your mission-critical infrastructure performs predictably under real-world conditions.'}
          </p>
        </div>

        {/* 4 Architectural Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {differentiators.map((diff) => (
            <div
              key={diff.num}
              className="flex flex-col pt-6 border-t border-white/10 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-orange-400">
                  {diff.num}
                </span>
                <span className="text-[10px] font-mono text-slate-600 uppercase">
                  UPT PRINCIPLE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-['Space_Grotesk',sans-serif] group-hover:text-orange-300 transition-colors">
                {language === 'ar' ? diff.titleAr : diff.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {language === 'ar' ? diff.descriptionAr : diff.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
