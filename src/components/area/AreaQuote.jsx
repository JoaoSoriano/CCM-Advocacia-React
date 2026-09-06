/* Destaque para as frases de compromisso que fecham cada texto original. */
const AreaQuote = ({ children, tone = "dark" }) => (
  <figure className={`area-quote area-quote--${tone}`}>
    <blockquote className="area-quote__text">{children}</blockquote>
  </figure>
);

export default AreaQuote;
