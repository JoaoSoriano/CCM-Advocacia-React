import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Carrazzoni Campelo e Medeiros Horizontal Médio_2.jpg";
import "../styles/header2.css";

const HeaderSimples = () => {
  return (
    <header className="header-perfil">
      <div className="header-logo">
        <img src={logo} alt="Logo do Escritório" />
      </div>
      <div className="header-contact">
        <Link to="/" className="contact-button-2">
          <span className="contact-text">
            ↼ Home
            <i className="icon-next"></i>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default HeaderSimples;