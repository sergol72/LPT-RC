import type {Metadata} from 'next';
import './globals.css'; // Global styles
import '../styles.css'; // LPT-RC Academic Theme styles

export const metadata: Metadata = {
  title: 'LPT-RC | Language Personality Theory Research Collaborative',
  description: 'The Language Personality Theory Research Collaborative is an independent international research network operationalising and testing a generative, language-grounded architecture of personality through open, cross-linguistic, and person-specific research.',
  openGraph: {
    title: 'LPT-RC | Language Personality Theory Research Collaborative',
    description: 'The Language Personality Theory Research Collaborative is an independent international research network operationalising and testing a generative, language-grounded architecture of personality through open, cross-linguistic, and person-specific research.',
    url: 'https://lpt-research.github.io/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LPT-RC | Language Personality Theory Research Collaborative',
    description: 'The Language Personality Theory Research Collaborative is an independent international research network operationalising and testing a generative, language-grounded architecture of personality through open, cross-linguistic, and person-specific research.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
