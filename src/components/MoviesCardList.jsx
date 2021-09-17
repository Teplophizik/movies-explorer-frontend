import MoviesCard from "./MoviesCard";
import "./MoviesCardList.css";

export default function MoviesCardList(props) {
  const cards = props.cards;
  const { saveMovie, deleteMovie, setError } = props;

  function checkSaved(id) {
    let res = false;
    if (localStorage.getItem("savedMovies")) {
      const savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
      savedMovies.map((movie) => {
        if (movie.movieId === id) {
          res = true;
        }
      });
    }
    return res;
  }

  return (
    <div className="movies-cardlist">
      {cards.map((card) => (
        <MoviesCard
          key={card.id || card._id}
          card={card}
          saveMovie={saveMovie}
          deleteMovie={deleteMovie}
          setError={setError}
          isSaved={props.cards && checkSaved(card.id)}
        />
      ))}
    </div>
  );
}
