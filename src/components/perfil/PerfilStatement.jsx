/* Declaração tipográfica. Sem caixa, sem aspas decorativas e sem filete: aqui
   o destaque vem só da escala e do respiro, que é o registro editorial destas
   páginas — diferente da citação com filete dourado das páginas de área. */
const PerfilStatement = ({ children, tone = "plain" }) => (
  <section className={`perfil-statement perfil-statement--${tone}`}>
    <div className="perfil-statement__inner">
      <p className="perfil-statement__text">{children}</p>
    </div>
  </section>
);

export default PerfilStatement;
