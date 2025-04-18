'use client';

import { MovieCard } from '@/components/movie-card';
import { getMovies, searchMovies } from '@/services/movie-data';
import { useEffect, useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSearchParams } from "next/navigation";

const MOVIES_PER_PAGE = 15;

// 创建一个独立的组件来处理搜索逻辑
function SearchMovies() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search') || '';
  const [movies, setMovies] = useState([]);
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
      <Toaster />
      <h1 className="text-3xl font-semibold mb-4">Welcome to the Movie Streamer</h1>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 transition-all duration-300">
        {displayedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 items-center">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            variant="outline"
            className="rounded-l-full flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <span className="text-sm text-muted-foreground py-2 border-y border-border px-4">{`Page ${currentPage} of ${totalPages}`}</span>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="outline"
            className="rounded-r-full flex items-center justify-center"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="text-center">Loading movies...</div>}>
      <SearchMovies />
    </Suspense>
  );
}