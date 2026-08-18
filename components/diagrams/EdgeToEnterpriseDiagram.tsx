'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import {
  Users,
  Globe2,
  ShieldAlert,
  Code2,
  Cloud,
  Database,
  Server,
  ChevronRight,
  ChevronDown,
  Info,
  CheckCircle2,
} from 'lucide-react';

interface Stage {
  id: string;
  stepNumber: string;
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  icon: any;
  techDetails: string[];
  techDetailsAr: string[];
  operationalRole: string;
  operationalRoleAr: string;
  accent: 'orange' | 'purple' | 'navy';
}

export default function EdgeToEnterpriseDiagram() {
  const { language, isRTL } = useLanguage();
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(2); // Default to Security

  const stages: Stage[] = [
    {
      id: 'users',
      stepNumber: '01',
      title: 'Users & Endpoints',
      titleAr: 'المستخدمون والأجهزة',
      subtitle: 'Global workforce, branch offices, consumer apps, IoT.',
      subtitleAr: 'الكوادر الموزعة، الفروع، تطبيقات العملاء، وأجهزة IoT.',
      icon: Users,
      techDetails: [
        'Context-Aware Device Posture',
        'Multi-Factor Authentication (MFA)',
        'Global Branch SD-WAN Connections',
      ],
      techDetailsAr: [
        'التحقق من حالة وسلامة أجهزة الاتصال',
        'المصادقة متعددة العوامل المشفرة',
        'ربط فروع المقرات عبر شبكات SD-WAN',
      ],
      operationalRole:
        'Every incoming request is tagged with device telemetry and cryptographic origin metadata.',
      operationalRoleAr:
        'يتم وسم كل طلب بالبيانات الوصفية للأصل والتشفير وحالة الجهاز قبل النقل.',
      accent: 'navy',
    },
    {
      id: 'edge',
      stepNumber: '02',
      title: 'Edge / Delivery',
      titleAr: 'الحافة والتوزيع الطرفي',
      subtitle: 'Global Anycast DNS, routing optimization, TLS termination.',
      subtitleAr: 'نظام DNS الموزع عالمياً، تحسين التوجيه، وإنهاء التشفير.',
      icon: Globe2,
      techDetails: [
        'BGP Anycast Routing Acceleration',
        'Volumetric DDoS Traffic Scrubbing',
        'Edge Static Content & Asset Caching',
      ],
      techDetailsAr: [
        'تسريع توجيه المسارات عبر Anycast',
        'تنقية التدفقات الضخمة لهجمات DDoS',
        'تخزين المحتوى الثابت على الحافة القريبة',
      ],
      operationalRole:
        'Absorbs massive traffic anomalies at the edge before requests reach core infrastructure.',
      operationalRoleAr:
        'استيعاب أي قفزات مفاجئة أو هجمات عند الحافة الطرفية قبل وصولها للأنظمة الأساسية.',
      accent: 'purple',
    },
    {
      id: 'security',
      stepNumber: '03',
      title: 'Security Boundary',
      titleAr: 'سياج الأمان وانعدام الثقة',
      subtitle: 'Zero Trust enforcement, API shields, WAF inspection.',
      subtitleAr: 'تطبيق Zero Trust، درع واجهات البرمجة، وفحص WAF.',
      icon: ShieldAlert,
      techDetails: [
        'Deep Web Application Firewall (WAF)',
        'Automated Bot & Scraping Detection',
        'API Token Introspection & Schema Guard',
      ],
      techDetailsAr: [
        'جدار حماية تطبيقات الويب المتقدم (WAF)',
        'كشف الروبوتات الاستحواذية الخبيثة',
        'فحص تواقيع ومخططات واجهات البرمجة',
      ],
      operationalRole:
        'Continuous cryptographic validation ensuring only authorized payloads proceed.',
      operationalRoleAr:
        'تحقق تشفيري مستمر يضمن عدم مرور أي طلبات غير مستوفية لسياسات الأمان.',
      accent: 'orange',
    },
    {
      id: 'applications',
      stepNumber: '04',
      title: 'Applications & APIs',
      titleAr: 'التطبيقات وواجهات البرمجة',
      subtitle: 'Decoupled microservices, container fabrics, event brokers.',
      subtitleAr: 'خدمات مصغرة، نسيج الحاويات، ووسطاء الرسائل اللحظية.',
      icon: Code2,
      techDetails: [
        'Kubernetes Container Ingress Routing',
        'Event-Driven Streaming & Async Queues',
        'Stateless Microservice Orchestration',
      ],
      techDetailsAr: [
        'توجيه طلبات الحاويات على Kubernetes',
        'المعالجة اللحظية المعتمدة على الأحداث',
        'تشغيل وتنسيق الخدمات المصغرة المرنة',
      ],
      operationalRole:
        'Scales dynamically with business demand while maintaining service boundaries.',
      operationalRoleAr:
        'توسع تلقائي مع حجم الطلب مع الحفاظ على استقلالية الخدمات وسرعة استجابتها.',
      accent: 'purple',
    },
    {
      id: 'cloud',
      stepNumber: '05',
      title: 'Cloud Fabric',
      titleAr: 'النسيج السحابي الهجين',
      subtitle: 'Multi-zone hybrid cloud, private VPCs, autoscaling compute.',
      subtitleAr: 'سحابة هجينة متعددة المناطق، شبكات خاصة، وحوسبة مرنة.',
      icon: Cloud,
      techDetails: [
        'Multi-Availability Zone Compute Clusters',
        'Transit Gateway Encrypted Mesh',
        'Self-Healing Infrastructure as Code',
      ],
      techDetailsAr: [
        'عناقيد حوسبة موزعة عبر مناطق متعددة',
        'شبكة بوابات عبور مشفرة ومؤمنة',
        'بنية تحتية برمجية ذاتية المعالجة',
      ],
      operationalRole:
        'Provides resilient high-availability computing with sub-second failover.',
      operationalRoleAr:
        'توفر حوسبة عالية التوافر مع تحويل تلقائي فوري للمسارات عند أي طارئ.',
      accent: 'navy',
    },
    {
      id: 'data',
      stepNumber: '06',
      title: 'Data & Secrets Vault',
      titleAr: 'البيانات والأسرار المشفرة',
      subtitle: 'Hardware security modules, active-active DB replication.',
      subtitleAr: 'وحدات تشفير عتادية (HSM)، ومزامنة قواعد البيانات.',
      icon: Database,
      techDetails: [
        'Field-Level Cryptographic Encryption',
        'Multi-Region Transactional Replication',
        'Immutable Compliance Audit Trails',
      ],
      techDetailsAr: [
        'تشفير دقيق على مستوى الحقول والبيانات',
        'مزامنة متزامنة للمعاملات عبر المناطق',
        'سجلات تدقيق غير قابلة للتعديل أو الحذف',
      ],
      operationalRole:
        'Protects customer assets, intellectual property, and regulatory records.',
      operationalRoleAr:
        'حماية قصوى لأصول العملاء وسجلاتهم المالية والبيانات الخاضعة للتنظيم.',
      accent: 'orange',
    },
    {
      id: 'infrastructure',
      stepNumber: '07',
      title: 'Physical Infrastructure',
      titleAr: 'البنية التحتية الفيزيائية',
      subtitle: 'Data centers, 100G/400G optical fiber, power & cooling.',
      subtitleAr: 'مراكز البيانات، ألياف ضوئية 100G/400G، والطاقة والتبريد.',
      icon: Server,
      techDetails: [
        'Tier-3/Tier-4 Facility Redundancy',
        'Diverse Dual-Conduit Fiber Routes',
        'Real-Time Environmental Telemetry',
      ],
      techDetailsAr: [
        'مرافق معتمدة بمعايير Tier-3/Tier-4',
        'مسارات ألياف مزدوجة ومحمية فيزيائياً',
        'قياسات بيئية وحرارية على مدار الساعة',
      ],
      operationalRole:
        'Guarantees the unbroken physical foundation powering every software layer.',
      operationalRoleAr:
        'تضمن الأساس الفيزيائي الصلب والمستقر لتشغيل كافة الطبقات البرمجية.',
      accent: 'navy',
    },
  ];

  const activeStage = stages[selectedStageIndex];

  return (
    <div className="w-full">
      {/* Visual Workflow Map (Desktop Horizontal, Tablet/Mobile Wrap) */}
      <div className="relative bg-[#080D1A] border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden shadow-2xl">
        {/* Subtle Background Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />

        {/* Integration Layer Banner */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-orange-400 font-bold">
              {language === 'ar' ? 'نموذج التدفق المعماري الشامل' : 'END-TO-END ARCHITECTURAL FLOW'}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {language === 'ar' ? 'من الحافة إلى البنية المؤسسية' : 'From Edge to Enterprise'}
            </h3>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#11182B] border border-white/10 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px]">
              {language === 'ar' ? 'طبقة UPT PLUS التكاملية والتشغيلية' : 'UPT PLUS Integration & Operations Fabric'}
            </span>
          </div>
        </div>

        {/* Flow Stage Node Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3 relative z-10">
          {stages.map((stage, idx) => {
            const isSelected = selectedStageIndex === idx;
            const Icon = stage.icon;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setSelectedStageIndex(idx)}
                className={`relative flex flex-col p-4 rounded-xl border text-left rtl:text-right transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                  isSelected
                    ? 'bg-[#151D32] border-orange-500 shadow-lg scale-[1.02]'
                    : 'bg-[#0E1527] border-white/10 hover:border-purple-400/50 hover:bg-[#11182B]'
                }`}
              >
                {/* Stage Step Number & Connector Arrow */}
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isSelected ? 'text-orange-400' : 'text-slate-500 group-hover:text-purple-400'
                    }`}
                  >
                    {stage.stepNumber}
                  </span>

                  <div
                    className={`w-7 h-7 rounded-md flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-orange-500/20 text-orange-400'
                        : 'bg-white/5 text-slate-400 group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-xs font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">
                  {language === 'ar' ? stage.titleAr : stage.title}
                </div>

                <div className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                  {language === 'ar' ? stage.subtitleAr : stage.subtitle}
                </div>

                {/* Subtle active status pill */}
                {isSelected && (
                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center gap-1.5 text-[10px] text-orange-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span>{language === 'ar' ? 'عرض التفاصيل' : 'Active Layer'}</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Stage Deep-Dive Architectural Breakdown Box */}
        <div className="mt-8 pt-6 border-t border-white/10 bg-[#0C1222] rounded-xl p-5 sm:p-7 border border-white/5 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="lg:max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-wider mb-1">
                <span>{language === 'ar' ? `المرحلة المعمارية ${activeStage.stepNumber}` : `ARCHITECTURAL LAYER ${activeStage.stepNumber}`}</span>
                <span>•</span>
                <span className="text-slate-400">{language === 'ar' ? activeStage.titleAr : activeStage.title}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {language === 'ar' ? activeStage.subtitleAr : activeStage.subtitle}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {language === 'ar' ? activeStage.operationalRoleAr : activeStage.operationalRole}
              </p>
            </div>

            {/* Technical Verification Points */}
            <div className="bg-[#11182B] p-4 rounded-lg border border-white/10 lg:w-96 shrink-0">
              <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-3">
                {language === 'ar' ? 'الضوابط والتقنيات الأساسية:' : 'Core Protocols & Guardrails:'}
              </div>
              <ul className="space-y-2">
                {(language === 'ar' ? activeStage.techDetailsAr : activeStage.techDetails).map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Integrated Operational Layer Callout */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-purple-400 shrink-0" />
              <span>
                {language === 'ar'
                  ? 'تعمل UPT PLUS كطبقة موحدة للتصميم المعماري، والنشر، والتأمين، والتشغيل المستمر عبر كافة المراحل.'
                  : 'UPT PLUS acts as the unified integration, security, and operational engineering layer across all stages.'}
              </span>
            </div>
            <span className="font-mono text-slate-500 text-[11px]">
              Multi-Layer Defense &amp; High Availability
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
