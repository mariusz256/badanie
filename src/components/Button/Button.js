import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

function Button(props) {
  const buttonClass = ["Button"];
  buttonClass.push(props.class);

  return (
    <>
      {props.type === "button" ? (
        <div className={buttonClass.join(" ")} to={props.to}>
          {props.children}
        </div>
      ) : (
        <Link className={buttonClass.join(" ")} to={props.to}>
          {props.children}
        </Link>
      )}
    </>
  );
}

export default Button;
