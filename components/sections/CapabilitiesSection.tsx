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
  ExternalLink,
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
    <section className="py-20 sm:py-28 bg-[#080D1A] text-slate-100 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
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
          badgeVariant="orange"
        />

        {/* 4 Pillar Tab Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {solutionList.map((sol) => {
            const isSelected = activeTab === sol.id;
            const Icon = icons[sol.id] || ShieldCheck;

            return (
              <button
                key={sol.id}
                type="button"
                onClick={() => setActiveTab(sol.id)}
                className={`flex items-center gap-3 p-4 rounded-xl border text-left rtl:text-right transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                  isSelected
                    ? 'bg-[#151D32] border-orange-500 shadow-lg text-white'
                    : 'bg-[#0E1527] border-white/10 text-slate-400 hover:border-purple-400/50 hover:bg-[#11182B] hover:text-slate-200'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isSelected ? 'bg-orange-500/20 text-orange-400' : 'bg-white/5 text-slate-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-100">
                    {language === 'ar' ? sol.titleAr : sol.title}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 truncate hidden sm:block">
                    {language === 'ar' ? 'استعراض الركيزة' : 'Inspect Pillar'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Capability Deep-Dive Showcase */}
        <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Pillar Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                  {language === 'ar' ? activeSolution.taglineAr : activeSolution.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-1 font-['Space_Grotesk',sans-serif]">
                  {language === 'ar' ? activeSolution.headlineAr : activeSolution.headline}
                </h3>
              </div>

              <Button
                href={`/solutions/${activeSolution.slug}`}
                variant="outline"
                size="md"
                withArrow
                className="shrink-0"
              >
                {language === 'ar' ? 'الصفحة المخصصة للحل' : 'Deep-Dive Solution Page'}
              </Button>
            </div>

            {/* Overview & Approach */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {language === 'ar' ? activeSolution.overviewAr : activeSolution.overview}
                </p>
                <div className="p-4 rounded-lg bg-[#11182B] border border-white/10">
                  <div className="text-xs font-mono uppercase text-orange-400 font-bold mb-1">
                    {language === 'ar' ? 'المنهجية المعمارية' : 'Architectural Approach'}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {language === 'ar' ? activeSolution.architectureApproachAr : activeSolution.architectureApproach}
                  </p>
                </div>
              </div>

              {/* Strategic Value Outcomes */}
              <div className="bg-[#11182B] p-6 rounded-xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider font-bold mb-4">
                    {language === 'ar' ? 'القيمة الاستراتيجية للمؤسسة:' : 'Strategic Enterprise Value:'}
                  </div>
                  <ul className="space-y-3">
                    {(language === 'ar' ? activeSolution.strategicValueAr : activeSolution.strategicValue).map(
                      (val, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{val}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Capabilities Grid (6 items) */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="text-xs font-mono uppercase text-slate-400 tracking-wider font-bold mb-6">
                {language === 'ar' ? 'القدرات الفرعية والتخصصية:' : 'Specialized Capability Areas:'}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeSolution.capabilities.map((cap, cIdx) => (
                  <div
                    key={cap.title}
                    className="p-5 rounded-xl bg-[#0E1527] border border-white/10 hover:border-orange-500/40 transition-colors"
                  >
                    <h4 className="text-sm font-bold text-white mb-2">
                      {language === 'ar' ? cap.titleAr : cap.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {language === 'ar' ? cap.descriptionAr : cap.description}
                    </p>

                    {cap.tags && (
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {cap.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"
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
