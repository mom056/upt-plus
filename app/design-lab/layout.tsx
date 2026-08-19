import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UPT Plus — Signature Design Prototype (Gate 1)',
  description: 'Isolated experimental design prototype for UPT Plus visual identity.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
