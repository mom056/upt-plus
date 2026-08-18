'use client';

import React from 'react';
import Link from 'next/link';
import UptLogo from '@/components/logo/UptLogo';
import { BRAND_CONFIG, MAIN_NAVIGATION } from '@/lib/constants';
import { useLanguage } from '@/lib/i18n';
import { Shield, Lock, ArrowUpRight, Linkedin } from 'lucide-react';

export default function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const solutionLinks = [
    { name: 'Cybersecurity Defense', nameAr: 'حلول الأمن السيبراني', href: '/solutions/cybersecurity' },
    { name: 'Cloud Computing', nameAr: 'الحوسبة السحابية', href: '/solutions/cloud' },
    { name: 'Digital Infrastructure', nameAr: 'البنية التحتية الرقمية', href: '/solutions/infrastructure' },
    { name: 'Application Modernization', nameAr: 'تحديث التطبيقات', href: '/solutions/applications' },
    { name: 'Managed Services', nameAr: 'الخدمات المدارة', href: '/managed-services' },
  ];

  const industryLinks = [
    { name: 'Financial Services', nameAr: 'الخدمات المالية', href: '/industries/financial-services' },
    { name: 'Telecommunications', nameAr: 'الاتصالات', href: '/industries/telecom' },
    { name: 'Retail & E-Commerce', nameAr: 'التجزئة والتجارة', href: '/industries/retail' },
    { name: 'Government & Public Sector', nameAr: 'القطاع الحكومي', href: '/industries/government' },
    { name: 'Healthcare & Sciences', nameAr: 'الرعاية الصحية', href: '/industries/healthcare' },
    { name: 'Manufacturing & Industrial', nameAr: 'الصناعة والإنتاج', href: '/industries/manufacturing' },
  ];

  const companyLinks = [
    { name: 'About UPT PLUS', nameAr: 'عن الشركة', href: '/about' },
    { name: 'Enterprise Capabilities', nameAr: 'بيان القدرات المؤسسية', href: '/capabilities' },
    { name: 'Technology Ecosystem', nameAr: 'المنظومة والشركاء', href: '/partners' },
    { name: 'Projects & Case Studies', nameAr: 'المشاريع الهندسية', href: '/projects' },
    { name: 'Insights & Architecture', nameAr: 'المعرفة والأبحاث', href: '/insights' },
    { name: 'Contact & Inquiries', nameAr: 'التواصل والاستفسارات', href: '/contact' },
  ];

  return (
    <footer className="bg-[#080D1A] text-slate-400 border-t border-white/10 pt-16 pb-12 bg-grid-architectural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <UptLogo variant="horizontal" size="md" withTagline={true} />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              {language === 'ar'
                ? 'مؤسسة رائدة في هندسة الأمن السيبراني، الحوسبة السحابية، البنية التحتية الرقمية، وتحديث التطبيقات للمؤسسات الحيوية والقطاعات الكبرى.'
                : 'Enterprise technology organization delivering mission-critical cybersecurity, cloud computing, digital infrastructure, and managed technology solutions for complex corporate environments.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_CONFIG.placeholders.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-500/50 transition-colors"
                aria-label="UPT PLUS LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{language === 'ar' ? 'الأنظمة التشغيلية مستقرة' : 'All Systems Operational'}</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 mb-4">
              {language === 'ar' ? 'الحلول التقنية' : 'Solutions'}
            </h3>
            <ul className="space-y-2.5 text-sm">
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

          {/* Industries Column */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 mb-4">
              {language === 'ar' ? 'القطاعات المستهدفة' : 'Industries'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {industryLinks.map((item) => (
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

          {/* Company & Legal Column */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-200 mb-4">
              {language === 'ar' ? 'المؤسسة' : 'Organization'}
            </h3>
            <ul className="space-y-2.5 text-sm">
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
        </div>

        {/* Bottom Bar: Copyright & Legal */}
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
            <Link href="/capabilities" className="hover:text-orange-400 transition-colors font-semibold">
              {language === 'ar' ? 'ملف القدرات المؤسسية' : 'Enterprise Capability Statement'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
