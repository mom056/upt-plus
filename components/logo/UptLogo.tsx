'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface UptLogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon';
  withTagline?: boolean;
  taglineText?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLightBackground?: boolean;
  emblemSize?: number;
  className?: string;
  href?: string;
}

export function UptEmblem({
  size = 46,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      style={{ width: size, height: Math.round(size * 1.1) }}
      className={`relative shrink-0 flex items-center justify-center ${className}`}
    >
      <Image
        src="/logo-emblem.png"
        alt="UPT PLUS Emblem"
        width={size * 2}
        height={Math.round(size * 2.2)}
        className="object-contain w-full h-full drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
        unoptimized
        priority
      />
    </div>
  );
}

export function UptWordmark({
  size = 'md',
  isLightBackground = false,
  withTagline = true,
  taglineText = 'Cybersecurity & Cloud Computing',
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLightBackground?: boolean;
  withTagline?: boolean;
  taglineText?: string;
  className?: string;
}) {
  const textStyles = {
    sm: {
      title: 'text-[22px] sm:text-2xl tracking-wider',
      tagline: 'text-[10px] tracking-wide mt-0.5',
    },
    md: {
      title: 'text-2xl md:text-[26px] tracking-wider',
      tagline: 'text-[11px] md:text-xs tracking-wider mt-0.5',
    },
    lg: {
      title: 'text-3xl md:text-4xl tracking-wider',
      tagline: 'text-xs md:text-sm tracking-wider mt-1',
    },
    xl: {
      title: 'text-4xl md:text-5xl tracking-widest',
      tagline: 'text-sm md:text-base tracking-wider mt-1.5',
    },
  };

  const currentStyle = textStyles[size] || textStyles.md;
  const mainTextColor = isLightBackground ? 'text-[#0D1326]' : 'text-white';
  const tagColor = isLightBackground ? 'text-slate-600' : 'text-slate-300';

  return (
    <div className={`flex flex-col justify-center leading-none ${className}`}>
      {/* Primary Brand Name: UPT PLUS */}
      <div className="flex items-center">
        <span
          className={`font-['Space_Grotesk',sans-serif] font-black uppercase ${currentStyle.title} ${mainTextColor}`}
          style={{ letterSpacing: '0.06em' }}
        >
          UPT PLUS
        </span>
      </div>

      {/* Subtitle / Tagline */}
      {withTagline && (
        <span
          className={`font-semibold font-sans whitespace-nowrap ${currentStyle.tagline} ${tagColor}`}
          style={{ letterSpacing: '0.04em' }}
        >
          {taglineText}
        </span>
      )}
    </div>
  );
}

export default function UptLogo({
  variant = 'horizontal',
  withTagline = true,
  taglineText = 'Cybersecurity & Cloud Computing',
  size = 'md',
  isLightBackground = false,
  emblemSize,
  className = '',
  href = '/',
}: UptLogoProps) {
  // Preset emblem sizes for each variant (+12-15% for sm)
  const defaultEmblemSizes = {
    sm: variant === 'vertical' ? 62 : 44,
    md: variant === 'vertical' ? 84 : 48,
    lg: variant === 'vertical' ? 112 : 62,
    xl: variant === 'vertical' ? 140 : 80,
  };

  const finalEmblemSize = emblemSize || defaultEmblemSizes[size] || defaultEmblemSizes.md;

  const content = (
    <div
      className={`inline-flex ${
        variant === 'vertical'
          ? 'flex-col items-center text-center gap-3'
          : 'flex-row items-center gap-3.5'
      } select-none group transition-opacity hover:opacity-95 ${className}`}
    >
      {/* 1. Separated High-Res Emblem */}
      <UptEmblem size={finalEmblemSize} />

      {/* 2. Separated Bold Typography */}
      {variant !== 'icon' && (
        <UptWordmark
          size={size}
          isLightBackground={isLightBackground}
          withTagline={withTagline}
          taglineText={taglineText}
          className={variant === 'vertical' ? 'items-center text-center' : ''}
        />
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm"
        aria-label="UPT PLUS Home"
      >
        {content}
      </Link>
    );
  }

  return content;
}




