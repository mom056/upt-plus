export interface ServiceCategory {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  iconName: string;
  features: {
    name: string;
    nameAr: string;
    details: string;
    detailsAr: string;
  }[];
  operationalMetrics: string[];
  operationalMetricsAr: string[];
}

export const MANAGED_SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'managed-security',
    title: 'Managed Security Operations',
    titleAr: 'إدارة العمليات الأمنية',
    description:
      'Continuous security monitoring, threat detection, vulnerability triage, and rapid incident response protocols engineered to protect enterprise assets.',
    descriptionAr:
      'مراقبة أمنية متواصلة، اكتشاف التهديدات، معالجة الثغرات، وبروتوكولات استجابة سريعة للحوادث لحماية الأصول الرقمية للمؤسسة.',
    iconName: 'ShieldAlert',
    features: [
      {
        name: 'Proactive Threat Monitoring & Log Analysis',
        nameAr: 'المراقبة الاستباقية للتهديدات وتحليل السجلات',
        details: 'Telemetry ingestion from endpoints, cloud workloads, firewalls, and application gateways.',
        detailsAr: 'استيعاب وتحليل القياسات عن بعد من الأجهزة الطرفية، السحب، جدران الحماية، وبوابات التطبيقات.',
      },
      {
        name: 'Vulnerability Management & Patch Governance',
        nameAr: 'إدارة الثغرات وحوكمة التحديثات الأمنية',
        details: 'Structured prioritization and staged testing of critical CVE patches across hybrid infrastructure.',
        detailsAr: 'جدولة واختبار التحديثات الأمنية الحرجة عبر البنية التحتية الهجينة وفق أولويات واضحة.',
      },
      {
        name: 'Security Incident Containment',
        nameAr: 'احتواء الحوادث الأمنية والتحقيق الرقمي',
        details: 'Rapid isolation procedures, forensic preservation, and structured remediation playbooks.',
        detailsAr: 'إجراءات عزل سريعة، حفظ الأدلة الرقمية، وتطبيق أدلة عمل منهجية للمعالجة والاستعادة.',
      },
      {
        name: 'Posture Compliance Reporting',
        nameAr: 'تقارير الامتثال والحالة الأمنية',
        details: 'Regular governance reviews evaluating security controls against regulatory and corporate baselines.',
        detailsAr: 'مراجعات دورية لتقييم الضوابط الأمنية مقابل المعايير التنظيمية وسياسات المؤسسة.',
      },
    ],
    operationalMetrics: [
      'Proactive attack surface reduction',
      'Audited security baseline compliance',
      'Systematic vulnerability mitigation cycles',
    ],
    operationalMetricsAr: [
      'تقليص استباقي لمساحة الهجوم المعرضة للخطر',
      'امتثال مدقق للمعايير والسياسات الأمنية',
      'دورات منهجية لمعالجة الثغرات وإغلاقها',
    ],
  },
  {
    id: 'managed-cloud',
    title: 'Managed Cloud & Workload Operations',
    titleAr: 'إدارة السحابة وأحمال العمل',
    description:
      'Day-to-day administration, capacity planning, cost optimization, and autoscaling management across hybrid and multi-cloud environments.',
    descriptionAr:
      'إدارة يومية، تخطيط السعة، تحسين التكاليف، وإدارة التوسع التلقائي عبر البيئات السحابية الهجينة والمتعددة.',
    iconName: 'Cloud',
    features: [
      {
        name: 'Cluster & Container Management',
        nameAr: 'إدارة العناقيد والحاويات البرمجية',
        details: 'Lifecycle updates, node health monitoring, ingress tuning, and resource quotas on Kubernetes clusters.',
        detailsAr: 'تحديث دورة الحياة، مراقبة صحة العقد، وضبط بوابات التدفق وتوزيع الموارد على Kubernetes.',
      },
      {
        name: 'Cloud Optimization & Rightsizing',
        nameAr: 'التحسين السحابي وترشيد استهلاك الموارد',
        details: 'Continuous resource utilization analysis to eliminate idle compute and optimize storage tiers.',
        detailsAr: 'تحليل دوري لمعدلات استخدام الموارد للتخلص من الهدر وتحسين فئات التخزين والحوسبة.',
      },
      {
        name: 'Backup, Replication & Restore Validation',
        nameAr: 'النسخ الاحتياطي واختبار استعادة البيانات',
        details: 'Scheduled snapshotting, multi-region replication, and verified automated restore rehearsals.',
        detailsAr: 'جدولة النسخ الاحتياطي، المزامنة متعددة المناطق، واختبارات دورية للتحقق من جاهزية الاستعادة.',
      },
      {
        name: 'Change Management & Release Support',
        nameAr: 'إدارة التغيير ودعم إطلاق الإصدارات',
        details: 'Controlled staging verification, canary rollouts, and rollback readiness for production changes.',
        detailsAr: 'التحقق من التجهيز في البيئات التجريبية، النشر التدريجي، وجاهزية التراجع الفوري عند الحاجة.',
      },
    ],
    operationalMetrics: [
      'Optimized resource allocation and predictable spend',
      'Regularly rehearsed data recovery capabilities',
      'Zero-drift Infrastructure-as-Code consistency',
    ],
    operationalMetricsAr: [
      'توزيع أمثل للموارد ونفقات تشغيلية واضحة ومدروسة',
      'قدرة مؤكدة ومختبرة دورياً على استعادة البيانات',
      'اتساق تام للبنية التحتية البرمجية دون انحراف',
    ],
  },
  {
    id: 'managed-infrastructure',
    title: 'Managed Network & Physical Infrastructure',
    titleAr: 'إدارة الشبكات والبنية التحتية الفيزيائية',
    description:
      'Operational support for campus switches, data center fabrics, fiber interconnects, wireless controllers, and power systems.',
    descriptionAr:
      'دعم تشغيلي لمحولات الشبكات، نسيج مراكز البيانات، خطوط الألياف الضوئية، متحكمات اللاسلكي، وأنظمة الطاقة.',
    iconName: 'ServerCrash',
    features: [
      {
        name: 'Network Topology & Switch Administration',
        nameAr: 'إدارة طوبولوجيا الشبكة والمحولات',
        details: 'VLAN maintenance, port provisioning, routing table audits, and firmware lifecycle management.',
        detailsAr: 'صيانة الشبكات الافتراضية، تهيئة المنافذ، تدقيق جداول التوجيه، وإدارة البرمجيات الثابتة للمعدات.',
      },
      {
        name: 'Physical Link & Optical Loss Auditing',
        nameAr: 'تدقيق سلامة الوصلات والألياف الضوئية',
        details: 'Continuous monitoring of optical transceivers, attenuation levels, and physical port counters.',
        detailsAr: 'مراقبة مستمرة لمستقبلات الإشارات الضوئية، ومستويات توهين الإشارة، ومؤشرات المنافذ الفيزيائية.',
      },
      {
        name: 'Wireless Environment Tuning',
        nameAr: 'ضبط وتحسين البيئة اللاسلكية',
        details: 'Radio channel optimization, interference mitigation, client roaming audits, and coverage adjustments.',
        detailsAr: 'تحسين قنوات الترددات، معالجة التشويش، ومتابعة انتقال الأجهزة بين نقاط الوصول.',
      },
      {
        name: 'Power & Environmental Governance',
        nameAr: 'حوكمة الطاقة والمؤشرات البيئية',
        details: 'Telemetric oversight of UPS battery health, generator status, thermal gradients, and rack humidity.',
        detailsAr: 'متابعة عن بعد لبطاريات UPS، حالة المولدات الاحتياطية، درجات الحرارة، ورطوبة الخزائن.',
      },
    ],
    operationalMetrics: [
      'Proactive hardware degradation detection',
      'Consistent physical & logical network documentation',
      'Rapid root-cause triage for physical transport issues',
    ],
    operationalMetricsAr: [
      'اكتشاف استباقي لتآكل وتدهور أداء المعدات',
      'توثيق دقيق ومحدث للبنية الفيزيائية والمنطقية',
      'تشخيص سريع لجذور المشكلات في خطوط النقل الفيزيائية',
    ],
  },
  {
    id: 'monitoring-observability',
    title: 'Monitoring, Telemetry & Observability',
    titleAr: 'المراقبة والقياس والرصد الشامل',
    description:
      'End-to-end operational visibility correlating infrastructure metrics, application traces, network health, and security signals into actionable intelligence.',
    descriptionAr:
      'رؤية تشغيلية شاملة تربط مؤشرات البنية التحتية، تتبع مسارات التطبيقات، صحة الشبكة، وإشارات الأمان في لوحة قياس واحدة.',
    iconName: 'Activity',
    features: [
      {
        name: 'Synthetic & Real-User Transaction Monitoring',
        nameAr: 'المراقبة الاصطناعية ومراقبة تجربة المستخدم',
        details: 'Simulated customer journeys and real-time endpoint latency telemetry to catch degradations early.',
        detailsAr: 'محاكاة رحلات المستخدمين وقياس زمن الاستجابة اللحظي لرصد أي بطء في الخدمات فوراً.',
      },
      {
        name: 'Centralized Log Aggregation & Correlation',
        nameAr: 'تجميع السجلات والتحليل المترابط',
        details: 'High-throughput parsing and retention of audit logs for compliance, forensic tracing, and debugging.',
        detailsAr: 'معالجة وتخزين سجلات التدقيق لدعم متطلبات الامتثال والتحليل الجنائي وتصحيح الأخطاء.',
      },
      {
        name: 'SLO / SLA Health Dashboards',
        nameAr: 'لوحات قياس مؤشرات مستوى الخدمة (SLO/SLA)',
        details: 'Executive and engineering dashboards displaying real-time uptime, error budgets, and latency curves.',
        detailsAr: 'لوحات تحكم للإدارات والفرق الهندسية تعرض معدلات التوافر اللحظية ومؤشرات التأخير والأخطاء.',
      },
      {
        name: 'Automated Anomaly Alerting & Routing',
        nameAr: 'التنبيه الذكي للشذوذ وتوجيه البلاغات',
        details: 'Threshold and trend-based alert dispatching routed directly to designated escalation tiers.',
        detailsAr: 'إرسال التنبيهات المعتمدة على المؤشرات والأنماط وتوجيهها مباشرة إلى مسؤولي النطاق المعني.',
      },
    ],
    operationalMetrics: [
      'Unified single-pane operational visibility',
      'Immediate alert correlation minimizing alert fatigue',
      'Actionable diagnostics reducing Mean Time to Resolution',
    ],
    operationalMetricsAr: [
      'شاشة موحدة للرؤية التشغيلية الشاملة',
      'ربط ذكي للتنبيهات يحد من التشتت والإنذارات الكاذبة',
      'بيانات تشخيصية دقيقة تقلص وقت معالجة المشكلات',
    ],
  },
];
