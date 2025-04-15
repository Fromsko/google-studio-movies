'use client';

import { MovieCard } from '@/components/movie-card';
import { getMovies, searchMovies } from '@/services/movie-data';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import {Toaster} from "@/components/ui/toaster";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadMovies = async () => {
      let movieList = [];
      movieList = await getMovies();
      setMovies(movieList);
    };

    loadMovies();
  }, [searchTerm]);

  return (
    <div>
      <Toaster />
      <h1 className="text-3xl font-semibold mb-4">Welcome to the Movie Streamer</h1>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
