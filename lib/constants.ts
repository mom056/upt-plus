/**
 * UPT PLUS — Enterprise Configuration & Constants
 * Cybersecurity & Cloud Computing
 * Domain: https://upt-plus.com
 */

export const BRAND_CONFIG = {
  name: 'UPT PLUS',
  legalName: 'UPT Plus Technology Solutions',
  tagline: 'Cybersecurity & Cloud Computing',
  taglineAr: 'الأمن السيبراني والحوسبة السحابية',
  shortTagline: 'Secure. Scale. Perform.',
  shortTaglineAr: 'أمان. توسع. أداء.',
  domain: 'https://upt-plus.com',
  colors: {
    navy: '#0D1326',
    deepNavy: '#080D1A',
    surfaceDark: '#11182B',
    surfaceDarkSecondary: '#151D32',
    orange: '#FF7A00',
    orangeHover: '#E66E00',
    purple: '#6B21A8',
    purpleLight: '#9333EA',
    purpleGaze: 'rgba(107, 33, 168, 0.15)',
    slateGray: '#6B7280',
    borderDark: 'rgba(255, 255, 255, 0.08)',
    borderLight: 'rgba(0, 0, 0, 0.08)',
    textLight: '#F8FAFC',
    textMuted: '#AAB2C0',
    surfaceLight: '#F7F8FA',
    textDark: '#101827',
  },
  // Clearly named configuration placeholders for corporate facts
  placeholders: {
    phone: 'COMPANY_PHONE',
    email: 'contact@upt-plus.com',
    contactEmail: 'contact@upt-plus.com',
    inquiryEmail: 'inquiries@upt-plus.com',
    securityEmail: 'security@upt-plus.com',
    address: 'UPT PLUS Global Technology Center (Address to be verified)',
    registration: 'CORPORATE_REGISTRATION_ID',
    linkedinUrl: 'https://linkedin.com/company/upt-plus',
  },
};

export interface NavItem {
  name: string;
  nameAr: string;
  href: string;
  description?: string;
  descriptionAr?: string;
  children?: {
    name: string;
    nameAr: string;
    href: string;
    description: string;
    descriptionAr: string;
    badge?: string;
  }[];
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    name: 'Home',
    nameAr: 'الرئيسية',
    href: '/',
  },
  {
    name: 'Solutions',
    nameAr: 'الحلول',
    href: '/solutions',
    children: [
      {
        name: 'Cybersecurity',
        nameAr: 'الأمن السيبراني',
        href: '/solutions/cybersecurity',
        description: 'Application, API, Cloud, and Zero Trust defense architectures.',
        descriptionAr: 'بنيات دفاعية للتطبيقات، واجهات البرمجة، السحابة، والوصول الموثوق.',
      },
      {
        name: 'Cloud Computing',
        nameAr: 'الحوسبة السحابية',
        href: '/solutions/cloud',
        description: 'Enterprise cloud architecture, hybrid fabric, migration, and resilience.',
        descriptionAr: 'هندسة سحابية للمؤسسات، البنية الهجينة، الترحيل، والقدرة على الصمود.',
      },
      {
        name: 'Digital Infrastructure',
        nameAr: 'البنية التحتية الرقمية',
        href: '/solutions/infrastructure',
        description: 'Enterprise networking, data center systems, fiber, and connectivity.',
        descriptionAr: 'شبكات المؤسسات، أنظمة مراكز البيانات، الألياف الضوئية، والاتصال.',
      },
      {
        name: 'Application Modernization',
        nameAr: 'تحديث التطبيقات',
        href: '/solutions/applications',
        description: 'Cloud-native engineering, containerized platforms, and legacy evolution.',
        descriptionAr: 'هندسة السحابة الأصلية، المنصات المجهزة بالحاويات، وتطوير الأنظمة القديمة.',
      },
    ],
  },
  {
    name: 'Managed Services',
    nameAr: 'الخدمات المدارة',
    href: '/managed-services',
  },
  {
    name: 'Industries',
    nameAr: 'القطاعات',
    href: '/industries',
    children: [
      {
        name: 'Financial Services',
        nameAr: 'الخدمات المالية',
        href: '/industries/financial-services',
        description: 'Mission-critical availability, high-resilience security, and transaction integrity.',
        descriptionAr: 'جاهزية عالية للأنظمة الحرجة، أمان فائق، وسلامة المعاملات.',
      },
      {
        name: 'Telecommunications',
        nameAr: 'الاتصالات ومزودو الخدمات',
        href: '/industries/telecom',
        description: 'Carrier-grade distributed infrastructure, DDoS mitigation, and edge scale.',
        descriptionAr: 'بنية تحتية موزعة، حماية من هجمات الحرمان، وقابلية توسع طرفية.',
      },
      {
        name: 'Retail & E-Commerce',
        nameAr: 'التجزئة والتجارة الإلكترونية',
        href: '/industries/retail',
        description: 'Peak traffic elasticity, API security, and frictionless digital experience.',
        descriptionAr: 'مرونة التعامل مع ذروة الزيارات، أمان واجهات البرمجة، وتجربة سلسة.',
      },
      {
        name: 'Government & Public Sector',
        nameAr: 'القطاع الحكومي والعام',
        href: '/industries/government',
        description: 'Sovereign cloud compliance, robust segmentation, and critical data protection.',
        descriptionAr: 'التوافق مع المتطلبات السيادية، عزل أمني محكم، وحماية البيانات.',
      },
      {
        name: 'Healthcare & Life Sciences',
        nameAr: 'الرعاية الصحية والعلوم',
        href: '/industries/healthcare',
        description: 'Confidential clinical systems, high availability, and HIPAA/data privacy adherence.',
        descriptionAr: 'أنظمة طبية سرية، استمرارية الأعمال، وخصوصية السجلات الصحية.',
      },
      {
        name: 'Manufacturing & Industrial',
        nameAr: 'الصناعة والتصنيع',
        href: '/industries/manufacturing',
        description: 'OT/IT convergence security, multi-site connectivity, and plant resilience.',
        descriptionAr: 'أمان الربط بين التقنية التشغيلية والمعلوماتية، واتصال المصانع الموزعة.',
      },
    ],
  },
  {
    name: 'Projects',
    nameAr: 'المشاريع والدراسات',
    href: '/projects',
  },
  {
    name: 'Ecosystem',
    nameAr: 'المنظومة التقنية',
    href: '/partners',
  },
  {
    name: 'About',
    nameAr: 'عن الشركة',
    href: '/about',
  },
  {
    name: 'Capabilities',
    nameAr: 'بيان القدرات',
    href: '/capabilities',
  },
  {
    name: 'Insights',
    nameAr: 'المعرفة والرؤى',
    href: '/insights',
  },
  {
    name: 'Contact',
    nameAr: 'تواصل معنا',
    href: '/contact',
  },
];
