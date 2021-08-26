import React from "react";
import ScaleLine from "./UI/ScaleLine";
import "./AboutProject.css";

const elements = [
  {
    scale: 1,
    text: "1 неделя",
    head: "Back-end",
  },
  {
    scale: 4,
    text: "4 недели",
    head: "Front-end",
  },
];

export default function AboutProject() {
  return (
    <section className="section about-project">
      <h2 className="section__header">О проекте</h2>
      <div className="two-columns">
        <div className="two-columns__column">
          <h3 className="two-columns__header">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="two-columns__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="two-columns__column">
          <h3 className="two-columns__header">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="two-columns__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <ScaleLine elements={elements}></ScaleLine>
    </section>
  );
}
