'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import SectionHeader from '@/components/ui/SectionHeader';
import { SOLUTIONS_DATA } from '@/lib/data/solutionsData';
import {
  ShieldCheck,
  CloudCog,
  Server,
  Code2,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CapabilitiesSection() {
  const { language, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('cybersecurity');

  const solutionList = Object.values(SOLUTIONS_DATA);
  const activeSolution = SOLUTIONS_DATA[activeTab] || solutionList[0];

  const icons: Record<string, any> = {
    cybersecurity: ShieldCheck,
    cloud: CloudCog,
    infrastructure: Server,
    applications: Code2,
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 sm:py-28 bg-[#080D1A] text-slate-100 border-b border-white/10 relative bg-grid-architectural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="01"
          eyebrow={language === 'ar' ? 'القدرات الهندسية الأساسية' : 'CORE ENTERPRISE CAPABILITIES'}
          title={
            language === 'ar'
              ? 'أربع ركائز هندسية متكاملة لبيئات العمل الحرجة'
              : 'Four Integrated Engineering Pillars for Mission-Critical Environments'
          }
          subtitle={
            language === 'ar'
              ? 'نجمع بين معمارية الأمن السيبراني، الحوسبة السحابية، البنية التحتية، وتحديث التطبيقات في إطار تشغيلي واحد.'
              : 'Bringing architecture, deep integration, proactive cybersecurity, and continuous operational rigor into a cohesive technology framework.'
          }
          align="split"
          badgeVariant="orange"
        />

        {/* 4 Enterprise Capability Layer Rails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {solutionList.map((sol, idx) => {
            const isSelected = activeTab === sol.id;
            const Icon = icons[sol.id] || ShieldCheck;
            const stepNum = `0${idx + 1}`;

            return (
              <button
                key={sol.id}
                type="button"
                onClick={() => setActiveTab(sol.id)}
                className={`p-4 rounded-md border text-left rtl:text-right transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                  isSelected
                    ? 'bg-[#151D32] border-orange-500 shadow-md text-white'
                    : 'bg-[#0D1326] border-white/10 text-slate-400 hover:border-purple-400/50 hover:bg-[#11182B] hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-orange-400' : 'text-slate-500'}`}>
                    {stepNum}
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
                  {language === 'ar' ? sol.titleAr : sol.title}
                </div>

                <div className="text-[11px] font-mono text-slate-400 truncate">
                  {language === 'ar' ? sol.taglineAr : sol.tagline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Capability Deep-Dive Showcase */}
        <div className="bg-[#0D1326] border border-white/15 rounded-lg p-6 sm:p-9 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Pillar Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                  {language === 'ar' ? activeSolution.taglineAr : activeSolution.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 font-['Space_Grotesk',sans-serif]">
                  {language === 'ar' ? activeSolution.headlineAr : activeSolution.headline}
                </h3>
              </div>

              <Button
                href={`/solutions/${activeSolution.slug}`}
                variant="outline"
                size="sm"
                withArrow
                className="shrink-0"
              >
                {language === 'ar' ? 'الصفحة المخصصة للحل' : 'Deep-Dive Solution Page'}
              </Button>
            </div>

            {/* Overview & Approach */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-5">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {language === 'ar' ? activeSolution.overviewAr : activeSolution.overview}
                </p>

                <div className="p-4 rounded-md bg-[#11182B] border border-white/10">
                  <div className="text-xs font-mono uppercase text-orange-400 font-bold mb-1.5 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'المنهجية المعمارية' : 'Architectural Approach'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {language === 'ar' ? activeSolution.architectureApproachAr : activeSolution.architectureApproach}
                  </p>
                </div>
              </div>

              {/* Strategic Value Outcomes */}
              <div className="lg:col-span-5 bg-[#11182B] p-5 rounded-md border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider font-bold mb-3">
                    {language === 'ar' ? 'القيمة الاستراتيجية للمؤسسة:' : 'Strategic Enterprise Value:'}
                  </div>
                  <ul className="space-y-2.5">
                    {(language === 'ar' ? activeSolution.strategicValueAr : activeSolution.strategicValue).map(
                      (val, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{val}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Specialized Capability Areas */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider font-bold mb-4">
                {language === 'ar' ? 'القدرات الفرعية والتخصصية:' : 'Specialized Capability Areas:'}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {activeSolution.capabilities.map((cap) => (
                  <div
                    key={cap.title}
                    className="p-4 rounded-md bg-[#090E1D] border border-white/10 hover:border-orange-500/40 transition-colors"
                  >
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-1.5">
                      {language === 'ar' ? cap.titleAr : cap.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      {language === 'ar' ? cap.descriptionAr : cap.description}
                    </p>

                    {cap.tags && (
                      <div className="flex flex-wrap gap-1 mt-auto">
                        {cap.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/5 text-slate-300 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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

