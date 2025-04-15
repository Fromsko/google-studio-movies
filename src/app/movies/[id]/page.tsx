'use client';

import {getMovie} from '@/services/movie-data';
import {generateMovieRecommendations} from '@/ai/flows/generate-movie-recommendations';
import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {useToast} from "@/hooks/use-toast"
import {MovieCard} from '@/components/movie-card';
import {AspectRatio} from "@/components/ui/aspect-ratio"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

interface MovieDetailsProps {
  params: {
    id: string;
  };
}

const MovieDetails: React.FC<MovieDetailsProps> = ({params}) => {
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const {toast} = useToast()

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
          const recommendedMovieIds = await generateMovieRecommendations({movieId: movie.id});
          setRecommendations(recommendedMovieIds);
        } catch (error) {
          toast({
            title: "Failed to generate recommendations",
            description: "There was an error generating movie recommendations. Please try again later.",
            variant: "destructive",
          })
          console.error("Error generating recommendations:", error);
        }
      }
    };

    loadRecommendations();
  }, [movie, toast]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold">{movie.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <AspectRatio ratio={500/300} className="w-full rounded-lg overflow-hidden shadow-md">
                <img
                  src={movie.imageUrl || 'https://picsum.photos/500/300'}
                  alt={movie.title}
                  className="object-cover w-full h-full"
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
            <div>
              <h2 className="text-xl font-semibold mb-2">Stream</h2>
              <Stream streamUrl={movie.streamUrl}/>
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommendations.map((movieId) => {
                    return (<Recommendation key={movieId} movieId={movieId}/>);
                  })}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface RecommendationProps {
  movieId: string;
}

const Recommendation: React.FC<RecommendationProps> = ({movieId}) => {
  const [recommendedMovie, setRecommendedMovie] = useState(null);

  useEffect(() => {
    const loadRecommendedMovie = async () => {
      const movieDetails = await getMovie(movieId);
      setRecommendedMovie(movieDetails);
    };

    loadRecommendedMovie();
  }, [movieId]);

  if (!recommendedMovie) {
    return null;
  }

  return (
    <MovieCard movie={recommendedMovie}></MovieCard>
  );
};

export default MovieDetails;

interface StreamProps {
  streamUrl: string;
}

const Stream: React.FC<StreamProps> = ({streamUrl}) => {
  return (
    <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden shadow-md">
      <iframe
        src={streamUrl}
        title="Movie Stream"
        className="w-full h-full"
        allowFullScreen
      />
    </AspectRatio>
  );
};
