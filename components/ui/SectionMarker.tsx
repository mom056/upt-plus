'use client';

import React from 'react';

interface SectionMarkerProps {
  number?: string;
  label: string;
  variant?: 'orange' | 'purple' | 'navy' | 'emerald';
  isLightSection?: boolean;
  className?: string;
}

export default function SectionMarker({
  number,
  label,
  variant = 'orange',
  isLightSection = false,
  className = '',
}: SectionMarkerProps) {
  const accentBgs = {
    orange: 'bg-[#FF7A00]',
    purple: 'bg-[#9333EA]',
    navy: 'bg-slate-300',
    emerald: 'bg-emerald-400',
  };

  const lineBg = isLightSection ? 'bg-slate-300' : 'bg-white/15';
  const textColor = isLightSection ? 'text-[#0D1326]' : 'text-slate-200';
  const numColor = isLightSection ? 'text-slate-500' : 'text-slate-400';

  return (
    <div className={`inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest ${className}`}>
      {/* Accent Indicator */}
      <span className={`w-2 h-2 rounded-[2px] shrink-0 ${accentBgs[variant] || accentBgs.orange}`} />

      {number && (
        <>
          <span className={`font-bold ${numColor}`}>{number}</span>
          <span className={`w-3 h-px ${lineBg}`} />
        </>
      )}

      <span className={`font-bold ${textColor}`}>
        {label}
      </span>
    </div>
  );
}

