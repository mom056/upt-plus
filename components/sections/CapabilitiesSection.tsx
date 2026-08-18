'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import SectionHeader from '@/components/ui/SectionHeader';
import { ShieldCheck, CloudCog, Server, CheckCircle2, Layers, ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CapabilitiesSection() {
  const { language, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('cybersecurity');
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const corePillars = [
    {
      id: 'cybersecurity',
      num: '01',
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
      icon: ShieldCheck,
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
        'Elimination of single-point-of-failure vulnerabilities across critical workloads',
        'Protection of corporate data assets and application transactions',
        'Minimized risk of unplanned operational disruptions from cyber incidents',
      ],
      outcomesAr: [
        'القضاء على نقاط الضعف الفردية عبر أحمال العمل الحيوية',
        'حماية أصول البيانات المؤسسية والمعاملات التطبيقية الحساسة',
        'تقليص مخاطر التوقف غير المخطط الناتج عن الحوادث السيبرانية',
      ],
    },
    {
      id: 'cloud',
      num: '02',
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
      icon: CloudCog,
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
      icon: Server,
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
          desc: 'Organized, certified optical fiber installations and physical pathways engineered for high-throughput connectivity.',
          descAr: 'تمديدات منظمة ومعتمدة للألياف الضوئية والكوابل الهيكلية المصممة لدعم سرعات النقل العالية.',
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
    <section className="py-20 sm:py-28 bg-[#080D1A] text-slate-100 border-b border-white/10 relative bg-grid-architectural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="02"
          eyebrow={language === 'ar' ? 'مجالات العمل والقدرات' : 'WHAT WE DO'}
          title={
            language === 'ar'
              ? 'الأمن السيبراني والحوسبة السحابية للمؤسسات'
              : 'Cybersecurity & Cloud Computing for Modern Enterprise'
          }
          subtitle={
            language === 'ar'
              ? 'نركز على هندسة الأمن السيبراني والحوسبة السحابية كركيزتين أساسيتين، مدعومتين ببنية تحتية رقمية متينة لضمان الصمود التشغيلي.'
              : 'Focused architectural engineering centered on Cybersecurity and Cloud Computing, supported by resilient Digital Infrastructure.'
          }
          align="split"
          badgeVariant="orange"
        />

        {/* 3 Primary Rails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
          {corePillars.map((pillar) => {
            const isSelected = activeTab === pillar.id;
            const Icon = pillar.icon;

            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActiveTab(pillar.id)}
                className={`p-4 rounded-md border text-left rtl:text-right transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                  isSelected
                    ? 'bg-[#151D32] border-orange-500 shadow-md text-white'
                    : 'bg-[#0D1326] border-white/10 text-slate-400 hover:border-purple-400/50 hover:bg-[#11182B] hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-orange-400' : 'text-slate-500'}`}>
                    {pillar.num}
                  </span>
                  <div
                    className={`w-7 h-7 rounded flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-orange-500/20 text-orange-400' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-sm font-bold text-slate-100 mb-1 truncate">
                  {language === 'ar' ? pillar.titleAr : pillar.title}
                </div>

                <div className="text-[11px] font-mono text-slate-400 truncate">
                  {language === 'ar' ? pillar.taglineAr : pillar.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Capability Deep-Dive Showcase */}
        <div className="bg-[#0D1326] border border-white/15 rounded-lg p-6 sm:p-9 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            {/* Pillar Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-500">{activePillar.num}</span>
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                    {language === 'ar' ? activePillar.taglineAr : activePillar.tagline}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mt-1 font-['Space_Grotesk',sans-serif]">
                  {language === 'ar' ? activePillar.headlineAr : activePillar.headline}
                </h3>
              </div>

              <Button href="/solutions" variant="outline" size="sm" withArrow className="shrink-0">
                {language === 'ar' ? 'استعراض صفحة الحلول' : 'View Full Solutions'}
              </Button>
            </div>

            {/* Overview & Strategic Outcomes */}
            <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {language === 'ar' ? activePillar.overviewAr : activePillar.overview}
                </p>

                {/* Capabilities grid */}
                <div className="space-y-2.5 pt-2">
                  {activePillar.capabilities.map((cap) => (
                    <div key={cap.name} className="p-3 rounded bg-[#11182B] border border-white/10 text-xs">
                      <div className="font-bold text-white mb-0.5">
                        {language === 'ar' ? cap.nameAr : cap.name}
                      </div>
                      <div className="text-slate-400 leading-relaxed">
                        {language === 'ar' ? cap.descAr : cap.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Value Outcomes */}
              <div className="lg:col-span-5 bg-[#11182B] p-5 rounded-md border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider font-bold mb-3">
                    {language === 'ar' ? 'الأثر الاستراتيجي للمؤسسة:' : 'Strategic Enterprise Value:'}
                  </div>
                  <ul className="space-y-2.5">
                    {(language === 'ar' ? activePillar.outcomesAr : activePillar.outcomes).map((val, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{val}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Button href="/contact" variant="primary" size="sm" withArrow className="w-full justify-center">
                    {language === 'ar' ? 'استشر مهندسينا' : 'Consult Our Architects'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


