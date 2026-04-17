'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Play, ChevronLeft, ChevronRight, Star, MessageCircle, Clock } from 'lucide-react';
import { Anime } from '@/data/animeData';

interface StreamingPlayerProps {
  anime: Anime;
}

export default function StreamingPlayer({ anime }: StreamingPlayerProps) {
  const [currentEpisode, setCurrentEpisode] = useState(1);
  const [tab, setTab] = useState<'synopsis' | 'comments'>('synopsis');

  const episodes = Array.from({ length: anime.episodes }, (_, i) => i + 1);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-b-3xl">
        <Image
          src={anime.banner}
          alt={anime.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-hero flex items-end p-8 md:p-20">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-2xl">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-medium">{anime.rating}</span>
              </div>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-2xl">{anime.status}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{anime.title}</h1>
          </div>
        </div>
      </div>

      {/* Player & Episodes */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Video Player */}
        <div className="lg:col-span-3">
          <div className="glassmorphism rounded-3xl p-4 md:p-8 aspect-video relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-r from-accent to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Play className="w-12 h-12 ml-1 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Episode {currentEpisode}</h3>
                <p className="text-gray-400">Click play to start streaming</p>
              </div>
            </div>
          </div>

          {/* Episode Controls */}
          <div className="glassmorphism rounded-3xl p-6 mt-6 flex items-center justify-between">
            <button className="p-3 hover:bg-white/10 rounded-2xl transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="font-medium text-lg">Episode {currentEpisode} / {anime.episodes}</span>
            <button className="p-3 hover:bg-white/10 rounded-2xl transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Episodes List */}
        <div className="lg:col-span-1 space-y-6">
          {/* Episodes */}
          <div>
            <h3 className="font-bold text-xl mb-6 flex items-center space-x-2">
              <Clock className="w-6 h-6" />
              <span>Episodes ({anime.episodes})</span>
            </h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {episodes.map((ep) => (
                <button
                  key={ep}
                  onClick={() => setCurrentEpisode(ep)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-200 ${
                    currentEpisode === ep
                      ? 'bg-gradient-to-r from-accent to-blue-600 text-white shadow-lg'
                      : 'glassmorphism hover:bg-white/10'
                  }`}
                >
                  Episode {ep}
                </button>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div>
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setTab('synopsis')}
                className={`flex-1 p-3 rounded-2xl font-medium transition-all ${
                  tab === 'synopsis'
                    ? 'bg-gradient-to-r from-accent to-blue-600 text-white shadow-lg'
                    : 'glassmorphism hover:bg-white/10'
                }`}
              >
                Synopsis
              </button>
              <button
                onClick={() => setTab('comments')}
                className={`flex-1 p-3 rounded-2xl font-medium transition-all ${
                  tab === 'comments'
                    ? 'bg-gradient-to-r from-accent to-blue-600 text-white shadow-lg'
                    : 'glassmorphism hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>Comments</span>
                </div>
              </button>
            </div>

            {tab === 'synopsis' && (
              <div className="glassmorphism p-6 rounded-2xl">
                <p className="text-sm leading-relaxed">{anime.synopsis}</p>
              </div>
            )}

            {tab === 'comments' && (
              <div className="glassmorphism p-6 rounded-2xl space-y-4">
                <div className="flex space-x-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <span className="font-medium text-sm">JD</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-300">Amazing episode! Can't wait for next one 🔥</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-center text-sm text-gray-400">
                  Load more comments...
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
