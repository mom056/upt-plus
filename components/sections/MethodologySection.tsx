'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import SectionHeader from '@/components/ui/SectionHeader';
import { METHODOLOGY_STEPS } from '@/lib/data/methodologyData';
import { CheckCircle2, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

export default function MethodologySection() {
  const { language, isRTL } = useLanguage();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = METHODOLOGY_STEPS[activeStepIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#080D1A] text-slate-100 border-b border-white/10 relative bg-grid-architectural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="04"
          eyebrow={language === 'ar' ? 'منهجية التنفيذ الهندسي' : 'DELIVERY METHODOLOGY'}
          title={
            language === 'ar'
              ? 'كيف ننفذ وندير المشاريع التقنية المعقدة'
              : 'How We Deliver: Six-Stage Engineering Lifecycle'
          }
          subtitle={
            language === 'ar'
              ? 'منهجية منضبطة ومجربة تضمن دقة التصميم، التحصين الأمني، وسلاسة النقل دون الإخلال باستمرارية الأعمال.'
              : 'A disciplined, six-stage lifecycle engineered to de-risk implementations, ensure rigorous security hardening, and provide seamless operational continuity.'
          }
          align="split"
          badgeVariant="orange"
        />

        {/* 6-Step Stepped Timeline Rail */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-7">
          {METHODOLOGY_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;

            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-md border text-left rtl:text-right transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                  isSelected
                    ? 'bg-[#151D32] border-orange-500 shadow-md text-white'
                    : 'bg-[#0D1326] border-white/10 text-slate-400 hover:border-purple-400/50 hover:bg-[#11182B] hover:text-slate-200'
                }`}
              >
                <div
                  className={`font-mono text-xs font-bold mb-1.5 ${
                    isSelected ? 'text-orange-400' : 'text-slate-500'
                  }`}
                >
                  STAGE {step.step}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white truncate">
                  {language === 'ar' ? step.titleAr : step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="bg-[#0D1326] border border-white/15 rounded-lg p-6 sm:p-9 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-mono text-orange-400 uppercase tracking-widest mb-2.5">
                <span>{language === 'ar' ? `المرحلة ${activeStep.step}` : `STAGE ${activeStep.step}`}</span>
                <span>•</span>
                <span className="text-slate-300">{language === 'ar' ? activeStep.titleAr : activeStep.title}</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-['Space_Grotesk',sans-serif] leading-tight mb-4">
                {language === 'ar' ? activeStep.headlineAr : activeStep.headline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'ar' ? activeStep.descriptionAr : activeStep.description}
              </p>
            </div>

            {/* Stage Deliverables */}
            <div className="lg:col-span-5 bg-[#11182B] p-5 rounded-md border border-white/10">
              <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-3">
                {language === 'ar' ? 'المخرجات والوثائق الهندسية:' : 'Engineering Deliverables:'}
              </div>
              <ul className="space-y-2.5">
                {(language === 'ar' ? activeStep.deliverablesAr : activeStep.deliverables).map((del, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

