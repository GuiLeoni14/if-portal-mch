import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { RootProviders } from './providers'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Meninas Digitais - Inclusão e Tecnologia para Todas',
  description:
    'O projeto Meninas Digitais promove a inclusão de meninas e mulheres na área da tecnologia por meio de atividades educativas, palestras, oficinas e muito mais.',
  keywords: [
    'meninas digitais',
    'tecnologia para mulheres',
    'projeto de inclusão',
    'oficinas de tecnologia',
    'inclusão digital',
    'educação tecnológica',
    'computação para meninas',
  ],
  authors: [
    {
      name: 'Projeto Meninas Digitais',
      url: 'https://meninasdigitais.exemplo.com',
    },
  ],
  creator: 'Projeto Meninas Digitais',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Meninas Digitais',
    description:
      'Iniciativa que incentiva meninas e mulheres a explorarem a tecnologia e a computação de forma acessível e divertida.',
    url: 'https://meninasdigitais.exemplo.com',
    siteName: 'Meninas Digitais',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://meninasdigitais.exemplo.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Banner Meninas Digitais',
      },
    ],
  },
  metadataBase: new URL('https://meninasdigitais.exemplo.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RootProviders>
      <html lang="pt-BR" suppressHydrationWarning>
        <body className={`${inter.variable} antialiased flex flex-col`}>
          <Header />
          <main className="w-full pt-[77px]">{children}</main>
          <Footer />
        </body>
      </html>
    </RootProviders>
  )
}
