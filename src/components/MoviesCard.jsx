import { MOVIES_IMG_URL } from "../utils/constants";
import "./MoviesCard.css";

export default function MoviesCard(props) {
  const itsSaved = window.location.pathname === "/saved-movies";
  const { card, isSaved, saveMovie, deleteMovie, setError } = props;
  const minutes = card.duration % 60;
  const hours = (card.duration - minutes) / 60;

  function toggleSaveMovie(e) {
    e.preventDefault();

    if (!isSaved) {
      saveMovie(card).catch((err) => {
        setError(err.message);
      });
    } else {
      deleteMovie(card).catch((err) => {
        setError(err.message);
      });
    }
  }

  function removeMovie(e) {
    e.preventDefault();

    deleteMovie(card).catch((err) => {
      setError(err.message);
    });
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
          src={itsSaved ? card.image : MOVIES_IMG_URL + card.image.url}
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
                : isSaved
                ? " card__save_saved"
                : "")
            }
            onClick={itsSaved ? removeMovie : toggleSaveMovie}
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
