import { useState, useEffect } from "react";

import { mainApi } from "../utils/MainApi";

export default function () {
  const [savedMovies, setSavedMovies] = useState([]);

  function addToSavedMovies(movie) {
    setSavedMovies([...savedMovies, movie]);
  }

  function removeFromSavedMovies(remove) {
    const id = remove.movieId || remove.id;

    setSavedMovies(
      savedMovies.filter((movie) => {
        if (movie.movieId === id) {
          mainApi.deleteMovie(movie._id).then(() => {});
        } else {
          return movie;
        }
      })
    );
  }

  useEffect(() => {
    if (
      !localStorage.getItem("savedMovies") ||
      localStorage.getItem("savedMovies") === "[]"
    ) {
      mainApi.getSavedMovies().then((data) => {
        setSavedMovies(data);
        localStorage.setItem("savedMovies", JSON.stringify(data));
      });
    } else {
      setSavedMovies(JSON.parse(localStorage.getItem("savedMovies")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

  return { savedMovies, addToSavedMovies, removeFromSavedMovies };
}
