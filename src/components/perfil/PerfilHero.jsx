/* Hero de retrato. `person` traz identidade e canais de contato ao lado da
   foto; `institution` derruba o retrato e alarga a imagem, para o Sobre Nós.

   Os canais são os mesmos publicados no card de cada sócio na home, e cada um
   só aparece quando existe — o Igor, por exemplo, não tem LinkedIn cadastrado. */
const canais = [
  { key: "instagram", icon: "fa-brands fa-instagram", label: "Instagram" },
  { key: "whatsapp", icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
  { key: "linkedin", icon: "fa-brands fa-linkedin-in", label: "LinkedIn" }
];

const PerfilHero = ({
  variant = "person",
  eyebrow,
  name,
  meta,
  lede,
  image,
  imageAlt,
  social = {}
}) => (
  <section className={`perfil-hero perfil-hero--${variant}`}>
    <div className="perfil-hero__inner">
      <figure className="perfil-hero__portrait">
        <img src={image} alt={imageAlt} decoding="async" />
      </figure>

      <div className="perfil-hero__copy">
        {eyebrow && <p className="perfil-eyebrow">{eyebrow}</p>}
        <h1 className="perfil-hero__name">{name}</h1>
        {meta && <p className="perfil-hero__meta">{meta}</p>}
        {lede && <p className="perfil-hero__lede">{lede}</p>}

        {canais.some((canal) => social[canal.key]) && (
          <ul className="perfil-social">
            {canais
              .filter((canal) => social[canal.key])
              .map((canal) => (
                <li key={canal.key}>
                  <a
                    href={social[canal.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${canal.label} de ${name}`}
                  >
                    <i className={canal.icon} aria-hidden="true" />
                  </a>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  </section>
);

export default PerfilHero;
