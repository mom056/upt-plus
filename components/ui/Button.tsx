'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  withArrow?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  withArrow = false,
  isLoading = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const { isRTL } = useLanguage();

  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed group whitespace-nowrap select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 font-bold',
  };

  const variantStyles = {
    primary:
      'bg-[#FF7A00] hover:bg-[#E66E00] text-[#080D1A] font-bold shadow-md hover:shadow-orange-500/20 active:translate-y-px',
    secondary:
      'bg-[#151D32] hover:bg-[#1C2742] text-white border border-white/15 hover:border-white/30 active:translate-y-px',
    outline:
      'bg-transparent hover:bg-white/5 text-slate-100 border border-white/20 hover:border-white/40 active:translate-y-px',
    ghost:
      'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white p-0 hover:bg-transparent',
    light:
      'bg-[#0D1326] hover:bg-[#151D32] text-white font-bold shadow-sm active:translate-y-px',
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const content = (
    <>
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : null}
      <span>{children}</span>
      {withArrow && (
        <ArrowIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {content}
    </button>
  );
}
