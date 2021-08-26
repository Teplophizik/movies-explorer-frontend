import "./MoviesCard.css";

export default function MoviesCard(props) {
  const { card } = props;

  return (
    <div className="card">
      <img src={card.img} alt={card.title} className="card__img" />
      <div className="card__title">
        {card.title}
        <div
          className={
            card.label === "false"
              ? "card__label"
              : "card__label card__label_light"
          }
        ></div>
      </div>
      <p className="card__duration">{card.duration}</p>
    </div>
  );
}
