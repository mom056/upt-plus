'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import SectionMarker from '@/components/ui/SectionMarker';

export default function FinalCtaSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-[#080D1A] text-slate-100 relative overflow-hidden border-t border-white/10 bg-grid-architectural">
      {/* Restrained Accent Lighting */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-950/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-[400px] h-[200px] bg-orange-950/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <SectionMarker
          label={language === 'ar' ? 'ابدأ التخطيط المعماري' : 'ARCHITECTURAL ENGAGEMENT'}
          variant="orange"
          className="mb-5"
        />

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-[1.1] font-['Space_Grotesk',sans-serif]">
          {language === 'ar' ? 'دعنا نصمم ونهندس ما هو قادم.' : "Let’s architect what’s next."}
        </h2>

        <p className="mt-5 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          {language === 'ar'
            ? 'قم ببناء ركيزة تكنولوجية أكثر أماناً، صموداً، وقابلية للتوسع مع فريق UPT PLUS الاستشاري والهندسي.'
            : 'Build a more secure, resilient, and scalable technology foundation with UPT Plus.'}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Button href="/contact" variant="primary" size="md" withArrow>
            {t.nav.talkToExpert}
          </Button>
          <Button href="/solutions" variant="secondary" size="md">
            {language === 'ar' ? 'استعراض الحلول التقنية' : 'Explore Solutions'}
          </Button>
        </div>

        {/* Engagement Model Assurance Note */}
        <div className="mt-10 text-[11px] font-mono text-slate-500 uppercase tracking-wider">
          {language === 'ar'
            ? 'جلسات استشارية معمارية • انضباط هندسي • توافق مع المعايير المؤسسية'
            : 'ARCHITECTURAL CONSULTATION • ENGINEERING RIGOR • GOVERNED EXECUTION'}
        </div>
      </div>
    </section>
  );
}

