import React from "react";
import "./Backdrop.scss";

function Backdrop(props) {
  return (
    <div onClick={props.onClick} className="Backdrop">
      {props.children}
    </div>
  );
}

export default Backdrop;
