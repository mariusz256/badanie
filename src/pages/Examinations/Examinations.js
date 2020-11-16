import React from "react";
import Button from "../../components/Button/Button";
import { ReactComponent as Icon } from "../../assets/info.svg";
import "./Examination.scss";

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
  return (
    <>
      <h2 className="Examination__Header">Nasza oferta</h2>
      <div>
        <motion.div
          initial={"initialButtons"}
          animate={"animateButtons"}
          variants={Variants}
          className="Examination"
        >
          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>

          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>

          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>

          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>

          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>

          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>

          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>

          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>

          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>

          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>

          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>

          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>

          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>

          <Button to="/" small title="współpraca">
            <Icon className="icon icon--small" />
          </Button>
        </motion.div>
      </div>
    </>
  );
}

export default Examinations;
