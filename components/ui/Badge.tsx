'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'purple' | 'neutral' | 'emerald';
  withDot?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = 'orange',
  withDot = true,
  className = '',
}: BadgeProps) {
  const variantStyles = {
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    neutral: 'bg-white/5 text-slate-300 border-white/10',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  };

  const dotColors = {
    orange: 'bg-orange-400',
    purple: 'bg-purple-400',
    neutral: 'bg-slate-400',
    emerald: 'bg-emerald-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase border ${variantStyles[variant]} ${className}`}
    >
      {withDot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />}
      <span>{children}</span>
    </span>
  );
}
