export interface InsightArticle {
  id: string;
  slug: string;
  category: 'Cloud Architecture' | 'Cybersecurity' | 'Infrastructure' | 'Modernization';
  categoryAr: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  date: string;
  readingTime: string;
  readingTimeAr: string;
  authorRole: string;
  authorRoleAr: string;
  keyTakeaways: string[];
  keyTakeawaysAr: string[];
  content: {
    sectionHeading: string;
    sectionHeadingAr: string;
    paragraphs: string[];
    paragraphsAr: string[];
  }[];
}

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: 'secure-cloud-architecture-without-complexity',
    slug: 'secure-cloud-architecture-without-complexity',
    category: 'Cloud Architecture',
    categoryAr: 'معمارية السحابة',
    title: 'Building a Secure Cloud Architecture Without Creating New Complexity',
    titleAr: 'بناء معمارية سحابية آمنة دون خلق تعقيدات تشغيلية جديدة',
    excerpt:
      'How enterprise engineering leaders can enforce Zero Trust boundaries, unify multi-account governance, and maintain developer velocity without introducing tool sprawl.',
    excerptAr:
      'كيف يمكن للقيادات الهندسية بالمؤسسات تطبيق حدود انعدام الثقة (Zero Trust) وتوحيد حوكمة الحسابات المتعددة مع الحفاظ على سرعة فرق التطوير دون تشتت الأدوات.',
    date: 'August 2026',
    readingTime: '7 min read',
    readingTimeAr: 'قراءة في 7 دقائق',
    authorRole: 'Enterprise Cloud Architecture Team',
    authorRoleAr: 'فريق هندسة السحابة للمؤسسات',
    keyTakeaways: [
      'Security controls must be integrated as immutable guardrails in Infrastructure-as-Code, not retrofitted manually.',
      'Decoupling network transit from workload security policies prevents routing sprawl and debugging bottlenecks.',
      'Centralized identity federation provides context-aware access while minimizing credential explosion.',
    ],
    keyTakeawaysAr: [
      'يجب دمج الضوابط الأمنية كحواجز ثابتة داخل البنية التحتية البرمجية (IaC) وليس إضافتها يدوياً بعد النشر.',
      'فصل مسارات نقل الشبكة عن سياسات أمان أحمال العمل يمنع تضخم مسارات التوجيه وصعوبات تشخيص المشكلات.',
      'توحيد إدارة الهويات يوفر وصولاً مبنياً على السياق مع الحد من انتشار وتعدد بيانات الاعتماد والمفاتيح.',
    ],
    content: [
      {
        sectionHeading: 'The Paradox of Cloud Security Proliferation',
        sectionHeadingAr: 'مفارقة تزايد أدوات الأمان السحابي',
        paragraphs: [
          'As enterprises scale their multi-cloud footprint, security architecture frequently evolves reactively. Each new cloud service or microservice deployment brings a separate console, identity store, and access control policy. Before long, security teams manage dozens of disparate tools, creating cognitive overload and blind spots.',
          'True enterprise security is not about stacking additional point products; it is about establishing architectural elegance. When security is built into foundational landing zones, developers move faster because boundaries are automated, auditable, and transparent.',
        ],
        paragraphsAr: [
          'مع توسع المؤسسات في بيئات السحب المتعددة، غالباً ما تتطور المعمارية الأمنية بشكل غير متناسق. كل خدمة سحابية أو تطبيق جديد يجلب معه لوحة تحكم ومستودع هويات وسياسات وصول منفصلة، مما يثقل كاهل الفرق الأمنية ويخلق ثغرات غير مرئية.',
          'الأمان المؤسسي الحقيقي لا يقوم على مراكمة الأدوات؛ بل على الأناقة المعمارية والتصميم المنضبط. عندما يتم بناء الأمان في صميم مناطق الهبوط السحابية الأساسية، تتمكن فرق التطوير من الإنجاز بسرعة لأن الضوابط مؤتمتة وقابلة للتدقيق والشفافية.',
        ],
      },
      {
        sectionHeading: 'Foundational Pillars of Streamlined Cloud Security',
        sectionHeadingAr: 'الركائز الأساسية لتبسيط أمان السحابة',
        paragraphs: [
          'First, enforce identity as the primary perimeter. Relying on network location alone in distributed environments creates fragility. By pairing cryptographically verifiable workload identities with automated posture assessment, organizations establish Zero Trust boundaries that follow workloads anywhere.',
          'Second, standardize on programmatic Landing Zones. Every VPC, subnet, route table, and security group should be instantiated via declarative Infrastructure as Code. This eliminates manual configuration drifts and guarantees that new workloads inherit corporate compliance baselines automatically.',
        ],
        paragraphsAr: [
          'أولاً، اعتماد الهوية كخط دفاع أساسي ومحيط رئيسي. الاعتماد على الموقع الجغرافي أو عنوان الشبكة في البيئات الموزعة يخلق هشاشة أمنية. ومن خلال دمج هويات أحمال العمل المشفرة والمتحقق منها مع التقييم المستمر للحالة، تؤسس المؤسسات حماية ترافق التطبيقات أينما وُجدت.',
          'ثانياً، توحيد مناطق الهبوط السحابية برمجياً. يجب إنشاء كل شبكة فرعية وجدول توجيه ومجموعة أمان عبر كود برمجي تصريحي (IaC)، مما يقضي على الانحرافات اليدوية في الإعدادات ويضمن التزام الأنظمة الجديدة بالمعايير المؤسسية فور نشرها.',
        ],
      },
    ],
  },
  {
    id: 'api-security-enterprise-architecture-problem',
    slug: 'api-security-enterprise-architecture-problem',
    category: 'Cybersecurity',
    categoryAr: 'الأمن السيبراني',
    title: 'Why API Security Is Becoming an Enterprise Architecture Problem',
    titleAr: 'لماذا أصبح أمان واجهات البرمجة مشكلة معمارية مؤسسية وليست مجرد جدار ناري',
    excerpt:
      'APIs now represent the primary conduit for enterprise data exchange. Defending them requires architectural decoupling, strict token validation, and behavioral telemetry rather than perimeter firewalls.',
    excerptAr:
      'أصبحت واجهات البرمجة القناة الرئيسية لتبادل البيانات المؤسسية. وتأمينها يتطلب تفكيكاً معمارياً، وتوثيقاً صارماً للتواقيع الرقمية، ورصداً سلوكياً بدلاً من الاعتماد على جدران الحماية التقليدية.',
    date: 'July 2026',
    readingTime: '6 min read',
    readingTimeAr: 'قراءة في 6 دقائق',
    authorRole: 'Cybersecurity Practice Lead',
    authorRoleAr: 'قيادة ممارسة الأمن السيبراني',
    keyTakeaways: [
      'Traditional Web Application Firewalls (WAFs) lack contextual awareness of application business logic and authorization schemas.',
      'API security must combine schema validation at the ingress gateway with runtime anomaly inspection and token introspection.',
      'Automated inventory discovery is vital to eliminate zombie and shadow APIs across distributed repositories.',
    ],
    keyTakeawaysAr: [
      'تفتقر جدران حماية تطبيقات الويب التقليدية (WAF) إلى الفهم السياقي لمنطق الأعمال وهياكل الصلاحيات للتطبيقات.',
      'يجب أن يجمع أمان واجهات البرمجة بين فحص المخططات (Schema Validation) عند بوابات الدخول ومراقبة الشذوذ أثناء التشغيل.',
      'الاكتشاف المؤتمت لواجهات البرمجة أمر جوهري للقضاء على الواجهات المهجورة وغير الموثقة في مستودعات الأكواد.',
    ],
    content: [
      {
        sectionHeading: 'The Evolution of the Modern Attack Surface',
        sectionHeadingAr: 'تطور سطح الهجوم في التطبيقات الحديثة',
        paragraphs: [
          'Modern applications are rarely monolithic blocks of HTML and CSS; they are ecosystems of microservices exposing REST and GraphQL APIs to web browsers, mobile clients, and third-party partners. Consequently, the enterprise attack surface has shifted directly to API endpoints.',
          'Attackers no longer rely solely on SQL injection or cross-site scripting. Instead, they exploit Broken Object Level Authorization (BOLA), parameter tampering, and credential stuffing against unmonitored endpoints to extract high-value database records silently.',
        ],
        paragraphsAr: [
          'لم تعد التطبيقات المعاصرة مجرد كتل برمجية متجانسة تعرض صفحات ثابتة؛ بل هي منظومات من الخدمات المصغرة التي تفتح واجهات REST وGraphQL لمتصفحات الويب وتطبيقات الهواتف والشركاء الخارجيين. ونتيجة لذلك، انتقل سطح الهجوم مباشرة إلى نقاط اتصال واجهات البرمجة.',
          'لم يعد المهاجمون يقتصرون على حقن SQL التقليدي؛ بل يستغلون ثغرات الصلاحيات على مستوى الكائنات (BOLA)، والتلاعب بالمدخلات، وهجمات حشو الهويات لسحب البيانات الحساسة من قواعد البيانات في صمت.',
        ],
      },
    ],
  },
  {
    id: 'designing-infrastructure-for-resilience',
    slug: 'designing-infrastructure-for-resilience',
    category: 'Infrastructure',
    categoryAr: 'البنية التحتية',
    title: 'Designing Infrastructure for Resilience, Not Just Availability',
    titleAr: 'تصميم البنية التحتية من أجل الصمود والتعافي، وليس فقط نسبة التوافر النظرية',
    excerpt:
      'Why focusing exclusively on uptime percentages obscures structural brittleness, and how enterprise architects build self-healing, fault-tolerant networks and data centers.',
    excerptAr:
      'لماذا يحجب التركيز الحصري على نسب التوافر النظرية الهشاشة الهيكلية، وكيف يبني مهندسو المؤسسات شبكات ومراكز بيانات ذاتية المعالجة والصمود.',
    date: 'June 2026',
    readingTime: '8 min read',
    readingTimeAr: 'قراءة في 8 دقائق',
    authorRole: 'Principal Infrastructure Architect',
    authorRoleAr: 'كبير مهندسي البنية التحتية',
    keyTakeaways: [
      'High availability assumes components rarely fail; resilience acknowledges failure is inevitable and bounds blast radius.',
      'Active-active multi-site topology eliminates the high-risk manual human cutovers inherent in traditional disaster recovery.',
      'Real-time physical telemetry (optical loss, power transients, thermal spikes) prevents silent degradation before service outages.',
    ],
    keyTakeawaysAr: [
      'يفترض التوافر العالي ندرة تعطل المكونات، بينما يعترف الصمود بحتمية الأعطال ويعمل على احتواء نطاق تأثيرها.',
      'النسيج النشط المتزامن عبر مواقع متعددة يلغي مخاطر التحويل اليدوي البطيء المصاحب لخطط التعافي التقليدية.',
      'القياسات الفيزيائية اللحظية (توهين الإشارات الضوئية، تقلبات الطاقة، الحرارة) تمنع التدهور الصامت قبل حدوث الانقطاع.',
    ],
    content: [
      {
        sectionHeading: 'The Difference Between Uptime and True Resilience',
        sectionHeadingAr: 'الفرق بين نسبة التوافر والصمود المؤسسي الحقيقي',
        paragraphs: [
          'For decades, enterprise IT contracts celebrated “four nines” (99.99%) availability. Yet, when an unexpected physical fiber cut or power disruption struck, organizations experienced hours of painful recovery because their secondary systems had never been exercised under real production load.',
          'Resilience engineering shifts the paradigm: we assume every component — from an optical transceiver to an entire availability zone — will fail eventually. The architecture is engineered so that when a failure occurs, traffic converges in milliseconds without user impact.',
        ],
        paragraphsAr: [
          'لعقود طويلة، احتفت اتفاقيات مستوى الخدمة بنسب التوافر النظرية (99.99%). ومع ذلك، عند حدوث انقطاع غير متوقع في كابل ألياف أو تذبذب في التيار الكهربائي، عانت المؤسسات من ساعات طويلة من التوقف لأن الأنظمة الاحتياطية لم تُختبر تحت ضغط الاستخدام الفعلي.',
          'تغير هندسة الصمود هذا المفهوم: نحن نفترض أن كل مكون — من مستقبل الإشارة الضوئية إلى منطقة التوافر الكاملة — سيتعرض للعطل في وقت ما. وتُبنى المعمارية بحيث عند حدوث أي خلل، تتحول مسارات البيانات في أجزاء من الثانية دون أي أثر على المستخدمين.',
        ],
      },
    ],
  },
  {
    id: 'legacy-systems-to-cloud-native-applications',
    slug: 'legacy-systems-to-cloud-native-applications',
    category: 'Modernization',
    categoryAr: 'تحديث الأنظمة',
    title: 'From Legacy Systems to Cloud-Native Applications: An Architectural Roadmap',
    titleAr: 'من الأنظمة المتجانسة القديمة إلى التطبيقات السحابية الأصلية: خارطة طريق معمارية',
    excerpt:
      'A phased, risk-mitigated strategy for refactoring mission-critical monolithic software into modern containerized services without operational disruption.',
    excerptAr:
      'استراتيجية مرحلية ومدروسة المخاطر لتحويل البرمجيات المتجانسة الحيوية إلى خدمات معيارية مجهزة بالحاويات دون تعطيل سير الأعمال اليومية.',
    date: 'May 2026',
    readingTime: '9 min read',
    readingTimeAr: 'قراءة في 9 دقائق',
    authorRole: 'Application Modernization Practice',
    authorRoleAr: 'ممارسة تحديث التطبيقات',
    keyTakeaways: [
      'Big-bang rewrites carry catastrophic failure rates; incremental decomposition via the Strangler Fig pattern delivers rapid, continuous business value.',
      'Establishing clean API contracts between legacy databases and modern microservices decouples releases.',
      'Automated DevSecOps pipelines provide regression safety, ensuring every containerized build satisfies quality and security gates.',
    ],
    keyTakeawaysAr: [
      'تحمل مشاريع إعادة الكتابة الشاملة الفورية نسب فشل عالية؛ بينما يوفر التفكيك التدريجي قيمة أعمال مستمرة وسريعة.',
      'تأسيس عقود واجهات برمجة واضحة بين قواعد البيانات القديمة والخدمات المصغرة الحديثة يتيح استقلالية النشر والتحديث.',
      'توفر مسارات DevSecOps المؤتمتة حماية ضد الأخطاء التراجعية وتضمن استيفاء كل حاوية برمجية لمعايير الجودة والأمان.',
    ],
    content: [
      {
        sectionHeading: 'The Pitfalls of the All-or-Nothing Rewrite',
        sectionHeadingAr: 'مخاطر إعادة بناء الأنظمة بالكامل دفعة واحدة',
        paragraphs: [
          'Enterprise IT history is filled with ambitious multi-year rewrite projects that were abandoned after millions of dollars and zero working production features. Legacy systems, despite their rigid codebases, embody decades of implicit business rules and edge-case handlings that are rarely documented.',
          'The architectural solution is iterative refactoring: placing a modern API facade in front of the existing system, intercepting new feature requests, and steadily extracting bounded contexts into containerized services until the legacy core can be safely retired.',
        ],
        paragraphsAr: [
          'تاريخ تقنية المعلومات المؤسسية مليء بمشاريع إعادة البناء الطموحة التي تم التخلي عنها بعد إنفاق مبالغ طائلة دون إطلاق أي منتج فعلي. فالأنظمة القديمة، رغم جمود كودها، تختزن عقوداً من قواعد الأعمال والحالات الاستثنائية التي نادراً ما يتم توثيقها بشكل كامل.',
          'الحل المعماري يكمن في التحديث التكراري المنضبط: وضع واجهة برمجية حديثة أمام النظام الحالي، واستقبال الميزات الجديدة عليها، ونقل النطاقات المستقلة تدريجياً إلى خدمات مصغرة بالحاويات حتى يتم إيقاف النواة القديمة بأمان تام.',
        ],
      },
    ],
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return INSIGHTS_DATA.find((item) => item.slug === slug || item.id === slug);
}

