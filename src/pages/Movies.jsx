import { useEffect, useState } from "react";
import MoviesCardList from "../components/MoviesCardList";
import Search from "../components/Search";
import Preloader from "../components/UI/Preloader";
import useSearch from "../components/useSearch";
import {
  SIZE_CARD_DESKTOP,
  SIZE_CARD_MOBILE,
  SIZE_CARD_TABLET,
  SIZE_MARGIN_MOBILE,
  SIZE_MARGIN_TABLET,
  SIZE_MARGIN_DESKTOP,
  COUNT_CARD_MOBILE,
} from "../utils/constants";

import "./Movies.css";

export default function Movies() {
  const {
    handleInput,
    searchString,
    onSearch,
    isLoading,
    filteredMovies,
    filtered,
    toggleFilter,
  } = useSearch();

  function calcPerRow() {
    let cardSize = SIZE_CARD_MOBILE;
    let margin = SIZE_MARGIN_MOBILE;
    if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      cardSize = SIZE_CARD_TABLET;
      margin = SIZE_MARGIN_TABLET;
    } else if (window.innerWidth >= 1280) {
      cardSize = SIZE_CARD_DESKTOP;
      margin = SIZE_MARGIN_DESKTOP;
    }
    return Math.floor(
      (window.innerWidth - margin - ((window.innerWidth - margin) % cardSize)) /
        cardSize
    );
  }

  let countNextCards =
    window.innerWidth < 640 ? COUNT_CARD_MOBILE : calcPerRow();

  const [countVisible, setCountVisible] = useState(countNextCards);
  const [currentVisible, setCurrentVisible] = useState([]);

  function loadMore(e) {
    e.preventDefault();

    setCountVisible(countVisible + countNextCards);
  }

  useEffect(() => {
    setCurrentVisible([...filteredMovies.slice(0, countVisible)]);
  }, [filteredMovies, countVisible]);

  return (
    <>
      <Search
        onInputChange={handleInput}
        onSearch={onSearch}
        toggleCheck={toggleFilter}
        isChecked={filtered}
        value={searchString}
      />

      {isLoading && <Preloader />}
      {!isLoading && filteredMovies.length > 0 && (
        <MoviesCardList cards={currentVisible} />
      )}
      {!isLoading && currentVisible.length < filteredMovies.length && (
        <button className="movies__btn" onClick={loadMore}>
          Ещё
        </button>
      )}
    </>
  );
}
