import { Link } from "react-router-dom";
import { WHATSAPP_URL } from "./contact";

/* Quatro variantes para que áreas com conteúdo parecido não abram igual:
   `split` (texto e imagem lado a lado), `overlay` (imagem sangrando com o
   texto por cima), `panel` (texto num painel elevado sobre faixa de imagem) e
   `frame` (masthead travado na altura da tela).

   `tint` puxa a foto para a paleta quente do projeto — para fotos de estoque
   cuja dominante fria briga com o taupe da marca. */
const AreaHero = ({
  badge,
  title,
  lede,
  image,
  imageAlt,
  variant = "split",
  tint = false,
  primaryLabel = "Falar pelo WhatsApp",
  secondaryLabel = "Agendar uma consulta"
}) => (
  <section className={`area-hero area-hero--${variant}`}>
    {variant === "overlay" && image && (
      <div className="area-hero__bg" aria-hidden="true">
        <img src={image} alt="" decoding="async" fetchPriority="high" />
      </div>
    )}

    <div className="area-hero__inner">
      <div className="area-hero__copy">
        {badge && <p className="area-badge">{badge}</p>}
        <h1 className="area-hero__title">{title}</h1>
        {lede && <p className="area-hero__lede">{lede}</p>}

        <div className="area-hero__actions">
          <a
            className="area-btn area-btn--solid"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {primaryLabel}
          </a>
          <Link className="area-btn area-btn--ghost" to="/contato">
            {secondaryLabel}
          </Link>
        </div>
      </div>

      {variant !== "overlay" && image && (
        <figure
          className={`area-hero__media${tint ? " area-hero__media--warm" : ""}`}
        >
          <img src={image} alt={imageAlt} decoding="async" fetchPriority="high" />
        </figure>
      )}
    </div>
  </section>
);

export default AreaHero;
