import { useContext, useEffect, useState } from "react";

import InfoModal from "../components/UI/InfoModal";
import { mainApi } from "../utils/MainApi";
import useFormValidator from "../components/useFormValidator";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import "./Profile.css";

export default function Profile() {
  const { currentUser, setCurrentUser, isLoggedIn, toggleLoggedIn } =
    useContext(CurrentUserContext);

  const [infoMessage, setInfoMessage] = useState({});
  const [notChanged, toggleNotChanged] = useState(true);
  const { values, setValues, handleChange, errors, isValid, resetForm } =
    useFormValidator();

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (
      values["name"] === currentUser.name &&
      values["email"] === currentUser.email
    ) {
      toggleNotChanged(true);
    } else {
      toggleNotChanged(false);
    }
  }, [values]);

  function exit() {
    mainApi
      .logout()
      .then(() => {
        toggleLoggedIn(!isLoggedIn);
        setCurrentUser();
        localStorage.clear();
      })
      .catch((err) => {
        setInfoMessage({ status: "error", message: err.message });
      });
  }

  function edit() {
    mainApi
      .changeUserInfo(values)
      .then((data) => {
        setCurrentUser(data);
        resetForm();
        setInfoMessage({ status: "success", message: "Успешно" });
      })
      .catch((err) => {
        setInfoMessage({ status: "error", message: err.message });
      });
  }

  return (
    <form className="profile">
      {infoMessage.message && (
        <InfoModal info={infoMessage} setInfoNull={setInfoMessage} />
      )}
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
          !isValid || notChanged
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
