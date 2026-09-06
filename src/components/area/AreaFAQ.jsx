/* Accordion em <details>/<summary> nativo: navegação por teclado, semântica de
   expansão e funcionamento sem JS vêm de graça. O atributo `name` fecha os
   demais itens ao abrir um; onde o navegador não suporta, todos podem ficar
   abertos e nada quebra. */
const Chevron = () => (
  <svg
    className="area-faq__chevron"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M6 9.5l6 6 6-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AreaFAQ = ({ items, name = "area-faq" }) => (
  <div className="area-faq">
    {items.map((item) => (
      <details className="area-faq__item" key={item.q} name={name}>
        <summary className="area-faq__q">
          <span>{item.q}</span>
          <Chevron />
        </summary>
        <div className="area-faq__a">
          <p>{item.a}</p>
        </div>
      </details>
    ))}
  </div>
);

export default AreaFAQ;
