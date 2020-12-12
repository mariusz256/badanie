import React, { useState } from "react";
import "./Examination.scss";
import Card from "../../components/Card/Card";
import CardDetail from "../../components/CardDetail/CardDetail";
import Items from "./List";
import Backdrop from "../../components/Backdrop/Backdrop";

import { ReactComponent as Choice } from "../../assets/choice.svg";

function Examinations() {
  const cardCreator = (elements) => {
    return elements.map((el) => {
      return (
        <Card
          onClick={(e) => {
            detail(el);
            getCoordinates(e);
          }}
          obj={el}
          key={el.id}
        />
      );
    });
  };

  const getCoordinates = (e) => {
    setScroll((scroll) => ({
      x: window.pageXOffset,
      y: window.pageYOffset,
    }));
  };

  const [popup, setPopup] = useState(false);
  const [activeCard, setActiveCard] = useState({});
  const [scroll, setScroll] = useState({});

  const detail = (el) => {
    setPopup((popup) => !popup);
    setActiveCard((activeCard) => el);
  };

  const closeCardDetial = () => {
    console.log("click");
    setPopup((popup) => false);
    setActiveCard((activeCard) => {});
  };

  return (
    <div className="Examinations">
      {popup ? (
        <>
          <Backdrop onClick={closeCardDetial}></Backdrop>
          <CardDetail exit={closeCardDetial} cord={scroll} obj={activeCard} />
        </>
      ) : null}
      <Choice id="badania" className="Examinations__svg" />
      <h2>Nasza oferta</h2>

      <div className="Examinations__card-container">{cardCreator(Items)}</div>
    </div>
  );
}

export default Examinations;
