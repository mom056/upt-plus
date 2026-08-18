'use client';

import React from 'react';
import SectionMarker from './SectionMarker';

interface SectionHeaderProps {
  sectionNumber?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'split';
  isLightSection?: boolean;
  badgeVariant?: 'orange' | 'purple' | 'navy' | 'emerald';
  className?: string;
}

export default function SectionHeader({
  sectionNumber,
  eyebrow,
  title,
  subtitle,
  align = 'left',
  isLightSection = false,
  badgeVariant = 'orange',
  className = '',
}: SectionHeaderProps) {
  const titleColor = isLightSection ? 'text-[#0D1326]' : 'text-white';
  const subtitleColor = isLightSection ? 'text-slate-600' : 'text-slate-400';

  if (align === 'split') {
    return (
      <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16 border-b pb-8 ${isLightSection ? 'border-slate-200' : 'border-white/10'} ${className}`}>
        <div className="max-w-2xl">
          {eyebrow && (
            <div className="mb-3">
              <SectionMarker
                number={sectionNumber}
                label={eyebrow}
                variant={badgeVariant}
                isLightSection={isLightSection}
              />
            </div>
          )}
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] font-['Space_Grotesk',sans-serif] ${titleColor}`}>
            {title}
          </h2>
        </div>

        {subtitle && (
          <p className={`text-sm sm:text-base leading-relaxed max-w-md ${subtitleColor}`}>
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left rtl:text-right';

  return (
    <div className={`flex flex-col ${alignClass} max-w-3xl mb-12 sm:mb-16 ${className}`}>
      {eyebrow && (
        <div className="mb-3">
          <SectionMarker
            number={sectionNumber}
            label={eyebrow}
            variant={badgeVariant}
            isLightSection={isLightSection}
          />
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] font-['Space_Grotesk',sans-serif] ${titleColor}`}
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

