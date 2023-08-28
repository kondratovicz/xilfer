import Movie from "./Movie";

const RentedMovies = ({
  users,
  currentUserIndex,
  handleRentedMovies,
  setMovieId,
}) => {
  return users[currentUserIndex].rentedMovies.map((e) => (
    <Movie
      key={e.id}
      imgLink={e.poster_path}
      id={e.id}
      handleRentedMovies={handleRentedMovies}
      sign={"-"}
      setMovieId={setMovieId}
      title={e.original_title}
    />
  ));
};

export default RentedMovies;
