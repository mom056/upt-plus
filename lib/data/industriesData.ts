export interface IndustryVertical {
  id: string;
  slug: string;
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  heroSummary: string;
  heroSummaryAr: string;
  iconName: string;
  challenges: {
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
  }[];
  architectureApproach: string;
  architectureApproachAr: string;
  solutions: {
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
  }[];
  operationalConsiderations: string[];
  operationalConsiderationsAr: string[];
}

export const INDUSTRIES_DATA: Record<string, IndustryVertical> = {
  'financial-services': {
    id: 'financial-services',
    slug: 'financial-services',
    name: 'Financial Services & Banking',
    nameAr: 'الخدمات المالية والمصرفية',
    tagline: 'High-Resilience Architecture, Sub-Second Latency & Zero Trust Defense',
    taglineAr: 'معمارية فائقة الصمود، كمون منخفض لأجزاء الثانية، وحماية انعدام الثقة',
    heroSummary:
      'Banking backbones, payment gateways, and trading platforms demand absolute transaction integrity, zero data loss, strict compliance with monetary authorities, and continuous defense against organized cyber threats.',
    heroSummaryAr:
      'تتطلب الأنظمة المصرفية، بوابات الدفع، ومنصات التداول سلامة مطلقة للمعاملات، انعدام تام لفقدان البيانات، امتثالاً صارماً لتعليمات البنوك المركزية، ودفاعاً مستمراً ضد التهديدات السيبرانية المنظمة.',
    iconName: 'Landmark',
    challenges: [
      {
        title: 'Mission-Critical Availability & Low Latency',
        titleAr: 'الجاهزية التامة وانخفاض زمن الاستجابة',
        description: 'Unscheduled downtime directly impacts transaction settlements, market confidence, and regulatory standing.',
        descriptionAr: 'أي توقف غير مخطط له يؤثر مباشرة على تسوية المعاملات المالية وثقة العملاء والوضع التنظيمي.',
      },
      {
        title: 'High-Value Target API & Credential Attacks',
        titleAr: 'استهداف واجهات البرمجة وهجمات سرقة الهويات',
        description: 'Banking APIs and consumer mobile channels face automated credential stuffing, logic tampering, and fraud vectors.',
        descriptionAr: 'تواجه واجهات البرمجة المصرفية وقنوات تطبيقات الجوال محاولات اختراق مؤتمتة وتلاعباً بالعمليات المنطقية.',
      },
      {
        title: 'Rigid Regulatory & Data Residency Mandates',
        titleAr: 'المتطلبات التنظيمية الصارمة وسيادة البيانات',
        description: 'Stringent compliance requiring immutable audit trails, local data residency, and cryptographic isolation.',
        descriptionAr: 'اشتراطات صارمة تلزم بحفظ سجلات تدقيق غير قابلة للتعديل، وسيادة البيانات داخل الحدود الجغرافية، والتشفير التام.',
      },
    ],
    architectureApproach:
      'We architect active-active multi-datacenter deployments with real-time transactional replication, hardware security module (HSM) key isolation, strict Zero Trust network access, and microsegmented payment boundaries.',
    architectureApproachAr:
      'نصمم بنى تشغيل متزامنة عبر مراكز بيانات متعددة مع مزامنة لحظية للمعاملات، عزل مفاتيح التشفير عبر وحدات HSM، تطبيق صارم لسياسات Zero Trust، وعزل دقيق لشبكات معالجة المدفوعات.',
    solutions: [
      {
        title: 'Zero Trust Core Banking Boundary',
        titleAr: 'نطاق انعدام الثقة للأنظمة المصرفية الأساسية',
        description: 'Context-aware access policies and microsegmentation shielding core ledger systems from lateral access.',
        descriptionAr: 'سياسات وصول واعية بالسياق وعزل دقيق يحمي سجلات الحسابات المصرفية من أي وصول جانبي غير مصرح.',
      },
      {
        title: 'Resilient Payment API Gateway',
        titleAr: 'بوابات واجهات برمجة المدفوعات فائقة الصمود',
        description: 'Hardware-accelerated TLS termination, payload validation, and sub-millisecond fraud pattern detection.',
        descriptionAr: 'إنهاء التشفير المسرع عتادياً، والتحقق من سلامة البيانات المدخلة، واكتشاف أنماط الاحتيال في أجزاء من الثانية.',
      },
      {
        title: 'Automated Disaster Recovery & Active-Active Fabric',
        titleAr: 'التعافي الآلي من الكوارث والنسيج النشط المتزامن',
        description: 'Zero-data-loss synchronous replication guaranteeing sub-minute RTO across geographically isolated facilities.',
        descriptionAr: 'مزامنة متزامنة بدون أي فقدان للبيانات تضمن استعادة فورية للخدمات بين مرافق معزولة جغرافياً.',
      },
    ],
    operationalConsiderations: [
      'Continuous compliance telemetry aligned with monetary authority baselines',
      'Quarterly automated DR failover simulations without impacting customer transactions',
      'Immutable log preservation with strict cryptographic hash verification',
    ],
    operationalConsiderationsAr: [
      'مراقبة مستمرة للامتثال متوافقة مع متطلبات سلطات النقد والبنوك المركزية',
      'محاكاة ربع سنوية لعمليات التحويل عند الكوارث دون التأثير على معاملات العملاء',
      'حفظ سجلات التدقيق بصيغة غير قابلة للتعديل مع التحقق الرقمي من سلامتها',
    ],
  },

  telecom: {
    id: 'telecom',
    slug: 'telecom',
    name: 'Telecommunications & Service Providers',
    nameAr: 'الاتصالات ومزودو الخدمات',
    tagline: 'Carrier-Grade Throughput, Volumetric DDoS Scrubbing & Distributed Edge',
    taglineAr: 'سرعات نقل على مستوى المشغلين، تنقية هجمات DDoS الحجمية، وحوسبة طرفية موزعة',
    heroSummary:
      'Service providers require massive bandwidth capacity, sub-second routing convergence, distributed edge infrastructure, and the capability to mitigate multi-terabit volumetric cyber attacks.',
    heroSummaryAr:
      'يحتاج مشغلو الاتصالات إلى سعات نقل هائلة، سرعة فائقة في تحويل مسارات التوجيه، بنية تحتية طرفية موزعة، والقدرة على صد هجمات الحرمان السيبرانية الضخمة بمقاييس التيرابت.',
    iconName: 'Radio',
    challenges: [
      {
        title: 'Massive Traffic Volumes & Peaking Surges',
        titleAr: 'أحجام بيانات ضخمة وتدفقات مفاجئة',
        description: 'Exponential subscriber data demand requires non-blocking core backbones and efficient peering exchange.',
        descriptionAr: 'الطلب المتزايد على البيانات يتطلب شبكات أساسية غير حاجزة ونقاط تبادل بيانات عالية الكفاءة.',
      },
      {
        title: 'Multi-Vector Distributed Denial of Service',
        titleAr: 'هجمات حجب الخدمة الموزعة متعددة النواقل',
        description: 'Persistent volumetric and protocol-level DDoS campaigns threatening DNS and core subscriber gateways.',
        descriptionAr: 'حملات هجمات DDoS متكررة تستهدف خوادم DNS وبوابات المشتركين الأساسية وتتطلب تنقية فورية.',
      },
      {
        title: 'Decentralized Edge Node Management',
        titleAr: 'إدارة العقد الطرفية اللامركزية',
        description: 'Operating hundreds of distributed edge points of presence with uniform configuration hygiene.',
        descriptionAr: 'تشغيل المئات من نقاط التواجد الطرفية الموزعة مع الحفاظ على التوافق الأمني والإعدادات الموحدة.',
      },
    ],
    architectureApproach:
      'We design BGP Anycast scrubbing architectures, high-density optical routing backbones, containerized NFV platforms, and automated telemetry collectors handling millions of flows per second.',
    architectureApproachAr:
      'نصمم بنيات تنقية تعتمد على BGP Anycast، وشبكات توجيه عبر الألياف الضوئية عالية الكثافة، ومنصات وظائف الشبكة الافتراضية (NFV)، وأدوات استيعاب القياسات للتعامل مع ملايين التدفقات في الثانية.',
    solutions: [
      {
        title: 'Distributed DDoS Mitigation Architecture',
        titleAr: 'معمارية موزعة لصد هجمات DDoS',
        description: 'Multi-layer traffic analysis and automated route deflection to scrubbing centers during attack events.',
        descriptionAr: 'تحليل متعدد الطبقات لحركة البيانات وتحويل تلقائي للتدفقات المشبوهة إلى مراكز التنقية أثناء الهجمات.',
      },
      {
        title: 'Core Optical Backbone & Spine-Leaf Fabric',
        titleAr: 'الشبكة الأساسية الضوئية ونسيج Spine-Leaf',
        description: '100G/400G carrier routing fabrics engineered for non-blocking packet forwarding and rapid BGP convergence.',
        descriptionAr: 'نسيج توجيه يدعم سرعات 100G/400G مصمم لتمرير الحزم دون اختناق مع سرعة تقارب مسارات BGP.',
      },
      {
        title: 'Carrier Edge Modernization & Containerized NFV',
        titleAr: 'تحديث الحافة الطرفية ووظائف الشبكة بالحاويات',
        description: 'Modular microservice-based virtualization replacing legacy hardware appliances with agile software containers.',
        descriptionAr: 'أنظمة افتراضية معيارية مبنية على الخدمات المصغرة تحل محل الأجهزة التقليدية بحاويات برمجية مرنة.',
      },
    ],
    operationalConsiderations: [
      'Automated route scrubbing activation without human intervention latency',
      'NetFlow/sFlow continuous sampling for early anomalous traffic signature detection',
      'Zero-loss maintenance windows via redundant stateful BGP sessions',
    ],
    operationalConsiderationsAr: [
      'تفعيل تلقائي لتنقية المسارات دون تأخير التدخل البشري',
      'أخذ عينات مستمرة عبر NetFlow/sFlow لاكتشاف التوقيعات الشاذة مبكراً',
      'نوافذ صيانة دون انقطاع عبر جلسات BGP التكرارية المتزامنة',
    ],
  },

  retail: {
    id: 'retail',
    slug: 'retail',
    name: 'Retail & E-Commerce',
    nameAr: 'التجزئة والتجارة الإلكترونية',
    tagline: 'Instant Scalability, Checkout Security & Distributed Omnichannel Commerce',
    taglineAr: 'توسع فوري، أمان عمليات الدفع، وتكامل التجارة الإلكترونية متعددة القنوات',
    heroSummary:
      'Digital retail experiences require sub-second page performance, flawless handling of flash sale traffic surges, robust API protection against scrapers and inventory bots, and seamless omnichannel store synchronization.',
    heroSummaryAr:
      'تتطلب منصات التجارة الإلكترونية سرعة استجابة فائقة، وقدرة استيعابية لقفزات الزيارات أثناء العروض الموسمية، وحماية قوية لواجهات البرمجة ضد روبوتات حجز البضائع، ومزامنة سلسة بين المتاجر والمنصات.',
    iconName: 'ShoppingBag',
    challenges: [
      {
        title: 'Traffic Spikes & Flash Surge Elasticity',
        titleAr: 'قفزات الزيارات اللحظية والتوسع السريع',
        description: 'Massive promotional spikes risk crashing unscalable database layers and checkout funnels.',
        descriptionAr: 'الارتفاعات الهائلة في زيارات الحملات الترويجية قد تؤدي إلى انهيار قواعد البيانات وبوابات الشراء غير المهيأة.',
      },
      {
        title: 'Inventory Hoarding & Credential Bot Attacks',
        titleAr: 'روبوتات الاستحواذ على المخزون وسرقة الحسابات',
        description: 'Automated scrapers distorting inventory availability and attempting brute-force account takeovers.',
        descriptionAr: 'روبوتات خبيثة تحجب المنتجات وتستنزف المخزون مع محاولات اختراق متكررة لحسابات العملاء.',
      },
      {
        title: 'Omnichannel Store & POS Network Reliability',
        titleAr: 'اعتمادية شبكات نقاط البيع ومزامنة الفروع',
        description: 'Connecting physical stores, point-of-sale systems, and warehouse logistics with zero packet drops.',
        descriptionAr: 'ربط الفروع ونقاط البيع وأنظمة المستودعات اللوجستية بشبكة متصلة وموثوقة دون انقطاع.',
      },
    ],
    architectureApproach:
      'We implement decoupled headless commerce architectures, distributed caching fabrics, automated horizontal container autoscaling, and behavioral bot management at the ingress edge.',
    architectureApproachAr:
      'ننفذ معماريات التجارة الإلكترونية المنفصلة (Headless)، مع نسيج تخزين مؤقت موزع، وتوسع تلقائي للحاويات، وإدارة ذكية للروبوتات عند بوابات الدخول.',
    solutions: [
      {
        title: 'Autoscaling Cloud-Native Commerce Platforms',
        titleAr: 'منصات تجارة سحابية ذاتية التوسع',
        description: 'Kubernetes-orchestrated microservices scaling dynamically with real-time checkout volume.',
        descriptionAr: 'خدمات مصغرة تدار عبر Kubernetes تتوسع تلقائياً مع تزايد وتيرة عمليات الدفع والمبيعات.',
      },
      {
        title: 'Edge Bot Protection & Ingress Rate Limiting',
        titleAr: 'حماية الطرفية ضد الروبوتات وضبط معدلات الطلبات',
        description: 'Behavioral heuristics filtering automated scalper bots before they consume database capacity.',
        descriptionAr: 'تحليل سلوكي متقدم يعزل روبوتات حجز المخزون قبل وصولها لقواعد البيانات والأنظمة الخلفية.',
      },
      {
        title: 'Resilient Store-to-Cloud SD-WAN Interconnect',
        titleAr: 'ربط الفروع بالسحابة عبر شبكات SD-WAN',
        description: 'Encrypted dual-WAN connectivity ensuring physical POS terminals maintain uninterrupted processing.',
        descriptionAr: 'اتصال مشفر مزدوج يضمن استمرار عمل أجهزة نقاط البيع في المتاجر دون انقطاع حتى عند تعطل أحد الخطوط.',
      },
    ],
    operationalConsiderations: [
      'Pre-event load simulation validating database connection pooling and cache hit ratios',
      'Automated synthetic transaction monitors verifying checkout flow every 60 seconds',
      'PCI-DSS compliant encrypted token storage and isolated payment gateways',
    ],
    operationalConsiderationsAr: [
      'محاكاة مسبقة للأحمال لاختبار سعة قواعد البيانات ونسب كفاءة التخزين المؤقت',
      'مراقبة اصطناعية آلية للتحقق من سلامة مسار الشراء كل 60 ثانية',
      'تخزين مشفر لبيانات الدفع متوافق مع معايير PCI-DSS مع عزل بوابات الدفع',
    ],
  },

  government: {
    id: 'government',
    slug: 'government',
    name: 'Government & Public Sector',
    nameAr: 'القطاع الحكومي والمؤسسات العامة',
    tagline: 'Sovereign Compliance, Resilient Citizen Services & Zero Trust Defense',
    taglineAr: 'الامتثال السيادي، خدمات المواطنين المستدامة، وحماية انعدام الثقة',
    heroSummary:
      'Public sector platforms demand sovereign data governance, hardened isolation between administrative domains, continuous service uptime for citizen services, and protection against state-level threat vectors.',
    heroSummaryAr:
      'تتطلب المنصات الحكومية حوكمة سيادية للبيانات، وعزلاً محكماً بين القطاعات الإدارية، واستمرارية تقديم الخدمات للمواطنين، وحماية متقدمة ضد التهديدات المعقدة.',
    iconName: 'ShieldAlert',
    challenges: [
      {
        title: 'Sovereign Data Residency & Isolation',
        titleAr: 'سيادة البيانات والعزل الجغرافي الصارم',
        description: 'Mandates requiring citizen records, defense data, and governmental records to remain strictly within defined sovereign boundaries.',
        descriptionAr: 'قوانين تلزم ببقاء سجلات المواطنين والبيانات الحكومية داخل الحدود السيادية مع عزل تام.',
      },
      {
        title: 'Legacy System Integration with Modern Portals',
        titleAr: 'ربط الأنظمة القديمة بالبوابات الرقمية الحديثة',
        description: 'Bridging decade-old core governmental mainframes with high-accessibility mobile and web citizen portals.',
        descriptionAr: 'دمج قواعد البيانات والأنظمة الحكومية القديمة مع بوابات الخدمات الرقمية وتطبيقات الهواتف الحديثة.',
      },
      {
        title: 'Protection of Critical National Infrastructure',
        titleAr: 'حماية البنى التحتية الوطنية الحيوية',
        description: 'Defending municipal systems, utility grids, and public communication channels from persistent disruptions.',
        descriptionAr: 'حماية شبكات المرافق، الأنظمة البلدية، وقنوات الاتصال العامة من التهديدات السيبرانية المتقدمة.',
      },
    ],
    architectureApproach:
      'We architect air-gapped and sovereign cloud landing zones, Zero Trust identity federation with multi-factor biometric integration, microsegmented government fabrics, and centralized audit compliance frameworks.',
    architectureApproachAr:
      'نصمم مناطق هبوط سحابية سيادية ومعزولة، ونظام موحد للهوية يعتمد على Zero Trust والمصادقة متعددة العوامل، وعزل دقيق للشبكات مع أطر تدقيق شاملة.',
    solutions: [
      {
        title: 'Sovereign Cloud & On-Premises Landing Zones',
        titleAr: 'مناطق هبوط سحابية ومحلية سيادية',
        description: 'Hardware-level segregation, local key management, and strict data residency compliance.',
        descriptionAr: 'عزل على مستوى العتاد، إدارة محلية لمفاتيح التشفير، وامتثال كامل لقوانين حفظ البيانات.',
      },
      {
        title: 'Inter-Agency Secure API Gateway Fabric',
        titleAr: 'بوابات الربط والتكامل الآمن بين الجهات الحكومية',
        description: 'Standardized encrypted data exchange framework facilitating secure cross-department record sharing.',
        descriptionAr: 'إطار موحد ومشفر لتبادل البيانات يتيح التكامل الآمن والسريع بين الوزارات والهيئات الحكومية.',
      },
      {
        title: 'High-Availability Citizen Service Architecture',
        titleAr: 'معمارية الخدمات الرقمية عالية التوافر للمواطنين',
        description: 'Scalable portal backbones designed to handle nationwide registration and identity verification surges.',
        descriptionAr: 'بنية تحتية للبوابات الحكومية مصممة لتحمل ضغط الاستخدام الشامل أثناء التسجيل وإجراء المعاملات.',
      },
    ],
    operationalConsiderations: [
      'Adherence to national cybersecurity authority baselines and security classification frameworks',
      'Role-based granular access control (RBAC) with audited separation of duties',
      'Air-gapped disaster recovery repositories for critical national registries',
    ],
    operationalConsiderationsAr: [
      'الالتزام بمعايير الهيئات الوطنية للأمن السيبراني وأطر تصنيف سرية البيانات',
      'تحكم دقيق في الصلاحيات مبني على الأدوار مع الفصل التام والمدقق بين المهام',
      'مستودعات تعافي معزولة فيزيائياً للسجلات الوطنية الحساسة',
    ],
  },

  healthcare: {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    nameAr: 'الرعاية الصحية والعلوم الحيوية',
    tagline: 'Patient Data Confidentiality, Continuous Clinical Uptime & Medical IoT Security',
    taglineAr: 'سرية بيانات المرضى، استمرارية الأنظمة الطبية، وأمان إنترنت الأشياء الطبية',
    heroSummary:
      'Hospitals, diagnostic labs, and medical centers depend on uninterrupted access to electronic health records (EHR), secure PACS imaging transport, and airtight isolation of connected biomedical devices.',
    heroSummaryAr:
      'تعتمد المستشفيات ومراكز التحاليل والمنشآت الطبية على الوصول الفوري وغير المنقطع للسجلات الصحية الإلكترونية، ونقل صور الأشعة بأمان، والعزل الصارم للأجهزة الطبية المتصلة بالشبكة.',
    iconName: 'Activity',
    challenges: [
      {
        title: 'Zero-Tolerance Clinical Downtime',
        titleAr: 'انعدام القبول بأي انقطاع في الأنظمة السريرية',
        description: 'System outages during surgery or emergency care directly jeopardize patient clinical outcomes.',
        descriptionAr: 'أي انقطاع في النظام أثناء العمليات أو غرف الطوارئ يهدد سلامة المرضى بشكل مباشر.',
      },
      {
        title: 'Stringent Patient Privacy & HIPAA Compliance',
        titleAr: 'سرية السجلات الطبية والامتثال لمعايير الخصوصية',
        description: 'Electronic Protected Health Information (ePHI) requires end-to-end encryption at rest and in transit.',
        descriptionAr: 'تتطلب البيانات الصحية للمرضى تشفيراً شاملاً أثناء التخزين والنقل مع قيود صارمة على الوصول.',
      },
      {
        title: 'Vulnerable Biomedical IoT & Diagnostic Devices',
        titleAr: 'حماية الأجهزة الطبية المتصلة المعرضة للثغرات',
        description: 'Legacy medical equipment with unpatchable operating systems requiring strict network isolation.',
        descriptionAr: 'أجهزة ومعدات طبية متصلة بالشبكة تحتوي على برمجيات يصعب تحديثها وتتطلب عزلاً شبكياً محكماً.',
      },
    ],
    architectureApproach:
      'We engineer segmented medical VLAN fabrics, sub-second failover clinical storage networks, microsegmented medical IoT enclaves, and encrypted PACS imaging delivery backbones.',
    architectureApproachAr:
      'نهندس شبكات افتراضية معزولة للقطاع الطبي، وشبكات تخزين سريرية فائقة السرعة للتحويل عند الأعطال، ومناطق عزل للأجهزة الطبية، ومسارات مشفرة لنقل صور الأشعة.',
    solutions: [
      {
        title: 'Medical IoT Microsegmentation & Device Profiling',
        titleAr: 'العزل الدقيق والتعريف الذكي للأجهزة الطبية',
        description: 'Automated profiling isolating infusion pumps, MRI controllers, and monitors into restricted zones.',
        descriptionAr: 'تعريف تلقائي يعزل أجهزة ضخ المحاليل، أجهزة الرنين، وشاشات المراقبة في نطاقات معزولة تماماً.',
      },
      {
        title: 'High-Throughput PACS & Clinical Imaging Network',
        titleAr: 'شبكة نقل صور الأشعة والأنظمة السريرية السريعة',
        description: 'Low-latency lossless transport engineered for rapid diagnostic image retrieval across hospital campuses.',
        descriptionAr: 'نقل سريع للبيانات دون أي فقدان للحزم مصمم لاسترجاع صور الأشعة والتشخيص فوراً عبر أقسام المستشفى.',
      },
      {
        title: 'Resilient Hybrid Cloud Electronic Health Record Fabric',
        titleAr: 'بنية سحابية هجينة ومرنة للسجلات الصحية الإلكترونية',
        description: 'Fault-tolerant active-active database clusters guaranteeing instantaneous patient record lookup.',
        descriptionAr: 'عناقيد قواعد بيانات متزامنة تضمن البحث الفوري في ملفات المرضى التاريخية والحالية بدون أي تأخير.',
      },
    ],
    operationalConsiderations: [
      'Encrypted ePHI database backups with validated cryptographic integrity',
      'Clinical network change control workflows minimizing operational friction during shift rotations',
      'Continuous anomaly detection identifying unauthorized medical record exfiltration attempts',
    ],
    operationalConsiderationsAr: [
      'نسخ احتياطي مشفر للسجلات الصحية مع التحقق المستمر من سلامة التشفير',
      'حوكمة صارمة لتغييرات الشبكة لضمان عدم التأثير على الكوادر الطبية أثناء العمليات',
      'رصد مستمر للشذوذ لاكتشاف أي محاولة لتسريب أو سحب غير مصرح به لبيانات المرضى',
    ],
  },

  manufacturing: {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing & Industrial',
    nameAr: 'الصناعة والإنتاج الصناعي',
    tagline: 'OT/IT Convergence Security, Factory Floor Resilience & Industrial Automation',
    taglineAr: 'أمان تكامل تقنية المعلومات والعمليات، صمود المصانع، والأتمتة الصناعية',
    heroSummary:
      'Modern factories and supply chains integrate industrial control systems (ICS/SCADA) with enterprise cloud platforms, requiring airtight boundary defenses and zero packet loss across harsh industrial environments.',
    heroSummaryAr:
      'تجمع المصانع وسلاسل الإمداد الحديثة بين أنظمة التحكم الصناعي (SCADA/ICS) والمنصات السحابية المؤسسية، مما يتطلب دفاعات حدودية محكمة وانعدام فقدان البيانات في البيئات الصناعية القاسية.',
    iconName: 'Factory',
    challenges: [
      {
        title: 'OT & IT Network Convergence Risks',
        titleAr: 'مخاطر دمج شبكات التشغيل الصناعي وتقنية المعلومات',
        description: 'Connecting factory floors to corporate ERPs creates pathways for malware to disrupt physical assembly lines.',
        descriptionAr: 'ربط خطوط الإنتاج بأنظمة ERP المؤسسية قد يفتح ثغرات تسلل للبرمجيات الخبيثة لتعطيل خطوط التجميع.',
      },
      {
        title: 'Industrial Environmental Conditions & Vibration',
        titleAr: 'الظروف البيئية القاسية والاهتزازات في المصانع',
        description: 'Physical cabling, fiber conduits, and industrial switches must withstand extreme heat, dust, and electrical noise.',
        descriptionAr: 'يجب أن تتحمل التمديدات والمحولات الصناعية درجات الحرارة العالية، الغبار، والتداخل الكهرومغناطيسي.',
      },
      {
        title: 'Supply Chain & Distributed Plant Visibility',
        titleAr: 'رؤية سلاسل الإمداد والمصانع الموزعة',
        description: 'Coordinating operational metrics across geographically distributed manufacturing facilities in real time.',
        descriptionAr: 'تنسيق وجمع المؤشرات التشغيلية والإنتاجية لحظياً عبر مرافق ومصانع موزعة جغرافياً.',
      },
    ],
    architectureApproach:
      'We apply the Purdue Enterprise Reference Architecture (PERA), deploying industrial demilitarized zones (IDMZ), ruggedized optical backbones, and deep packet inspection for industrial protocols (Modbus, Profinet, OPC-UA).',
    architectureApproachAr:
      'نطبق معمارية Purdue الصناعية المرجعية، من خلال مناطق صناعية منزوعة السلاح (IDMZ)، وألياف ضوئية معززة، وفحص عميق لبروتوكولات التحكم الصناعي.',
    solutions: [
      {
        title: 'Industrial DMZ & OT/IT Boundary Protection',
        titleAr: 'المنطقة المعزولة الصناعية (IDMZ) وحماية حدود التشغيل',
        description: 'Strict unidirectional gateways and protocol proxies isolating plant control networks from corporate LANs.',
        descriptionAr: 'بوابات صارمة أحادية الاتجاه ووسطاء بروتوكولات يعزلون شبكات التحكم في المصنع عن شبكات الشركة.',
      },
      {
        title: 'Ruggedized Industrial Plant Network Fabric',
        titleAr: 'نسيج شبكي صناعي معزز للمنشآت والمصانع',
        description: 'DIN-rail mounted industrial switches, armored optical fiber, and high-temperature wireless access points.',
        descriptionAr: 'محولات صناعية مثبتة على سكك DIN، كوابل ألياف مدرعة، ونقاط اتصال لاسلكية مخصصة للحرارة العالية.',
      },
      {
        title: 'Real-Time Telemetry & Supply Chain Integration',
        titleAr: 'تتبع الإنتاج والربط اللحظي لسلاسل الإمداد',
        description: 'Edge gateways processing factory telemetry locally before transmitting aggregated insights securely to the cloud.',
        descriptionAr: 'بوابات طرفية تعالج بيانات المصانع محلياً قبل إرسال المؤشرات المجمعة والمشفرة إلى السحابة المركزية.',
      },
    ],
    operationalConsiderations: [
      'Scheduled maintenance aligned with planned factory plant shutdowns',
      'Protocol anomaly detection monitoring for unauthorized PLC logic write commands',
      'Ruggedized enclosure monitoring protecting physical network junctions from dust and moisture',
    ],
    operationalConsiderationsAr: [
      'جدولة صيانة الأنظمة لتتزامن مع فترات التوقف المخططة لخطوط الإنتاج',
      'كشف شذوذ البروتوكولات لمراقبة أي أوامر كتابة غير مصرح بها على وحدات PLC',
      'خزائن محمية ومراقبة لحماية نقاط الاتصال الفيزيائية من الغبار والرطوبة',
    ],
  },
};

export function getIndustryBySlug(slug: string): IndustryVertical | undefined {
  return Object.values(INDUSTRIES_DATA).find((ind) => ind.slug === slug || ind.id === slug);
}

