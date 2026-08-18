export interface CaseStudy {
  id: string;
  slug: string;
  category: 'Cybersecurity' | 'Cloud Computing' | 'Digital Infrastructure' | 'Application Modernization';
  categoryAr: string;
  industry: string;
  industryAr: string;
  title: string;
  titleAr: string;
  badgeType: 'Representative Architecture' | 'Enterprise Reference';
  summary: string;
  summaryAr: string;
  challenge: string;
  challengeAr: string;
  environment: string;
  environmentAr: string;
  architectureDetails: string;
  architectureDetailsAr: string;
  solution: string;
  solutionAr: string;
  technologies: string[];
  implementationSteps: {
    phase: string;
    phaseAr: string;
    description: string;
    descriptionAr: string;
  }[];
  qualitativeOutcome: string;
  qualitativeOutcomeAr: string;
  diagramConcept: string;
}

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'banking-zero-trust-fabric',
    slug: 'banking-zero-trust-fabric',
    category: 'Cybersecurity',
    categoryAr: 'الأمن السيبراني',
    industry: 'Financial Services',
    industryAr: 'الخدمات المالية',
    title: 'Zero Trust Microsegmentation & API Defense for Core Banking Systems',
    titleAr: 'عزل دقيق بانعدام الثقة وحماية واجهات البرمجة للأنظمة المصرفية',
    badgeType: 'Representative Architecture',
    summary:
      'Designing a defense-in-depth security perimeter and microsegmented network topology for a core banking environment handling real-time high-value transactions.',
    summaryAr:
      'تصميم معمارية دفاعية متعمقة وطوبولوجيا شبكية دقيقة العزل لبيئة مصرفية أساسية تعالج معاملات مالية فورية عالية القيمة.',
    challenge:
      'The legacy banking network relied on a flat perimeter model where internal services enjoyed excessive trust, exposing the organization to lateral breach risks, unmonitored API interactions, and compliance audit friction.',
    challengeAr:
      'كانت الشبكة المصرفية تعتمد على نموذج محيطي تقليدي يمنح ثقة غير مقيدة للأنظمة الداخلية، مما يعرضها لمخاطر التسلل الجانبي وصعوبة تدقيق تفاعلات واجهات البرمجة.',
    environment:
      'Hybrid on-premises core transactional datacenters integrated with private cloud banking portals and external SWIFT/payment networks.',
    environmentAr:
      'مراكز بيانات هجينة للعمليات المصرفية متكاملة مع بوابات الخدمات السحابية الخاصة وشبكات الدفع والتحويلات الدولية.',
    architectureDetails:
      'Implemented an identity-first Zero Trust Architecture using dynamic mTLS authentication, an enterprise API gateway shield, and software-defined microsegmentation separating ledger databases from edge channels.',
    architectureDetailsAr:
      'تنفيذ بنية انعدام الثقة المعتمدة على الهوية مع التوثيق المتبادل (mTLS)، وبوابة حماية لواجهات البرمجة، وعزل برمجي يفصل قواعد بيانات الحسابات عن القنوات الخارجية.',
    solution:
      'Deployed granular ingress filtering, token introspection for all inter-service requests, hardware-backed cryptographic signing, and unified telemetry export to a centralized SIEM.',
    solutionAr:
      'نشر فحص دقيق للتدفق، والتحقق المستمر من التواقيع الرقمية للطلبات المتبادلة بين الخدمات، وتشفير عتادي، وتغذية موحدة للبيانات إلى نظام إدارة الأحداث الأمنية.',
    technologies: [
      'Zero Trust Network Access (ZTNA)',
      'Mutual TLS (mTLS)',
      'Enterprise API Security Gateway',
      'Software-Defined Microsegmentation',
      'Hardware Security Modules (HSM)',
    ],
    implementationSteps: [
      {
        phase: 'Phase 1: Traffic Discovery & Dependency Mapping',
        phaseAr: 'المرحلة 1: اكتشاف تدفقات البيانات ورسم التبعيات',
        description: 'Comprehensive mapping of all banking service communication flows and API endpoints.',
        descriptionAr: 'تخطيط شامل لكافة مسارات التواصل بين الخدمات المصرفية ونقاط واجهات البرمجة.',
      },
      {
        phase: 'Phase 2: Policy Formulation & Enforcement',
        phaseAr: 'المرحلة 2: صياغة السياسات وتطبيق العزل',
        description: 'Formulating least-privilege access rules and transitioning to strict microsegmented enclaves.',
        descriptionAr: 'وضع قواعد الوصول بالحد الأدنى من الصلاحيات والتحول إلى مناطق معزولة برمجياً.',
      },
      {
        phase: 'Phase 3: Automated Validation & Telemetry Ingestion',
        phaseAr: 'المرحلة 3: التحقق المؤتمت واستيعاب القياسات',
        description: 'Validating zero-disruption traffic flow and establishing continuous security auditing.',
        descriptionAr: 'التحقق من انعدام التأثير على سير المعاملات وتفعيل الرصد والتدقيق الأمني المستمر.',
      },
    ],
    qualitativeOutcome:
      'Eliminated implicit trust across internal workloads, contained lateral threat movement, achieved full audit compliance with monetary authority guidelines, and provided real-time visibility into inter-service API communications.',
    qualitativeOutcomeAr:
      'القضاء التام على الثقة الضمنية بين أحمال العمل، احتواء مخاطر التسلل الجانبي، تحقيق الامتثال الكامل لتعليمات البنك المركزي، واكتساب رؤية لحظية لكافة تفاعلات واجهات البرمجة.',
    diagramConcept: 'Edge Ingress -> Identity Verification Gate -> Microsegmented Banking Core -> HSM Vault',
  },
  {
    id: 'ecommerce-multicloud-elasticity',
    slug: 'ecommerce-multicloud-elasticity',
    category: 'Cloud Computing',
    categoryAr: 'الحوسبة السحابية',
    industry: 'Retail & E-Commerce',
    industryAr: 'التجزئة والتجارة الإلكترونية',
    title: 'High-Throughput Distributed Cloud Architecture for Omnichannel Commerce',
    titleAr: 'معمارية سحابية موزعة عالية التدفق للتجارة الإلكترونية متعددة القنوات',
    badgeType: 'Representative Architecture',
    summary:
      'Architecting an autoscaling, multi-zone cloud infrastructure engineered to sustain massive promotional traffic surges without latency degradation or checkout failures.',
    summaryAr:
      'تصميم بنية سحابية ذاتية التوسع عبر مناطق متعددة مصممة لتحمل قفزات الزيارات الهائلة في مواسم التخفيضات دون أي بطء أو تعطل في عمليات الدفع.',
    challenge:
      'During major promotional events, unpredictable user surges caused database lock contention, checkout delays, and intermittent outages across product catalog endpoints.',
    challengeAr:
      'خلال الحملات الترويجية الكبرى، تسببت قفزات الزيارات غير المتوقعة في اختناق قواعد البيانات وبطء إتمام الطلبات وانقطاعات متكررة في تصفح المنتجات.',
    environment:
      'Multi-region cloud fabric hosting containerized microservices, distributed cache clusters, and multi-tier database replication.',
    environmentAr:
      'نسيج سحابي متعدد المناطق يستضيف خدمات مصغرة مجهزة بالحاويات، وعناقيد تخزين مؤقت موزع، ومزامنة قواعد بيانات متعددة الطبقات.',
    architectureDetails:
      'Decomposed monolithic application services into decoupled containerized modules running on Kubernetes with predictive horizontal autoscaling, distributed Redis caching, and edge content routing.',
    architectureDetailsAr:
      'تفكيك الأنظمة المتجانسة إلى وحدات مستقلة تعمل بالحاويات على Kubernetes مع توسع تلقائي استباقي، وتخزين مؤقت موزع عبر Redis، وتوجيه ذكي للمحتوى.',
    solution:
      'Integrated an edge traffic manager that absorbs static assets, rate-limits aggressive bots, and routes checkout transactions across an active-active container fabric.',
    solutionAr:
      'تكامل مع موجه بيانات طرفي يستوعب الملفات الثابتة، ويضبط حركة الروبوتات الاستحواذية، ويوجه عمليات الشراء عبر نسيج حاويات نشط ومزدوج.',
    technologies: [
      'Kubernetes Orchestration',
      'Distributed Redis Caching Fabric',
      'Horizontal Pod Autoscaling (HPA)',
      'Infrastructure as Code (Terraform)',
      'Edge Traffic Optimization',
    ],
    implementationSteps: [
      {
        phase: 'Phase 1: Architecture Decoupling',
        phaseAr: 'المرحلة 1: تفكيك المعمارية البرمجية',
        description: 'Separating read-heavy catalog queries from write-heavy transactional checkout pipelines.',
        descriptionAr: 'فصل استعلامات تصفح المنتجات عن مسار كتابة ومعالجة عمليات الدفع والشراء.',
      },
      {
        phase: 'Phase 2: Cluster Setup & Autoscaling Tuning',
        phaseAr: 'المرحلة 2: إعداد العناقيد وضبط التوسع التلقائي',
        description: 'Deploying multi-zone clusters with sub-second scale triggers and readiness probes.',
        descriptionAr: 'نشر عناقيد خوادم عبر مناطق متعددة مع مؤشرات توسع سريعة واختبارات لجاهزية التطبيقات.',
      },
      {
        phase: 'Phase 3: Synthetic Load Stress & Chaos Testing',
        phaseAr: 'المرحلة 3: اختبارات الأحمال والتحمل القصوى',
        description: 'Simulating 5x peak historic traffic to validate zero-latency degradation during burst events.',
        descriptionAr: 'محاكاة أحمال تزيد بخمسة أضعاف الذروة التاريخية للتأكد من استقرار الأداء وسرعة الاستجابة.',
      },
    ],
    qualitativeOutcome:
      'Achieved uninterrupted service availability through peak sales campaigns, reduced median page response time, protected catalog data from inventory scrapers, and established a scalable foundation for global expansion.',
    qualitativeOutcomeAr:
      'تحقيق استمرارية تشغيلية كاملة أثناء مواسم الذروة، تسريع زمن استجابة الصفحات، حماية المخزون من روبوتات الحجز الوهمي، وتأسيس بنية مرنة تدعم التوسع المستقبلي.',
    diagramConcept: 'Edge Delivery -> Bot Filter -> Dynamic Load Balancer -> Kubernetes Microservices -> Distributed Read/Write DBs',
  },
  {
    id: 'telecom-carrier-backbone-resilience',
    slug: 'telecom-carrier-backbone-resilience',
    category: 'Digital Infrastructure',
    categoryAr: 'البنية التحتية الرقمية',
    industry: 'Telecommunications',
    industryAr: 'الاتصالات ومزودو الخدمات',
    title: 'Carrier-Grade Optical Backbone & High-Density Core Network Architecture',
    titleAr: 'شبكة ألياف ضوئية أساسية على مستوى المشغلين ومعمارية مراكز بيانات متطورة',
    badgeType: 'Representative Architecture',
    summary:
      'Designing a high-throughput 100G/400G optical routing backbone and structured cabling environment for carrier-grade network transit.',
    summaryAr:
      'تصميم شبكة توجيه عبر الألياف الضوئية عالية السرعة بسرعات 100G/400G مع تمديدات هيكلية متقدمة لدعم نقل البيانات بسعات المشغلين الكبار.',
    challenge:
      'Rapid subscriber growth created bandwidth saturation on legacy backbone links, while unmanaged fiber patch pathways raised operational risk during scheduled upgrades.',
    challengeAr:
      'أدى النمو المتسارع في أعداد المشتركين إلى اختناق خطوط النقل القديمة، كما شكلت مسارات الألياف غير المنظمة مخاطر تشغيلية أثناء أعمال الصيانة والتحديث.',
    environment:
      'Distributed carrier central offices, regional points of presence (PoPs), and main transmission interconnect facilities.',
    environmentAr:
      'مراكز اتصالات رئيسية موزعة، نقاط تواجد إقليمية (PoPs)، ومرافق ربط ونقل البيانات المركزية.',
    architectureDetails:
      'Engineered a non-blocking Spine-Leaf core switching fabric with redundant optical transceivers, structured high-density fiber trays, and automated BGP route convergence.',
    architectureDetailsAr:
      'هندسة نسيج تحويل شبكي متقدم (Spine-Leaf) مع مستقبلات ألياف ضوئية متكررة، ومسارات كوابل عالية الكثافة، وتحويل مسارات BGP تلقائياً.',
    solution:
      'Deployed certified single-mode optical fiber trunking with MPO/MTP interfaces, continuous OTDR link integrity monitoring, and segregated management channels.',
    solutionAr:
      'نشر كوابل ألياف أحادية النمط معتمدة مع وصلات MPO/MTP، وتفعيل المراقبة اللحظية لسلامة الإشارة (OTDR)، وعزل قنوات إدارة الشبكة.',
    technologies: [
      '100G / 400G Optical Routing Fabrics',
      'Spine-Leaf EVPN-VXLAN Topology',
      'High-Density MPO/MTP Fiber Systems',
      'Real-Time OTDR Optical Loss Telemetry',
      'Out-of-Band Network Management (OOBM)',
    ],
    implementationSteps: [
      {
        phase: 'Phase 1: Physical Route Survey & Loss Budgeting',
        phaseAr: 'المرحلة 1: المسح الميداني وحسابات فقدان الإشارة',
        description: 'Comprehensive optical attenuation analysis and pathway optimization across carrier sites.',
        descriptionAr: 'تحليل دقيق لتوهين الإشارات الضوئية وتخطيط المسارات الفيزيائية بين مواقع الاتصالات.',
      },
      {
        phase: 'Phase 2: Structured Backbone Deployment',
        phaseAr: 'المرحلة 2: نشر التمديدات الهيكلية الأساسية',
        description: 'Installing certified high-density fiber trays, modular patching, and redundant power feeds.',
        descriptionAr: 'تركيب صواني كوابل الألياف عالية الكثافة، والربط المعياري، وتأمين خطوط التغذية المزدوجة.',
      },
      {
        phase: 'Phase 3: Core Convergence & Cutover',
        phaseAr: 'المرحلة 3: التحويل والتشغيل التجريبي',
        description: 'Phased routing migration with zero packet drop during peak transit windows.',
        descriptionAr: 'ترحيل حركة مرور البيانات تدريجياً وبدون أي فقدان للحزم أثناء ساعات الذروة.',
      },
    ],
    qualitativeOutcome:
      'Expanded backbone transit capacity multi-fold, achieved sub-second network convergence during route failovers, organized physical fiber assets for 10-year scalability, and eliminated cabling clutter risks.',
    qualitativeOutcomeAr:
      'مضاعفة سعات نقل البيانات الأساسية، تحقيق سرعة تحويل مسارات الشبكة في أجزاء من الثانية عند الطوارئ، تنظيم البنية الفيزيائية لدعم التوسع لعقد قادم، والقضاء على مخاطر الفوضى في التوصيلات.',
    diagramConcept: 'Carrier Transit Node A <-> Redundant 400G Optical Conduits <-> Non-Blocking Spine-Leaf Core <-> Carrier Transit Node B',
  },
  {
    id: 'healthcare-ehr-hybrid-modernization',
    slug: 'healthcare-ehr-hybrid-modernization',
    category: 'Application Modernization',
    categoryAr: 'تحديث التطبيقات',
    industry: 'Healthcare & Life Sciences',
    industryAr: 'الرعاية الصحية',
    title: 'Enterprise EHR System Decoupling & Clinical API Gateway Integration',
    titleAr: 'تحديث نظام السجلات الطبية الإلكترونية وتكامل بوابات الواجهات السريرية',
    badgeType: 'Representative Architecture',
    summary:
      'Refactoring a monolithic clinical records application into modular services connected via standard FHIR APIs and microsegmented medical data vaults.',
    summaryAr:
      'إعادة هندسة وتحديث نظام السجلات الطبية المتجانس إلى خدمات معيارية مرتبطة عبر واجهات FHIR ومستودعات بيانات سريرية فائقة العزل.',
    challenge:
      'A brittle monolithic EHR system prevented rapid integration with modern diagnostic tools, required extensive maintenance downtime, and struggled to satisfy modern audit demands.',
    challengeAr:
      'نظام السجلات الطبية القديم كان يعيق الربط السريع مع الأجهزة التشخيصية الحديثة، ويتطلب فترات توقف للصيانة، ويعاني في تلبية متطلبات التدقيق الحديثة.',
    environment:
      'Hospital network spanning acute care campuses, outpatient clinics, laboratory diagnostics, and remote telemedicine doctors.',
    environmentAr:
      'شبكة طبية تربط المستشفيات المركزية، العيادات الخارجية، مختبرات التحاليل، وأطباء الرعاية الصحية عن بعد.',
    architectureDetails:
      'Adopted the Strangler Fig pattern to decouple patient identity, billing, clinical charting, and lab results into isolated containerized services communicating over an event-driven message bus.',
    architectureDetailsAr:
      'اعتماد استراتيجية التحديث التدريجي لفصل هويات المرضى، الفوترة، السجلات السريرية، ونتائج المختبر إلى خدمات مستقلة تتواصل عبر ناقل رسائل معتمد على الأحداث.',
    solution:
      'Built a centralized FHIR API gateway enforcing role-based clinical access, field-level encryption for ePHI, and automated container lifecycle pipelines.',
    solutionAr:
      'بناء بوابة واجهات برمجة FHIR موحدة تفرض قيود الوصول السريري حسب الدور، والتشفير الدقيق لبيانات المرضى، وأتمتة مسارات نشر الحاويات.',
    technologies: [
      'FHIR / HL7 Integration Protocols',
      'Event-Driven Message Bus (Kafka)',
      'Field-Level ePHI Encryption',
      'Containerized Clinical Microservices',
      'Role-Based Audit Logging',
    ],
    implementationSteps: [
      {
        phase: 'Phase 1: Domain Modeling & Interface Extraction',
        phaseAr: 'المرحلة 1: نمذجة النطاق واستخراج الواجهات',
        description: 'Defining clinical domain boundaries and extracting critical read APIs without impacting live charting.',
        descriptionAr: 'تحديد حدود النطاقات الطبية واستخراج واجهات الاستعلام دون التأثير على عمل الأطباء المباشر.',
      },
      {
        phase: 'Phase 2: Event Bus Deployment & Parallel Run',
        phaseAr: 'المرحلة 2: نشر ناقل الأحداث والتشغيل الموازي',
        description: 'Deploying asynchronous data synchronization and validating ledger consistency between old and new systems.',
        descriptionAr: 'نشر المزامنة غير المتزامنة للبيانات والتأكد من مطابقة السجلات بين النظامين القديم والحديث.',
      },
      {
        phase: 'Phase 3: Service Cutover & Monolith Deprecation',
        phaseAr: 'المرحلة 3: التحويل النهائي وإيقاف النظام القديم',
        description: 'Transitioning clinical charting modules seamlessly to containerized microservices.',
        descriptionAr: 'نقل وحدات السجلات السريرية بسلاسة إلى الخدمات المصغرة الحديثة.',
      },
    ],
    qualitativeOutcome:
      'Enabled rapid rollout of digital telemedicine features, eliminated scheduled maintenance outages, ensured strict patient confidentiality compliance, and created an extensible platform for future clinical innovations.',
    qualitativeOutcomeAr:
      'تمكين إطلاق خدمات الطب الاتصالي بسرعة، القضاء على فترات توقف النظام للصيانة، ضمان الخصوصية والسرية التامة لبيانات المرضى، وتأسيس منصة مرنة للابتكارات الطبية المستقبلية.',
    diagramConcept: 'Clinical Portals -> FHIR API Gateway -> Event Streaming Bus -> Containerized Clinical Services -> Encrypted ePHI Vault',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES_DATA.find((item) => item.slug === slug || item.id === slug);
}

