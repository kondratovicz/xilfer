import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/main/NavBar";
import { USERS_DATA, API_KEY } from "./config/data/constants";
import Landing from "./components/main/Landing";
import Catalog from "./components/main/Catalog";
import MovieDetails from "./components/helpers/MovieDetails";

function App() {
  let [users, setUsers] = useState(USERS_DATA);
  let [currentUserIndex, setCurrentUserIndex] = useState(null);
  let [movieId, setMovieId] = useState(null);
  let [moviesData, setMoviesData] = useState([]);
  let [pokemonData, setPokemonData] = useState([]);
  let [modalState, setModalState] = useState(false);

  console.log(users)
  console.log(currentUserIndex)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((response) => setMoviesData(response.results))
      .catch((err) => console.error(err));
  }, []);
  /*
  useEffect(()=>{
      fetch(`http://api.giphy.com/v1/gifs/search?q=pokemon&api_key=aS68Tr0I82xdvlr9KS7Z235P6hlCuE0i&limit=5`)
      .then(response => response.json())
      .then(response => setPokemonData(response.data))
      .catch(err => console.error(err));
    }, [])
*/
  const getGif = (searchStr) => {
    console.log(searchStr);
    const api_key = "aS68Tr0I82xdvlr9KS7Z235P6hlCuE0i";
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchStr}&api_key=${api_key}&limit=1`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => setPokemonData(response.data[0].images.downsized.url))
      .catch(() => setPokemonData(null))
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Landing users={users} setCurrentUserIndex={setCurrentUserIndex} />
          }
        />
        <Route
          path="/catalog"
          element={
            <Catalog
              {...{
                users,
                currentUserIndex,
                setUsers,
                setMovieId,
                moviesData,
                modalState,
                setModalState,
                pokemonData,
                getGif
              }}
            />
          }
        />
        <Route
          path="/movies/:id"
          element={<MovieDetails id={movieId} moviesData={moviesData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
