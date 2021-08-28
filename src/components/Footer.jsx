import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__about">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </span>
      <div className="footer__nav">
        <div className="footer__copy">&copy; {new Date().getFullYear()}</div>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              href="https://practicum.yandex.ru/"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-item">
            <a
              href="https://github.com/"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="footer__list-item">
            <a
              href="https://www.facebook.com/"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
