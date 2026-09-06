/* Invólucro de seção: cuida de fundo, respiro vertical, largura máxima e do
   cabeçalho opcional. Todas as outras peças do kit vivem dentro dele, então o
   ritmo vertical das 12 páginas sai de um lugar só. */
const AreaSection = ({
  id,
  eyebrow,
  title,
  intro,
  tone = "plain",
  width = "wide",
  align = "left",
  children
}) => (
  <section
    id={id}
    className={`area-section area-section--${tone} area-section--${align}`}
  >
    <div className={`area-section__inner area-section__inner--${width}`}>
      {(eyebrow || title || intro) && (
        <header className="area-section__head">
          {eyebrow && <p className="area-eyebrow">{eyebrow}</p>}
          {title && <h2 className="area-section__title">{title}</h2>}
          {intro && <p className="area-section__intro">{intro}</p>}
        </header>
      )}
      {children}
    </div>
  </section>
);

export default AreaSection;
