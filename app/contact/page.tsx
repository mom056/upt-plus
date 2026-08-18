'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n';
import { BRAND_CONFIG } from '@/lib/constants';
import {
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  HelpCircle,
  AlertCircle,
  Building,
} from 'lucide-react';

export default function ContactPage() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    areaOfInterest: 'cybersecurity',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean;
    message: string;
    referenceId?: string;
  } | null>(null);

  const interestOptions = [
    { value: 'cybersecurity', label: 'Cybersecurity & Zero Trust Architecture', labelAr: 'الأمن السيبراني وبنية انعدام الثقة' },
    { value: 'cloud', label: 'Cloud Architecture & Multi-Zone Migration', labelAr: 'الحوسبة السحابية والترحيل السحابي' },
    { value: 'infrastructure', label: 'Digital Infrastructure & Datacenter Fabrics', labelAr: 'البنية التحتية ومراكز البيانات' },
    { value: 'applications', label: 'Application Modernization & Microservices', labelAr: 'تحديث التطبيقات والخدمات المصغرة' },
    { value: 'managed-services', label: 'Managed Technology Services & Operations', labelAr: 'الخدمات التقنية المدارة والتشغيل' },
    { value: 'audit', label: 'Architecture Assessment & Security Audit', labelAr: 'تدقيق الأمان والتقييم المعماري' },
  ];

  const faqs = [
    {
      q: 'How does UPT Plus initiate new architecture engagements?',
      qAr: 'كيف تبدأ UPT PLUS المشاريع الهندسية الجديدة؟',
      a: 'We begin with an initial confidential technical discovery session under mutual NDA to review your current architecture, business goals, and compliance requirements, followed by a formal Architectural Assessment Report.',
      aAr: 'نبدأ بجلسة استكشاف تقني سرية تحت اتفاقية عدم إفصاح (NDA) لمراجعة المعمارية الحالية وأهداف العمل، تليها وثيقة تقييم معماري رسمية.',
    },
    {
      q: 'Does UPT Plus support hybrid and multi-vendor environments?',
      qAr: 'هل تدعم UPT PLUS البيئات الهجينة ومتعددة الموردين؟',
      a: 'Yes. We maintain a vendor-neutral engineering methodology, integrating on-premises datacenters, public cloud hyperscalers, and legacy core systems into a cohesive operational fabric.',
      aAr: 'نعم. نلتزم بمنهجية هندسية محايدة للموردين تدمج مراكز البيانات المحلية، السحب العامة، والأنظمة الأساسية في نسيج تشغيلي موحد.',
    },
    {
      q: 'What compliance frameworks do your architectures adhere to?',
      qAr: 'ما هي معايير الامتثال المعتمدة في تصاميمكم؟',
      a: 'Our solution designs align with NIST SP 800-207 Zero Trust Architecture, ISO/IEC 27001 security controls, CIS Benchmarks, and local regulatory mandates.',
      aAr: 'تتوافق تصاميمنا مع معايير NIST SP 800-207 (Zero Trust)، وضوابط ISO/IEC 27001، ومعايير CIS، والمتطلبات التنظيمية المحلية.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmissionStatus({
          success: true,
          message:
            language === 'ar'
              ? 'تم استلام طلبكم بنجاح. سيتواصل معكم كبير مهندسي الحلول خلال يوم عمل واحد.'
              : 'Your inquiry has been received. A solutions architect will reach out within 1 business day.',
          referenceId: data.referenceId,
        });
        setFormData({
          name: '',
          email: '',
          organization: '',
          phone: '',
          areaOfInterest: 'cybersecurity',
          message: '',
        });
      } else {
        setSubmissionStatus({
          success: false,
          message: data.error || (language === 'ar' ? 'حدث خطأ، يرجى المحاولة لاحقاً.' : 'Failed to submit inquiry.'),
        });
      }
    } catch (err) {
      setSubmissionStatus({
        success: false,
        message: language === 'ar' ? 'فشل الاتصال بالخادم. يرجى المحاولة لاحقاً.' : 'Network connection error. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: language === 'ar' ? 'التواصل والاستفسارات' : 'Contact & Inquiries' }]} />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-16">
          <Badge variant="orange" className="mb-4">
            {language === 'ar' ? 'التواصل المعماري والاستشاري' : 'ENTERPRISE ENGAGEMENT'}
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
            {language === 'ar' ? 'تحدث مع خبرائنا المعماريين.' : 'Connect with our enterprise architects.'}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {language === 'ar'
              ? 'سواء كنت تخطط لترحيل سحابي، تطبيق بنية انعدام الثقة، أو تشغيل بنية تحتية رقمية مدارة، فإن مهندسينا على استعداد لمناقشة أهدافك التقنية.'
              : 'Whether you are planning a multi-zone cloud migration, implementing Zero Trust security, or optimizing high-throughput infrastructure, our team is ready to evaluate your requirements.'}
          </p>
        </div>

        {/* 2-Column Layout: Contact Form & Info Aside */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {/* Form Container (2 Columns) */}
          <div className="lg:col-span-2 bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <h2 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-2">
              {language === 'ar' ? 'طلب استشارة معمارية' : 'Request Architecture Consultation'}
            </h2>
            <p className="text-sm text-slate-400 mb-8">
              {language === 'ar'
                ? 'يرجى تقديم تفاصيل مؤسستكم ومجال الاهتمام التقني لتعيين المهندس المختص.'
                : 'Provide your organization details and technical scope for optimal architect assignment.'}
            </p>

            {submissionStatus && (
              <div
                className={`p-5 rounded-xl mb-8 flex items-start gap-3 border ${
                  submissionStatus.success
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-red-500/10 border-red-500/30 text-red-300'
                }`}
              >
                {submissionStatus.success ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="text-sm font-semibold">{submissionStatus.message}</div>
                  {submissionStatus.referenceId && (
                    <div className="text-xs font-mono text-emerald-400/80 mt-1">
                      {language === 'ar' ? 'الرقم المرجعي: ' : 'Reference ID: '}
                      {submissionStatus.referenceId}
                    </div>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-2">
                    {language === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={language === 'ar' ? 'المهندس / الاسم' : 'Jane Doe'}
                    className="w-full px-4 py-3 rounded-lg bg-[#11182B] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 text-sm transition-colors"
                  />
                </div>

                {/* Business Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-2">
                    {language === 'ar' ? 'البريد الإلكتروني للعمل *' : 'Corporate Email *'}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#11182B] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-2">
                    {language === 'ar' ? 'اسم المؤسسة / الهيئة *' : 'Organization Name *'}
                  </label>
                  <input
                    id="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder={language === 'ar' ? 'اسم المؤسسة' : 'Acme Enterprise Inc.'}
                    className="w-full px-4 py-3 rounded-lg bg-[#11182B] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 text-sm transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-2">
                    {language === 'ar' ? 'رقم الهاتف' : 'Phone Number (Optional)'}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+966 ..."
                    className="w-full px-4 py-3 rounded-lg bg-[#11182B] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Area of Interest */}
              <div>
                <label htmlFor="areaOfInterest" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-2">
                  {language === 'ar' ? 'مجال الاهتمام المعماري *' : 'Primary Domain of Interest *'}
                </label>
                <select
                  id="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#11182B] border border-white/10 text-white focus:outline-none focus:border-orange-500 text-sm transition-colors"
                >
                  {interestOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#0C1222] text-white">
                      {language === 'ar' ? opt.labelAr : opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Scope & Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-2">
                  {language === 'ar' ? 'تفاصيل المتطلبات الهندسية *' : 'Project & Architectural Scope *'}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    language === 'ar'
                      ? 'يرجى تقديم ملخص عن البيئة التقنية الحالية والتحديات والجدول الزمني المستهدف...'
                      : 'Provide a brief summary of your current environment, scale, challenges, and target timeline...'
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#11182B] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 text-sm transition-colors"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  {language === 'ar' ? 'محمية بسرية تامة (NDA)' : 'CONFIDENTIAL & NDA-PROTECTED'}
                </span>
                <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting} withArrow>
                  {language === 'ar' ? 'إرسال الطلب المعماري' : 'Submit Architecture Request'}
                </Button>
              </div>
            </form>
          </div>

          {/* Aside Information */}
          <div className="space-y-6">
            {/* Direct Inquiries Card */}
            <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-7 shadow-xl">
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif] mb-4">
                {language === 'ar' ? 'قنوات التواصل المؤسسي' : 'Direct Enterprise Desks'}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">General &amp; Architecture:</div>
                    <a
                      href={`mailto:${BRAND_CONFIG.placeholders.contactEmail}`}
                      className="text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                    >
                      {BRAND_CONFIG.placeholders.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Security &amp; IR Desk:</div>
                    <a
                      href={`mailto:${BRAND_CONFIG.placeholders.securityEmail}`}
                      className="text-sm font-semibold text-white hover:text-purple-400 transition-colors"
                    >
                      {BRAND_CONFIG.placeholders.securityEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Standard response time: &lt; 24 business hours</span>
              </div>
            </div>

            {/* Engagement Protocol Card */}
            <div className="bg-[#11182B] border border-white/15 rounded-2xl p-7">
              <h3 className="text-base font-bold text-white mb-3">
                {language === 'ar' ? 'بروتوكول التعامل' : 'Engagement Assurance'}
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Mutual Non-Disclosure Agreement (NDA) executed before technical audits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct interaction with senior solutions and security architects.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12">
          <div className="text-xs font-mono uppercase text-orange-400 font-bold tracking-widest mb-2 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            <span>{language === 'ar' ? 'الأسئلة الشائعة' : 'ENGAGEMENT FAQ'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-8">
            {language === 'ar' ? 'إجابات حول منهجية العمل والشراكة' : 'Frequently Asked Questions'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-[#11182B] border border-white/10">
                <h3 className="text-sm font-bold text-white mb-2">
                  {language === 'ar' ? faq.qAr : faq.q}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'ar' ? faq.aAr : faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
