export interface SolutionFeature {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  tags?: string[];
}

export interface SolutionPillar {
  id: string;
  slug: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  headline: string;
  headlineAr: string;
  overview: string;
  overviewAr: string;
  iconName: string;
  accentColor: string;
  architectureApproach: string;
  architectureApproachAr: string;
  capabilities: SolutionFeature[];
  architecturalComponents: {
    name: string;
    nameAr: string;
    purpose: string;
    purposeAr: string;
  }[];
  strategicValue: string[];
  strategicValueAr: string[];
}

export const SOLUTIONS_DATA: Record<string, SolutionPillar> = {
  cybersecurity: {
    id: 'cybersecurity',
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    titleAr: 'الأمن السيبراني',
    tagline: 'Defensive Architecture, Continuous Governance & Resilient Operations',
    taglineAr: 'معمارية دفاعية، حوكمة مستمرة، وعمليات صامدة',
    headline: 'Defend complex environments with architecture-first security.',
    headlineAr: 'حماية البيئات المعقدة عبر معمارية أمنية متكاملة ترتكز على التصميم أولاً.',
    overview:
      'In a threat landscape of sophisticated adversaries and expanding attack surfaces, enterprise security cannot be an afterthought or an isolated collection of point products. UPT Plus delivers full-lifecycle cybersecurity architectures engineered for resilient digital operations — embedding Zero Trust, identity-aware controls, API defense, and proactive telemetry directly into your cloud and physical infrastructure fabric.',
    overviewAr:
      'في ظل المشهد السيبراني المعقد وتوسع أسطح الهجمات، لا يمكن للأمن المؤسسي أن يكون مجرد طبقة ثانوية أو مجموعة أدوات معزولة. تقدم UPT Plus بنيات أمنية متكاملة ومصممة لدعم العمليات الرقمية الصامدة — عبر تضمين مبادئ انعدام الثقة (Zero Trust)، وضوابط الهوية، وحماية واجهات التطبيقات، والقياس والمراقبة الاستباقية مباشرة في النسيج السحابي والفيزيائي للمؤسسة.',
    iconName: 'ShieldCheck',
    accentColor: '#FF7A00',
    architectureApproach:
      'We adopt a Defense-in-Depth and Zero Trust Architecture (ZTA) framework, eliminating implicit trust at every boundary. Every user, device, network path, and application interface undergoes continuous verification, fine-grained microsegmentation, and automated cryptographic validation.',
    architectureApproachAr:
      'نعتمد إطار الدفاع المتعمق وهندسة انعدام الثقة (Zero Trust)، ملغين الثقة الضمنية في جميع النقاط والحدود. يخضع كل مستخدم، جهاز، مسار شبكي، وواجهة برمجية للتحقق المستمر، والعزل الدقيق، والتشفير الصارم.',
    capabilities: [
      {
        title: 'Application & API Security',
        titleAr: 'أمان التطبيقات وواجهات البرمجة (APIs)',
        description:
          'Deep inspection and protection of modern web workloads, microservices, and GraphQL/REST endpoints against OWASP Top 10, automated credential stuffing, and logic flaws.',
        descriptionAr:
          'فحص وحماية عميقة لأحمال العمل الحديثة والخدمات المصغرة وواجهات البرمجة ضد هجمات OWASP وأتمتة سرقة الهويات والثغرات المنطقية.',
        tags: ['WAF', 'API Shielding', 'Runtime Protection', 'Schema Validation'],
      },
      {
        title: 'Zero Trust & Secure Access',
        titleAr: 'انعدام الثقة والوصول الآمن (Zero Trust)',
        description:
          'Identity-centric perimeterless access replacing vulnerable VPN topologies with context-aware access policies, posture checks, and least-privilege enforcement.',
        descriptionAr:
          'وصول آمن بدون حدود محيطية يعتمد على الهوية والسياق، مستبدلاً شبكات VPN التقليدية بسياسات وصول دقيقة وتطبيق مبدأ الحد الأدنى من الصلاحيات.',
        tags: ['ZTA', 'Identity Federation', 'Contextual MFA', 'Microsegmentation'],
      },
      {
        title: 'Cloud Security Architecture',
        titleAr: 'أمان البنى السحابية والبيئات الهجينة',
        description:
          'Hardening hybrid and multi-cloud environments, unified CSPM/CWPP posture governance, automated workload isolation, and secrets lifecycle management.',
        descriptionAr:
          'تحصين البيئات السحابية والهجينة، حوكمة التكوينات السحابية، عزل أحمال العمل تلقائياً، وإدارة دورة حياة المفاتيح والأسرار البرمجية.',
        tags: ['CSPM', 'Workload Hardening', 'Multi-Cloud IAM', 'Key Vaults'],
      },
      {
        title: 'Network Security & DDoS Resilience',
        titleAr: 'أمان الشبكات ومقاومة هجمات الحرمان (DDoS)',
        description:
          'Carrier-grade volumetric, protocol, and application-layer DDoS mitigation architectures designed to absorb massive traffic anomalies without degrading core business availability.',
        descriptionAr:
          'بنية معمارية متقدمة لمواجهة هجمات حجب الخدمة الحجمية والتطبيقية، مصممة لاستيعاب التدفقات الضخمة دون التأثير على استمرارية الأعمال.',
        tags: ['Volumetric Scrubbing', 'Next-Gen Firewall', 'BGP Anycast', 'Traffic Shaping'],
      },
      {
        title: 'Microsegmentation & East-West Control',
        titleAr: 'العزل الدقيق والتحكم في حركة البيانات الداخلية',
        description:
          'Containment of lateral adversary movement within internal networks and virtualized clusters through software-defined microsegmentation policies.',
        descriptionAr:
          'احتواء محاولات التحرك الجانبي داخل الشبكات الداخلية وعناقيد السحابة من خلال سياسات العزل الدقيق المعرفة برمجياً.',
        tags: ['Network Policy', 'Kubernetes Security', 'Host Hardening', 'Traffic Isolation'],
      },
      {
        title: 'Security Assessments & Hardening',
        titleAr: 'التقييمات الأمنية والتحصين المنهجي',
        description:
          'Comprehensive architectural reviews, threat modeling, vulnerability discovery, configuration auditing, and remediation roadmaps for enterprise infrastructure.',
        descriptionAr:
          'مراجعات معمارية شاملة، نمذجة التهديدات، فحص الثغرات، تدقيق التكوينات، ووضع خطط معالجة واضحة للبنى المؤسسية.',
        tags: ['Threat Modeling', 'Posture Audit', 'Configuration Hardening', 'Remediation'],
      },
    ],
    architecturalComponents: [
      {
        name: 'Identity & Access Boundary',
        nameAr: 'نطاق الهوية والوصول',
        purpose: 'Enforces cryptographically signed tokens and contextual device posture before granting access.',
        purposeAr: 'يفرض التواقيع الرقمية المشفرة والتحقق من حالة الجهاز قبل منح الصلاحية.',
      },
      {
        name: 'API & Ingress Gateways',
        nameAr: 'بوابات التدفق والواجهات البرمجية',
        purpose: 'Real-time TLS termination, rate-limiting, deep packet inspection, and protocol anomaly detection.',
        purposeAr: 'إنهاء التشفير اللحظي، ضبط معدلات الطلبات، وفحص الحزم للكشف عن الشذوذ.',
      },
      {
        name: 'Dynamic Micro-Segmentation Fabric',
        nameAr: 'نسيج العزل الشبكي الديناميكي',
        purpose: 'Software-defined isolation preventing lateral breach proliferation across clusters.',
        purposeAr: 'عزل محدد برمجياً يمنع انتشار الاختراق عبر خوادم وبيئات العمل.',
      },
      {
        name: 'Continuous Observability & SIEM Feed',
        nameAr: 'المراقبة المستمرة وتغذية سجلات الأمان',
        purpose: 'Structured telemetry ingestion for auditing, anomaly hunting, and threat containment.',
        purposeAr: 'جمع البيانات وتحليل السجلات للتدقيق، واكتشاف التهديدات والاستجابة السريعة.',
      },
    ],
    strategicValue: [
      'Elimination of single-point-of-failure vulnerabilities across critical workloads',
      'Protection of intellectual property, customer financial records, and regulatory data',
      'Minimization of unplanned operational outages due to cyber events',
      'Streamlined vendor and regulatory compliance readiness',
    ],
    strategicValueAr: [
      'القضاء على نقاط الضعف الفردية عبر أحمال العمل الحيوية',
      'حماية الملكية الفكرية، السجلات المالية، والبيانات الخاضعة للتنظيم',
      'تقليل فترات التوقف غير المخطط لها الناتجة عن الحوادث السيبرانية',
      'تسريع الجاهزية والامتثال للمتطلبات التنظيمية والمعايير القياسية',
    ],
  },

  cloud: {
    id: 'cloud',
    slug: 'cloud',
    title: 'Cloud Computing',
    titleAr: 'الحوسبة السحابية',
    tagline: 'Distributed Architecture, Hybrid Fabric & High Availability',
    taglineAr: 'بنية موزعة، نسيج هجين، وجاهزية تشغيلية فائقة',
    headline: 'Architect high-performance, resilient cloud foundations.',
    headlineAr: 'تصميم وبناء ركائز سحابية عالية الأداء ومصممة لتحمل أقصى متطلبات التشغيل.',
    overview:
      'Cloud adoption is not simply moving virtual machines; it is designing resilient, decoupled, and cost-effective digital operating systems. UPT Plus provides end-to-end cloud engineering — from foundational multi-zone cloud architecture and automated migration to hybrid connectivity, distributed edge computing, and continuous performance tuning.',
    overviewAr:
      'التحول السحابي ليس مجرد نقل للخوادم الافتراضية؛ بل هو تصميم أنظمة تشغيل رقمية مرنة وموزعة وعالية الفعالية من حيث التكلفة. تقدم UPT Plus هندسة سحابية شاملة — من المعمارية متعددة المناطق والترحيل المؤتمت، إلى الربط الهجين، الحوسبة الطرفية الموزعة، والتحسين المستمر للأداء.',
    iconName: 'CloudCog',
    accentColor: '#6B21A8',
    architectureApproach:
      'We engineer cloud environments based on cloud-native modularity, decoupled data planes, automated Infrastructure as Code (IaC), and multi-region resilience frameworks that eliminate regional lock-ins and availability bottlenecks.',
    architectureApproachAr:
      'نهندس البيئات السحابية بالاعتماد على النماذج المعيارية الحديثة، وفصل مسارات البيانات، والبنية التحتية البرمجية (IaC)، ونماذج الصمود متعددة المناطق لمنع الاختناقات التشغيلية.',
    capabilities: [
      {
        title: 'Enterprise Cloud Architecture',
        titleAr: 'هندسة السحابة للمؤسسات',
        description:
          'Design of fault-tolerant, scalable VPC topologies, landing zones, IAM hierarchies, and transit network routing for complex corporate operations.',
        descriptionAr:
          'تصميم طوبولوجيا الشبكات السحابية، مناطق الهبوط المؤسسية (Landing Zones)، وهياكل الصلاحيات للمؤسسات الكبرى.',
        tags: ['Landing Zones', 'VPC Peering', 'Multi-Account IAM', 'Transit Gateways'],
      },
      {
        title: 'Cloud Migration & Modernization',
        titleAr: 'الترحيل والتحديث السحابي',
        description:
          'Structured migration methodologies (Re-host, Re-platform, Re-architect) ensuring minimal business downtime and full workload compatibility.',
        descriptionAr:
          'منهجيات ترحيل مدروسة لضمان نقل الأنظمة بأقل فترة توقف ممكنة وتوافق تشغيلي تام.',
        tags: ['Phased Cutover', 'Database Migration', 'Workload Refactoring', 'Zero Downtime'],
      },
      {
        title: 'Hybrid Cloud & Multi-Cloud Connectivity',
        titleAr: 'السحابة الهجينة وتكامل السحب المتعددة',
        description:
          'Seamless, low-latency interconnects between on-premises data centers and distributed cloud nodes using direct connects and encrypted overlays.',
        descriptionAr:
          'ربط منخفض الكمون وآمن بين مراكز البيانات المحلية والمنصات السحابية عبر خطوط مخصصة وشبكات مشفرة.',
        tags: ['Direct Interconnect', 'IPsec Overlays', 'SD-WAN', 'Hybrid Storage'],
      },
      {
        title: 'High Availability & Disaster Recovery',
        titleAr: 'التوافر العالي والتعافي من الكوارث (HA/DR)',
        description:
          'Automated active-active and active-passive failover architectures, real-time data replication, and stringent RPO/RTO engineering.',
        descriptionAr:
          'معمارية التحويل التلقائي عند الأعطال، المزامنة اللحظية للبيانات، وتحقيق أعلى معايير استعادة الخدمة (RPO/RTO).',
        tags: ['Multi-Region Failover', 'Async Replication', 'Automated DR Drills', 'Immutable Backups'],
      },
      {
        title: 'Distributed Compute & Storage Optimization',
        titleAr: 'تحسين الحوسبة الموزعة والتخزين',
        description:
          'Tiered object/block storage strategies, autoscaling compute clusters, container orchestration, and continuous rightsizing to maximize workload ROI.',
        descriptionAr:
          'استراتيجيات تخزين متدرجة، مجموعات حوسبة ذاتية التوسع، وإدارة الحاويات مع التحسين المستمر للتكاليف والأداء.',
        tags: ['Kubernetes', 'Serverless', 'Tiered Storage', 'FinOps & Rightsizing'],
      },
      {
        title: 'Cloud Operations & Observability',
        titleAr: 'العمليات السحابية والمراقبة الشاملة',
        description:
          'Unified metrics, distributed tracing, automated health telemetry, and centralized logging across hybrid infrastructure.',
        descriptionAr:
          'مؤشرات أداء موحدة، تتبع موزع للعمليات، ومراقبة شاملة للحالة الصحية للبنية التحتية الهجينة.',
        tags: ['Telemetry Fabric', 'Distributed Tracing', 'Log Aggregation', 'SLO Monitoring'],
      },
    ],
    architecturalComponents: [
      {
        name: 'Enterprise Landing Zone',
        nameAr: 'منطقة الهبوط السحابية المؤسسية',
        purpose: 'Governed boundary standardizing network routing, security baselines, and cost allocation.',
        purposeAr: 'نطاق مؤسسي موحد يضبط مسارات الشبكة، المعايير الأمنية، وتوزيع التكاليف.',
      },
      {
        name: 'Scalable Container Fabric',
        nameAr: 'نسيج الحاويات المرن',
        purpose: 'Managed orchestration layer running self-healing, microservice-based enterprise workloads.',
        purposeAr: 'طبقة تشغيل مدارة لأحمال العمل والخدمات المصغرة مع خاصية المعالجة الذاتية.',
      },
      {
        name: 'Resilient Multi-Zone Storage',
        nameAr: 'تخزين مرن عبر مناطق متعددة',
        purpose: 'High-durability persistent data layer with continuous snapshotting and replication.',
        purposeAr: 'طبقة بيانات عالية الاعتمادية مع نسخ احتياطي وتزامن مستمر عبر المناطق.',
      },
      {
        name: 'Automated CI/CD Delivery Pipeline',
        nameAr: 'مسار التوريد والنشر المؤتمت',
        purpose: 'Infrastructure-as-Code pipeline enforcing compliance checks prior to deployment.',
        purposeAr: 'مسار نشر برمجي يفرض اختبارات الامتثال والأمان قبل إطلاق التحديثات.',
      },
    ],
    strategicValue: [
      'Near-instant elasticity to support surging consumer or operational demand',
      'Drastic reduction in recovery time objectives (RTO) during unexpected disruptions',
      'Predictable operational spending through continuous architectural optimization',
      'Future-ready platform for deploying advanced data and analytics workloads',
    ],
    strategicValueAr: [
      'مرونة فورية للتوسع مع تزايد الطلب التشغيلي وحركة المستخدمين',
      'تقليص جذري لأوقات استعادة الخدمة (RTO) عند حدوث أي طارئ',
      'نفقات تشغيلية مدروسة ومحسنة باستمرار عبر تصاميم هندسية دقيقة',
      'منصة مهيأة للمستقبل لاستضافة التطبيقات وتحليلات البيانات المتقدمة',
    ],
  },

  infrastructure: {
    id: 'infrastructure',
    slug: 'infrastructure',
    title: 'Digital Infrastructure',
    titleAr: 'البنية التحتية الرقمية',
    tagline: 'Enterprise Networks, Mission-Critical Data Centers & Fiber Systems',
    taglineAr: 'شبكات المؤسسات، مراكز البيانات الحيوية، وأنظمة الألياف',
    headline: 'Build rock-solid physical and logical infrastructure foundations.',
    headlineAr: 'تأسيس بنية تحتية فيزيائية ومنطقية فائقة الاعتمادية تشكل عصب العمليات الرقمية.',
    overview:
      'Software applications and cloud services depend entirely on the reliability, throughput, and physical integrity of underlying infrastructure. UPT Plus delivers enterprise-grade infrastructure solutions — encompassing high-performance campus networking, modern data center power and cooling environments, structured cabling, optical fiber backbones, and wireless connectivity engineered for high-density environments.',
    overviewAr:
      'تعتمد التطبيقات البرمجية والخدمات السحابية كلياً على موثوقية وسرعة وسلامة البنية التحتية الأساسية. تقدم UPT Plus حلولاً متقدمة للبنية التحتية المؤسسية — تشمل شبكات المقار عالية الأداء، بيئات مراكز البيانات الحديثة، شبكات الكوابل الهيكلية، شبكات الألياف الضوئية، والاتصال اللاسلكي المصمم للكثافات العالية.',
    iconName: 'Server',
    accentColor: '#0D1326',
    architectureApproach:
      'We design physical and network foundations using modular topologies, redundant routing paths, rigorous signal-integrity testing, and automated network fabric orchestration to guarantee continuous uptime.',
    architectureApproachAr:
      'نصمم البنى الفيزيائية والشبكية بنماذج معيارية، ومسارات توجيه متكررة، واختبارات صارمة لسلامة الإشارات، وأتمتة نسيج الشبكات لضمان أعلى مستويات الجاهزية.',
    capabilities: [
      {
        title: 'Enterprise Campus & Core Networking',
        titleAr: 'شبكات المقار والشبكات الأساسية للمؤسسات',
        description:
          'High-throughput core, distribution, and access layer architectures built on resilient switching fabrics with sub-second failover protocols.',
        descriptionAr:
          'معمارية شبكية أساسية وتوزيعية عالية السرعة تعتمد على محولات متطورة مع بروتوكولات تحويل فائقة السرعة عند الأعطال.',
        tags: ['Core Switching', 'EVPN-VXLAN', 'Spine-Leaf', '802.1X Access Control'],
      },
      {
        title: 'Data Center Physical & Logical Systems',
        titleAr: 'أنظمة مراكز البيانات الفيزيائية والمنطقية',
        description:
          'Design and implementation of resilient rack layouts, precision cooling, clean power distribution, environmental monitoring, and compute clusters.',
        descriptionAr:
          'تصميم وتنفيذ ترتيب الخزائن، التبريد الدقيق، توزيع الطاقة النظيفة، المراقبة البيئية، وعناقيد الخوادم عالية الكثافة.',
        tags: ['Precision Cooling', 'PDU & UPS Design', 'Hot/Cold Aisle', 'DCIM'],
      },
      {
        title: 'Structured Cabling & High-Density Fiber',
        titleAr: 'التمديدات الهيكلية وشبكات الألياف الضوئية عالية الكثافة',
        description:
          'Certified copper and single-mode/multi-mode optical fiber installations engineered for 40G/100G/400G backbone connectivity and organized cable pathways.',
        descriptionAr:
          'تركيبات معتمدة للألياف الضوئية والكوابل النحاسية المصممة لدعم سرعات 40G/100G/400G مع مسارات منظمة وعزل متقن.',
        tags: ['Single-Mode Fiber', 'Cat6A/Cat7', 'MPO/MTP Trunking', 'OTDR Testing'],
      },
      {
        title: 'High-Density Enterprise Wireless',
        titleAr: 'الشبكات اللاسلكية المؤسسية عالية الكثافة',
        description:
          'Wi-Fi 6E/7 survey-driven deployments offering seamless roaming, spectral hygiene, RF containment, and identity-driven segmented SSIDs.',
        descriptionAr:
          'نشر شبكات Wi-Fi 6E/7 القائم على المسح الميداني، مع تنقل سلس، إدارة الترددات، وعزل أمني للشبكات اللاسلكية.',
        tags: ['Wi-Fi 6E / Wi-Fi 7', 'RF Heatmapping', 'Zero-Loss Roaming', 'WPA3 Enterprise'],
      },
      {
        title: 'Infrastructure Health & Telemetry Monitoring',
        titleAr: 'مراقبة صحة البنية التحتية والقياس عن بعد',
        description:
          'Proactive SNMP, NetFlow, and telemetry collection identifying packet drops, link degradation, optical loss, and environmental thresholds in real time.',
        descriptionAr:
          'جمع ومراقبة مؤشرات الشبكة والتدفق للكشف المبكر عن فقدان الحزم، وتدهور الخطوط، والمؤشرات البيئية لحظياً.',
        tags: ['NetFlow/IPFIX', 'SNMPv3', 'Optical Loss Auditing', 'Environmental Sensors'],
      },
      {
        title: 'Business Continuity & Site Interconnects',
        titleAr: 'استمرارية الأعمال والربط بين المواقع',
        description:
          'Diverse dual-path fiber routes, encrypted point-to-point links, and resilient SD-WAN architectures connecting distributed corporate sites.',
        descriptionAr:
          'مسارات ألياف مزدوجة متنوعة، خطوط مشفرة بين المواقع، وتقنيات SD-WAN لربط مقرات المؤسسة الموزعة بأمان.',
        tags: ['Diverse Fiber Paths', 'SD-WAN Interconnect', 'MACsec Encryption', 'Failover Circuits'],
      },
    ],
    architecturalComponents: [
      {
        name: 'Spine-Leaf Non-Blocking Fabric',
        nameAr: 'نسيج شبكي غير حاجب (Spine-Leaf)',
        purpose: 'Provides ultra-low latency east-west server-to-server throughput.',
        purposeAr: 'يوفر نقل بيانات فائق السرعة وبكمون منخفض جداً بين الخوادم داخل مراكز البيانات.',
      },
      {
        name: 'Optical Interconnect Backbone',
        nameAr: 'عمود فقري من الألياف الضوئية',
        purpose: 'Multi-gigabit redundant conduits delivering resilient cross-building communications.',
        purposeAr: 'مسارات ألياف متعددة الجيجابت توفر اتصالاً فائق الاعتمادية بين المباني والمراكز.',
      },
      {
        name: 'Environmental & Power Telemetry Hub',
        nameAr: 'مركز قياس الطاقة والبيئة',
        purpose: 'Monitors thermal loads, humidity, and generator/UPS status around the clock.',
        purposeAr: 'يراقب الأحمال الحرارية، الرطوبة، وحالة المولدات ووحدات الطاقة على مدار الساعة.',
      },
      {
        name: 'Automated Network Policy Controller',
        nameAr: 'وحدة التحكم بسياسات الشبكة المؤتمتة',
        purpose: 'Pushes consistent VLAN, QoS, and ACL configurations across all distribution switches.',
        purposeAr: 'يطبق إعدادات الشبكات الافتراضية وجودة الخدمة وقوائم التحكم بشكل متسق عبر المحولات.',
      },
    ],
    strategicValue: [
      'Elimination of physical transmission bottlenecks for high-throughput corporate applications',
      'Clean, documented, and certified structured cabling that scales for decades',
      'Protection against environmental and power-related facility disruptions',
      'Solid physical foundation required for modern private cloud and high-performance computing',
    ],
    strategicValueAr: [
      'إزالة اختناقات النقل الفيزيائي للتطبيقات المؤسسية ذات التدفق العالي',
      'تمديدات هيكلية منظمة وموثقة ومعتمدة تخدم المؤسسة لعقود طويلة',
      'حماية استباقية ضد انقطاعات الطاقة والمخاطر البيئية في المنشآت',
      'بنية فيزيائية متينة تدعم السحب الخاصة والحوسبة عالية الأداء',
    ],
  },

  applications: {
    id: 'applications',
    slug: 'applications',
    title: 'Application Modernization',
    titleAr: 'تحديث التطبيقات والأنظمة',
    tagline: 'Cloud-Native Engineering, Containerized Architectures & API Integration',
    taglineAr: 'هندسة السحابة الأصلية، الحاويات البرمجية، وتكامل واجهات الأنظمة',
    headline: 'Modernize core applications into agile, secure digital engines.',
    headlineAr: 'تحويل الأنظمة والتطبيقات الأساسية إلى محركات رقمية مرنة وآمنة وقابلة للتطور.',
    overview:
      'Legacy monoliths and rigid legacy systems constrain organizational agility, inflate maintenance costs, and introduce security vulnerabilities. UPT Plus refactors and modernizes enterprise workloads into modular, containerized, cloud-native architectures — integrating APIs, enterprise ERP platforms, and automated delivery pipelines with zero operational disruption.',
    overviewAr:
      'تحد الأنظمة القديمة المتجانسة من مرونة المؤسسات وترفع تكاليف الصيانة وتزيد من الثغرات الأمنية. تعمل UPT Plus على إعادة هندسة وتحديث التطبيقات المؤسسية إلى بنيات سحابية معيارية معتمدة على الحاويات — مع ربط واجهات البرمجة، وأنظمة تخطيط الموارد (ERP)، ومسارات النشر المؤتمتة دون إيقاف العمليات.',
    iconName: 'Code2',
    accentColor: '#6B21A8',
    architectureApproach:
      'We apply domain-driven design, microservices decomposition, event-driven integration patterns, and continuous security scanning (DevSecOps) to transform monolithic applications into modular digital platforms.',
    architectureApproachAr:
      'نطبق التصميم الموجه بالنماذج (DDD)، وتفكيك الأنظمة إلى خدمات مصغرة، والتكامل المعتمد على الأحداث، والأمن المدمج في مسار التطوير (DevSecOps) لتحويل الأنظمة القديمة إلى منصات رقمية حديثة.',
    capabilities: [
      {
        title: 'Monolithic to Microservices Evolution',
        titleAr: 'تطوير الأنظمة القديمة إلى خدمات مصغرة',
        description:
          'Strangler-pattern migration decomposing brittle legacy monoliths into independently scalable, loosely coupled containerized services.',
        descriptionAr:
          'استراتيجية التحديث التدريجي لتفكيك الأنظمة المتجانسة إلى خدمات مصغرة ومستقلة تعمل داخل حاويات برمجية.',
        tags: ['Strangler Pattern', 'Domain-Driven Design', 'Decoupled State', 'Microservices'],
      },
      {
        title: 'Cloud-Native Architecture & Containerization',
        titleAr: 'الهندسة السحابية الأصلية والحاويات',
        description:
          'Container packaging with Docker and orchestration via Kubernetes, enabling high portability, rapid deployments, and automated horizontal auto-scaling.',
        descriptionAr:
          'تجهيز التطبيقات داخل حاويات وإدارتها عبر Kubernetes لتمكين التوسع التلقائي وسرعة النشر وقابلية النقل العالية.',
        tags: ['Kubernetes', 'Docker', 'Service Mesh', 'Horizontal Pod Autoscaling'],
      },
      {
        title: 'Enterprise API & System Integration',
        titleAr: 'تكامل واجهات البرمجة والأنظمة المؤسسية',
        description:
          'Secure API gateway architecture connecting core ERPs, CRM platforms, banking backbones, and third-party partner ecosystems via standard protocols.',
        descriptionAr:
          'معمارية بوابات واجهات البرمجة لربط أنظمة ERP، منصات العملاء، والأنظمة البنكية مع المنظومات الخارجية بأمان.',
        tags: ['API Management', 'Event-Driven Architecture', 'Kafka / Event Hubs', 'ERP Integration'],
      },
      {
        title: 'DevSecOps & Automated Delivery Pipelines',
        titleAr: 'أتمتة التطوير والأمان والعمليات (DevSecOps)',
        description:
          'Automated CI/CD pipelines incorporating static analysis (SAST), software composition analysis (SCA), secrets detection, and compliance gates.',
        descriptionAr:
          'مسارات عمل مؤتمتة تجمع بين فحص الكود البرمجي الأمني، تدقيق المكتبات، واختبارات الجودة قبل الاعتماد والنشر.',
        tags: ['CI/CD Pipelines', 'SAST / DAST', 'Dependency Auditing', 'GitOps'],
      },
      {
        title: 'Modern Web & Mobile Enterprise Platforms',
        titleAr: 'منصات الويب والأجهزة الذكية للمؤسسات',
        description:
          'High-performance web portals and operational mobile interfaces engineered for enterprise resilience, fast response times, and offline capabilities.',
        descriptionAr:
          'بوابات وتطبيقات ويب وأجهزة ذكية للمؤسسات مصممة للاستجابة السريعة، وتحمل ضغط الاستخدام، والعمل في بيئات العمل الحيوية.',
        tags: ['Next.js Architecture', 'Micro-Frontends', 'State Resilience', 'Secure Tokens'],
      },
      {
        title: 'Legacy Database Refactoring & Modern Data Fabrics',
        titleAr: 'إعادة هيكلة قواعد البيانات القديمة والنسيج البياني',
        description:
          'Decoupling legacy relational databases into modern distributed datastores, caching layers, and real-time streaming architectures.',
        descriptionAr:
          'فصل قواعد البيانات القديمة وتوزيعها على منصات بيانات حديثة، وطبقات تخزين مؤقت فائقة السرعة، وبث للبيانات اللحظية.',
        tags: ['Distributed DBs', 'Redis Caching', 'Schema Evolution', 'Data Pipelines'],
      },
    ],
    architecturalComponents: [
      {
        name: 'Enterprise API Gateway & Control Layer',
        nameAr: 'بوابة واجهات البرمجة وطبقة التحكم',
        purpose: 'Authenticates, routes, rate-limits, and logs all inter-system and external service requests.',
        purposeAr: 'توثق وتوجه وتضبط معدلات الطلبات وتسجل جميع العمليات المتبادلة بين الأنظمة.',
      },
      {
        name: 'Event-Driven Streaming Bus',
        nameAr: 'ناقل الأحداث والرسائل اللحظي',
        purpose: 'Decouples service communication using asynchronous message brokers for resilient transaction processing.',
        purposeAr: 'يفصل الاتصال المباشر بين الخدمات عبر وسطاء رسائل غير متزامنين لضمان معالجة العمليات.',
      },
      {
        name: 'Container Orchestration Cluster',
        nameAr: 'عنقود إدارة وتشغيل الحاويات',
        purpose: 'Hosts microservices with automatic load balancing, health checks, and rolling zero-downtime updates.',
        purposeAr: 'يستضيف الخدمات المصغرة مع توزيع الأحمال، الفحص الدوري للصحة، والتحديث بدون انقطاع.',
      },
      {
        name: 'Automated DevSecOps Pipeline',
        nameAr: 'مسار التطوير والأمان المؤتمت',
        purpose: 'Validates code quality, runs container vulnerability scans, and promotes release artifacts securely.',
        purposeAr: 'يفحص جودة الكود، ويفحص الحاويات أمنياً، وينشر الإصدارات المعتمدة بسلاسة وأمان.',
      },
    ],
    strategicValue: [
      'Accelerated release cycles from months down to hours without compromising stability',
      'Substantial reduction in legacy maintenance fees and obsolete licensing overheads',
      'Effortless scalability during enterprise surges and critical business periods',
      'Modern, maintainable codebase ready for long-term operational autonomy',
    ],
    strategicValueAr: [
      'تسريع دورات إطلاق التحديثات من أشهر إلى ساعات دون المساس باستقرار النظام',
      'تخفيض كبير في نفقات صيانة الأنظمة القديمة ورسوم التراخيص المتقادمة',
      'توسع تلقائي وسلس خلال أوقات الذروة والمواسم التشغيلية الحساسة',
      'كود برمجي حديث وقابل للصيانة والاستدامة التشغيلية طويلة الأمد',
    ],
  },
};
