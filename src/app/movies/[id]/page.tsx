import {getMovie} from '@/services/movie-data';
 
 interface PageProps {
   params: {id: string};
@@ -8,29 +7,18 @@
   };
 }
 
-const MovieDetails: React.FC<MovieDetailsProps> = ({params}) => {
-  const [movie, setMovie] = useState(null);
-  const router = useRouter();
-
-  // Use React.use to access params.id
-  const movieId = React.use(Promise.resolve(params.id));
-
-  useEffect(() => {
-    const loadMovieDetails = async () => {
-      const movieDetails = await getMovie(movieId);
-      setMovie(movieDetails);
-    };
-
-    loadMovieDetails();
-  }, [movieId]);
+async function MovieDetails({params}: PageProps) {
+  const movieId = params.id;
+  const movie = await getMovie(movieId);
 
   if (!movie) {
     return <div>Loading...</div>;
   }
 
   const handleWatchMovie = () => {
-    router.push(`/movies/${movieId}/watch`);
+    //router.push(`/movies/${movieId}/watch`);
   };
+
 
   return (
     <div className="container mx-auto px-4 py-8">
@@ -109,4 +97,4 @@
   );
 };
 
-export default MovieDetails;
+export default MovieDetails;
