'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';

export default function SignatureHero() {
  const { language, t } = useLanguage();
  const [activeNode, setActiveNode] = useState<string>('security');

  const nodes = [
    { id: 'edge', num: '01', name: 'Edge', nameAr: 'الحافة', x: 8, y: 45 },
    { id: 'security', num: '02', name: 'Security', nameAr: 'الأمان السيبراني', isProtected: true, x: 36, y: 22 },
    { id: 'apps', num: '03', name: 'Applications & APIs', nameAr: 'التطبيقات و APIs', x: 36, y: 72 },
    { id: 'cloud', num: '04', name: 'Cloud', nameAr: 'الحوسبة السحابية', x: 60, y: 45 },
    { id: 'data', num: '05', name: 'Data', nameAr: 'البيانات', x: 82, y: 22 },
    { id: 'infra', num: '06', name: 'Infrastructure', nameAr: 'البنية التحتية', x: 82, y: 72 },
  ];

  return (
    <section className="relative w-full pt-12 pb-20 sm:pt-20 sm:pb-28 text-slate-100 overflow-hidden border-b border-white/5 bg-[#080D1A]">
      {/* Structural Construction Lines (Sparse & Restrained) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />

      {/* Structural Notation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          UPT / FIELD-01
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Macro Typography & Mission */}
          <div className="lg:col-span-5 flex flex-col items-start text-left rtl:text-right">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-orange-400 mb-6">
              <span className="w-1.5 h-1.5 bg-[#FF7A00]" />
              <span>{language === 'ar' ? 'الأمن السيبراني والحوسبة السحابية للمؤسسات' : 'ENTERPRISE CYBERSECURITY & CLOUD COMPUTING'}</span>
            </div>

            {/* Signature Macro Triad */}
            <div className="font-['Space_Grotesk',sans-serif] font-black text-4xl sm:text-6xl lg:text-6xl tracking-tight leading-[1.05] text-white uppercase mb-4">
              {language === 'ar' ? (
                <>
                  <span className="block text-white">تأمين.</span>
                  <span className="block text-slate-200">توسع.</span>
                  <span className="block text-[#FF7A00]">أداء.</span>
                </>
              ) : (
                <>
                  <span className="block text-white">SECURE.</span>
                  <span className="block text-slate-200">SCALE.</span>
                  <span className="block text-[#FF7A00]">PERFORM.</span>
                </>
              )}
            </div>

            {/* Approved Mission Title */}
            <h1 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight leading-snug">
              {language === 'ar' ? 'بنية تحتية تقنية مهيأة لمتطلبات المستقبل.' : 'Technology infrastructure built for what’s next.'}
            </h1>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
              {language === 'ar'
                ? 'تساعد UPT Plus المؤسسات على بناء وتأمين وتحديث وتشغيل البيئات الرقمية التي تقود الأعمال الحديثة — من الأمن السيبراني والمنصات السحابية إلى البنية التحتية والتطبيقات المؤسسية.'
                : 'UPT Plus helps organizations build, secure, modernize, and operate the digital environments behind modern business — from cybersecurity and cloud platforms to enterprise infrastructure and applications.'}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <Button href="/solutions" variant="primary" size="md" withArrow>
                {t.nav.exploreCapabilities}
              </Button>
              <Button href="/contact" variant="secondary" size="md">
                {t.nav.talkToExpert}
              </Button>
            </div>
          </div>

          {/* Right Column: Unboxed Architectural Field (NO OUTER CARD / NO NODE BOXES) */}
          <div className="lg:col-span-7 w-full relative">
            <div className="relative w-full aspect-[16/11] sm:aspect-[16/10]">
              
              {/* Architectural Construction & Signal Vector */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Horizontal & Vertical Engineering Datum Rails */}
                <line x1="0%" y1="45%" x2="100%" y2="45%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="6 6" />
                <line x1="36%" y1="0%" x2="36%" y2="100%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="60%" y1="0%" x2="60%" y2="100%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="82%" y1="0%" x2="82%" y2="100%" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

                {/* Passive Architectural Interconnects */}
                <line x1="8%" y1="45%" x2="36%" y2="22%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <line x1="8%" y1="45%" x2="36%" y2="72%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <line x1="36%" y1="22%" x2="60%" y2="45%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <line x1="36%" y1="72%" x2="60%" y2="45%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <line x1="60%" y1="45%" x2="82%" y2="22%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <line x1="60%" y1="45%" x2="82%" y2="72%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

                {/* Security Protected Boundary (Subtle V-Shield Convergence Geometry) */}
                <polygon
                  points="130,12 210,12 170,88"
                  fill="rgba(107,33,168,0.08)"
                  stroke="#9333EA"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  className="hidden sm:block"
                />

                {/* Gate 1.3: THE UPT SIGNAL (Continuous Origin -> Routing -> Exit Datum) */}
                <path
                  d="M 8% 45% L 36% 22% L 60% 45% L 82% 72% L 82% 100%"
                  fill="none"
                  stroke="#FF7A00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Active Route Pulse Anchor */}
                <circle cx="60%" cy="45%" r="3.5" fill="#FF7A00" />
                
                {/* Gate 1.3: Downward Signal Exit Cue at Datum (82%) */}
                <circle cx="82%" cy="100%" r="3" fill="#FF7A00" />
              </svg>

              {/* Open Architectural Node Labels (NO CARD BOXES) */}
              <div className="relative w-full h-full">
                {nodes.map((node) => {
                  const isSelected = activeNode === node.id;

                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveNode(node.id)}
                      style={{
                        left: node.x + '%',
                        top: node.y + '%',
                        transform: 'translate(-50%, -50%)',
                      }}
                      className="absolute group focus:outline-none text-left rtl:text-right cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={'w-2.5 h-2.5 rounded-full transition-transform duration-200 ' +
                            (isSelected
                              ? 'bg-[#FF7A00] ring-4 ring-orange-500/20 scale-125'
                              : node.isProtected
                              ? 'bg-purple-500 ring-2 ring-purple-500/20 group-hover:scale-110'
                              : 'bg-slate-400 group-hover:scale-110')}
                        />
                        <div className="flex flex-col">
                          <span className="text-[9px] font-mono text-slate-500 leading-none">
                            {node.num}
                          </span>
                          <span
                            className={'text-xs font-mono font-bold tracking-wider uppercase transition-colors ' +
                              (isSelected
                                ? 'text-orange-400'
                                : node.isProtected
                                ? 'text-purple-300 group-hover:text-white'
                                : 'text-slate-300 group-hover:text-white')}
                          >
                            {language === 'ar' ? node.nameAr : node.name}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Clean Bottom Field Datum Line & Label */}
              <div className="absolute bottom-0 left-0 right-0 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span className="uppercase">UPT CONTROL PLANE</span>
                <span className="text-orange-400 uppercase tracking-wider">
                  {language === 'ar' ? 'مسار الإشارة' : 'ACTIVE ROUTE'}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
