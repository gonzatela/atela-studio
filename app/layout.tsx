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
  title: 'Atela Studio | Diseno Web Exclusivo & Creacion Digital',
  description: 'Estudio de diseno web profesional de forma rapida y a medida por Gonzalo Atela.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  authors: [{ name: 'Gonzalo Atela' }],
  openGraph: {
    title: 'Atela Studio | Diseno Web Exclusivo & Creacion Digital',
    description: 'Estudio de diseno web profesional de forma rapida y a medida por Gonzalo Atela.',
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
      <body className="custom-scrollbar bg-[#ededed] text-[#1c1c1c] antialiased selection:bg-[#073bff]/20 selection:text-[#1c1c1c]">
        {children}
      </body>
    </html>
  );
}
