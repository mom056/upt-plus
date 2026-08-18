'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UptLogo from '@/components/logo/UptLogo';
import { MAIN_NAVIGATION, NavItem } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import {
  ChevronDown,
  Globe,
  Menu,
  X,
  ShieldCheck,
  CloudCog,
  Server,
  Code2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, isRTL, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

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

  // Close mobile menu on route change
  const closeMenus = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const solutionIcons: Record<string, any> = {
    '/solutions/cybersecurity': ShieldCheck,
    '/solutions/cloud': CloudCog,
    '/solutions/infrastructure': Server,
    '/solutions/applications': Code2,
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080D1A]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div className="shrink-0 flex items-center">
            <UptLogo variant="horizontal" size="md" withTagline={true} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {MAIN_NAVIGATION.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isCurrent = pathname === item.href || (item.children && item.children.some((c) => c.href === pathname));

              if (hasChildren) {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isCurrent
                          ? 'text-orange-400 font-semibold'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{language === 'ar' ? item.nameAr : item.name}</span>
                      <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 rtl:translate-x-1/2 pt-2 w-[520px] transition-all duration-200 ${
                        activeDropdown === item.name
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                      }`}
                    >
                      <div className="bg-[#0D1326] border border-white/15 rounded-xl shadow-2xl p-4 grid grid-cols-1 gap-2">
                        {item.children?.map((child) => {
                          const IconComp = solutionIcons[child.href] || ShieldCheck;
                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-[#151D32] transition-colors group/item"
                            >
                              <div className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-orange-400 group-hover/item:border-orange-500/50 group-hover/item:bg-orange-500/10 transition-colors shrink-0">
                                <IconComp className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-white group-hover/item:text-orange-400 transition-colors flex items-center gap-2">
                                  <span>{language === 'ar' ? child.nameAr : child.name}</span>
                                  <ArrowIcon className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-orange-400" />
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                                  {language === 'ar' ? child.descriptionAr : child.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isCurrent
                      ? 'text-orange-400 font-semibold'
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
          <div className="flex items-center gap-2 xl:hidden">
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
        <div className="xl:hidden fixed inset-0 top-[65px] bg-[#080D1A]/98 backdrop-blur-xl border-t border-white/10 overflow-y-auto p-6 z-40">
          <div className="flex flex-col gap-3 pb-8">
            {MAIN_NAVIGATION.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = mobileExpandedSection === item.name;

              if (hasChildren) {
                return (
                  <div key={item.name} className="border-b border-white/5 pb-2">
                    <button
                      type="button"
                      onClick={() => setMobileExpandedSection(isExpanded ? null : item.name)}
                      className="flex items-center justify-between w-full py-2.5 text-base font-semibold text-white text-left rtl:text-right"
                    >
                      <span>{language === 'ar' ? item.nameAr : item.name}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    {isExpanded && (
                      <div className="pl-4 rtl:pr-4 pr-0 rtl:pl-0 mt-2 space-y-2 border-l rtl:border-r rtl:border-l-0 border-white/10">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block py-2 text-sm text-slate-300 hover:text-orange-400"
                          >
                            {language === 'ar' ? child.nameAr : child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="py-2.5 text-base font-semibold text-slate-200 hover:text-orange-400 border-b border-white/5"
                >
                  {language === 'ar' ? item.nameAr : item.name}
                </Link>
              );
            })}

            <div className="pt-6 mt-2">
              <Button href="/contact" variant="primary" size="lg" className="w-full" withArrow>
                {t.nav.talkToExpert}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
