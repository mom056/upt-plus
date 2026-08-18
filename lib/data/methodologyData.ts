export interface MethodologyStep {
  step: string;
  title: string;
  titleAr: string;
  headline: string;
  headlineAr: string;
  description: string;
  descriptionAr: string;
  deliverables: string[];
  deliverablesAr: string[];
}

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: '01',
    title: 'Discover',
    titleAr: 'الاكتشاف والتقييم',
    headline: 'Analyze existing environments, operational constraints, and business risks.',
    headlineAr: 'تحليل البيئات الحالية، القيود التشغيلية، ومخاطر الأعمال.',
    description:
      'We conduct deep architectural discovery, cataloging network dependencies, data flows, application interfaces, and compliance parameters to establish an accurate baseline.',
    descriptionAr:
      'نجري دراسة معمارية استكشافية عميقة لتوثيق تبعيات الشبكة، مسارات البيانات، واجهات التطبيقات، ومتطلبات الامتثال لتأسيس خط أساس دقيق وموثوق.',
    deliverables: [
      'Comprehensive Dependency & Traffic Map',
      'Security & Risk Posture Baseline',
      'Infrastructure Capacity & Bottleneck Audit',
    ],
    deliverablesAr: [
      'خريطة شاملة لتبعية الأنظمة وتدفقات البيانات',
      'خط أساس للحالة الأمنية وتقييم المخاطر',
      'تدقيق سعة البنية التحتية والاختناقات التشغيلية',
    ],
  },
  {
    step: '02',
    title: 'Architect',
    titleAr: 'التصميم والهندسة المعمارية',
    headline: 'Design secure, scalable target solutions and implementation plans.',
    headlineAr: 'تصميم حلول معمارية آمنة، قابلة للتوسع، وخطط تنفيذ محكمة.',
    description:
      'Our senior architects formulate target architectures, high-level and low-level designs (HLD/LLD), microsegmentation blueprints, and migration roadmaps engineered for zero disruption.',
    descriptionAr:
      'يصيغ كبار مهندسينا المعمارية المستهدفة، والتصاميم الرفيعة والتفصيلية (HLD/LLD)، ومخططات العزل الأمني، وخرائط طريق النقل دون انقطاع.',
    deliverables: [
      'Target Architecture Blueprint (HLD/LLD)',
      'Zero Trust & Microsegmentation Specification',
      'Risk-Mitigated Phased Execution Plan',
    ],
    deliverablesAr: [
      'مخطط المعمارية المستهدفة والتصاميم التفصيلية',
      'مواصفات أمان انعدام الثقة والعزل الدقيق',
      'خطة تنفيذ مرحلية مدروسة ومحددة المخاطر',
    ],
  },
  {
    step: '03',
    title: 'Deploy',
    titleAr: 'النشر والتكامل الميداني',
    headline: 'Implement technology through controlled deployment and deep integration.',
    headlineAr: 'تنفيذ التقنيات عبر نشر منضبط وتكامل عميق بين الأنظمة.',
    description:
      'Executing physical infrastructure setup, cloud landing zones, automated pipeline builds, and software configuration via declarative Infrastructure as Code.',
    descriptionAr:
      'تنفيذ البنية التحتية الفيزيائية، مناطق الهبوط السحابية، مسارات النشر المؤتمتة، وإعداد الأنظمة عبر البنية التحتية البرمجية (IaC).',
    deliverables: [
      'Automated Infrastructure-as-Code Repositories',
      'Physical & Logical Staging Validation',
      'Non-Disruptive Migration Execution',
    ],
    deliverablesAr: [
      'مستودعات البنية التحتية البرمجية المؤتمتة',
      'التحقق من جاهزية البيئات التجريبية والفيزيائية',
      'تنفيذ الترحيل التدريجي دون انقطاع الخدمات',
    ],
  },
  {
    step: '04',
    title: 'Secure',
    titleAr: 'التحصين والتحقق الأمني',
    headline: 'Validate configuration hardening, access controls, and operational security.',
    headlineAr: 'التحقق من تحصين التكوينات، ضوابط الوصول، والأمان التشغيلي.',
    description:
      'Rigorous security hardening, automated vulnerability scans, identity posture verification, and failover validation before promoting to production status.',
    descriptionAr:
      'تحصين أمني صارم، فحص مؤتمت للثغرات، التحقق من ضوابط الهوية، واختبارات التحويل عند الأعطال قبل الاعتماد النهائي للبيئة الإنتاجية.',
    deliverables: [
      'Hardening Compliance Verification Report',
      'Penetration & API Schema Audit Sign-off',
      'Failover & DR Rehearsal Documentation',
    ],
    deliverablesAr: [
      'تقرير التحقق من الامتثال والتحصين الأمني',
      'اعتماد فحص واجهات البرمجة واختبارات الاختراق',
      'توثيق اختبارات التعافي والتحويل عند الطوارئ',
    ],
  },
  {
    step: '05',
    title: 'Operate',
    titleAr: 'التشغيل والمراقبة المستمرة',
    headline: 'Monitor, support, and maintain implemented environments with operational rigor.',
    headlineAr: 'مراقبة ودعم وصيانة البيئات المنفذة بانضباط واحترافية تشغيلية.',
    description:
      'Providing telemetry ingestion, continuous observability, incident management, performance tuning, and structured support tiers.',
    descriptionAr:
      'توفير المراقبة الشاملة، استيعاب القياسات اللحظية، إدارة الحوادث، تحسين الأداء، ومستويات دعم فني منظمة.',
    deliverables: [
      'Unified Telemetry & SLO Dashboards',
      'Incident Response & Escalation Framework',
      'Regular Configuration & Health Audits',
    ],
    deliverablesAr: [
      'لوحات القياس الموحدة ومؤشرات مستوى الخدمة',
      'إطار الاستجابة للحوادث والتصعيد الهندسي',
      'تدقيق دوري للصحة العامة وضبط التكوينات',
    ],
  },
  {
    step: '06',
    title: 'Evolve',
    titleAr: 'التطوير والتحديث المستمر',
    headline: 'Continuously optimize and modernize as business requirements grow.',
    headlineAr: 'التحسين والتحديث المستمر مع تطور وتوسع متطلبات الأعمال.',
    description:
      'Conducting periodic architectural reviews, technology refreshes, cost optimization iterations, and strategic capability roadmapping.',
    descriptionAr:
      'إجراء مراجعات معمارية دورية، تحديث التقنيات، تحسين التكاليف التشغيلية، ووضع خارطة طريق لتطوير القدرات المستقبلية.',
    deliverables: [
      'Quarterly Architectural Evolution Roadmap',
      'Continuous FinOps Cost Optimization Reports',
      'Emerging Technology Integration Reviews',
    ],
    deliverablesAr: [
      'خارطة طريق ربع سنوية لتطوير المعمارية التقنية',
      'تقارير دورية لتحسين التكاليف وترشيد الإنفاق',
      'مراجعات لاعتماد التقنيات الحديثة وتكاملها',
    ],
  },
];
