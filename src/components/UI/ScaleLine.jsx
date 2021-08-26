import React from "react";
import "./ScaleLine.css";

export default function ScaleLine(props) {
  const { elements } = props;

  function getStyles(scale) {
    return Object.assign({}, { flex: scale });
  }

  return (
    <div className="scale-line">
      {elements.map((el) => {
        return (
          <div
            key={el.text}
            className="scale-line__block"
            style={getStyles(el.scale)}
          >
            <p className="scale-line-block__text">{el.text}</p>
            <p className="scale-line-block__header">{el.head}</p>
          </div>
        );
      })}
    </div>
  );
}
