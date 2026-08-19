'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import SectionMarker from '@/components/ui/SectionMarker';
import { Globe2, ShieldCheck, Code2, Cloud, Database, Server, CheckCircle2 } from 'lucide-react';

export default function SignatureEdgeSequence() {
  const { language } = useLanguage();
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages = [
    {
      id: 'edge',
      num: '01',
      name: 'Edge & Ingress',
      nameAr: 'الحافة وبوابات الدخول',
      role: 'Global Anycast DNS, DDoS mitigation & TLS termination.',
      roleAr: 'نظام Anycast الموزع عالمياً، تنقية هجمات DDoS، وإنهاء التشفير.',
      icon: Globe2,
      protocols: ['BGP Anycast Routing', 'Volumetric Scrubbing', 'Edge Caching'],
      protocolsAr: ['توجيه Anycast المسرع', 'تنقية التدفقات الضخمة', 'التخزين المؤقت على الحافة'],
    },
    {
      id: 'security',
      num: '02',
      name: 'Security Boundary',
      nameAr: 'سياج الأمان وانعدام الثقة',
      role: 'Zero Trust validation, WAF inspection & API shields.',
      roleAr: 'تحقق Zero Trust المستمر، جدران WAF، وحماية واجهات البرمجة.',
      icon: ShieldCheck,
      isBoundary: true,
      protocols: ['Contextual MFA Validation', 'WAF Payload Inspection', 'API Schema Guard'],
      protocolsAr: ['التحقق السياقي متعدد العوامل', 'فحص حمولات البيانات WAF', 'حماية مخططات APIs'],
    },
    {
      id: 'apps',
      num: '03',
      name: 'Applications & APIs',
      nameAr: 'التطبيقات وواجهات البرمجة',
      role: 'Decoupled microservices, container routing & event streams.',
      roleAr: 'خدمات مصغرة مستقلة، توجيه الحاويات، وتدفق الأحداث اللحظية.',
      icon: Code2,
      protocols: ['Kubernetes Ingress Mesh', 'Async Event Queues', 'Service Decoupling'],
      protocolsAr: ['توجيه شبكات Kubernetes', 'قوائم الأحداث اللحظية', 'استقلالية الخدمات'],
    },
    {
      id: 'cloud',
      num: '04',
      name: 'Cloud Computing',
      nameAr: 'الحوسبة السحابية',
      role: 'Multi-zone hybrid fabric with sub-second failover.',
      roleAr: 'نسيج سحابي هجين متعدد المناطق مع تحويل فوري عند الأعطال.',
      icon: Cloud,
      protocols: ['Multi-AZ Active Replication', 'VPC Transit Mesh', 'Infrastructure as Code'],
      protocolsAr: ['مزامنة حوسبية متعددة المناطق', 'بوابات العبور المشفرة', 'البنية التحتية المؤتمتة كرمز'],
    },
    {
      id: 'data',
      num: '05',
      name: 'Data & Secrets',
      nameAr: 'البيانات والأسرار المشفرة',
      role: 'Hardware cryptographic modules & transactional DB replication.',
      roleAr: 'وحدات تشفير عتادية HSM ومزامنة قواعد البيانات الحيوية.',
      icon: Database,
      protocols: ['Field-Level Encryption', 'HSM Key Management', 'Immutable Audit Log'],
      protocolsAr: ['تشفير دقيق على مستوى الحقول', 'إدارة المفاتيح عتادياً', 'سجلات تدقيق غير قابلة للتعديل'],
    },
    {
      id: 'infra',
      num: '06',
      name: 'Digital Infrastructure',
      nameAr: 'البنية التحتية الرقمية',
      role: 'High-density optical fiber backbones & redundant datacenter pathways.',
      roleAr: 'كوابل الألياف الضوئية عالية الكثافة ومسارات مراكز البيانات المتكررة.',
      icon: Server,
      protocols: ['Dual-Conduit Fiber Routes', 'Carrier Spine-Leaf Fabric', 'Continuous Telemetry'],
      protocolsAr: ['مسارات ألياف مزدوجة ومحمية', 'محولات Spine-Leaf المتقدمة', 'مراقبة الخطوط على مدار الساعة'],
    },
  ];

  const current = stages[activeStage];

  return (
    <section className="py-20 sm:py-28 bg-[#080D1A] text-slate-100 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionMarker
            number="03"
            label={language === 'ar' ? 'النموذج المعماري الشامل' : 'END-TO-END ARCHITECTURAL SEQUENCE'}
            variant="purple"
            className="mb-4"
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk',sans-serif] tracking-tight uppercase">
            {language === 'ar' ? 'من الحافة إلى صميم المؤسسة.' : 'From Edge to Enterprise.'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'ar'
              ? 'تسلسل معماري موحد يربط نقاط الدخول الموزعة عبر طبقات الأمان والتطبيقات والحوسبة وصولاً إلى العمود الفقري الفيزيائي.'
              : 'An unbroken, disciplined engineering flow connecting distributed edge endpoints through security validation, application meshes, cloud clusters, and physical backbone infrastructure.'}
          </p>
        </div>

        <div className="bg-[#0D1326] border border-white/15 rounded-md p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
              <span className="font-bold text-white uppercase tracking-wider">
                {language === 'ar' ? 'مسار الإشارة الموحد عبر المنظومة' : 'CONTINUOUS UPT SIGNAL FLOW'}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-slate-400 text-[11px]">
              <span>[01] INGRESS → [06] BACKBONE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-2 relative">
            {stages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              const Icon = stage.icon;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={'relative p-4 rounded text-left rtl:text-right border transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ' +
                    (isSelected
                      ? 'bg-[#151D32] border-orange-500 shadow-md ring-1 ring-orange-500/50'
                      : stage.isBoundary
                      ? 'bg-[#10142B] border-purple-500/40 hover:border-purple-400'
                      : 'bg-[#090F20] border-white/10 hover:border-white/20')}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={'font-mono text-xs font-bold ' + (isSelected ? 'text-orange-400' : 'text-slate-500')}>
                      {stage.num}
                    </span>
                    <div
                      className={'w-6 h-6 rounded flex items-center justify-center ' +
                        (isSelected
                          ? 'bg-orange-500/20 text-orange-400'
                          : stage.isBoundary
                          ? 'bg-purple-900/40 text-purple-300'
                          : 'bg-white/5 text-slate-400')}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="text-xs font-bold text-white mb-1 truncate">
                    {language === 'ar' ? stage.nameAr : stage.name}
                  </div>

                  <div className="text-[10px] text-slate-400 leading-snug line-clamp-2">
                    {language === 'ar' ? stage.roleAr : stage.role}
                  </div>

                  {isSelected && (
                    <div className="mt-3 pt-2 border-t border-orange-500/40 flex items-center gap-1.5 text-[9px] font-mono text-orange-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>{language === 'ar' ? 'الطبقة المحددة' : 'Active Stage'}</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#070B16] p-5 rounded border border-white/5">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-wider mb-1">
                <span>{language === 'ar' ? ('المرحلة ' + current.num) : ('STAGE ' + current.num)}</span>
                <span>•</span>
                <span className="text-white">{language === 'ar' ? current.nameAr : current.name}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {language === 'ar' ? current.roleAr : current.role}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {language === 'ar'
                  ? 'تعمل UPT Plus كطبقة هندسية موحدة تضمن التدفق الآمن والصحيح للبيانات عبر هذه المرحلة دون انقطاع.'
                  : 'UPT Plus delivers disciplined architectural governance ensuring uninterrupted, cryptographic integrity across this stage.'}
              </p>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:ps-6 rtl:lg:border-r rtl:lg:border-l-0 rtl:lg:pe-6">
              <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-2.5 font-bold">
                {language === 'ar' ? 'الضوابط والبروتوكولات:' : 'Core Protocols & Standards:'}
              </div>
              <ul className="space-y-2">
                {(language === 'ar' ? current.protocolsAr : current.protocols).map((p, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
