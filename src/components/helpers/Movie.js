import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({
  imgLink,
  id,
  handleRentedMovies,
  sign,
  setMovieId,
  title,
}) => (
  <>
    <Link to={`/movies/:${id}`} key={id}>
      <img
        className="movie"
        onClick={() => setMovieId(id)}
        src={`https://www.themoviedb.org/t/p/w1280${imgLink}`}
        alt={"poster"}
        id={id}
      />
    </Link>
    <button onClick={() => handleRentedMovies({id, title})}>{sign}</button>
    </>
);

export default Movie;
