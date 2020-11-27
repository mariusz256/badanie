import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { motion } from "framer-motion";

function Header(props) {
  return (
    <motion.header
      className="Header"
      initial={props.initial}
      animate={props.animate}
      variants={props.variants}
    >
      <div className="Header__content">
        <a href="#home" className="Header__content__link">
          <div className="Header__content__logo">
            <Logo className="Header__content__logo__svg" />
            <h1>Badanie Psychologiczne</h1>
          </div>
        </a>
        <div className="Header__content__links">
          <a
            href="#badania"
            className="Header__content__link Header__content__link--nav"
          >
            badania
          </a>
          <a
            href="#kontakt"
            className="Header__content__link Header__content__link--nav"
          >
            kontakt
          </a>
          <a
            href="#info"
            className="Header__content__link Header__content__link--nav"
          >
            o nas
          </a>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
