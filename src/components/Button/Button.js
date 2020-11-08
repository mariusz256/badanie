import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

function Button(props) {
  return (
    <Link to={props.to} className="button">
      {props.title}
    </Link>
  );
}

export default Button;
