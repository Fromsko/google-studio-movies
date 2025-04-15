/**
 * Represents a movie, including its title, description, cast, and release date.
 */
export interface Movie {
  /**
   * The unique identifier of the movie.
   */
  id: string;
  /**
   * The title of the movie.
   */
  title: string;
  /**
   * A brief description of the movie.
   */
  description: string;
  /**
   * The list of actors in the movie.
   */
  cast: string[];
  /**
   * The release date of the movie.
   */
  releaseDate: string;
  /**
   * The URL of the movie stream.
   */
  streamUrl: string;
  /**
   * The URL of the movie poster.
   */
  imageUrl: string;

  /**
   * The genre of the movie.
   */
  genre: string;
}

/**
 * Asynchronously retrieves a list of movies.
 *
 * @returns A promise that resolves to an array of Movie objects.
 */
export async function getMovies(): Promise<Movie[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      id: '1',
      title: 'Oppenheimer',
      description: 'During World War II, Lt. Gen. Leslie Groves appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists work for years in a secret laboratory in Los Alamos, New Mexico, developing the first atomic bomb.',
      cast: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.'],
      releaseDate: '2023-07-21',
      streamUrl: 'https://example.com/oppenheimer',
      imageUrl: 'https://example.com/oppenheimer.jpg',
      genre: 'Drama',
    },
    {
      id: '2',
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
      releaseDate: '2010-07-16',
      streamUrl: 'https://example.com/inception',
      imageUrl: 'https://example.com/inception.jpg',
      genre: 'Sci-Fi',
    },
  ];
}

/**
 * Asynchronously retrieves a movie by its ID.
 *
 * @param id The ID of the movie to retrieve.
 * @returns A promise that resolves to a Movie object, or null if not found.
 */
export async function getMovie(id: string): Promise<Movie | null> {
  // TODO: Implement this by calling an API.

  const movies = await getMovies();
  return movies.find((movie) => movie.id === id) || null;
}

/**
 * Asynchronously searches for movies by title, actor, or genre.
 *
 * @param query The search query.
 * @returns A promise that resolves to an array of Movie objects that match the query.
 */
export async function searchMovies(query: string): Promise<Movie[]> {
  // TODO: Implement this by calling an API.

  const movies = await getMovies();
  const lowerCaseQuery = query.toLowerCase();
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(lowerCaseQuery) ||
    movie.cast.some((actor) => actor.toLowerCase().includes(lowerCaseQuery)) ||
    movie.genre.toLowerCase().includes(lowerCaseQuery)
  );
}
