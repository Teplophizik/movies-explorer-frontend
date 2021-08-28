import { useState } from "react";
import "./MoviesCard.css";

export default function MoviesCard(props) {
  const { card } = props;

  const [saved, toggleSave] = useState(card.label);

  function saveMovie() {
    toggleSave(!saved);
  }

  return (
    <div className="card">
      <img src={card.img} alt={card.title} className="card__img" />
      <div className="card__title">
        {card.title}
        <button
          className={
            "card__save" +
            (props.saved
              ? " card__save_delete"
              : saved
              ? " card__save_saved"
              : "")
          }
          onClick={saveMovie}
        ></button>
      </div>
      <p className="card__duration">{card.duration}</p>
    </div>
  );
}
