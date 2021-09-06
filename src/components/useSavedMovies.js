import { useState } from "react";

import { mainApi } from "../utils/MainApi";

import { MOVIES_IMG_URL } from "../utils/constants";

export default function () {
  const [savedMovies, setSavedMovies] = useState([]);

  const saveMovie = (card) => {
    return mainApi
      .saveMovie({
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        thumbnail: MOVIES_IMG_URL + card.image.formats.thumbnail.url,
        trailer: card.trailerLink,
        image: MOVIES_IMG_URL + card.image.url,
        description: card.description,
        year: card.year,
        duration: card.duration,
        director: card.director,
        country: card.country,
      })
      .then((data) => {
        let newData = [data];
        if (localStorage.getItem("savedMovies")) {
          const oldData = JSON.parse(localStorage.getItem("savedMovies"));
          oldData.push(data);
          newData = JSON.stringify(oldData);
        }
        localStorage.setItem("savedMovies", newData);
        setSavedMovies(newData);
      });
  };

  const deleteMovie = (remove) => {
    let id = "";
    if (remove.movieId) {
      id = remove._id;
    } else {
      const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
      savedMovies.forEach((movie) => {
        if (movie.movieId === remove.id) {
          id = movie._id;
        }
      });
    }
    return mainApi.deleteMovie(id).then(() => {
      const prevValue = JSON.parse(localStorage.getItem("savedMovies"));
      const currentValue = prevValue.filter((movie) => {
        if (movie._id !== id) return movie;
      });
      localStorage.setItem("savedMovies", JSON.stringify(currentValue));
      setSavedMovies(currentValue);
    });
  };

  return {
    saveMovie,
    deleteMovie,
    savedMovies,
    setSavedMovies,
  };
}
