import React from "react";
import "./Footer.scss";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__author">
        by:{" "}
        <a
          className="Footer__author__mail"
          href="mailto:mariuszcyganik50@gmail.com"
        >
          Mariusz Cyganik
        </a>
      </div>

      <div className="Footer__links">
        <Link to="/#home" className="Footer__links__link">
          <p>home</p>
        </Link>

        <Link to="/#badania" className="Footer__links__link">
          <p>badania</p>
        </Link>
        <Link to="/#kontakt" className="Footer__links__link">
          <p>kontakt</p>
        </Link>
        <Link to="/info/#info" className="Footer__links__link">
          <p>o nas</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
