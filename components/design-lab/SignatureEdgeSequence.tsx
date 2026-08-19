'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import SectionMarker from '@/components/ui/SectionMarker';

export default function SignatureEdgeSequence() {
  const { language } = useLanguage();
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    { id: 'edge', num: '01', name: 'Edge', nameAr: 'الحافة', desc: 'Traffic ingress & perimeter routing.', descAr: 'استقبال التدفقات والتوجيه على الحافة.' },
    { id: 'security', num: '02', name: 'Security', nameAr: 'الأمان السيبراني', isBoundary: true, desc: 'Boundary defense & access verification.', descAr: 'سياج الحماية والتحقق من الوصول.' },
    { id: 'apps', num: '03', name: 'Applications & APIs', nameAr: 'التطبيقات و APIs', desc: 'Service interconnects & API routing.', descAr: 'ترابط الخدمات وتوجيه واجهات البرمجة.' },
    { id: 'cloud', num: '04', name: 'Cloud', nameAr: 'الحوسبة السحابية', isDistributed: true, desc: 'Multi-node compute & distributed workloads.', descAr: 'منصات حوسبة وتوزيع أحمال العمل.' },
    { id: 'data', num: '05', name: 'Data', nameAr: 'البيانات', isConverged: true, desc: 'Secure storage & cryptographic management.', descAr: 'التخزين الآمن وإدارة البيانات.' },
    { id: 'infra', num: '06', name: 'Infrastructure', nameAr: 'البنية التحتية', isBackbone: true, desc: 'Physical transmission & system backbone.', descAr: 'العمود الفقري ومسارات النقل الفيزيائي.' },
  ];

  const current = stages[activeStage];

  return (
    <section className="py-20 sm:py-28 bg-[#080D1A] text-slate-100 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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

        {/* ==================================================== */}
        {/* DESKTOP (>= md): TRANSFORMING ARCHITECTURAL RAIL (NO CARDS / NO TIMELINE) */}
        {/* ==================================================== */}
        <div className="hidden md:block relative">
          
          {/* Top Rail Header */}
          <div className="flex items-center justify-between pb-3 mb-8 border-b border-white/5 text-[10px] font-mono text-slate-500">
            <span className="uppercase">TRANSFORMING ARCHITECTURAL RAIL</span>
            <span className="text-orange-400 uppercase tracking-wider">
              {language === 'ar' ? 'مسار التحول المعماري' : 'UPT SIGNAL TRANSFORMATION'}
            </span>
          </div>

          {/* Continuous Architectural SVG Schematic */}
          <div className="relative w-full py-12">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              {/* Construction Datum Line */}
              <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.06)" strokeDasharray="6 6" />

              {/* 01. EDGE -> Ingress Line */}
              <line x1="0%" y1="50%" x2="18%" y2="50%" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />

              {/* 02. SECURITY -> Protected V-Shield Boundary Geometry */}
              <polygon
                points="180,15 270,15 240,85 170,85"
                fill="rgba(107,33,168,0.1)"
                stroke="#9333EA"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <line x1="18%" y1="50%" x2="35%" y2="50%" stroke="#FF7A00" strokeWidth="2.5" />

              {/* 03. APPLICATIONS & APIs -> Routing Junction */}
              <circle cx="43%" cy="50%" r="3.5" fill="#FF7A00" />
              <path d="M 35% 50% L 51% 50%" stroke="#FF7A00" strokeWidth="2.5" />
              <line x1="43%" y1="32%" x2="43%" y2="68%" stroke="#64748B" strokeWidth="1.5" />

              {/* 04. CLOUD -> 3-Way Symmetrical Distribution */}
              <path d="M 51% 50% L 57% 25% L 72% 25%" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 51% 50% L 72% 50%" stroke="#FF7A00" strokeWidth="2" />
              <path d="M 51% 50% L 57% 75% L 72% 75%" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />

              <circle cx="65%" cy="25%" r="3" fill="#FF7A00" />
              <circle cx="65%" cy="50%" r="3" fill="#FF7A00" />
              <circle cx="65%" cy="75%" r="3" fill="#FF7A00" />

              {/* 05. DATA -> Convergence back to single resolved trunk */}
              <path d="M 72% 25% L 78% 50% L 85% 50%" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />
              <path d="M 72% 50% L 85% 50%" stroke="#FF7A00" strokeWidth="2" />
              <path d="M 72% 75% L 78% 50% L 85% 50%" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="78%" cy="50%" r="3.5" fill="#FF7A00" />

              {/* 06. INFRASTRUCTURE -> Grounded Backbone Trunk & Vertical Stanchions */}
              <line x1="85%" y1="50%" x2="100%" y2="50%" stroke="#FF7A00" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="91%" y1="28%" x2="91%" y2="72%" stroke="#64748B" strokeWidth="1.5" />
              <line x1="97%" y1="28%" x2="97%" y2="72%" stroke="#64748B" strokeWidth="1.5" />
              <circle cx="91%" cy="50%" r="3.5" fill="#FF7A00" />
              <circle cx="97%" cy="50%" r="3.5" fill="#FF7A00" />
            </svg>

            {/* 6 Stations Along the Rail */}
            <div className="grid grid-cols-6 gap-3 relative z-10">
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

          {/* Active Station Detail (Integrated Inline Datum) */}
          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-orange-400 font-bold">[{current.num}]</span>
              <span className="text-white font-bold">{language === 'ar' ? current.nameAr : current.name}:</span>
              <span className="text-slate-300">{language === 'ar' ? current.descAr : current.desc}</span>
            </div>
            <span className="text-[10px] text-slate-500 uppercase">UPT CONTROL PLANE</span>
          </div>

        </div>

        {/* ==================================================== */}
        {/* MOBILE (< md): TRANSFORMING VERTICAL ARCHITECTURAL SPINE (NO CARDS) */}
        {/* ==================================================== */}
        <div className="block md:hidden relative pl-8 rtl:pr-8 rtl:pl-0">
          
          {/* Continuous Vertical Transforming Signal Axis */}
          <div className="absolute left-3 rtl:right-3 rtl:left-auto top-2 bottom-2 w-0.5 bg-[#FF7A00]" />

          {/* Vertical Spine Stations with Local Geometric Transformations */}
          <div className="space-y-10 relative z-10">
            {stages.map((stage, idx) => {
              const isSelected = activeStage === idx;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className="w-full text-left rtl:text-right focus:outline-none group cursor-pointer flex items-start gap-4"
                >
                  {/* Station Node Marker on Vertical Spine */}
                  <span
                    className={'-ml-6 rtl:-mr-6 rtl:ml-0 w-3.5 h-3.5 rounded-full shrink-0 mt-1 transition-transform ' +
                      (isSelected
                        ? 'bg-[#FF7A00] ring-4 ring-orange-500/20 scale-125'
                        : stage.isBoundary
                        ? 'bg-purple-500 ring-2 ring-purple-500/20'
                        : 'bg-slate-400')}
                  />

                  {/* Stage Details */}
                  <div className="flex-1 pb-3 border-b border-white/5">
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
