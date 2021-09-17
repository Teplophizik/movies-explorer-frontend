import "./AuthInput.css";

export default function AuthInput(props) {
  const { label, textError, ...attrs } = props;

  return (
    <label className="auth-input__label">
      {label}
      <input className="auth-input__input" {...attrs} />
      <p className="auth-input__error">{textError}</p>
    </label>
  );
}
