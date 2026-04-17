'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Clock, Play } from 'lucide-react';
import { Anime } from '@/data/animeData';

interface AnimeGridProps {
  animes: Anime[];
  title: string;
}

export default function AnimeGrid({ animes, title }: AnimeGridProps) {
  return (
    <section className="py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {title}
          </h2>
          <Link
            href="/all"
            className="flex items-center space-x-2 text-lg font-medium text-accent hover:text-blue-400 transition-colors"
          >
            <span>View All</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {animes.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <Link href={`/watch/${anime.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-black/50 to-transparent aspect-[2/3] shadow-2xl hover:shadow-accent/25 transition-all duration-500 group-hover:scale-105">
        <Image
          src={anime.poster}
          alt={anime.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-20 h-20 bg-gradient-to-r from-accent to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transform transition-all duration-300">
            <Play className="w-8 h-8 ml-1 text-white" />
          </div>
        </div>
        
        {/* Info */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="font-bold text-xl mb-2 line-clamp-2 leading-tight">{anime.title}</h3>
          <div className="flex items-center space-x-4 text-sm mb-3">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{anime.rating}</span>
            </div>
            <div className="flex items-center
