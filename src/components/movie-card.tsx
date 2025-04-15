import { Movie } from "@/services/movie-data";
import Link from 'next/link';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link href={`/movies/${movie.id}`} className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={movie.imageUrl || 'https://picsum.photos/500/300'}
        alt={movie.title}
        className="w-full h-64 object-cover"
        width={500}
        height={300}
      />
      <div className="p-4 bg-secondary">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-muted-foreground">{movie.genre}</p>
      </div>
    </Link>
  );
};
