'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function FinalCtaSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-[#050811] text-slate-100 relative overflow-hidden">
      {/* Subtle Restrained Radial Glow in Purple & Orange */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-950/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[400px] h-[200px] bg-orange-950/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Badge variant="orange" className="mb-6">
          {language === 'ar' ? 'ابدأ التخطيط المعماري' : 'ARCHITECTURAL ENGAGEMENT'}
        </Badge>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.1] font-['Space_Grotesk',sans-serif]">
          {language === 'ar' ? 'دعنا نصمم ونهندس ما هو قادم.' : "Let’s architect what’s next."}
        </h2>

        <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {language === 'ar'
            ? 'قم ببناء ركيزة تكنولوجية أكثر أماناً، صموداً، وقابلية للتوسع مع فريق UPT PLUS الاستشاري والهندسي.'
            : 'Build a more secure, resilient, and scalable technology foundation with UPT Plus.'}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg" withArrow>
            {t.nav.talkToExpert}
          </Button>
          <Button href="/capabilities" variant="secondary" size="lg">
            {language === 'ar' ? 'استعراض بيان القدرات المؤسسية' : 'Enterprise Capability Statement'}
          </Button>
        </div>

        {/* Engagement Model Assurance Note */}
        <div className="mt-12 text-xs font-mono text-slate-500 uppercase tracking-wider">
          {language === 'ar'
            ? 'جلسات استشارية معمارية • اتفاقيات سرية معلومات (NDA) • توافق مع المعايير التنظيمية'
            : 'CONFIDENTIAL ARCHITECTURAL DISCOVERY • NDA-PROTECTED SESSIONS • GOVERNED EXECUTION'}
        </div>
      </div>
    </section>
  );
}
