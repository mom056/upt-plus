'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import UptLogo from '@/components/logo/UptLogo';
import { ArrowLeft, ArrowRight, Globe } from 'lucide-react';

export default function DesignLabNav() {
  const { language, setLanguage, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowRight : ArrowLeft;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080D1A]/95 backdrop-blur-md border-b border-white/10 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/" className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded" aria-label="UPT Plus Home">
            <UptLogo size="sm" withTagline={false} />
          </Link>
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-orange-400">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="font-bold tracking-wider">LAB / GATE-01: THE UPT SIGNAL</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-orange-400" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>

          <Link
            href="/"
            className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <ArrowIcon className="w-3.5 h-3.5 text-orange-400 group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5 transition-transform" />
            <span>{language === 'ar' ? 'الموقع الرئيسي' : 'Standard Site'}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
