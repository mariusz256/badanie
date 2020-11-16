import React from "react";
import "./HomePage.scss";
import Button from "../../components/Button/Button";
import { ReactComponent as Badania } from "../../assets/badania.svg";
import { ReactComponent as Contactus } from "../../assets/contactus.svg";
import { ReactComponent as Wspolpraca } from "../../assets/wspolpraca.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Heads } from "../../assets/heads.svg";
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
      <div className="HomePage__wrapper">
        <section className="HomePage__content">
          <motion.div
            initial={"initialHeader"}
            animate={"animateHeader"}
            variants={Variants}
            className="HomePage__content__HeaderWrapper"
          >
            <Heads className="psi-svg" alt="Psi" />
            <h1>Badanie Psychologiczne</h1>
          </motion.div>
          <motion.div
            initial={"initialText"}
            animate={"animateText"}
            variants={Variants}
            className="HomePage__text"
          >
            <p>
              Badania psychologiczne z zakresu medycyny pracy i transportu
              drogowego.
            </p>
          </motion.div>

          <motion.div
            initial={"initialText"}
            animate={"animateText"}
            variants={Variants}
            className="HomePage__text"
          >
            <p>Nowoczesna aparatura do badań kierowców.</p>
          </motion.div>

          <motion.div
            initial={"initialText"}
            animate={"animateText"}
            variants={Variants}
            className="HomePage__text"
          >
            <p>Certyfikowane testy psychologiczne.</p>
          </motion.div>

          <motion.div
            initial={"initialText"}
            animate={"animateText"}
            variants={Variants}
            className="HomePage__text"
          >
            <p>
              Dajemy rękojmie jakości i rzetelności prowadzonych badań
              psychologicznych.
            </p>
          </motion.div>

          <motion.div
            initial={"initialText"}
            animate={"animateText"}
            variants={Variants}
            className="HomePage__text"
          >
            <p>
              Zapraszamy na badania psychologiczne klientów z Małopolski i
              Śląska.
            </p>
          </motion.div>
        </section>

        <motion.section
          initial={"initialButtons"}
          animate={"animateButtons"}
          variants={Variants}
          className="HomePage__Links"
        >
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
        </motion.section>
      </div>
    </div>
  );
}

export default HomePage;
