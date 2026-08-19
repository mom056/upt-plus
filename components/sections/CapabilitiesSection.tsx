'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import SectionMarker from '@/components/ui/SectionMarker';
import Button from '@/components/ui/Button';

export default function CapabilitiesSection() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('cybersecurity');

  const corePillars = [
    {
      id: 'cybersecurity',
      num: '01',
      posture: 'BOUNDARY',
      postureAr: 'سياج الحماية',
      title: 'Cybersecurity',
      titleAr: 'الأمن السيبراني',
      tagline: 'Defensive Architecture & Zero Trust',
      taglineAr: 'معمارية دفاعية وبنية انعدام الثقة',
      headline: 'Defend complex environments with architecture-first security.',
      headlineAr: 'حماية البيئات المعقدة عبر معمارية أمنية متكاملة ترتكز على التصميم أولاً.',
      overview:
        'Full-lifecycle cybersecurity architectures engineered for resilient digital operations — embedding Zero Trust, identity-aware controls, API defense, and proactive telemetry directly into your cloud and infrastructure fabric.',
      overviewAr:
        'بنيات أمنية متكاملة ومصممة لدعم العمليات الرقمية الصامدة — عبر تضمين مبادئ انعدام الثقة (Zero Trust)، وضوابط الهوية، وحماية واجهات التطبيقات، والمراقبة الاستباقية مباشرة في النسيج السحابي والفيزيائي.',
      capabilities: [
        {
          name: 'Application & API Defense',
          nameAr: 'أمان التطبيقات وواجهات البرمجة (APIs)',
          desc: 'Deep inspection and shielding of modern web workloads and microservices against logic flaws and automated threats.',
          descAr: 'فحص وحماية عميقة لأحمال العمل الحديثة والخدمات المصغرة وواجهات البرمجة ضد الثغرات والتهديدات المؤتمتة.',
        },
        {
          name: 'Zero Trust & Access Architecture',
          nameAr: 'انعدام الثقة والوصول الآمن (Zero Trust)',
          desc: 'Identity-centric perimeterless access replacing vulnerable VPN topologies with context-aware access policies.',
          descAr: 'وصول آمن بدون حدود محيطية يعتمد على الهوية والسياق، مستبدلاً شبكات VPN التقليدية بسياسات وصول دقيقة.',
        },
        {
          name: 'Cloud Security & Posture Hardening',
          nameAr: 'أمان البنى السحابية والتحصين',
          desc: 'Hardening hybrid and multi-cloud environments, unified workload isolation, and configuration audits.',
          descAr: 'تحصين البيئات السحابية والهجينة، عزل أحمال العمل، وإدارة دورة حياة المفاتيح البرمجية وتدقيق التكوينات.',
        },
      ],
      outcomes: [
        'Reduction of single points of failure across critical workloads',
        'Protection of corporate data assets and application transactions',
        'Minimized risk of unplanned operational disruptions from cyber incidents',
      ],
      outcomesAr: [
        'تقليص نقاط الضعف الفردية عبر أحمال العمل الحيوية',
        'حماية أصول البيانات المؤسسية والمعاملات التطبيقية الحساسة',
        'تقليص مخاطر التوقف غير المخطط الناتج عن الحوادث السيبرانية',
      ],
    },
    {
      id: 'cloud',
      num: '02',
      posture: 'DISTRIBUTION',
      postureAr: 'التوزيع المتوازن',
      title: 'Cloud Computing',
      titleAr: 'الحوسبة السحابية',
      tagline: 'Distributed Fabric & High Availability',
      taglineAr: 'بنية موزعة وجاهزية تشغيلية فائقة',
      headline: 'Architect high-performance, resilient cloud foundations.',
      headlineAr: 'تصميم وبناء ركائز سحابية عالية الأداء ومصممة لتحمل أقصى متطلبات التشغيل.',
      overview:
        'Resilient, decoupled, and cost-effective digital operating foundations — from foundational multi-zone cloud architecture and structured migration to hybrid connectivity and container orchestration.',
      overviewAr:
        'تصميم أنظمة تشغيل رقمية مرنة وموزعة وعالية الفعالية — من المعمارية متعددة المناطق والترحيل المدروس، إلى الربط الهجين، إدارة الحاويات، والتحسين المستمر للأداء.',
      capabilities: [
        {
          name: 'Enterprise Cloud Architecture',
          nameAr: 'هندسة السحابة للمؤسسات',
          desc: 'Design of fault-tolerant, scalable VPC topologies, landing zones, and transit network routing.',
          descAr: 'تصميم طوبولوجيا الشبكات السحابية، مناطق الهبوط المؤسسية (Landing Zones)، وهياكل الصلاحيات للمؤسسات الكبرى.',
        },
        {
          name: 'Cloud Migration & Modernization',
          nameAr: 'الترحيل والتحديث السحابي',
          desc: 'Structured migration methodologies ensuring minimal business downtime and complete workload compatibility.',
          descAr: 'منهجيات ترحيل مدروسة لضمان نقل الأنظمة وتحديث التطبيقات القديمة بأقل فترة توقف وتوافق تشغيلي تام.',
        },
        {
          name: 'Hybrid & Multi-Cloud Connectivity',
          nameAr: 'السحابة الهجينة والربط المتعدد',
          desc: 'Low-latency, secure interconnects between on-premises data centers and distributed cloud nodes.',
          descAr: 'ربط آمن ومنخفض الكمون بين مراكز البيانات المحلية والمنصات السحابية عبر خطوط مخصصة وشبكات مشفرة.',
        },
      ],
      outcomes: [
        'Elastic compute capacity scaling with enterprise operational demand',
        'Structured disaster recovery topologies minimizing business interruption',
        'Predictable operational spending through continuous architectural optimization',
      ],
      outcomesAr: [
        'مرونة حوسبية قابلة للتوسع مع تزايد متطلبات العمل التشغيلية',
        'هندسة متطورة للتعافي من الكوارث تقلص فترات انقطاع الخدمة',
        'نفقات تشغيلية مدروسة ومحسنة باستمرار عبر تصاميم معمارية دقيقة',
      ],
    },
    {
      id: 'infrastructure',
      num: '03',
      posture: 'BACKBONE',
      postureAr: 'العمود الفقري',
      title: 'Digital Infrastructure',
      titleAr: 'البنية التحتية الرقمية',
      tagline: 'Enterprise Physical & Network Foundation',
      taglineAr: 'الركيزة الفيزيائية والشبكية للمؤسسة',
      headline: 'Build rock-solid physical and logical infrastructure foundations.',
      headlineAr: 'تأسيس بنية تحتية فيزيائية ومنطقية فائقة الاعتمادية تشكل عصب العمليات الرقمية.',
      overview:
        'Supporting enterprise foundation — encompassing high-performance campus networking, structured cabling, optical fiber backbones, and datacenter connectivity enabling your cloud and security environments.',
      overviewAr:
        'الركيزة الأساسية الداعمة — تشمل شبكات المقار عالية الأداء، شبكات الكوابل الهيكلية، شبكات الألياف الضوئية، وربط مراكز البيانات لتمكين البيئات السحابية والأمنية.',
      capabilities: [
        {
          name: 'Enterprise Campus & Core Networking',
          nameAr: 'شبكات المقار والشبكات الأساسية للمؤسسات',
          desc: 'High-throughput core, distribution, and access layer architectures built on resilient switching fabrics.',
          descAr: 'معمارية شبكية أساسية وتوزيعية عالية السرعة تعتمد على محولات متطورة مع بروتوكولات تحويل سريعة.',
        },
        {
          name: 'Datacenter Interconnect & Cabling',
          nameAr: 'ربط مراكز البيانات والتمديدات',
          desc: 'Structured optical fiber backbones and engineered connectivity pathways designed for high-throughput operations.',
          descAr: 'تمديدات منظمة للألياف الضوئية ومسارات اتصال مهندسة لدعم سرعات النقل والعمليات العالية.',
        },
        {
          name: 'Infrastructure Health & Telemetry',
          nameAr: 'مراقبة صحة البنية التحتية',
          desc: 'Proactive network telemetry and link monitoring identifying transmission anomalies and packet loss early.',
          descAr: 'مراقبة مؤشرات الشبكة والتدفق للكشف المبكر عن فقدان الحزم وتدهور الخطوط لضمان الجاهزية.',
        },
      ],
      outcomes: [
        'Elimination of physical transmission bottlenecks across enterprise sites',
        'Standardized, well-documented cabling and switching topology for long-term maintainability',
        'Dependable physical backbone underpinning multi-cloud and security deployments',
      ],
      outcomesAr: [
        'إزالة اختناقات النقل الفيزيائية والمنطقية عبر كافة مقرات المؤسسة',
        'بنية شبكية وكوابل قياسية وموثقة بدقة مصممة للاستدامة وسهولة الصيانة',
        'عمود فقري فيزيائي متين يدعم استثمارات السحابة والأمن السيبراني',
      ],
    },
  ];

  const activePillar = corePillars.find((p) => p.id === activeTab) || corePillars[0];

  return (
    <section className="py-20 sm:py-28 bg-[#080D1A] text-slate-100 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionMarker
            number="02"
            label={language === 'ar' ? 'مجالات العمل والقدرات' : 'WHAT WE DO'}
            variant="orange"
            className="mb-4"
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk',sans-serif] tracking-tight uppercase">
            {language === 'ar'
              ? 'الأمن السيبراني والحوسبة السحابية للمؤسسات.'
              : 'Cybersecurity & Cloud Computing for Modern Enterprise.'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'ar'
              ? 'نركز على هندسة الأمن السيبراني والحوسبة السحابية كركيزتين أساسيتين، مدعومتين ببنية تحتية رقمية متينة لضمان الصمود التشغيلي.'
              : 'Focused architectural engineering centered on Cybersecurity and Cloud Computing, supported by resilient Digital Infrastructure.'}
          </p>
        </div>

        {/* 2-Column Architectural Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: 3 Architectural Posture Selectors */}
          <div className="lg:col-span-5 space-y-8">
            {corePillars.map((pillar) => {
              const isSelected = activeTab === pillar.id;

              return (
                <button
                  key={pillar.id}
                  id={'tab-' + pillar.id}
                  type="button"
                  onClick={() => setActiveTab(pillar.id)}
                  className="w-full text-left rtl:text-right focus:outline-none group cursor-pointer pb-6 border-b border-white/5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={'text-[10px] font-mono tracking-widest uppercase ' +
                      (isSelected ? 'text-orange-400 font-bold' : 'text-slate-500')}>
                      {pillar.num} • {language === 'ar' ? pillar.postureAr : pillar.posture}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                    )}
                  </div>

                  <h3 className={'text-xl sm:text-2xl font-bold font-["Space_Grotesk",sans-serif] transition-colors ' +
                    (isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200')}>
                    {language === 'ar' ? pillar.titleAr : pillar.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {language === 'ar' ? pillar.taglineAr : pillar.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Open Architectural Schematic */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Dedicated Architectural Canvas */}
            <div className="w-full aspect-[16/9] relative mb-6">
              {/* Top Datum Indicator */}
              <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[9px] font-mono text-slate-500 uppercase">
                <span>{activePillar.num} • {language === 'ar' ? activePillar.postureAr : activePillar.posture}</span>
                <span className="text-orange-400/80">ARCHITECTURAL SCHEMATIC</span>
              </div>

              {/* Vector Blueprint Graphic */}
              <div className="w-full h-[calc(100%-40px)] relative">
                <svg className="w-full h-full" viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Construction Datum Line */}
                  <line x1="10" y1="70" x2="390" y2="70" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                  {/* POSTURE 01: BOUNDARY (CYBERSECURITY) */}
                  {activeTab === 'cybersecurity' && (
                    <g className="transition-opacity duration-300">
                      <polygon
                        points="240,20 310,20 280,120 230,120"
                        fill="rgba(107,33,168,0.12)"
                        stroke="#9333EA"
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                      />
                      <line x1="235" y1="55" x2="235" y2="85" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="30" y1="70" x2="370" y2="70" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="235" cy="70" r="4" fill="#FF7A00" />
                      <circle cx="370" cy="70" r="3" fill="#FF7A00" />
                    </g>
                  )}

                  {/* POSTURE 02: DISTRIBUTION (CLOUD COMPUTING) */}
                  {activeTab === 'cloud' && (
                    <g className="transition-opacity duration-300">
                      <line x1="30" y1="70" x2="130" y2="70" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="130" cy="70" r="4" fill="#FF7A00" />

                      <path d="M 130 70 L 170 30 L 280 30 L 320 70" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />
                      <line x1="130" y1="70" x2="320" y2="70" stroke="#FF7A00" strokeWidth="2" />
                      <path d="M 130 70 L 170 110 L 280 110 L 320 70" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />

                      <circle cx="225" cy="30" r="3.5" fill="#FF7A00" />
                      <circle cx="225" cy="70" r="3.5" fill="#FF7A00" />
                      <circle cx="225" cy="110" r="3.5" fill="#FF7A00" />

                      <circle cx="320" cy="70" r="4" fill="#FF7A00" />
                      <line x1="320" y1="70" x2="370" y2="70" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="370" cy="70" r="3" fill="#FF7A00" />
                    </g>
                  )}

                  {/* POSTURE 03: BACKBONE (DIGITAL INFRASTRUCTURE) */}
                  {activeTab === 'infrastructure' && (
                    <g className="transition-opacity duration-300">
                      <line x1="30" y1="70" x2="370" y2="70" stroke="#FF7A00" strokeWidth="3" strokeLinecap="round" />
                      
                      <line x1="120" y1="35" x2="120" y2="105" stroke="#64748B" strokeWidth="1.5" />
                      <line x1="210" y1="35" x2="210" y2="105" stroke="#64748B" strokeWidth="1.5" />
                      <line x1="300" y1="35" x2="300" y2="105" stroke="#64748B" strokeWidth="1.5" />

                      <circle cx="120" cy="70" r="3.5" fill="#FF7A00" />
                      <circle cx="210" cy="70" r="3.5" fill="#FF7A00" />
                      <circle cx="300" cy="70" r="3.5" fill="#FF7A00" />
                      <circle cx="370" cy="70" r="3" fill="#FF7A00" />
                    </g>
                  )}
                </svg>
              </div>

              {/* Bottom Fabric Datum */}
              <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[9px] font-mono text-slate-600 uppercase">
                <span>{activePillar.posture} POSTURE</span>
                <span>UPT PLUS FABRIC</span>
              </div>
            </div>

            {/* Active Pillar Detailed Capabilities & Outcomes */}
            <div className="pt-6 border-t border-white/5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {language === 'ar' ? activePillar.headlineAr : activePillar.headline}
                </h4>
                <Button href={'/solutions#' + activePillar.id} variant="outline" size="sm" withArrow className="shrink-0 hidden sm:inline-flex">
                  {language === 'ar' ? 'استعراض الحلول' : 'View Solutions'}
                </Button>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {language === 'ar' ? activePillar.overviewAr : activePillar.overview}
              </p>

              {/* Specific Sub-Capabilities Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 pt-4 border-t border-white/5">
                {activePillar.capabilities.map((cap) => (
                  <div key={cap.name} className="flex flex-col">
                    <span className="text-xs font-bold text-slate-200 mb-1">
                      {language === 'ar' ? cap.nameAr : cap.name}
                    </span>
                    <span className="text-[11px] text-slate-400 leading-snug">
                      {language === 'ar' ? cap.descAr : cap.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Strategic Value Outcomes */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-300">
                <div className="space-y-1.5">
                  {(language === 'ar' ? activePillar.outcomesAr : activePillar.outcomes).map((val, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] shrink-0" />
                      <span>{val}</span>
                    </div>
                  ))}
                </div>
                <Button href="/contact" variant="primary" size="sm" withArrow className="shrink-0">
                  {language === 'ar' ? 'استشر مهندسينا' : 'Consult Our Architects'}
                </Button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
