import Movie from "./Movie";

const MoviesList = ({ handleRentedMovies, moviesData, setMovieId }) =>
  moviesData.map((movie) => (
    <Movie
      key={movie.id}
      imgLink={movie.poster_path}
      id={movie.id}
      handleRentedMovies={handleRentedMovies}
      setMovieId={setMovieId}
      sign={"+"}
      title={movie.original_title}
    />
  ));

export default MoviesList;
