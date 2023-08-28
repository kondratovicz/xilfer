import "./MovieDetails.css";

const MovieDetails = ({id, moviesData}) => {
    let movie = moviesData.find(e => e.id === id)
    return(
        <>
        <h1 className="detailHeader">{movie.original_title} ({movie.release_date.slice(0, 4)})</h1>
        <img className="detailImg" src={`https://www.themoviedb.org/t/p/w1280/${movie.poster_path}`}
            alt="poster"/>
        <p className="detailOverview">{movie.overview}</p>
        </>
    )
}

export default MovieDetails;