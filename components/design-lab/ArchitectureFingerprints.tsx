'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import SectionMarker from '@/components/ui/SectionMarker';

export default function ArchitectureFingerprints() {
  const { language } = useLanguage();
  const [activeFingerprint, setActiveFingerprint] = useState<number>(0);

  const fingerprints = [
    {
      id: 'cybersecurity',
      num: '01',
      title: 'Cybersecurity',
      titleAr: 'الأمن السيبراني',
      concept: 'BOUNDARY',
      conceptAr: 'سياج الحماية',
      summary: 'Perimeter isolation, boundary defense, and verified access control.',
      summaryAr: 'الدفاع عن السياج والتحقق من الوصول وعزل التهديدات.',
    },
    {
      id: 'cloud',
      num: '02',
      title: 'Cloud Computing',
      titleAr: 'الحوسبة السحابية',
      concept: 'DISTRIBUTION',
      conceptAr: 'التوزيع السحابي',
      summary: 'Controlled multi-node workload distribution and resilient availability.',
      summaryAr: 'توزيع متوازن لأحمال العمل وبنية حوسبية مرنة وعالية الاعتمادية.',
    },
    {
      id: 'infrastructure',
      num: '03',
      title: 'Digital Infrastructure',
      titleAr: 'البنية التحتية الرقمية',
      concept: 'BACKBONE',
      conceptAr: 'العمود الفقري',
      summary: 'Structured physical transmission backbones and high-capacity interconnects.',
      summaryAr: 'مسارات عمود فقري فيزيائي منظم وروابط شبكية عالية السعة.',
    },
  ];

  const current = fingerprints[activeFingerprint];

  return (
    <section className="py-20 sm:py-28 bg-[#080D1A] text-slate-100 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <SectionMarker
            number="02"
            label={language === 'ar' ? 'البصمات المعمارية للأنظمة' : 'THREE ARCHITECTURAL DISCIPLINES'}
            variant="orange"
            className="mb-4"
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk',sans-serif] tracking-tight uppercase">
            {language === 'ar' ? 'البصمات المعمارية للأنظمة.' : 'Architecture Fingerprints.'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'ar'
              ? 'تتجسد تخصصات UPT Plus عبر ثلاثة نماذج معمارية هندسية: سياج الحماية، التوزيع السحابي، والعمود الفقري.'
              : 'Expressing UPT Plus disciplines through architectural posture rather than generic cards: Boundary, Distribution, and Backbone.'}
          </p>
        </div>

        {/* Dynamic Architectural Field (NO CARDS / NO CONTAINER PANELS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Discipline Selector (Text & Rules Only) */}
          <div
            role="tablist"
            aria-label="UPT Disciplines"
            className="lg:col-span-5 flex flex-col"
          >
            {fingerprints.map((item, idx) => {
              const isSelected = activeFingerprint === idx;

              return (
                <button
                  key={item.id}
                  role="tab"
                  id={'tab-' + item.id}
                  aria-selected={isSelected}
                  aria-controls={'tabpanel-' + item.id}
                  tabIndex={isSelected ? 0 : -1}
                  type="button"
                  onClick={() => setActiveFingerprint(idx)}
                  className="py-6 border-b border-white/10 text-left rtl:text-right transition-colors focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={'font-mono text-xs font-bold transition-colors ' + (isSelected ? 'text-orange-400' : 'text-slate-500 group-hover:text-slate-400')}>
                      {item.num} • {item.concept}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 bg-[#FF7A00]" />
                    )}
                  </div>

                  <div className={`text-xl sm:text-2xl font-bold font-['Space_Grotesk',sans-serif] transition-colors ${isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {language === 'ar' ? item.titleAr : item.title}
                  </div>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {language === 'ar' ? item.summaryAr : item.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Open Architectural Canvas (Shared Entry (30,90) & Exit (370,90)) */}
          <div
            id={'tabpanel-' + current.id}
            role="tabpanel"
            aria-labelledby={'tab-' + current.id}
            className="lg:col-span-7 flex flex-col justify-center min-h-[380px] relative"
          >
            {/* Top Field Marker */}
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/5 text-[10px] font-mono text-slate-500">
              <span className="uppercase">
                {current.num} • {current.concept}
              </span>
              <span className="text-orange-400 uppercase">
                {language === 'ar' ? 'النموذج المعماري' : 'ARCHITECTURAL SCHEMATIC'}
              </span>
            </div>

            {/* Central SVG Schematic (One shared coordinate space transforming in place) */}
            <div className="relative w-full h-56 flex items-center justify-center">
              
              {/* 01. Cybersecurity (BOUNDARY) SVG */}
              {activeFingerprint === 0 && (
                <svg className="w-full h-full" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="10" y1="90" x2="390" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="6 6" />
                  
                  {/* Purple Protected Boundary with V-Shield Convergence Geometry */}
                  <polygon
                    points="170,25 320,25 285,155 170,155"
                    fill="rgba(107,33,168,0.1)"
                    stroke="#9333EA"
                    strokeWidth="1.5"
                    strokeDasharray="6 3"
                  />
                  
                  {/* Boundary Threshold Gate Notch */}
                  <line x1="170" y1="75" x2="170" y2="105" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Incoming UPT Signal Crossing Boundary */}
                  <path d="M 30 90 L 170 90" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="170" cy="90" r="3.5" fill="#FF7A00" />
                  
                  {/* Protected Internal Flow -> Outgoing Exit Point */}
                  <path d="M 175 90 L 370 90" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="370" cy="90" r="3.5" fill="#FF7A00" />
                </svg>
              )}

              {/* 02. Cloud Computing (DISTRIBUTION: 1 Incoming -> 3 Branches -> 1 Resolved Outgoing) */}
              {activeFingerprint === 1 && (
                <svg className="w-full h-full" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="10" y1="90" x2="390" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="6 6" />
                  
                  {/* 1. Single Incoming Signal */}
                  <path d="M 30 90 L 130 90" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="130" cy="90" r="4" fill="#FF7A00" />

                  {/* 2. 3-Way Symmetrical Distributed Paths */}
                  <path d="M 130 90 L 185 45 L 265 45 L 320 90" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 130 90 L 320 90" stroke="#FF7A00" strokeWidth="2" />
                  <path d="M 130 90 L 185 135 L 265 135 L 320 90" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />

                  {/* Distributed Node Anchors */}
                  <circle cx="225" cy="45" r="3.5" fill="#FF7A00" />
                  <circle cx="225" cy="90" r="3.5" fill="#FF7A00" />
                  <circle cx="225" cy="135" r="3.5" fill="#FF7A00" />

                  {/* 3. Convergence & 1 Resolved Outgoing Route */}
                  <circle cx="320" cy="90" r="4" fill="#FF7A00" />
                  <path d="M 320 90 L 370 90" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="370" cy="90" r="3.5" fill="#FF7A00" />
                </svg>
              )}

              {/* 03. Digital Infrastructure (BACKBONE: Linear Solid Trunk & Structural Stanchions) */}
              {activeFingerprint === 2 && (
                <svg className="w-full h-full" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="10" y1="90" x2="390" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="6 6" />
                  
                  {/* Solid Active Backbone Trunk Line (Shared 30 -> 370 Axis) */}
                  <line x1="30" y1="90" x2="370" y2="90" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" />

                  {/* Structural Vertical Stanchions & Cross-Ties */}
                  <line x1="120" y1="50" x2="120" y2="130" stroke="#64748B" strokeWidth="1.5" />
                  <line x1="210" y1="50" x2="210" y2="130" stroke="#64748B" strokeWidth="1.5" />
                  <line x1="300" y1="50" x2="300" y2="130" stroke="#64748B" strokeWidth="1.5" />

                  {/* Grounded Node Connection Anchors */}
                  <circle cx="120" cy="90" r="3.5" fill="#FF7A00" />
                  <circle cx="210" cy="90" r="3.5" fill="#FF7A00" />
                  <circle cx="300" cy="90" r="3.5" fill="#FF7A00" />
                  <circle cx="370" cy="90" r="3.5" fill="#FF7A00" />
                </svg>
              )}
            </div>

            {/* Bottom Datum Axis */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span className="uppercase">{current.concept} POSTURE</span>
              <span className="text-slate-400">UPT PLUS FABRIC</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
