'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n';
import Button from './Button';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('upt_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('upt_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('upt_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#0C1222]/95 backdrop-blur-md border border-white/15 rounded-xl p-5 shadow-2xl text-slate-200">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="flex-1 text-xs">
            <h4 className="font-bold text-white text-sm mb-1">
              {language === 'ar' ? 'الخصوصية وضوابط الأمان' : 'Privacy & Security Governance'}
            </h4>
            <p className="text-slate-400 leading-relaxed">
              {language === 'ar'
                ? 'نستخدم ملفات تعريف الارتباط الأساسية لضمان عمل المنصة وأمان نقل البيانات. لا نستخدم متتبعات إعلانية خارجية.'
                : 'We utilize essential security and operational telemetry to safeguard communications and maintain platform integrity. No invasive marketing trackers are loaded.'}
            </p>

            <div className="flex items-center gap-2 mt-4">
              <Button size="sm" variant="primary" onClick={handleAccept}>
                {language === 'ar' ? 'قبول الأساسيات' : 'Accept Essential'}
              </Button>
              <Button size="sm" variant="secondary" onClick={handleDecline}>
                {language === 'ar' ? 'إغلاق' : 'Decline'}
              </Button>
            </div>
          </div>
          <button
            type="button"
            onClick={handleDecline}
            className="text-slate-400 hover:text-white p-1 rounded"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
