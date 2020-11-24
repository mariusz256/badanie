import React from "react";
import "./Card.scss";
import Button from "../Button/Button";

function Card(props) {
  const shortDescription = (description) => {
    if (description.split(".").length > 2) {
      return description.split(".").slice(0, 2).join(". ") + "...";
    } else {
      return description;
    }
  };

  return (
    <div className={"Card"}>
      <div className="Card__content">
        <h3 className="Card__content__title">{props.obj.title}</h3>
        <p className="Card__content__text">
          {shortDescription(props.obj.description)}
        </p>
        <Button onClick={props.onClick} type="button" class="Button--small">
          Więcej
        </Button>
      </div>
    </div>
  );
}

export default Card;
