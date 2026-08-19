'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';

export default function HeroTopologyCanvas() {
  const { language } = useLanguage();
  const [activeNode, setActiveNode] = useState<string>('security');

  const nodes = [
    { id: 'edge', num: '01', name: 'Edge', nameAr: 'الحافة', x: 8, y: 45 },
    { id: 'security', num: '02', name: 'Security', nameAr: 'الأمان السيبراني', isProtected: true, x: 36, y: 22 },
    { id: 'apps', num: '03', name: 'Applications & APIs', nameAr: 'التطبيقات و APIs', x: 36, y: 72 },
    { id: 'cloud', num: '04', name: 'Cloud', nameAr: 'الحوسبة السحابية', x: 60, y: 45 },
    { id: 'data', num: '05', name: 'Data', nameAr: 'البيانات', x: 82, y: 22 },
    { id: 'infra', num: '06', name: 'Infrastructure', nameAr: 'البنية التحتية', x: 82, y: 72 },
  ];

  return (
    <div className="relative w-full aspect-[16/11] sm:aspect-[16/10]">
      {/* Architectural Construction & Signal Vector */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal & Vertical Engineering Datum Rails */}
        <line x1="0" y1="45" x2="100" y2="45" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
        <line x1="36" y1="0" x2="36" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="60" y1="0" x2="60" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="82" y1="0" x2="82" y2="100" stroke="rgba(255,255,255,0.04)" strokeWidth="1" vectorEffect="non-scaling-stroke" />

        {/* Passive Architectural Interconnects */}
        <line x1="8" y1="45" x2="36" y2="22" stroke="rgba(255,255,255,0.12)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="8" y1="45" x2="36" y2="72" stroke="rgba(255,255,255,0.12)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="36" y1="22" x2="60" y2="45" stroke="rgba(255,255,255,0.12)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="36" y1="72" x2="60" y2="45" stroke="rgba(255,255,255,0.12)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="60" y1="45" x2="82" y2="22" stroke="rgba(255,255,255,0.12)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <line x1="60" y1="45" x2="82" y2="72" stroke="rgba(255,255,255,0.12)" strokeWidth="1" vectorEffect="non-scaling-stroke" />

        {/* Security Protected Boundary (Subtle V-Shield Convergence Geometry) */}
        <polygon
          points="28,8 44,8 36,36"
          fill="rgba(107,33,168,0.08)"
          stroke="#9333EA"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          vectorEffect="non-scaling-stroke"
          className="hidden sm:block"
        />

        {/* THE UPT SIGNAL (Continuous Origin -> Routing -> Exit Datum) */}
        <path
          d="M 8 45 L 36 22 L 60 45 L 82 72 L 82 100"
          fill="none"
          stroke="#FF7A00"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Active Route Pulse Anchor */}
        <circle cx="60" cy="45" r="1.5" fill="#FF7A00" vectorEffect="non-scaling-stroke" />
        
        {/* Downward Signal Exit Cue at Datum (82%) */}
        <circle cx="82" cy="100" r="1.5" fill="#FF7A00" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Open Architectural Node Labels (NO CARD BOXES) */}
      <div className="relative w-full h-full">
        {nodes.map((node) => {
          const isSelected = activeNode === node.id;

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveNode(node.id)}
              style={{
                left: node.x + '%',
                top: node.y + '%',
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute group focus:outline-none text-left rtl:text-right cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span
                  className={'w-2.5 h-2.5 rounded-full transition-transform duration-200 ' +
                    (isSelected
                      ? 'bg-[#FF7A00] ring-4 ring-orange-500/20 scale-125'
                      : node.isProtected
                      ? 'bg-purple-500 ring-2 ring-purple-500/20 group-hover:scale-110'
                      : 'bg-slate-400 group-hover:scale-110')}
                />
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-slate-500 leading-none">
                    {node.num}
                  </span>
                  <span
                    className={'text-xs font-mono font-bold tracking-wider uppercase transition-colors ' +
                      (isSelected
                        ? 'text-orange-400'
                        : node.isProtected
                        ? 'text-purple-300 group-hover:text-white'
                        : 'text-slate-300 group-hover:text-white')}
                  >
                    {language === 'ar' ? node.nameAr : node.name}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Clean Bottom Field Datum Line & Label */}
      <div className="absolute bottom-0 left-0 right-0 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <span className="uppercase">UPT CONTROL PLANE</span>
        <span className="text-orange-400 uppercase tracking-wider">
          {language === 'ar' ? 'مسار الإشارة' : 'ACTIVE ROUTE'}
        </span>
      </div>
    </div>
  );
}
