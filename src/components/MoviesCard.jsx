import { MoviesImgUrl } from "../utils/constants";
import { mainApi } from "../utils/MainApi";
import "./MoviesCard.css";

export default function MoviesCard(props) {
  const itsSaved = window.location.pathname === "/saved-movies";
  const { card, addToSavedMovies, removeFromSavedMovies, isSave } = props;
  const minutes = card.duration % 60;
  const hours = (card.duration - minutes) / 60;

  function toggleSaveMovie(e) {
    e.preventDefault();

    if (!isSave) {
      mainApi
        .saveMovie({
          movieId: card.id,
          nameRU: card.nameRU,
          nameEN: card.nameEN,
          thumbnail: MoviesImgUrl + card.image.formats.thumbnail.url,
          trailer: card.trailerLink,
          image: MoviesImgUrl + card.image.url,
          description: card.description,
          year: card.year,
          duration: card.duration,
          director: card.director,
          country: card.country,
        })
        .then((data) => {
          console.log(data);
          addToSavedMovies(data);
        });
    } else {
      deleteMovie();
    }
  }

  function deleteMovie(e = null) {
    if (e) e.preventDefault();

    removeFromSavedMovies(card);
  }

  return (
    <div className="card">
      <a
        className="card__link"
        href={itsSaved ? card.trailer : card.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={itsSaved ? card.image : MoviesImgUrl + card.image.url}
          alt={card.nameRU}
          className="card__img"
        />
        <div className="card__title-wrap">
          <p className="card__title">{card.nameRU}</p>
          <button
            className={
              "card__save" +
              (itsSaved
                ? " card__save_delete"
                : isSave
                ? " card__save_saved"
                : "")
            }
            onClick={itsSaved ? deleteMovie : toggleSaveMovie}
          ></button>
        </div>
        <p className="card__duration">
          {hours > 0 ? `${hours}ч` : ""}
          {`${minutes}м`}
        </p>
      </a>
    </div>
  );
}
