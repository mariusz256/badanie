import React from "react";
import "./HomePage.scss";
import { ReactComponent as Examination } from "../../assets/logo2.svg";
import Button from "../../components/Button/Button";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage__content">
        <div className="HomePage__content__wrapper">
          <h2>
            Certyfikowane testy psychologiczne z zakresu medycyny pracy i
            transportu drogowego.
          </h2>
          <Button class="" type="Link" to="#badania">
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
