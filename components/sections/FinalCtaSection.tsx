'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';

export default function FinalCtaSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-24 sm:py-36 bg-[#080D1A] text-slate-100 relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* UPT SIGNAL RESOLUTION */}
        <div className="flex flex-col items-center mb-8">
          {/* Arriving Vertical Signal Stem */}
          <div className="w-0.5 h-16 bg-[#FF7A00]" />
          
          {/* Signal Termination Vector Arrow */}
          <svg className="w-6 h-6 -mt-1 text-[#FF7A00]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 12 3 L 5 11 M 12 3 L 19 11 M 12 3 L 12 21"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Micro Engineering Notation */}
          <span className="text-[10px] font-mono tracking-widest text-orange-400/80 uppercase mt-4">
            UPT / RESOLUTION
          </span>
        </div>

        {/* Section Headline */}
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
        <div className="mt-12 text-[10px] font-mono text-slate-600 uppercase tracking-wider">
          {language === 'ar'
            ? 'UPT PLUS // الأمن السيبراني والحوسبة السحابية'
            : 'UPT PLUS // CYBERSECURITY & CLOUD COMPUTING'}
        </div>

      </div>
    </section>
  );
}
