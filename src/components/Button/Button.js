import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

function Button(props) {
  console.log(props.small);
  return (
    <Link className="Button" to={props.to}>
      <div className={!props.small ? "Card" : "Card Card--small"}>
        <h2
          className={
            !props.small ? "Card__title" : "Card__title Card__title--small"
          }
        >
          {props.title}
        </h2>
        {props.children}
      </div>
    </Link>
  );
}

export default Button;
