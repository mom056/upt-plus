'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionMarker from '@/components/ui/SectionMarker';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n';
import { BRAND_CONFIG } from '@/lib/constants';
import {
  Mail,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  HelpCircle,
} from 'lucide-react';

export default function ContactPage() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    { value: 'cybersecurity', label: 'Cybersecurity', labelAr: 'الأمن السيبراني' },
    { value: 'cloud', label: 'Cloud Computing', labelAr: 'الحوسبة السحابية' },
    { value: 'infrastructure', label: 'Digital Infrastructure', labelAr: 'البنية التحتية الرقمية' },
    { value: 'other', label: 'Other', labelAr: 'أخرى' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          organization: formData.organization,
          phone: formData.phone,
          areaOfInterest: formData.areaOfInterest,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmissionStatus({
          success: true,
          message:
            language === 'ar'
              ? 'تم استلام استفساركم بنجاح. سيتواصل معكم فريقنا المختص لمتابعة التفاصيل.'
              : 'Your inquiry has been received. Our team will review your message and reach out.',
          referenceId: data.referenceId,
        });
        setFormData({
          firstName: '',
          lastName: '',
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
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24 bg-grid-architectural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: language === 'ar' ? 'تواصل معنا' : 'Contact' }]} />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-16">
          <SectionMarker
            number="01"
            label={language === 'ar' ? 'التواصل والاستفسارات' : 'CONTACT & ENGAGEMENT'}
            variant="orange"
            className="mb-4"
          />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
            {language === 'ar' ? 'تواصل مع فريق UPT PLUS.' : 'Connect with UPT Plus.'}
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {language === 'ar'
              ? 'سواء كنت تخطط لترحيل سحابي، تعزيز أمان البنية التقنية، أو بناء بنية تحتية رقمية متينة، فريقنا مستعد لمناقشة أهدافك التقنية.'
              : 'Whether you are planning a cloud migration, evaluating your security architecture, or building resilient infrastructure, our team is ready to assist.'}
          </p>
        </div>

        {/* 2-Column Layout: Contact Form & Info Aside */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Form Container (8 Cols) */}
          <div className="lg:col-span-8 bg-[#0D1326] border border-white/15 rounded-md p-6 sm:p-10 shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-1">
              {language === 'ar' ? 'إرسال استفسار' : 'Submit an Inquiry'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              {language === 'ar'
                ? 'يرجى تزويدنا بالمعلومات الأساسية وسيتم التواصل معكم من قبل الفريق المختص.'
                : 'Please provide your contact information and brief project scope.'}
            </p>

            {submissionStatus && (
              <div
                className={`p-4 rounded mb-6 flex items-start gap-3 border ${
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
                  <div className="text-xs sm:text-sm font-semibold">{submissionStatus.message}</div>
                  {submissionStatus.referenceId && (
                    <div className="text-xs font-mono text-emerald-400/80 mt-1">
                      {language === 'ar' ? 'الرقم المرجعي: ' : 'Reference ID: '}
                      {submissionStatus.referenceId}
                    </div>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-1.5">
                    {language === 'ar' ? 'الاسم الأول *' : 'First Name *'}
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder={language === 'ar' ? 'محمد' : 'Jane'}
                    className="w-full px-3.5 py-2.5 rounded bg-[#11182B] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 text-xs sm:text-sm transition-colors"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-1.5">
                    {language === 'ar' ? 'اسم العائلة *' : 'Last Name *'}
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder={language === 'ar' ? 'العتيبي' : 'Doe'}
                    className="w-full px-3.5 py-2.5 rounded bg-[#11182B] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 text-xs sm:text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Business Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-1.5">
                    {language === 'ar' ? 'البريد الإلكتروني للعمل *' : 'Business Email *'}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded bg-[#11182B] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 text-xs sm:text-sm transition-colors"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-1.5">
                    {language === 'ar' ? 'اسم المؤسسة / الشركة *' : 'Company *'}
                  </label>
                  <input
                    id="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder={language === 'ar' ? 'اسم الشركة' : 'Company Name'}
                    className="w-full px-3.5 py-2.5 rounded bg-[#11182B] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 text-xs sm:text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-1.5">
                    {language === 'ar' ? 'رقم الهاتف (اختياري)' : 'Phone — Optional'}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+966 ..."
                    className="w-full px-3.5 py-2.5 rounded bg-[#11182B] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 text-xs sm:text-sm transition-colors"
                  />
                </div>

                {/* Area of Interest */}
                <div>
                  <label htmlFor="areaOfInterest" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-1.5">
                    {language === 'ar' ? 'مجال الاهتمام *' : 'Area of Interest *'}
                  </label>
                  <select
                    id="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#11182B] border border-white/10 text-white focus:outline-none focus:border-orange-500 text-xs sm:text-sm transition-colors"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#0D1326] text-white">
                        {language === 'ar' ? opt.labelAr : opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Scope & Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-300 font-bold mb-1.5">
                  {language === 'ar' ? 'الرسالة / متطلبات المشروع *' : 'Message *'}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    language === 'ar'
                      ? 'يرجى تقديم نبذة عن متطلباتكم التقنية وأهداف المشروع...'
                      : 'Please provide a summary of your requirements, current environment, and project scope...'
                  }
                  className="w-full px-3.5 py-2.5 rounded bg-[#11182B] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 text-xs sm:text-sm transition-colors"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="md" isLoading={isSubmitting} withArrow>
                  {language === 'ar' ? 'إرسال الطلب' : 'Submit Inquiry'}
                </Button>
              </div>
            </form>
          </div>

          {/* Aside Information (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Direct Inquiries Card */}
            <div className="bg-[#0D1326] border border-white/15 rounded-md p-6 shadow-xl">
              <h3 className="text-base font-bold text-white font-['Space_Grotesk',sans-serif] mb-4">
                {language === 'ar' ? 'قنوات التواصل المباشر' : 'Direct Channels'}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">General Inquiries:</div>
                    <a
                      href={`mailto:${BRAND_CONFIG.placeholders.contactEmail}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                    >
                      {BRAND_CONFIG.placeholders.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Security Inquiries:</div>
                    <a
                      href={`mailto:${BRAND_CONFIG.placeholders.securityEmail}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-purple-400 transition-colors"
                    >
                      {BRAND_CONFIG.placeholders.securityEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Engagement Approach Card */}
            <div className="bg-[#0D1326] border border-white/15 rounded-md p-6">
              <h3 className="text-sm font-bold text-white mb-2 font-['Space_Grotesk',sans-serif]">
                {language === 'ar' ? 'نهج التعامل' : 'Our Engagement Approach'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'يتم التعامل مع كافة الاستفسارات والبيانات الفنية باحترافية وسرية تامة من قبل المختصين لدينا.'
                  : 'All inquiries and shared technical specifications are handled with professional discretion and care.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

