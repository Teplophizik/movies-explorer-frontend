import { useState, useEffect } from "react";
import { moviesApi } from "../utils/MoviesApi";
import useSavedMovies from "./useSavedMovies";

export default function (isSaved) {
  const initialsearchString =
    !isSaved && localStorage.getItem("searchString")
      ? localStorage.getItem("searchString")
      : "";
  const initialFiltered =
    !isSaved && localStorage.getItem("filtered")
      ? JSON.parse(localStorage.getItem("filtered"))
      : false;

  const { savedMovies } = useSavedMovies();

  let initialMovies = [];

  if (!isSaved && localStorage.getItem("movies")) {
    initialMovies = JSON.parse(localStorage.getItem("movies"));
  }

  const [movies, setMovies] = useState(initialMovies);
  const [isLoading, toggleIsLoading] = useState(false);
  const [filtered, toggleFilter] = useState(initialFiltered);
  const [searchString, setSearchString] = useState(initialsearchString);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleInput = (e) => {
    setSearchString(e.target.value);
  };

  const search = (array) => {
    setFilteredMovies(
      array.filter((movie) => {
        const nameRU = movie.nameRU || "";
        const nameEN = movie.nameEN || "";
        const regex = new RegExp(searchString, "i");
        if (regex.test(nameRU) || regex.test(nameEN)) {
          if (filtered) {
            if (movie.duration <= 40) {
              return movie;
            }
          } else {
            return movie;
          }
        }
      })
    );
    toggleIsLoading(false);
  };

  useEffect(() => {
    if (!isSaved) {
      search(movies);
    } else {
      search(savedMovies);
    }
  }, [filtered]);

  const onSearch = (e) => {
    e.preventDefault();

    if (searchString) {
      localStorage.setItem("searchString", searchString);
      localStorage.setItem("filtered", filtered);
      toggleIsLoading(true);
      if (!isSaved) {
        if (localStorage.getItem("movies")) {
          moviesApi
            .getAll()
            .then((data) => {
              setMovies(data);
              localStorage.setItem("movies", JSON.stringify(data));
              search(data);
            })
            .catch((err) => console.log(err));
        } else {
          setMovies(JSON.parse(localStorage.getItem("movies")));
          search(JSON.parse(localStorage.getItem("movies")));
        }
      } else {
        search(JSON.parse(localStorage.getItem("savedMovies")));
      }
    } else {
      console.log("Введите строку для поиска");
    }
  };

  return {
    handleInput,
    searchString,
    onSearch,
    isLoading,
    toggleIsLoading,
    filtered,
    toggleFilter,
    filteredMovies,
  };
}
