import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AnimeStream - Premium Anime Streaming Platform',
    template: '%s | AnimeStream'
  },
  description: 'Watch premium anime streaming in HD quality. Latest episodes of Attack on Titan, Jujutsu Kaisen, Demon Slayer and more. Free & Fast streaming.',
  keywords: ['anime streaming', 'watch anime online', 'free anime', 'anime HD', 'sub indo', 'anime terbaru'],
  authors: [{ name: 'AnimeStream Team' }],
  creator: 'AnimeStream',
  publisher: 'AnimeStream',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  openGraph: {
    title: 'AnimeStream - Premium Anime Streaming',
    description: 'Watch your favorite anime in premium quality. Trending now: Attack on Titan, Jujutsu Kaisen, Demon Slayer.',
    type: 'website',
    siteName: 'AnimeStream',
    locale: 'en_US',
    images: [
      {
        url: 'https://animestream.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AnimeStream - Premium Anime Streaming'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnimeStream - Premium Anime Streaming',
    description: 'Watch premium anime streaming in HD quality. Latest episodes available now!',
    images: ['https://animestream.vercel.app/og-twitter.jpg'],
    creator: '@animestream',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#3b82f6',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
