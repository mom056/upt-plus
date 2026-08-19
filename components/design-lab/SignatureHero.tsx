'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import { ShieldAlert, Cloud, Server, Code2, Database, Globe2 } from 'lucide-react';

export default function SignatureHero() {
  const { language, t } = useLanguage();
  const [activeNode, setActiveNode] = useState<string | null>('security');

  const nodes = [
    { id: 'edge', num: '01', name: 'Edge', nameAr: 'الحافة', role: 'Ingress & Delivery', roleAr: 'التسليم والتوزيع', x: 12, y: 50, icon: Globe2 },
    { id: 'security', num: '02', name: 'Security', nameAr: 'الأمان السيبراني', role: 'Zero Trust Boundary', roleAr: 'سياج انعدام الثقة', x: 38, y: 26, isProtected: true, icon: ShieldAlert },
    { id: 'apps', num: '03', name: 'Applications & APIs', nameAr: 'التطبيقات و APIs', role: 'Microservice Mesh', roleAr: 'الخدمات المصغرة', x: 38, y: 74, icon: Code2 },
    { id: 'cloud', num: '04', name: 'Cloud', nameAr: 'الحوسبة السحابية', role: 'Multi-Zone Compute', roleAr: 'حوسبة متعددة المناطق', x: 64, y: 50, icon: Cloud },
    { id: 'data', num: '05', name: 'Data', nameAr: 'البيانات', role: 'Encrypted Vaults', roleAr: 'الأسرار المشفرة', x: 88, y: 26, icon: Database },
    { id: 'infra', num: '06', name: 'Infrastructure', nameAr: 'البنية التحتية', role: 'Physical Backbone', roleAr: 'العمود الفقري الفيزيائي', x: 88, y: 74, icon: Server },
  ];

  return (
    <section className="relative w-full pt-12 pb-20 sm:pt-16 sm:pb-28 text-slate-100 overflow-hidden border-b border-white/10 bg-[#080D1A]">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="absolute top-8 left-8 text-[9px] font-mono text-slate-600 select-none hidden lg:block">
        + UPT / FIELD-01 // COORD: [32.88°N, 13.19°E]
      </div>
      <div className="absolute top-8 right-8 text-[9px] font-mono text-slate-600 select-none hidden lg:block">
        SEC-PERIMETER: ACTIVE // CLOUD-FABRIC // +
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 flex flex-col items-start text-left rtl:text-right">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-orange-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>{language === 'ar' ? 'الأمن السيبراني والحوسبة السحابية للمؤسسات' : 'ENTERPRISE CYBERSECURITY & CLOUD COMPUTING'}</span>
            </div>

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

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <span className="w-2 h-2 text-orange-400 font-bold">↑</span>
              <span>
                {language === 'ar' ? 'مسار الإشارة المعمارية يبدأ من حافة الاتصال' : 'The UPT Signal originates from edge ingress'}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 w-full relative">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-[10px] sm:text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="uppercase text-slate-200 font-bold">
                  {language === 'ar' ? 'طوبولوجيا المعمارية المؤسسية' : 'ENTERPRISE TOPOLOGY FIELD'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[10px]">
                <span className="flex items-center gap-1.5 text-orange-400">
                  <span className="w-2 h-0.5 bg-[#FF7A00]" />
                  {language === 'ar' ? 'مسار الإشارة UPT' : 'UPT Signal'}
                </span>
                <span className="flex items-center gap-1.5 text-purple-400">
                  <span className="w-1.5 h-1.5 rounded-full border border-purple-400 bg-purple-900/40" />
                  {language === 'ar' ? 'سياج الأمان' : 'Security Boundary'}
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] bg-[#090F20]/60 border border-white/10 rounded-md p-4 overflow-hidden">
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="38%" y1="0%" x2="38%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="64%" y1="0%" x2="64%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                <line x1="88%" y1="0%" x2="88%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

                <line x1="12%" y1="50%" x2="38%" y2="26%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="12%" y1="50%" x2="38%" y2="74%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="38%" y1="26%" x2="64%" y2="50%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="38%" y1="74%" x2="64%" y2="50%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="64%" y1="50%" x2="88%" y2="26%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="64%" y1="50%" x2="88%" y2="74%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

                <rect
                  x="29%"
                  y="12%"
                  width="18%"
                  height="28%"
                  rx="4"
                  fill="rgba(107,33,168,0.12)"
                  stroke="#9333EA"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                />

                <path
                  d="M 12% 50% L 38% 26% L 64% 50% L 88% 74%"
                  fill="none"
                  stroke="#FF7A00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle cx="64%" cy="50%" r="3.5" fill="#FF7A00" />
              </svg>

              <div className="relative w-full h-full z-10">
                {nodes.map((node) => {
                  const isSelected = activeNode === node.id;
                  const Icon = node.icon;

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
                      className={'absolute p-2 sm:p-2.5 rounded transition-all text-left rtl:text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer ' +
                        (isSelected
                          ? 'bg-[#151D32] border border-orange-500 shadow-lg scale-105'
                          : node.isProtected
                          ? 'bg-[#111328] border border-purple-500/50 hover:border-purple-400'
                          : 'bg-[#0D1326] border border-white/15 hover:border-white/40')}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={'w-6 h-6 rounded flex items-center justify-center ' +
                            (isSelected
                              ? 'bg-orange-500/20 text-orange-400'
                              : node.isProtected
                              ? 'bg-purple-900/30 text-purple-300'
                              : 'bg-white/5 text-slate-300')}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold text-white whitespace-nowrap">
                            {language === 'ar' ? node.nameAr : node.name}
                          </div>
                          <div className="text-[9px] font-mono text-slate-400 whitespace-nowrap hidden sm:block">
                            {language === 'ar' ? node.roleAr : node.role}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/10 pt-1.5">
                <span className="truncate">
                  {activeNode
                    ? (language === 'ar' ? 'الطبقة المحددة: ' : 'LAYER: ') + (nodes.find((n) => n.id === activeNode)?.name.toUpperCase() || '')
                    : 'CONTROL PLANE // STEADY STATE'}
                </span>
                <span className="text-orange-400 shrink-0">
                  {language === 'ar' ? 'إشارة نشطة: مُحققة' : 'SIGNAL: ACTIVE'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
