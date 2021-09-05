import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

import "./Navigation.css";

export default function Navigation() {
  const { isLoggedIn } = useContext(CurrentUserContext);

  let location = useLocation();
  const [isChecked, toggleCheck] = useState(false);

  const menuItems = [
    ["/", "menu__item menu__item_home", "Главная"],
    ["/movies", "menu__item", "Фильмы"],
    ["/saved-movies", "menu__item", "Сохранённые фильмы"],
    ["/profile", "menu__profile", "Аккаунт"],
  ];

  function toggle() {
    toggleCheck(!isChecked);
  }

  useEffect(() => {
    if (isChecked) {
      toggleCheck(!isChecked);
    }
  }, [location]);

  return (
    <div className="menu">
      {!isLoggedIn ? (
        <ul className="menu__line">
          <li className="menu__item">
            <Link className="menu__auth-btn" to="/signup">
              Регистрация
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__auth-btn menu__auth-btn_green" to="/signin">
              Войти
            </Link>
          </li>
        </ul>
      ) : (
        <>
          <input
            className="menu__toggle"
            type="checkbox"
            checked={isChecked}
            readOnly
          />
          <label className="menu__btn" onClick={toggle}>
            <span></span>
          </label>
          <ul className="menu__box">
            {menuItems.map((item, i) => (
              <li key={i} className={item[1]}>
                <Link
                  className={
                    item[0] === location.pathname
                      ? "menu__link menu__link_active"
                      : "menu__link"
                  }
                  to={item[0]}
                >
                  {item[2]}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
