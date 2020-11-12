import React from "react";
import "./Link.scss";

function Link(props) {
  return (
    <div className="Card">
      <h2 className="Card__title">{props.title}</h2>
      {props.children}
    </div>
  );
}

export default Link;
