import { Link } from "react-router-dom";
import { WHATSAPP_URL } from "../area/contact";

/* Fechamento discreto, em faixa clara. As páginas de área terminam num bloco
   escuro de conversão; num perfil isso soaria comercial demais, então aqui o
   convite é sóbrio e a hierarquia continua no conteúdo. `tone="plain"` usa
   fundo branco — útil quando a seção anterior já é subtle, como no Igor. */
const PerfilContato = ({ title, text, whatsapp, tone = "subtle" }) => (
  <section className={`perfil-contato perfil-contato--${tone}`}>
    <div className="perfil-contato__inner">
      <h2 className="perfil-contato__title">{title}</h2>
      {text && <p className="perfil-contato__text">{text}</p>}
      <div className="perfil-contato__actions">
        <a
          className="perfil-btn perfil-btn--solid"
          href={whatsapp || WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar pelo WhatsApp
        </a>
        <Link className="perfil-btn perfil-btn--ghost" to="/contato">
          Enviar uma mensagem
        </Link>
      </div>
    </div>
  </section>
);

export default PerfilContato;
