import { useContext, useEffect } from "react";

import { mainApi } from "../utils/MainApi";
import useFormValidator from "../components/useFormValidator";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import "./Profile.css";

export default function Profile() {
  const { currentUser, setCurrentUser, isLoggedIn, toggleLoggedIn } =
    useContext(CurrentUserContext);

  const { values, setValues, handleChange, errors, isValid, resetForm } =
    useFormValidator();

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

  function exit() {
    mainApi
      .logout()
      .then(() => {
        toggleLoggedIn(!isLoggedIn);
        setCurrentUser();
        localStorage.clear();
      })
      .catch(console.log); ///////////////
  }

  function edit() {
    mainApi
      .changeUserInfo(values)
      .then((data) => {
        setCurrentUser(data);
        resetForm();
      })
      .catch(console.log); ///////////////
  }

  return (
    <form className="profile">
      <p className="profile__header">Привет, {currentUser.name}!</p>
      <label className="profile__label">
        Имя
        <input
          className="profile__input"
          name="name"
          type="text"
          minLength="2"
          maxLength="30"
          required
          value={values["name"] || ""}
          onChange={handleChange}
        />
      </label>
      <p className="profile__input-error">{errors.name}</p>
      <label className="profile__label">
        E-mail
        <input
          className="profile__input"
          name="email"
          type="email"
          required
          value={values["email"] || ""}
          onChange={handleChange}
        />
      </label>
      <p className="profile__input-error">{errors.email}</p>
      <button
        type="button"
        className={
          !isValid
            ? "profile__edit-btn profile__edit-btn_disabled"
            : "profile__edit-btn"
        }
        onClick={edit}
        disabled={!isValid}
      >
        Редактировать
      </button>
      <button type="button" className="profile__exit-btn" onClick={exit}>
        Выйти из аккаунта
      </button>
    </form>
  );
}
