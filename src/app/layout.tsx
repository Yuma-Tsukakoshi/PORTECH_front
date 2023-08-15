import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HeaderAction from '@/components/layouts/HeaderAction';
import FooterLinks from '@/components/layouts/FooterLink';

const inter = Inter({ subsets: ['latin'] })

const tabs = [
  {
    link: 'home',
    label: 'HOME',
  },
  {
    link: 'portfolio',
    label: 'Portfolio',
  },
  {
    link: 'tips',
    label: 'Tips',
  },
  {
    link: 'techfinder',
    label: 'TechFinder',
  },
];


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderAction {...{ tabs }} />
        {children}
        <FooterLinks />
      </body>
    </html>
  )
}
