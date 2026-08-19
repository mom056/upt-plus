'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import SectionMarker from '@/components/ui/SectionMarker';
import { ShieldCheck, Cloud, Server, CheckCircle2 } from 'lucide-react';

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
      conceptAr: 'سياج الحماية والتحقق',
      headline: 'Cryptographic boundary verification and least-privilege containment.',
      headlineAr: 'التحقق التشفيري عند السياج وعزل التهديدات بمبدأ الحد الأدنى من الصلاحيات.',
      description:
        'The UPT Signal arrives from external ingress and encounters a hardened Purple Security Boundary. Identity tokens, cryptographic signatures, and payload schemas undergo deep inspection before permission to cross into internal application clusters is granted.',
      descriptionAr:
        'تصل إشارة UPT من منافذ الدخول الخارجية وتلتقي بسياج الأمان المحصن. يتم فحص توثيق الهويات والتواقيع التشفيرية وسلامة البيانات بعمق قبل السماح لها بالعبور إلى عناقيد التطبيقات الداخلية.',
      icon: ShieldCheck,
      mechanisms: [
        'Context-aware identity inspection (Zero Trust)',
        'Perimeter microsegmentation & lateral movement containment',
        'Cryptographic secrets & HSM key isolation',
      ],
      mechanismsAr: [
        'فحص الهويات المعتمد على السياق (Zero Trust)',
        'العزل الشبكي الدقيق واحتواء التحركات الجانبية',
        'عزل المفاتيح التشفيرية والأسرار البرمجية عتادياً',
      ],
    },
    {
      id: 'cloud',
      num: '02',
      title: 'Cloud Computing',
      titleAr: 'الحوسبة السحابية',
      concept: 'DISTRIBUTION',
      conceptAr: 'التوزيع والتوافر العالي',
      headline: 'Balanced multi-zone orchestration and resilient autoscaling topologies.',
      headlineAr: 'توزيع متوازن عبر مناطق متعددة وبنية حوسبية مرنة وقابلة للتوسع التلقائي.',
      description:
        'A single incoming Orange Signal enters the cloud orchestration layer and splits gracefully into three synchronized, resilient compute zones. Workload state replicates in real time, guaranteeing zero disruption if a single zone experiences degradation.',
      descriptionAr:
        'تدخل إشارة UPT البرتقالية إلى طبقة التنسيق السحابي وتتفرع بسلاسة إلى ثلاث مناطق حوسبية متزامنة وعالية الصمود. تتم مزامنة أحمال العمل لحظياً لضمان استمرارية الأعمال التامة.',
      icon: Cloud,
      mechanisms: [
        'Multi-availability zone active-active replication',
        'Decoupled microservices & dynamic container fabrics',
        'Predictable operational spending & automated scaling',
      ],
      mechanismsAr: [
        'مزامنة نشطة متزامنة عبر مناطق متعددة التوافر',
        'خدمات مصغرة مستقلة ونسيج حاويات مرن',
        'نفقات تشغيلية مدروسة وتوسع تلقائي ذكي',
      ],
    },
    {
      id: 'infrastructure',
      num: '03',
      title: 'Digital Infrastructure',
      titleAr: 'البنية التحتية الرقمية',
      concept: 'BACKBONE',
      conceptAr: 'العمود الفقري والربط الفيزيائي',
      headline: 'High-throughput optical backbones and engineered switching fabrics.',
      headlineAr: 'عمود فقري ضوئي عالي السعة ومحولات بيانات مؤسسية فائقة السرعة.',
      description:
        'The distributed signal resolves into an unbroken, structured physical backbone. Redundant single-mode optical fiber conduits, non-blocking spine-leaf switching, and real-time environmental telemetry guarantee the physical reliability of every digital layer.',
      descriptionAr:
        'تستقر الإشارة الموزعة في عمود فقري فيزيائي متين. تضمن مسارات الألياف الضوئية المزدوجة ومحولات Spine-Leaf والمراقبة اللحظية للخطوط سلامة الأساس الفيزيائي لكافة الطبقات الرقمية.',
      icon: Server,
      mechanisms: [
        'Dual-conduit single-mode optical fiber backbones',
        'Non-blocking carrier switching & EVPN-VXLAN overlays',
        'Continuous link health & proactive packet loss auditing',
      ],
      mechanismsAr: [
        'مسارات ألياف ضوئية مزدوجة ومعتمدة',
        'محولات شبكية متقدمة مع شبكات تراكبية مشفرة',
        'مراقبة مستمرة لصحة الخطوط واكتشاف فقدان الحزم مبكراً',
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

              {activeFingerprint === 0 && (
                <svg className="w-full h-full" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20" y1="80" x2="380" y2="80" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                  <rect x="180" y="20" width="160" height="120" rx="6" fill="rgba(107,33,168,0.15)" stroke="#9333EA" strokeWidth="2" strokeDasharray="6 3" />
                  <rect x="174" y="65" width="12" height="30" rx="2" fill="#9333EA" stroke="#C084FC" strokeWidth="1" />
                  <text x="260" y="130" fill="#C084FC" fontSize="10" fontFamily="monospace" textAnchor="middle">ZERO TRUST PERIMETER</text>
                  <path d="M 30 80 L 174 80" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="174" cy="80" r="4" fill="#FF7A00" />
                  <path d="M 186 80 L 320 80" stroke="#FF7A00" strokeWidth="2.5" strokeDasharray="4 2" />
                  <circle cx="280" cy="80" r="3" fill="#A855F7" />
                  <circle cx="320" cy="80" r="4" fill="#10B981" />
                </svg>
              )}

              {activeFingerprint === 1 && (
                <svg className="w-full h-full" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="120" y="60" width="40" height="40" rx="4" fill="#151D32" stroke="#FF7A00" strokeWidth="1.5" />
                  <text x="140" y="84" fill="#FF7A00" fontSize="9" fontFamily="monospace" textAnchor="middle">HUB</text>
                  <path d="M 20 80 L 120 80" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 160 80 L 220 40 L 320 40" stroke="#FF7A00" strokeWidth="2" />
                  <path d="M 160 80 L 220 80 L 320 80" stroke="#FF7A00" strokeWidth="2" />
                  <path d="M 160 80 L 220 120 L 320 120" stroke="#FF7A00" strokeWidth="2" />
                  <circle cx="320" cy="40" r="6" fill="#151D32" stroke="#FF7A00" strokeWidth="2" />
                  <circle cx="320" cy="80" r="6" fill="#151D32" stroke="#FF7A00" strokeWidth="2" />
                  <circle cx="320" cy="120" r="6" fill="#151D32" stroke="#FF7A00" strokeWidth="2" />
                  <text x="335" y="44" fill="#CBD5E1" fontSize="9" fontFamily="monospace">ZONE-A</text>
                  <text x="335" y="84" fill="#CBD5E1" fontSize="9" fontFamily="monospace">ZONE-B</text>
                  <text x="335" y="124" fill="#CBD5E1" fontSize="9" fontFamily="monospace">ZONE-C</text>
                </svg>
              )}

              {activeFingerprint === 2 && (
                <svg className="w-full h-full" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="30" y1="80" x2="370" y2="80" stroke="#FF7A00" strokeWidth="4" strokeLinecap="round" />
                  <line x1="30" y1="88" x2="370" y2="88" stroke="#9333EA" strokeWidth="1.5" strokeDasharray="3 3" />
                  <rect x="80" y="45" width="24" height="70" rx="2" fill="#0D1326" stroke="#94A3B8" strokeWidth="1.5" />
                  <rect x="180" y="45" width="24" height="70" rx="2" fill="#0D1326" stroke="#94A3B8" strokeWidth="1.5" />
                  <rect x="280" y="45" width="24" height="70" rx="2" fill="#0D1326" stroke="#94A3B8" strokeWidth="1.5" />
                  <text x="92" y="35" fill="#94A3B8" fontSize="8" fontFamily="monospace" textAnchor="middle">NODE-1</text>
                  <text x="192" y="35" fill="#94A3B8" fontSize="8" fontFamily="monospace" textAnchor="middle">NODE-2</text>
                  <text x="292" y="35" fill="#94A3B8" fontSize="8" fontFamily="monospace" textAnchor="middle">NODE-3</text>
                  <text x="200" y="145" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle">OPTICAL FIBER BACKBONE &amp; STRUCTURED CABLING</text>
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
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
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
