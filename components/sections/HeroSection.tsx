'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import SectionMarker from '@/components/ui/SectionMarker';
import HeroTopologyCanvas from '@/components/diagrams/HeroTopologyCanvas';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function HeroSection() {
  const { language, t, isRTL } = useLanguage();

  const corePillars = [
    { num: '01', name: 'Cybersecurity', nameAr: 'الأمن السيبراني', posture: 'BOUNDARY', href: '/solutions#cybersecurity' },
    { num: '02', name: 'Cloud Computing', nameAr: 'الحوسبة السحابية', posture: 'DISTRIBUTION', href: '/solutions#cloud' },
    { num: '03', name: 'Digital Infrastructure', nameAr: 'البنية التحتية الرقمية', posture: 'BACKBONE', href: '/solutions#infrastructure' },
  ];

  const ArrowIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-28 bg-[#080D1A] overflow-hidden text-slate-100 border-b border-white/5">
      {/* Structural Construction Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetric 2-Column Hero Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Macro Typography & Mission */}
          <div className="lg:col-span-5 flex flex-col items-start text-left rtl:text-right">
            <SectionMarker
              label={t.hero.badge}
              variant="orange"
              className="mb-4 sm:mb-5"
            />

            {/* Signature Macro Triad (H1) */}
            <h1 className="font-['Space_Grotesk',sans-serif] font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white uppercase mb-3 sm:mb-4">
              {language === 'ar' ? (
                <>
                  <span className="block text-white">تأمين.</span>
                  <span className="block text-slate-200">توسع.</span>
                  <span className="block text-[#FF7A00]">أداء.</span>
                </>
              ) : (
                <>
                  <span className="block text-white">SECURE.</span>
                  <span className="block text-slate-200">SCALE.</span>
                  <span className="block text-[#FF7A00]">PERFORM.</span>
                </>
              )}
            </h1>

            {/* Core Mission Subtitle */}
            <p className="text-xs sm:text-sm font-mono text-purple-300 tracking-wide uppercase">
              {t.hero.subtitle}
            </p>

            {/* Supporting Description */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
              {t.hero.description}
            </p>

            {/* Action CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Button href="/solutions" variant="primary" size="md" withArrow>
                {t.nav.exploreCapabilities}
              </Button>
              <Button href="/contact" variant="secondary" size="md">
                {t.nav.talkToExpert}
              </Button>
            </div>
          </div>

          {/* Right Column: Open Architectural Topology Field */}
          <div className="lg:col-span-7 w-full mt-4 lg:mt-0">
            <HeroTopologyCanvas />
          </div>
        </div>

        {/* Sub-Hero Architecture Datum Strip */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((pillar) => (
            <Link
              key={pillar.name}
              href={pillar.href}
              className="flex items-center justify-between pb-2 border-b border-white/10 hover:border-orange-500/50 transition-colors group"
            >
              <div className="flex items-center gap-3 truncate">
                <span className="text-[10px] font-mono text-slate-500 group-hover:text-orange-400 transition-colors">
                  {pillar.num}
                </span>
                <span className="text-xs font-bold font-mono tracking-wider uppercase text-slate-300 group-hover:text-white transition-colors truncate">
                  {language === 'ar' ? pillar.nameAr : pillar.name}
                </span>
                <span className="text-[9px] font-mono text-purple-400/80 hidden sm:inline">
                  [{pillar.posture}]
                </span>
              </div>
              <ArrowIcon className="w-3.5 h-3.5 text-slate-500 group-hover:text-orange-400 shrink-0 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
