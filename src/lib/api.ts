import axios from 'axios';

const JIKAN_BASE_URL = 'https://api.jikan.moe/v4';
const REQUEST_DELAY = 400; // Jikan rate limit: 3 req/sec

export interface JikanAnime {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url: string;
      small_image_url: string;
    };
  };
  trailer: {
    url: string;
    embed_url: string;
  };
  title: string;
  title_english?: string;
  title_japanese?: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes?: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string | null;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
    };
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  premiered: string;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  related: Record<string, any>;
  producers: Array<{
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }>;
  licensors: any[];
  studios: Array<{
    mal_id: number;
    name: string;
  }>;
  genres: Array<{
    mal_id: number;
    type: string;
    name: string;
  }>;
}

export interface TopAnimeResponse {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
  data: JikanAnime[];
}

class JikanApi {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private cacheDuration = 5 * 60 * 1000; // 5 minutes

  async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private getCacheKey(url: string): string {
    return url;
  }

  private isCacheValid(cache: { data: any; timestamp: number }): boolean {
    return Date.now() - cache.timestamp < this.cacheDuration;
  }

  async get<T>(endpoint: string): Promise<T> {
    const cacheKey = this.getCacheKey(endpoint);
    const cached = this.cache.get(cacheKey);

    if (cached && this.isCacheValid(cached)) {
      return cached.data as T;
    }

    await this.delay(REQUEST_DELAY);
    
    try {
      const response = await axios.get(`${JIKAN_BASE_URL}${endpoint}`, {
        timeout: 10000,
      });

      const data = response.data;
      this.cache.set(cacheKey, { data, timestamp: Date.now() });
      
      return data as T;
    } catch (error) {
      console.error(`Jikan API Error: ${endpoint}`, error);
      // Fallback to cached data if available
      if (cached) return cached.data as T;
      throw error;
    }
  }

  async getTopAnime(page: number = 1): Promise<TopAnimeResponse> {
    return this.get<TopAnimeResponse>(`/top/anime?page=${page}&limit=20`);
  }

  async getAnimeDetails(mal_id: number): Promise<JikanAnime> {
    return this.get<JikanAnime>(`/anime/${mal_id}/full`);
  }

  async searchAnime(query: string, page: number = 1): Promise<TopAnimeResponse> {
    return this.get<TopAnimeResponse>(`/anime?q=${encodeURIComponent(query)}&page=${page}&limit=20`);
  }
}

export const jikanApi = new JikanApi();
