import React from "react";
import "./Features.css";

export default function Features(props) {
  return (
    <div className="features">
      {props.elements.map((el) => {
        return (
          <div className="features__element" key={el}>
            {el}
          </div>
        );
      })}
    </div>
  );
}
