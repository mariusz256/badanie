import React, { useState } from "react";
import "./Examination.scss";
import Card from "../../components/Card/Card";
import CardDetail from "../../components/CardDetail/CardDetail";

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

const Items = [
  {
    id: 1,
    title: "Badanie kierowców",
    description:
      "Oferujemy Badania psychologiczne i lekarskie dla kierowców pojazdów wszystkich kategorii prawa jazdy. Wykonujemy na miejscu psychotesty dla kierowców – wyniki tego samego dnia. Nasi psychologowie prowadzą obowiązkowe badania psychotechniczne (po skierowaniu) oraz badania na życzenie klienta. Dodatkowo umawiamy terminy i prowadzimy badania lekarskie z zakresu medycyny pracy i transportu.",
    lists: [
      {
        title:
          "Zapraszamy na badanie psychologiczne i psychotesty kierujących pojazdami:",
        listElements: [
          "kierowca samochodu służbowego kat. B prawa jazdy",
          "kierowca zawodowy ciężarówki lub autobusu kat. C, D, E prawa jazdy",
          "kandydat na prawo jazdy kat. C, D, E prawa jazdy",
          "kierowca po zatrzymaniu prawa jazdy za przekroczenie punktów karnych",
          "kierowca po zatrzymaniu prawa jazdy po spowodowaniu wypadku drogowego",
          "kierowca po zatrzymaniu prawa jazdy za jazdę po alkoholu",
          "kierowca po zatrzymaniu prawa jazdy za jazdę po narkotykach lub środkach działających podobnie",
          "kierowca uczestniczący w wypadku drogowym",
          "kierowca taxi taksówki",
          "instruktor nauki jazdy",
          "kandydat na instruktora nauki jazdy",
          "instruktor techniki jazdy",
          "kandydat na instruktora techniki jazdy",
          "egzaminator prawa jazdy",
          "kandydat na egzaminatora prawa jazdy",
          "kierowca pojazdu uprzywilejowanego",
          "kierowca konwojent przewożący wartości pieniężne",
        ],
      },
      {
        title: "Badania psychologiczne kierowców jakie możesz u nas wykonać:",
        listElements: [
          "psychotesty i badania psychologiczne dla kierowców prowadzących samochód służbowy. Wszyscy kierowcy korzystający z pojazdów samochodowych w ramach kategorii B prawa jazdy, mają obowiązek wykonać badanie psychologiczne.",
          "psychotesty i badania psychologiczne dla kierowców po zatrzymaniu prawa jazdy. Realizujemy badanie psychotechniczne po zatrzymaniu prawa jazdy, za jazdę po alkoholu, po narkotykach lub środkach działających podobnie, po spowodowaniu wypadku drogowego, po przekroczeniu punktów karnych.",
          "psychotesty i badania psychologiczne dla kandydatów na prawo jazdy kat C, D, E (samochód ciężarowy, autobus, przyczepy). Badanie psychotechniczne, jest niezbędne przed rozpoczęciem kursu na prawo jazdy do założenia profilu kandydata na kierowcę - zwanego skrótowo PKK.",
          "psychotesty i badania psychologiczne na świadectwo kwalifikacji przewozu rzeczy lub osób. Przeprowadzamy badania okresowe kierowców zawodowych przedłużających uprawnienia oraz badania dla kandydatów na kurs kwalifikacji wstępnej.",
          "psychotesty i badania psychologiczne dla kierowców taksówek oraz kierowców wykonujących przewóz osób. Badania są niezbędne do uzyskania licencji taxi i przedłużenia licencji do przewozu ludzi.",
          "psychotesty i badania psychologiczne dla kierowców pojazdów uprzywilejowanych. Badania na pojazdy uprzywilejowane niezbędne są do uzyskania uprawnień oraz przedłużenia ich ważności. Realizujemy badania dla wszystkich służb mundurowych w szczególności kierowców karetek, straży pożarnej, policji.",
          "psychotesty i badania psychologiczne dla kierowców przewożących wartości pieniężne potocznie nazywanych konwojentami. Badania dla konwojentów bankowozów są obowiązkowe do uzyskania uprawnień oraz przedłużenia ich terminu ważności.",
          "psychotesty i badania psychologiczne dla kandydatów na instruktorów i instruktorów nauki jazdy. Badania są obowiązkowe w celu odbycia kursu na instruktora nauki jazdy oraz dla instruktorów poszerzających uprawnienia i przedłużających ważność uprawnień",
          "psychotesty i badania psychologiczne dla kandydatów na egzaminatorów i egzaminatorów prawa jazdy. Badania są wymagane od osób będących na kursie egzaminatora oraz od egzaminatorów poszerzających uprawnienia lub przedłużających ważność uprawnień.",
          "psychotesty i badania psychologiczne dla kierowców wyścigowych i kierowców rajdowych. Badania są niezbędne do uzyskania licencji kierowcy sportów motorowych.",
        ],
      },
      {
        title: "Badanie psychologiczne kierowców dzieli się na trzy etapy:",
        listElements: [
          "Badanie na aparaturach psychotechnicznych – sprawdzana jest psychomotoryka, głównie koordynacja wzrokowo ruchowa oraz czas reakcji na bodziec.",
          "Wywiad psychologiczny czyli rozmowa z psychologiem – ocena psychologa dotycząca odporności na stres czyli radzenia sobie w sytuacjach stresowych oraz dojrzałości społecznej.",
          "Badanie z wykorzystaniem testów psychologicznych – ocena profilu osobowości, sprawności intelektualnej oraz procesów poznawczych",
        ],
      },
      {
        title:
          "Na czym polegają psychotesty dla kierowcy samochodu służbowego?",

        listElements: [
          "Badania na wykorzystywanie samochodu do celów służbowych, sprawdzają predyspozycje do kierowania pojazdem służbowym, na kilku płaszczyznach istotnych dla bezpieczeństwa ruchu drogowego i jakości jazdy. Najczęściej sprawdzane są psychomotoryka, sprawność kierowcy pod kątem czasu reakcji, koncentracja uwagi, koordynacja wzrokowo ruchowa. Rzadkością nie jest badanie w ciemni kabinowej, obejmuje badanie widzenia zmierzchowego i badanie wrażliwości na olśnienie świetlne.",
        ],
      },
      {
        title: "",
        listElements:
          "Pracownia psychologiczna Drivemat posiada ciemnię kabinową, na której wykonuje badanie widzenia zmierzchowego oraz badanie na olśnienie kierowców.",
      },
    ],
  },
];

function Examinations() {
  const [popup, setPopup] = useState(true);

  return (
    <div className="Examinations">
      {popup ? <CardDetail obj={Items[0]} /> : null}
      <Choice className="Examinations__svg" />

      <div className="Examinations__card-container">
        <Card obj={Items[0]} />
        <Card obj={Items[0]} />
        <Card obj={Items[0]} />
        <Card obj={Items[0]} />
        <Card obj={Items[0]} />
        <Card obj={Items[0]} />
      </div>
    </div>
  );
}

export default Examinations;
