'use client';

import React from 'react';
import Link from 'next/link';
import UptLogo from '@/components/logo/UptLogo';
import { BRAND_CONFIG } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const solutionLinks = [
    { name: 'Cybersecurity', nameAr: 'الأمن السيبراني', href: '/solutions#cybersecurity' },
    { name: 'Cloud Computing', nameAr: 'الحوسبة السحابية', href: '/solutions#cloud' },
    { name: 'Digital Infrastructure', nameAr: 'البنية التحتية الرقمية', href: '/solutions#infrastructure' },
  ];

  const companyLinks = [
    { name: 'About UPT Plus', nameAr: 'عن الشركة', href: '/about' },
    { name: 'Technology Ecosystem', nameAr: 'المنظومة التقنية', href: '/partners' },
    { name: 'Contact & Inquiries', nameAr: 'تواصل معنا', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', nameAr: 'سياسة الخصوصية', href: '/privacy' },
    { name: 'Terms of Use', nameAr: 'شروط الاستخدام', href: '/terms' },
  ];

  return (
    <footer className="bg-[#080D1A] text-slate-400 border-t border-white/10 pt-16 pb-12 bg-grid-architectural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Overview Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <UptLogo variant="horizontal" size="md" withTagline={true} />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              {language === 'ar'
                ? 'مؤسسة متخصصة في هندسة الأمن السيبراني، الحوسبة السحابية، والبنية التحتية الرقمية للمؤسسات والقطاعات الحيوية.'
                : 'Enterprise technology organization delivering mission-critical cybersecurity, cloud computing, and digital infrastructure solutions.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_CONFIG.placeholders.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-500/50 transition-colors"
                aria-label="UPT PLUS LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 mb-4">
              {language === 'ar' ? 'الحلول التقنية' : 'Solutions'}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {solutionLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-orange-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{language === 'ar' ? item.nameAr : item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 mb-4">
              {language === 'ar' ? 'الشركة' : 'Company'}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-orange-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{language === 'ar' ? item.nameAr : item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 mb-4">
              {language === 'ar' ? 'الوثائق القانونية' : 'Legal'}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-orange-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{language === 'ar' ? item.nameAr : item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {BRAND_CONFIG.name}. {t.common.allRightsReserved}{' '}
            <span className="font-mono text-[11px] text-slate-600">
              ({BRAND_CONFIG.domain.replace('https://', '')})
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              {t.common.privacy}
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              {t.common.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

