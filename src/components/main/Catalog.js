import "./Catalog.css";
import MoviesList from "../helpers/MoviesList";
import RentedMovies from "../helpers/RentedMovies";
import { useState } from "react";
import Modal from "../helpers/Modal";

const Catalog = ({
  users,
  currentUserIndex,
  setUsers,
  setMovieId,
  moviesData,
  modalState,
  setModalState,
  pokemonData,
  getGif,
}) => {
  let [searchOutput, setSearchOutput] = useState("");
  let [filteredMovie, setFilteredMovie] = useState(null);

  const addMovieToRented = ({id, title}) => {
    if (users[currentUserIndex].budget >= 5) {
      let newRentedMovie = moviesData.find((e) => e.id === id);
      let newUsers = [...users];
      if (!newUsers[currentUserIndex].rentedMovies.includes(newRentedMovie)) {
        newUsers[currentUserIndex].rentedMovies.push(newRentedMovie);
        setUsers(newUsers);
        decreaseBudget();
      } else {
        alert("You already rented it");
      }
    } else {
      alert("Unrent some movie, you are low on money");
    }
    setModalState(true);
    getGif(title);
  };

  const removeMovieFromRented = ({id}) => {
    let movieToRemoveIndex = users[currentUserIndex].rentedMovies.findIndex(
      (e) => e.id === id
    );
    let newUsers = { ...users };
    newUsers[currentUserIndex].rentedMovies.splice(movieToRemoveIndex, 1);
    increaseBudget();
  };

  const decreaseBudget = () => {
    let newUsers = [...users];
    newUsers[currentUserIndex].budget -= 5;
    setUsers(newUsers);
  };

  const increaseBudget = () => {
    let newUsers = [...users];
    newUsers[currentUserIndex].budget += 5;
    setUsers(newUsers);
  };

  const handleSearchOutput = (output) => {
    setSearchOutput(output);
    movieFinder();
  };

  const movieFinder = () => {
    let scan = moviesData.filter((e) =>
      e.original_title.toLowerCase().includes(searchOutput.toLowerCase())
    );
    console.log(filteredMovie);
    setFilteredMovie(scan);
    console.log(filteredMovie);
  };

  const turnModalStateOff = () => {
    setModalState(false);
  };
  
  const hasRentedMovies = !isNaN(currentUserIndex) && users[currentUserIndex]?.rentedMovies?.length > 0

  return (
    <>
      {modalState ? (
        <Modal
          turnModalStateOff={turnModalStateOff}
          pokemonData={pokemonData}

        />
      ) : (
        <></>
      )}
      <div id="search">
        <form>
          <input
            type="text"
            placeholder="Search"
            value={searchOutput}
            onChange={(event) => handleSearchOutput(event.target.value)}
          />
        </form>
        {currentUserIndex >= 0 ? (
          <p>
            User: {users[currentUserIndex].name}, Budget:{" "}
            {users[currentUserIndex].budget}$
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className="movie-list">
        {searchOutput && (
          <>
            <p>Search result:</p>
            <MoviesList
              handleRentedMovies={addMovieToRented}
              moviesData={filteredMovie}
              setMovieId={setMovieId}
            />
          </>
        )}
        {hasRentedMovies && (
          <>
            <p>Rented:</p>
            <RentedMovies
              handleRentedMovies={removeMovieFromRented}
              users={users}
              currentUserIndex={currentUserIndex}
              setMovieId={setMovieId}
            />
          </>
        )}
        <p>Catalog:</p>
        <MoviesList
          handleRentedMovies={addMovieToRented}
          moviesData={moviesData}
          setMovieId={setMovieId}
        />
      </div>
    </>
  );
};

export default Catalog;
