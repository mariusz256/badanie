import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Heads } from "../../assets/heads.svg";

import { motion } from "framer-motion";

function Header(props) {
  return (
    <div className="header-wrapper">
      <motion.header
        className="Header"
        initial={props.initial}
        animate={props.animate}
        variants={props.variants}
      >
        <Link className="Header__title" to="/">
          <Heads className="Header__title__Heads" />
          <div className="Header__title__text">Badanie Psychologiczne</div>
        </Link>
        <nav className="Header__menu">
          <div className="Header__menu__hamburger" />
        </nav>
      </motion.header>
    </div>
  );
}

export default Header;
