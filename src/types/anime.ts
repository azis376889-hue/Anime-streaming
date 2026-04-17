export interface Anime {
  id: string;
  mal_id: number;
  title: string;
  slug: string;
  poster: string;
  banner: string;
  rating: number;
  year: number;
  episodes?: number;
  genres: string[];
  synopsis: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
}
