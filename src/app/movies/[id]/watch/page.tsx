'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';

interface MovieWatchProps {
  params: {
    id: string;
  };
}

const MovieWatch: React.FC<MovieWatchProps> = ({ params }) => {
  // Replace with actual movie data fetching based on params.id
  const streamUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Example stream URL

  return (
    <div className="container mx-auto px-4 py-8">
      <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden shadow-md">
        <iframe
          src={streamUrl}
          title="Movie Stream"
          className="w-full h-full"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </AspectRatio>
    </div>
  );
};

export default MovieWatch;
