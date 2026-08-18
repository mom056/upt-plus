'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n';
import { ShieldCheck, Cloud, Server, Lock, Cpu, Database, Activity, CheckCircle2 } from 'lucide-react';

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

  const nodes: TopologyNode[] = [
    {
      id: 'edge',
      name: 'Global Edge Ingress',
      nameAr: 'بوابة الحافة الطرفية',
      role: 'DDoS Scrubbing & Anycast Transit',
      roleAr: 'تنقية هجمات DDoS والعبور الموزع',
      status: 'active',
      x: 14,
      y: 48,
      icon: Activity,
      highlightColor: '#FF7A00',
    },
    {
      id: 'ztna',
      name: 'Zero Trust Guard',
      nameAr: 'حارس انعدام الثقة (Zero Trust)',
      role: 'Identity Verification & mTLS',
      roleAr: 'التحقق من الهوية والتشفير المتبادل',
      status: 'hardened',
      x: 38,
      y: 28,
      icon: Lock,
      highlightColor: '#6B21A8',
    },
    {
      id: 'api-mesh',
      name: 'API Gateway Shield',
      nameAr: 'درع بوابات واجهات البرمجة',
      role: 'Schema Validation & Rate Limits',
      roleAr: 'فحص المخططات وضبط معدلات الطلب',
      status: 'verified',
      x: 38,
      y: 72,
      icon: ShieldCheck,
      highlightColor: '#FF7A00',
    },
    {
      id: 'cloud-fabric',
      name: 'Distributed Cloud Fabric',
      nameAr: 'النسيج السحابي الموزع',
      role: 'Autoscaling Kubernetes Clusters',
      roleAr: 'عناقيد حاويات ذاتية التوسع',
      status: 'active',
      x: 64,
      y: 48,
      icon: Cloud,
      highlightColor: '#9333EA',
    },
    {
      id: 'core-data',
      name: 'Enterprise Data Vault',
      nameAr: 'مستودع البيانات المؤسسي',
      role: 'Encrypted HSM & Replicated DBs',
      roleAr: 'تشفير عتادي وقواعد بيانات متزامنة',
      status: 'hardened',
      x: 86,
      y: 28,
      icon: Database,
      highlightColor: '#6B21A8',
    },
    {
      id: 'infra-backbone',
      name: 'Physical Backbone',
      nameAr: 'العمود الفقري للبنية الفيزيائية',
      role: 'Redundant Optical 100G Conduits',
      roleAr: 'مسارات ألياف بصرية مزدوجة 100G',
      status: 'verified',
      x: 86,
      y: 72,
      icon: Server,
      highlightColor: '#FF7A00',
    },
  ];

  // Cycling data pulse animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/11] max-w-5xl mx-auto rounded-xl bg-[#080D1A] border border-white/10 p-4 sm:p-6 overflow-hidden shadow-2xl">
      {/* Background Matrix Grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F8FAFC 1px, transparent 1px), linear-gradient(90deg, #F8FAFC 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Ambient subtle glow gradients */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Technical Header Overlay */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono tracking-wider text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="uppercase text-slate-300 font-semibold">
            {language === 'ar' ? 'معمارية النسيج الدفاعي النشط' : 'ACTIVE ENTERPRISE TOPOLOGY'}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
            {language === 'ar' ? 'مسار البيانات اللحظي' : 'Active Traffic Route'}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]" />
            {language === 'ar' ? 'سياج انعدام الثقة' : 'Zero Trust Boundary'}
          </span>
        </div>
      </div>

      {/* SVG Circuit & Vector Connection Paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="lineGradOrange" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6B21A8" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="lineGradPurple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6B21A8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9333EA" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Dynamic Connecting Lines */}
        {/* Edge to ZTNA */}
        <line x1="14%" y1="48%" x2="38%" y2="28%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Edge to API Mesh */}
        <line x1="14%" y1="48%" x2="38%" y2="72%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* ZTNA to Cloud Fabric */}
        <line x1="38%" y1="28%" x2="64%" y2="48%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        {/* API Mesh to Cloud Fabric */}
        <line x1="38%" y1="72%" x2="64%" y2="48%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        {/* Cloud Fabric to Core Data */}
        <line x1="64%" y1="48%" x2="86%" y2="28%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Cloud Fabric to Physical Backbone */}
        <line x1="64%" y1="48%" x2="86%" y2="72%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* Animated Data Packets (Pulsing Circles) */}
        <circle cx={`${14 + (38 - 14) * (pulseIndex === 0 ? 0.6 : 0.2)}%`} cy={`${48 - (48 - 28) * (pulseIndex === 0 ? 0.6 : 0.2)}%`} r="3.5" fill="#FF7A00">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx={`${38 + (64 - 38) * (pulseIndex === 1 ? 0.7 : 0.3)}%`} cy={`${28 + (48 - 28) * (pulseIndex === 1 ? 0.7 : 0.3)}%`} r="3.5" fill="#9333EA">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx={`${64 + (86 - 64) * (pulseIndex === 2 ? 0.65 : 0.25)}%`} cy={`${48 - (48 - 28) * (pulseIndex === 2 ? 0.65 : 0.25)}%`} r="3.5" fill="#FF7A00">
          <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Interactive Topology Nodes */}
      <div className="relative w-full h-[80%] z-10 mt-2">
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
              {/* Outer Pulse Ring */}
              <div
                className={`absolute -inset-2.5 rounded-xl transition-all duration-300 pointer-events-none ${
                  isSelected ? 'bg-orange-500/20 ring-1 ring-orange-400' : 'group-hover:bg-purple-900/30'
                }`}
              />

              {/* Node Card Core */}
              <div
                className={`relative flex items-center gap-2 sm:gap-3 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-lg border transition-all duration-300 shadow-md ${
                  isSelected
                    ? 'bg-[#151D32] border-orange-500 text-white scale-105'
                    : 'bg-[#11182B] border-white/15 text-slate-200 hover:border-purple-400/60'
                }`}
              >
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: node.highlightColor === '#FF7A00' ? 'rgba(255,122,0,0.15)' : 'rgba(107,33,168,0.25)',
                    color: node.highlightColor,
                  }}
                >
                  <NodeIcon className="w-4 h-4" />
                </div>

                <div className="text-left rtl:text-right">
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-100 whitespace-nowrap">
                    {language === 'ar' ? node.nameAr : node.name}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono whitespace-nowrap hidden sm:block">
                    {language === 'ar' ? node.roleAr : node.role}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Node Detail Drawer / Inspection Bar */}
      <div className="relative z-10 mt-auto pt-2 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-300 bg-[#0B1020]/90 px-3 py-2 rounded-lg">
        {activeNode ? (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeNode.highlightColor }} />
              <span className="font-semibold text-white">
                {language === 'ar' ? activeNode.nameAr : activeNode.name}:
              </span>
              <span className="text-slate-300 text-[11px] sm:text-xs">
                {language === 'ar' ? activeNode.roleAr : activeNode.role}
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              {language === 'ar' ? 'مؤمن ومراقب' : 'Hardened & Governed'}
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full text-slate-400 text-[11px]">
            <span>
              {language === 'ar'
                ? 'انقر على أي عقدة لاستعراض وظيفتها الدفاعية والمعمارية في النسيج الرقمي'
                : 'Interact with any topology node to inspect its defensive & operational layer'}
            </span>
            <span className="font-mono text-slate-500 uppercase hidden sm:inline">
              ISO/IEC 27001 &amp; Zero Trust Ready
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
