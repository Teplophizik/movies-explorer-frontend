import AuthButton from "../components/UI/AuthButton";
import AuthForm from "../components/UI/AuthForm";
import AuthInput from "../components/UI/AuthInput";
import AuthLink from "../components/UI/AuthLink";

import "./Login.css";

export default function Login() {
  return (
    <AuthForm header="Рады видеть!">
      <AuthInput label="E-mail" type="email" required={true} />
      <AuthInput label="Пароль" type="password" required={true} />
      <AuthButton className="login__btn" text="Войти" />
      <AuthLink
        text="Ещё не зарегистрированы?"
        textLink="Регистрация"
        link="/signup"
      />
    </AuthForm>
  );
}
