import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { ShieldAlert, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 flex items-center justify-center px-4 pt-20">
      <div className="max-w-md w-full bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-10 text-center shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mx-auto mb-6">
          <ShieldAlert className="w-7 h-7" />
        </div>

        <Badge variant="orange" className="mb-3">
          404 ERROR • RESOURCE NOT LOCATED
        </Badge>

        <h1 className="text-3xl font-black text-white font-['Space_Grotesk',sans-serif] mb-3">
          Route Not Found
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          The requested architectural specification, document, or route could not be found or has been relocated to an updated catalog.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" withArrow>
            Return to Overview
          </Button>
          <Button href="/solutions" variant="secondary" size="md">
            Explore Solutions
          </Button>
        </div>
      </div>
    </main>
  );
}
