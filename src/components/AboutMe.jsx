import React from "react";
import "./AboutMe.css";
import Portfolio from "./Portfolio";
import avatar from "../images/avatar.png";

export default function AboutMe() {
  return (
    <section className="section about-me">
      <h2 className="section__header about-me__header">Студент</h2>
      <div className="bio">
        <p className="bio__title">Виталий</p>
        <p className="bio__subtitle">Фронтенд-разработчик, 30 лет</p>
        <p className="bio__main-text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить.
          <br /> С 2015 года работал в компании «СКБ Контур». После того, как
          прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
          ушёл с постоянной работы.
        </p>
        <ul className="bio__social">
          <li className="bio__list-items">
            <a
              className="bio__links"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li className="bio__list-items">
            <a
              className="bio__links"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
        <img className="bio__avatar" src={avatar} />
      </div>
      <Portfolio />
    </section>
  );
}
