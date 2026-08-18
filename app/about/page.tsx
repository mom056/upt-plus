'use client';

import React from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionMarker from '@/components/ui/SectionMarker';
import Button from '@/components/ui/Button';
import UptLogo from '@/components/logo/UptLogo';
import { useLanguage } from '@/lib/i18n';
import {
  ShieldCheck,
  CloudCog,
  Server,
  Layers,
  CheckCircle2,
  Workflow,
  Cpu,
} from 'lucide-react';

export default function AboutPage() {
  const { language } = useLanguage();

  const focusAreas = [
    {
      num: '01',
      title: 'Cybersecurity',
      titleAr: 'الأمن السيبراني',
      desc: 'Zero Trust defense, identity-centric access, API security, and proactive posture hardening across cloud and enterprise environments.',
      descAr: 'بنيات دفاعية تعتمد على انعدام الثقة، الوصول المعتمد على الهوية، أمان واجهات البرمجة، والتحصين الأمني الشامل.',
      icon: ShieldCheck,
    },
    {
      num: '02',
      title: 'Cloud Computing',
      titleAr: 'الحوسبة السحابية',
      desc: 'Scalable multi-zone architectures, structured cloud migrations, hybrid connectivity, and high-availability operations.',
      descAr: 'تصميم بنيات سحابية متعددة المناطق، ترحيل الأنظمة المؤسسية، الربط الهجين، وضمان التوافر العالي للخدمات.',
      icon: CloudCog,
    },
    {
      num: '03',
      title: 'Digital Infrastructure',
      titleAr: 'البنية التحتية الرقمية',
      desc: 'Enterprise core campus networking, structured optical fiber backbones, and reliable connectivity underpinning cloud and security systems.',
      descAr: 'شبكات المؤسسات الأساسية، شبكات الألياف الضوئية الهيكلية، والاتصال الموثوق الداعم للأنظمة السحابية والأمنية.',
      icon: Server,
    },
  ];

  const deliveryPrinciples = [
    {
      title: 'Architecture First',
      titleAr: 'التصميم المعماري أولاً',
      desc: 'We design complete systems before implementation, ensuring every component has a verified operational purpose and resilience baseline.',
      descAr: 'نصمم الأنظمة المتكاملة بدقة قبل البدء بالتنفيذ، لضمان وضوح الهدف التشغيلي لكل مكون وتحقيق أعلى معايير الصمود.',
    },
    {
      title: 'Vendor-Neutral Engineering',
      titleAr: 'الحيادية التقنية التامة',
      desc: 'Technology choices are dictated exclusively by technical fit, security posture, and long-term client value — never by proprietary vendor quotas.',
      descAr: 'تستند خياراتنا التقنية حصرياً إلى الملاءمة الهندسية، الأمان، والجدوى المؤسسية بعيداً عن أي انحياز لمورد محدد.',
    },
    {
      title: 'Operational Continuity',
      titleAr: 'الانضباط واستمرارية الأعمال',
      desc: 'Every architecture is built to withstand real-world operational stress, maintain data integrity, and enable non-disruptive evolution.',
      descAr: 'تُبنى حلولنا لتحمل أقصى ضغوط التشغيل الواقعية، الحفاظ على سلامة البيانات، وتمكين التطوير المستمر دون تعطيل الأعمال.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24 bg-grid-architectural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: language === 'ar' ? 'عن الشركة' : 'About UPT Plus' }]} />

        {/* 1. Who We Are */}
        <div className="max-w-4xl mt-6 mb-16">
          <SectionMarker
            number="01"
            label={language === 'ar' ? 'المؤسسة والرؤية الهندسية' : 'WHO WE ARE'}
            variant="orange"
            className="mb-4"
          />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
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

        {/* Corporate Overview Card */}
        <div className="bg-[#0D1326] border border-white/15 rounded-md p-6 sm:p-10 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-mono uppercase text-orange-400 font-bold tracking-widest">
                {language === 'ar' ? 'منهجنا المؤسسي' : 'OUR CORPORATE STANCE'}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                {language === 'ar'
                  ? 'الربط بين الاستراتيجية التقنية والانضباط التشغيلي'
                  : 'Bridging Technology Strategy with Practical Engineering'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'تتطلب البيئات المؤسسية المعاصرة معمارية تقنية متماسكة تجمع بين أمان البنية السحابية، صلابة الشبكات الأساسية، وانعدام الثقة (Zero Trust). نركز على التصميم المعماري الدقيق لضمان عمل الأنظمة بكفاءة وحمايتها من التهديدات المتجددة.'
                  : 'Modern enterprise environments require coherent architectures that unite cloud platforms, resilient core networking, and Zero Trust security controls into a dependable operational foundation. We focus on engineering clarity and disciplined execution.'}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#11182B] p-6 rounded-md border border-white/10 flex flex-col items-center text-center justify-center">
              <UptLogo variant="vertical" size="md" withTagline={true} />
            </div>
          </div>
        </div>

        {/* 2. What We Focus On */}
        <div className="mb-16">
          <SectionMarker
            number="02"
            label={language === 'ar' ? 'مجالات التركيز' : 'WHAT WE FOCUS ON'}
            variant="purple"
            className="mb-4"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-6">
            {language === 'ar' ? 'ثلاثة مجالات تخصصية دقيقة' : 'Three Core Engineering Disciplines'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.num}
                  className="p-6 rounded-md bg-[#0D1326] border border-white/10 hover:border-orange-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-orange-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500">{area.num}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 font-['Space_Grotesk',sans-serif]">
                      {language === 'ar' ? area.titleAr : area.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {language === 'ar' ? area.descAr : area.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. How We Work & 4. Why UPT Plus */}
        <div className="bg-[#0D1326] border border-white/15 rounded-md p-6 sm:p-10 mb-16 shadow-xl">
          <SectionMarker
            number="03"
            label={language === 'ar' ? 'منهجية العمل' : 'HOW WE WORK'}
            variant="orange"
            className="mb-4"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-8">
            {language === 'ar' ? 'مبادئ الانضباط الهندسي' : 'Principles of Engineering Discipline'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryPrinciples.map((dp, idx) => (
              <div key={idx} className="p-5 rounded bg-[#11182B] border border-white/10">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'ar' ? dp.titleAr : dp.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6 rtl:pr-6 rtl:pl-0">
                  {language === 'ar' ? dp.descAr : dp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. CTA */}
        <div className="text-center bg-[#0D1326] border border-white/15 rounded-md p-8 sm:p-12 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-3">
            {language === 'ar' ? 'تحدث مع مهندسينا المعماريين' : 'Connect with Our Architecture Team'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-xl mx-auto">
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

