import AuthButton from "./AuthButton";
import "./AuthForm.css";

export default function AuthForm(props) {
  const { header, errorText, isValid, onSubmit, btnText, btnClass } = props;

  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <p className="auth-form__header">{header}</p>
      {props.children}
      <p className="auth-form__error">{errorText}</p>
      <AuthButton
        className={!isValid ? btnClass + " auth-button_disabled" : btnClass}
        text={btnText}
        disabled={!isValid}
      />
    </form>
  );
}
