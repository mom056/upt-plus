import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { INSIGHTS_DATA, getInsightBySlug } from '@/lib/data/insightsData';
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return INSIGHTS_DATA.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${article.title} | UPT PLUS Insights`,
    description: article.excerpt,
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#080D1A] text-slate-100 pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Insights', href: '/insights' },
            { label: article.title },
          ]}
        />

        {/* Article Header */}
        <header className="mt-6 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="orange">{article.category}</Badge>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTime}</span>
            </span>
            <span className="text-xs font-mono text-slate-400">• {article.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-['Space_Grotesk',sans-serif] leading-[1.12]">
            {article.title}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed border-l-2 border-orange-500 pl-4">
            {article.excerpt}
          </p>

          <div className="mt-4 text-xs font-mono text-slate-400">
            Authored by: <span className="text-white font-semibold">{article.authorRole}</span>
          </div>
        </header>

        {/* Article Body */}
        <div className="bg-[#0C1222] border border-white/15 rounded-2xl p-8 sm:p-12 shadow-2xl space-y-10 text-slate-300 leading-relaxed text-base">
          {article.content.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk',sans-serif]">
                {section.sectionHeading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed text-slate-300">
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* Key Architectural Takeaways */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <h3 className="text-xs font-mono uppercase text-orange-400 font-bold tracking-widest mb-4">
              ARCHITECTURAL TAKEAWAYS
            </h3>
            <ul className="space-y-3">
              {article.keyTakeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Consultation Callout */}
        <div className="mt-12 bg-[#11182B] border border-white/15 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-2">
            Implement These Architecture Principles
          </h3>
          <p className="text-sm text-slate-400 mb-6 max-w-xl mx-auto">
            Discuss your organization&apos;s infrastructure challenges with an enterprise architect from UPT Plus.
          </p>
          <Button href="/contact" variant="primary" size="md" withArrow>
            Consult With Our Architects
          </Button>
        </div>
      </div>
    </main>
  );
}
