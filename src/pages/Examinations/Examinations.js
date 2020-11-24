import React, { useState } from "react";
import "./Examination.scss";
import Card from "../../components/Card/Card";
import CardDetail from "../../components/CardDetail/CardDetail";
import Items from "./List";
import Backdrop from "../../components/Backdrop/Backdrop";

import { ReactComponent as Choice } from "../../assets/choice.svg";

import { motion } from "framer-motion";

const Variants = {
  initialButtons: {
    opacity: 0.3,
    rotateY: "90deg",
  },

  animateButtons: {
    opacity: 1,
    rotateY: "0deg",
    transition: { duration: 0.3, delay: 0.1 },
  },
};

function Examinations() {
  // const text =
  //   "- ochrony osobistej- ochrony osób- ochrony mienia- sportowych- łowieckich- szkoleniowych- kolekcjonerskich- pamiątkowych- rekonstrukcji historycznych";
  // console.log(text.split("- "));

  const cardCreator = (elements) => {
    return elements.map((el) => {
      return <Card onClick={() => detail(el)} obj={el} key={el.id} />;
    });
  };

  const [popup, setPopup] = useState(false);
  const [activeCard, setActiveCard] = useState({});

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
          <Backdrop onClick={closeCardDetial} />
          <CardDetail exit={closeCardDetial} obj={activeCard} />{" "}
        </>
      ) : null}
      <Choice className="Examinations__svg" />

      <div className="Examinations__card-container">{cardCreator(Items)}</div>
    </div>
  );
}

export default Examinations;
