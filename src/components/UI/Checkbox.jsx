import "./Checkbox.css";

export default function Checkbox(props) {
  function toggle() {
    props.toggleCheck(!props.isChecked);
  }

  return (
    <div className={"checkbox " + props.className} onClick={toggle}>
      <input
        className="checkbox__input"
        type="checkbox"
        checked={props.isChecked}
        hidden
        readOnly
      />
      <div
        className={
          !props.isChecked
            ? "checkbox__switch"
            : "checkbox__switch checkbox__switch_checked"
        }
      ></div>
      <div className="checkbox__title">Короткометражки</div>
    </div>
  );
}
