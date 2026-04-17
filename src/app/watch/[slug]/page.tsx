import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import StreamingPlayer from '@/components/StreamingPlayer'
import { allAnimes } from '@/data/animeData'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const anime = allAnimes.find(a => a.slug === params.slug)
  
  if (!anime) {
    return {
      title: 'Anime Not Found | AnimeStream',
      description: 'Anime not found. Explore our collection of premium anime streaming.',
    }
  }

  return {
    title: `${anime.title} - Watch Online Free HD | AnimeStream`,
    description: `${anime.title} full episodes streaming online free HD. ${anime.synopsis.substring(0, 160)}. Rating: ${anime.rating}/10. ${anime.genres.join(', ')}.`,
    keywords: [
      `watch ${anime.title.toLowerCase()} online`,
      `watch ${anime.title.toLowerCase()} free`,
      `${anime.title.toLowerCase()} sub indo`,
      `${anime.slug}`,
      ...anime.genres.map(g => `${g.toLowerCase()} anime`),
    ],
    openGraph: {
      title: `${anime.title} - Stream Online Free HD`,
      description: `${anime.synopsis.substring(0, 160)}`,
      type: 'video.episode',
      images: [
        {
          url: anime.poster,
          width: 1200,
          height: 675,
          alt: `${anime.title} poster`
        }
      ],
      video: {
        url: `https://animestream.vercel.app/watch/${anime.slug}`,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: `${anime.title} - Watch Now Free HD`,
      description: `${anime.title} latest episodes streaming now! ${anime.rating}⭐`,
      images: [anime.poster],
    },
  }
}

export async function generateStaticParams() {
  return allAnimes.map((anime) => ({
    slug: anime.slug,
  }))
}

export default function WatchPage({ params }: Props) {
  const anime = allAnimes.find(a => a.slug === params.slug)
  
  if (!anime) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-black">
      <StreamingPlayer anime={anime} />
    </div>
  )
}
