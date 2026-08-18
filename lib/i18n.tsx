'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

export interface Translations {
  nav: {
    home: string;
    solutions: string;
    managedServices: string;
    industries: string;
    projects: string;
    ecosystem: string;
    about: string;
    capabilities: string;
    insights: string;
    contact: string;
    talkToExpert: string;
    exploreCapabilities: string;
    viewProjects: string;
    requestProposal: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    stats: {
      zeroTrust: string;
      cloudScalable: string;
      resilience: string;
    };
  };
  positioning: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    body: string;
  };
  common: {
    learnMore: string;
    readMore: string;
    viewAll: string;
    downloadDoc: string;
    back: string;
    architecture: string;
    challenge: string;
    solution: string;
    outcome: string;
    technologies: string;
    contactTeam: string;
    privacy: string;
    terms: string;
    allRightsReserved: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      managedServices: 'Managed Services',
      industries: 'Industries',
      projects: 'Projects & Case Studies',
      ecosystem: 'Ecosystem',
      about: 'About',
      capabilities: 'Capabilities',
      insights: 'Insights',
      contact: 'Contact',
      talkToExpert: 'Talk to an Expert',
      exploreCapabilities: 'Explore Our Capabilities',
      viewProjects: 'View Projects',
      requestProposal: 'Request Architecture Proposal',
    },
    hero: {
      badge: 'ENTERPRISE CYBERSECURITY & CLOUD COMPUTING',
      title: 'SECURE. SCALE. PERFORM.',
      subtitle: 'Technology infrastructure built for what’s next.',
      description:
        'UPT Plus helps organizations build, secure, modernize, and operate the digital environments behind modern business — from cybersecurity and cloud platforms to enterprise infrastructure and applications.',
      stats: {
        zeroTrust: 'Zero Trust Security Fabric',
        cloudScalable: 'Distributed Cloud Architecture',
        resilience: 'Operational Resilience & Modernization',
      },
    },
    positioning: {
      eyebrow: 'ENTERPRISE PHILOSOPHY',
      headline: 'Technology must do more than work.',
      subheadline: 'It must perform. Protect. And scale.',
      body:
        'Modern organizations depend on deeply interwoven, mission-critical digital infrastructure. UPT Plus bridges the critical gap between high-level technology strategy and hands-on operational excellence — bringing architecture, deep integration, proactive cybersecurity, and continuous operational rigor into a unified lifecycle.',
    },
    common: {
      learnMore: 'Learn More',
      readMore: 'Read Article',
      viewAll: 'View All',
      downloadDoc: 'Download Capability PDF',
      back: 'Back',
      architecture: 'Architecture',
      challenge: 'The Challenge',
      solution: 'The Solution',
      outcome: 'Validated Outcome',
      technologies: 'Core Technologies',
      contactTeam: 'Connect With Our Architects',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      allRightsReserved: 'All rights reserved.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      solutions: 'الحلول التقنية',
      managedServices: 'الخدمات المدارة',
      industries: 'القطاعات',
      projects: 'المشاريع والدراسات',
      ecosystem: 'المنظومة التقنية',
      about: 'عن الشركة',
      capabilities: 'بيان القدرات',
      insights: 'المعرفة والرؤى',
      contact: 'تواصل معنا',
      talkToExpert: 'تحدث مع خبير تقني',
      exploreCapabilities: 'استكشف قدراتنا',
      viewProjects: 'استعراض المشاريع',
      requestProposal: 'طلب مقترح معماري',
    },
    hero: {
      badge: 'الأمن السيبراني المؤسسي والحوسبة السحابية',
      title: 'أمان. توسع. أداء.',
      subtitle: 'بنية تحتية تكنولوجية مصممة للمستقبل.',
      description:
        'تساعد شركة UPT Plus المؤسسات الكبرى في بناء وتأمين وتحديث وتشغيل البيئات الرقمية التي تقود الأعمال الحديثة — من منصات الأمن السيبراني والسحابة إلى البنية التحتية والتطبيقات المؤسسية.',
      stats: {
        zeroTrust: 'هندسة أمان انعدام الثقة (Zero Trust)',
        cloudScalable: 'بنية سحابية موزعة وقابلة للتوسع',
        resilience: 'مرونة تشغيلية وتحديث شامل للأنظمة',
      },
    },
    positioning: {
      eyebrow: 'فلسفة المؤسسة',
      headline: 'التقنية يجب أن تقدم أكثر من مجرد العمل.',
      subheadline: 'يجب أن تؤدي بكفاءة، تحمي بصرامة، وتتوسع بمرونة.',
      body:
        'تعتمد المؤسسات المعاصرة على بنى تحتية رقمية معقدة وحرجة. تسد UPT Plus الفجوة بين الاستراتيجية التقنية الرفيعة والتميز التشغيلي العملي — موحدة بين المعمارية الهندسية، التكامل العميق، الأمن الاستباقي، والانضباط التشغيلي المستمر في دورة حياة متكاملة.',
    },
    common: {
      learnMore: 'المزيد من التفاصيل',
      readMore: 'قراءة المقال',
      viewAll: 'عرض الكل',
      downloadDoc: 'تحميل بيان القدرات (PDF)',
      back: 'رجوع',
      architecture: 'الهندسة المعمارية',
      challenge: 'التحدي المؤسسي',
      solution: 'الحل المنفذ',
      outcome: 'النتائج المحققة',
      technologies: 'التقنيات الأساسية',
      contactTeam: 'تواصل مع كبار مهندسينا',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      allRightsReserved: 'جميع الحقوق محفوظة.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('upt_lang') as Language | null;
      if (saved === 'en' || saved === 'ar') return saved;
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('upt_lang', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language]);

  const isRTL = language === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL, dir }}>
      <div dir={dir} className={isRTL ? 'font-sans antialiased rtl' : 'font-sans antialiased ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback for SSR
    return {
      language: 'en' as Language,
      setLanguage: () => {},
      t: translations.en,
      isRTL: false,
      dir: 'ltr' as const,
    };
  }
  return context;
}
