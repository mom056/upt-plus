'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import SectionMarker from '@/components/ui/SectionMarker';

export default function SignatureEdgeSequence() {
  const { language } = useLanguage();
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    { id: 'edge', num: '01', name: 'Edge', nameAr: 'الحافة', desc: 'Traffic ingress & perimeter distribution.', descAr: 'استقبال التدفقات والتوجيه على الحافة.' },
    { id: 'security', num: '02', name: 'Security', nameAr: 'الأمان السيبراني', isBoundary: true, desc: 'Zero Trust boundary & access verification.', descAr: 'التحقق عند سياج الأمان وانعدام الثقة.' },
    { id: 'apps', num: '03', name: 'Applications & APIs', nameAr: 'التطبيقات و APIs', desc: 'Decoupled services & container routing.', descAr: 'استقلالية الخدمات وربط التطبيقات.' },
    { id: 'cloud', num: '04', name: 'Cloud', nameAr: 'الحوسبة السحابية', desc: 'Multi-zone compute platforms.', descAr: 'منصات حوسبة سحابية متعددة المناطق.' },
    { id: 'data', num: '05', name: 'Data', nameAr: 'البيانات', desc: 'Encrypted storage & secrets management.', descAr: 'التخزين المشفر وإدارة المفاتيح.' },
    { id: 'infra', num: '06', name: 'Infrastructure', nameAr: 'البنية التحتية', desc: 'Physical transmission & switching fabrics.', descAr: 'العمود الفقري ومحولات الشبكات.' },
  ];

  const current = stages[activeStage];

  return (
    <section className="py-20 sm:py-28 bg-[#080D1A] text-slate-100 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <SectionMarker
            number="03"
            label={language === 'ar' ? 'النموذج المعماري الشامل' : 'END-TO-END ARCHITECTURAL SEQUENCE'}
            variant="purple"
            className="mb-4"
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk',sans-serif] tracking-tight uppercase">
            {language === 'ar' ? 'من الحافة إلى صميم المؤسسة.' : 'From Edge to Enterprise.'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'ar'
              ? 'تسلسل معماري موحد يربط نقاط الدخول الموزعة عبر طبقات الأمان والتطبيقات والحوسبة وصولاً إلى العمود الفقري الفيزيائي.'
              : 'An unbroken engineering flow connecting distributed edge endpoints through security validation, application meshes, cloud clusters, and physical backbone infrastructure.'}
          </p>
        </div>

        {/* DESKTOP (>= md): CONTINUOUS HORIZONTAL ARCHITECTURAL RAIL (NO CARDS) */}
        <div className="hidden md:block relative">
          
          <div className="flex items-center justify-between pb-3 mb-8 border-b border-white/5 text-[10px] font-mono text-slate-500">
            <span className="uppercase">CONTINUOUS ARCHITECTURAL RAIL</span>
            <span className="text-orange-400 uppercase tracking-wider">
              {language === 'ar' ? 'مسار UPT الموحد' : 'UPT SIGNAL ROUTE'}
            </span>
          </div>

          <div className="relative w-full py-8">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#FF7A00" strokeWidth="2" />
              
              <polygon
                points="24%,20% 36%,20% 33%,80% 21%,80%"
                fill="rgba(107,33,168,0.08)"
                stroke="#9333EA"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
            </svg>

            <div className="grid grid-cols-6 gap-4 relative z-10">
              {stages.map((stage, idx) => {
                const isSelected = activeStage === idx;

                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className="text-left rtl:text-right focus:outline-none group cursor-pointer flex flex-col items-start"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={'w-3 h-3 rounded-full transition-transform ' +
                          (isSelected
                            ? 'bg-[#FF7A00] ring-4 ring-orange-500/20 scale-125'
                            : stage.isBoundary
                            ? 'bg-purple-500 ring-2 ring-purple-500/20'
                            : 'bg-slate-500 group-hover:bg-slate-300')}
                      />
                      <span className="text-[10px] font-mono text-slate-500">
                        {stage.num}
                      </span>
                    </div>

                    <div
                      className={'text-xs font-mono font-bold uppercase tracking-wider transition-colors ' +
                        (isSelected
                          ? 'text-orange-400'
                          : stage.isBoundary
                          ? 'text-purple-300 group-hover:text-white'
                          : 'text-slate-300 group-hover:text-white')}
                    >
                      {language === 'ar' ? stage.nameAr : stage.name}
                    </div>

                    <p className="mt-1 text-[11px] text-slate-400 leading-snug">
                      {language === 'ar' ? stage.descAr : stage.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-orange-400 font-bold">[{current.num}]</span>
              <span className="text-white font-bold">{language === 'ar' ? current.nameAr : current.name}:</span>
              <span className="text-slate-300">{language === 'ar' ? current.descAr : current.desc}</span>
            </div>
            <span className="text-[10px] text-slate-500 uppercase">UPT CONTROL PLANE</span>
          </div>

        </div>

        {/* MOBILE (< md): VERTICAL ARCHITECTURAL SIGNAL SPINE (NO STACKED CARDS) */}
        <div className="block md:hidden relative pl-6 rtl:pr-6 rtl:pl-0">
          
          <div className="absolute left-2.5 rtl:right-2.5 rtl:left-auto top-3 bottom-3 w-0.5 bg-[#FF7A00]" />

          <div className="space-y-8 relative z-10">
            {stages.map((stage, idx) => {
              const isSelected = activeStage === idx;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className="w-full text-left rtl:text-right focus:outline-none group cursor-pointer flex items-start gap-4"
                >
                  <span
                    className={'-ml-5 rtl:-mr-5 rtl:ml-0 w-3 h-3 rounded-full shrink-0 mt-1 transition-transform ' +
                      (isSelected
                        ? 'bg-[#FF7A00] ring-4 ring-orange-500/20 scale-125'
                        : stage.isBoundary
                        ? 'bg-purple-500 ring-2 ring-purple-500/20'
                        : 'bg-slate-400')}
                  />

                  <div className="flex-1 pb-2 border-b border-white/5">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-mono text-slate-500">
                        {stage.num}
                      </span>
                      <span
                        className={'text-xs font-mono font-bold uppercase tracking-wider ' +
                          (isSelected
                            ? 'text-orange-400'
                            : stage.isBoundary
                            ? 'text-purple-300'
                            : 'text-white')}
                      >
                        {language === 'ar' ? stage.nameAr : stage.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {language === 'ar' ? stage.descAr : stage.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
