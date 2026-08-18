import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/ui/CookieBanner';

export const metadata: Metadata = {
  metadataBase: new URL('https://upt-plus.com'),
  title: {
    default: 'UPT Plus | Cybersecurity & Cloud Computing',
    template: '%s | UPT Plus',
  },
  description:
    'UPT Plus provides enterprise cybersecurity, cloud computing, digital infrastructure, application modernization, and managed technology solutions.',
  keywords: [
    'Cybersecurity',
    'Cloud Computing',
    'Zero Trust Architecture',
    'Digital Infrastructure',
    'Application Modernization',
    'Managed Technology Services',
    'Enterprise Networking',
    'API Security',
    'DDoS Resilience',
    'UPT PLUS',
  ],
  authors: [{ name: 'UPT Plus Enterprise Solutions' }],
  creator: 'UPT Plus',
  publisher: 'UPT Plus',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://upt-plus.com',
    title: 'UPT Plus | Cybersecurity & Cloud Computing',
    description:
      'Enterprise cybersecurity, cloud computing, digital infrastructure, and application modernization.',
    siteName: 'UPT PLUS',
    images: [
      {
        url: '/logo-horizontal-dark.png',
        width: 1200,
        height: 630,
        alt: 'UPT PLUS - Cybersecurity & Cloud Computing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UPT Plus | Cybersecurity & Cloud Computing',
    description:
      'Enterprise cybersecurity, cloud computing, digital infrastructure, and application modernization.',
    images: ['/logo-horizontal-dark.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <body className="bg-[#080D1A] text-slate-100 antialiased selection:bg-orange-500 selection:text-white" suppressHydrationWarning>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <CookieBanner />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

