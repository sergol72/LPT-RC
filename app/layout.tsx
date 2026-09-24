import type {Metadata} from 'next';
import './globals.css'; // Global styles
import '../styles.css'; // LPT-RC Academic Theme styles

export const metadata: Metadata = {
  title: 'LPT-RC | Language Personality Theory Research Collaborative',
  description: 'Founder-led research initiative seeking university collaboration to test a generative, language-grounded architecture of personality through open, cross-linguistic research.',
  openGraph: {
    title: 'LPT-RC | Language Personality Theory Research Collaborative',
    description: 'Founder-led research initiative seeking university collaboration to test a generative, language-grounded architecture of personality through open, cross-linguistic research.',
    url: 'https://lpt-research.github.io/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LPT-RC | Language Personality Theory Research Collaborative',
    description: 'Founder-led research initiative seeking university collaboration to test a generative, language-grounded architecture of personality through open, cross-linguistic research.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
