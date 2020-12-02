import React from "react";
import { ReactComponent as Adress } from "../../assets/adress.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import "./Contact.scss";

function Contact(props) {
  return (
    <div className="Contact">
      <h2>Skontaktuj się z nami</h2>
      <div className="Contact__adress">
        <Adress className="Contact__svg" />
        <h3>Pracownia psychologiczna Drivemat</h3>
        <p>Rajsko ul. Wilamowicka 17</p>
        <p>32-600 Oświęcim</p>
      </div>
      <Phone className="Contact__svg" />
      <Mail className="Contact__svg" />
    </div>
  );
}

export default Contact;
