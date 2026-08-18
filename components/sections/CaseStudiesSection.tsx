'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import SectionHeader from '@/components/ui/SectionHeader';
import { CASE_STUDIES_DATA } from '@/lib/data/projectsData';
import Button from '@/components/ui/Button';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function CaseStudiesSection() {
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 sm:py-28 bg-[#080D1A] text-slate-100 border-b border-white/10 relative bg-grid-architectural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
          <SectionHeader
            sectionNumber="06"
            eyebrow={language === 'ar' ? 'المشاريع والدراسات الهندسية' : 'REPRESENTATIVE ARCHITECTURES'}
            title={
              language === 'ar'
                ? 'دراسات معمارية ونماذج تنفيذ للمؤسسات'
                : 'Architectural Blueprints & Engineering References'
            }
            subtitle={
              language === 'ar'
                ? 'نماذج موثقة توضح كيفية حل التحديات المعقدة في بيئات المعاملات المصرفية، التجارة السريعة، وشبكات الاتصالات.'
                : 'Documented engineering references illustrating how UPT PLUS resolves complex operational, security, and throughput challenges.'
            }
            badgeVariant="orange"
            className="mb-0 max-w-2xl"
          />

          <Button href="/projects" variant="secondary" size="md" withArrow className="shrink-0">
            {language === 'ar' ? 'استعراض كافة الدراسات' : 'View All Projects'}
          </Button>
        </div>

        {/* 2-Column High-Impact Engineering Case Files */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CASE_STUDIES_DATA.slice(0, 2).map((study) => (
            <div
              key={study.id}
              className="bg-[#0D1326] rounded-md p-6 sm:p-8 border border-white/10 hover:border-orange-500/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Category & Badge Header */}
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                    {language === 'ar' ? study.categoryAr : study.category}
                  </span>

                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                    {language === 'ar' ? 'معمارية مرجعية' : study.badgeType}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-orange-300 transition-colors font-['Space_Grotesk',sans-serif]">
                  {language === 'ar' ? study.titleAr : study.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                  {language === 'ar' ? study.summaryAr : study.summary}
                </p>

                {/* Challenge & Solution Snippets */}
                <div className="space-y-3 pt-3.5 border-t border-white/10 mb-5">
                  <div className="text-xs">
                    <span className="font-mono uppercase text-slate-400 font-bold">
                      {language === 'ar' ? 'التحدي: ' : 'The Challenge: '}
                    </span>
                    <span className="text-slate-300">
                      {language === 'ar' ? study.challengeAr : study.challenge}
                    </span>
                  </div>

                  <div className="text-xs">
                    <span className="font-mono uppercase text-orange-400 font-bold">
                      {language === 'ar' ? 'الحل المعماري: ' : 'Architecture: '}
                    </span>
                    <span className="text-slate-300">
                      {language === 'ar' ? study.solutionAr : study.solution}
                    </span>
                  </div>
                </div>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-3.5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'تم التحقق المعماري' : 'Architecturally Verified'}</span>
                </span>

                <Link
                  href={`/projects/${study.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 group-hover:text-orange-300 transition-colors"
                >
                  <span>{language === 'ar' ? 'التفاصيل الهندسية الكاملة' : 'Full Architecture Breakdown'}</span>
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

