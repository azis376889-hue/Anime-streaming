'use client';
import useSWR from 'swr';
import { jikanApi, TopAnimeResponse } from '@/lib/api';
import { Anime } from '@/types/anime';
import { fallbackTrending } from '@/data/fallbackData';

export function useTopAnime(page: number = 1) {
  const { data, error, isLoading } = useSWR<TopAnimeResponse, Error>(
    `top-anime-${page}`,
    () => jikanApi.getTopAnime(page),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      refreshInterval: 5 * 60 * 1000, // 5 minutes
    }
  );

  const mapToAnime = (jikanAnime: any): Anime[] => {
    return (jikanAnime?.data || []).map((item: any) => ({
      id: item.mal_id.toString(),
      mal_id: item.mal_id,
      title: item.title,
      slug: item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      poster: item.images.jpg.large_image_url || item.images.jpg.image_url,
      banner: item.images.jpg.large_image_url || item.images.jpg.image_url,
      rating: item.score || 0,
      year: new Date(item.aired.from).getFullYear() || new Date().getFullYear(),
      episodes: item.episodes,
      genres: item.genres.map((g: any) => g.name),
      synopsis: item.synopsis?.replace(/<br\s*\/?>/gi, ' ').replace(/<i>|<\/i>/g, '') || 'No synopsis available.',
      status: item.status === 'Currently Airing' ? 'Ongoing' : 
              item.status === 'Finished Airing' ? 'Completed' : 'Upcoming',
    }));
  };

  const animes: Anime[] = data ? mapToAnime(data) : fallbackTrending;

  return {
    animes,
    isLoading: isLoading || !data,
    error,
    totalPages: data?.pagination.last_visible_page || 1,
  };
}
