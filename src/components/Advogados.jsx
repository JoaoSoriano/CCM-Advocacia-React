import React from "react";
import { Link } from "react-router-dom";
import "../styles/advogados.css";
import larissaImg from "../img/FotoLarissa .jpg";
import igorImg from "../img/igor.jpg";
import plusSvg from "../img/plus.svg";
import wppSvg from "../img/whatsapp.svg";
import instagramSvg from "../img/instagram.svg";


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
];

const AdvogadoCard = ({ advogado }) => (
  <div className="team-two__single">
    <div className="team-two__single-overlay-bg"></div>
    <div className="team-two__single-img">
      <Link className="foto-link" to={advogado.link}>
        <img src={advogado.img} alt={advogado.nome} />
      </Link>
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
        </ul>
      </div>
    </div>
    <div className="team-two__single-content">
      <h3 className="link-underline"><Link to={advogado.link}>{advogado.nome}</Link></h3>
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
