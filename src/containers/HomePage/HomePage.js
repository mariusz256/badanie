import React from "react";
import "./HomePage.scss";
import { ReactComponent as Psi } from "../../assets/psi.svg";
import Link from "../../components/Link/Link";
import { ReactComponent as Badania } from "../../assets/badania.svg";
import { ReactComponent as Contactus } from "../../assets/contactus.svg";
import { ReactComponent as Wspolpraca } from "../../assets/wspolpraca.svg";
import { ReactComponent as Info } from "../../assets/info.svg";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage__wrapper">
        <section className="HomePage__content">
          <h1>Badania Psychologiczne</h1>

          <p className="HomePage__text"></p>
          <p className="HomePage__text">
            {" "}
            Badania psychologiczne z zakresu medycyny pracy i transportu
            drogowego.
          </p>
          <p className="HomePage__text">
            Nowoczesna aparatura do badań kierowców.
          </p>
          <p className="HomePage__text">Certyfikowane testy psychologiczne</p>

          <p className="HomePage__text">
            Dajemy rękojmie jakości i rzetelności prowadzonych badań
            psychologicznych.
          </p>
          <p className="HomePage__text">
            Zapraszamy na badania psychologiczne klientów z Małopolski i Śląska.
            Czekamy na Was w naszej pracowni psychologicznej.
          </p>
        </section>

        <section className="HomePage__Links">
          <Link title="Badania">
            <Badania className="icon" />
          </Link>
          <Link title="Kontakt">
            <Contactus className="icon" />
          </Link>
          <Link title="współpraca">
            <Wspolpraca className="icon" />
          </Link>
          <Link title="O nas">
            <Info className="icon" />
          </Link>
        </section>
      </div>
      <Psi className="psi-svg" alt="Psi" />
    </div>
  );
}

export default HomePage;
