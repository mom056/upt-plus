'use client';

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dark' | 'dark-elevated' | 'light' | 'outlined';
  hoverEffect?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  variant = 'dark',
  hoverEffect = true,
  children,
  className = '',
  ...props
}: CardProps) {
  const variantStyles = {
    dark: 'bg-[#0E1527] border border-white/10 text-slate-100',
    'dark-elevated': 'bg-[#11182B] border border-white/15 text-slate-100 shadow-xl',
    light: 'bg-white border border-slate-200/80 text-slate-900 shadow-sm',
    outlined: 'bg-transparent border border-white/15 text-slate-100',
  };

  const hoverStyles = hoverEffect
    ? 'transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-xl'
    : '';

  return (
    <div
      className={`rounded-xl p-6 sm:p-8 ${variantStyles[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
