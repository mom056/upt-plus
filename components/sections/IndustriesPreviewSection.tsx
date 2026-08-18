'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import SectionHeader from '@/components/ui/SectionHeader';
import { INDUSTRIES_DATA } from '@/lib/data/industriesData';
import {
  Landmark,
  Radio,
  ShoppingBag,
  ShieldAlert,
  Activity,
  Factory,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';
import Button from '@/components/ui/Button';

export default function IndustriesPreviewSection() {
  const { language, isRTL } = useLanguage();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('financial-services');

  const industriesList = Object.values(INDUSTRIES_DATA);
  const activeIndustry = INDUSTRIES_DATA[selectedIndustry] || industriesList[0];

  const iconMap: Record<string, any> = {
    'financial-services': Landmark,
    telecom: Radio,
    retail: ShoppingBag,
    government: ShieldAlert,
    healthcare: Activity,
    manufacturing: Factory,
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 sm:py-28 bg-[#F7F8FA] text-[#101827] border-b border-slate-200 bg-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="05"
          eyebrow={language === 'ar' ? 'القطاعات التخصصية' : 'INDUSTRY EXPERTISE'}
          title={
            language === 'ar'
              ? 'حلول معمارية مصممة للتحديات الدقيقة لكل قطاع'
              : 'Architectures Tailored to Critical Industry Demands'
          }
          subtitle={
            language === 'ar'
              ? 'تتطلب القطاعات الحيوية معايير دقيقة للتوافر، الأمان، والامتثال التنظيمي. نهندس الحلول وفق المخاطر المحددة لكل مجال.'
              : 'Mission-critical industries require sector-specific engineering. We design systems addressing distinct regulatory, availability, and threat profiles.'
          }
          align="split"
          badgeVariant="purple"
          isLightSection={true}
        />

        {/* Industry Selector Rail */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-7">
          {industriesList.map((ind) => {
            const isSelected = selectedIndustry === ind.id;
            const Icon = iconMap[ind.id] || Landmark;

            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustry(ind.id)}
                className={`p-3 rounded-md border text-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                  isSelected
                    ? 'bg-white border-orange-500 shadow-md text-[#0D1326]'
                    : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded mx-auto flex items-center justify-center mb-1.5 transition-colors ${
                    isSelected ? 'bg-orange-500/10 text-orange-600' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold truncate">
                  {language === 'ar' ? ind.nameAr : ind.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Industry Deep-Dive Panel */}
        <div className="bg-white rounded-md p-6 sm:p-9 border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                {language === 'ar' ? activeIndustry.taglineAr : activeIndustry.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0D1326] mt-1 font-['Space_Grotesk',sans-serif]">
                {language === 'ar' ? activeIndustry.nameAr : activeIndustry.name}
              </h3>
            </div>

            <Button
              href={`/industries/${activeIndustry.slug}`}
              variant="outline"
              size="sm"
              withArrow
              className="text-slate-800 border-slate-300 hover:bg-slate-50 shrink-0"
            >
              {language === 'ar' ? 'استعراض صفحة القطاع' : 'Explore Industry Architecture'}
            </Button>
          </div>

          <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
            {language === 'ar' ? activeIndustry.heroSummaryAr : activeIndustry.heroSummary}
          </p>

          {/* Challenges vs Architectures Columns */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
            {/* Domain Challenges */}
            <div>
              <div className="text-xs font-mono uppercase text-slate-500 font-bold tracking-wider mb-4">
                {language === 'ar' ? 'التحديات والمخاطر التقنية:' : 'Critical Sector Challenges:'}
              </div>
              <div className="space-y-3">
                {activeIndustry.challenges.map((c, cIdx) => (
                  <div key={cIdx} className="p-3.5 rounded bg-slate-50 border border-slate-200/70">
                    <h4 className="text-xs font-bold text-slate-900 mb-1">
                      {language === 'ar' ? c.titleAr : c.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {language === 'ar' ? c.descriptionAr : c.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Solutions */}
            <div>
              <div className="text-xs font-mono uppercase text-orange-700 font-bold tracking-wider mb-4">
                {language === 'ar' ? 'المعمارية الهندسية المقترحة:' : 'Architectural Approach:'}
              </div>
              <div className="space-y-3">
                {activeIndustry.solutions.map((s, sIdx) => (
                  <div key={sIdx} className="p-3.5 rounded bg-orange-50/40 border border-orange-200/60">
                    <h4 className="text-xs font-bold text-orange-950 mb-1">
                      {language === 'ar' ? s.titleAr : s.title}
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {language === 'ar' ? s.descriptionAr : s.description}
                    </p>
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

