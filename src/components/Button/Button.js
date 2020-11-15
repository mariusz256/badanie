import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link className="Button" to={props.to}>
      <div className="Card">
        <h2 className="Card__title">{props.title}</h2>
        {props.children}
      </div>
    </Link>
  );
}

export default Button;
