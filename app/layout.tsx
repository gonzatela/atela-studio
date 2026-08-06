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
  title: 'Atela Studio | Digital Architecture & Bespoke Web Engineering',
  description: 'Boutique web design & engineering studio crafting high-converting, clean, luxury web platforms for companies.',
  keywords: ['Atela Studio', 'Web Design Agency', 'Next.js Development', 'Bespoke Websites', 'Real Estate Web Development', 'Luxury Digital Agency'],
  authors: [{ name: 'Atela Studio' }],
  openGraph: {
    title: 'Atela Studio | Digital Architecture & Bespoke Web Engineering',
    description: 'Boutique web design & engineering studio crafting clean, high-converting luxury web platforms.',
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${syne.variable}`}>
      <body className="bg-[#faf8f5] text-[#1c1917] antialiased selection:bg-[#c5a059]/25 selection:text-[#1c1917] custom-scrollbar">
        {children}
      </body>
    </html>
  );
}
