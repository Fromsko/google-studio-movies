'use client';

import {MovieCard} from '@/components/movie-card';
import {getMovies, searchMovies} from '@/services/movie-data';
import {useEffect, useState} from 'react';
import {Toaster} from "@/components/ui/toaster";
import {useSearchParams} from "next/navigation";
import {Button} from "@/components/ui/button";

const MOVIES_PER_PAGE = 15;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      let movieList = [];
      if (searchTerm) {
        movieList = await searchMovies(searchTerm);
      } else {
        movieList = await getMovies();
      }
      setMovies(movieList);
      setCurrentPage(1); // Reset to first page on new search
    };

    loadMovies();
  }, [searchTerm]);

  const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
  const endIndex = startIndex + MOVIES_PER_PAGE;
  const displayedMovies = movies.slice(startIndex, endIndex);
  const totalPages = Math.ceil(movies.length / MOVIES_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Toaster/>
      <h1 className="text-3xl font-semibold mb-4">Welcome to the Movie Streamer</h1>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 transition-all duration-300">
        {displayedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            variant="outline"
          >
            Previous
          </Button>
          <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="outline"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}

