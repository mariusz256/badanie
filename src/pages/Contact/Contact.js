import React from "react";
import { ReactComponent as Adress } from "../../assets/adress.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import "./Contact.scss";
import CardCustomIcon from "../../components/Card/CardCustomIcon";

const adress = {
  id: 1,
  title: "Pracownia psychologiczna Drivemat",
  content: ["Rajsko ul. Wilamowicka 17", "32-600 Oświęcim"],
  ref:
    "https://www.google.com/maps/place/Wilamowicka+17,+32-600+Rajsko/@50.0061911,19.1894484,17z/data=!4m13!1m7!3m6!1s0x471695f011af604d:0x2ce3d1d7d14f6a25!2sWilamowicka+17,+32-600+Rajsko!3b1!8m2!3d50.0061911!4d19.1916371!3m4!1s0x471695f011af604d:0x2ce3d1d7d14f6a25!8m2!3d50.0061911!4d19.1916371",
  target: "_blank",
};

const phone = {
  id: 2,
  title: "Rejestracja telefoniczna",
  content: [
    "tel: 732 606 732",
    "Skontaktuj się z nami i wybierz dogodny termin badania",
    "Bez kolejek! Darmowy parking! Łatwy dojazd!",
  ],
  ref: "tel:+48732606732",
  target: "",
};

const mail = {
  id: 3,
  title: "Kontakt email",
  content: [
    "Wszystkich zainteresowanych zachęcamy do bezpośredniego kontaktu z naszą firmą:",
    "biuro@drivemat.pl",
  ],
  ref: "mailto:biuro@drivemat.pl",
  target: "",
};

function Contact(props) {
  return (
    <div id="kontakt" className="Contact">
      <h2>Skontaktuj się z nami</h2>
      <p className="Contact__text">pon-pt: 8.00 - 20.00</p>
      <p className="Contact__text">sob: 9.00 - 13.00</p>
      <div className="Contact__adress">
        <CardCustomIcon obj={adress} key={adress.id}>
          <Adress className="Contact__svg" />
        </CardCustomIcon>

        <CardCustomIcon obj={phone} key={phone.id}>
          <Phone className="Contact__svg" />
        </CardCustomIcon>

        <CardCustomIcon obj={mail} key={mail.id}>
          <Mail className="Contact__svg" />
        </CardCustomIcon>
      </div>
    </div>
  );
}

export default Contact;
