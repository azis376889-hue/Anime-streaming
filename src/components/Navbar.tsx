'use client';
import { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-accent to-blue-600 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            AnimeStream
          </span>
        </div>

        {/* Desktop Menu & Search */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search anime..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 pr-4 py-2 w-80 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
            />
          </div>
          <a href="#" className="hover:text-accent transition-colors">Home</a>
          <a href="#" className="hover:text-accent transition-colors">Trending</a>
          <a href="#" className="hover:text-accent transition-colors">New</a>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-white/10 rounded-xl transition-all duration-300">
            <User className="w-6 h-6" />
          </button>
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-xl transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search anime..."
                className="pl-11 pr-4 py-2 w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <a href="#" className="py-2 hover:text-accent">Home</a>
            <a href="#" className="py-2 hover:text-accent">Trending</a>
            <a href="#" className="py-2 hover:text-accent">New</a>
          </div>
        </div>
      )}
    </nav>
  );
}
