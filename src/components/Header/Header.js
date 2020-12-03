import React, { useState } from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import useWindowDimensions from "../../utilities/useWindowDimensions";

import Backdrop from "../Backdrop/Backdrop";

function Header(props) {
  const { width } = useWindowDimensions();

  const [dropMenu, setDropMenu] = useState(false);

  const handleMenu = () => {
    setDropMenu((dropMenu) => !dropMenu);
  };

  const normalMenu = (modifier = "") => (
    <div className={`Header__content__links Header__content__links${modifier}`}>
      {modifier === "" ? null : (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          href="#home"
          className={`Header__content__link Header__content__link--nav Header__content__link${modifier}`}
        >
          <p>home</p>
        </a>
      )}

      <a
        href="#badania"
        className={`Header__content__link Header__content__link--nav Header__content__link${modifier}`}
      >
        <p>badania</p>
      </a>
      <a
        href="#kontakt"
        className={`Header__content__link Header__content__link--nav Header__content__link${modifier}`}
      >
        <p>kontakt</p>
      </a>
      <a
        href="#info"
        className={`Header__content__link Header__content__link--nav Header__content__link${modifier}`}
      >
        <p>o nas</p>
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
      <header className="Header">
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
      </header>
    </>
  );
}

export default Header;
