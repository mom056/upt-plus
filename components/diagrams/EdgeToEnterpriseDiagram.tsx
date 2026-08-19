'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';

export default function EdgeToEnterpriseDiagram() {
  const { language } = useLanguage();
  const [activeStage, setActiveStage] = useState<number>(1); // Default to Security

  const stages = [
    {
      id: 'edge',
      num: '01',
      name: 'Edge',
      nameAr: 'الحافة',
      subtitle: 'Global Anycast DNS & routing optimization',
      subtitleAr: 'نظام DNS الموزع عالمياً وتحسين التوجيه',
      role: 'Absorbs traffic anomalies at the edge before requests reach core infrastructure.',
      roleAr: 'استيعاب أي قفزات مفاجئة أو هجمات عند الحافة الطرفية قبل وصولها للأنظمة الأساسية.',
    },
    {
      id: 'security',
      num: '02',
      name: 'Security',
      nameAr: 'الأمان السيبراني',
      isBoundary: true,
      subtitle: 'Zero Trust enforcement & access verification',
      subtitleAr: 'تطبيق Zero Trust والتحقق من الوصول',
      role: 'Continuous cryptographic validation ensuring only authorized payloads proceed.',
      roleAr: 'تحقق تشفيري مستمر يضمن عدم مرور أي طلبات غير مستوفية لسياسات الأمان.',
    },
    {
      id: 'apps',
      num: '03',
      name: 'Applications & APIs',
      nameAr: 'التطبيقات و APIs',
      subtitle: 'Decoupled microservices & API routing',
      subtitleAr: 'خدمات مصغرة وتوجيه واجهات البرمجة',
      role: 'Scales dynamically with business demand while maintaining service boundaries.',
      roleAr: 'توسع تلقائي مع حجم الطلب مع الحفاظ على استقلالية الخدمات وسرعة استجابتها.',
    },
    {
      id: 'cloud',
      num: '04',
      name: 'Cloud',
      nameAr: 'الحوسبة السحابية',
      isDistributed: true,
      subtitle: 'Multi-node compute & distributed workloads',
      subtitleAr: 'منصات حوسبة وتوزيع أحمال العمل',
      role: 'Provides resilient high-availability computing with sub-second failover.',
      roleAr: 'توفر حوسبة عالية التوافر مع تحويل تلقائي فوري للمسارات عند أي طارئ.',
    },
    {
      id: 'data',
      num: '05',
      name: 'Data',
      nameAr: 'البيانات',
      isConverged: true,
      subtitle: 'Secure storage & cryptographic management',
      subtitleAr: 'التخزين الآمن وإدارة البيانات',
      role: 'Protects enterprise assets, cryptographic keys, and regulatory records.',
      roleAr: 'حماية قصوى لأصول المؤسسة والمفاتيح المشفرة والبيانات الخاضعة للتنظيم.',
    },
    {
      id: 'infra',
      num: '06',
      name: 'Infrastructure',
      nameAr: 'البنية التحتية',
      isBackbone: true,
      subtitle: 'Physical transmission & system backbone',
      subtitleAr: 'العمود الفقري ومسارات النقل الفيزيائي',
      role: 'Guarantees the unbroken physical foundation powering every software layer.',
      roleAr: 'تضمن الأساس الفيزيائي الصلب والمستقر لتشغيل كافة الطبقات البرمجية.',
    },
  ];

  const current = stages[activeStage];

  return (
    <div className="w-full">
      
      {/* ==================================================== */}
      {/* DESKTOP (>= md): TRANSFORMING ARCHITECTURAL RAIL */}
      {/* ==================================================== */}
      <div className="hidden md:block relative">
        
        {/* Top Rail Header */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/5 text-[10px] font-mono text-slate-500">
          <span className="uppercase">TRANSFORMING ARCHITECTURAL RAIL</span>
          <span className="text-orange-400 uppercase tracking-wider">
            {language === 'ar' ? 'مسار التحول المعماري' : 'UPT SIGNAL TRANSFORMATION'}
          </span>
        </div>

        {/* Dedicated Architectural SVG Schematic Track */}
        <div className="w-full h-32 relative mb-6">
          <svg className="w-full h-full" viewBox="0 0 1000 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Construction Datum Line */}
            <line x1="0" y1="60" x2="1000" y2="60" stroke="rgba(255,255,255,0.06)" strokeDasharray="6 6" />

            {/* 01. EDGE -> Ingress Line to Station 01 */}
            <line x1="0" y1="60" x2="170" y2="60" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="83" cy="60" r="4" fill="#FF7A00" />

            {/* 02. SECURITY -> Protected V-Shield Boundary Geometry */}
            <polygon
              points="185,15 285,15 255,105 180,105"
              fill="rgba(107,33,168,0.12)"
              stroke="#9333EA"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <line x1="185" y1="45" x2="185" y2="75" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="170" y1="60" x2="330" y2="60" stroke="#FF7A00" strokeWidth="2.5" />
            <circle cx="250" cy="60" r="4" fill="#FF7A00" />

            {/* 03. APPLICATIONS & APIs -> Routing Cross-Junction */}
            <circle cx="416" cy="60" r="4" fill="#FF7A00" />
            <line x1="416" y1="30" x2="416" y2="90" stroke="#64748B" strokeWidth="1.5" />
            <line x1="330" y1="60" x2="500" y2="60" stroke="#FF7A00" strokeWidth="2.5" />

            {/* 04. CLOUD -> 3-Way Symmetrical Distribution */}
            <circle cx="500" cy="60" r="4" fill="#FF7A00" />
            <path d="M 500 60 L 545 25 L 625 25" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 500 60 L 625 60" stroke="#FF7A00" strokeWidth="2" />
            <path d="M 500 60 L 545 95 L 625 95" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />

            <circle cx="583" cy="25" r="3.5" fill="#FF7A00" />
            <circle cx="583" cy="60" r="3.5" fill="#FF7A00" />
            <circle cx="583" cy="95" r="3.5" fill="#FF7A00" />

            {/* 05. DATA -> Convergence into 1 resolved route */}
            <path d="M 625 25 L 670 60 L 750 60" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 625 60 L 750 60" stroke="#FF7A00" strokeWidth="2" />
            <path d="M 625 95 L 670 60 L 750 60" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="670" cy="60" r="4" fill="#FF7A00" />
            <circle cx="750" cy="60" r="4" fill="#FF7A00" />

            {/* 06. INFRASTRUCTURE -> Grounded Backbone Trunk & Vertical Stanchions */}
            <line x1="750" y1="60" x2="1000" y2="60" stroke="#FF7A00" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="880" y1="25" x2="880" y2="95" stroke="#64748B" strokeWidth="1.5" />
            <line x1="950" y1="25" x2="950" y2="95" stroke="#64748B" strokeWidth="1.5" />
            <circle cx="880" cy="60" r="3.5" fill="#FF7A00" />
            <circle cx="950" cy="60" r="3.5" fill="#FF7A00" />
          </svg>
        </div>

        {/* 6 Stations Along the Rail Aligned Underneath */}
        <div className="grid grid-cols-6 gap-4">
          {stages.map((stage, idx) => {
            const isSelected = activeStage === idx;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(idx)}
                className="text-left rtl:text-right focus:outline-none group cursor-pointer flex flex-col items-start pt-2 border-t border-white/5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={'w-2 h-2 rounded-full transition-transform ' +
                      (isSelected
                        ? 'bg-[#FF7A00] ring-4 ring-orange-500/20 scale-125'
                        : stage.isBoundary
                        ? 'bg-purple-500'
                        : 'bg-slate-500 group-hover:bg-slate-300')}
                  />
                  <span className="text-[10px] font-mono text-slate-500">
                    {stage.num}
                  </span>
                </div>

                <div
                  className={'text-xs font-mono font-bold uppercase tracking-wider transition-colors ' +
                    (isSelected
                      ? 'text-orange-400'
                      : stage.isBoundary
                      ? 'text-purple-300 group-hover:text-white'
                      : 'text-slate-300 group-hover:text-white')}
                >
                  {language === 'ar' ? stage.nameAr : stage.name}
                </div>

                <p className="mt-1 text-[11px] text-slate-400 leading-snug">
                  {language === 'ar' ? stage.subtitleAr : stage.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Station Detail (Integrated Inline Datum) */}
        <div className="mt-10 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-orange-400 font-bold">[{current.num}]</span>
            <span className="text-white font-bold">{language === 'ar' ? current.nameAr : current.name}:</span>
            <span className="text-slate-300">{language === 'ar' ? current.roleAr : current.role}</span>
          </div>
          <span className="text-[10px] text-slate-500 uppercase">UPT CONTROL PLANE</span>
        </div>

      </div>

      {/* ==================================================== */}
      {/* MOBILE (< md): TRANSFORMING VERTICAL ARCHITECTURAL SPINE */}
      {/* ==================================================== */}
      <div className="block md:hidden relative pl-8 rtl:pr-8 rtl:pl-0">
        
        {/* Continuous Vertical Transforming Signal Axis */}
        <div className="absolute left-3 rtl:right-3 rtl:left-auto top-2 bottom-2 w-0.5 bg-[#FF7A00]" />

        {/* Vertical Spine Stations */}
        <div className="space-y-10 relative z-10">
          {stages.map((stage, idx) => {
            const isSelected = activeStage === idx;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(idx)}
                className="w-full text-left rtl:text-right focus:outline-none group cursor-pointer flex items-start gap-4"
              >
                {/* Station Node Marker on Vertical Spine */}
                <span
                  className={'-ml-6 rtl:-mr-6 rtl:ml-0 w-3.5 h-3.5 rounded-full shrink-0 mt-1 transition-transform ' +
                    (isSelected
                      ? 'bg-[#FF7A00] ring-4 ring-orange-500/20 scale-125'
                      : stage.isBoundary
                      ? 'bg-purple-500 ring-2 ring-purple-500/20'
                      : 'bg-slate-400')}
                />

                {/* Stage Details */}
                <div className="flex-1 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-mono text-slate-500">
                      {stage.num}
                    </span>
                    <span
                      className={'text-xs font-mono font-bold uppercase tracking-wider ' +
                        (isSelected
                          ? 'text-orange-400'
                          : stage.isBoundary
                          ? 'text-purple-300'
                          : 'text-white')}
                    >
                      {language === 'ar' ? stage.nameAr : stage.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    {language === 'ar' ? stage.subtitleAr : stage.subtitle}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">
                    {language === 'ar' ? stage.roleAr : stage.role}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>

    </div>
  );
}
