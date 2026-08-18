'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import SectionMarker from '@/components/ui/SectionMarker';
import HeroTopologyCanvas from '@/components/diagrams/HeroTopologyCanvas';
import { ShieldCheck, CloudCog, Server, Code2, ShieldAlert, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const { language, t, isRTL } = useLanguage();

  const corePillars = [
    { name: 'Cybersecurity', nameAr: 'الأمن السيبراني', href: '/solutions#cybersecurity', icon: ShieldAlert },
    { name: 'Cloud Computing', nameAr: 'الحوسبة السحابية', href: '/solutions#cloud', icon: CloudCog },
    { name: 'Digital Infrastructure', nameAr: 'البنية التحتية الرقمية', href: '/solutions#infrastructure', icon: Server },
  ];

  const ArrowIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#080D1A] overflow-hidden text-slate-100 border-b border-white/10 bg-grid-architectural">
      {/* Restrained Architectural Gradient Accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-950/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-950/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetric 2-Column Hero Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (Approx 44% - lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left rtl:text-right">
            <SectionMarker
              label={t.hero.badge}
              variant="orange"
              className="mb-5"
            />

            {/* Signature Architectural Triad */}
            <div className="font-['Space_Grotesk',sans-serif] font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white uppercase mb-4">
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
            </div>

            {/* Core Mission Title & Subtitle (Exact Verbatim Copy) */}
            <h1 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight leading-snug">
              {t.hero.title}
            </h1>

            <p className="mt-2 text-xs sm:text-sm font-mono text-purple-300 tracking-wide uppercase">
              {t.hero.subtitle}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-lg">
              {t.hero.description}
            </p>

            {/* Action CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Button href="/solutions" variant="primary" size="md" withArrow>
                {t.nav.exploreCapabilities}
              </Button>
              <Button href="/contact" variant="secondary" size="md">
                {t.nav.talkToExpert}
              </Button>
            </div>
          </div>

          {/* Right Column (Approx 56% - lg:col-span-7) */}
          <div className="lg:col-span-7 w-full">
            <HeroTopologyCanvas />
          </div>
        </div>

        {/* Sub-Hero Capability Architecture Rail - 3 Primary Pillars */}
        <div className="mt-14 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-3">
          {corePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={pillar.name}
                href={pillar.href}
                className="flex items-center justify-between p-3 rounded-md bg-[#0D1326] border border-white/10 hover:border-orange-500/50 hover:bg-[#11182B] transition-all group"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/20 transition-colors shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors truncate">
                    {language === 'ar' ? pillar.nameAr : pillar.name}
                  </span>
                </div>
                <ArrowIcon className="w-4 h-4 text-slate-500 group-hover:text-orange-400 shrink-0 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

