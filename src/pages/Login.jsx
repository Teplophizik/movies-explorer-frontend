import { useState, useContext } from "react";
import { useHistory } from "react-router";

import AuthForm from "../components/UI/AuthForm";
import AuthInput from "../components/UI/AuthInput";
import AuthLink from "../components/UI/AuthLink";
import useFormValidator from "../components/useFormValidator";
import { mainApi } from "../utils/MainApi";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import "./Login.css";

export default function Login() {
  const [errorText, setErrorText] = useState("");
  const history = useHistory();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormValidator();

  const { setCurrentUser, toggleLoggedIn } = useContext(CurrentUserContext);

  function submitHandler(e) {
    e.preventDefault();

    mainApi
      .login(values)
      .then((data) => {
        setCurrentUser({
          name: data.name,
          email: data.email,
        });
        toggleLoggedIn(true);
        setErrorText("");
        resetForm();
        history.push("/movies");
      })
      .catch((err) => {
        if (err.validation) {
          setErrorText(err.validation.body.message);
        } else {
          setErrorText(err.message);
        }
      });
  }

  return (
    <>
      <AuthForm
        header="Рады видеть!"
        btnText="Войти"
        btnClass="login__btn"
        errorText={errorText}
        isValid={isValid}
        onSubmit={submitHandler}
      >
        <AuthInput
          label="E-mail"
          name="email"
          type="email"
          value={values["email"] || ""}
          required={true}
          textError={errors["email"]}
          onChange={handleChange}
        />
        <AuthInput
          label="Пароль"
          name="password"
          type="password"
          value={values["password"] || ""}
          required={true}
          textError={errors["password"]}
          onChange={handleChange}
        />
      </AuthForm>
      <AuthLink
        text="Ещё не зарегистрированы?"
        textLink="Регистрация"
        link="/signup"
      />
    </>
  );
}
