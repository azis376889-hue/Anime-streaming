import { Metadata } from 'next'
import HeroSlider from '@/components/HeroSlider'
import AnimeGrid from '@/components/AnimeGrid'
import { trendingAnimes, allAnimes } from '@/data/animeData'

export const metadata: Metadata = {
  title: 'AnimeStream - Watch Latest Anime Online Free HD',
  description: 'Stream latest anime episodes in HD quality. Attack on Titan Final Season, Jujutsu Kaisen S2, Demon Slayer now streaming. Fast & free anime streaming platform.',
  keywords: ['watch anime online free', 'anime streaming HD', 'latest anime 2024', 'Attack on Titan streaming', 'Jujutsu Kaisen watch online'],
  openGraph: {
    title: 'AnimeStream - Latest Anime Streaming HD Free',
    description: 'Watch trending anime like Attack on Titan Final Season, Jujutsu Kaisen S2, Demon Slayer in HD quality. Free streaming platform.',
    images: [
      {
        url: '/api/og?title=AnimeStream%20Home&description=Latest%20Anime%20Streaming',
        width: 1200,
        height: 630,
      }
    ],
    publishedTime: new Date().toISOString(),
    authors: ['AnimeStream'],
  },
  twitter: {
    title: 'AnimeStream - Latest Anime Streaming HD Free',
    description: 'Watch Attack on Titan, Jujutsu Kaisen, Demon Slayer now! 🚀',
  },
}

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AnimeGrid animes={trendingAnimes.slice(0, 8)} title="Trending Now" />
      <AnimeGrid animes={allAnimes.slice(0, 10)} title="Popular Anime" />
    </>
  )
}
