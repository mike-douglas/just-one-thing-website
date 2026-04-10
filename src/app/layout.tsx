import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Just One Thing',
  description: "One task. Apps blocked until it's done. No AI cameras. No judgment.",
  metadataBase: new URL('https://getjustonething.app'),
  openGraph: {
    title: 'Just One Thing',
    description: "One task. Apps blocked until it's done.",
    url: 'https://getjustonething.app',
    siteName: 'Just One Thing',
    type: 'website',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Just One Thing',
    description: "One task. Apps blocked until it's done.",
    images: ['/twitter-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
