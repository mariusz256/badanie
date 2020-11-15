import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo.svg";
import { ReactComponent as Psi } from "../../assets/psi.svg";

function Header() {
  return (
    <header className="Header">
      <Link className="Header__title" to="/">
        <Psi className="Header__title__Psi" />
        <div className="Header__title__text">Badanie Psychologiczne</div>
      </Link>
      <nav className="Header__menu">
        <div className="Header__menu__hamburger" />
      </nav>
    </header>
  );
}

export default Header;
