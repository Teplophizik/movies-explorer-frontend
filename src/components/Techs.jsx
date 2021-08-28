import React from "react";
import Features from "./UI/Features";
import "./Techs.css";

const techs = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];

export default function Techs() {
  return (
    <section className="section techs">
      <h2 className="section__header">Технологии</h2>
      <p className="techs__main-text">7 технологий</p>
      <p className="techs__sub-text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <Features elements={techs} />
    </section>
  );
}
