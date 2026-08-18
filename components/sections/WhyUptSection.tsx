'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import SectionHeader from '@/components/ui/SectionHeader';
import { Cpu, ShieldCheck, RefreshCw, Maximize2 } from 'lucide-react';

export default function WhyUptSection() {
  const { language } = useLanguage();

  const differentiators = [
    {
      title: 'Engineering First',
      titleAr: 'الأولوية للهندسة والتصميم',
      description:
        'Technology choices are dictated by architectural fit, resilience, and operational sustainability — never by short-term marketing hype or arbitrary vendor lock-in.',
      descriptionAr:
        'تستند قراراتنا التقنية إلى المعمارية الهندسية الصارمة، وقابلية التشغيل، والجدوى الاستراتيجية بعيداً عن الترويج التسويقي.',
      icon: Cpu,
    },
    {
      title: 'Security by Design',
      titleAr: 'الأمان المدمج في صميم التصميم',
      description:
        'Zero Trust principles, cryptographic boundary verification, and continuous compliance are embedded directly into network fabrics and CI/CD pipelines from day one.',
      descriptionAr:
        'مبادئ انعدام الثقة (Zero Trust)، والتشفير الدقيق، ومطابقة الامتثال مدمجة مباشرة في نسيج الشبكات ومسارات التطوير منذ البداية.',
      icon: ShieldCheck,
    },
    {
      title: 'Integrated Delivery',
      titleAr: 'التسليم والتكامل الموحد',
      description:
        'We view strategy, architectural blueprinting, field deployment, hardening, and post-launch operations as a single continuous engineering lifecycle.',
      descriptionAr:
        'ننظر إلى الاستراتيجية، التصميم المعماري، النشر الميداني، التحصين، والتشغيل المستمر كدورة حياة هندسية واحدة ومتكاملة.',
      icon: RefreshCw,
    },
    {
      title: 'Built to Scale',
      titleAr: 'مصممة للتوسع والنمو المستقبلي',
      description:
        'Every solution is engineered for current operational loads while preserving modular capacity for multi-region expansion and future technology modernization.',
      descriptionAr:
        'تُبنى حلولنا لتلبية الاحتياجات التشغيلية الحالية مع الحفاظ على مرونة معيارية كاملة للتوسع المستقبلي وتحديث التقنيات بسلاسة.',
      icon: Maximize2,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#080D1A] text-slate-100 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={language === 'ar' ? 'فلسفة التميز الهندسي' : 'WHY UPT PLUS'}
          title={
            language === 'ar'
              ? 'مبادئ هندسية صارمة تقود كل قرار تقني'
              : 'Rigorous Engineering Principles Behind Every Decision'
          }
          subtitle={
            language === 'ar'
              ? 'نلتزم بأعلى معايير الانضباط الهندسي والنزاهة المعمارية لضمان حماية واستقرار البنية التحتية للمؤسسات.'
              : 'We adhere to uncompromising architectural discipline, ensuring your mission-critical infrastructure performs predictably under real-world conditions.'
          }
          badgeVariant="orange"
        />

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((diff) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.title}
                className="bg-[#0C1222] rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/10 group-hover:border-orange-500/40 transition-colors mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors font-['Space_Grotesk',sans-serif]">
                  {language === 'ar' ? diff.titleAr : diff.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {language === 'ar' ? diff.descriptionAr : diff.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
