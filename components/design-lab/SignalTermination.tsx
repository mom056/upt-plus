'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';

export default function SignalTermination() {
  const { language } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#050811] text-slate-100 relative overflow-hidden border-t border-white/10 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/40 flex items-center justify-center text-orange-400 mb-6 shadow-lg shadow-orange-500/5">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </div>

        <div className="text-[11px] font-mono uppercase tracking-widest text-orange-400 font-bold mb-3">
          {language === 'ar' ? 'اكتمال المسار المعماري' : 'UPT / RESOLUTION'}
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk',sans-serif] tracking-tight uppercase leading-[1.1]">
          {language === 'ar' ? 'بنية تحتية تقنية مهيأة لمتطلبات المستقبل.' : 'Technology infrastructure built for what’s next.'}
        </h2>

        <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
          {language === 'ar'
            ? 'تساعد UPT Plus المؤسسات على بناء وتأمين وتحديث وتشغيل البيئات الرقمية التي تقود الأعمال الحديثة.'
            : 'UPT Plus helps organizations build, secure, modernize, and operate the digital environments behind modern business.'}
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="md" withArrow>
            {language === 'ar' ? 'تحدث مع خبير' : 'Talk to an Expert'}
          </Button>
        </div>

        <div className="mt-12 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
          UPT PLUS // CYBERSECURITY &amp; CLOUD COMPUTING
        </div>
      </div>
    </section>
  );
}
