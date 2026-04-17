// Fallback data jika API gagal
export const fallbackTrending = [
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
    status: 'Completed' as const
  }
];
