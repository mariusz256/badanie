import React from "react";
import "./HomePage.scss";
import { ReactComponent as Psi } from "../../assets/psi.svg";
import Button from "../../components/Button/Button";
import { ReactComponent as Badania } from "../../assets/badania.svg";
import { ReactComponent as Contactus } from "../../assets/contactus.svg";
import { ReactComponent as Wspolpraca } from "../../assets/wspolpraca.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Car } from "../../assets/car.svg";
import { ReactComponent as Certyfikat } from "../../assets/certyfikat.svg";
import { ReactComponent as Map } from "../../assets/map.svg";
import { ReactComponent as Ok } from "../../assets/ok.svg";
import { ReactComponent as Brain } from "../../assets/brain.svg";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage__wrapper">
        <section className="HomePage__content">
          <div className="HomePage__content__HeaderWrapper">
            <Psi className="psi-svg" alt="Psi" />
            <h1>Badanie Psychologiczne</h1>
          </div>
          <div className="HomePage__text">
            <Brain className="Icons" />
            <p>
              Badania psychologiczne z zakresu medycyny pracy i transportu
              drogowego.
            </p>
          </div>

          <div className="HomePage__text">
            <Car className="Icons" />
            <p>Nowoczesna aparatura do badań kierowców.</p>
          </div>

          <div className="HomePage__text">
            <Certyfikat className="Icons" />
            <p>Certyfikowane testy psychologiczne </p>
          </div>

          <div className="HomePage__text">
            <Ok className="Icons" />
            <p>
              Dajemy rękojmie jakości i rzetelności prowadzonych badań
              psychologicznych.
            </p>
          </div>

          <div className="HomePage__text">
            <Map className="Icons" />
            <p>
              Zapraszamy na badania psychologiczne klientów z Małopolski i
              Śląska.
            </p>
          </div>
        </section>

        <section className="HomePage__Links">
          <Button to="/badania" title="Badania">
            <Badania className="icon" />
          </Button>
          <Button to="/kontakt" title="Kontakt">
            <Contactus className="icon" />
          </Button>
          <Button to="/" title="współpraca">
            <Wspolpraca className="icon" />
          </Button>
          <Button to="/" title="O nas">
            <Info className="icon" />
          </Button>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
