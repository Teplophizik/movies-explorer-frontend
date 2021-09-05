import MoviesCard from "./MoviesCard";
import useSavedMovies from "../components/useSavedMovies";
import "./MoviesCardList.css";

export default function MoviesCardList(props) {
  const { savedMovies, addToSavedMovies, removeFromSavedMovies } =
    useSavedMovies();
  const cards = props.cards || savedMovies;

  function checkSaved(id) {
    let res = false;
    savedMovies.map((movie) => {
      if (movie.movieId === id) {
        res = true;
      }
    });
    return res;
  }

  return (
    <div className="movies-cardlist">
      {cards.map((card) => (
        <MoviesCard
          key={card.id || card._id}
          card={card}
          addToSavedMovies={addToSavedMovies}
          removeFromSavedMovies={removeFromSavedMovies}
          isSave={props.cards && checkSaved(card.id)}
        />
      ))}
    </div>
  );
}
