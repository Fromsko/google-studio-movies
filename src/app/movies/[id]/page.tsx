'use client';

import {getMovie} from '@/services/movie-data';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PageProps {
  params: {id: string};
   };

async function MovieDetails({params}: PageProps) {
  const movieId = params.id;
  const movie = await getMovie(movieId);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
      <p className="text-gray-600 mb-2">{movie.genre}</p>
      <div className="flex items-center mb-4">
        <img
          src={movie.imageUrl || 'https://picsum.photos/500/300'}
          alt={movie.title}
          className="w-48 h-72 object-cover rounded-lg shadow-md mr-4"
          width={500}
          height={300}
        />
        <div>
          <p className="text-gray-700">{movie.description}</p>
          <p className="text-gray-700 mt-2">
            <strong>Cast:</strong> {movie.cast.join(', ')}
          </p>
          <p className="text-gray-700">
            <strong>Release Date:</strong> {movie.releaseDate}
          </p>
          <Button
            onClick={() => window.location.href = `/movies/${movieId}/watch`}
            className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
          >
             Watch Movie
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
