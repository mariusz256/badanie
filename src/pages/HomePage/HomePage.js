import React from "react";
import "./HomePage.scss";
import { ReactComponent as Examination } from "../../assets/examination.svg";
import Button from "../../components/Button/Button";

import { motion } from "framer-motion";

const Variants = {
  initialHeader: {
    left: "-150%",
  },

  animateHeader: {
    left: "0%",
    transition: { duration: 0.3 },
  },

  initialButtons: {
    right: "-150%",
  },

  animateButtons: {
    right: 0,
    transition: { duration: 0.3 },
  },

  initialText: {
    opacity: 0,
  },

  animateText: {
    opacity: 1,
    transition: { duration: 0.3, delay: [0.3] },
  },
};

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage__content">
        <div className="HomePage__content__wrapper">
          <h2>
            Certyfikowane testy psychologiczne z zakresu medycyny pracy i
            transportu drogowego.
          </h2>
          <Button class="" type="Link" to="/badania">
            Nasza oferta
          </Button>
        </div>
      </div>
      <div className="HomePage__picture">
        <Examination className="HomePage__picture__svg" />
      </div>
    </div>
  );
}

export default HomePage;
