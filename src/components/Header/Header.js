import React, { useState, useEffect } from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import useWindowDimensions from "../../utilities/useWindowDimensions";
import useScrollPosition from "../../utilities/useScrollPosition";

import Backdrop from "../Backdrop/Backdrop";

import { motion } from "framer-motion";

function Header(props) {
  const { height, width } = useWindowDimensions();

  const scrollPosition = useScrollPosition();

  console.log(width, height, scrollPosition);

  const [dropMenu, setDropMenu] = useState(false);

  const handleMenu = () => {
    setDropMenu((dropMenu) => !dropMenu);
  };

  const normalMenu = (modifier = "") => (
    <div className={`Header__content__links Header__content__links${modifier}`}>
      <a
        href="#badania"
        className={`Header__content__link Header__content__link--nav Header__content__link${modifier}`}
      >
        badania
      </a>
      <a
        href="#kontakt"
        className={`Header__content__link Header__content__link--nav Header__content__link${modifier}`}
      >
        kontakt
      </a>
      <a
        href="#info"
        className={`Header__content__link Header__content__link--nav Header__content__link${modifier}`}
      >
        o nas
      </a>
    </div>
  );

  const smallMenu = (
    <nav onClick={handleMenu} className="Header__content__dropBox">
      <div className="Header__content__dropBox__button"></div>
    </nav>
  );

  return (
    <>
      <motion.header className="Header">
        <div className="Header__content">
          <a href="#home" className="Header__content__link">
            <div className="Header__content__logo">
              <Logo className="Header__content__logo__svg" />
              <h1>Badanie Psychologiczne</h1>
            </div>
          </a>
          {dropMenu && width <= 800 ? (
            <>
              <Backdrop onClick={handleMenu}>{normalMenu("--mobile")}</Backdrop>
            </>
          ) : null}
          {width > 800 ? normalMenu() : smallMenu}
        </div>
      </motion.header>
    </>
  );
}

export default Header;
