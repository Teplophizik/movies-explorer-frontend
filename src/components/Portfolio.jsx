import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__header">Портфолио</p>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__list-link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__list-link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__list-link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </div>
  );
}
