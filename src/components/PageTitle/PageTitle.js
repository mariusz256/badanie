import React from "react";
import { ReactComponent as Psi } from "../../assets/psi.svg";

function PageTitle() {
  return (
    <div className="Header">
      <Psi className="psi-svg" alt="Psi" />
      <h1>Badanie Psychologiczne</h1>
    </div>
  );
}

export default PageTitle;
