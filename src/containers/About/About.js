import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="AboutWrapper">
      <div id="info" className="About">
        <h2 className="About__title">O nas</h2>

        <p className="About__text">
          Pracownia testów psychologicznych zajmuje się wykonaniem badań
          psychologicznych z zakresu medycyny pracy i transportu drogowego.
          Posiadamy nowoczesną aparaturę do badań kierowców i korzystamy z
          certyfikowanych testów psychologicznych. Zapraszamy do naszej pracowni
          w Oświęcimiu pod adresem: Wilamowicka 17, 32-600 Rajsko.
        </p>
        <p className="About__text">
          O badaniach psychologicznych nie wiemy jeszcze wszystkiego ale ciągle
          poszerzamy wiedzę, dążymy do perfekcji i rozwijamy się. W nieustannym
          zdobywaniu doświadczeń na płaszczyźnie orzekania w psychologii
          transportu i medycyny pracy, powstał pomysł na stworzenie strony
          naszych usług oraz bloga.{" "}
        </p>

        <p className="About__text">
          Zapraszamy na badania psychologiczne klientów z Małopolski i Śląska.
          Czekamy na Was w naszej pracowni psychologicznej. Na naszego bloga
          zapraszamy wszystkie osoby, które chcą dowiedzieć się więcej o
          badaniach psychologicznych. Mamy nadzieję że jeśli tu trafiłeś to
          znajdziesz to czego szukasz.
        </p>
        <p className="About__text">
          Dajemy rękojmie jakości i rzetelności prowadzonych badań
          psychologicznych. Nasza placówka w Rajsku k. Oświęcimia posiada nr
          192/2019 i jest wpisana do rejestru Marszałka Wojewódzkiego
          Województwa Małopolskiego.
        </p>

        <h2 className="About__title">Współpraca</h2>
        <p className="About__text">
          Mamy otwarte umysły dlatego nasz psycholog transportu chętnie nawiąże
          z państwem współpracę. Jesteśmy szczególnie zainteresowani współpracą
          na płaszczyźnie psychologii, medycyny pracy i szkoleń.
        </p>
        <h3 className="About__title About__title--small">
          Zapraszamy do współpracy:
        </h3>
        <ul className="About__list">
          <li className="About__list__item">Lekarzy medycyny pracy</li>
          <li className="About__list__item">Psychologów transportu</li>
          <li className="About__list__item">Ośrodki i przychodnie zdrowia</li>
          <li className="About__list__item">Przychodnie medycyny pracy</li>
          <li className="About__list__item">Firmy transportowe</li>
          <li className="About__list__item">Agencje pracy</li>
          <li className="About__list__item">Ośrodki szkolenia kierowców</li>
          <li className="About__list__item">Szkoły bezpiecznej jazdy</li>
          <li className="About__list__item">
            Ośrodki doskonalenia techniki jazdy
          </li>
          <li className="About__list__item">Szkoły nauki jazdy</li>
          <li className="About__list__item">
            Wojewódzkie Ośrodki Ruchu Drogowego
          </li>
          <li className="About__list__item">Firmy budowlane</li>
          <li className="About__list__item">Zakłady górnicze</li>
          <li className="About__list__item">Firmy zatrudniające kierowców</li>
          <li className="About__list__item">
            Firmy wykonujące prace na wysokości
          </li>
          <li className="About__list__item">Firmy zatrudniające operatorów</li>
        </ul>
        <h3 className="About__title About__title--small">Co możesz zyskać?</h3>
        <ul className="About__list">
          <li className="About__list__item">
            Szybkie terminy badań bez kolejek
          </li>
          <li className="About__list__item">
            Atrakcyjne rabaty cenowe na badania grupowe
          </li>
          <li className="About__list__item">
            Rozliczenie na fakturze zbiorczej
          </li>
          <li className="About__list__item">
            Możliwość wykonania badań w twojej firmie
          </li>
          <li className="About__list__item">
            Wsparcie merytoryczne dotyczące badań z zakresu psychologii
            transportu i medycyny pracy
          </li>
        </ul>
        <p className="About__text About__text--margin">
          Nasza firma otwarta jest na każdy rodzaj współpracy. Szczegóły
          dotyczące zakresu wsparcia ustalamy indywidualnie z klientem. Na
          każdym etapie jesteśmy elastyczni, więc w większości przypadków
          znajdujemy najlepsze formy współpracy. Nasz profesjonalizm potwierdza
          kilka tysięcy badanych którzy postanowili nam zaufać. Psycholog
          nawiąże współpracę, pomoże w najtrudniejszych przypadkach i podpowie
          jak dokonać właściwych decyzji by zmaksymalizować bezpieczeństwo.
        </p>

        <p className="About__text">
          Wszystkich zainteresowanych zachęcamy do bezpośredniego kontaktu z
          naszą firmą.
        </p>
      </div>
    </div>
  );
}

export default About;
