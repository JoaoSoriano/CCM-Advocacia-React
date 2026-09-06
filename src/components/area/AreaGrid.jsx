/* Grade de cards. `bento` promove o primeiro item a tile largo e é o que dá o
   ar assimétrico; `even` mantém todos iguais; `compact` reduz o card para
   listas longas, onde ícone grande viraria ruído; `feature-pair` alarga os
   dois últimos itens para fechar a fileira. */
const AreaGrid = ({ items, variant = "even" }) => (
  <ul className={`area-grid area-grid--${variant}`}>
    {items.map((item) => (
      <li className="area-card" key={item.title}>
        {item.icon && (
          <span className="area-card__icon" aria-hidden="true">
            <i className={item.icon} />
          </span>
        )}
        <h3 className="area-card__title">{item.title}</h3>
        {item.text && <p className="area-card__text">{item.text}</p>}
        {item.items && (
          <ul className="area-card__list">
            {item.items.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

export default AreaGrid;
