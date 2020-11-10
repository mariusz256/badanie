import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button";

function Header() {
  return (
    <header>
      <div className="wrapper">
        <Link className="logo Link" to="/">
          <img src={logo} className="logo-svg" alt="Badanie Psychologiczne" />
        </Link>
        <nav>
          <span className="Link">Badania</span>
          <Link className="Link" to="/kontakt">
            Kontakt
          </Link>
          <Link className="Link" to="/wspolpraca">
            Współpraca
          </Link>
        </nav>
      </div>

      <div className="title">
        <h1>Badanie Psychologiczne</h1>
        <p>Certyfikowane testy psychologiczne</p>
        <Button title="nasze badania" to="/badania" />
      </div>
    </header>
  );
}

export default Header;
