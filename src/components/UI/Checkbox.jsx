import React from "react";

import "./Checkbox.css";

export default function Checkbox(props) {
  const [isChecked, toggleCheck] = React.useState(false);

  function toggle() {
    toggleCheck(!isChecked);
  }

  return (
    <div className={"checkbox " + props.className} onClick={toggle}>
      <input
        className="checkbox__input"
        type="checkbox"
        checked={isChecked}
        hidden
        readOnly
      />
      <div
        className={
          !isChecked
            ? "checkbox__switch"
            : "checkbox__switch checkbox__switch_checked"
        }
      ></div>
      <div className="checkbox__title">Короткометражки</div>
    </div>
  );
}
