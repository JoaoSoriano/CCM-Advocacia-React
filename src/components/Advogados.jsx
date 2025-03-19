import React from "react";
import { Link } from "react-router-dom";
import "../styles/advogados.css";
import larissaImg from "../img/FotoLarissa .jpg";
import igorImg from "../img/igor.jpg";
import maurilioImg from "../img/MaurilioFoto.jpg";
import plusSvg from "../img/plus.svg";
import wppSvg from "../img/whatsapp.svg";
import instagramSvg from "../img/instagram.svg";
import linkedInSvg from "../img/icons8-linkedin (1).svg";

const advogados = [
  {
    nome: "Larissa Carrazzoni",
    oab: "OAB/PE nº 60.623",
    img: larissaImg,
    link: "/larissa",
    social: {
      instagram: "https://www.instagram.com/larissacarrazzoni.adv?igsh=ZmFoaHR0ZHZ4NTM3",
      whatsapp: "https://wa.me/5581991517293",
      linkedin: "https://www.linkedin.com/in/larissa-carrazzoni-larissacarrazzoni-adv-912505206/?originalSubdomain=br"
    }
  },
  {
    nome: "Igor Campêlo",
    oab: "OAB/PE nº 60.547",
    img: igorImg,
    link: "/igor",
    social: {
      instagram: "https://www.instagram.com/igorcampelo_adv?igsh=MWMwZ2tqMGlsbnVwcA==",
      whatsapp: "https://wa.me/5581996085372"
    }
  },
  {
    nome: "Maurílio Medeiros",
    oab: "OAB/PB nº 18.693",
    img: maurilioImg,
    link: "/maurilio",
    social: {
      instagram: "https://www.instagram.com/mauriliomedeiros.adv/",
      whatsapp: "https://wa.me/5583999643070",
      linkedin: "https://www.linkedin.com/in/maur%C3%ADlio-rodrigues-210240100/"
    }
  }
];

const AdvogadoCard = ({ advogado }) => (
  <div className="team-two__single">
    <div className="team-two__single-overlay-bg"></div>
    <div className="team-two__single-img">
      <a className="foto-link" href={advogado.link}>
        <img src={advogado.img} alt={advogado.nome} />
      </a>
      <div className="social-share-box">
        <span className="icon-plus">
          <img src={plusSvg} className="plus" alt="plus" />
        </span>
        <ul>
          {advogado.social.instagram && (
            <li>
              <a href={advogado.social.instagram} target="_blank" rel="noopener noreferrer">
                <img src={instagramSvg} className="social-icon" alt="instagram" />
              </a>
            </li>
          )}
          {advogado.social.whatsapp && (
            <li>
              <a href={advogado.social.whatsapp} target="_blank" rel="noopener noreferrer">
                <img src={wppSvg} className="social-icon" alt="whatsapp" />
              </a>
            </li>
          )}
          {advogado.social.linkedin && (
            <li>
              <a href={advogado.social.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedInSvg} className="social-icon" alt="LinkedIn" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
    <div className="team-two__single-content">
      <h3><a href={advogado.link}>{advogado.nome}</a></h3>
      <p>{advogado.oab}</p>
    </div>
  </div>
);

const Advogados = () => {
  return (
    <section className="team-two" id="advogados">
      <div className="socios-fundadores">
        <div className="sub-title">
          <h3>Advogados</h3>
        </div>
        <h2 className="h2site">Sócios Fundadores</h2>
      </div>
      <div className="socios">
        {advogados.map((advogado, index) => (
          <AdvogadoCard key={index} advogado={advogado} />
        ))}
      </div>
    </section>
  );
};

export default Advogados;
