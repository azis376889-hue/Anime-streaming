'use client';
import { useState, useEffect } from 'react';
import { Play, Star } from 'lucide-react';
import { trendingAnimes } from '@/data/animeData';

interface HeroSlide {
  anime: any;
  active: boolean;
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<HeroSlide[]>([]);

  useEffect(() => {
    const slideData = trendingAnimes.map((anime, index) => ({
      anime,
      active: index === 0
    }));
    setSlides(slideData);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trendingAnimes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map(({ anime, active }, index) => (
        <div
          key={anime.id}
          className={`absolute inset-0 transition-all duration-1000 transform ${
            active ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(10,10,10,0.4), rgba(10,10,10,0.8)), url(${anime.banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="gradient-hero h-full flex items-end pb-32 px-6 md:px-20">
            <div className="max-w-4xl space-y-8">
              <div className="inline-flex items-center space-x-2 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <span className="text-sm font-medium text-accent">TRENDING #1</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight">
                  {anime.title}
                </h1>
                <div className="flex items-center space-x-4 text-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    <span>{anime.rating}</span>
                  </div>
                  <span>{anime.year}</span>
                  <span>•</span>
                  <span>{anime.episodes} episodes</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <a
                  href={`/watch/${anime.slug}`}
                  className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-accent to-blue-600 rounded-2xl font-medium text-lg hover:from-blue-500 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-accent/25"
                >
                  <Play className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  <span>Watch Now</span>
                </a>
                <button className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
