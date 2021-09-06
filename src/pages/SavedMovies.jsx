import { useEffect, useState } from "react";
import MoviesCardList from "../components/MoviesCardList";
import Search from "../components/Search";
import Preloader from "../components/UI/Preloader";
import MoviesListMessage from "../components/UI/MoviesListMessage";
import { search } from "../utils/functions";
import { mainApi } from "../utils/MainApi";
import useSavedMovies from "../components/useSavedMovies";

import "./SavedMovies.css";

export default function SavedMovies() {
  const [searchString, setSearchString] = useState("");
  const [searched, setSearched] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState("");
  const { saveMovie, deleteMovie, savedMovies, setSavedMovies } =
    useSavedMovies();

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((data) => {
        localStorage.setItem("savedMovies", JSON.stringify(data));
        setSavedMovies(data);
        setisLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  useEffect(() => {
    if (searched) {
      search(
        savedMovies,
        searchString,
        filtered,
        setFilteredMovies,
        setisLoading
      );
    }
  }, [filtered]);

  useEffect(() => {
    setSearched(false);
  }, [searchString]);

  function onSearch() {
    setisLoading(true);
    search(
      savedMovies,
      searchString,
      filtered,
      setFilteredMovies,
      setisLoading
    );
    setSearched(true);
  }

  return (
    <>
      <Search
        setSearchString={setSearchString}
        onSearch={onSearch}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      {!isLoading && error && (
        <MoviesListMessage text={error} setError={setError} />
      )}
      {isLoading && <Preloader />}
      {!isLoading && (
        <MoviesCardList
          cards={filteredMovies}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          setError={setError}
        />
      )}
      {!isLoading && searched && filteredMovies.length === 0 && (
        <p className="movies__empty">Ничего не найдено</p>
      )}
    </>
  );
}
