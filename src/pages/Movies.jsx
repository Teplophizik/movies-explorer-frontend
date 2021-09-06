import { useEffect, useRef, useState } from "react";
import MoviesCardList from "../components/MoviesCardList";
import Search from "../components/Search";
import Preloader from "../components/UI/Preloader";
import MoviesListMessage from "../components/UI/MoviesListMessage";
import { search, calcPerRow } from "../utils/functions";
import { moviesApi } from "../utils/MoviesApi";
import { COUNT_CARD_MOBILE } from "../utils/constants";
import useSavedMovies from "../components/useSavedMovies";

import "./Movies.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searched, setSearched] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { saveMovie, deleteMovie } = useSavedMovies();
  const firstView = useRef(true);

  if (JSON.parse(localStorage.getItem("searched")) && firstView.current) {
    const { cachedSearchString, cachedFiltered } = JSON.parse(
      localStorage.getItem("searchedData")
    );
    setSearchString(cachedSearchString);
    setFiltered(cachedFiltered);
    search(
      JSON.parse(localStorage.getItem("movies")),
      cachedSearchString,
      cachedFiltered,
      setFilteredMovies,
      setIsLoading
    );
  }

  firstView.current = false;

  useEffect(() => {
    if (searched) {
      search(movies, searchString, filtered, setFilteredMovies, setIsLoading);
    }
  }, [filtered]);

  useEffect(() => {
    setSearched(false);
    localStorage.setItem("searched", "false");
  }, [searchString]);

  function onSearch() {
    setIsLoading(true);
    if (!localStorage.getItem("movies")) {
      moviesApi
        .getAll()
        .then((data) => {
          setMovies(data);
          localStorage.setItem("movies", JSON.stringify(data));
          search(data, searchString, filtered, setFilteredMovies, setIsLoading);
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      setMovies(JSON.parse(localStorage.getItem("movies")));
      search(
        JSON.parse(localStorage.getItem("movies")),
        searchString,
        filtered,
        setFilteredMovies,
        setIsLoading
      );
    }
    setSearched(true);
    localStorage.setItem("searched", "true");
    localStorage.setItem(
      "searchedData",
      JSON.stringify({
        cachedSearchString: searchString,
        cachedFiltered: filtered,
      })
    );
  }

  let countNextCards =
    window.innerWidth < 640 ? COUNT_CARD_MOBILE : calcPerRow();

  const [countVisible, setCountVisible] = useState(countNextCards);
  const [currentVisible, setCurrentVisible] = useState([]);

  function loadMore(e) {
    e.preventDefault();

    setCountVisible(countVisible + countNextCards);
  }

  useEffect(() => {
    setCurrentVisible([...filteredMovies.slice(0, countVisible)]);
  }, [filteredMovies, countVisible]);

  return (
    <>
      <Search
        searchString={searchString}
        setSearchString={setSearchString}
        onSearch={onSearch}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      {!isLoading && error && (
        <MoviesListMessage text={error} setError={setError} />
      )}
      {isLoading && <Preloader />}
      {!isLoading && filteredMovies.length > 0 && (
        <MoviesCardList
          cards={currentVisible}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          setError={setError}
        />
      )}
      {!isLoading && currentVisible.length < filteredMovies.length && (
        <button className="movies__btn" onClick={loadMore}>
          Ещё
        </button>
      )}
      {!isLoading && searched && filteredMovies.length === 0 && (
        <p className="movies__empty">Ничего не найдено</p>
      )}
    </>
  );
}
