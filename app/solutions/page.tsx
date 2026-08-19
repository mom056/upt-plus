'use client';

import React from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionMarker from '@/components/ui/SectionMarker';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n';
import { CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

export default function SolutionsOverviewPage() {
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ChevronLeft : ChevronRight;

  const solutions = [
    {
      num: '01',
      id: 'cybersecurity',
      posture: 'BOUNDARY',
      postureAr: 'سياج الحماية',
      title: 'Cybersecurity',
      titleAr: 'الأمن السيبراني',
      tagline: 'Defensive Architecture, Continuous Governance & Resilient Operations',
      taglineAr: 'معمارية دفاعية، حوكمة مستمرة، وعمليات صامدة',
      headline: 'Defend complex environments with architecture-first security.',
      headlineAr: 'حماية البيئات المعقدة عبر معمارية أمنية متكاملة ترتكز على التصميم أولاً.',
      overview:
        'In a threat landscape of sophisticated adversaries and expanding attack surfaces, enterprise security cannot be an afterthought. UPT Plus delivers cybersecurity architectures engineered for resilient digital operations — embedding Zero Trust, identity-aware controls, and proactive defense directly into your infrastructure fabric.',
      overviewAr:
        'في ظل المشهد السيبراني المعقد وتوسع أسطح الهجمات، لا يمكن للأمن المؤسسي أن يكون مجرد طبقة ثانوية. تقدم UPT Plus بنيات أمنية متكاملة لدعم العمليات الرقمية الصامدة — عبر تضمين مبادئ Zero Trust وضوابط الهوية والحماية الاستباقية مباشرة في النسيج السحابي والفيزيائي للمؤسسة.',
      isBoundary: true,
      capabilities: [
        {
          code: 'SPEC-01',
          name: 'Application & API Defense',
          nameAr: 'أمان التطبيقات وواجهات البرمجة (APIs)',
          desc: 'Deep inspection and shielding of web workloads, microservices, and API endpoints against automated threats and logic flaws.',
          descAr: 'فحص وحماية عميقة لأحمال العمل والخدمات المصغرة وواجهات البرمجة ضد الثغرات والتهديدات المؤتمتة.',
        },
        {
          code: 'SPEC-02',
          name: 'Zero Trust & Access Architecture',
          nameAr: 'انعدام الثقة والوصول الآمن (Zero Trust)',
          desc: 'Identity-centric access replacing vulnerable VPN topologies with context-aware policies and least-privilege enforcement.',
          descAr: 'وصول آمن يعتمد على الهوية والسياق، مستبدلاً شبكات VPN التقليدية بسياسات وصول دقيقة ومبدأ الحد الأدنى من الصلاحيات.',
        },
        {
          code: 'SPEC-03',
          name: 'Cloud Security & Posture Hardening',
          nameAr: 'أمان البنى السحابية والتحصين المنهجي',
          desc: 'Hardening hybrid and multi-cloud environments, unified workload isolation, secrets management, and continuous posture audits.',
          descAr: 'تحصين البيئات السحابية والهجينة، عزل أحمال العمل، إدارة دورة حياة المفاتيح، وتدقيق التكوينات.',
        },
        {
          code: 'SPEC-04',
          name: 'Network Security & Traffic Containment',
          nameAr: 'أمان الشبكات والعزل الدقيق للبيانات',
          desc: 'Containment of lateral movement within enterprise networks and virtualized clusters through software-defined microsegmentation.',
          descAr: 'احتواء محاولات التحرك الجانبي داخل الشبكات الداخلية وعناقيد السحابة من خلال سياسات العزل الدقيق المعرفة برمجياً.',
        },
      ],
      outcomes: [
        'Reduction of single points of failure across critical workloads',
        'Protection of corporate data assets and sensitive transactions',
        'Minimized risk of unplanned operational disruptions from cyber incidents',
      ],
      outcomesAr: [
        'تقليص نقاط الفشل الفردية عبر أحمال العمل الحيوية',
        'حماية أصول البيانات المؤسسية والمعاملات الحساسة',
        'تقليص مخاطر التوقف غير المخطط الناتج عن الحوادث السيبرانية',
      ],
    },
    {
      num: '02',
      id: 'cloud',
      posture: 'DISTRIBUTION',
      postureAr: 'التوزيع المتوازن',
      title: 'Cloud Computing',
      titleAr: 'الحوسبة السحابية',
      tagline: 'Distributed Architecture, Hybrid Fabric & High Availability',
      taglineAr: 'بنية موزعة، نسيج هجين، وجاهزية تشغيلية فائقة',
      headline: 'Architect high-performance, resilient cloud foundations.',
      headlineAr: 'تصميم وبناء ركائز سحابية عالية الأداء ومصممة لتحمل أقصى متطلبات التشغيل.',
      overview:
        'Cloud adoption is not simply moving virtual machines; it is designing resilient, decoupled, and cost-effective operating foundations. UPT Plus provides foundational multi-zone cloud architecture, structured migration, hybrid connectivity, and container orchestration.',
      overviewAr:
        'التحول السحابي ليس مجرد نقل للخوادم؛ بل هو تصميم أنظمة تشغيل مرنة وموزعة وعالية الفعالية. تقدم UPT Plus هندسة سحابية شاملة — تشمل المعمارية متعددة المناطق، الترحيل المدروس، الربط الهجين، وإدارة الحاويات.',
      isDistributed: true,
      capabilities: [
        {
          code: 'SPEC-01',
          name: 'Enterprise Cloud Architecture',
          nameAr: 'هندسة السحابة للمؤسسات',
          desc: 'Design of fault-tolerant VPC topologies, landing zones, IAM hierarchies, and transit network routing for corporate operations.',
          descAr: 'تصميم طوبولوجيا الشبكات السحابية، مناطق الهبوط المؤسسية (Landing Zones)، وهياكل الصلاحيات للمؤسسات الكبرى.',
        },
        {
          code: 'SPEC-02',
          name: 'Cloud Migration & Workload Modernization',
          nameAr: 'الترحيل والتحديث السحابي',
          desc: 'Structured migration methodologies ensuring minimal business downtime, application refactoring, and workload compatibility.',
          descAr: 'منهجيات ترحيل مدروسة لضمان نقل الأنظمة وتحديث التطبيقات القديمة بأقل فترة توقف وتوافق تشغيلي تام.',
        },
        {
          code: 'SPEC-03',
          name: 'Hybrid & Multi-Cloud Connectivity',
          nameAr: 'السحابة الهجينة والربط المتعدد',
          desc: 'Low-latency, secure interconnects between on-premises data centers and distributed cloud nodes using direct links and encrypted overlays.',
          descAr: 'ربط آمن ومنخفض الكمون بين مراكز البيانات المحلية والمنصات السحابية عبر خطوط مخصصة وشبكات مشفرة.',
        },
        {
          code: 'SPEC-04',
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
      posture: 'BACKBONE',
      postureAr: 'العمود الفقري',
      title: 'Digital Infrastructure',
      titleAr: 'البنية التحتية الرقمية',
      tagline: 'Enterprise Foundation Enabling Secure Cloud & Resilient Operations',
      taglineAr: 'الركيزة المؤسسية لتمكين البيئات السحابية والعمليات الصامدة',
      headline: 'Build rock-solid physical and logical infrastructure foundations.',
      headlineAr: 'تأسيس بنية تحتية فيزيائية ومنطقية فائقة الاعتمادية تشكل عصب العمليات الرقمية.',
      overview:
        'Software applications and cloud services depend entirely on the reliability and throughput of underlying infrastructure. UPT Plus delivers enterprise campus networking, structured cabling, optical fiber backbones, and datacenter connectivity supporting your cloud and security investments.',
      overviewAr:
        'تعتمد التطبيقات والخدمات السحابية كلياً على موثوقية وسرعة البنية التحتية الأساسية. تقدم UPT Plus هندسة البنية التحتية المؤسسية — تشمل شبكات المقار، الكوابل الهيكلية، الألياف الضوئية، وربط مراكز البيانات لدعم الاستثمارات السحابية والأمنية.',
      isBackbone: true,
      capabilities: [
        {
          code: 'SPEC-01',
          name: 'Enterprise Campus & Core Networking',
          nameAr: 'شبكات المقار والشبكات الأساسية للمؤسسات',
          desc: 'High-throughput core, distribution, and access layer architectures built on resilient switching fabrics with rapid failover.',
          descAr: 'معمارية شبكية أساسية وتوزيعية عالية السرعة تعتمد على محولات متطورة مع بروتوكولات تحويل سريعة عند الأعطال.',
        },
        {
          code: 'SPEC-02',
          name: 'Datacenter Interconnect & Structured Cabling',
          nameAr: 'ربط مراكز البيانات والتمديدات الهيكلية',
          desc: 'Structured optical fiber backbones and engineered connectivity pathways designed for high-throughput operations.',
          descAr: 'تمديدات منظمة للألياف الضوئية ومسارات اتصال مهندسة لدعم سرعات النقل والعمليات العالية.',
        },
        {
          code: 'SPEC-03',
          name: 'Infrastructure Health & Telemetry',
          nameAr: 'مراقبة صحة البنية التحتية والقياس عن بعد',
          desc: 'Proactive network telemetry and link monitoring identifying transmission anomalies, packet loss, and link degradation early.',
          descAr: 'مراقبة مؤشرات الشبكة والتدفق للكشف المبكر عن فقدان الحزم وتدهور الخطوط لضمان الجاهزية المستمرة.',
        },
        {
          code: 'SPEC-04',
          name: 'Site Connectivity & Resilient Backbones',
          nameAr: 'اتصال المقار والشبكات الموزعة',
          desc: 'Encrypted multi-site interconnects and resilient SD-WAN architectures connecting distributed enterprise facilities.',
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
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-24 sm:pt-32 pb-24 relative overflow-hidden">
      {/* Construction Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '96px 96px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumbs items={[{ label: language === 'ar' ? 'الحلول والقدرات' : 'Solutions' }]} />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-12 sm:mb-16">
          <SectionMarker
            number="01"
            label={language === 'ar' ? 'الحلول والقدرات المعمارية' : 'ENTERPRISE SOLUTIONS'}
            variant="orange"
            className="mb-4"
          />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08] uppercase">
            {language === 'ar'
              ? 'الأمن السيبراني والحوسبة السحابية للمؤسسات.'
              : 'Cybersecurity & Cloud Computing for Enterprise.'}
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {language === 'ar'
              ? 'نقدم حلولاً معمارية متكاملة ترتكز على الأمن السيبراني والحوسبة السحابية، مدعومة ببنية تحتية رقمية متينة، لضمان صمود وتوسع البيئات التقنية الحيوية.'
              : 'UPT Plus delivers focused, architecture-first solutions centered on Cybersecurity and Cloud Computing, backed by dependable Digital Infrastructure to ensure long-term resilience and scale.'}
          </p>
        </div>

        {/* Architectural Chapter Navigation Strip */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-8 pb-4 mb-16 sm:mb-24 border-b border-white/10 text-xs font-mono">
          <span className="text-slate-500 uppercase">CHAPTERS:</span>
          {solutions.map((sol) => (
            <a
              key={sol.id}
              href={'#' + sol.id}
              className="flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors"
            >
              <span className="text-slate-500">{sol.num}</span>
              <span className="font-bold uppercase tracking-wider">{sol.title}</span>
              <span
                className={'text-[10px] hidden sm:inline ' +
                  (sol.isBoundary ? 'text-purple-400/90' : 'text-slate-500')}
              >
                [{sol.posture}]
              </span>
            </a>
          ))}
        </div>

        {/* ==================================================== */}
        {/* OPEN ARCHITECTURAL CHAPTERS (NO ENCLOSING BOXED CARDS) */}
        {/* ==================================================== */}
        <div className="space-y-24 sm:space-y-36">
          {solutions.map((sol) => (
            <section
              key={sol.id}
              id={sol.id}
              className="scroll-mt-28 border-t border-white/10 pt-10 sm:pt-14 relative"
            >
              {/* Chapter Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-[#FF7A00]">
                      {sol.num}
                    </span>
                    <span className="text-slate-600 font-mono">•</span>
                    <span
                      className={'text-xs font-mono font-bold uppercase tracking-widest ' +
                        (sol.isBoundary ? 'text-purple-400' : 'text-slate-400')}
                    >
                      {language === 'ar' ? sol.postureAr : sol.posture}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk',sans-serif] tracking-tight">
                    {language === 'ar' ? sol.titleAr : sol.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-wide">
                    {language === 'ar' ? sol.taglineAr : sol.tagline}
                  </p>
                </div>

                <div className="shrink-0">
                  <Button href="/contact" variant="secondary" size="sm" withArrow>
                    {language === 'ar' ? ('استشر خبرائنا في ' + sol.titleAr) : ('Consult on ' + sol.title)}
                  </Button>
                </div>
              </div>

              {/* Specification Grid: Blueprint Schematic + Narrative & Capabilities */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                
                {/* Left (5 Cols): Dedicated Architectural Specification Blueprint */}
                <div className="lg:col-span-5 flex flex-col space-y-6">
                  
                  {/* Schematic Field Container */}
                  <div className="w-full bg-[#080D1A] border border-white/10 rounded-sm p-4 relative">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5 text-[9px] font-mono text-slate-500 uppercase">
                      <span>{sol.title} — SPECIFICATION SCHEMATIC</span>
                      <span className="text-orange-400">UPT CONTROL PLANE</span>
                    </div>

                    <div className="w-full h-44 sm:h-52 relative">
                      {/* 01 CYBERSECURITY BOUNDARY SPECIFICATION */}
                      {sol.id === 'cybersecurity' && (
                        <svg className="w-full h-full" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                          <line x1="200" y1="10" x2="200" y2="170" stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />

                          <polygon
                            points="140,20 280,20 250,160 110,160"
                            fill="rgba(107,33,168,0.14)"
                            stroke="#9333EA"
                            strokeWidth="1.5"
                            strokeDasharray="4 3"
                          />
                          <polygon
                            points="160,35 260,35 235,145 135,145"
                            fill="none"
                            stroke="#C084FC"
                            strokeWidth="1"
                            strokeOpacity="0.4"
                          />

                          <line x1="20" y1="90" x2="140" y2="90" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
                          <circle cx="60" cy="90" r="4" fill="#FF7A00" />
                          <text x="60" y="110" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle">INGRESS</text>

                          <line x1="140" y1="75" x2="140" y2="105" stroke="#C084FC" strokeWidth="2.5" strokeLinecap="round" />
                          <line x1="140" y1="90" x2="250" y2="90" stroke="#FF7A00" strokeWidth="2.5" />
                          <circle cx="195" cy="90" r="4" fill="#FF7A00" />
                          <text x="195" y="110" fill="#C084FC" fontSize="9" fontFamily="monospace" textAnchor="middle">ZERO TRUST</text>

                          <line x1="250" y1="90" x2="380" y2="90" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
                          <circle cx="320" cy="90" r="4" fill="#FF7A00" />
                          <text x="320" y="110" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle">SECURE CORE</text>
                        </svg>
                      )}

                      {/* 02 CLOUD COMPUTING DISTRIBUTION SPECIFICATION */}
                      {sol.id === 'cloud' && (
                        <svg className="w-full h-full" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                          <line x1="20" y1="90" x2="110" y2="90" stroke="#FF7A00" strokeWidth="2.5" strokeLinecap="round" />
                          <circle cx="110" cy="90" r="4" fill="#FF7A00" />

                          <path d="M 110 90 L 160 40 L 250 40" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />
                          <circle cx="205" cy="40" r="3.5" fill="#FF7A00" />
                          <text x="205" y="28" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle">VPC / FABRIC</text>

                          <path d="M 110 90 L 250 90" stroke="#FF7A00" strokeWidth="2" />
                          <circle cx="205" cy="90" r="3.5" fill="#FF7A00" />
                          <text x="205" y="108" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle">MULTI-ZONE</text>

                          <path d="M 110 90 L 160 140 L 250 140" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />
                          <circle cx="205" cy="140" r="3.5" fill="#FF7A00" />
                          <text x="205" y="158" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle">HYBRID LINK</text>

                          <path d="M 250 40 L 300 90 L 380 90" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M 250 90 L 380 90" stroke="#FF7A00" strokeWidth="2" />
                          <path d="M 250 140 L 300 90 L 380 90" stroke="#FF7A00" strokeWidth="2" strokeLinejoin="round" />
                          <circle cx="300" cy="90" r="4" fill="#FF7A00" />
                          <circle cx="360" cy="90" r="3.5" fill="#FF7A00" />
                        </svg>
                      )}

                      {/* 03 DIGITAL INFRASTRUCTURE BACKBONE SPECIFICATION */}
                      {sol.id === 'infrastructure' && (
                        <svg className="w-full h-full" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="20" y1="90" x2="380" y2="90" stroke="#FF7A00" strokeWidth="3.5" strokeLinecap="round" />

                          <line x1="100" y1="35" x2="100" y2="145" stroke="#64748B" strokeWidth="1.5" />
                          <line x1="200" y1="35" x2="200" y2="145" stroke="#64748B" strokeWidth="1.5" />
                          <line x1="300" y1="35" x2="300" y2="145" stroke="#64748B" strokeWidth="1.5" />

                          <line x1="80" y1="45" x2="320" y2="45" stroke="rgba(255,255,255,0.12)" strokeDasharray="3 3" />
                          <line x1="80" y1="135" x2="320" y2="135" stroke="rgba(255,255,255,0.12)" strokeDasharray="3 3" />

                          <circle cx="100" cy="90" r="4" fill="#FF7A00" />
                          <circle cx="200" cy="90" r="4" fill="#FF7A00" />
                          <circle cx="300" cy="90" r="4" fill="#FF7A00" />

                          <circle cx="100" cy="45" r="2.5" fill="#64748B" />
                          <circle cx="200" cy="45" r="2.5" fill="#64748B" />
                          <circle cx="300" cy="45" r="2.5" fill="#64748B" />

                          <text x="100" y="162" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle">CAMPUS</text>
                          <text x="200" y="162" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle">OPTICAL</text>
                          <text x="300" y="162" fill="#64748B" fontSize="9" fontFamily="monospace" textAnchor="middle">TRANSIT</text>
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Strategic Outcomes Callout */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-[11px] font-mono uppercase text-orange-400 font-bold tracking-wider mb-3">
                      {language === 'ar' ? 'الأثر الاستراتيجي المؤسسي:' : 'Strategic Outcomes:'}
                    </div>
                    <ul className="space-y-2.5">
                      {(language === 'ar' ? sol.outcomesAr : sol.outcomes).map((val, vIdx) => (
                        <li key={vIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right (7 Cols): Narrative & 4 Open Specification Rows */}
                <div className="lg:col-span-7 flex flex-col space-y-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-3">
                      {language === 'ar' ? sol.headlineAr : sol.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {language === 'ar' ? sol.overviewAr : sol.overview}
                    </p>
                  </div>

                  {/* 4 Open Capability Specification Rows */}
                  <div className="space-y-6 pt-6 border-t border-white/10">
                    <div className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                      {language === 'ar' ? 'المواصفات والقدرات التقنية المعتمدة:' : 'ENGINEERING SPECIFICATIONS:'}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {sol.capabilities.map((cap) => (
                        <div key={cap.name} className="flex flex-col pb-4 border-b border-white/5">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[10px] font-mono text-slate-500">
                              {cap.code}
                            </span>
                            <span className="text-xs font-bold font-mono uppercase tracking-wider text-slate-200">
                              {language === 'ar' ? cap.nameAr : cap.name}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {language === 'ar' ? cap.descAr : cap.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </section>
          ))}
        </div>

        {/* Global Resolution Footer Strip */}
        <div className="mt-28 sm:mt-36 pt-12 border-t border-white/10 text-center max-w-2xl mx-auto">
          <div className="w-0.5 h-10 bg-[#FF7A00] mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-black text-white font-['Space_Grotesk',sans-serif] uppercase mb-3">
            {language === 'ar' ? 'جاهزون لتصميم بنية المستقبل؟' : 'Ready to Architect Your Environment?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            {language === 'ar'
              ? 'ناقش أهدافك المعمارية ومتطلبات الصمود الرقمي مع مهندسي UPT PLUS.'
              : 'Consult with our engineering architects to build a secure, resilient, and scalable digital foundation.'}
          </p>
          <Button href="/contact" variant="primary" size="md" withArrow>
            {language === 'ar' ? 'تحدث مع خبير تقني' : 'Talk to an Expert'}
          </Button>
        </div>

      </div>
    </main>
  );
}
