import MoviesCardList from "../components/MoviesCardList";
import Search from "../components/Search";
import useSearch from "../components/useSearch";

export default function SavedMovies() {
  const {
    handleInput,
    searchString,
    onSearch,
    filteredMovies,
    filtered,
    toggleFilter,
  } = useSearch("saved");

  return (
    <>
      <Search
        onInputChange={handleInput}
        onSearch={onSearch}
        toggleCheck={toggleFilter}
        isChecked={filtered}
        value={searchString}
      />
      <MoviesCardList cards={filteredMovies} />
    </>
  );
}
