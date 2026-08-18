'use client';

import React from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionMarker from '@/components/ui/SectionMarker';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n';
import {
  ShieldCheck,
  CloudCog,
  Server,
  CheckCircle2,
  Lock,
  Network,
  Cpu,
  Layers,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export default function SolutionsOverviewPage() {
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const solutions = [
    {
      num: '01',
      id: 'cybersecurity',
      title: 'Cybersecurity',
      titleAr: 'الأمن السيبراني',
      tagline: 'Defensive Architecture, Continuous Governance & Resilient Operations',
      taglineAr: 'معمارية دفاعية، حوكمة مستمرة، وعمليات صامدة',
      headline: 'Defend complex environments with architecture-first security.',
      headlineAr: 'حماية البيئات المعقدة عبر معمارية أمنية متكاملة ترتكز على التصميم أولاً.',
      overview:
        'In a threat landscape of sophisticated adversaries and expanding attack surfaces, enterprise security cannot be an afterthought. UPT Plus delivers full-lifecycle cybersecurity architectures engineered for resilient digital operations — embedding Zero Trust, identity-aware controls, API defense, and proactive telemetry directly into your cloud and physical infrastructure fabric.',
      overviewAr:
        'في ظل المشهد السيبراني المعقد وتوسع أسطح الهجمات، لا يمكن للأمن المؤسسي أن يكون مجرد طبقة ثانوية. تقدم UPT Plus بنيات أمنية متكاملة ومصممة لدعم العمليات الرقمية الصامدة — عبر تضمين مبادئ انعدام الثقة (Zero Trust)، وضوابط الهوية، وحماية واجهات التطبيقات، والمراقبة الاستباقية مباشرة في النسيج السحابي والفيزيائي للمؤسسة.',
      icon: ShieldCheck,
      badgeVariant: 'orange' as const,
      isPrimary: true,
      capabilities: [
        {
          name: 'Application & API Defense',
          nameAr: 'أمان التطبيقات وواجهات البرمجة (APIs)',
          desc: 'Deep inspection and shielding of modern web workloads, microservices, and API endpoints against logic flaws and automated threats.',
          descAr: 'فحص وحماية عميقة لأحمال العمل الحديثة والخدمات المصغرة وواجهات البرمجة ضد الثغرات والتهديدات المؤتمتة.',
        },
        {
          name: 'Zero Trust & Access Architecture',
          nameAr: 'انعدام الثقة والوصول الآمن (Zero Trust)',
          desc: 'Identity-centric perimeterless access replacing vulnerable VPN topologies with context-aware access policies and least-privilege enforcement.',
          descAr: 'وصول آمن بدون حدود محيطية يعتمد على الهوية والسياق، مستبدلاً شبكات VPN التقليدية بسياسات وصول دقيقة ومبدأ الحد الأدنى من الصلاحيات.',
        },
        {
          name: 'Cloud Security & Posture Hardening',
          nameAr: 'أمان البنى السحابية والتحصين المنهجي',
          desc: 'Hardening hybrid and multi-cloud environments, unified workload isolation, secrets lifecycle governance, and configuration audits.',
          descAr: 'تحصين البيئات السحابية والهجينة، عزل أحمال العمل، إدارة دورة حياة المفاتيح البرمجية، وتدقيق التكوينات.',
        },
        {
          name: 'Network Security & Traffic Containment',
          nameAr: 'أمان الشبكات والعزل الدقيق للبيانات',
          desc: 'Containment of lateral adversary movement within internal networks and virtualized clusters through software-defined microsegmentation.',
          descAr: 'احتواء محاولات التحرك الجانبي داخل الشبكات الداخلية وعناقيد السحابة من خلال سياسات العزل الدقيق المعرفة برمجياً.',
        },
      ],
      outcomes: [
        'Elimination of single-point-of-failure vulnerabilities across critical workloads',
        'Protection of corporate data assets and sensitive application transactions',
        'Minimized risk of unplanned operational disruptions from cyber incidents',
      ],
      outcomesAr: [
        'القضاء على نقاط الضعف الفردية عبر أحمال العمل الحيوية',
        'حماية أصول البيانات المؤسسية والمعاملات التطبيقية الحساسة',
        'تقليص مخاطر التوقف غير المخطط الناتج عن الحوادث السيبرانية',
      ],
    },
    {
      num: '02',
      id: 'cloud',
      title: 'Cloud Computing',
      titleAr: 'الحوسبة السحابية',
      tagline: 'Distributed Architecture, Hybrid Fabric & High Availability',
      taglineAr: 'بنية موزعة، نسيج هجين، وجاهزية تشغيلية فائقة',
      headline: 'Architect high-performance, resilient cloud foundations.',
      headlineAr: 'تصميم وبناء ركائز سحابية عالية الأداء ومصممة لتحمل أقصى متطلبات التشغيل.',
      overview:
        'Cloud adoption is not simply moving virtual machines; it is designing resilient, decoupled, and cost-effective digital operating foundations. UPT Plus provides cloud engineering — from foundational multi-zone cloud architecture and structured migration to hybrid connectivity, container orchestration, and continuous performance tuning.',
      overviewAr:
        'التحول السحابي ليس مجرد نقل للخوادم؛ بل هو تصميم أنظمة تشغيل رقمية مرنة وموزعة وعالية الفعالية. تقدم UPT Plus هندسة سحابية شاملة — من المعمارية متعددة المناطق والترحيل المدروس، إلى الربط الهجين، إدارة الحاويات، والتحسين المستمر للأداء.',
      icon: CloudCog,
      badgeVariant: 'purple' as const,
      isPrimary: true,
      capabilities: [
        {
          name: 'Enterprise Cloud Architecture',
          nameAr: 'هندسة السحابة للمؤسسات',
          desc: 'Design of fault-tolerant, scalable VPC topologies, landing zones, IAM hierarchies, and transit network routing for corporate operations.',
          descAr: 'تصميم طوبولوجيا الشبكات السحابية، مناطق الهبوط المؤسسية (Landing Zones)، وهياكل الصلاحيات للمؤسسات الكبرى.',
        },
        {
          name: 'Cloud Migration & Workload Modernization',
          nameAr: 'الترحيل والتحديث السحابي',
          desc: 'Structured migration methodologies ensuring minimal business downtime, legacy application refactoring, and complete workload compatibility.',
          descAr: 'منهجيات ترحيل مدروسة لضمان نقل الأنظمة وتحديث التطبيقات القديمة بأقل فترة توقف وتوافق تشغيلي تام.',
        },
        {
          name: 'Hybrid & Multi-Cloud Connectivity',
          nameAr: 'السحابة الهجينة والربط المتعدد',
          desc: 'Low-latency, secure interconnects between on-premises data centers and distributed cloud nodes using direct links and encrypted overlays.',
          descAr: 'ربط آمن ومنخفض الكمون بين مراكز البيانات المحلية والمنصات السحابية عبر خطوط مخصصة وشبكات مشفرة.',
        },
        {
          name: 'High Availability & Resilient Operations',
          nameAr: 'التوافر العالي واستمرارية الأعمال (HA/DR)',
          desc: 'Multi-zone failover architectures, real-time data replication, and rigorous recovery engineering for mission-critical services.',
          descAr: 'معمارية التحويل التلقائي عند الأعطال، المزامنة اللحظية للبيانات، وتحقيق أعلى معايير استعادة الخدمة.',
        },
      ],
      outcomes: [
        'Elastic compute capacity scaling with enterprise operational demand',
        'Structured disaster recovery topologies minimizing business interruption',
        'Predictable operational spending through continuous architectural optimization',
      ],
      outcomesAr: [
        'مرونة حوسبية قابلة للتوسع مع تزايد متطلبات العمل التشغيلية',
        'هندسة متطورة للتعافي من الكوارث تقلص فترات انقطاع الخدمة',
        'نفقات تشغيلية مدروسة ومحسنة باستمرار عبر تصاميم معمارية دقيقة',
      ],
    },
    {
      num: '03',
      id: 'infrastructure',
      title: 'Digital Infrastructure',
      titleAr: 'البنية التحتية الرقمية',
      tagline: 'Enterprise Foundation Enabling Secure Cloud & Resilient Operations',
      taglineAr: 'الركيزة المؤسسية لتمكين البيئات السحابية والعمليات الصامدة',
      headline: 'Build rock-solid physical and logical infrastructure foundations.',
      headlineAr: 'تأسيس بنية تحتية فيزيائية ومنطقية فائقة الاعتمادية تشكل عصب العمليات الرقمية.',
      overview:
        'Software applications and cloud services depend entirely on the reliability, throughput, and physical integrity of underlying infrastructure. UPT Plus delivers enterprise infrastructure engineering — encompassing high-performance campus networking, structured cabling, optical fiber backbones, and datacenter connectivity supporting your cloud and security investments.',
      overviewAr:
        'تعتمد التطبيقات البرمجية والخدمات السحابية كلياً على موثوقية وسرعة وسلامة البنية التحتية الأساسية. تقدم UPT Plus هندسة البنية التحتية المؤسسية — تشمل شبكات المقار عالية الأداء، شبكات الكوابل الهيكلية، شبكات الألياف الضوئية، وربط مراكز البيانات لتمكين الاستثمارات السحابية والأمنية.',
      icon: Server,
      badgeVariant: 'purple' as const,
      isPrimary: false,
      capabilities: [
        {
          name: 'Enterprise Campus & Core Networking',
          nameAr: 'شبكات المقار والشبكات الأساسية للمؤسسات',
          desc: 'High-throughput core, distribution, and access layer architectures built on resilient switching fabrics with rapid failover.',
          descAr: 'معمارية شبكية أساسية وتوزيعية عالية السرعة تعتمد على محولات متطورة مع بروتوكولات تحويل سريعة عند الأعطال.',
        },
        {
          name: 'Datacenter Interconnect & Structured Cabling',
          nameAr: 'ربط مراكز البيانات والتمديدات الهيكلية',
          desc: 'Organized, certified single-mode/multi-mode optical fiber installations and physical pathways engineered for high-throughput connectivity.',
          descAr: 'تمديدات منظمة ومعتمدة للألياف الضوئية والكوابل الهيكلية المصممة لدعم سرعات النقل العالية والمسارات الآمنة.',
        },
        {
          name: 'Infrastructure Health & Telemetry',
          nameAr: 'مراقبة صحة البنية التحتية والقياس عن بعد',
          desc: 'Proactive network telemetry and link monitoring identifying transmission anomalies, packet loss, and link degradation early.',
          descAr: 'مراقبة مؤشرات الشبكة والتدفق للكشف المبكر عن فقدان الحزم وتدهور الخطوط لضمان الجاهزية المستمرة.',
        },
        {
          name: 'Site Connectivity & Resilient Backbones',
          nameAr: 'اتصال المقار والشبكات الموزعة',
          desc: 'Encrypted multi-site interconnects and resilient SD-WAN architectures connecting distributed enterprise offices and operational facilities.',
          descAr: 'ربط مشفر بين المقار وشبكات SD-WAN لربط مقرات المؤسسة وفروعها التشغيلية الموزعة بأمان.',
        },
      ],
      outcomes: [
        'Elimination of physical and logical transmission bottlenecks across enterprise sites',
        'Standardized, well-documented cabling and switching topology built for long-term maintainability',
        'Dependable physical backbone underpinning multi-cloud and security deployments',
      ],
      outcomesAr: [
        'إزالة اختناقات النقل الفيزيائية والمنطقية عبر كافة مقرات المؤسسة',
        'بنية شبكية وكوابل قياسية وموثقة بدقة مصممة للاستدامة وسهولة الصيانة',
        'عمود فقري فيزيائي متين يدعم استثمارات السحابة والأمن السيبراني',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24 bg-grid-architectural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: language === 'ar' ? 'الحلول التقنية' : 'Solutions' }]} />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-16">
          <SectionMarker
            number="01"
            label={language === 'ar' ? 'الحلول والقدرات المعمارية' : 'ENTERPRISE SOLUTIONS'}
            variant="orange"
            className="mb-4"
          />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.1]">
            {language === 'ar'
              ? 'الأمن السيبراني والحوسبة السحابية للمؤسسات.'
              : 'Cybersecurity & Cloud Computing for Enterprise.'}
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {language === 'ar'
              ? 'نقدم حلولاً معمارية متكاملة ترتكز على الأمن السيبراني والحوسبة السحابية، مدعومة ببنية تحتية رقمية متينة، لضمان صمود وتوسع البيئات التقنية الحيوية.'
              : 'UPT Plus engineers focused, architecture-first solutions centered on Cybersecurity and Cloud Computing, backed by dependable Digital Infrastructure to ensure long-term resilience and scale.'}
          </p>
        </div>

        {/* 3 Solutions Primary Groups */}
        <div className="space-y-10">
          {solutions.map((sol) => {
            const Icon = sol.icon;

            return (
              <div
                key={sol.id}
                id={sol.id}
                className={`bg-[#0D1326] border rounded-md p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all ${
                  sol.isPrimary
                    ? 'border-white/15 hover:border-orange-500/40'
                    : 'border-white/10 hover:border-purple-500/30'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8">
                    {/* Header with Identifier */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div
                        className={`w-10 h-10 rounded flex items-center justify-center ${
                          sol.id === 'cybersecurity'
                            ? 'bg-orange-500/10 border border-orange-500/30 text-orange-400'
                            : sol.id === 'cloud'
                            ? 'bg-purple-500/10 border border-purple-500/30 text-purple-400'
                            : 'bg-white/5 border border-white/10 text-slate-300'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-slate-500">
                            {sol.num}
                          </span>
                          <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                            {language === 'ar' ? sol.taglineAr : sol.tagline}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mt-0.5">
                          {language === 'ar' ? sol.titleAr : sol.title}
                        </h2>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-slate-200 mb-3">
                      {language === 'ar' ? sol.headlineAr : sol.headline}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {language === 'ar' ? sol.overviewAr : sol.overview}
                    </p>

                    {/* Capabilities grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {sol.capabilities.map((cap) => (
                        <div
                          key={cap.name}
                          className="p-3.5 rounded bg-[#11182B] border border-white/10 text-xs"
                        >
                          <div className="font-bold text-white mb-1">
                            {language === 'ar' ? cap.nameAr : cap.name}
                          </div>
                          <div className="text-slate-400 leading-relaxed">
                            {language === 'ar' ? cap.descAr : cap.desc}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button href="/contact" variant="primary" size="sm" withArrow>
                      {language === 'ar' ? `استشر خبرائنا في ${sol.titleAr}` : `Consult on ${sol.title}`}
                    </Button>
                  </div>

                  {/* Strategic Outcomes Aside */}
                  <div className="lg:col-span-4 bg-[#11182B] p-5 sm:p-6 rounded-md border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider mb-3">
                        {language === 'ar' ? 'الأثر الاستراتيجي المؤسسي:' : 'Strategic Outcomes:'}
                      </div>
                      <ul className="space-y-2.5">
                        {(language === 'ar' ? sol.outcomesAr : sol.outcomes).map((val, vIdx) => (
                          <li key={vIdx} className="flex items-start gap-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{val}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                      {language === 'ar'
                        ? 'تصميم معماري يرتكز على الانضباط الهندسي والصمود التشغيلي'
                        : 'Engineered for operational resilience and continuous availability'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

