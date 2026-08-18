'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import HeroTopologyCanvas from '@/components/diagrams/HeroTopologyCanvas';
import { ShieldCheck, CloudCog, Server, Code2, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const { language, t, isRTL } = useLanguage();

  const corePillars = [
    { name: 'Cybersecurity', nameAr: 'الأمن السيبراني', href: '/solutions/cybersecurity', icon: ShieldAlert },
    { name: 'Cloud Computing', nameAr: 'الحوسبة السحابية', href: '/solutions/cloud', icon: CloudCog },
    { name: 'Digital Infrastructure', nameAr: 'البنية التحتية الرقمية', href: '/solutions/infrastructure', icon: Server },
    { name: 'Application Modernization', nameAr: 'تحديث التطبيقات', href: '/solutions/applications', icon: Code2 },
    { name: 'Managed Services', nameAr: 'الخدمات المدارة', href: '/managed-services', icon: ShieldCheck },
  ];

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#080D1A] overflow-hidden text-slate-100 border-b border-white/10">
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Atmospheric Glow Backdrops */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-950/25 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-[400px] h-[250px] bg-orange-950/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Architectural Hero Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Badge variant="orange" className="mb-6">
            {t.hero.badge}
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[1.08] text-white font-['Space_Grotesk',sans-serif]">
            {t.hero.title}
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-medium text-slate-200 tracking-tight">
            {t.hero.subtitle}
          </p>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            {t.hero.description}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Button href="/solutions" variant="primary" size="lg" withArrow>
              {t.nav.exploreCapabilities}
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              {t.nav.talkToExpert}
            </Button>
          </div>
        </div>

        {/* Technical Architecture Canvas Visualization */}
        <div className="mt-14 sm:mt-18">
          <HeroTopologyCanvas />
        </div>

        {/* Sub-Hero Capability Reinforcement Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-5 gap-3">
          {corePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={pillar.name}
                href={pillar.href}
                className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0E1527] border border-white/10 hover:border-orange-500/50 hover:bg-[#151D32] transition-all group"
              >
                <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center text-orange-400 group-hover:bg-orange-500/20 transition-colors shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors truncate">
                  {language === 'ar' ? pillar.nameAr : pillar.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
