'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, Home } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({
  items,
  isLight = false,
  className = '',
}: {
  items: BreadcrumbItem[];
  isLight?: boolean;
  className?: string;
}) {
  const { language, isRTL } = useLanguage();
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  const textColor = isLight ? 'text-slate-500' : 'text-slate-400';
  const activeColor = isLight ? 'text-slate-900' : 'text-slate-100';
  const hoverColor = isLight ? 'hover:text-slate-900' : 'hover:text-white';

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs font-mono py-2 ${className}`}>
      <ol className="flex items-center flex-wrap gap-2">
        <li>
          <Link
            href="/"
            className={`flex items-center gap-1 transition-colors ${textColor} ${hoverColor}`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronIcon className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              {isLast || !item.href ? (
                <span className={`font-semibold ${activeColor}`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={`transition-colors ${textColor} ${hoverColor}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
