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
    nameAr: 'الحلول التقنية',
    href: '/solutions',
  },
  {
    name: 'About',
    nameAr: 'عن الشركة',
    href: '/about',
  },
  {
    name: 'Technology Ecosystem',
    nameAr: 'المنظومة التقنية',
    href: '/partners',
  },
  {
    name: 'Contact',
    nameAr: 'تواصل معنا',
    href: '/contact',
  },
];

