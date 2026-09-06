import { useId, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/advogados.css";
import larissaImg from "../img/Larissa_nova.jpg";
import igorImg from "../img/igor_nova.jpeg";
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

/* O "+" precisa ser botão com estado, não só `:hover` em CSS. No toque o
   navegador emula hover no primeiro tap e não desfaz a emulação num segundo tap
   sobre o mesmo elemento — só um scroll ou um tap fora limpavam, então o "x"
   abria e nunca fechava. O hover fica restrito a `@media (hover: hover)` e o
   toque passa a usar este estado. */
const AdvogadoCard = ({ advogado }) => {
  const [aberto, setAberto] = useState(false);
  const listaId = useId();

  return (
    <div className="team-two__single">
      <div className="team-two__single-overlay-bg"></div>
      <div className="team-two__single-img">
        <Link className="foto-link" to={advogado.link}>
          <img
            src={advogado.img}
            alt={advogado.nome}
            loading="lazy"
            decoding="async"
          />
        </Link>
        <div className={`social-share-box${aberto ? " is-open" : ""}`}>
          <button
            type="button"
            className="icon-plus"
            aria-expanded={aberto}
            aria-controls={listaId}
            aria-label={`Redes sociais de ${advogado.nome}`}
            onClick={() => setAberto((v) => !v)}
          >
            <img src={plusSvg} className="plus" alt="" decoding="async" />
          </button>
          <ul id={listaId}>
            {advogado.social.instagram && (
              <li>
                <a
                  href={advogado.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagramSvg}
                    className="social-icon"
                    alt={`Instagram de ${advogado.nome}`}
                  />
                </a>
              </li>
            )}
            {advogado.social.whatsapp && (
              <li>
                <a
                  href={advogado.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={wppSvg}
                    className="social-icon"
                    alt={`WhatsApp de ${advogado.nome}`}
                  />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Link className="team-two__single-content" to={advogado.link}>
        <h3>{advogado.nome}</h3>
        <p>{advogado.oab}</p>
      </Link>
    </div>
  );
};

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
