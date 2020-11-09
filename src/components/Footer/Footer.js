import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="Links">
        <Link className="Links--link" to="/">
          Strona główna
        </Link>
        <Link className="Links--link" to="/badania">
          Nasze badania
        </Link>
        <Link className="Links--link" to="/kontak">
          Kontakt
        </Link>
        <Link className="Links--link" to="/wspolpraca">
          Współpraca
        </Link>
      </div>

      <div className="Copyrights">
        <p>© Wszystkie prawa zastrzeżone</p>
        <a
          className="Copyrights--link"
          href="mailto: mariuszcyganik50@gmial.com"
        >
          Built by MARIUSZ CYGANIK
        </a>
      </div>
    </footer>
  );
}

export default Footer;
