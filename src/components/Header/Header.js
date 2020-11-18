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
        <Link className="Header__content__link" to="/">
          <div className="Header__content__logo">
            <Logo className="Header__content__logo__svg" />
            <h1>Badanie Psychologiczne</h1>
          </div>
        </Link>
        <div className="Header__content__links">
          <Link
            className="Header__content__link Header__content__link--nav"
            to="/"
          >
            badania
          </Link>
          <Link
            className="Header__content__link Header__content__link--nav"
            to="/"
          >
            kontakt
          </Link>
          <Link
            className="Header__content__link Header__content__link--nav"
            to="/"
          >
            o nas
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
