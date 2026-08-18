'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n';
import { ShieldCheck, Cloud, Server, Lock, Cpu, Database, Activity } from 'lucide-react';

interface TopologyNode {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  status: 'active' | 'hardened' | 'verified';
  x: number; // percentage
  y: number; // percentage
  icon: any;
  highlightColor: string;
}

export default function HeroTopologyCanvas() {
  const { language, isRTL } = useLanguage();
  const [activeNode, setActiveNode] = useState<TopologyNode | null>(null);
  const [pulseIndex, setPulseIndex] = useState(0);

  // Neutral conceptual architecture layers
  const nodes: TopologyNode[] = [
    {
      id: 'edge',
      name: 'Edge',
      nameAr: 'الحافة الطرفية',
      role: 'Global Routing & Delivery',
      roleAr: 'توجيه وتسريع الوصول الطرفي',
      status: 'active',
      x: 14,
      y: 48,
      icon: Activity,
      highlightColor: '#FF7A00',
    },
    {
      id: 'security',
      name: 'Security',
      nameAr: 'الأمان والحماية',
      role: 'Zero Trust & Access Control',
      roleAr: 'سياسات الأمان وانعدام الثقة',
      status: 'hardened',
      x: 38,
      y: 28,
      icon: Lock,
      highlightColor: '#6B21A8',
    },
    {
      id: 'applications',
      name: 'Applications & APIs',
      nameAr: 'التطبيقات وواجهات البرمجة',
      role: 'Core Workloads & Services',
      roleAr: 'بيئات التشغيل والخدمات الرقمية',
      status: 'verified',
      x: 38,
      y: 72,
      icon: ShieldCheck,
      highlightColor: '#FF7A00',
    },
    {
      id: 'cloud',
      name: 'Cloud',
      nameAr: 'الحوسبة السحابية',
      role: 'Hybrid & Elastic Compute',
      roleAr: 'الحوسبة الهجينة والمرنة',
      status: 'active',
      x: 64,
      y: 48,
      icon: Cloud,
      highlightColor: '#9333EA',
    },
    {
      id: 'data',
      name: 'Data',
      nameAr: 'البيانات المؤسسية',
      role: 'Protected Enterprise Storage',
      roleAr: 'إدارة وتخزين البيانات المحمية',
      status: 'hardened',
      x: 86,
      y: 28,
      icon: Database,
      highlightColor: '#6B21A8',
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      nameAr: 'البنية التحتية',
      role: 'Enterprise Digital Foundation',
      roleAr: 'الأساس الرقمي والشبكي للمؤسسة',
      status: 'verified',
      x: 86,
      y: 72,
      icon: Server,
      highlightColor: '#FF7A00',
    },
  ];

  // Cycling data pulse animation (respects prefers-reduced-motion)
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-[16/12] sm:aspect-[16/10] lg:aspect-[16/10] rounded-lg bg-[#0D1326] border border-white/15 p-3 sm:p-5 overflow-hidden shadow-2xl">
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F8FAFC 1px, transparent 1px), linear-gradient(90deg, #F8FAFC 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Subtle Purple & Orange Ambient Lighting */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Technical Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-white/10 text-[10px] sm:text-[11px] font-mono tracking-wider text-slate-400">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
          <span className="uppercase text-slate-200 font-bold truncate">
            {language === 'ar' ? 'النسيج المعماري المؤسسي' : 'ENTERPRISE ARCHITECTURE TOPOLOGY'}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-400 text-[10px]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
            {language === 'ar' ? 'مسار نشط' : 'Active Route'}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]" />
            {language === 'ar' ? 'نطاق الحماية السحابية' : 'Security Perimeter'}
          </span>
        </div>
      </div>

      {/* SVG Circuit & Vector Connection Paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Dynamic Connecting Lines */}
        <line x1="14%" y1="48%" x2="38%" y2="28%" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="14%" y1="48%" x2="38%" y2="72%" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="38%" y1="28%" x2="64%" y2="48%" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
        <line x1="38%" y1="72%" x2="64%" y2="48%" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
        <line x1="64%" y1="48%" x2="86%" y2="28%" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="64%" y1="48%" x2="86%" y2="72%" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Single Discrete Data Pulse */}
        <circle cx={`${14 + (38 - 14) * (pulseIndex === 0 ? 0.6 : 0.2)}%`} cy={`${48 - (48 - 28) * (pulseIndex === 0 ? 0.6 : 0.2)}%`} r="3" fill="#FF7A00" opacity="0.9" />
        <circle cx={`${38 + (64 - 38) * (pulseIndex === 1 ? 0.65 : 0.25)}%`} cy={`${28 + (48 - 28) * (pulseIndex === 1 ? 0.65 : 0.25)}%`} r="3" fill="#9333EA" opacity="0.9" />
        <circle cx={`${64 + (86 - 64) * (pulseIndex === 2 ? 0.65 : 0.25)}%`} cy={`${48 - (48 - 28) * (pulseIndex === 2 ? 0.65 : 0.25)}%`} r="3" fill="#FF7A00" opacity="0.9" />
      </svg>

      {/* Interactive Topology Nodes */}
      <div className="relative w-full h-[74%] z-10 mt-1">
        {nodes.map((node) => {
          const isSelected = activeNode?.id === node.id;
          const NodeIcon = node.icon;

          return (
            <div
              key={node.id}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute group cursor-pointer"
              onClick={() => setActiveNode(isSelected ? null : node)}
              onMouseEnter={() => setActiveNode(node)}
            >
              {/* Outer Glow Ring on Select */}
              <div
                className={`absolute -inset-1.5 sm:-inset-2 rounded-lg transition-all duration-200 pointer-events-none ${
                  isSelected ? 'bg-orange-500/20 ring-1 ring-orange-400' : 'group-hover:bg-purple-900/30'
                }`}
              />

              {/* Node Card Core */}
              <div
                className={`relative flex items-center gap-1.5 sm:gap-2.5 px-2 sm:px-3 py-1 sm:py-2 rounded-md border transition-all duration-200 shadow-md ${
                  isSelected
                    ? 'bg-[#151D32] border-orange-500 text-white scale-105'
                    : 'bg-[#11182B] border-white/15 text-slate-200 hover:border-purple-400/60'
                }`}
              >
                <div
                  className="w-5 h-5 sm:w-7 sm:h-7 rounded flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: node.highlightColor === '#FF7A00' ? 'rgba(255,122,0,0.15)' : 'rgba(107,33,168,0.25)',
                    color: node.highlightColor,
                  }}
                >
                  <NodeIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>

                <div className="text-left rtl:text-right">
                  <div className="text-[10px] sm:text-xs font-bold text-slate-100 whitespace-nowrap">
                    {language === 'ar' ? node.nameAr : node.name}
                  </div>
                  <div className="text-[9px] text-slate-400 font-mono whitespace-nowrap hidden sm:block">
                    {language === 'ar' ? node.roleAr : node.role}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Architecture Detail Panel */}
      <div className="relative z-10 mt-auto pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 bg-[#0B1020]/90 px-2.5 py-1.5 rounded">
        {activeNode ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2 truncate">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: activeNode.highlightColor }} />
              <span className="font-bold text-white text-xs shrink-0">
                {language === 'ar' ? activeNode.nameAr : activeNode.name}:
              </span>
              <span className="text-slate-300 text-[10px] sm:text-[11px] truncate">
                {language === 'ar' ? activeNode.roleAr : activeNode.role}
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono uppercase text-emerald-400 bg-emerald-950/60 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-800/40 shrink-0 ms-2">
              {language === 'ar' ? 'طبقة محصنة' : 'Hardened Layer'}
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full text-slate-400 text-[10px] sm:text-[11px]">
            <span className="truncate">
              {language === 'ar'
                ? 'حدد أي طبقة معمارية لاستعراض موقعها ودورها'
                : 'Select any architectural layer to inspect its placement'}
            </span>
            <span className="font-mono text-slate-500 uppercase text-[9px] hidden md:inline shrink-0 ms-2">
              Control Plane Architecture
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

