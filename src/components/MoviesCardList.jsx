import MoviesCard from "./MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList(props) {
  const { cards } = props;

  return (
    <div className="movies-cardlist">
      {cards.map((card) => (
        <MoviesCard card={card} key={card.title} />
      ))}
    </div>
  );
}
