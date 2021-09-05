import { useState, useContext } from "react";
import { useHistory } from "react-router";

import AuthForm from "../components/UI/AuthForm";
import AuthInput from "../components/UI/AuthInput";
import AuthLink from "../components/UI/AuthLink";
import useFormValidator from "../components/useFormValidator";
import { mainApi } from "../utils/MainApi";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Register() {
  const [errorText, setErrorText] = useState("");
  const history = useHistory();
  const { values, handleChange, errors, isValid, resetForm } =
    useFormValidator();

  const { setCurrentUser, toggleLoggedIn } = useContext(CurrentUserContext);

  function submitHandler(e) {
    e.preventDefault();

    mainApi
      .register(values)
      .then(() => {
        mainApi.login(values).then((data) => {
          setCurrentUser({
            name: data.name,
            email: data.email,
          });
          toggleLoggedIn(true);
          setErrorText("");
          resetForm();
          history.push("/movies");
        });
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
        header="Добро пожаловать!"
        btnText="Зарегистрироваться"
        errorText={errorText}
        isValid={isValid}
        onSubmit={submitHandler}
      >
        <AuthInput
          label="Имя"
          name="name"
          type="text"
          value={values["name"] || ""}
          minLength="2"
          maxLength="30"
          required={true}
          textError={errors["name"]}
          onChange={handleChange}
        />
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
      <AuthLink text="Уже зарегистрированы?" textLink="Войти" link="/signin" />
    </>
  );
}
