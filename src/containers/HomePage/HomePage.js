import React from "react";
import "./HomePage.scss";
import psi from "../../assets/psi.svg";
import Link from "../../components/Link/Link";

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
          <Link
            title="O nas"
            brightness={{ "background-color": "#49515C" }}
          ></Link>
          <Link
            title="O nas"
            brightness={{ "background-color": "#404D52" }}
          ></Link>
          <Link
            title="O nas"
            brightness={{ "background-color": "#393B44" }}
          ></Link>
          <Link
            title="O nas"
            brightness={{ "background-color": "#4A495C" }}
          ></Link>
        </section>
      </div>
      <img src={psi} className="psi-svg" alt="Psi" />
    </div>
  );
}

export default HomePage;
