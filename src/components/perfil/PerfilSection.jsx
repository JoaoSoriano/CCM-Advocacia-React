/* Seção editorial: cabeçalho de duas colunas no desktop, com o título fixo à
   esquerda e o conteúdo à direita. É o que dá o ritmo de dossiê e distingue
   estas páginas das de área, onde o cabeçalho fica centralizado sobre a grade. */
const PerfilSection = ({ eyebrow, title, intro, tone = "plain", children }) => (
  <section className={`perfil-section perfil-section--${tone}`}>
    <div className="perfil-section__inner">
      {(eyebrow || title || intro) && (
        <header className="perfil-section__head">
          {eyebrow && <p className="perfil-eyebrow">{eyebrow}</p>}
          {title && <h2 className="perfil-section__title">{title}</h2>}
          {intro && <p className="perfil-section__intro">{intro}</p>}
        </header>
      )}
      <div className="perfil-section__body">{children}</div>
    </div>
  </section>
);

export default PerfilSection;
