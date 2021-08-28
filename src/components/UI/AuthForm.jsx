import Logo from "./Logo";
import "./AuthForm.css";

export default function AuthForm(props) {
  return (
    <form className="auth-form">
      <Logo />
      <p className="auth-form__header">{props.header}</p>
      {props.children}
    </form>
  );
}
