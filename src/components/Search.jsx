import Checkbox from "./UI/Checkbox";

import "./Search.css";

export default function Search(props) {
  return (
    <form className="search" onSubmit={props.onSearch}>
      <input
        type="text"
        className="search__input"
        placeholder="Фильм"
        value={props.value}
        onChange={props.onInputChange}
        required
      />
      <button type="submit" className="search__button"></button>
      <Checkbox
        className="search__filter"
        isChecked={props.isChecked}
        toggleCheck={props.toggleCheck}
      />
    </form>
  );
}
