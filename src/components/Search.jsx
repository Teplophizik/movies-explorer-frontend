import Checkbox from "./UI/Checkbox";

import "./Search.css";

export default function Search(props) {
  const { searchString, setSearchString, filtered, setFiltered } = props;

  function search(e) {
    e.preventDefault();

    props.onSearch();
  }

  function handleInput(e) {
    setSearchString(e.target.value);
  }

  return (
    <form className="search" onSubmit={search}>
      <input
        type="text"
        className="search__input"
        placeholder="Фильм"
        value={searchString}
        onChange={handleInput}
        required
      />
      <button type="submit" className="search__button"></button>
      <Checkbox
        className="search__filter"
        isChecked={filtered}
        toggleCheck={setFiltered}
      />
    </form>
  );
}
