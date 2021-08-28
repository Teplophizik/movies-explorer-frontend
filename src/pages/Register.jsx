import AuthButton from "../components/UI/AuthButton";
import AuthForm from "../components/UI/AuthForm";
import AuthInput from "../components/UI/AuthInput";
import AuthLink from "../components/UI/AuthLink";

export default function Register() {
  return (
    <AuthForm header="Добро пожаловать!">
      <AuthInput label="Имя" type="text" required={true} />
      <AuthInput label="E-mail" type="email" required={true} />
      <AuthInput label="Пароль" type="password" required={true} />
      <AuthButton text="Зарегистрироваться" />
      <AuthLink text="Уже зарегистрированы?" textLink="Войти" link="/signin" />
    </AuthForm>
  );
}
