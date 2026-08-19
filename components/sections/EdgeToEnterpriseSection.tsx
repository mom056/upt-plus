'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import SectionMarker from '@/components/ui/SectionMarker';
import EdgeToEnterpriseDiagram from '@/components/diagrams/EdgeToEnterpriseDiagram';

export default function EdgeToEnterpriseSection() {
  const { language } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#080D1A] text-slate-100 border-b border-white/5 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <SectionMarker
            number="03"
            label={language === 'ar' ? 'التكامل المعماري المترابط' : 'ARCHITECTURAL INTEGRATION'}
            variant="navy"
            className="mb-4"
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk',sans-serif] tracking-tight uppercase">
            {language === 'ar'
              ? 'من الحافة إلى صميم المؤسسة.'
              : 'From Edge to Enterprise.'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'ar'
              ? 'تسلسل معماري موحد يربط نقاط الدخول الموزعة عبر طبقات الأمان والتطبيقات والحوسبة وصولاً إلى العمود الفقري الفيزيائي.'
              : 'An unbroken engineering flow connecting distributed edge endpoints through security validation, application meshes, cloud clusters, and physical backbone infrastructure.'}
          </p>
        </div>

        {/* Transforming Architecture Diagram */}
        <EdgeToEnterpriseDiagram />

      </div>
    </section>
  );
}
