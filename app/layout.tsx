import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Atela Studio | Digital Architecture & Haute Web Engineering',
  description: 'Boutique web design & engineering studio crafting high-converting, ultra-refined web applications and architectural platforms for companies.',
  keywords: ['Atela Studio', 'Web Design Agency', 'Next.js Development', 'Bespoke Websites', 'Real Estate Web Development', 'Luxury Digital Agency'],
  authors: [{ name: 'Atela Studio' }],
  openGraph: {
    title: 'Atela Studio | Digital Architecture & Haute Web Engineering',
    description: 'Boutique web design & engineering studio crafting high-converting, ultra-refined web applications.',
    url: 'https://atelastudio.com',
    siteName: 'Atela Studio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${syne.variable}`}>
      <body className="bg-[#09090b] text-zinc-100 antialiased selection:bg-indigo-500/40 selection:text-white custom-scrollbar">
        {children}
      </body>
    </html>
  );
}
