'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import SectionMarker from '@/components/ui/SectionMarker';
import { ShieldCheck, Cloud, Server } from 'lucide-react';

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
      headline: 'Boundary defense, verification, and least-privilege containment.',
      headlineAr: 'الدفاع عن السياج والتحقق وعزل التهديدات بمبدأ الحد الأدنى من الصلاحيات.',
      description:
        'The UPT Signal arrives from external ingress and encounters a protected Security Boundary. Verification occurs at the perimeter before routing into internal application environments.',
      descriptionAr:
        'تصل إشارة UPT من منافذ الدخول الخارجية وتلتقي بسياج الأمان. يتم التحقق عند المحيط قبل التوجيه إلى بيئات التطبيقات الداخلية.',
      icon: ShieldCheck,
      mechanisms: [
        'Context-aware identity verification',
        'Perimeter isolation and boundary defense',
        'Cryptographic secrets and key management',
      ],
      mechanismsAr: [
        'التحقق من الهويات المعتمد على السياق',
        'العزل المحيطي والدفاع عن السياج',
        'إدارة المفاتيح التشفيرية والأسرار',
      ],
    },
    {
      id: 'cloud',
      num: '02',
      title: 'Cloud Computing',
      titleAr: 'الحوسبة السحابية',
      concept: 'DISTRIBUTION',
      conceptAr: 'التوزيع السحابي',
      headline: 'Balanced orchestration and resilient scalable topologies.',
      headlineAr: 'توزيع متوازن وبنية حوسبية مرنة وقابلة للتوسع.',
      description:
        'A single incoming signal enters the cloud layer and distributes into balanced, resilient compute nodes. Workloads remain synchronized to maintain continuous availability.',
      descriptionAr:
        'تدخل إشارة UPT إلى الطبقة السحابية وتتفرع إلى عُقد حوسبية متوازنة وعالية الصمود للحفاظ على استمرارية العمليات.',
      icon: Cloud,
      mechanisms: [
        'Distributed active workload synchronization',
        'Modular cloud platform architecture',
        'Predictable operational capacity',
      ],
      mechanismsAr: [
        'مزامنة أحمال العمل الموزعة والنشطة',
        'معمارية منصات سحابية معيارية',
        'سعة تشغيلية مدروسة وموثوقة',
      ],
    },
    {
      id: 'infrastructure',
      num: '03',
      title: 'Digital Infrastructure',
      titleAr: 'البنية التحتية الرقمية',
      concept: 'BACKBONE',
      conceptAr: 'العمود الفقري',
      headline: 'High-capacity physical backbones and engineered interconnect fabrics.',
      headlineAr: 'عمود فقري فيزيائي عالي السعة ومسارات ربط هندسية موثوقة.',
      description:
        'The signal resolves into a structured physical backbone. Dedicated transmission conduits and switching pathways secure the operational foundation of every digital service.',
      descriptionAr:
        'تستقر الإشارة في عمود فقري فيزيائي منظم. تضمن مسارات النقل والربط المخصصة سلامة الأساس التشغيلي لكافة الخدمات الرقمية.',
      icon: Server,
      mechanisms: [
        'Structured transmission backbone pathways',
        'Carrier-grade enterprise switching fabrics',
        'Continuous physical link health monitoring',
      ],
      mechanismsAr: [
        'مسارات عمود فقري منظمة وعالية الموثوقية',
        'محولات شبكية متقدمة للمؤسسات',
        'مراقبة مستمرة لصحة مسارات الربط الفيزيائي',
      ],
    },
  ];

  const current = fingerprints[activeFingerprint];

  return (
    <section className="py-20 sm:py-28 bg-[#050811] text-slate-100 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              ? 'نعبر عن مجالات تخصص UPT الثلاثة من خلال نماذج معمارية هندسية محددة — تجسد الحماية، والتوزيع السحابي، والعمود الفقري الفيزيائي.'
              : 'Expressing UPT Plus disciplines through architectural posture rather than generic cards: Boundary (Security), Distribution (Cloud), and Backbone (Infrastructure).'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div
            role="tablist"
            aria-label="UPT Disciplines"
            className="lg:col-span-5 flex flex-col gap-3"
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
                  className={'p-5 rounded-md border text-left rtl:text-right transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer ' +
                    (isSelected
                      ? 'bg-[#0D1326] border-orange-500 shadow-xl ring-1 ring-orange-500/50'
                      : 'bg-[#080D1A] border-white/10 hover:border-white/20 hover:bg-[#0D1326]/60 text-slate-400')}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={'font-mono text-xs font-bold ' + (isSelected ? 'text-orange-400' : 'text-slate-500')}>
                      {item.num} • {item.concept}
                    </span>
                    <span className={'text-[10px] font-mono uppercase px-2 py-0.5 rounded ' +
                      (isSelected ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40' : 'bg-white/5 text-slate-500')}>
                      {language === 'ar' ? item.conceptAr : item.concept}
                    </span>
                  </div>

                  <div className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">
                    {language === 'ar' ? item.titleAr : item.title}
                  </div>

                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {language === 'ar' ? item.headlineAr : item.headline}
                  </p>
                </button>
              );
            })}
          </div>

          <div
            id={'tabpanel-' + current.id}
            role="tabpanel"
            aria-labelledby={'tab-' + current.id}
            className="lg:col-span-7 bg-[#090E1F] border border-white/15 rounded-md p-6 sm:p-8 flex flex-col justify-between min-h-[440px]"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="font-bold text-white uppercase tracking-wider">
                  {current.num} • {current.concept} SCHEMATIC
                </span>
              </div>
              <span className="text-slate-400 text-[11px]">
                {language === 'ar' ? 'معمارية حية متفاعلة' : 'Interactive Architectural Model'}
              </span>
            </div>

            <div className="relative w-full h-48 bg-[#050811] rounded border border-white/10 p-4 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'linear-gradient(to right, #FFF 1px, transparent 1px), linear-gradient(to bottom, #FFF 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* 01. Cybersecurity (BOUNDARY) SVG */}
              {activeFingerprint === 0 && (
                <svg className="w-full h-full" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20" y1="80" x2="380" y2="80" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                  
                  {/* Purple Security Perimeter Boundary */}
                  <rect x="180" y="25" width="170" height="110" rx="4" fill="rgba(107,33,168,0.12)" stroke="#9333EA" strokeWidth="1.5" strokeDasharray="6 3" />
                  
                  {/* Boundary Checkpoint Gate */}
                  <rect x="174" y="65" width="12" height="30" rx="2" fill="#9333EA" stroke="#C084FC" strokeWidth="1" />

                  {/* Incoming UPT Signal Crossing Boundary */}
                  <path d="M 30 80 L 174 80" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="174" cy="80" r="3.5" fill="#FF7A00" />
                  
                  {/* Protected Internal Route */}
                  <path d="M 186 80 L 330 80" stroke="#FF7A00" strokeWidth="2" strokeDasharray="4 3" />
                  <circle cx="330" cy="80" r="3.5" fill="#FF7A00" />
                </svg>
              )}

              {/* 02. Cloud Computing (DISTRIBUTION) SVG */}
              {activeFingerprint === 1 && (
                <svg className="w-full h-full" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20" y1="80" x2="380" y2="80" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                  
                  {/* Central Node */}
                  <rect x="120" y="62" width="36" height="36" rx="3" fill="#151D32" stroke="#FF7A00" strokeWidth="1.5" />

                  {/* Incoming Single Signal */}
                  <path d="M 30 80 L 120 80" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* 3-Way Distributed Branches */}
                  <path d="M 156 80 L 220 38 L 330 38" stroke="#FF7A00" strokeWidth="2" />
                  <path d="M 156 80 L 220 80 L 330 80" stroke="#FF7A00" strokeWidth="2" />
                  <path d="M 156 80 L 220 122 L 330 122" stroke="#FF7A00" strokeWidth="2" />

                  {/* Distributed Endpoint Nodes */}
                  <circle cx="330" cy="38" r="5" fill="#151D32" stroke="#FF7A00" strokeWidth="2" />
                  <circle cx="330" cy="80" r="5" fill="#151D32" stroke="#FF7A00" strokeWidth="2" />
                  <circle cx="330" cy="122" r="5" fill="#151D32" stroke="#FF7A00" strokeWidth="2" />
                </svg>
              )}

              {/* 03. Digital Infrastructure (BACKBONE) SVG */}
              {activeFingerprint === 2 && (
                <svg className="w-full h-full" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20" y1="80" x2="380" y2="80" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                  
                  {/* Backbone Trunk Line */}
                  <line x1="30" y1="80" x2="370" y2="80" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" />

                  {/* Structured Interconnect Nodes */}
                  <rect x="90" y="48" width="20" height="64" rx="2" fill="#0D1326" stroke="#64748B" strokeWidth="1.5" />
                  <rect x="190" y="48" width="20" height="64" rx="2" fill="#0D1326" stroke="#64748B" strokeWidth="1.5" />
                  <rect x="290" y="48" width="20" height="64" rx="2" fill="#0D1326" stroke="#64748B" strokeWidth="1.5" />

                  {/* Node Tap Points */}
                  <circle cx="100" cy="80" r="3" fill="#FF7A00" />
                  <circle cx="200" cy="80" r="3" fill="#FF7A00" />
                  <circle cx="300" cy="80" r="3" fill="#FF7A00" />
                </svg>
              )}
            </div>

            <div className="mt-6">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {language === 'ar' ? current.descriptionAr : current.description}
              </p>
              <div className="space-y-2 pt-3 border-t border-white/10">
                {(language === 'ar' ? current.mechanismsAr : current.mechanisms).map((mech, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                    <span>{mech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
