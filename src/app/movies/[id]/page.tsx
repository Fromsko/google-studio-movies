'use client';

import { generateMovieRecommendations } from '@/ai/flows/generate-movie-recommendations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { getMovie } from '@/services/movie-data';
import { Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface MovieDetailsProps {
  params: {
    id: string;
  };
}

const MovieDetails: React.FC<MovieDetailsProps> = ({params}) => {
  const [movie, setMovie] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const loadMovieDetails = async () => {
      const movieDetails = await getMovie(params.id);
      setMovie(movieDetails);
    };

    loadMovieDetails();
  }, [params.id]);

  useEffect(() => {
    const loadRecommendations = async () => {
      if (movie) {
        try {
          const recommendations = await generateMovieRecommendations({
            movieId: movie.id,
            numberOfRecommendations: 3,
          });
          setRecommendedMovies(recommendations);
        } catch (error) {
          console.error('Failed to load recommendations:', error);
        }
      }
    };

    loadRecommendations();
  }, [movie]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const handleWatchMovie = () => {
    router.push(`/movies/${params.id}/watch`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full">
        <CardHeader className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 pb-4">
          <CardTitle className="text-2xl font-semibold">{movie.title}</CardTitle>
          <Badge variant="secondary">{movie.genre}</Badge>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Movie Details */}
            <div>
              <AspectRatio ratio={500 / 300} className="w-full rounded-lg overflow-hidden shadow-md">
                <img
                  src={movie.imageUrl || 'https://picsum.photos/500/300'}
                  alt={movie.title}
                  className="object-cover w-full h-full"
                  style={{objectFit: 'cover'}}
                />
              </AspectRatio>

              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-muted-foreground">{movie.description}</p>
              </div>

              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Cast</h2>
                <p className="text-muted-foreground">{movie.cast.join(', ')}</p>
              </div>

              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Release Date</h2>
                <p className="text-muted-foreground">{movie.releaseDate}</p>
              </div>
            </div>

            {/* Right Column - Streaming and Recommendations */}
            <div className="flex flex-col justify-start">
              <div className="mt-4">
                <Button onClick={handleWatchMovie}>
                  <Play className="mr-2 h-4 w-4"/>
                  Watch Movie
                </Button>
              </div>

              {/* Recommendations Section */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
                {recommendedMovies.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {recommendedMovies.map(movieId => {
                      return (
                        <li key={movieId} className="text-muted-foreground">
                          {movieId}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">No recommendations found.</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieDetails;
