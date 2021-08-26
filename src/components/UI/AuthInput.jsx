import "./AuthInput.css";

export default function AuthInput(props) {
  const { label, type, required } = props;

  return (
    <label className="auth-input__label">
      {label}
      <input className="auth-input__input" type={type} required={required} />
      <p className="auth-input__error"></p>
    </label>
  );
}
