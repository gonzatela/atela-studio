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
  title: 'Atela Studio | Diseño Web Exclusivo & Creación Digital',
  description: 'Estudio de diseño web profesional de forma rápida y a medida por Gonzalo Atela.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  authors: [{ name: 'Gonzalo Atela' }],
  openGraph: {
    title: 'Atela Studio | Diseño Web Exclusivo & Creación Digital',
    description: 'Estudio de diseño web profesional de forma rápida y a medida por Gonzalo Atela.',
    url: 'https://atelastudio.com',
    siteName: 'Atela Studio',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${syne.variable}`}>
      <body className="bg-[#faf8f5] text-[#1c1917] antialiased selection:bg-[#c5a059]/25 selection:text-[#1c1917] custom-scrollbar">
        {children}
      </body>
    </html>
  );
}
