export interface Anime {
  id: string;
  title: string;
  slug: string;
  poster: string;
  banner: string;
  rating: number;
  year: number;
  episodes: number;
  genres: string[];
  synopsis: string;
  status: 'Ongoing' | 'Completed';
}

export const trendingAnimes: Anime[] = [
  {
    id: '1',
    title: 'Attack on Titan Final Season',
    slug: 'attack-on-titan-final-season',
    poster: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=400&fit=crop',
    rating: 9.8,
    year: 2023,
    episodes: 28,
    genres: ['Action', 'Drama', 'Fantasy'],
    synopsis: 'The final season of the epic battle between humanity and Titans.',
    status: 'Completed'
  },
  {
    id: '2',
    title: 'Jujutsu Kaisen Season 2',
    slug: 'jujutsu-kaisen-s2',
    poster: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&h=400&fit=crop',
    rating: 9.2,
    year: 2023,
    episodes: 23,
    genres: ['Action', 'Supernatural'],
    synopsis: 'Yuji Itadori continues his battle against curses.',
    status: 'Completed'
  },
  {
    id: '3',
    title: 'Demon Slayer: Swordsmith Village',
    slug: 'demon-slayer-swordsmith',
    poster: 'https://images.unsplash.com/photo-1589485514698-4e3439d3fd42?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1589485514698-4e3439d3fd42?w=1200&h=400&fit=crop',
    rating: 8.9,
    year: 2023,
    episodes: 11,
    genres: ['Action', 'Demons'],
    synopsis: 'Tanjiro travels to the Swordsmith Village.',
    status: 'Completed'
  }
];

export const allAnimes: Anime[] = [
  ...trendingAnimes,
  {
    id: '4',
    title: 'One Piece',
    slug: 'one-piece',
    poster: 'https://images.unsplash.com/photo-1578631615869-0da9e25e7a8e?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1578631615869-0da9e25e7a8e?w=1200&h=400&fit=crop',
    rating: 9.0,
    year: 1999,
    episodes: 1080,
    genres: ['Adventure', 'Action'],
    synopsis: 'The journey of Monkey D. Luffy and his pirate crew.',
    status: 'Ongoing'
  },
  {
    id: '5',
    title: 'Naruto Shippuden',
    slug: 'naruto-shippuden',
    poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=400&fit=crop',
    rating: 8.7,
    year: 2007,
    episodes: 500,
    genres: ['Action', 'Adventure'],
    synopsis: 'Naruto\'s journey to become Hokage continues.',
    status: 'Completed'
  }
];
