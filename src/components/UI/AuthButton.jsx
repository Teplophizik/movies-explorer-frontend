import "./AuthButton.css";

export default function AuthButton(props) {
  return (
    <button
      className={
        props.className ? props.className + " auth-button" : "auth-button"
      }
    >
      {props.text}
    </button>
  );
}
