import "./AuthButton.css";

export default function AuthButton(props) {
  const { className, text, ...attrs } = props;

  return (
    <button
      className={className ? "auth-button " + className : "auth-button"}
      type="submit"
      {...attrs}
    >
      {text}
    </button>
  );
}
