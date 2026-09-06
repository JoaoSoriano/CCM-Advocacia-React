import { Link } from "react-router-dom";
import { WHATSAPP_URL } from "./contact";

/* Fechamento da página. O texto de cada área traz sua própria convocação, por
   isso título e apoio são sempre passados de fora em vez de fixados aqui. */
const AreaCTA = ({
  title,
  text,
  primaryLabel = "Falar pelo WhatsApp",
  secondaryLabel = "Enviar uma mensagem"
}) => (
  <section className="area-cta">
    <div className="area-cta__inner">
      <h2 className="area-cta__title">{title}</h2>
      {text && <p className="area-cta__text">{text}</p>}
      <div className="area-cta__actions">
        <a
          className="area-btn area-btn--light"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {primaryLabel}
        </a>
        <Link className="area-btn area-btn--ghost-light" to="/contato">
          {secondaryLabel}
        </Link>
      </div>
    </div>
  </section>
);

export default AreaCTA;
