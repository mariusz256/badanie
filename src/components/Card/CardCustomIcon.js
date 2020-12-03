import React from "react";
import "./Card.scss";

function CardCustomIcon(props) {
  return (
    <div className="Card">
      <div className="Card__content Card__content">
        <h3 className="Card__content__title">{props.obj.title}</h3>
        {props.obj.content.map((el, i) => {
          return (
            <p
              key={`${props.obj.title}--${i}`}
              className="Card__content__text Card__content__text--justify"
            >
              {el}
            </p>
          );
        })}
      </div>

      <div className="Card__button">
        <a href={props.obj.ref} target={props.obj.target}>
          {props.children}
        </a>
      </div>
    </div>
  );
}

export default CardCustomIcon;
