'use client';

import React from 'react';
import Badge from './Badge';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  isLightSection?: boolean;
  badgeVariant?: 'orange' | 'purple' | 'neutral' | 'emerald';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  isLightSection = false,
  badgeVariant = 'orange',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left rtl:text-right';
  const titleColor = isLightSection ? 'text-[#0D1326]' : 'text-slate-100';
  const subtitleColor = isLightSection ? 'text-slate-600' : 'text-slate-400';

  return (
    <div className={`flex flex-col ${alignClass} max-w-3xl mb-12 sm:mb-16 ${className}`}>
      {eyebrow && (
        <div className="mb-4">
          <Badge variant={badgeVariant}>{eyebrow}</Badge>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] font-['Space_Grotesk',sans-serif] ${titleColor}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
