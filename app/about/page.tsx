'use client';

import React from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionMarker from '@/components/ui/SectionMarker';
import Button from '@/components/ui/Button';
import UptLogo from '@/components/logo/UptLogo';
import { useLanguage } from '@/lib/i18n';

export default function AboutPage() {
  const { language } = useLanguage();

  const focusAreas = [
    {
      num: '01',
      title: 'Cybersecurity',
      titleAr: 'الأمن السيبراني',
      posture: 'BOUNDARY',
      postureAr: 'سياج الحماية',
      desc: 'Zero Trust defense, identity-centric access, API security, and proactive posture hardening across cloud and enterprise environments.',
      descAr: 'بنيات دفاعية تعتمد على انعدام الثقة، الوصول المعتمد على الهوية، أمان واجهات البرمجة، والتحصين الأمني الشامل.',
      isBoundary: true,
    },
    {
      num: '02',
      title: 'Cloud Computing',
      titleAr: 'الحوسبة السحابية',
      posture: 'DISTRIBUTION',
      postureAr: 'التوزيع المتوازن',
      desc: 'Scalable multi-zone architectures, structured cloud migrations, hybrid connectivity, and high-availability operations.',
      descAr: 'تصميم بنيات سحابية متعددة المناطق، ترحيل الأنظمة المؤسسية، الربط الهجين، وضمان التوافر العالي للخدمات.',
    },
    {
      num: '03',
      title: 'Digital Infrastructure',
      titleAr: 'البنية التحتية الرقمية',
      posture: 'BACKBONE',
      postureAr: 'العمود الفقري',
      desc: 'Enterprise core campus networking, structured optical fiber backbones, and reliable connectivity underpinning cloud and security systems.',
      descAr: 'شبكات المؤسسات الأساسية، شبكات الألياف الضوئية الهيكلية، والاتصال الموثوق الداعم للأنظمة السحابية والأمنية.',
    },
  ];

  const deliveryPrinciples = [
    {
      num: '01',
      title: 'Architecture First',
      titleAr: 'التصميم المعماري أولاً',
      desc: 'We design complete systems before implementation, ensuring every component has a verified operational purpose and resilience baseline.',
      descAr: 'نصمم الأنظمة المتكاملة بدقة قبل البدء بالتنفيذ، لضمان وضوح الهدف التشغيلي لكل مكون وتحقيق أعلى معايير الصمود.',
    },
    {
      num: '02',
      title: 'Vendor-Neutral Engineering',
      titleAr: 'الحيادية التقنية التامة',
      desc: 'Technology choices are dictated exclusively by technical fit, security posture, and long-term client value — never by proprietary vendor quotas.',
      descAr: 'تستند خياراتنا التقنية حصرياً إلى الملاءمة الهندسية، الأمان، والجدوى المؤسسية بعيداً عن أي انحياز لمورد محدد.',
    },
    {
      num: '03',
      title: 'Operational Continuity',
      titleAr: 'الانضباط واستمرارية الأعمال',
      desc: 'Every architecture is built to withstand real-world operational stress, maintain data integrity, and enable non-disruptive evolution.',
      descAr: 'تُبنى حلولنا لتحمل أقصى ضغوط التشغيل الواقعية، الحفاظ على سلامة البيانات، وتمكين التطوير المستمر دون تعطيل الأعمال.',
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
        <Breadcrumbs items={[{ label: language === 'ar' ? 'عن الشركة' : 'About UPT Plus' }]} />

        {/* 1. Who We Are: Corporate Editorial Manifesto */}
        <div className="max-w-4xl mt-6 mb-16 sm:mb-20">
          <SectionMarker
            number="01"
            label={language === 'ar' ? 'المؤسسة والرؤية الهندسية' : 'WHO WE ARE'}
            variant="orange"
            className="mb-4"
          />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08] uppercase">
            {language === 'ar'
              ? 'هندسة الركائز الرقمية التي تقود الأعمال الحديثة.'
              : 'Engineering the technology foundations behind modern business.'}
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {language === 'ar'
              ? 'UPT PLUS هي مؤسسة متخصصة في هندسة الأمن السيبراني، الحوسبة السحابية، والبنية التحتية الرقمية. نساعد المؤسسات والقطاعات الحيوية في بناء وتأمين وتشغيل بيئات تقنية صامدة وقابلة للتوسع.'
              : 'UPT PLUS is an enterprise technology organization specializing in Cybersecurity, Cloud Computing, and Digital Infrastructure. We help institutions design, secure, and operate mission-critical digital environments.'}
          </p>
        </div>

        {/* Corporate Editorial Stance Row (Open Asymmetric Layout) */}
        <div className="pt-10 pb-16 sm:pb-20 border-t border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-mono uppercase text-orange-400 font-bold tracking-widest">
              {language === 'ar' ? 'منهجنا المؤسسي' : 'OUR CORPORATE STANCE'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif]">
              {language === 'ar'
                ? 'الربط بين الاستراتيجية التقنية والانضباط التشغيلي'
                : 'Bridging Technology Strategy with Practical Engineering'}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              {language === 'ar'
                ? 'تتطلب البيئات المؤسسية المعاصرة معمارية تقنية متماسكة تجمع بين أمان البنية السحابية، صلابة الشبكات الأساسية، وانعدام الثقة (Zero Trust). نركز على التصميم المعماري الدقيق لضمان عمل الأنظمة بكفاءة وحمايتها من التهديدات المتجددة.'
                : 'Modern enterprise environments require coherent architectures that unite cloud platforms, resilient core networking, and Zero Trust security controls into a dependable operational foundation. We focus on engineering clarity and disciplined execution.'}
            </p>
          </div>

          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l rtl:lg:border-r rtl:lg:border-l-0 border-white/10 pt-6 lg:pt-0 lg:ps-8 rtl:lg:pe-8 flex flex-col items-center lg:items-start text-center lg:text-left rtl:lg:text-right justify-center">
            <UptLogo variant="vertical" size="md" withTagline={true} />
          </div>
        </div>

        {/* 2. What We Focus On: Open 3-Column Focus Areas */}
        <div className="py-16 sm:py-20 border-b border-white/10">
          <div className="max-w-3xl mb-12">
            <SectionMarker
              number="02"
              label={language === 'ar' ? 'مجالات التركيز' : 'WHAT WE FOCUS ON'}
              variant="navy"
              className="mb-4"
            />
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-['Space_Grotesk',sans-serif] uppercase tracking-tight">
              {language === 'ar' ? 'ثلاثة مجالات تخصصية دقيقة' : 'Three Core Engineering Disciplines'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area) => (
              <div
                key={area.num}
                className="flex flex-col justify-between pb-8 border-b md:border-b-0 md:border-r rtl:md:border-l rtl:md:border-r-0 border-white/10 md:pe-8 rtl:md:ps-8 last:border-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-orange-400">{area.num}</span>
                    <span
                      className={'text-[10px] font-mono ' +
                        (area.isBoundary ? 'text-purple-400' : 'text-slate-500')}
                    >
                      [{language === 'ar' ? area.postureAr : area.posture}]
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-['Space_Grotesk',sans-serif]">
                    {language === 'ar' ? area.titleAr : area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {language === 'ar' ? area.descAr : area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. How We Work: Open Engineering Principles */}
        <div className="py-16 sm:py-20 border-b border-white/10">
          <div className="max-w-3xl mb-12">
            <SectionMarker
              number="03"
              label={language === 'ar' ? 'منهجية العمل' : 'HOW WE WORK'}
              variant="orange"
              className="mb-4"
            />
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-['Space_Grotesk',sans-serif] uppercase tracking-tight">
              {language === 'ar' ? 'مبادئ الانضباط الهندسي' : 'Principles of Engineering Discipline'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryPrinciples.map((dp) => (
              <div
                key={dp.num}
                className="flex flex-col pb-8 border-b md:border-b-0 md:border-r rtl:md:border-l rtl:md:border-r-0 border-white/10 md:pe-8 rtl:md:ps-8 last:border-none"
              >
                <div className="font-mono text-xs font-bold text-slate-500 mb-2">
                  PRINCIPLE — {dp.num}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-['Space_Grotesk',sans-serif]">
                  {language === 'ar' ? dp.titleAr : dp.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {language === 'ar' ? dp.descAr : dp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. CTA: Quiet Signal Resolution */}
        <div className="pt-16 sm:pt-24 text-center max-w-2xl mx-auto">
          <div className="w-0.5 h-10 bg-[#FF7A00] mx-auto mb-4" />
          <h3 className="text-2xl sm:text-3xl font-black text-white font-['Space_Grotesk',sans-serif] uppercase mb-3">
            {language === 'ar' ? 'تحدث مع مهندسينا المعماريين' : 'Connect with Our Architecture Team'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            {language === 'ar'
              ? 'ناقش متطلباتك التقنية مع فريق UPT PLUS لبناء بيئة رقمية آمنة وصامدة.'
              : 'Discuss your technical scope and infrastructure goals with UPT Plus.'}
          </p>
          <Button href="/contact" variant="primary" size="md" withArrow>
            {language === 'ar' ? 'تواصل معنا' : 'Talk to an Expert'}
          </Button>
        </div>

      </div>
    </main>
  );
}
