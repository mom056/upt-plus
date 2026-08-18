'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import SectionHeader from '@/components/ui/SectionHeader';
import EdgeToEnterpriseDiagram from '@/components/diagrams/EdgeToEnterpriseDiagram';

export default function EdgeToEnterpriseSection() {
  const { language } = useLanguage();

  return (
    <section className="py-14 sm:py-24 bg-[#050811] text-slate-100 border-b border-white/10 relative bg-grid-architectural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="03"
          eyebrow={language === 'ar' ? 'التكامل المعماري المترابط' : 'ARCHITECTURAL INTEGRATION'}
          title={
            language === 'ar'
              ? 'النسيج المتكامل: من حافة المستخدم إلى صميم المؤسسة'
              : 'The Unified Fabric: From Edge to Enterprise'
          }
          subtitle={
            language === 'ar'
              ? 'تعتبر UPT PLUS طبقة التكامل والأمان والتشغيل المستمر عبر كافة مفاصل البيئة الرقمية الحديثة.'
              : 'UPT PLUS serves as the strategic integration, security, and operational engineering layer bridging distributed endpoints to core enterprise systems.'
          }
          align="split"
          badgeVariant="purple"
        />

        <EdgeToEnterpriseDiagram />
      </div>
    </section>
  );
}

