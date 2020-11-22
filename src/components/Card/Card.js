import React from "react";
import "./Card.scss";
import Button from "../Button/Button";

function Card({ obj }) {
  const shortDescription = (description) => {
    return description.split(".").slice(0, 2).join(". ") + "...";
  };

  const descriptionOpen = (e) => {
    e.preventDefault();
  };

  // console.log(shortDescription(obj.description));

  return (
    <div className="Card">
      <div className="Card__content">
        <h3 className="Card__content__title">{obj.title}</h3>
        <p className="Card__content__text">
          {shortDescription(obj.description)}
        </p>
        <Button onClick={descriptionOpen} type="button" class="Button--small">
          Więcej
        </Button>
      </div>
    </div>
  );
}

export default Card;
