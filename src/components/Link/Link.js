import React from "react";
import "./Link.scss";

function Link(props) {
  return (
    <div className="Card" style={props.brightness}>
      <h2 className="Card__title">{props.title}</h2>
    </div>
  );
}

export default Link;
