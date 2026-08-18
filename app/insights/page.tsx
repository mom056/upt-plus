import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { INSIGHTS_DATA } from '@/lib/data/insightsData';
import { BookOpen, Clock, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights & Technical Publications | Architecture & Whitepapers',
  description:
    'Engineering whitepapers and architectural perspectives on Zero Trust implementation, cloud cost governance, EVPN-VXLAN migration, and modern microservices.',
};

export default function InsightsHubPage() {
  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Insights & Publications' }]} />

        {/* Hero Header */}
        <div className="max-w-4xl mt-6 mb-16">
          <Badge variant="purple" className="mb-4">
            TECHNICAL PUBLICATIONS &amp; RESEARCH
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-['Space_Grotesk',sans-serif] leading-[1.08]">
            Architectural perspectives on enterprise technology.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            Practical engineering insights, whitepapers, and operational lessons from designing and defending mission-critical digital environments.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {INSIGHTS_DATA.map((article) => (
            <article
              key={article.id}
              className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 flex flex-col justify-between hover:border-orange-500/50 transition-all group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
                    {article.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readingTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors font-['Space_Grotesk',sans-serif]">
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                <div className="space-y-1.5 mb-6 pt-4 border-t border-white/10">
                  <div className="text-[11px] font-mono text-slate-400 uppercase font-bold">Key Architectural Takeaway:</div>
                  <div className="text-xs text-slate-300 italic">
                    &quot;{article.keyTakeaways[0]}&quot;
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  {article.date} • {article.authorRole}
                </span>

                <Button href={`/insights/${article.slug}`} variant="outline" size="sm" withArrow>
                  Read Whitepaper
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
