import React from "react";
import "./Footer.scss";

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
        <a href="home" className="Footer__links__link">
          <p>home</p>
        </a>

        <a href="#badania" className="Footer__links__link">
          <p>badania</p>
        </a>
        <a href="#kontakt" className="Footer__links__link">
          <p>kontakt</p>
        </a>
        <a href="#info" className="Footer__links__link">
          <p>o nas</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
