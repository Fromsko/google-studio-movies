'use client';

import { getMovie } from '@/services/movie-data';
import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { generateMovieRecommendations } from '@/ai/flows/generate-movie-recommendations';
import React from 'react';

interface Movie {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  genre: string;
  cast: string[];
  releaseDate: string;
}

interface PageProps {
  params: { id: string };
}

const MovieDetails: React.FC<PageProps> = ({ params }) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [recommendedMovies, setRecommendedMovies] = useState<string[]>([]);
  const [recommendedMoviesDetails, setRecommendedMoviesDetails] = useState<Movie[]>([]);
  const router = useRouter();
  const { id } = use(params as unknown as PageProps);

  useEffect(() => {
    const loadMovieDetails = async () => {
      const movieDetails = await getMovie(id);
      setMovie(movieDetails as Movie);

      if (movieDetails) {
        try {
          const recommendations = await generateMovieRecommendations({ movieId: id });
          setRecommendedMovies(recommendations);

          const recommendedMoviesDetails = await Promise.all(
            recommendations.map(movieId => getMovie(movieId))
          );
          setRecommendedMoviesDetails(recommendedMoviesDetails as Movie[]);
        } catch (error) {
          console.error("Failed to generate recommendations:", error);
          // Handle error appropriately, e.g., display a message to the user
        }
      }
    };

    loadMovieDetails();
  }, [id]);

  const handleWatchMovie = () => {
    router.push(`/movies/${id}/watch`);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-primary">{movie.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <AspectRatio ratio={2 / 3}>
            <img
              src={movie.imageUrl || 'https://picsum.photos/500/750'}
              alt={movie.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </AspectRatio>
        </div>
        <div>
          <p className="text-muted-foreground mb-4">{movie.description}</p>
          <p className="mb-2">
            <span className="font-semibold">Genre:</span> {movie.genre}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Cast:</span> {movie.cast.join(', ')}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Release Date:</span> {movie.releaseDate}
          </p>
          <Button onClick={handleWatchMovie} className="mt-4">
            Watch Movie
          </Button>
        </div>
      </div>

      {recommendedMoviesDetails.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recommendedMoviesDetails.map((recommendedMovie) => (
              <div key={recommendedMovie.id}>
                <div className="border p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">{recommendedMovie.title}</h3>
                  <p className="text-muted-foreground">{recommendedMovie.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
