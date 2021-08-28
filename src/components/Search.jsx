import "./Search.css";

import Checkbox from "./UI/Checkbox";

export default function Search() {
  return (
    <form className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Фильм"
        required
      />
      <button type="submit" className="search__button"></button>
      <Checkbox className="search__filter" />
    </form>
  );
}
