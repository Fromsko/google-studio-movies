'use server';

/**
 * @fileOverview Generates movie recommendations based on a given movie title.
 *
 * - generateMovieRecommendations - A function that generates movie recommendations.
 * - GenerateMovieRecommendationsInput - The input type for the generateMovieRecommendations function.
 * - GenerateMovieRecommendationsOutput - The return type for the generateMovieRecommendations function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {Movie, getMovies} from '@/services/movie-data';

const GenerateMovieRecommendationsInputSchema = z.object({
  movieId: z.string().describe('The ID of the movie to base recommendations on.'),
  numberOfRecommendations: z.number().describe('The number of recommendations to generate.').default(3),
});
export type GenerateMovieRecommendationsInput = z.infer<typeof GenerateMovieRecommendationsInputSchema>;

const GenerateMovieRecommendationsOutputSchema = z.array(z.string()).describe('An array of recommended movie IDs.');
export type GenerateMovieRecommendationsOutput = z.infer<typeof GenerateMovieRecommendationsOutputSchema>;

export async function generateMovieRecommendations(input: GenerateMovieRecommendationsInput): Promise<GenerateMovieRecommendationsOutput> {
  return generateMovieRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMovieRecommendationsPrompt',
  input: {
    schema: z.object({
      movieId: z.string().describe('The ID of the movie to base recommendations on.'),
      numberOfRecommendations: z.number().describe('The number of recommendations to generate.'),
      movieTitle: z.string().describe('The title of the movie.'),
      movieDescription: z.string().describe('The description of the movie.'),
      movieGenre: z.string().describe('The genre of the movie.'),
    }),
  },
  output: {
    schema: z.array(z.string()).describe('An array of recommended movie titles.'),
  },
  prompt: `Based on the movie "{{movieTitle}}", which is a {{movieGenre}} movie with the following description: "{{movieDescription}}", recommend {{numberOfRecommendations}} other movies that the user might enjoy. Just return the titles of the movies, separated by commas.
`,
});

const generateMovieRecommendationsFlow = ai.defineFlow<
  typeof GenerateMovieRecommendationsInputSchema,
  typeof GenerateMovieRecommendationsOutputSchema
>(
  {
    name: 'generateMovieRecommendationsFlow',
    inputSchema: GenerateMovieRecommendationsInputSchema,
    outputSchema: GenerateMovieRecommendationsOutputSchema,
  },
  async input => {
    const movie = await getMovies().then(movies => movies.find(m => m.id === input.movieId));

    if (!movie) {
      throw new Error(`Movie with id ${input.movieId} not found`);
    }

    const {output} = await prompt({
      movieId: input.movieId,
      numberOfRecommendations: input.numberOfRecommendations,
      movieTitle: movie.title,
      movieDescription: movie.description,
      movieGenre: movie.genre,
    });

    // Get all the movies
    const allMovies = await getMovies();

    // Extract movie titles from the LLM output and find the corresponding movie IDs
    const recommendedMovieTitles = output!;

    //console.log("Recommended movie titles: " + recommendedMovieTitles);

    const recommendedMovieIds: string[] = [];
    const regex = /(?:^|,\s*)([\w\s']+)/g;
    let match;

    while ((match = regex.exec(recommendedMovieTitles)) !== null) {
      const title = match[1].trim();

      const foundMovie = allMovies.find(m => m.title === title);

      if (foundMovie) {
        recommendedMovieIds.push(foundMovie.id);
      }
    }

    return recommendedMovieIds;
  }
);

