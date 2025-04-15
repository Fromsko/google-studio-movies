'use client';

import {getMovie} from '@/services/movie-data';
import {useEffect, useState} from 'react';
import {useToast} from "@/hooks/use-toast"
import {AspectRatio} from "@/components/ui/aspect-ratio"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Play} from "lucide-react";
import {Button} from "@/components/ui/button";

interface MovieDetailsProps {
  params: {
    id: string;
  };
}

const MovieDetails: React.FC<MovieDetailsProps> = ({params}) => {
  const [movie, setMovie] = useState(null);
  const {toast} = useToast()

  useEffect(() => {
    const loadMovieDetails = async () => {
      const movieDetails = await getMovie(params.id);
      setMovie(movieDetails);
    };

    loadMovieDetails();
  }, [params.id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-semibold">{movie.title}</CardTitle>
          <Badge variant="secondary">{movie.genre}</Badge>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <AspectRatio ratio={500 / 300} className="w-full rounded-lg overflow-hidden shadow-md">
                <img
                  src={movie.imageUrl || 'https://picsum.photos/500/300'}
                  alt={movie.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>

              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <CardDescription className="text-muted-foreground">{movie.description}</CardDescription>
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

            <div className="flex flex-col justify-start">
              <h2 className="text-xl font-semibold mb-2">Watch Now</h2>
              <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden shadow-md">
                <iframe
                  src={movie.streamUrl}
                  title="Movie Stream"
                  className="w-full h-full"
                  allowFullScreen
                />
              </AspectRatio>
              <div className="mt-4">
                <Button>
                  <Play className="mr-2 h-4 w-4"/>
                  Watch Movie
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieDetails;
