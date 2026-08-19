'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UptLogo from '@/components/logo/UptLogo';
import { MAIN_NAVIGATION } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import {
  Globe,
  Menu,
  X,
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for transition from transparent to solid navy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const isLightPage = pathname === '/partners';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isLightPage
          ? 'bg-[#080D1A]/95 backdrop-blur-md border-b border-white/10 shadow-md py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Restrained & Crisp */}
          <div className="shrink-0 flex items-center">
            <UptLogo variant="horizontal" size="sm" withTagline={false} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {MAIN_NAVIGATION.map((item) => {
              const isCurrent = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                    isCurrent
                      ? 'text-orange-400 font-semibold bg-white/5'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {language === 'ar' ? item.nameAr : item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar (Language Switcher & Primary CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-orange-400" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Primary Talk to an Expert CTA */}
            <Button href="/contact" size="sm" variant="primary" withArrow>
              {t.nav.talkToExpert}
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono text-slate-300 bg-white/5 border border-white/10"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-orange-400" />
              <span>{language === 'en' ? 'AR' : 'EN'}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-[#080D1A]/98 backdrop-blur-xl border-t border-white/10 overflow-y-auto p-6 z-40">
          <div className="flex flex-col gap-3 pb-8">
            {MAIN_NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-base font-semibold text-slate-200 hover:text-orange-400 border-b border-white/5"
              >
                {language === 'ar' ? item.nameAr : item.name}
              </Link>
            ))}

            <div className="pt-6 mt-2">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
                withArrow
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.talkToExpert}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

