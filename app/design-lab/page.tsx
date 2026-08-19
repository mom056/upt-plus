'use client';

import React from 'react';
import DesignLabNav from '@/components/design-lab/DesignLabNav';
import SignatureHero from '@/components/design-lab/SignatureHero';
import ArchitectureFingerprints from '@/components/design-lab/ArchitectureFingerprints';
import SignatureEdgeSequence from '@/components/design-lab/SignatureEdgeSequence';
import SignalTermination from '@/components/design-lab/SignalTermination';

export default function DesignLabPage() {
  return (
    <div className="min-h-screen bg-[#080D1A] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      <DesignLabNav />
      <main className="flex-1 w-full">
        <SignatureHero />
        <ArchitectureFingerprints />
        <SignatureEdgeSequence />
        <SignalTermination />
      </main>
    </div>
  );
}
